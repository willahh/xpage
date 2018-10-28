// Compiled by ClojureScript 1.10.339 {}
goog.provide('xpage.ui.xinterface');
goog.require('cljs.core');
goog.require('xpage.state');
goog.require('xpage.dao');
goog.require('xpage.action.document');
goog.require('xpage.action.zone');
goog.require('xpage.action.page');
xpage.ui.xinterface.tools_class_name = (function xpage$ui$xinterface$tools_class_name(tool_active_kw,class_name){
var active_class_name = ((cljs.core._EQ_.call(null,tool_active_kw,new cljs.core.Keyword(null,"tool-active","tool-active",-1113689054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.session_settings))))?" active":null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_class_name)].join('');
});
xpage.ui.xinterface.tools_html = (function xpage$ui$xinterface$tools_html(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tools","div.tools",383588368),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.vertical.icon.buttons","div.ui.vertical.icon.buttons",-370295191),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),xpage.ui.xinterface.tools_class_name.call(null,new cljs.core.Keyword("xpage.ui.tools","pointer","xpage.ui.tools/pointer",784475707),"ui button"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return xpage.action.page.pointer_tool.call(null);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.location.arrow","i.icon.location.arrow",2062194052)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),xpage.ui.xinterface.tools_class_name.call(null,new cljs.core.Keyword("xpage.ui.tools","hand","xpage.ui.tools/hand",-583081979),"ui button")], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.hand.paper.outline","i.icon.hand.paper.outline",5337751)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),xpage.ui.xinterface.tools_class_name.call(null,new cljs.core.Keyword("xpage.ui.tools","zoom-in","xpage.ui.tools/zoom-in",-1218825123),"ui button"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return xpage.action.document.zoom_in.call(null);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.zoom.in","i.icon.zoom.in",1634210385)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),xpage.ui.xinterface.tools_class_name.call(null,new cljs.core.Keyword("xpage.ui.tools","zoom-in","xpage.ui.tools/zoom-in",-1218825123),"ui button"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return xpage.action.document.zoom_out.call(null);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.zoom.out","i.icon.zoom.out",-157815918)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),xpage.ui.xinterface.tools_class_name.call(null,new cljs.core.Keyword("xpage.ui.tools","rectangle","xpage.ui.tools/rectangle",994661942),"ui button"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return xpage.action.page.rectangle_tool.call(null);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.square.outline","i.icon.square.outline",104425524)], null)], null)], null)], null);
});
xpage.ui.xinterface.main_toolbar_html = (function xpage$ui$xinterface$main_toolbar_html(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.menu.mini.main-toolbar","div.ui.menu.mini.main-toolbar",213581405),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.Keyword(null,"document-name","document-name",-591850874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.dropdown","div.ui.dropdown",-1410510465),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text","div.text",645060726),"Fichier"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.dropdown","i.icon.dropdown",-1422923240)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu","div.menu",-175336694),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.item","button.item",-191482662),"Nouveau"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),"Ouvrir",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.dropdown.icon","i.dropdown.icon",441444121)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu","div.menu",-175336694),cljs.core.map.call(null,(function (doc_name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.item","button.item",-191482662),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
var document_name = event.target.innerHTML;
return xpage.dao.fetch_document_and_update.call(null,xpage.state.document,document_name);
})], null),doc_name], null);
}),cljs.core.deref.call(null,xpage.state.document_list))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.item","button.item",-191482662),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return xpage.action.document.save_current_document.call(null);
})], null),"Enregistrer"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.dropdown","div.ui.dropdown",-1410510465),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text","div.text",645060726),"Edition"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.dropdown","i.icon.dropdown",-1422923240)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu","div.menu",-175336694),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),"Annuler"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),"R\u00E9tablir"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.dropdown","div.ui.dropdown",-1410510465),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text","div.text",645060726),"Page"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.dropdown","i.icon.dropdown",-1422923240)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu","div.menu",-175336694)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.dropdown","div.ui.dropdown",-1410510465),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text","div.text",645060726),"Zone"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.dropdown","i.icon.dropdown",-1422923240)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu","div.menu",-175336694),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.item","button.item",-191482662),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return xpage.action.zone.open_add_zone.call(null);
})], null),"Nouvelle zone"], null)], null)], null)], null)], null);
});

//# sourceMappingURL=xinterface.js.map
