// Compiled by ClojureScript 1.10.339 {}
goog.provide('xpage.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('xpage.component.modal');
goog.require('cljs.tools.reader.edn');
xpage.core.multiply = (function xpage$core$multiply(a,b){
return (a * b);
});
xpage.core.app_config = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoom-step","zoom-step",-1257828560),0.1], null);
xpage.core.document = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
xpage.core.document_list = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
xpage.core.fetch = (function xpage$core$fetch(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31084 = arguments.length;
var i__4532__auto___31085 = (0);
while(true){
if((i__4532__auto___31085 < len__4531__auto___31084)){
args__4534__auto__.push((arguments[i__4532__auto___31085]));

var G__31086 = (i__4532__auto___31085 + (1));
i__4532__auto___31085 = G__31086;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return xpage.core.fetch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

xpage.core.fetch.cljs$core$IFn$_invoke$arity$variadic = (function (url,success_fn,failure_fn){

return fetch(url).then((function (response){
return response.text().then((function (text){
return success_fn.call(null,text);
}));
}));
});

xpage.core.fetch.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
xpage.core.fetch.cljs$lang$applyTo = (function (seq31081){
var G__31082 = cljs.core.first.call(null,seq31081);
var seq31081__$1 = cljs.core.next.call(null,seq31081);
var G__31083 = cljs.core.first.call(null,seq31081__$1);
var seq31081__$2 = cljs.core.next.call(null,seq31081__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31082,G__31083,seq31081__$2);
});

xpage.core.fetch_document_and_update = (function xpage$core$fetch_document_and_update(document,doc_name){

return xpage.core.fetch.call(null,["http://localhost:9500/api/document/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(doc_name)].join(''),(function (text){
return cljs.core.reset_BANG_.call(null,document,cljs.tools.reader.edn.read_string.call(null,text));
}));
});
xpage.core.fetch_document_list_and_update = (function xpage$core$fetch_document_list_and_update(document_list){

return xpage.core.fetch.call(null,"http://localhost:9500/api/documents",(function (text){
return cljs.core.reset_BANG_.call(null,document_list,cljs.tools.reader.edn.read_string.call(null,text));
}));
});
xpage.core.zone_list_from_page_id = (function xpage$core$zone_list_from_page_id(page_id){
return cljs.core.filter.call(null,(function (p1__31087_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__31087_SHARP_),page_id);
}),new cljs.core.Keyword(null,"zone","zone",2068674983).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.document)));
});
xpage.core.scale_value = (function xpage$core$scale_value(value){
return (value * new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.document)));
});
xpage.core.zoom_in = (function xpage$core$zoom_in(){
return cljs.core.swap_BANG_.call(null,xpage.core.document,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null),(function (scale){
return (scale + new cljs.core.Keyword(null,"zoom-step","zoom-step",-1257828560).cljs$core$IFn$_invoke$arity$1(xpage.core.app_config));
}));
});
xpage.core.zoom_out = (function xpage$core$zoom_out(){
return cljs.core.swap_BANG_.call(null,xpage.core.document,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null),(function (scale){
return (scale - new cljs.core.Keyword(null,"zoom-step","zoom-step",-1257828560).cljs$core$IFn$_invoke$arity$1(xpage.core.app_config));
}));
});
xpage.core.open_add_zone = (function xpage$core$open_add_zone(){
return window.$("#add-zone-modal").modal("show");
});
xpage.core.get_app_element = (function xpage$core$get_app_element(){
return goog.dom.getElement("app");
});
xpage.core.toolbar_html = (function xpage$core$toolbar_html(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toolbar","div.toolbar",-1371089148),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (m){
return m;
}),new cljs.core.Keyword(null,"id","id",-1388402092),"range",new cljs.core.Keyword(null,"name","name",1843675177),"range",new cljs.core.Keyword(null,"value","value",305978217),(20),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"step","step",1288888124),(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.button","button.ui.button",-2133060849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return xpage.core.zoom_in.call(null);
})], null),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.button","button.ui.button",-2133060849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return xpage.core.zoom_out.call(null);
})], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.button","button.ui.button",-2133060849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return xpage.core.open_add_zone.call(null);
})], null),"add z"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.buttons","div.ui.buttons",-1670468438),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.labeled.icon.button","button.ui.labeled.icon.button",53297247),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.left.chevron.icon","i.left.chevron.icon",474034550)], null),"Back"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.button","button.ui.button",-2133060849),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.stop.icon","i.stop.icon",385584336)], null),"Stop"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.right.labeled.icon.button","button.ui.right.labeled.icon.button",2020640892),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.right.chevron.icon","i.right.chevron.icon",830217244)], null),"Forward"], null)], null)], null);
});
xpage.core.tools_html = (function xpage$core$tools_html(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.vertical.labeled.icon.buttons.tools","div.ui.vertical.labeled.icon.buttons.tools",-746783588),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.button","button.ui.button",-2133060849),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.location.arrow.icon","i.location.arrow.icon",-1256704491)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.button","button.ui.button",-2133060849),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.location.arrow.icon","i.location.arrow.icon",-1256704491)], null)], null)], null);
});
xpage.core.document_list_html = (function xpage$core$document_list_html(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.document-list","div.document-list",2108721829),cljs.core.map.call(null,(function (doc_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
var document_name = event.target.innerHTML;
return xpage.core.fetch_document_and_update.call(null,xpage.core.document,document_name);
})], null),doc_name], null)], null);
}),cljs.core.deref.call(null,xpage.core.document_list))], null);
});
xpage.core.spread_html = (function xpage$core$spread_html(spread_id,pages){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spread","div.spread",1219475037),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),spread_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spread-inner","div.spread-inner",1531451063),cljs.core.map.call(null,cljs.core.identity,pages)], null)], null);
});
xpage.core.zone_html = (function xpage$core$zone_html(zone_record){
var page_record = (1);
var boundary = new cljs.core.Keyword(null,"bounding-box","bounding-box",201336205).cljs$core$IFn$_invoke$arity$1(zone_record);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.zone","div.zone",481968830),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"zone-id","zone-id",55099318).cljs$core$IFn$_invoke$arity$1(zone_record),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(xpage.core.scale_value.call(null,(new cljs.core.Keyword(null,"page-height","page-height",1988560834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.document)) * new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(boundary))) / (100)),new cljs.core.Keyword(null,"left","left",-399115937),(xpage.core.scale_value.call(null,(new cljs.core.Keyword(null,"page-width","page-width",185039201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.document)) * new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(boundary))) / (100)),new cljs.core.Keyword(null,"width","width",-384071477),(xpage.core.scale_value.call(null,(new cljs.core.Keyword(null,"page-width","page-width",185039201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.document)) * new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(boundary))) / (100)),new cljs.core.Keyword(null,"height","height",1025178622),(xpage.core.scale_value.call(null,(new cljs.core.Keyword(null,"page-height","page-height",1988560834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.document)) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(boundary))) / (100))], null)], null)], null);
});
xpage.core.page_html = (function xpage$core$page_html(page_record){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(page_record),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),xpage.core.scale_value.call(null,new cljs.core.Keyword(null,"page-width","page-width",185039201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.document))),new cljs.core.Keyword(null,"height","height",1025178622),xpage.core.scale_value.call(null,new cljs.core.Keyword(null,"page-height","page-height",1988560834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.document)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.zones","div.zones",480080865),(function (){var page_id = new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(page_record);
var zone_record_list = xpage.core.zone_list_from_page_id.call(null,page_id);
return cljs.core.doall.call(null,cljs.core.map.call(null,xpage.core.zone_html,zone_record_list));
})()], null)], null);
});
xpage.core.document_html = (function xpage$core$document_html(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.document","div.document",-85286330),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function xpage$core$document_html_$_iter__31089(s__31090){
return (new cljs.core.LazySeq(null,(function (){
var s__31090__$1 = s__31090;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__31090__$1);
if(temp__5457__auto__){
var s__31090__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31090__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__31090__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__31092 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__31091 = (0);
while(true){
if((i__31091 < size__4323__auto__)){
var spread = cljs.core._nth.call(null,c__4322__auto__,i__31091);
cljs.core.chunk_append.call(null,b__31092,xpage.core.spread_html.call(null,new cljs.core.Keyword(null,"spread-id","spread-id",-151481820).cljs$core$IFn$_invoke$arity$1(spread),(function (){var page_id_list = new cljs.core.Keyword(null,"page-id-list","page-id-list",-1886532636).cljs$core$IFn$_invoke$arity$1(spread);
return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (i__31091,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__31092,s__31090__$2,temp__5457__auto__){
return (function xpage$core$document_html_$_iter__31089_$_iter__31093(s__31094){
return (new cljs.core.LazySeq(null,((function (i__31091,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__31092,s__31090__$2,temp__5457__auto__){
return (function (){
var s__31094__$1 = s__31094;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__31094__$1);
if(temp__5457__auto____$1){
var s__31094__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31094__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__31094__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__31096 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__31095 = (0);
while(true){
if((i__31095 < size__4323__auto____$1)){
var page_id = cljs.core._nth.call(null,c__4322__auto____$1,i__31095);
cljs.core.chunk_append.call(null,b__31096,xpage.core.page_html.call(null,cljs.core.first.call(null,(function (){var page_record_list = cljs.core.filter.call(null,((function (i__31095,i__31091,page_id,c__4322__auto____$1,size__4323__auto____$1,b__31096,s__31094__$2,temp__5457__auto____$1,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__31092,s__31090__$2,temp__5457__auto__){
return (function (p1__31088_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__31088_SHARP_),page_id);
});})(i__31095,i__31091,page_id,c__4322__auto____$1,size__4323__auto____$1,b__31096,s__31094__$2,temp__5457__auto____$1,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__31092,s__31090__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.document)));
return page_record_list;
})())));

var G__31101 = (i__31095 + (1));
i__31095 = G__31101;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31096),xpage$core$document_html_$_iter__31089_$_iter__31093.call(null,cljs.core.chunk_rest.call(null,s__31094__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31096),null);
}
} else {
var page_id = cljs.core.first.call(null,s__31094__$2);
return cljs.core.cons.call(null,xpage.core.page_html.call(null,cljs.core.first.call(null,(function (){var page_record_list = cljs.core.filter.call(null,((function (i__31091,page_id,s__31094__$2,temp__5457__auto____$1,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__31092,s__31090__$2,temp__5457__auto__){
return (function (p1__31088_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__31088_SHARP_),page_id);
});})(i__31091,page_id,s__31094__$2,temp__5457__auto____$1,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__31092,s__31090__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.document)));
return page_record_list;
})())),xpage$core$document_html_$_iter__31089_$_iter__31093.call(null,cljs.core.rest.call(null,s__31094__$2)));
}
} else {
return null;
}
break;
}
});})(i__31091,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__31092,s__31090__$2,temp__5457__auto__))
,null,null));
});})(i__31091,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__31092,s__31090__$2,temp__5457__auto__))
;
return iter__4324__auto__.call(null,page_id_list);
})());
})()));

