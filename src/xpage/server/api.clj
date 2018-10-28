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

  (def strtmp "{:text \"Hello world!\", :scale 0.5, :page-width 210, :page-height 297, :page [{:page-id 1, :num 1} {:page-id 2, :num 2} {:page-id 3, :num 3} {:page-id 4, :num 4} {:page-id 5, :num 5}], :spread [{:spread-id 1, :page-id-list [1 2]} {:spread-id 2, :page-id-list [3]}], :zone [{:zone-id 1, :page-id 2, :bounding-box {:top 0, :left 0, :width 20, :height 10}} {:zone-id 2, :page-id 2, :bounding-box {:top 30, :left 25, :width 10, :height 10}} {:zone-id 3, :page-id 2, :bounding-box {:top 60, :left 0, :width 10, :height 10}} {:zone-id 4, :page-id 1, :bounding-box {:top 1, :left 1, :width 19, :height 19}}]}")

  (edn/read-string strtmp)





  (let [docu-name-w-extension (map identity (.list (io/file "data")))
        docu-name (map #(str/replace % ".edn" "")
                       docu-name-w-extension)
        docu-name-list-string (str (into []  docu-name))]
    docu-name-list-string)





  )
