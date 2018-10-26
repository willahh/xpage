// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,((function (seen){
return (function (p1__27991_SHARP_){
var k = f.call(null,p1__27991_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
});})(seen))
,coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__27992){
var vec__27993 = p__27992;
var k = cljs.core.nth.call(null,vec__27993,(0),null);
var v = cljs.core.nth.call(null,vec__27993,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,text,/\n/," "))," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4534__auto__ = [];
var len__4531__auto___27997 = arguments.length;
var i__4532__auto___27998 = (0);
while(true){
if((i__4532__auto___27998 < len__4531__auto___27997)){
args__4534__auto__.push((arguments[i__4532__auto___27998]));

var G__27999 = (i__4532__auto___27998 + (1));
i__4532__auto___27998 = G__27999;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
});

figwheel.core.cross_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.core.cross_format.cljs$lang$applyTo = (function (seq27996){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27996));
});

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__28002){
var map__28003 = p__28002;
var map__28003__$1 = ((((!((map__28003 == null)))?(((((map__28003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28003):map__28003);
var message = cljs.core.get.call(null,map__28003__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__28003__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,((function (map__28003,map__28003__$1,message,column){
return (function (p1__28001_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28001_SHARP_], null)));
});})(map__28003,map__28003__$1,message,column))
,cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,((function (map__28003,map__28003__$1,message,column){
return (function (p1__28000_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__28000_SHARP_);
});})(map__28003,map__28003__$1,message,column))
,figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__28006){
var map__28007 = p__28006;
var map__28007__$1 = ((((!((map__28007 == null)))?(((((map__28007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28007):map__28007);
var message_data = map__28007__$1;
var message = cljs.core.get.call(null,map__28007__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__28007__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28007__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__28007__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__28009 = file_excerpt;
var map__28009__$1 = ((((!((map__28009 == null)))?(((((map__28009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28009):map__28009);
var start_line = cljs.core.get.call(null,map__28009__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__28009__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__28009__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,((function (map__28009,map__28009__$1,start_line,path,excerpt,map__28007,map__28007__$1,message_data,message,line,column,file_excerpt){
return (function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
});})(map__28009,map__28009__$1,start_line,path,excerpt,map__28007,map__28007__$1,message_data,message,line,column,file_excerpt))
,clojure.string.split_lines.call(null,excerpt));
var vec__28010 = cljs.core.split_with.call(null,((function (map__28009,map__28009__$1,start_line,path,excerpt,lines,map__28007,map__28007__$1,message_data,message,line,column,file_excerpt){
return (function (p1__28005_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__28005_SHARP_));
});})(map__28009,map__28009__$1,start_line,path,excerpt,lines,map__28007,map__28007__$1,message_data,message,line,column,file_excerpt))
,lines);
var begin = cljs.core.nth.call(null,vec__28010,(0),null);
var end = cljs.core.nth.call(null,vec__28010,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__28014){
var map__28015 = p__28014;
var map__28015__$1 = ((((!((map__28015 == null)))?(((((map__28015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28015):map__28015);
var file = cljs.core.get.call(null,map__28015__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28015__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28015__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__28017 = "";
var G__28017__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28017),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__28017);
var G__28017__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28017__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__28017__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28017__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__28017__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_28063 = (new goog.debug.Console());
var G__28024_28064 = c_28063.getFormatter();
goog.object.set(G__28024_28064,"showAbsoluteTime",false);

goog.object.set(G__28024_28064,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_28063);

}

var temp__5457__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5457__auto__)){
var console_instance = temp__5457__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((((typeof document !== 'undefined')) && ((typeof document !== 'undefined') && (typeof document.body !== 'undefined'))))?document.body:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__28025 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__28025,"data",(function (){var or__3949__auto__ = data;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__28025;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5455__auto__ = e.event_;
if(cljs.core.truth_(temp__5455__auto__)){
var e__$1 = temp__5455__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/** @define {boolean} */
goog.define("figwheel.core.load_warninged_code",false);


/** @define {boolean} */
goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
return ((figwheel.core.heads_up_display) && (!((goog.global.document == null))));
});

var last_reload_timestamp_28065 = cljs.core.atom.call(null,(0));
var promise_chain_28066 = (new goog.Promise(((function (last_reload_timestamp_28065){
return (function (r,_){
return r.call(null,true);
});})(last_reload_timestamp_28065))
));
figwheel.core.render_watcher = ((function (last_reload_timestamp_28065,promise_chain_28066){
return (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5455__auto__ = (function (){var temp__5457__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5457__auto__)){
var ts = temp__5457__auto__;
var and__3938__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_28065) < ts);
if(and__3938__auto__){
return ts;
} else {
return and__3938__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var ts = temp__5455__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_28065,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_28066.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_28065,promise_chain_28066){
return (function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR_28026 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (132);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then(((function (_STAR_inline_code_message_max_column_STAR_28026,warn,warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_28065,promise_chain_28066){
return (function (){
var seq__28027 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__28028 = null;
var count__28029 = (0);
var i__28030 = (0);
while(true){
if((i__28030 < count__28029)){
var w = cljs.core._nth.call(null,chunk__28028,i__28030);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__28067 = seq__28027;
var G__28068 = chunk__28028;
var G__28069 = count__28029;
var G__28070 = (i__28030 + (1));
seq__28027 = G__28067;
chunk__28028 = G__28068;
count__28029 = G__28069;
i__28030 = G__28070;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28027);
if(temp__5457__auto__){
var seq__28027__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28027__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__28027__$1);
var G__28071 = cljs.core.chunk_rest.call(null,seq__28027__$1);
var G__28072 = c__4351__auto__;
var G__28073 = cljs.core.count.call(null,c__4351__auto__);
var G__28074 = (0);
seq__28027 = G__28071;
chunk__28028 = G__28072;
count__28029 = G__28073;
i__28030 = G__28074;
continue;
} else {
var w = cljs.core.first.call(null,seq__28027__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__28075 = cljs.core.next.call(null,seq__28027__$1);
var G__28076 = null;
var G__28077 = (0);
var G__28078 = (0);
seq__28027 = G__28075;
chunk__28028 = G__28076;
count__28029 = G__28077;
i__28030 = G__28078;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_inline_code_message_max_column_STAR_28026,warn,warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_28065,promise_chain_28066))
);
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR_28026;
}});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_28065,promise_chain_28066))
);
} else {
if(cljs.core.truth_(exception)){
return promise_chain_28066.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_28065,promise_chain_28066){
return (function (){
var _STAR_inline_code_message_max_column_STAR_28031 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (132);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR_28031;
}});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_28065,promise_chain_28066))
);
} else {
return promise_chain_28066.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_28065,promise_chain_28066){
return (function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_28065,promise_chain_28066))
);

}
}
} else {
return null;
}
} else {
return null;
}
});})(last_reload_timestamp_28065,promise_chain_28066))
;

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",ns__$1);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",ns__$1);
}
}
});

figwheel.core.name__GT_path = (function figwheel$core$name__GT_path(ns){
return goog.object.get(goog.dependencies_.nameToPath,ns);
});

figwheel.core.provided_QMARK_ = (function figwheel$core$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.core.name__GT_path.call(null,cljs.core.name.call(null,ns)));
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__3938__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__3938__auto____$1){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.core.provided_QMARK_.call(null,namespace);
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4534__auto__ = [];
var len__4531__auto___28079 = arguments.length;
var i__4532__auto___28080 = (0);
while(true){
if((i__4532__auto___28080 < len__4531__auto___28079)){
args__4534__auto__.push((arguments[i__4532__auto___28080]));

var G__28081 = (i__4532__auto___28080 + (1));
i__4532__auto___28080 = G__28081;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__28034){
var vec__28035 = p__28034;
var n = cljs.core.nth.call(null,vec__28035,(0),null);
var mdata = cljs.core.nth.call(null,vec__28035,(1),null);
var temp__5457__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__28038 = cljs.core.seq.call(null,hooks);
var chunk__28039 = null;
var count__28040 = (0);
var i__28041 = (0);
while(true){
if((i__28041 < count__28040)){
var vec__28042 = cljs.core._nth.call(null,chunk__28039,i__28041);
var n = cljs.core.nth.call(null,vec__28042,(0),null);
var f = cljs.core.nth.call(null,vec__28042,(1),null);
var temp__5455__auto___28082 = cljs.core.reduce.call(null,((function (seq__28038,chunk__28039,count__28040,i__28041,vec__28042,n,f,hooks){
return (function (p1__28018_SHARP_,p2__28019_SHARP_){
if(cljs.core.truth_(p1__28018_SHARP_)){
return goog.object.get(p1__28018_SHARP_,p2__28019_SHARP_);
} else {
return null;
}
});})(seq__28038,chunk__28039,count__28040,i__28041,vec__28042,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5455__auto___28082)){
var hook_28083 = temp__5455__auto___28082;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_28083,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__28084 = seq__28038;
var G__28085 = chunk__28039;
var G__28086 = count__28040;
var G__28087 = (i__28041 + (1));
seq__28038 = G__28084;
chunk__28039 = G__28085;
count__28040 = G__28086;
i__28041 = G__28087;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28038);
if(temp__5457__auto__){
var seq__28038__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28038__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__28038__$1);
var G__28088 = cljs.core.chunk_rest.call(null,seq__28038__$1);
var G__28089 = c__4351__auto__;
var G__28090 = cljs.core.count.call(null,c__4351__auto__);
var G__28091 = (0);
seq__28038 = G__28088;
chunk__28039 = G__28089;
count__28040 = G__28090;
i__28041 = G__28091;
continue;
} else {
var vec__28045 = cljs.core.first.call(null,seq__28038__$1);
var n = cljs.core.nth.call(null,vec__28045,(0),null);
var f = cljs.core.nth.call(null,vec__28045,(1),null);
var temp__5455__auto___28092 = cljs.core.reduce.call(null,((function (seq__28038,chunk__28039,count__28040,i__28041,vec__28045,n,f,seq__28038__$1,temp__5457__auto__,hooks){
return (function (p1__28018_SHARP_,p2__28019_SHARP_){
if(cljs.core.truth_(p1__28018_SHARP_)){
return goog.object.get(p1__28018_SHARP_,p2__28019_SHARP_);
} else {
return null;
}
});})(seq__28038,chunk__28039,count__28040,i__28041,vec__28045,n,f,seq__28038__$1,temp__5457__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5455__auto___28092)){
var hook_28093 = temp__5455__auto___28092;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_28093,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__28094 = cljs.core.next.call(null,seq__28038__$1);
var G__28095 = null;
var G__28096 = (0);
var G__28097 = (0);
seq__28038 = G__28094;
chunk__28039 = G__28095;
count__28040 = G__28096;
i__28041 = G__28097;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq28032){
var G__28033 = cljs.core.first.call(null,seq28032);
var seq28032__$1 = cljs.core.next.call(null,seq28032);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28033,seq28032__$1);
});


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__28048){
var vec__28049 = p__28048;
var k = cljs.core.nth.call(null,vec__28049,(0),null);
var v = cljs.core.nth.call(null,vec__28049,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,((function (figwheel_meta__$1){
return (function (p1__28020_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__28020_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__28020_SHARP_));
});})(figwheel_meta__$1))
,namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__28021_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__28021_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
});})(figwheel_meta__$1,namespaces__$1))
);

