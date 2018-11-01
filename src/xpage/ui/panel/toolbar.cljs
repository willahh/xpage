(ns xpage.ui.panel.toolbar
  (:require [xpage.state :refer [document
                                 document-list]]
            [xpage.model.dao :as dao]
            [xpage.action.document :refer [save-current-document]]
            [xpage.action.zone :refer [open-add-zone]]
            [xpage.action.history :refer [open-history-modal]]))

(defn main-toolbar-html []
  [:div.ui.menu.mini.main-toolbar
   [:div.item (:document-name @document)] 
   [:div.item
    [:div.ui.dropdown
     [:div.text "Fichier"]
     [:i.icon.dropdown]
     [:div.menu
      [:button.item "Nouveau"]
      [:div.item "Ouvrir"
       [:i.dropdown.icon]
       [:div.menu
        (map (fn [doc-name]
               [:button.item {:key doc-name
                              :on-click
                              (fn [event]
                                (let [document-name event.target.innerHTML]
                                  (dao/fetch-document-and-update document document-name)))}
                doc-name])
             @document-list)]]
      [:button.item {:on-click #(save-current-document)} "Enregistrer"]]]]

   [:div.item
    [:div.ui.dropdown
     [:div.text "Edition"]
     [:i.icon.dropdown]
     [:div.menu
      [:div.item "Annuler"]
      [:div.item "Rétablir"]
      [:div.item {:on-click #(open-history-modal)} "Historique"]]]]

   [:div.item
    [:div.ui.dropdown
     [:div.text "Page"]
     [:i.icon.dropdown]
     [:div.menu
      ]]]

   [:div.item
    [:div.ui.dropdown
     [:div.text "Zone"]
     [:i.icon.dropdown]
     [:div.menu
      [:button.item {:on-click #(open-add-zone)} "Nouvelle zone"]
      ]]]
   
   ])