(ns xpage.state
  (:require [reagent.core :as reagent :refer [atom]]))

(def app-config {:zoom-step 0.1})
(def document (atom {}))
(def document-list (atom []))
