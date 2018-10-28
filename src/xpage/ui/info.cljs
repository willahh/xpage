(ns xpage.ui.info
  (:require [xpage.state :refer [app-config
                                 document
                                 document-list
                                 session-settings
                                 js-event-info]]))

(defn info-html []
  [:div.info
   "info"
   [:span.item.x "x: " (:screen-x @js-event-info)]
   [:span.item.y "y: " (:screen-y @js-event-info)]])
