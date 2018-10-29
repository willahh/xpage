(ns xpage.ui.zone
  (:require [xpage.state :as state :refer [document
                                           session-settings
                                           js-event-info]]
            [xpage.action.zone :as zone]))

(defn scale-value [value]
  (-> value
      (* (:scale @session-settings))))

(defn zone-class-name [zone-id]
  (str "zone" (when (some #{zone-id}
                          (:selected-zone-id-list @session-settings))
                " active")))

(defn zone-html [zone-record]
  (let [page-record 1
        zone-id (:zone-id zone-record)
        boundary (:bounding-box zone-record)
        className (zone-class-name zone-id)]
    [:div
     {:key (:zone-id zone-record)
      :className className
      :on-click (fn [event]
                  (.stopPropagation event)
                  (zone/select-zone zone-id))
      ;; #(select-zone zone-id)
      :style {:top (/ (scale-value
                       (* (:page-height @document) (:top boundary))) 100)
              :left (/ (scale-value
                        (* (:page-width @document) (:left boundary))) 100)
              :width (/ (scale-value
                         (* (:page-width @document) (:width boundary))) 100)
              :height (/ (scale-value
                          (* (:page-height @document) (:height boundary))) 100)}}]))


(comment
  (def zone-record (first (:zone @document)))
  (def zone-id 1))

