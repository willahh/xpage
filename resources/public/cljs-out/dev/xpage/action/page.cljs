(ns xpage.action.page
  (:require [xpage.state :refer [app-config
                                 document
                                 session-settings]]))

(defn pointer-tool []
  "Use the pointer tool"
  (swap! session-settings update-in [:tool-active]
         (fn []
           :xpage.ui.tools/pointer)))

(defn rectangle-tool []
  "Use the rectangle tool"
  (swap! session-settings update-in [:tool-active]
         (fn [] :xpage.ui.tools/rectangle)))
