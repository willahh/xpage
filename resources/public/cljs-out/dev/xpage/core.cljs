(ns ^:figwheel-hooks xpage.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [garden.core :refer [css]]))

(println "This text is printed from src/xpage/core.cljs. Go ahead and edit it and see reloading in action.")

(defn multiply [a b] (* a b))

(def app-config {:zoom-step 0.1})

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "Hello world!"
                          :scale 0.6
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
                                   ]
                          :zone [{:zone-id 1
                                  :page-id 2
                                  :bounding-box
                                  {:top 0 :left 0 :width 50 :height 25}}]}))

(defn apply-current-scale-to-value [value]
  (* value (:scale @app-state)))

(defn zoom-in []
  (swap! app-state update-in [:scale] (fn [scale]
                                        (+ scale (:zoom-step app-config)))))

(defn zoom-out []
  (swap! app-state update-in [:scale] (fn [scale]
                                        (- scale (:zoom-step app-config)))))

(defn get-app-element []
  (gdom/getElement "app"))

(defn toolbar-html []
  [:div.toolbar
   [:input {:type "range" :id "range" :name "range" :value 20 :min 0 :max 100 :step 10}]
   [:button.ui.button {:on-click #(zoom-in)} "+"]
   [:button.ui.button {:on-click #(zoom-out)} "-"]
   (comment 
     [:div.ui.buttons
      [:button.ui.labeled.icon.button
       [:i.left.chevron.icon] "Back"]
      [:button.ui.button
       [:i.stop.icon] "Stop"]
      [:button.ui.right.labeled.icon.button
       [:i.right.chevron.icon] "Forward"]
      ])])

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



(defn zone-html [zone-row]
  (let [page-row 1
        boundary (:bounding-box zone-row)]
    [:div.zone {:style {:top (/ (apply-current-scale-to-value (* (:page-height @app-state) (:top boundary))) 100)
                        :left (/ (apply-current-scale-to-value (* (:page-width @app-state) (:left boundary))) 100)
                        :width (/ (apply-current-scale-to-value (* (:page-width @app-state) (:width boundary))) 100)
                        :height (/ (apply-current-scale-to-value (* (:page-height @app-state) (:height boundary))) 100)}}]))

(defn page-html [page-row]
  [:div.page {:style {:width (apply-current-scale-to-value (:page-width @app-state))
                      :height (apply-current-scale-to-value (:page-height @app-state))}}
   [:div.zones
    (zone-html (first (:zone @app-state)))]])

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
   (toolbar-html)
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












