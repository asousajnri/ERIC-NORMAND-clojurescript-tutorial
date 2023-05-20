goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19182){
var map__19183 = p__19182;
var map__19183__$1 = cljs.core.__destructure_map(map__19183);
var m = map__19183__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19183__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19183__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19193_19298 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19194_19299 = null;
var count__19195_19300 = (0);
var i__19196_19301 = (0);
while(true){
if((i__19196_19301 < count__19195_19300)){
var f_19302 = chunk__19194_19299.cljs$core$IIndexed$_nth$arity$2(null,i__19196_19301);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19302], 0));


var G__19303 = seq__19193_19298;
var G__19304 = chunk__19194_19299;
var G__19305 = count__19195_19300;
var G__19306 = (i__19196_19301 + (1));
seq__19193_19298 = G__19303;
chunk__19194_19299 = G__19304;
count__19195_19300 = G__19305;
i__19196_19301 = G__19306;
continue;
} else {
var temp__5804__auto___19307 = cljs.core.seq(seq__19193_19298);
if(temp__5804__auto___19307){
var seq__19193_19308__$1 = temp__5804__auto___19307;
if(cljs.core.chunked_seq_QMARK_(seq__19193_19308__$1)){
var c__5568__auto___19309 = cljs.core.chunk_first(seq__19193_19308__$1);
var G__19310 = cljs.core.chunk_rest(seq__19193_19308__$1);
var G__19311 = c__5568__auto___19309;
var G__19312 = cljs.core.count(c__5568__auto___19309);
var G__19313 = (0);
seq__19193_19298 = G__19310;
chunk__19194_19299 = G__19311;
count__19195_19300 = G__19312;
i__19196_19301 = G__19313;
continue;
} else {
var f_19314 = cljs.core.first(seq__19193_19308__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19314], 0));


var G__19315 = cljs.core.next(seq__19193_19308__$1);
var G__19316 = null;
var G__19317 = (0);
var G__19318 = (0);
seq__19193_19298 = G__19315;
chunk__19194_19299 = G__19316;
count__19195_19300 = G__19317;
i__19196_19301 = G__19318;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19319 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19319], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19319)))?cljs.core.second(arglists_19319):arglists_19319)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19197_19320 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19198_19321 = null;
var count__19199_19322 = (0);
var i__19200_19323 = (0);
while(true){
if((i__19200_19323 < count__19199_19322)){
var vec__19212_19324 = chunk__19198_19321.cljs$core$IIndexed$_nth$arity$2(null,i__19200_19323);
var name_19325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19212_19324,(0),null);
var map__19215_19326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19212_19324,(1),null);
var map__19215_19327__$1 = cljs.core.__destructure_map(map__19215_19326);
var doc_19328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19215_19327__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19215_19327__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19325], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19329], 0));

if(cljs.core.truth_(doc_19328)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19328], 0));
} else {
}


var G__19330 = seq__19197_19320;
var G__19331 = chunk__19198_19321;
var G__19332 = count__19199_19322;
var G__19333 = (i__19200_19323 + (1));
seq__19197_19320 = G__19330;
chunk__19198_19321 = G__19331;
count__19199_19322 = G__19332;
i__19200_19323 = G__19333;
continue;
} else {
var temp__5804__auto___19334 = cljs.core.seq(seq__19197_19320);
if(temp__5804__auto___19334){
var seq__19197_19335__$1 = temp__5804__auto___19334;
if(cljs.core.chunked_seq_QMARK_(seq__19197_19335__$1)){
var c__5568__auto___19336 = cljs.core.chunk_first(seq__19197_19335__$1);
var G__19337 = cljs.core.chunk_rest(seq__19197_19335__$1);
var G__19338 = c__5568__auto___19336;
var G__19339 = cljs.core.count(c__5568__auto___19336);
var G__19340 = (0);
seq__19197_19320 = G__19337;
chunk__19198_19321 = G__19338;
count__19199_19322 = G__19339;
i__19200_19323 = G__19340;
continue;
} else {
var vec__19218_19341 = cljs.core.first(seq__19197_19335__$1);
var name_19342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19218_19341,(0),null);
var map__19222_19343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19218_19341,(1),null);
var map__19222_19344__$1 = cljs.core.__destructure_map(map__19222_19343);
var doc_19345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19222_19344__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19222_19344__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19342], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19346], 0));

if(cljs.core.truth_(doc_19345)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19345], 0));
} else {
}


var G__19347 = cljs.core.next(seq__19197_19335__$1);
var G__19348 = null;
var G__19349 = (0);
var G__19350 = (0);
seq__19197_19320 = G__19347;
chunk__19198_19321 = G__19348;
count__19199_19322 = G__19349;
i__19200_19323 = G__19350;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19224 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19225 = null;
var count__19226 = (0);
var i__19227 = (0);
while(true){
if((i__19227 < count__19226)){
var role = chunk__19225.cljs$core$IIndexed$_nth$arity$2(null,i__19227);
var temp__5804__auto___19351__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19351__$1)){
var spec_19352 = temp__5804__auto___19351__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19352)], 0));
} else {
}


