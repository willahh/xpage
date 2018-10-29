(ns xpage.ui.document
  (:require [xpage.state :refer [document]]
            [xpage.ui.spread :refer [spread-html]]
            [xpage.ui.page :refer [page-html]]))

(defn document-html []
  [:div.document
   (doall
    (for [spread (:spread @document)]
      (spread-html
       (:spread-id spread)
       (let [page-id-list (:page-id-list spread)]
         (doall
          (for [page-id page-id-list]
            (page-html
             (first
              (let [page-record-list (filter #(= (:page-id %) page-id)
                                             (:page @document))]
                page-record-list)))))))))])