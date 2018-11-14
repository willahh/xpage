(ns xpage.helper.tools
  (:require [xpage.state :as state]))

(defn is-tool-active [tool-name]
  (= (:tool-active @state/session-settings)
     tool-name))

