goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_16418 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_16418(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_16419 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_16419(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__15513 = coll;
var G__15514 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__15513,G__15514) : shadow.dom.lazy_native_coll_seq.call(null,G__15513,G__15514));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__15517 = arguments.length;
switch (G__15517) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__15519 = arguments.length;
switch (G__15519) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__15522 = arguments.length;
switch (G__15522) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__15524 = arguments.length;
switch (G__15524) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__15528 = arguments.length;
switch (G__15528) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__15531 = arguments.length;
switch (G__15531) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e15534){if((e15534 instanceof Object)){
var e = e15534;
return console.log("didnt support attachEvent",el,e);
} else {
throw e15534;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__15538 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__15539 = null;
var count__15540 = (0);
var i__15541 = (0);
while(true){
if((i__15541 < count__15540)){
var el = chunk__15539.cljs$core$IIndexed$_nth$arity$2(null,i__15541);
var handler_16453__$1 = ((function (seq__15538,chunk__15539,count__15540,i__15541,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__15538,chunk__15539,count__15540,i__15541,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16453__$1);


var G__16455 = seq__15538;
var G__16456 = chunk__15539;
var G__16457 = count__15540;
var G__16458 = (i__15541 + (1));
seq__15538 = G__16455;
chunk__15539 = G__16456;
count__15540 = G__16457;
i__15541 = G__16458;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15538);
if(temp__5804__auto__){
var seq__15538__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15538__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__15538__$1);
var G__16460 = cljs.core.chunk_rest(seq__15538__$1);
var G__16461 = c__5568__auto__;
var G__16462 = cljs.core.count(c__5568__auto__);
var G__16463 = (0);
seq__15538 = G__16460;
chunk__15539 = G__16461;
count__15540 = G__16462;
i__15541 = G__16463;
continue;
} else {
var el = cljs.core.first(seq__15538__$1);
var handler_16464__$1 = ((function (seq__15538,chunk__15539,count__15540,i__15541,el,seq__15538__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__15538,chunk__15539,count__15540,i__15541,el,seq__15538__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16464__$1);


var G__16467 = cljs.core.next(seq__15538__$1);
var G__16468 = null;
var G__16469 = (0);
var G__16470 = (0);
seq__15538 = G__16467;
chunk__15539 = G__16468;
count__15540 = G__16469;
i__15541 = G__16470;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__15546 = arguments.length;
switch (G__15546) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__15547 = cljs.core.seq(events);
var chunk__15548 = null;
var count__15549 = (0);
var i__15550 = (0);
while(true){
if((i__15550 < count__15549)){
var vec__15561 = chunk__15548.cljs$core$IIndexed$_nth$arity$2(null,i__15550);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15561,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15561,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16489 = seq__15547;
var G__16490 = chunk__15548;
var G__16491 = count__15549;
var G__16492 = (i__15550 + (1));
seq__15547 = G__16489;
chunk__15548 = G__16490;
count__15549 = G__16491;
i__15550 = G__16492;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15547);
if(temp__5804__auto__){
var seq__15547__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15547__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__15547__$1);
var G__16493 = cljs.core.chunk_rest(seq__15547__$1);
var G__16494 = c__5568__auto__;
var G__16495 = cljs.core.count(c__5568__auto__);
var G__16496 = (0);
seq__15547 = G__16493;
chunk__15548 = G__16494;
count__15549 = G__16495;
i__15550 = G__16496;
continue;
} else {
var vec__15564 = cljs.core.first(seq__15547__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15564,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15564,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16497 = cljs.core.next(seq__15547__$1);
var G__16498 = null;
var G__16499 = (0);
var G__16500 = (0);
seq__15547 = G__16497;
chunk__15548 = G__16498;
count__15549 = G__16499;
i__15550 = G__16500;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__15569 = cljs.core.seq(styles);
var chunk__15570 = null;
var count__15571 = (0);
var i__15572 = (0);
while(true){
if((i__15572 < count__15571)){
var vec__15587 = chunk__15570.cljs$core$IIndexed$_nth$arity$2(null,i__15572);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15587,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15587,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16503 = seq__15569;
var G__16504 = chunk__15570;
var G__16505 = count__15571;
var G__16506 = (i__15572 + (1));
seq__15569 = G__16503;
chunk__15570 = G__16504;
count__15571 = G__16505;
i__15572 = G__16506;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15569);
if(temp__5804__auto__){
var seq__15569__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15569__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__15569__$1);
var G__16507 = cljs.core.chunk_rest(seq__15569__$1);
var G__16508 = c__5568__auto__;
var G__16509 = cljs.core.count(c__5568__auto__);
var G__16510 = (0);
seq__15569 = G__16507;
chunk__15570 = G__16508;
count__15571 = G__16509;
i__15572 = G__16510;
continue;
} else {
var vec__15593 = cljs.core.first(seq__15569__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15593,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15593,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16511 = cljs.core.next(seq__15569__$1);
var G__16512 = null;
var G__16513 = (0);
var G__16514 = (0);
seq__15569 = G__16511;
chunk__15570 = G__16512;
count__15571 = G__16513;
i__15572 = G__16514;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__15599_16516 = key;
var G__15599_16517__$1 = (((G__15599_16516 instanceof cljs.core.Keyword))?G__15599_16516.fqn:null);
switch (G__15599_16517__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_16521 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_16521,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_16521,"aria-");
}
})())){
el.setAttribute(ks_16521,value);
} else {
(el[ks_16521] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__15618){
var map__15619 = p__15618;
var map__15619__$1 = cljs.core.__destructure_map(map__15619);
var props = map__15619__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15619__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__15621 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15621,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15621,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15621,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__15624 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__15624,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__15624;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__15628 = arguments.length;
switch (G__15628) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__15632){
var vec__15633 = p__15632;
var seq__15634 = cljs.core.seq(vec__15633);
var first__15635 = cljs.core.first(seq__15634);
var seq__15634__$1 = cljs.core.next(seq__15634);
var nn = first__15635;
var first__15635__$1 = cljs.core.first(seq__15634__$1);
var seq__15634__$2 = cljs.core.next(seq__15634__$1);
var np = first__15635__$1;
var nc = seq__15634__$2;
var node = vec__15633;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15637 = nn;
var G__15638 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15637,G__15638) : create_fn.call(null,G__15637,G__15638));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15639 = nn;
var G__15640 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15639,G__15640) : create_fn.call(null,G__15639,G__15640));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__15646 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15646,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15646,(1),null);
var seq__15649_16574 = cljs.core.seq(node_children);
var chunk__15650_16575 = null;
var count__15651_16576 = (0);
var i__15652_16577 = (0);
while(true){
if((i__15652_16577 < count__15651_16576)){
var child_struct_16578 = chunk__15650_16575.cljs$core$IIndexed$_nth$arity$2(null,i__15652_16577);
var children_16579 = shadow.dom.dom_node(child_struct_16578);
if(cljs.core.seq_QMARK_(children_16579)){
var seq__15669_16580 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16579));
var chunk__15671_16581 = null;
var count__15672_16582 = (0);
var i__15673_16583 = (0);
while(true){
if((i__15673_16583 < count__15672_16582)){
var child_16584 = chunk__15671_16581.cljs$core$IIndexed$_nth$arity$2(null,i__15673_16583);
if(cljs.core.truth_(child_16584)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16584);


var G__16585 = seq__15669_16580;
var G__16586 = chunk__15671_16581;
var G__16587 = count__15672_16582;
var G__16588 = (i__15673_16583 + (1));
seq__15669_16580 = G__16585;
chunk__15671_16581 = G__16586;
count__15672_16582 = G__16587;
i__15673_16583 = G__16588;
continue;
} else {
var G__16589 = seq__15669_16580;
var G__16590 = chunk__15671_16581;
var G__16591 = count__15672_16582;
var G__16592 = (i__15673_16583 + (1));
seq__15669_16580 = G__16589;
chunk__15671_16581 = G__16590;
count__15672_16582 = G__16591;
i__15673_16583 = G__16592;
continue;
}
} else {
var temp__5804__auto___16593 = cljs.core.seq(seq__15669_16580);
if(temp__5804__auto___16593){
var seq__15669_16594__$1 = temp__5804__auto___16593;
if(cljs.core.chunked_seq_QMARK_(seq__15669_16594__$1)){
var c__5568__auto___16595 = cljs.core.chunk_first(seq__15669_16594__$1);
var G__16596 = cljs.core.chunk_rest(seq__15669_16594__$1);
var G__16597 = c__5568__auto___16595;
var G__16598 = cljs.core.count(c__5568__auto___16595);
var G__16599 = (0);
seq__15669_16580 = G__16596;
chunk__15671_16581 = G__16597;
count__15672_16582 = G__16598;
i__15673_16583 = G__16599;
continue;
} else {
var child_16600 = cljs.core.first(seq__15669_16594__$1);
if(cljs.core.truth_(child_16600)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16600);


var G__16601 = cljs.core.next(seq__15669_16594__$1);
var G__16602 = null;
var G__16603 = (0);
var G__16604 = (0);
seq__15669_16580 = G__16601;
chunk__15671_16581 = G__16602;
count__15672_16582 = G__16603;
i__15673_16583 = G__16604;
continue;
} else {
var G__16605 = cljs.core.next(seq__15669_16594__$1);
var G__16606 = null;
var G__16607 = (0);
var G__16608 = (0);
seq__15669_16580 = G__16605;
chunk__15671_16581 = G__16606;
count__15672_16582 = G__16607;
i__15673_16583 = G__16608;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16579);
}


var G__16609 = seq__15649_16574;
var G__16610 = chunk__15650_16575;
var G__16611 = count__15651_16576;
var G__16612 = (i__15652_16577 + (1));
seq__15649_16574 = G__16609;
chunk__15650_16575 = G__16610;
count__15651_16576 = G__16611;
i__15652_16577 = G__16612;
continue;
} else {
var temp__5804__auto___16613 = cljs.core.seq(seq__15649_16574);
if(temp__5804__auto___16613){
var seq__15649_16614__$1 = temp__5804__auto___16613;
if(cljs.core.chunked_seq_QMARK_(seq__15649_16614__$1)){
var c__5568__auto___16615 = cljs.core.chunk_first(seq__15649_16614__$1);
var G__16616 = cljs.core.chunk_rest(seq__15649_16614__$1);
var G__16617 = c__5568__auto___16615;
var G__16618 = cljs.core.count(c__5568__auto___16615);
var G__16619 = (0);
seq__15649_16574 = G__16616;
chunk__15650_16575 = G__16617;
count__15651_16576 = G__16618;
i__15652_16577 = G__16619;
continue;
} else {
var child_struct_16620 = cljs.core.first(seq__15649_16614__$1);
var children_16621 = shadow.dom.dom_node(child_struct_16620);
if(cljs.core.seq_QMARK_(children_16621)){
var seq__15683_16622 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16621));
var chunk__15685_16623 = null;
var count__15686_16624 = (0);
var i__15687_16625 = (0);
while(true){
if((i__15687_16625 < count__15686_16624)){
var child_16626 = chunk__15685_16623.cljs$core$IIndexed$_nth$arity$2(null,i__15687_16625);
if(cljs.core.truth_(child_16626)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16626);


var G__16627 = seq__15683_16622;
var G__16628 = chunk__15685_16623;
var G__16629 = count__15686_16624;
var G__16630 = (i__15687_16625 + (1));
seq__15683_16622 = G__16627;
chunk__15685_16623 = G__16628;
count__15686_16624 = G__16629;
i__15687_16625 = G__16630;
continue;
} else {
var G__16631 = seq__15683_16622;
var G__16632 = chunk__15685_16623;
var G__16633 = count__15686_16624;
var G__16634 = (i__15687_16625 + (1));
seq__15683_16622 = G__16631;
chunk__15685_16623 = G__16632;
count__15686_16624 = G__16633;
i__15687_16625 = G__16634;
continue;
}
} else {
var temp__5804__auto___16635__$1 = cljs.core.seq(seq__15683_16622);
if(temp__5804__auto___16635__$1){
var seq__15683_16636__$1 = temp__5804__auto___16635__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15683_16636__$1)){
var c__5568__auto___16637 = cljs.core.chunk_first(seq__15683_16636__$1);
var G__16638 = cljs.core.chunk_rest(seq__15683_16636__$1);
var G__16639 = c__5568__auto___16637;
var G__16640 = cljs.core.count(c__5568__auto___16637);
var G__16641 = (0);
seq__15683_16622 = G__16638;
chunk__15685_16623 = G__16639;
count__15686_16624 = G__16640;
i__15687_16625 = G__16641;
continue;
} else {
var child_16642 = cljs.core.first(seq__15683_16636__$1);
if(cljs.core.truth_(child_16642)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16642);


var G__16643 = cljs.core.next(seq__15683_16636__$1);
var G__16644 = null;
var G__16645 = (0);
var G__16646 = (0);
seq__15683_16622 = G__16643;
chunk__15685_16623 = G__16644;
count__15686_16624 = G__16645;
i__15687_16625 = G__16646;
continue;
} else {
var G__16647 = cljs.core.next(seq__15683_16636__$1);
var G__16648 = null;
var G__16649 = (0);
var G__16650 = (0);
seq__15683_16622 = G__16647;
chunk__15685_16623 = G__16648;
count__15686_16624 = G__16649;
i__15687_16625 = G__16650;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16621);
}


var G__16651 = cljs.core.next(seq__15649_16614__$1);
var G__16652 = null;
var G__16653 = (0);
var G__16654 = (0);
seq__15649_16574 = G__16651;
chunk__15650_16575 = G__16652;
count__15651_16576 = G__16653;
i__15652_16577 = G__16654;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__15707 = cljs.core.seq(node);
var chunk__15708 = null;
var count__15709 = (0);
var i__15710 = (0);
while(true){
if((i__15710 < count__15709)){
var n = chunk__15708.cljs$core$IIndexed$_nth$arity$2(null,i__15710);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16659 = seq__15707;
var G__16660 = chunk__15708;
var G__16661 = count__15709;
var G__16662 = (i__15710 + (1));
seq__15707 = G__16659;
chunk__15708 = G__16660;
count__15709 = G__16661;
i__15710 = G__16662;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15707);
if(temp__5804__auto__){
var seq__15707__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15707__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__15707__$1);
var G__16663 = cljs.core.chunk_rest(seq__15707__$1);
var G__16664 = c__5568__auto__;
var G__16665 = cljs.core.count(c__5568__auto__);
var G__16666 = (0);
seq__15707 = G__16663;
chunk__15708 = G__16664;
count__15709 = G__16665;
i__15710 = G__16666;
continue;
} else {
var n = cljs.core.first(seq__15707__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16667 = cljs.core.next(seq__15707__$1);
var G__16668 = null;
var G__16669 = (0);
var G__16670 = (0);
seq__15707 = G__16667;
chunk__15708 = G__16668;
count__15709 = G__16669;
i__15710 = G__16670;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__15712 = arguments.length;
switch (G__15712) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__15714 = arguments.length;
switch (G__15714) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__15716 = arguments.length;
switch (G__15716) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16699 = arguments.length;
var i__5770__auto___16700 = (0);
while(true){
if((i__5770__auto___16700 < len__5769__auto___16699)){
args__5775__auto__.push((arguments[i__5770__auto___16700]));

var G__16704 = (i__5770__auto___16700 + (1));
i__5770__auto___16700 = G__16704;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__15732_16705 = cljs.core.seq(nodes);
var chunk__15733_16706 = null;
var count__15734_16707 = (0);
var i__15735_16708 = (0);
while(true){
if((i__15735_16708 < count__15734_16707)){
var node_16709 = chunk__15733_16706.cljs$core$IIndexed$_nth$arity$2(null,i__15735_16708);
fragment.appendChild(shadow.dom._to_dom(node_16709));


var G__16710 = seq__15732_16705;
var G__16711 = chunk__15733_16706;
var G__16712 = count__15734_16707;
var G__16713 = (i__15735_16708 + (1));
seq__15732_16705 = G__16710;
chunk__15733_16706 = G__16711;
count__15734_16707 = G__16712;
i__15735_16708 = G__16713;
continue;
} else {
var temp__5804__auto___16714 = cljs.core.seq(seq__15732_16705);
if(temp__5804__auto___16714){
var seq__15732_16715__$1 = temp__5804__auto___16714;
if(cljs.core.chunked_seq_QMARK_(seq__15732_16715__$1)){
var c__5568__auto___16716 = cljs.core.chunk_first(seq__15732_16715__$1);
var G__16717 = cljs.core.chunk_rest(seq__15732_16715__$1);
var G__16718 = c__5568__auto___16716;
var G__16719 = cljs.core.count(c__5568__auto___16716);
var G__16720 = (0);
seq__15732_16705 = G__16717;
chunk__15733_16706 = G__16718;
count__15734_16707 = G__16719;
i__15735_16708 = G__16720;
continue;
} else {
var node_16721 = cljs.core.first(seq__15732_16715__$1);
fragment.appendChild(shadow.dom._to_dom(node_16721));


var G__16722 = cljs.core.next(seq__15732_16715__$1);
var G__16723 = null;
var G__16724 = (0);
var G__16725 = (0);
seq__15732_16705 = G__16722;
chunk__15733_16706 = G__16723;
count__15734_16707 = G__16724;
i__15735_16708 = G__16725;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq15731){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15731));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__15772_16726 = cljs.core.seq(scripts);
var chunk__15773_16727 = null;
var count__15774_16728 = (0);
var i__15775_16729 = (0);
while(true){
if((i__15775_16729 < count__15774_16728)){
var vec__15787_16730 = chunk__15773_16727.cljs$core$IIndexed$_nth$arity$2(null,i__15775_16729);
var script_tag_16731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15787_16730,(0),null);
var script_body_16732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15787_16730,(1),null);
eval(script_body_16732);


var G__16733 = seq__15772_16726;
var G__16734 = chunk__15773_16727;
var G__16735 = count__15774_16728;
var G__16736 = (i__15775_16729 + (1));
seq__15772_16726 = G__16733;
chunk__15773_16727 = G__16734;
count__15774_16728 = G__16735;
i__15775_16729 = G__16736;
continue;
} else {
var temp__5804__auto___16737 = cljs.core.seq(seq__15772_16726);
if(temp__5804__auto___16737){
var seq__15772_16738__$1 = temp__5804__auto___16737;
if(cljs.core.chunked_seq_QMARK_(seq__15772_16738__$1)){
var c__5568__auto___16739 = cljs.core.chunk_first(seq__15772_16738__$1);
var G__16740 = cljs.core.chunk_rest(seq__15772_16738__$1);
var G__16741 = c__5568__auto___16739;
var G__16742 = cljs.core.count(c__5568__auto___16739);
var G__16743 = (0);
seq__15772_16726 = G__16740;
chunk__15773_16727 = G__16741;
count__15774_16728 = G__16742;
i__15775_16729 = G__16743;
continue;
} else {
var vec__15791_16744 = cljs.core.first(seq__15772_16738__$1);
var script_tag_16745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15791_16744,(0),null);
var script_body_16746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15791_16744,(1),null);
eval(script_body_16746);


var G__16747 = cljs.core.next(seq__15772_16738__$1);
var G__16748 = null;
var G__16749 = (0);
var G__16750 = (0);
seq__15772_16726 = G__16747;
chunk__15773_16727 = G__16748;
count__15774_16728 = G__16749;
i__15775_16729 = G__16750;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__15797){
var vec__15798 = p__15797;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15798,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15798,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__15838 = arguments.length;
switch (G__15838) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__15871 = cljs.core.seq(style_keys);
var chunk__15872 = null;
var count__15873 = (0);
var i__15874 = (0);
while(true){
if((i__15874 < count__15873)){
var it = chunk__15872.cljs$core$IIndexed$_nth$arity$2(null,i__15874);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16765 = seq__15871;
var G__16766 = chunk__15872;
var G__16767 = count__15873;
var G__16768 = (i__15874 + (1));
seq__15871 = G__16765;
chunk__15872 = G__16766;
count__15873 = G__16767;
i__15874 = G__16768;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15871);
if(temp__5804__auto__){
var seq__15871__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15871__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__15871__$1);
var G__16770 = cljs.core.chunk_rest(seq__15871__$1);
var G__16771 = c__5568__auto__;
var G__16772 = cljs.core.count(c__5568__auto__);
var G__16773 = (0);
seq__15871 = G__16770;
chunk__15872 = G__16771;
count__15873 = G__16772;
i__15874 = G__16773;
continue;
} else {
var it = cljs.core.first(seq__15871__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16774 = cljs.core.next(seq__15871__$1);
var G__16775 = null;
var G__16776 = (0);
var G__16777 = (0);
seq__15871 = G__16774;
chunk__15872 = G__16775;
count__15873 = G__16776;
i__15874 = G__16777;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k15878,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__15896 = k15878;
var G__15896__$1 = (((G__15896 instanceof cljs.core.Keyword))?G__15896.fqn:null);
switch (G__15896__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15878,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__15897){
var vec__15898 = p__15897;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15898,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15898,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15877){
var self__ = this;
var G__15877__$1 = this;
return (new cljs.core.RecordIter((0),G__15877__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15879,other15880){
var self__ = this;
var this15879__$1 = this;
return (((!((other15880 == null)))) && ((((this15879__$1.constructor === other15880.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15879__$1.x,other15880.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15879__$1.y,other15880.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15879__$1.__extmap,other15880.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k15878){
var self__ = this;
var this__5350__auto____$1 = this;
var G__15962 = k15878;
var G__15962__$1 = (((G__15962 instanceof cljs.core.Keyword))?G__15962.fqn:null);
switch (G__15962__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15878);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__15877){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__15967 = cljs.core.keyword_identical_QMARK_;
var expr__15968 = k__5352__auto__;
if(cljs.core.truth_((pred__15967.cljs$core$IFn$_invoke$arity$2 ? pred__15967.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__15968) : pred__15967.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__15968)))){
return (new shadow.dom.Coordinate(G__15877,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15967.cljs$core$IFn$_invoke$arity$2 ? pred__15967.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__15968) : pred__15967.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__15968)))){
return (new shadow.dom.Coordinate(self__.x,G__15877,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__15877),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__15877){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__15877,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__15893){
var extmap__5385__auto__ = (function (){var G__15976 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15893,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__15893)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15976);
} else {
return G__15976;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__15893),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__15893),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k15997,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__16004 = k15997;
var G__16004__$1 = (((G__16004 instanceof cljs.core.Keyword))?G__16004.fqn:null);
switch (G__16004__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15997,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__16005){
var vec__16006 = p__16005;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16006,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16006,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15996){
var self__ = this;
var G__15996__$1 = this;
return (new cljs.core.RecordIter((0),G__15996__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15998,other15999){
var self__ = this;
var this15998__$1 = this;
return (((!((other15999 == null)))) && ((((this15998__$1.constructor === other15999.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15998__$1.w,other15999.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15998__$1.h,other15999.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15998__$1.__extmap,other15999.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k15997){
var self__ = this;
var this__5350__auto____$1 = this;
var G__16039 = k15997;
var G__16039__$1 = (((G__16039 instanceof cljs.core.Keyword))?G__16039.fqn:null);
switch (G__16039__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15997);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__15996){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__16040 = cljs.core.keyword_identical_QMARK_;
var expr__16041 = k__5352__auto__;
if(cljs.core.truth_((pred__16040.cljs$core$IFn$_invoke$arity$2 ? pred__16040.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__16041) : pred__16040.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__16041)))){
return (new shadow.dom.Size(G__15996,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16040.cljs$core$IFn$_invoke$arity$2 ? pred__16040.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__16041) : pred__16040.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__16041)))){
return (new shadow.dom.Size(self__.w,G__15996,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__15996),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__15996){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__15996,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__16001){
var extmap__5385__auto__ = (function (){var G__16064 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16001,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__16001)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16064);
} else {
return G__16064;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__16001),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__16001),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__16853 = (i + (1));
var G__16854 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16853;
ret = G__16854;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16096){
var vec__16097 = p__16096;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16097,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16097,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__16103 = arguments.length;
switch (G__16103) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16871 = ps;
var G__16872 = (i + (1));
el__$1 = G__16871;
i = G__16872;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__16111 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16111,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16111,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16111,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__16114_16876 = cljs.core.seq(props);
var chunk__16115_16877 = null;
var count__16116_16878 = (0);
var i__16117_16879 = (0);
while(true){
if((i__16117_16879 < count__16116_16878)){
var vec__16129_16880 = chunk__16115_16877.cljs$core$IIndexed$_nth$arity$2(null,i__16117_16879);
var k_16881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16129_16880,(0),null);
var v_16882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16129_16880,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16881);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16881),v_16882);


var G__16883 = seq__16114_16876;
var G__16884 = chunk__16115_16877;
var G__16885 = count__16116_16878;
var G__16886 = (i__16117_16879 + (1));
seq__16114_16876 = G__16883;
chunk__16115_16877 = G__16884;
count__16116_16878 = G__16885;
i__16117_16879 = G__16886;
continue;
} else {
var temp__5804__auto___16887 = cljs.core.seq(seq__16114_16876);
if(temp__5804__auto___16887){
var seq__16114_16888__$1 = temp__5804__auto___16887;
if(cljs.core.chunked_seq_QMARK_(seq__16114_16888__$1)){
var c__5568__auto___16890 = cljs.core.chunk_first(seq__16114_16888__$1);
var G__16891 = cljs.core.chunk_rest(seq__16114_16888__$1);
var G__16892 = c__5568__auto___16890;
var G__16893 = cljs.core.count(c__5568__auto___16890);
var G__16894 = (0);
seq__16114_16876 = G__16891;
chunk__16115_16877 = G__16892;
count__16116_16878 = G__16893;
i__16117_16879 = G__16894;
continue;
} else {
var vec__16139_16895 = cljs.core.first(seq__16114_16888__$1);
var k_16896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16139_16895,(0),null);
var v_16897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16139_16895,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16896);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16896),v_16897);


var G__16898 = cljs.core.next(seq__16114_16888__$1);
var G__16899 = null;
var G__16900 = (0);
var G__16901 = (0);
seq__16114_16876 = G__16898;
chunk__16115_16877 = G__16899;
count__16116_16878 = G__16900;
i__16117_16879 = G__16901;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__16154 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16154,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16154,(1),null);
var seq__16157_16903 = cljs.core.seq(node_children);
var chunk__16159_16904 = null;
var count__16160_16905 = (0);
var i__16161_16906 = (0);
while(true){
if((i__16161_16906 < count__16160_16905)){
var child_struct_16907 = chunk__16159_16904.cljs$core$IIndexed$_nth$arity$2(null,i__16161_16906);
if((!((child_struct_16907 == null)))){
if(typeof child_struct_16907 === 'string'){
var text_16909 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16909),child_struct_16907].join(''));
} else {
var children_16910 = shadow.dom.svg_node(child_struct_16907);
if(cljs.core.seq_QMARK_(children_16910)){
var seq__16215_16911 = cljs.core.seq(children_16910);
var chunk__16217_16912 = null;
var count__16218_16913 = (0);
var i__16219_16914 = (0);
while(true){
if((i__16219_16914 < count__16218_16913)){
var child_16915 = chunk__16217_16912.cljs$core$IIndexed$_nth$arity$2(null,i__16219_16914);
if(cljs.core.truth_(child_16915)){
node.appendChild(child_16915);


var G__16916 = seq__16215_16911;
var G__16917 = chunk__16217_16912;
var G__16918 = count__16218_16913;
var G__16919 = (i__16219_16914 + (1));
seq__16215_16911 = G__16916;
chunk__16217_16912 = G__16917;
count__16218_16913 = G__16918;
i__16219_16914 = G__16919;
continue;
} else {
var G__16920 = seq__16215_16911;
var G__16921 = chunk__16217_16912;
var G__16922 = count__16218_16913;
var G__16923 = (i__16219_16914 + (1));
seq__16215_16911 = G__16920;
chunk__16217_16912 = G__16921;
count__16218_16913 = G__16922;
i__16219_16914 = G__16923;
continue;
}
} else {
var temp__5804__auto___16924 = cljs.core.seq(seq__16215_16911);
if(temp__5804__auto___16924){
var seq__16215_16925__$1 = temp__5804__auto___16924;
if(cljs.core.chunked_seq_QMARK_(seq__16215_16925__$1)){
var c__5568__auto___16926 = cljs.core.chunk_first(seq__16215_16925__$1);
var G__16927 = cljs.core.chunk_rest(seq__16215_16925__$1);
var G__16928 = c__5568__auto___16926;
var G__16929 = cljs.core.count(c__5568__auto___16926);
var G__16930 = (0);
seq__16215_16911 = G__16927;
chunk__16217_16912 = G__16928;
count__16218_16913 = G__16929;
i__16219_16914 = G__16930;
continue;
} else {
var child_16931 = cljs.core.first(seq__16215_16925__$1);
if(cljs.core.truth_(child_16931)){
node.appendChild(child_16931);


var G__16932 = cljs.core.next(seq__16215_16925__$1);
var G__16933 = null;
var G__16934 = (0);
var G__16935 = (0);
seq__16215_16911 = G__16932;
chunk__16217_16912 = G__16933;
count__16218_16913 = G__16934;
i__16219_16914 = G__16935;
continue;
} else {
var G__16936 = cljs.core.next(seq__16215_16925__$1);
var G__16937 = null;
var G__16938 = (0);
var G__16939 = (0);
seq__16215_16911 = G__16936;
chunk__16217_16912 = G__16937;
count__16218_16913 = G__16938;
i__16219_16914 = G__16939;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16910);
}
}


var G__16940 = seq__16157_16903;
var G__16941 = chunk__16159_16904;
var G__16942 = count__16160_16905;
var G__16943 = (i__16161_16906 + (1));
seq__16157_16903 = G__16940;
chunk__16159_16904 = G__16941;
count__16160_16905 = G__16942;
i__16161_16906 = G__16943;
continue;
} else {
var G__16944 = seq__16157_16903;
var G__16945 = chunk__16159_16904;
var G__16946 = count__16160_16905;
var G__16947 = (i__16161_16906 + (1));
seq__16157_16903 = G__16944;
chunk__16159_16904 = G__16945;
count__16160_16905 = G__16946;
i__16161_16906 = G__16947;
continue;
}
} else {
var temp__5804__auto___16948 = cljs.core.seq(seq__16157_16903);
if(temp__5804__auto___16948){
var seq__16157_16949__$1 = temp__5804__auto___16948;
if(cljs.core.chunked_seq_QMARK_(seq__16157_16949__$1)){
var c__5568__auto___16950 = cljs.core.chunk_first(seq__16157_16949__$1);
var G__16951 = cljs.core.chunk_rest(seq__16157_16949__$1);
var G__16952 = c__5568__auto___16950;
var G__16953 = cljs.core.count(c__5568__auto___16950);
var G__16954 = (0);
seq__16157_16903 = G__16951;
chunk__16159_16904 = G__16952;
count__16160_16905 = G__16953;
i__16161_16906 = G__16954;
continue;
} else {
var child_struct_16955 = cljs.core.first(seq__16157_16949__$1);
if((!((child_struct_16955 == null)))){
if(typeof child_struct_16955 === 'string'){
var text_16956 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16956),child_struct_16955].join(''));
} else {
var children_16957 = shadow.dom.svg_node(child_struct_16955);
if(cljs.core.seq_QMARK_(children_16957)){
var seq__16232_16958 = cljs.core.seq(children_16957);
var chunk__16234_16959 = null;
var count__16235_16960 = (0);
var i__16236_16961 = (0);
while(true){
if((i__16236_16961 < count__16235_16960)){
var child_16962 = chunk__16234_16959.cljs$core$IIndexed$_nth$arity$2(null,i__16236_16961);
if(cljs.core.truth_(child_16962)){
node.appendChild(child_16962);


var G__16963 = seq__16232_16958;
var G__16964 = chunk__16234_16959;
var G__16965 = count__16235_16960;
var G__16966 = (i__16236_16961 + (1));
seq__16232_16958 = G__16963;
chunk__16234_16959 = G__16964;
count__16235_16960 = G__16965;
i__16236_16961 = G__16966;
continue;
} else {
var G__16967 = seq__16232_16958;
var G__16968 = chunk__16234_16959;
var G__16969 = count__16235_16960;
var G__16970 = (i__16236_16961 + (1));
seq__16232_16958 = G__16967;
chunk__16234_16959 = G__16968;
count__16235_16960 = G__16969;
i__16236_16961 = G__16970;
continue;
}
} else {
var temp__5804__auto___16971__$1 = cljs.core.seq(seq__16232_16958);
if(temp__5804__auto___16971__$1){
var seq__16232_16972__$1 = temp__5804__auto___16971__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16232_16972__$1)){
var c__5568__auto___16973 = cljs.core.chunk_first(seq__16232_16972__$1);
var G__16974 = cljs.core.chunk_rest(seq__16232_16972__$1);
var G__16975 = c__5568__auto___16973;
var G__16976 = cljs.core.count(c__5568__auto___16973);
var G__16977 = (0);
seq__16232_16958 = G__16974;
chunk__16234_16959 = G__16975;
count__16235_16960 = G__16976;
i__16236_16961 = G__16977;
continue;
} else {
var child_16978 = cljs.core.first(seq__16232_16972__$1);
if(cljs.core.truth_(child_16978)){
node.appendChild(child_16978);


var G__16982 = cljs.core.next(seq__16232_16972__$1);
var G__16983 = null;
var G__16984 = (0);
var G__16985 = (0);
seq__16232_16958 = G__16982;
chunk__16234_16959 = G__16983;
count__16235_16960 = G__16984;
i__16236_16961 = G__16985;
continue;
} else {
var G__16986 = cljs.core.next(seq__16232_16972__$1);
var G__16987 = null;
var G__16988 = (0);
var G__16989 = (0);
seq__16232_16958 = G__16986;
chunk__16234_16959 = G__16987;
count__16235_16960 = G__16988;
i__16236_16961 = G__16989;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16957);
}
}


var G__16990 = cljs.core.next(seq__16157_16949__$1);
var G__16991 = null;
var G__16992 = (0);
var G__16993 = (0);
seq__16157_16903 = G__16990;
chunk__16159_16904 = G__16991;
count__16160_16905 = G__16992;
i__16161_16906 = G__16993;
continue;
} else {
var G__16994 = cljs.core.next(seq__16157_16949__$1);
var G__16995 = null;
var G__16996 = (0);
var G__16997 = (0);
seq__16157_16903 = G__16994;
chunk__16159_16904 = G__16995;
count__16160_16905 = G__16996;
i__16161_16906 = G__16997;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16998 = arguments.length;
var i__5770__auto___16999 = (0);
while(true){
if((i__5770__auto___16999 < len__5769__auto___16998)){
args__5775__auto__.push((arguments[i__5770__auto___16999]));

var G__17000 = (i__5770__auto___16999 + (1));
i__5770__auto___16999 = G__17000;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq16320){
var G__16321 = cljs.core.first(seq16320);
var seq16320__$1 = cljs.core.next(seq16320);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16321,seq16320__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__16376 = arguments.length;
switch (G__16376) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13388__auto___17007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13389__auto__ = (function (){var switch__13305__auto__ = (function (state_16392){
var state_val_16393 = (state_16392[(1)]);
if((state_val_16393 === (1))){
var state_16392__$1 = state_16392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16392__$1,(2),once_or_cleanup);
} else {
if((state_val_16393 === (2))){
var inst_16389 = (state_16392[(2)]);
var inst_16390 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_16392__$1 = (function (){var statearr_16400 = state_16392;
(statearr_16400[(7)] = inst_16389);

return statearr_16400;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16392__$1,inst_16390);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13306__auto__ = null;
var shadow$dom$state_machine__13306__auto____0 = (function (){
var statearr_16401 = [null,null,null,null,null,null,null,null];
(statearr_16401[(0)] = shadow$dom$state_machine__13306__auto__);

(statearr_16401[(1)] = (1));

return statearr_16401;
});
var shadow$dom$state_machine__13306__auto____1 = (function (state_16392){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_16392);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e16402){var ex__13309__auto__ = e16402;
var statearr_16403_17008 = state_16392;
(statearr_16403_17008[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_16392[(4)]))){
var statearr_16404_17010 = state_16392;
(statearr_16404_17010[(1)] = cljs.core.first((state_16392[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17011 = state_16392;
state_16392 = G__17011;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
shadow$dom$state_machine__13306__auto__ = function(state_16392){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13306__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13306__auto____1.call(this,state_16392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13306__auto____0;
shadow$dom$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13306__auto____1;
return shadow$dom$state_machine__13306__auto__;
})()
})();
var state__13390__auto__ = (function (){var statearr_16414 = f__13389__auto__();
(statearr_16414[(6)] = c__13388__auto___17007);

return statearr_16414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13390__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
