(ns xpage.ui.spread
  (:require [xpage.state :as state]
            [xpage.action.zone :as zone]))

(defn spread-html [spread-id page-html-list]
  [:div.spread
   {:key spread-id
    :on-click #(zone/deselect-zone)}
   [:div.spread-inner
    (map identity page-html-list)]])