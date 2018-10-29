(ns xpage.ui.page
  (:require [xpage.state :refer [document
                                 session-settings]]
            [xpage.model.dao :as dao]
            [xpage.ui.zone :refer [zone-html]]))

(defn scale-value [value]
  (-> value
      (* (:scale @session-settings))))

(defn page-html [page-record]
  [:div.page {:key (:page-id page-record)
              :style {:width (scale-value (:page-width @document))
                      :height (scale-value (:page-height @document))}}
   [:div.zones
    (let [page-id (:page-id page-record)
          zone-record-list (dao/zone-list-from-page-id page-id)]
      (doall
       (map zone-html zone-record-list)))]])