(ns xpage.model.dao
  (:require [cljs.tools.reader.edn :as edn] 
            [xpage.state :refer [app-config
                                 document
                                 document-list]]))

(defn fetch [url success-fn & failure-fn]
  "JS fetch with url success function and optional failure function."
  (.then (js/fetch url)
         (fn [response]
           (.then
            (.text response)
            (fn [text]
              (success-fn text))))))

(defn fetch-document-and-update [document doc-name]
  "Fetch a new document and swap the current document."
  (fetch (str "http://localhost:9500/api/document/" doc-name)
         (fn [text]
           (reset! document (edn/read-string text)))))

(defn fetch-document-list-and-update [document-list]
  "Fetch a list of docments."
  (fetch "http://localhost:9500/api/documents"
         (fn [text]
           (reset! document-list (edn/read-string text)))))

(defn zone-list-from-page-id [page-id]
  (filter #(= (:page-id %) page-id)
          (:zone @document)))