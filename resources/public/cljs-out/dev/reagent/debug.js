// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__25582__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25582 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25583__i = 0, G__25583__a = new Array(arguments.length -  0);
while (G__25583__i < G__25583__a.length) {G__25583__a[G__25583__i] = arguments[G__25583__i + 0]; ++G__25583__i;}
  args = new cljs.core.IndexedSeq(G__25583__a,0,null);
} 
return G__25582__delegate.call(this,args);};
G__25582.cljs$lang$maxFixedArity = 0;
G__25582.cljs$lang$applyTo = (function (arglist__25584){
var args = cljs.core.seq(arglist__25584);
return G__25582__delegate(args);
});
G__25582.cljs$core$IFn$_invoke$arity$variadic = G__25582__delegate;
return G__25582;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__25585__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25585 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25586__i = 0, G__25586__a = new Array(arguments.length -  0);
while (G__25586__i < G__25586__a.length) {G__25586__a[G__25586__i] = arguments[G__25586__i + 0]; ++G__25586__i;}
  args = new cljs.core.IndexedSeq(G__25586__a,0,null);
} 
return G__25585__delegate.call(this,args);};
G__25585.cljs$lang$maxFixedArity = 0;
G__25585.cljs$lang$applyTo = (function (arglist__25587){
var args = cljs.core.seq(arglist__25587);
return G__25585__delegate(args);
});
G__25585.cljs$core$IFn$_invoke$arity$variadic = G__25585__delegate;
return G__25585;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
