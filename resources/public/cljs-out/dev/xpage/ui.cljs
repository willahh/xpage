(ns xpage.ui
  (:require [xpage.state :refer [app-config
                                 document
                                 document-list
                                 session-settings]]
            [xpage.dao :as dao]
            [xpage.ui.xinterface :refer [tools-html main-toolbar-html]]
            [xpage.action.zone :refer [open-add-zone]]
            [xpage.action.document :refer [zoom-in zoom-out]]))

(defn scale-value [value]
  (-> value
      (* (:scale @session-settings))))

(defn spread-html [spread-id pages]
  [:div.spread
   {:key spread-id}
   [:div.spread-inner
    (map identity pages)]])

(defn zone-html [zone-record]
  (let [page-record 1
        boundary (:bounding-box zone-record)]
    [:div.zone {:key (:zone-id zone-record)
                :style {:top (/ (scale-value
                                 (* (:page-height @document) (:top boundary))) 100)
                        :left (/ (scale-value
                                  (* (:page-width @document) (:left boundary))) 100)
                        :width (/ (scale-value
                                   (* (:page-width @document) (:width boundary))) 100)
                        :height (/ (scale-value
                                    (* (:page-height @document) (:height boundary))) 100)}}]))


(defn page-html [page-record]
  [:div.page {:key (:page-id page-record)
              :style {:width (scale-value (:page-width @document))
                      :height (scale-value (:page-height @document))}}
   [:div.zones
    (let [page-id (:page-id page-record)
          zone-record-list (dao/zone-list-from-page-id page-id)]
      (doall
       (map zone-html zone-record-list)))]])

(defn document-html []
  [:div.document
   (doall
    (for [spread (:spread @document)]
      (spread-html (:spread-id spread)
                   (let [page-id-list (:page-id-list spread)]
                     (doall
                      (for [page-id page-id-list]
                        (page-html
                         (first
                          (let [page-record-list (filter #(= (:page-id %) page-id)
                                                         (:page @document))]
                            page-record-list)))))))))])