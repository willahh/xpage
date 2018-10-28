// Compiled by ClojureScript 1.10.339 {}
goog.provide('xpage.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('cljs.tools.reader.edn');
goog.require('xpage.state');
goog.require('xpage.ui');
goog.require('xpage.dao');
goog.require('xpage.ui.modal.zone');
goog.require('xpage.ui.xinterface');
xpage.core.multiply = (function xpage$core$multiply(a,b){
return (a * b);
});
xpage.core.get_app_element = (function xpage$core$get_app_element(){
return goog.dom.getElement("app");
});
xpage.core.main_html = (function xpage$core$main_html(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),xpage.ui.xinterface.tools_html.call(null),xpage.ui.xinterface.main_toolbar_html.call(null),xpage.ui.document_html.call(null),xpage.ui.modal.zone.zone_modal_html.call(null)], null);
});
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
xpage.core.init = (function xpage$core$init(){
xpage.core.mount_app_element.call(null);

xpage.dao.fetch_document_and_update.call(null,xpage.state.document,"document_a");

xpage.dao.fetch_document_list_and_update.call(null,xpage.state.document_list);

return $().ready((function (){
return $(".ui.dropdown").dropdown();
}));
});
if((typeof xpage !== 'undefined') && (typeof xpage.core !== 'undefined') && (typeof xpage.core.one_call !== 'undefined')){
} else {
xpage.core.one_call = xpage.core.init.call(null);
}

//# sourceMappingURL=core.js.map
