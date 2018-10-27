// Compiled by ClojureScript 1.10.339 {}
goog.provide('xpage.ui');
goog.require('cljs.core');
goog.require('xpage.state');
goog.require('xpage.dao');
xpage.ui.open_add_zone = (function xpage$ui$open_add_zone(){
return window.$("#add-zone-modal").modal("show");
});
xpage.ui.scale_value = (function xpage$ui$scale_value(value){
return (value * new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)));
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
xpage.ui.tools_html = (function xpage$ui$tools_html(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tools","div.tools",383588368),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.vertical.icon.buttons","div.ui.vertical.icon.buttons",-370295191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.button","button.ui.button",-2133060849),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.location.arrow","i.icon.location.arrow",2062194052)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.button","button.ui.button",-2133060849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return xpage.ui.zoom_in.call(null);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.zoom.in","i.icon.zoom.in",1634210385)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.button","button.ui.button",-2133060849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return xpage.ui.zoom_out.call(null);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.zoom.out","i.icon.zoom.out",-157815918)], null)], null)], null)], null);
});
xpage.ui.main_toolbar_html = (function xpage$ui$main_toolbar_html(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.menu.mini.main-toolbar","div.ui.menu.mini.main-toolbar",213581405),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.dropdown","div.ui.dropdown",-1410510465),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text","div.text",645060726),"Fichier"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.dropdown.icon","i.dropdown.icon",441444121)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu","div.menu",-175336694),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.item","button.item",-191482662),"Nouveau"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),"Ouvrir",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.dropdown.icon","i.dropdown.icon",441444121)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu","div.menu",-175336694),cljs.core.map.call(null,(function (doc_name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.item","button.item",-191482662),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
var document_name = event.target.innerHTML;
return xpage.dao.fetch_document_and_update.call(null,xpage.state.document,document_name);
})], null),doc_name], null);
}),cljs.core.deref.call(null,xpage.state.document_list))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.item","button.item",-191482662),"Enregistrer"], null)], null)], null)], null),null], null);
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
var zone_record_list = xpage.dao.zone_list_from_page_id.call(null,page_id);
return cljs.core.doall.call(null,cljs.core.map.call(null,xpage.ui.zone_html,zone_record_list));
})()], null)], null);
});
xpage.ui.document_html = (function xpage$ui$document_html(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.document","div.document",-85286330),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function xpage$ui$document_html_$_iter__34821(s__34822){
return (new cljs.core.LazySeq(null,(function (){
var s__34822__$1 = s__34822;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__34822__$1);
if(temp__5457__auto__){
var s__34822__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34822__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__34822__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__34824 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__34823 = (0);
while(true){
if((i__34823 < size__4323__auto__)){
var spread = cljs.core._nth.call(null,c__4322__auto__,i__34823);
cljs.core.chunk_append.call(null,b__34824,xpage.ui.spread_html.call(null,new cljs.core.Keyword(null,"spread-id","spread-id",-151481820).cljs$core$IFn$_invoke$arity$1(spread),(function (){var page_id_list = new cljs.core.Keyword(null,"page-id-list","page-id-list",-1886532636).cljs$core$IFn$_invoke$arity$1(spread);
return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (i__34823,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__34824,s__34822__$2,temp__5457__auto__){
return (function xpage$ui$document_html_$_iter__34821_$_iter__34825(s__34826){
return (new cljs.core.LazySeq(null,((function (i__34823,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__34824,s__34822__$2,temp__5457__auto__){
return (function (){
var s__34826__$1 = s__34826;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__34826__$1);
if(temp__5457__auto____$1){
var s__34826__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34826__$2)){
var c__4322__auto____$1 = cljs.core.chunk_first.call(null,s__34826__$2);
var size__4323__auto____$1 = cljs.core.count.call(null,c__4322__auto____$1);
var b__34828 = cljs.core.chunk_buffer.call(null,size__4323__auto____$1);
if((function (){var i__34827 = (0);
while(true){
if((i__34827 < size__4323__auto____$1)){
var page_id = cljs.core._nth.call(null,c__4322__auto____$1,i__34827);
cljs.core.chunk_append.call(null,b__34828,xpage.ui.page_html.call(null,cljs.core.first.call(null,(function (){var page_record_list = cljs.core.filter.call(null,((function (i__34827,i__34823,page_id,c__4322__auto____$1,size__4323__auto____$1,b__34828,s__34826__$2,temp__5457__auto____$1,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__34824,s__34822__$2,temp__5457__auto__){
return (function (p1__34820_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__34820_SHARP_),page_id);
});})(i__34827,i__34823,page_id,c__4322__auto____$1,size__4323__auto____$1,b__34828,s__34826__$2,temp__5457__auto____$1,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__34824,s__34822__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)));
return page_record_list;
})())));

var G__34833 = (i__34827 + (1));
i__34827 = G__34833;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34828),xpage$ui$document_html_$_iter__34821_$_iter__34825.call(null,cljs.core.chunk_rest.call(null,s__34826__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34828),null);
}
} else {
var page_id = cljs.core.first.call(null,s__34826__$2);
return cljs.core.cons.call(null,xpage.ui.page_html.call(null,cljs.core.first.call(null,(function (){var page_record_list = cljs.core.filter.call(null,((function (i__34823,page_id,s__34826__$2,temp__5457__auto____$1,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__34824,s__34822__$2,temp__5457__auto__){
return (function (p1__34820_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__34820_SHARP_),page_id);
});})(i__34823,page_id,s__34826__$2,temp__5457__auto____$1,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__34824,s__34822__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)));
return page_record_list;
})())),xpage$ui$document_html_$_iter__34821_$_iter__34825.call(null,cljs.core.rest.call(null,s__34826__$2)));
}
} else {
return null;
}
break;
}
});})(i__34823,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__34824,s__34822__$2,temp__5457__auto__))
,null,null));
});})(i__34823,page_id_list,spread,c__4322__auto__,size__4323__auto__,b__34824,s__34822__$2,temp__5457__auto__))
;
return iter__4324__auto__.call(null,page_id_list);
})());
})()));

