(ns xpage.ui.panel.info
  (:require [xpage.state :refer [js-event-info]]))

(defn info-html []
  [:div.info
   "info"
   [:span.item.x "x: " (:screen-x @js-event-info)]
   [:span.item.y "y: " (:screen-y @js-event-info)]])
