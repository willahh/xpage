// Compiled by ClojureScript 1.10.339 {}
goog.provide('xpage.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('xpage.component.modal');
goog.require('cljs.tools.reader.edn');
goog.require('xpage.state');
goog.require('xpage.ui');
goog.require('xpage.dao');
xpage.core.multiply = (function xpage$core$multiply(a,b){
return (a * b);
});
xpage.core.open_add_zone = (function xpage$core$open_add_zone(){
return window.$("#add-zone-modal").modal("show");
});
xpage.core.get_app_element = (function xpage$core$get_app_element(){
return goog.dom.getElement("app");
});
xpage.core.main_html = (function xpage$core$main_html(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),xpage.component.modal.modal_html.call(null,"Title","add-zone-modal",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Contenu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.button","div.ui.button",668900631),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"a",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
return window.$("#add-zone-modal").modal("hide");
})], null),"Cancel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.button","div.ui.button",668900631),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"b"], null),"OK"], null)], null)),xpage.ui.tools_html.call(null),xpage.ui.main_toolbar_html.call(null),xpage.ui.document_html.call(null)], null);
});
xpage.core.init = (function xpage$core$init(){
xpage.dao.fetch_document_and_update.call(null,xpage.state.document,"document_a");

xpage.dao.fetch_document_list_and_update.call(null,xpage.state.document_list);

return $().ready((function (){
return $(".ui.dropdown").dropdown();
}));
});
xpage.core.init.call(null);
xpage.core.mount = (function xpage$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xpage.core.main_html], null),el);
});
xpage.core.mount_app_element = (function xpage$core$mount_app_element(){
var temp__5457__auto__ = xpage.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return xpage.core.mount.call(null,el);
} else {
return null;
}
});
xpage.core.mount_app_element.call(null);
xpage.core.on_reload = (function xpage$core$on_reload(){
return xpage.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
