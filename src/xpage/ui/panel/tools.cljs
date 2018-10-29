(ns xpage.ui.panel.tools
  (:require [xpage.state :refer [session-settings]]
            [xpage.action.document :as document]
            [xpage.action.page :refer [pointer-tool rectangle-tool]]))

(def pointer ::pointer)
(def hand ::hand)
(def zoom-in ::zoom-in)
(def zoom-out ::zoom-out)
(def rectangle ::rectangle)

(defn- tools-class-name [tool-active-kw class-name]
  (let [active-class-name
        (when (= tool-active-kw (:tool-active @session-settings))
          " active")]
    (str class-name active-class-name)))



(defn tools-html []
  "Tools panel which contains main navigation tools like pointer hand zoom ..."
  [:div.tools
   [:div.ui.vertical.icon.buttons
    [:button {:className (tools-class-name :xpage.constant.tool/pointer "ui button")
              :on-click #(pointer-tool)
              :data-tooltip "a"}
     [:i.icon.location.arrow]]
    [:button {:className (tools-class-name :xpage.constant.tool/hand "ui button")}
     [:i.icon.hand.paper.outline]]
    [:button {:className (tools-class-name :xpage.constant.tool/zoom-in "ui button") :on-click #(document/zoom-in)}
     [:i.icon.zoom.in]]
    [:button {:className (tools-class-name :xpage.constant.tool/zoom-in "ui button")
              :on-click #(document/zoom-out)}
     [:i.icon.zoom.out]]
    [:button {:className (tools-class-name :xpage.constant.tool/rectangle "ui button")
              :on-click #(rectangle-tool)}
     [:i.icon.square.outline]]]])

