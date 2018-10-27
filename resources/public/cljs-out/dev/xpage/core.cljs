(ns ^:figwheel-hooks xpage.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [xpage.component.modal :as modal]
   [cljs.tools.reader.edn :as edn]))

(println "This text is printed from src/xpage/core.cljs. Go ahead and edit it and see reloading in action.")

(defn multiply [a b] (* a b))

(def app-config {:zoom-step 0.1})
(def document (atom {}))

(defn fetch-document-and-update [doc doc-name]
  (.then (js/fetch (str "http://localhost:9500/api/document/" doc-name))
         (fn [response]
           (.then
            (.text response)
            (fn [text]
              (reset! document (edn/read-string text)))))))

(fetch-document-and-update document "document_a")


(defn zone-list-from-page-id [page-id]
  (filter #(= (:page-id %) page-id)
          (:zone @document)))

(defn apply-current-scale-to-value [value]
  (* value (:scale @document)))

(defn zoom-in []
  (swap! document update-in [:scale] (fn [scale]
                                       (+ scale (:zoom-step app-config)))))

(defn zoom-out []
  (swap! document update-in [:scale] (fn [scale]
                                       (- scale (:zoom-step app-config)))))

(defn open-add-zone []
  (.modal (.$ js/window "#add-zone-modal") "show"))

(defn get-app-element []
  (gdom/getElement "app"))

(defn toolbar-html []
  [:div.toolbar
   [:input {:type "range" :on-change (fn [m]
                                       m)
            :id "range" :name "range" :value 20 :min 0 :max 100 :step 10}]
   [:button.ui.button {:on-click #(zoom-in)} "+"]
   [:button.ui.button {:on-click #(zoom-out)} "-"]
   [:button.ui.button {:on-click #(open-add-zone)} "add z"]
   [:div.ui.buttons
    [:button.ui.labeled.icon.button
     [:i.left.chevron.icon] "Back"]
    [:button.ui.button
     [:i.stop.icon] "Stop"]
    [:button.ui.right.labeled.icon.button
     [:i.right.chevron.icon] "Forward"]]])

(defn tools-html []
  [:div.ui.vertical.labeled.icon.buttons.tools
   [:button.ui.button
    [:i.location.arrow.icon]]
   [:button.ui.button
    [:i.location.arrow.icon]]])

(defn spread-html [spread-id pages]
  [:div.spread
   {:key spread-id}
   [:div.spread-inner
    (map identity pages)]])

(defn zone-html [zone-record]
  (let [page-record 1
        boundary (:bounding-box zone-record)]
    [:div.zone {:key (:zone-id zone-record)
                :style {:top (/ (apply-current-scale-to-value
                                 (* (:page-height @document (:top boundary)))) 100)
                        :left (/ (apply-current-scale-to-value
                                  (* (:page-width @document) (:left boundary))) 100)
                        :width (/ (apply-current-scale-to-value
                                   (* (:page-width @document) (:width boundary))) 100)
                        :height (/ (apply-current-scale-to-value
                                    (* (:page-height @document) (:height boundary))) 100)}}]))

(defn page-html [page-record]
  [:div.page {:key (:page-id page-record)
              :style {:width (apply-current-scale-to-value (:page-width @document))
                      :height (apply-current-scale-to-value (:page-height @document))}}
   [:div.zones
    (let [page-id (:page-id page-record)
          zone-record-list (zone-list-from-page-id page-id)]
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

(defn hello-world []
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
   (toolbar-html)
   (tools-html)
   (document-html)])

(defn mount [el]
  (reagent/render-component [hello-world] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(mount-app-element)

(defn ^:after-load on-reload []
  (mount-app-element))
















(comment
  (def page-record (second (:page @document)))
  (def zone-record (first (:zone @document)))
  
  
  ;; Zone list from page-id
  (let [page-id (:page-id page-record)]
    (zone-list-from-page-id page-id))
  
  
  ;; zone-html rom page-id
  (let [page-id (:page-id page-record)
        zone-list (zone-list-from-page-id page-id)]
    (map zone-html zone-list))
  
  
  
  )




