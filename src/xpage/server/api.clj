(ns xpage.server.api
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [clojure.edn :as edn]
            [xpage.locale.fr :as fr]))

(defn retrieve-document [doc-name]
  "Retrieve a document edn file content"
  (slurp (str "data/" doc-name ".edn")))

(defroutes app
  (GET "/api/document/:doc-name" [doc-name]
       (retrieve-document doc-name))
  (POST "/api/document/:document-name/save" [document document-name]
        (let [document-edn (edn/read-string (slurp (:tempfile document)))]
          (do (spit (str "data/" document-name ".edn") document-edn)
              (pr-str {:success true
                       :message fr/document-save-success}))))
  (GET "/api/documents" []
       (let [docu-name-w-extension (map identity (.list (io/file "data")))
             docu-name (map #(str/replace % ".edn" "")
                            docu-name-w-extension)
             docu-name-list-string (str (into []  docu-name))]
         docu-name-list-string)))

(def ring-handler app)







(comment
  (edn/read-string strtmp)





  (let [docu-name-w-extension (map identity (.list (io/file "data")))
        docu-name (map #(str/replace % ".edn" "")
                       docu-name-w-extension)
        docu-name-list-string (str (into []  docu-name))]
    docu-name-list-string)





  )