var G__34834 = (i__34823 + (1));
i__34823 = G__34834;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34824),xpage$ui$document_html_$_iter__34821.call(null,cljs.core.chunk_rest.call(null,s__34822__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34824),null);
}
} else {
var spread = cljs.core.first.call(null,s__34822__$2);
return cljs.core.cons.call(null,xpage.ui.spread_html.call(null,new cljs.core.Keyword(null,"spread-id","spread-id",-151481820).cljs$core$IFn$_invoke$arity$1(spread),(function (){var page_id_list = new cljs.core.Keyword(null,"page-id-list","page-id-list",-1886532636).cljs$core$IFn$_invoke$arity$1(spread);
return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (page_id_list,spread,s__34822__$2,temp__5457__auto__){
return (function xpage$ui$document_html_$_iter__34821_$_iter__34829(s__34830){
return (new cljs.core.LazySeq(null,((function (page_id_list,spread,s__34822__$2,temp__5457__auto__){
return (function (){
var s__34830__$1 = s__34830;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__34830__$1);
if(temp__5457__auto____$1){
var s__34830__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34830__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__34830__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__34832 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__34831 = (0);
while(true){
if((i__34831 < size__4323__auto__)){
var page_id = cljs.core._nth.call(null,c__4322__auto__,i__34831);
cljs.core.chunk_append.call(null,b__34832,xpage.ui.page_html.call(null,cljs.core.first.call(null,(function (){var page_record_list = cljs.core.filter.call(null,((function (i__34831,page_id,c__4322__auto__,size__4323__auto__,b__34832,s__34830__$2,temp__5457__auto____$1,page_id_list,spread,s__34822__$2,temp__5457__auto__){
return (function (p1__34820_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__34820_SHARP_),page_id);
});})(i__34831,page_id,c__4322__auto__,size__4323__auto__,b__34832,s__34830__$2,temp__5457__auto____$1,page_id_list,spread,s__34822__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)));
return page_record_list;
})())));

var G__34835 = (i__34831 + (1));
i__34831 = G__34835;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34832),xpage$ui$document_html_$_iter__34821_$_iter__34829.call(null,cljs.core.chunk_rest.call(null,s__34830__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34832),null);
}
} else {
var page_id = cljs.core.first.call(null,s__34830__$2);
return cljs.core.cons.call(null,xpage.ui.page_html.call(null,cljs.core.first.call(null,(function (){var page_record_list = cljs.core.filter.call(null,((function (page_id,s__34830__$2,temp__5457__auto____$1,page_id_list,spread,s__34822__$2,temp__5457__auto__){
return (function (p1__34820_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__34820_SHARP_),page_id);
});})(page_id,s__34830__$2,temp__5457__auto____$1,page_id_list,spread,s__34822__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xpage.state.document)));
return page_record_list;
})())),xpage$ui$document_html_$_iter__34821_$_iter__34829.call(null,cljs.core.rest.call(null,s__34830__$2)));
}
} else {
return null;
}
break;
}
});})(page_id_list,spread,s__34822__$2,temp__5457__auto__))
,null,null));
});})(page_id_list,spread,s__34822__$2,temp__5457__auto__))
;
return iter__4324__auto__.call(null,page_id_list);
})());
})()),xpage$ui$document_html_$_iter__34821.call(null,cljs.core.rest.call(null,s__34822__$2)));
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
