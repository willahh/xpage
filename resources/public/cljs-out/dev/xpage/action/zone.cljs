(ns xpage.action.zone
  (:require [xpage.state :as state]))

(defn open-add-zone []
  (.modal (.$ js/window "#add-zone-modal") "show"))
