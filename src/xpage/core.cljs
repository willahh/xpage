(ns ^:figwheel-hooks xpage.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [garden.core :refer [css]]))

(println "This text is printed from src/xpage/core.cljs. Go ahead and edit it and see reloading in action.")

(defn multiply [a b] (* a b))



;; define your app data so that it doesn't get over-written on reload
(def app-state (atom {:text "Hello world!"
                      :scale 0.2
                      :page-width 210
                      :page-height 297
                      :page [{:page-id 1
                              :num 1 }
                             {:page-id 2
                              :num 2 }
                             {:page-id 3
                              :num 3 }
                             {:page-id 4
                              :num 4}
                             {:page-id 5
                              :num 5}]
                      :spread [{:spread-id 1
                                :page-id-list [1 2]}
                               {:spread-id 2
                                :page-id-list [3]}
                               ]}))

(defn get-app-element []
  (gdom/getElement "app"))

(defn toolbar-html []
  [:div.ui.buttons
   [:button.ui.labeled.icon.button
    [:i.left.chevron.icon] "Back"]
   [:button.ui.button
    [:i.stop.icon] "Stop"]
   [:button.ui.right.labeled.icon.button
    [:i.right.chevron.icon] "Forward"]])

(defn tools-html []
  [:div.ui.vertical.labeled.icon.buttons.tools
   [:button.ui.button
    [:i.location.arrow.icon]]
   [:button.ui.button
    [:i.location.arrow.icon]]])

(defn spread-html [pages]
  [:div.spread
   [:div.spread-inner
    (map (fn [page]
           page)
         pages)]])

(defn page-html [page-row]
  [:div.page {:style {:width (:page-width @app-state)
                      :height (:page-height @app-state)}} (str "page " (:num page-row))])

(defn document-html []
  [:div.document
   (for [spread (:spread @app-state)]
     (spread-html
      (let [page-id-list (:page-id-list spread)]
        (for [page-id page-id-list]
          (page-html
           (let [page-row-list (filter #(= (:page-id %) page-id) (:page @app-state))]
             page-row-list))))))])

(defn hello-world []
  [:div
   (tools-html) 
   (document-html)])

(defn mount [el]
  (reagent/render-component [hello-world] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
