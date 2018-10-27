(ns xpage.ui
  (:require [xpage.state :refer [app-config
                                 document
                                 document-list]]
            [xpage.dao :as dao]))

(defn open-add-zone []
  (.modal (.$ js/window "#add-zone-modal") "show"))

(defn scale-value [value]
  (-> value
      (* (:scale @document))))

(defn zoom-in []
  (swap! document update-in [:scale] (fn [scale]
                                       (+ scale (:zoom-step app-config)))))

(defn zoom-out []
  (swap! document update-in [:scale] (fn [scale]
                                       (- scale (:zoom-step app-config)))))

(defn tools-html []
  [:div.tools
   [:div.ui.vertical.icon.buttons
    [:button.ui.button 
     [:i.icon.location.arrow]]
    [:button.ui.button {:on-click #(zoom-in)}
     [:i.icon.zoom.in]]
    [:button.ui.button {:on-click #(zoom-out)}
     [:i.icon.zoom.out]]]])

(defn main-toolbar-html []
  [:div.ui.menu.mini.main-toolbar

   [:div.item
    [:div.ui.dropdown
     [:div.text "Fichier"]
     [:i.dropdown.icon]
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
      [:button.item "Enregistrer"]]]]
   
   (comment 
     [:div.item 
      [:div.ui.dropdown
       [:div.text "Fichier"]
       [:i.dropdown.icon]
       [:div.menu
        (map (fn [doc-name]
               [:button.item {:on-click
                              (fn [event]
                                (let [document-name event.target.innerHTML]
                                  (dao/fetch-document-and-update document document-name)))}
                doc-name])
             @document-list)]]])])

(defn spread-html [spread-id pages]
  [:div.spread
   {:key spread-id}
   [:div.spread-inner
    (map identity pages)]])

(defn zone-html [zone-record]
  (let [page-record 1
        boundary (:bounding-box zone-record)]
    [:div.zone {:key (:zone-id zone-record)
                :style {:top (/ (scale-value
                                 (* (:page-height @document) (:top boundary))) 100)
                        :left (/ (scale-value
                                  (* (:page-width @document) (:left boundary))) 100)
                        :width (/ (scale-value
                                   (* (:page-width @document) (:width boundary))) 100)
                        :height (/ (scale-value
                                    (* (:page-height @document) (:height boundary))) 100)}}]))


(defn page-html [page-record]
  [:div.page {:key (:page-id page-record)
              :style {:width (scale-value (:page-width @document))
                      :height (scale-value (:page-height @document))}}
   [:div.zones
    (let [page-id (:page-id page-record)
          zone-record-list (dao/zone-list-from-page-id page-id)]
      (doall
       (map zone-html zone-record-list)))]])

(defn document-html []
  [:div.document
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
                            page-record-list)))))))))])