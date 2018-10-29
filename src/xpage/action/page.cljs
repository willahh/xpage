(ns xpage.action.page
  (:require [xpage.state :refer [app-config
                                 document
                                 session-settings]]
            [xpage.model.document-model :as document-model]))

(defn pointer-tool []
  "Use the pointer tool"
  (swap! session-settings update-in [:tool-active]
         (fn []
           :xpage.constant.tool/pointer)))

(defn rectangle-tool []
  "Use the rectangle tool"
  (swap! session-settings update-in [:tool-active]
         (fn [] :xpage.constant.tool/rectangle)))
