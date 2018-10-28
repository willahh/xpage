// Compiled by ClojureScript 1.10.339 {}
goog.provide('xpage.ui.modal.zone');
goog.require('cljs.core');
goog.require('xpage.ui.modal.modal');
goog.require('xpage.state');
goog.require('xpage.action.zone');
xpage.ui.modal.zone.form_query_string_to_array_map = (function xpage$ui$modal$zone$form_query_string_to_array_map(form_query_string){

var form = document.querySelector(form_query_string);
var form_data = (new window.FormData(form));
var entries = form_data.entries();
var data = cljs.core.js__GT_clj.call(null,Array.from(entries));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (form,form_data,entries,data){
return (function (p1__38461_SHARP_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,cljs.core.first.call(null,p1__38461_SHARP_)),cljs.core.second.call(null,p1__38461_SHARP_)]);
});})(form,form_data,entries,data))
,data));
});
xpage.ui.modal.zone.validate = (function xpage$ui$modal$zone$validate(){
var form_data = xpage.ui.modal.zone.form_query_string_to_array_map.call(null,"#add-zone-modal form");
var page_id = (new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(form_data) | (0));
var zone_bounding_box = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(form_data) | (0)),new cljs.core.Keyword(null,"left","left",-399115937),(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(form_data) | (0)),new cljs.core.Keyword(null,"width","width",-384071477),(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(form_data) | (0)),new cljs.core.Keyword(null,"height","height",1025178622),(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(form_data) | (0))], null);
return xpage.action.zone.add.call(null,page_id,zone_bounding_box);
});
xpage.ui.modal.zone.zone_modal_html = (function xpage$ui$modal$zone$zone_modal_html(){
var title = "Title";
var id = "add-zone-modal";
var content_html = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.ui","form.ui",-1496631673),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Page"], null),(function (){var option_html = cljs.core.map.call(null,((function (title,id){
return (function (page_record){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(page_record)], null),new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(page_record)], null);
});})(title,id))
,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)));
var select_html = cljs.core.apply.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"page"], null)], null),option_html);
return select_html;
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"top"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"top",new cljs.core.Keyword(null,"size","size",1098693007),(4)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"left"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"left",new cljs.core.Keyword(null,"size","size",1098693007),(4)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"width"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"width",new cljs.core.Keyword(null,"size","size",1098693007),(4)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"height"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"height",new cljs.core.Keyword(null,"size","size",1098693007),(4)], null)], null)], null)], null);
var button_cancel = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.button","div.ui.button",668900631),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"a",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (title,id,content_html){
return (function (event){
return window.$("#add-zone-modal").modal("hide");
});})(title,id,content_html))
], null),"Cancel"], null);
var button_validate = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.button","div.ui.button",668900631),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"b",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (title,id,content_html,button_cancel){
return (function (){
return xpage.ui.modal.zone.validate.call(null);
});})(title,id,content_html,button_cancel))
], null),"OK"], null);
return xpage.ui.modal.modal.modal_html.call(null,title,id,content_html,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [button_cancel,button_validate], null));
});

//# sourceMappingURL=zone.js.map
