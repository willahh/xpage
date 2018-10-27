(ns ^:figwheel-hooks xpage.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [xpage.component.modal :as modal]
   [cljs.tools.reader.edn :as edn]
   [xpage.state :refer [app-config
                        document
                        document-list]]
   [xpage.ui :as ui]
   [xpage.dao :as dao]))

(defn multiply [a b] (* a b))

(defn open-add-zone []
  (.modal (.$ js/window "#add-zone-modal") "show"))

(defn get-app-element []
  (gdom/getElement "app"))

(defn main-html []
  [:div
   (modal/modal-html "Title"
                     "add-zone-modal"
                     [:div "Contenu"]
                     [[:div.ui.button {:key "a"
                                       :on-click (fn [event]
                                                   (.modal (.$ js/window "#add-zone-modal") "hide"))}
                       "Cancel"]
                      [:div.ui.button {:key "b"}
                       "OK"]])
   ;; (ui/toolbar-html)
   (ui/tools-html)
   (ui/main-toolbar-html)
   (ui/document-html)])

(defn init []
  (dao/fetch-document-and-update document "document_a")
  (dao/fetch-document-list-and-update document-list)
  (.ready (js/$) (fn []
                   (.dropdown (js/$ ".ui.dropdown")))))

(init)

(defn mount [el]
  (reagent/render-component [main-html] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(mount-app-element)

(defn ^:after-load on-reload []
  (mount-app-element))
















(comment
  (def page-record (second (:page @document)))
  (def zone-record (first (:zone @document)))
  (def doc-name "document_a")

  ;; Zone list from page-id
  (let [page-id (:page-id page-record)]
    (zone-list-from-page-id page-id))


  ;; zone-html rom page-id
  (let [page-id (:page-id page-record)
        zone-list (zone-list-from-page-id page-id)]
    (map zone-html zone-list))



  )