var to_reload = (cljs.core.truth_((function (){var and__3938__auto__ = !(figwheel.core.load_warninged_code);
if(and__3938__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__3938__auto__;
}
})())?null:cljs.core.filter.call(null,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__28022_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__28022_SHARP_);
});})(figwheel_meta__$1,namespaces__$1))
,namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout(((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
});})(to_reload,figwheel_meta__$1,namespaces__$1))
,(0));
}

var seq__28052_28098 = cljs.core.seq.call(null,to_reload);
var chunk__28053_28099 = null;
var count__28054_28100 = (0);
var i__28055_28101 = (0);
while(true){
if((i__28055_28101 < count__28054_28100)){
var ns_28102 = cljs.core._nth.call(null,chunk__28053_28099,i__28055_28101);
goog.require(cljs.core.name.call(null,ns_28102),true);


var G__28103 = seq__28052_28098;
var G__28104 = chunk__28053_28099;
var G__28105 = count__28054_28100;
var G__28106 = (i__28055_28101 + (1));
seq__28052_28098 = G__28103;
chunk__28053_28099 = G__28104;
count__28054_28100 = G__28105;
i__28055_28101 = G__28106;
continue;
} else {
var temp__5457__auto___28107 = cljs.core.seq.call(null,seq__28052_28098);
if(temp__5457__auto___28107){
var seq__28052_28108__$1 = temp__5457__auto___28107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28052_28108__$1)){
var c__4351__auto___28109 = cljs.core.chunk_first.call(null,seq__28052_28108__$1);
var G__28110 = cljs.core.chunk_rest.call(null,seq__28052_28108__$1);
var G__28111 = c__4351__auto___28109;
var G__28112 = cljs.core.count.call(null,c__4351__auto___28109);
var G__28113 = (0);
seq__28052_28098 = G__28110;
chunk__28053_28099 = G__28111;
count__28054_28100 = G__28112;
i__28055_28101 = G__28113;
continue;
} else {
var ns_28114 = cljs.core.first.call(null,seq__28052_28108__$1);
goog.require(cljs.core.name.call(null,ns_28114),true);


var G__28115 = cljs.core.next.call(null,seq__28052_28108__$1);
var G__28116 = null;
var G__28117 = (0);
var G__28118 = (0);
seq__28052_28098 = G__28115;
chunk__28053_28099 = G__28116;
count__28054_28100 = G__28117;
i__28055_28101 = G__28118;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_28119 = ((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
goog.log.info(figwheel.core.logger,["loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,to_reload))].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5457__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5457__auto__)){
var not_loaded = temp__5457__auto__;
return goog.log.info(figwheel.core.logger,["did not load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,not_loaded))].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});})(to_reload,figwheel_meta__$1,namespaces__$1))
;
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_28119);
} else {
setTimeout(after_reload_fn_28119,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__28056 = cljs.core.seq.call(null,warnings);
var chunk__28057 = null;
var count__28058 = (0);
var i__28059 = (0);
while(true){
if((i__28059 < count__28058)){
var warning = cljs.core._nth.call(null,chunk__28057,i__28059);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,warning))].join(''));


var G__28120 = seq__28056;
var G__28121 = chunk__28057;
var G__28122 = count__28058;
var G__28123 = (i__28059 + (1));
seq__28056 = G__28120;
chunk__28057 = G__28121;
count__28058 = G__28122;
i__28059 = G__28123;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28056);
if(temp__5457__auto__){
var seq__28056__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28056__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__28056__$1);
var G__28124 = cljs.core.chunk_rest.call(null,seq__28056__$1);
var G__28125 = c__4351__auto__;
var G__28126 = cljs.core.count.call(null,c__4351__auto__);
var G__28127 = (0);
seq__28056 = G__28124;
chunk__28057 = G__28125;
count__28058 = G__28126;
i__28059 = G__28127;
continue;
} else {
var warning = cljs.core.first.call(null,seq__28056__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,warning))].join(''));


var G__28128 = cljs.core.next.call(null,seq__28056__$1);
var G__28129 = null;
var G__28130 = (0);
var G__28131 = (0);
seq__28056 = G__28128;
chunk__28057 = G__28129;
count__28058 = G__28130;
i__28059 = G__28131;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__28060){
var map__28061 = p__28060;
var map__28061__$1 = ((((!((map__28061 == null)))?(((((map__28061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28061):map__28061);
var exception_data = map__28061__$1;
var file = cljs.core.get.call(null,map__28061__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__28061__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__28061__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout(((function (map__28061,map__28061__$1,exception_data,file,type,message){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
});})(map__28061,map__28061__$1,exception_data,file,type,message))
,(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (map__28061,map__28061__$1,exception_data,file,type,message){
return (function (p1__28023_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__28023_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
});})(map__28061,map__28061__$1,exception_data,file,type,message))
);

goog.log.info(figwheel.core.logger,"Compile Exception");

if(cljs.core.truth_((function (){var or__3949__auto__ = type;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return message;
}
})())){
goog.log.info(figwheel.core.logger,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null))));
} else {
}

if(cljs.core.truth_(file)){
return goog.log.info(figwheel.core.logger,["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,exception_data))].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
