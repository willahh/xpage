(ns xpage.ui.zone
  (:require [xpage.state :refer [document
                                 session-settings]]))

(defn scale-value [value]
  (-> value
      (* (:scale @session-settings))))

(defn zone-html [zone-record]
  (let [page-record 1
        boundary (:bounding-box zone-record)]
    [:div.zone
     {:key (:zone-id zone-record)
      :style {:top (/ (scale-value
                       (* (:page-height @document) (:top boundary))) 100)
              :left (/ (scale-value
                        (* (:page-width @document) (:left boundary))) 100)
              :width (/ (scale-value
                         (* (:page-width @document) (:width boundary))) 100)
              :height (/ (scale-value
                          (* (:page-height @document) (:height boundary))) 100)}}]))