var G__31102 = (i__31091 + (1));
i__31091 = G__31102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31092),xpage$core$document_html_$_iter__31089.call(null,cljs.core.chunk_rest.call(null,s__31090__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31092),null);
}
} else {
var spread = cljs.core.first.call(null,s__31090__$2);
return cljs.core.cons.call(null,xpage.core.spread_html.call(null,new cljs.core.Keyword(null,"spread-id","spread-id",-151481820).cljs$core$IFn$_invoke$arity$1(spread),(function (){var page_id_list = new cljs.core.Keyword(null,"page-id-list","page-id-list",-1886532636).cljs$core$IFn$_invoke$arity$1(spread);
return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (page_id_list,spread,s__31090__$2,temp__5457__auto__){
return (function xpage$core$document_html_$_iter__31089_$_iter__31097(s__31098){
return (new cljs.core.LazySeq(null,((function (page_id_list,spread,s__31090__$2,temp__5457__auto__){
return (function (){
var s__31098__$1 = s__31098;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__31098__$1);
if(temp__5457__auto____$1){
var s__31098__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31098__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__31098__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__31100 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__31099 = (0);
while(true){
if((i__31099 < size__4323__auto__)){
var page_id = cljs.core._nth.call(null,c__4322__auto__,i__31099);
cljs.core.chunk_append.call(null,b__31100,xpage.core.page_html.call(null,cljs.core.first.call(null,(function (){var page_record_list = cljs.core.filter.call(null,((function (i__31099,page_id,c__4322__auto__,size__4323__auto__,b__31100,s__31098__$2,temp__5457__auto____$1,page_id_list,spread,s__31090__$2,temp__5457__auto__){
return (function (p1__31088_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__31088_SHARP_),page_id);
});})(i__31099,page_id,c__4322__auto__,size__4323__auto__,b__31100,s__31098__$2,temp__5457__auto____$1,page_id_list,spread,s__31090__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.document)));
return page_record_list;
})())));

var G__31103 = (i__31099 + (1));
i__31099 = G__31103;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31100),xpage$core$document_html_$_iter__31089_$_iter__31097.call(null,cljs.core.chunk_rest.call(null,s__31098__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31100),null);
}
} else {
var page_id = cljs.core.first.call(null,s__31098__$2);
return cljs.core.cons.call(null,xpage.core.page_html.call(null,cljs.core.first.call(null,(function (){var page_record_list = cljs.core.filter.call(null,((function (page_id,s__31098__$2,temp__5457__auto____$1,page_id_list,spread,s__31090__$2,temp__5457__auto__){
return (function (p1__31088_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__31088_SHARP_),page_id);
});})(page_id,s__31098__$2,temp__5457__auto____$1,page_id_list,spread,s__31090__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.document)));
return page_record_list;
})())),xpage$core$document_html_$_iter__31089_$_iter__31097.call(null,cljs.core.rest.call(null,s__31098__$2)));
}
} else {
return null;
}
break;
}
});})(page_id_list,spread,s__31090__$2,temp__5457__auto__))
,null,null));
});})(page_id_list,spread,s__31090__$2,temp__5457__auto__))
;
return iter__4324__auto__.call(null,page_id_list);
})());
})()),xpage$core$document_html_$_iter__31089.call(null,cljs.core.rest.call(null,s__31090__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,new cljs.core.Keyword(null,"spread","spread",862337191).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.core.document)));
})())], null);
});
xpage.core.hello_world = (function xpage$core$hello_world(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),xpage.component.modal.modal_html.call(null,"Title","add-zone-modal",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Contenu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.button","div.ui.button",668900631),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"a",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
return window.$("#add-zone-modal").modal("hide");
})], null),"Cancel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.button","div.ui.button",668900631),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"b"], null),"OK"], null)], null)),xpage.core.toolbar_html.call(null),xpage.core.tools_html.call(null),xpage.core.document_list_html.call(null),xpage.core.document_html.call(null)], null);
});
xpage.core.init = (function xpage$core$init(){
xpage.core.fetch_document_and_update.call(null,xpage.core.document,"document_a");

return xpage.core.fetch_document_list_and_update.call(null,xpage.core.document_list);
});
xpage.core.init.call(null);
xpage.core.mount = (function xpage$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xpage.core.hello_world], null),el);
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
