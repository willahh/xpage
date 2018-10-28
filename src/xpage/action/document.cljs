(ns xpage.action.document
  (:require [xpage.state :refer [app-config
                                 document]]
            [cljs.tools.reader.edn :as edn]))

(defn zoom-in []
  (swap! document update-in [:scale] (fn [scale]
                                       (+ scale (:zoom-step app-config)))))

(defn zoom-out []
  (swap! document update-in [:scale] (fn [scale]
                                       (- scale (:zoom-step app-config)))))

(defn save-document [document-name]
  (let [form-data (js/FormData.)
        url (str "http://localhost:9500/api/document/" document-name "/save")
        blob (js/Blob. [(str @document)])
        request (js/XMLHttpRequest.)]
    (.append form-data "document" blob)
    (comment 
      (.onreadystatechange request
                           (fn []
                             (js/console.log "ready"))))
    (.open request "POST" url)
    (.send request form-data)
    ))

(defn save-current-document []
  (save-document (:document-name @document)))



(comment
  (def document-name "document_a"))