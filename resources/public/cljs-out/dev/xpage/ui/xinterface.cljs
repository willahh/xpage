(ns xpage.ui.xinterface
  (:require [xpage.state :refer [app-config
                                 document
                                 document-list
                                 session-settings]]
            [xpage.dao :as dao]
            [xpage.action.document :refer [zoom-in zoom-out save-current-document]]
            [xpage.action.zone :refer [open-add-zone]]
            [xpage.action.page :refer [pointer-tool rectangle-tool]]))

(defn- tools-class-name [tool-active-kw class-name]
  (let [active-class-name
        (when (= tool-active-kw (:tool-active @session-settings))
          " active")]
    (str class-name active-class-name)))

(defn tools-html []
  [:div.tools
   [:div.ui.vertical.icon.buttons
    [:button {:className (tools-class-name :xpage.ui.tools/pointer "ui button")
              :on-click #(pointer-tool)}
     [:i.icon.location.arrow]]
    [:button {:className (tools-class-name :xpage.ui.tools/hand "ui button")}
     [:i.icon.hand.paper.outline]]
    [:button {:className (tools-class-name :xpage.ui.tools/zoom-in "ui button") :on-click #(zoom-in)}
     [:i.icon.zoom.in]]
    [:button {:className (tools-class-name :xpage.ui.tools/zoom-in "ui button")
              :on-click #(zoom-out)}
     [:i.icon.zoom.out]]
    [:button {:className (tools-class-name :xpage.ui.tools/rectangle "ui button")
              :on-click #(rectangle-tool)}
     [:i.icon.square.outline]]]])

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
               [:button.item {:on-click
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
      [:div.item "Rétablir"]]]]

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