var G__19353 = seq__19224;
var G__19354 = chunk__19225;
var G__19355 = count__19226;
var G__19356 = (i__19227 + (1));
seq__19224 = G__19353;
chunk__19225 = G__19354;
count__19226 = G__19355;
i__19227 = G__19356;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19224);
if(temp__5804__auto____$1){
var seq__19224__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19224__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19224__$1);
var G__19357 = cljs.core.chunk_rest(seq__19224__$1);
var G__19358 = c__5568__auto__;
var G__19359 = cljs.core.count(c__5568__auto__);
var G__19360 = (0);
seq__19224 = G__19357;
chunk__19225 = G__19358;
count__19226 = G__19359;
i__19227 = G__19360;
continue;
} else {
var role = cljs.core.first(seq__19224__$1);
var temp__5804__auto___19361__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19361__$2)){
var spec_19362 = temp__5804__auto___19361__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19362)], 0));
} else {
}


var G__19363 = cljs.core.next(seq__19224__$1);
var G__19364 = null;
var G__19365 = (0);
var G__19366 = (0);
seq__19224 = G__19363;
chunk__19225 = G__19364;
count__19226 = G__19365;
i__19227 = G__19366;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19367 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__19368 = cljs.core.ex_cause(t);
via = G__19367;
t = G__19368;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19230 = datafied_throwable;
var map__19230__$1 = cljs.core.__destructure_map(map__19230);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19230__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19230__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19230__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19231 = cljs.core.last(via);
var map__19231__$1 = cljs.core.__destructure_map(map__19231);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19231__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19231__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19231__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19232 = data;
var map__19232__$1 = cljs.core.__destructure_map(map__19232);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19232__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19232__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19232__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19233 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19233__$1 = cljs.core.__destructure_map(map__19233);
var top_data = map__19233__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19233__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19236 = phase;
var G__19236__$1 = (((G__19236 instanceof cljs.core.Keyword))?G__19236.fqn:null);
switch (G__19236__$1) {
case "read-source":
var map__19237 = data;
var map__19237__$1 = cljs.core.__destructure_map(map__19237);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19237__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19237__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19238 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19238__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19238,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19238);
var G__19238__$2 = (cljs.core.truth_((function (){var fexpr__19240 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19240.cljs$core$IFn$_invoke$arity$1 ? fexpr__19240.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19240.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19238__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19238__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19238__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19238__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19241 = top_data;
var G__19241__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19241,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19241);
var G__19241__$2 = (cljs.core.truth_((function (){var fexpr__19242 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19242.cljs$core$IFn$_invoke$arity$1 ? fexpr__19242.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19242.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19241__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19241__$1);
var G__19241__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19241__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19241__$2);
var G__19241__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19241__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19241__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19241__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19241__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19243 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19243,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19243,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19243,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19243,(3),null);
var G__19246 = top_data;
var G__19246__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19246,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19246);
var G__19246__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19246__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19246__$1);
var G__19246__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19246__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19246__$2);
var G__19246__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19246__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19246__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19246__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19246__$4;
}

break;
case "execution":
var vec__19248 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19248,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19248,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19248,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19248,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19229_SHARP_){
var or__5045__auto__ = (p1__19229_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__19252 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19252.cljs$core$IFn$_invoke$arity$1 ? fexpr__19252.cljs$core$IFn$_invoke$arity$1(p1__19229_SHARP_) : fexpr__19252.call(null,p1__19229_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__19253 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19253__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19253,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19253);
var G__19253__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19253__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19253__$1);
var G__19253__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19253__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19253__$2);
var G__19253__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19253__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19253__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19253__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19253__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19236__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19256){
var map__19257 = p__19256;
var map__19257__$1 = cljs.core.__destructure_map(map__19257);
var triage_data = map__19257__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19257__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19257__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19257__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19257__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19257__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19257__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19257__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19257__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19261 = phase;
var G__19261__$1 = (((G__19261 instanceof cljs.core.Keyword))?G__19261.fqn:null);
switch (G__19261__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19262 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19263 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19264 = loc;
var G__19265 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19266_19388 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19267_19389 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19268_19390 = true;
var _STAR_print_fn_STAR__temp_val__19269_19391 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19268_19390);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19269_19391);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19254_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19254_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19267_19389);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19266_19388);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19262,G__19263,G__19264,G__19265) : format.call(null,G__19262,G__19263,G__19264,G__19265));

break;
case "macroexpansion":
var G__19270 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19271 = cause_type;
var G__19272 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19273 = loc;
var G__19274 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19270,G__19271,G__19272,G__19273,G__19274) : format.call(null,G__19270,G__19271,G__19272,G__19273,G__19274));

break;
case "compile-syntax-check":
var G__19275 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19276 = cause_type;
var G__19277 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19278 = loc;
var G__19279 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19275,G__19276,G__19277,G__19278,G__19279) : format.call(null,G__19275,G__19276,G__19277,G__19278,G__19279));

break;
case "compilation":
var G__19280 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19281 = cause_type;
var G__19282 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19283 = loc;
var G__19284 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19280,G__19281,G__19282,G__19283,G__19284) : format.call(null,G__19280,G__19281,G__19282,G__19283,G__19284));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19285 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19286 = symbol;
var G__19287 = loc;
var G__19288 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19289_19396 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19290_19397 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19291_19398 = true;
var _STAR_print_fn_STAR__temp_val__19292_19399 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19291_19398);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19292_19399);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19255_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19255_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19290_19397);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19289_19396);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19285,G__19286,G__19287,G__19288) : format.call(null,G__19285,G__19286,G__19287,G__19288));
} else {
var G__19293 = "Execution error%s at %s(%s).\n%s\n";
var G__19294 = cause_type;
var G__19295 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19296 = loc;
var G__19297 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19293,G__19294,G__19295,G__19296,G__19297) : format.call(null,G__19293,G__19294,G__19295,G__19296,G__19297));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19261__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
