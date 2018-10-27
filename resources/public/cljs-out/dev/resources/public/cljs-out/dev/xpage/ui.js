// Compiled by ClojureScript 1.10.339 {}
goog.provide('xpage.ui');
goog.require('cljs.core');
goog.require('xpage.state');
xpage.ui.open_add_zone = (function xpage$ui$open_add_zone(){
return window.$("#add-zone-modal").modal("show");
});
xpage.ui.zoom_in = (function xpage$ui$zoom_in(){
return cljs.core.swap_BANG_.call(null,xpage.state.document,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null),(function (scale){
return (scale + new cljs.core.Keyword(null,"zoom-step","zoom-step",-1257828560).cljs$core$IFn$_invoke$arity$1(xpage.state.app_config));
}));
});
xpage.ui.zoom_out = (function xpage$ui$zoom_out(){
return cljs.core.swap_BANG_.call(null,xpage.state.document,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null),(function (scale){
return (scale - new cljs.core.Keyword(null,"zoom-step","zoom-step",-1257828560).cljs$core$IFn$_invoke$arity$1(xpage.state.app_config));
}));
});
xpage.ui.toolbar_html = (function xpage$ui$toolbar_html(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toolbar","div.toolbar",-1371089148),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (m){
return m;
}),new cljs.core.Keyword(null,"id","id",-1388402092),"range",new cljs.core.Keyword(null,"name","name",1843675177),"range",new cljs.core.Keyword(null,"value","value",305978217),(20),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"step","step",1288888124),(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.button","button.ui.button",-2133060849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return xpage.ui.zoom_in.call(null);
})], null),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.button","button.ui.button",-2133060849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return xpage.ui.zoom_out.call(null);
})], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.button","button.ui.button",-2133060849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return xpage.ui.open_add_zone.call(null);
})], null),"add z"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.buttons","div.ui.buttons",-1670468438),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.labeled.icon.button","button.ui.labeled.icon.button",53297247),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.left.chevron.icon","i.left.chevron.icon",474034550)], null),"Back"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.button","button.ui.button",-2133060849),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.stop.icon","i.stop.icon",385584336)], null),"Stop"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.right.labeled.icon.button","button.ui.right.labeled.icon.button",2020640892),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.right.chevron.icon","i.right.chevron.icon",830217244)], null),"Forward"], null)], null)], null);
});
xpage.ui.tools_html = (function xpage$ui$tools_html(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.vertical.labeled.icon.buttons.tools","div.ui.vertical.labeled.icon.buttons.tools",-746783588),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.button","button.ui.button",-2133060849),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.location.arrow.icon","i.location.arrow.icon",-1256704491)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.button","button.ui.button",-2133060849),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.location.arrow.icon","i.location.arrow.icon",-1256704491)], null)], null)], null);
});
xpage.ui.document_list_html = (function xpage$ui$document_list_html(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.document-list","div.document-list",2108721829),cljs.core.map.call(null,(function (doc_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
var document_name = event.target.innerHTML;
return xpage.ui.fetch_document_and_update.call(null,xpage.state.document,document_name);
})], null),doc_name], null)], null);
}),cljs.core.deref.call(null,xpage.state.document_list))], null);
});
xpage.ui.spread_html = (function xpage$ui$spread_html(spread_id,pages){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spread","div.spread",1219475037),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),spread_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spread-inner","div.spread-inner",1531451063),cljs.core.map.call(null,cljs.core.identity,pages)], null)], null);
});
xpage.ui.zone_html = (function xpage$ui$zone_html(zone_record){
var page_record = (1);
var boundary = new cljs.core.Keyword(null,"bounding-box","bounding-box",201336205).cljs$core$IFn$_invoke$arity$1(zone_record);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.zone","div.zone",481968830),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"zone-id","zone-id",55099318).cljs$core$IFn$_invoke$arity$1(zone_record),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(xpage.ui.scale_value.call(null,(new cljs.core.Keyword(null,"page-height","page-height",1988560834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)) * new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(boundary))) / (100)),new cljs.core.Keyword(null,"left","left",-399115937),(xpage.ui.scale_value.call(null,(new cljs.core.Keyword(null,"page-width","page-width",185039201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)) * new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(boundary))) / (100)),new cljs.core.Keyword(null,"width","width",-384071477),(xpage.ui.scale_value.call(null,(new cljs.core.Keyword(null,"page-width","page-width",185039201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)) * new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(boundary))) / (100)),new cljs.core.Keyword(null,"height","height",1025178622),(xpage.ui.scale_value.call(null,(new cljs.core.Keyword(null,"page-height","page-height",1988560834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(boundary))) / (100))], null)], null)], null);
});
xpage.ui.page_html = (function xpage$ui$page_html(page_record){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(page_record),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),xpage.ui.scale_value.call(null,new cljs.core.Keyword(null,"page-width","page-width",185039201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document))),new cljs.core.Keyword(null,"height","height",1025178622),xpage.ui.scale_value.call(null,new cljs.core.Keyword(null,"page-height","page-height",1988560834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.zones","div.zones",480080865),(function (){var page_id = new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(page_record);
var zone_record_list = xpage.ui.zone_list_from_page_id.call(null,page_id);
return cljs.core.doall.call(null,cljs.core.map.call(null,xpage.ui.zone_html,zone_record_list));
})()], null)], null);
});
xpage.ui.document_html = (function xpage$ui$document_html(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.document","div.document",-85286330),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function xpage$ui$document_html_$_iter__31692(s__31693){
return (new cljs.core.LazySeq(null,(function (){
var s__31693__$1 = s__31693;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__31693__$1);
if(temp__5457__auto__){
var s__31693__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31693__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__31693__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__31695 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__31694 = (0);
while(true){
if((i__31694 < size__4323__auto__)){
var spread = cljs.core._nth.call(null,c__4322__auto__,i__31694);
cljs.core.chunk_append.call(null,b__31695,xpage.ui.spread_html.call(null,new cljs.core.Keyword(null,"spread-id","spread-id",-151481820).cljs$core$IFn$_invoke$arity$1(spread),(function (){var page_id_list = new cljs.core.Keyword(null,"page-id-list","page-id-list",-1886532636).cljs$core$IFn$_invoke$arity$1(spread);
return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (i__31694,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__31695,s__31693__$2,temp__5457__auto__){
return (function xpage$ui$document_html_$_iter__31692_$_iter__31696(s__31697){
return (new cljs.core.LazySeq(null,((function (i__31694,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__31695,s__31693__$2,temp__5457__auto__){
return (function (){
var s__31697__$1 = s__31697;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__31697__$1);
if(temp__5457__auto____$1){
var s__31697__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31697__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__31697__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__31699 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__31698 = (0);
while(true){
if((i__31698 < size__4323__auto____$1)){
var page_id = cljs.core._nth.call(null,c__4322__auto____$1,i__31698);
cljs.core.chunk_append.call(null,b__31699,xpage.ui.page_html.call(null,cljs.core.first.call(null,(function (){var page_record_list = cljs.core.filter.call(null,((function (i__31698,i__31694,page_id,c__4322__auto____$1,size__4323__auto____$1,b__31699,s__31697__$2,temp__5457__auto____$1,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__31695,s__31693__$2,temp__5457__auto__){
return (function (p1__31691_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__31691_SHARP_),page_id);
});})(i__31698,i__31694,page_id,c__4322__auto____$1,size__4323__auto____$1,b__31699,s__31697__$2,temp__5457__auto____$1,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__31695,s__31693__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)));
return page_record_list;
})())));

var G__31704 = (i__31698 + (1));
i__31698 = G__31704;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31699),xpage$ui$document_html_$_iter__31692_$_iter__31696.call(null,cljs.core.chunk_rest.call(null,s__31697__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31699),null);
}
} else {
var page_id = cljs.core.first.call(null,s__31697__$2);
return cljs.core.cons.call(null,xpage.ui.page_html.call(null,cljs.core.first.call(null,(function (){var page_record_list = cljs.core.filter.call(null,((function (i__31694,page_id,s__31697__$2,temp__5457__auto____$1,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__31695,s__31693__$2,temp__5457__auto__){
return (function (p1__31691_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__31691_SHARP_),page_id);
});})(i__31694,page_id,s__31697__$2,temp__5457__auto____$1,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__31695,s__31693__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)));
return page_record_list;
})())),xpage$ui$document_html_$_iter__31692_$_iter__31696.call(null,cljs.core.rest.call(null,s__31697__$2)));
}
} else {
return null;
}
break;
}
});})(i__31694,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__31695,s__31693__$2,temp__5457__auto__))
,null,null));
});})(i__31694,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__31695,s__31693__$2,temp__5457__auto__))
;
return iter__4324__auto__.call(null,page_id_list);
})());
})()));

