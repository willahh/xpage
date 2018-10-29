(ns xpage.ui.panel.page-panel
  (:require [xpage.state :refer [app-config
                                 document
                                 document-list
                                 session-settings]]
            [xpage.model.document-model :refer [add-page-record]]))

(defn scale-value [value]
  (-> value
      (* 0.1)))

(defn page-html [page-record]
  [:div.page {:key (:page-id page-record)
              }
   [:div.page-inner {:style {:width (scale-value (:page-width @document))
                             :height (scale-value (:page-height @document))}}]
   [:div.label (:num page-record)]])

(defn spread-html [spread-id pages]
  [:div.spread
   {:key spread-id}
   [:div.spread-inner
    (map identity pages)]])

(defn spreads-html []
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
                           page-record-list))))))))))

(defn page-panel-html []
  [:div.ui.card.page-panel
   [:div.content (spreads-html)]
   [:div.ui.bottom.attached.buttons
    [:button.ui.button {:on-click #(add-page-record)}
     [:i.icon.add]]]])









