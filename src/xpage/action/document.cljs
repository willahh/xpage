(ns xpage.action.document
  (:require [cljs.tools.reader.edn :as edn]
            [xpage.state :refer [app-config
                                 document
                                 session-settings]]
            [xpage.ui.alert :as alert]
            [xpage.locale.fr :as locale]))

(defn zoom-in []
  (swap! session-settings update-in [:scale]
         (fn [scale]
           (+ scale (:zoom-step @app-config)))))

(defn zoom-out []
  (swap! session-settings update-in [:scale]
         (fn [scale]
           (- scale (:zoom-step @app-config)))))

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
    
    ;; TODO set this on a success callback
    (alert/success locale/document-save-success)))

(defn save-current-document []
  (save-document (:document-name @document)))



(comment
  (def document-name "document_a"))