var G__31705 = (i__31694 + (1));
i__31694 = G__31705;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31695),xpage$ui$document_html_$_iter__31692.call(null,cljs.core.chunk_rest.call(null,s__31693__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31695),null);
}
} else {
var spread = cljs.core.first.call(null,s__31693__$2);
return cljs.core.cons.call(null,xpage.ui.spread_html.call(null,new cljs.core.Keyword(null,"spread-id","spread-id",-151481820).cljs$core$IFn$_invoke$arity$1(spread),(function (){var page_id_list = new cljs.core.Keyword(null,"page-id-list","page-id-list",-1886532636).cljs$core$IFn$_invoke$arity$1(spread);
return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (page_id_list,spread,s__31693__$2,temp__5457__auto__){
return (function xpage$ui$document_html_$_iter__31692_$_iter__31700(s__31701){
return (new cljs.core.LazySeq(null,((function (page_id_list,spread,s__31693__$2,temp__5457__auto__){
return (function (){
var s__31701__$1 = s__31701;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__31701__$1);
if(temp__5457__auto____$1){
var s__31701__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31701__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__31701__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__31703 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__31702 = (0);
while(true){
if((i__31702 < size__4323__auto__)){
var page_id = cljs.core._nth.call(null,c__4322__auto__,i__31702);
cljs.core.chunk_append.call(null,b__31703,xpage.ui.page_html.call(null,cljs.core.first.call(null,(function (){var page_record_list = cljs.core.filter.call(null,((function (i__31702,page_id,c__4322__auto__,size__4323__auto__,b__31703,s__31701__$2,temp__5457__auto____$1,page_id_list,spread,s__31693__$2,temp__5457__auto__){
return (function (p1__31691_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__31691_SHARP_),page_id);
});})(i__31702,page_id,c__4322__auto__,size__4323__auto__,b__31703,s__31701__$2,temp__5457__auto____$1,page_id_list,spread,s__31693__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)));
return page_record_list;
})())));

var G__31706 = (i__31702 + (1));
i__31702 = G__31706;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31703),xpage$ui$document_html_$_iter__31692_$_iter__31700.call(null,cljs.core.chunk_rest.call(null,s__31701__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31703),null);
}
} else {
var page_id = cljs.core.first.call(null,s__31701__$2);
return cljs.core.cons.call(null,xpage.ui.page_html.call(null,cljs.core.first.call(null,(function (){var page_record_list = cljs.core.filter.call(null,((function (page_id,s__31701__$2,temp__5457__auto____$1,page_id_list,spread,s__31693__$2,temp__5457__auto__){
return (function (p1__31691_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__31691_SHARP_),page_id);
});})(page_id,s__31701__$2,temp__5457__auto____$1,page_id_list,spread,s__31693__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)));
return page_record_list;
})())),xpage$ui$document_html_$_iter__31692_$_iter__31700.call(null,cljs.core.rest.call(null,s__31701__$2)));
}
} else {
return null;
}
break;
}
});})(page_id_list,spread,s__31693__$2,temp__5457__auto__))
,null,null));
});})(page_id_list,spread,s__31693__$2,temp__5457__auto__))
;
return iter__4324__auto__.call(null,page_id_list);
})());
})()),xpage$ui$document_html_$_iter__31692.call(null,cljs.core.rest.call(null,s__31693__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,new cljs.core.Keyword(null,"spread","spread",862337191).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)));
})())], null);
});

//# sourceMappingURL=ui.js.map
