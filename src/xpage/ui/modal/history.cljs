(ns xpage.ui.modal.history
  (:require [xpage.ui.modal.modal :refer [modal-html]]
            [xpage.state :as state]
            [xpage.action.zone :as zone]))

(def modal-id "modal-history")

(defn- history-row-info [history-row]
  {:id (rand-int 9999999999)
   :page-count (-> history-row :page count)
   :zone-count (-> history-row :zone count)
   :layer-count (-> history-row :layer count)})

(defn modal-history-html []  
  (let [title "History"
        id modal-id
        history-info-map (map history-row-info (:entries @state/document-history))
        content-html
        [:div.inner {:style {:height "calc(100vh - 157px)" :overflow "auto"}}
         [:form.ui {:style {:padding "10px"}}
          [:table.ui.very.basic.table
           [:thead
            [:tr
             [:th "id"]
             [:th "page-count"]
             [:th "zone-count"]
             [:th "layer-count"]]]
           [:tbody
            (map (fn [m]
                   [:tr {:key (:id m)}
                    [:td ""]
                    [:td (:page-count m)]
                    [:td (:zone-count m)]
                    [:td (:layer-count m)]])
                 history-info-map)]]]]]
    (modal-html title id content-html
                :className "a"
                :style {:max-height "calc(100vh - 60px)"}))) 

(defn open []
  (.modal (.$ js/window (str"#" modal-id)) "show"))

(defn close []
  (.modal (.$ js/window (str"#" modal-id)) "hide"))
