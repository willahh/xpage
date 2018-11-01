(ns xpage.ui.main
  (:require [xpage.ui.document :refer [document-html]]
            [xpage.ui.modal.modals :refer [modals-html]]
            [xpage.ui.panel.info :refer [info-html]]
            [xpage.ui.panel.panels :refer [panels-html]]
            [xpage.ui.panel.toolbar :refer [main-toolbar-html]]
            [xpage.ui.panel.tools :refer [tools-html]]))

(defn main-html []
  [:div.main
   (tools-html)
   (main-toolbar-html)
   (document-html)
   (modals-html)
   (info-html)
   (panels-html)])
