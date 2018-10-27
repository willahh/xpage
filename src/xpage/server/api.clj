(ns xpage.server.api
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [clojure.string :as str]))

(defn document [doc-name]
  (slurp (str "data/" doc-name ".edn")))

(defroutes app
  (GET "/api/document/:doc-name" [doc-name]
       (document doc-name))
  (GET "/api/documents" []
       (let [docu-name-w-extension (map identity (.list (io/file "data")))
             docu-name (map #(str/replace % ".edn" "")
                            docu-name-w-extension)
             docu-name-list-string (str (into []  docu-name))]
         docu-name-list-string)))

(def ring-handler app)






(comment

  (let [docu-name-w-extension (map identity (.list (io/file "data")))
        docu-name (map #(str/replace % ".edn" "")
                       docu-name-w-extension)
        docu-name-list-string (str (into []  docu-name))]
    docu-name-list-string)





  )