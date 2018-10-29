(ns xpage.ui.panel.layer-panel
  (:require [xpage.state :as state]))

(defn- layers-html []
  [:table.ui.selectable.table.layer
   [:tbody
    (map (fn [m]
           [:tr {:key (:layer-id m)}
            [:td.color {:style {:background-color (:color m)}}]
            [:td.name (:name m)]
            [:td.cb [:input {:type "checkbox"}]]])
         (:layer @state/document))]]
  )

(defn layer-panel-html []
  [:div.ui.card.layer-panel
   [:div.content
    (layers-html)]
   [:div.ui.bottom.attached.buttons
    [:button.ui.button 
     [:i.icon.add]]]])

