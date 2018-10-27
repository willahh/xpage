(ns xpage.server.api
  (:require [compojure.core :refer :all]
            [compojure.route :as route]))

(defn document [doc-name]
  (slurp (str "data/" doc-name ".edn")))

(defroutes app
  (GET "/api/document/:doc-name" [doc-name]
       (document doc-name)))

(def ring-handler app)