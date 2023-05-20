goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13471 = (function (f,blockable,meta13472){
this.f = f;
this.blockable = blockable;
this.meta13472 = meta13472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13473,meta13472__$1){
var self__ = this;
var _13473__$1 = this;
return (new cljs.core.async.t_cljs$core$async13471(self__.f,self__.blockable,meta13472__$1));
}));

(cljs.core.async.t_cljs$core$async13471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13473){
var self__ = this;
var _13473__$1 = this;
return self__.meta13472;
}));

(cljs.core.async.t_cljs$core$async13471.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13471.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13471.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13471.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13472","meta13472",1817465537,null)], null);
}));

(cljs.core.async.t_cljs$core$async13471.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13471");

(cljs.core.async.t_cljs$core$async13471.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13471");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13471.
 */
cljs.core.async.__GT_t_cljs$core$async13471 = (function cljs$core$async$__GT_t_cljs$core$async13471(f,blockable,meta13472){
return (new cljs.core.async.t_cljs$core$async13471(f,blockable,meta13472));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13470 = arguments.length;
switch (G__13470) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async13471(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13487 = arguments.length;
switch (G__13487) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13493 = arguments.length;
switch (G__13493) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13506 = arguments.length;
switch (G__13506) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15536 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15536) : fn1.call(null,val_15536));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15536) : fn1.call(null,val_15536));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13524 = arguments.length;
switch (G__13524) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___15542 = n;
var x_15543 = (0);
while(true){
if((x_15543 < n__5636__auto___15542)){
(a[x_15543] = x_15543);

var G__15544 = (x_15543 + (1));
x_15543 = G__15544;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13531 = (function (flag,meta13532){
this.flag = flag;
this.meta13532 = meta13532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13533,meta13532__$1){
var self__ = this;
var _13533__$1 = this;
return (new cljs.core.async.t_cljs$core$async13531(self__.flag,meta13532__$1));
}));

(cljs.core.async.t_cljs$core$async13531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13533){
var self__ = this;
var _13533__$1 = this;
return self__.meta13532;
}));

(cljs.core.async.t_cljs$core$async13531.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13531.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13531.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13531.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13532","meta13532",929245815,null)], null);
}));

(cljs.core.async.t_cljs$core$async13531.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13531");

(cljs.core.async.t_cljs$core$async13531.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13531");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13531.
 */
cljs.core.async.__GT_t_cljs$core$async13531 = (function cljs$core$async$__GT_t_cljs$core$async13531(flag,meta13532){
return (new cljs.core.async.t_cljs$core$async13531(flag,meta13532));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async13531(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13534 = (function (flag,cb,meta13535){
this.flag = flag;
this.cb = cb;
this.meta13535 = meta13535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13536,meta13535__$1){
var self__ = this;
var _13536__$1 = this;
return (new cljs.core.async.t_cljs$core$async13534(self__.flag,self__.cb,meta13535__$1));
}));

(cljs.core.async.t_cljs$core$async13534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13536){
var self__ = this;
var _13536__$1 = this;
return self__.meta13535;
}));

(cljs.core.async.t_cljs$core$async13534.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13534.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13535","meta13535",-691485404,null)], null);
}));

(cljs.core.async.t_cljs$core$async13534.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13534.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13534");

(cljs.core.async.t_cljs$core$async13534.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13534");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13534.
 */
cljs.core.async.__GT_t_cljs$core$async13534 = (function cljs$core$async$__GT_t_cljs$core$async13534(flag,cb,meta13535){
return (new cljs.core.async.t_cljs$core$async13534(flag,cb,meta13535));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async13534(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13537_SHARP_){
var G__13540 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13537_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13540) : fret.call(null,G__13540));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13538_SHARP_){
var G__13541 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13538_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13541) : fret.call(null,G__13541));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15554 = (i + (1));
i = G__15554;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15555 = arguments.length;
var i__5770__auto___15556 = (0);
while(true){
if((i__5770__auto___15556 < len__5769__auto___15555)){
args__5775__auto__.push((arguments[i__5770__auto___15556]));

var G__15557 = (i__5770__auto___15556 + (1));
i__5770__auto___15556 = G__15557;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13544){
var map__13545 = p__13544;
var map__13545__$1 = cljs.core.__destructure_map(map__13545);
var opts = map__13545__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13542){
var G__13543 = cljs.core.first(seq13542);
var seq13542__$1 = cljs.core.next(seq13542);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13543,seq13542__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13547 = arguments.length;
switch (G__13547) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13388__auto___15568 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13389__auto__ = (function (){var switch__13305__auto__ = (function (state_13571){
var state_val_13572 = (state_13571[(1)]);
if((state_val_13572 === (7))){
var inst_13567 = (state_13571[(2)]);
var state_13571__$1 = state_13571;
var statearr_13573_15573 = state_13571__$1;
(statearr_13573_15573[(2)] = inst_13567);

(statearr_13573_15573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (1))){
var state_13571__$1 = state_13571;
var statearr_13574_15577 = state_13571__$1;
(statearr_13574_15577[(2)] = null);

(statearr_13574_15577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (4))){
var inst_13550 = (state_13571[(7)]);
var inst_13550__$1 = (state_13571[(2)]);
var inst_13551 = (inst_13550__$1 == null);
var state_13571__$1 = (function (){var statearr_13575 = state_13571;
(statearr_13575[(7)] = inst_13550__$1);

return statearr_13575;
})();
if(cljs.core.truth_(inst_13551)){
var statearr_13576_15578 = state_13571__$1;
(statearr_13576_15578[(1)] = (5));

} else {
var statearr_13577_15579 = state_13571__$1;
(statearr_13577_15579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (13))){
var state_13571__$1 = state_13571;
var statearr_13578_15580 = state_13571__$1;
(statearr_13578_15580[(2)] = null);

(statearr_13578_15580[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (6))){
var inst_13550 = (state_13571[(7)]);
var state_13571__$1 = state_13571;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13571__$1,(11),to,inst_13550);
} else {
if((state_val_13572 === (3))){
var inst_13569 = (state_13571[(2)]);
var state_13571__$1 = state_13571;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13571__$1,inst_13569);
} else {
if((state_val_13572 === (12))){
var state_13571__$1 = state_13571;
var statearr_13579_15584 = state_13571__$1;
(statearr_13579_15584[(2)] = null);

(statearr_13579_15584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (2))){
var state_13571__$1 = state_13571;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13571__$1,(4),from);
} else {
if((state_val_13572 === (11))){
var inst_13560 = (state_13571[(2)]);
var state_13571__$1 = state_13571;
if(cljs.core.truth_(inst_13560)){
var statearr_13580_15585 = state_13571__$1;
(statearr_13580_15585[(1)] = (12));

} else {
var statearr_13581_15586 = state_13571__$1;
(statearr_13581_15586[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (9))){
var state_13571__$1 = state_13571;
var statearr_13582_15590 = state_13571__$1;
(statearr_13582_15590[(2)] = null);

(statearr_13582_15590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (5))){
var state_13571__$1 = state_13571;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13583_15591 = state_13571__$1;
(statearr_13583_15591[(1)] = (8));

} else {
var statearr_13584_15592 = state_13571__$1;
(statearr_13584_15592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (14))){
var inst_13565 = (state_13571[(2)]);
var state_13571__$1 = state_13571;
var statearr_13585_15596 = state_13571__$1;
(statearr_13585_15596[(2)] = inst_13565);

(statearr_13585_15596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (10))){
var inst_13557 = (state_13571[(2)]);
var state_13571__$1 = state_13571;
var statearr_13586_15597 = state_13571__$1;
(statearr_13586_15597[(2)] = inst_13557);

(statearr_13586_15597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (8))){
var inst_13554 = cljs.core.async.close_BANG_(to);
var state_13571__$1 = state_13571;
var statearr_13588_15598 = state_13571__$1;
(statearr_13588_15598[(2)] = inst_13554);

(statearr_13588_15598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13306__auto__ = null;
var cljs$core$async$state_machine__13306__auto____0 = (function (){
var statearr_13592 = [null,null,null,null,null,null,null,null];
(statearr_13592[(0)] = cljs$core$async$state_machine__13306__auto__);

(statearr_13592[(1)] = (1));

return statearr_13592;
});
var cljs$core$async$state_machine__13306__auto____1 = (function (state_13571){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_13571);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e13593){var ex__13309__auto__ = e13593;
var statearr_13594_15600 = state_13571;
(statearr_13594_15600[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_13571[(4)]))){
var statearr_13595_15601 = state_13571;
(statearr_13595_15601[(1)] = cljs.core.first((state_13571[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15602 = state_13571;
state_13571 = G__15602;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$state_machine__13306__auto__ = function(state_13571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13306__auto____1.call(this,state_13571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13306__auto____0;
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13306__auto____1;
return cljs$core$async$state_machine__13306__auto__;
})()
})();
var state__13390__auto__ = (function (){var statearr_13599 = f__13389__auto__();
(statearr_13599[(6)] = c__13388__auto___15568);

return statearr_13599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13390__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__13600){
var vec__13601 = p__13600;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13601,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13601,(1),null);
var job = vec__13601;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13388__auto___15603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13389__auto__ = (function (){var switch__13305__auto__ = (function (state_13608){
var state_val_13609 = (state_13608[(1)]);
if((state_val_13609 === (1))){
var state_13608__$1 = state_13608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13608__$1,(2),res,v);
} else {
if((state_val_13609 === (2))){
var inst_13605 = (state_13608[(2)]);
var inst_13606 = cljs.core.async.close_BANG_(res);
var state_13608__$1 = (function (){var statearr_13612 = state_13608;
(statearr_13612[(7)] = inst_13605);

return statearr_13612;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13608__$1,inst_13606);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0 = (function (){
var statearr_13613 = [null,null,null,null,null,null,null,null];
(statearr_13613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__);

(statearr_13613[(1)] = (1));

return statearr_13613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1 = (function (state_13608){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_13608);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e13614){var ex__13309__auto__ = e13614;
var statearr_13615_15604 = state_13608;
(statearr_13615_15604[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_13608[(4)]))){
var statearr_13616_15605 = state_13608;
(statearr_13616_15605[(1)] = cljs.core.first((state_13608[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15606 = state_13608;
state_13608 = G__15606;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__ = function(state_13608){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1.call(this,state_13608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__;
})()
})();
var state__13390__auto__ = (function (){var statearr_13617 = f__13389__auto__();
(statearr_13617[(6)] = c__13388__auto___15603);

return statearr_13617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13390__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__13618){
var vec__13619 = p__13618;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13619,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13619,(1),null);
var job = vec__13619;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___15607 = n;
var __15608 = (0);
while(true){
if((__15608 < n__5636__auto___15607)){
var G__13622_15609 = type;
var G__13622_15610__$1 = (((G__13622_15609 instanceof cljs.core.Keyword))?G__13622_15609.fqn:null);
switch (G__13622_15610__$1) {
case "compute":
var c__13388__auto___15612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15608,c__13388__auto___15612,G__13622_15609,G__13622_15610__$1,n__5636__auto___15607,jobs,results,process__$1,async){
return (function (){
var f__13389__auto__ = (function (){var switch__13305__auto__ = ((function (__15608,c__13388__auto___15612,G__13622_15609,G__13622_15610__$1,n__5636__auto___15607,jobs,results,process__$1,async){
return (function (state_13635){
var state_val_13636 = (state_13635[(1)]);
if((state_val_13636 === (1))){
var state_13635__$1 = state_13635;
var statearr_13637_15613 = state_13635__$1;
(statearr_13637_15613[(2)] = null);

(statearr_13637_15613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13636 === (2))){
var state_13635__$1 = state_13635;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13635__$1,(4),jobs);
} else {
if((state_val_13636 === (3))){
var inst_13633 = (state_13635[(2)]);
var state_13635__$1 = state_13635;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13635__$1,inst_13633);
} else {
if((state_val_13636 === (4))){
var inst_13625 = (state_13635[(2)]);
var inst_13626 = process__$1(inst_13625);
var state_13635__$1 = state_13635;
if(cljs.core.truth_(inst_13626)){
var statearr_13638_15614 = state_13635__$1;
(statearr_13638_15614[(1)] = (5));

} else {
var statearr_13639_15615 = state_13635__$1;
(statearr_13639_15615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13636 === (5))){
var state_13635__$1 = state_13635;
var statearr_13640_15616 = state_13635__$1;
(statearr_13640_15616[(2)] = null);

(statearr_13640_15616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13636 === (6))){
var state_13635__$1 = state_13635;
var statearr_13641_15617 = state_13635__$1;
(statearr_13641_15617[(2)] = null);

(statearr_13641_15617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13636 === (7))){
var inst_13631 = (state_13635[(2)]);
var state_13635__$1 = state_13635;
var statearr_13642_15620 = state_13635__$1;
(statearr_13642_15620[(2)] = inst_13631);

(statearr_13642_15620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15608,c__13388__auto___15612,G__13622_15609,G__13622_15610__$1,n__5636__auto___15607,jobs,results,process__$1,async))
;
return ((function (__15608,switch__13305__auto__,c__13388__auto___15612,G__13622_15609,G__13622_15610__$1,n__5636__auto___15607,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0 = (function (){
var statearr_13643 = [null,null,null,null,null,null,null];
(statearr_13643[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__);

(statearr_13643[(1)] = (1));

return statearr_13643;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1 = (function (state_13635){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_13635);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e13646){var ex__13309__auto__ = e13646;
var statearr_13647_15625 = state_13635;
(statearr_13647_15625[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_13635[(4)]))){
var statearr_13649_15627 = state_13635;
(statearr_13649_15627[(1)] = cljs.core.first((state_13635[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15629 = state_13635;
state_13635 = G__15629;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__ = function(state_13635){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1.call(this,state_13635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__;
})()
;})(__15608,switch__13305__auto__,c__13388__auto___15612,G__13622_15609,G__13622_15610__$1,n__5636__auto___15607,jobs,results,process__$1,async))
})();
var state__13390__auto__ = (function (){var statearr_13650 = f__13389__auto__();
(statearr_13650[(6)] = c__13388__auto___15612);

return statearr_13650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13390__auto__);
});})(__15608,c__13388__auto___15612,G__13622_15609,G__13622_15610__$1,n__5636__auto___15607,jobs,results,process__$1,async))
);


break;
case "async":
var c__13388__auto___15630 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15608,c__13388__auto___15630,G__13622_15609,G__13622_15610__$1,n__5636__auto___15607,jobs,results,process__$1,async){
return (function (){
var f__13389__auto__ = (function (){var switch__13305__auto__ = ((function (__15608,c__13388__auto___15630,G__13622_15609,G__13622_15610__$1,n__5636__auto___15607,jobs,results,process__$1,async){
return (function (state_13663){
var state_val_13664 = (state_13663[(1)]);
if((state_val_13664 === (1))){
var state_13663__$1 = state_13663;
var statearr_13665_15636 = state_13663__$1;
(statearr_13665_15636[(2)] = null);

(statearr_13665_15636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13664 === (2))){
var state_13663__$1 = state_13663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13663__$1,(4),jobs);
} else {
if((state_val_13664 === (3))){
var inst_13661 = (state_13663[(2)]);
var state_13663__$1 = state_13663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13663__$1,inst_13661);
} else {
if((state_val_13664 === (4))){
var inst_13653 = (state_13663[(2)]);
var inst_13654 = async(inst_13653);
var state_13663__$1 = state_13663;
if(cljs.core.truth_(inst_13654)){
var statearr_13666_15641 = state_13663__$1;
(statearr_13666_15641[(1)] = (5));

} else {
var statearr_13667_15642 = state_13663__$1;
(statearr_13667_15642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13664 === (5))){
var state_13663__$1 = state_13663;
var statearr_13668_15643 = state_13663__$1;
(statearr_13668_15643[(2)] = null);

(statearr_13668_15643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13664 === (6))){
var state_13663__$1 = state_13663;
var statearr_13669_15644 = state_13663__$1;
(statearr_13669_15644[(2)] = null);

(statearr_13669_15644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13664 === (7))){
var inst_13659 = (state_13663[(2)]);
var state_13663__$1 = state_13663;
var statearr_13670_15645 = state_13663__$1;
(statearr_13670_15645[(2)] = inst_13659);

(statearr_13670_15645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15608,c__13388__auto___15630,G__13622_15609,G__13622_15610__$1,n__5636__auto___15607,jobs,results,process__$1,async))
;
return ((function (__15608,switch__13305__auto__,c__13388__auto___15630,G__13622_15609,G__13622_15610__$1,n__5636__auto___15607,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0 = (function (){
var statearr_13671 = [null,null,null,null,null,null,null];
(statearr_13671[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__);

(statearr_13671[(1)] = (1));

return statearr_13671;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1 = (function (state_13663){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_13663);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e13672){var ex__13309__auto__ = e13672;
var statearr_13673_15653 = state_13663;
(statearr_13673_15653[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_13663[(4)]))){
var statearr_13674_15675 = state_13663;
(statearr_13674_15675[(1)] = cljs.core.first((state_13663[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15676 = state_13663;
state_13663 = G__15676;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__ = function(state_13663){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1.call(this,state_13663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__;
})()
;})(__15608,switch__13305__auto__,c__13388__auto___15630,G__13622_15609,G__13622_15610__$1,n__5636__auto___15607,jobs,results,process__$1,async))
})();
var state__13390__auto__ = (function (){var statearr_13675 = f__13389__auto__();
(statearr_13675[(6)] = c__13388__auto___15630);

return statearr_13675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13390__auto__);
});})(__15608,c__13388__auto___15630,G__13622_15609,G__13622_15610__$1,n__5636__auto___15607,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13622_15610__$1)].join('')));

}

var G__15677 = (__15608 + (1));
__15608 = G__15677;
continue;
} else {
}
break;
}

var c__13388__auto___15678 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13389__auto__ = (function (){var switch__13305__auto__ = (function (state_13697){
var state_val_13698 = (state_13697[(1)]);
if((state_val_13698 === (7))){
var inst_13693 = (state_13697[(2)]);
var state_13697__$1 = state_13697;
var statearr_13700_15679 = state_13697__$1;
(statearr_13700_15679[(2)] = inst_13693);

(statearr_13700_15679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (1))){
var state_13697__$1 = state_13697;
var statearr_13701_15680 = state_13697__$1;
(statearr_13701_15680[(2)] = null);

(statearr_13701_15680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (4))){
var inst_13678 = (state_13697[(7)]);
var inst_13678__$1 = (state_13697[(2)]);
var inst_13679 = (inst_13678__$1 == null);
var state_13697__$1 = (function (){var statearr_13702 = state_13697;
(statearr_13702[(7)] = inst_13678__$1);

return statearr_13702;
})();
if(cljs.core.truth_(inst_13679)){
var statearr_13706_15681 = state_13697__$1;
(statearr_13706_15681[(1)] = (5));

} else {
var statearr_13707_15682 = state_13697__$1;
(statearr_13707_15682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (6))){
var inst_13678 = (state_13697[(7)]);
var inst_13683 = (state_13697[(8)]);
var inst_13683__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_13684 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13685 = [inst_13678,inst_13683__$1];
var inst_13686 = (new cljs.core.PersistentVector(null,2,(5),inst_13684,inst_13685,null));
var state_13697__$1 = (function (){var statearr_13708 = state_13697;
(statearr_13708[(8)] = inst_13683__$1);

return statearr_13708;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13697__$1,(8),jobs,inst_13686);
} else {
if((state_val_13698 === (3))){
var inst_13695 = (state_13697[(2)]);
var state_13697__$1 = state_13697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13697__$1,inst_13695);
} else {
if((state_val_13698 === (2))){
var state_13697__$1 = state_13697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13697__$1,(4),from);
} else {
if((state_val_13698 === (9))){
var inst_13690 = (state_13697[(2)]);
var state_13697__$1 = (function (){var statearr_13709 = state_13697;
(statearr_13709[(9)] = inst_13690);

return statearr_13709;
})();
var statearr_13710_15689 = state_13697__$1;
(statearr_13710_15689[(2)] = null);

(statearr_13710_15689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (5))){
var inst_13681 = cljs.core.async.close_BANG_(jobs);
var state_13697__$1 = state_13697;
var statearr_13711_15690 = state_13697__$1;
(statearr_13711_15690[(2)] = inst_13681);

(statearr_13711_15690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13698 === (8))){
var inst_13683 = (state_13697[(8)]);
var inst_13688 = (state_13697[(2)]);
var state_13697__$1 = (function (){var statearr_13712 = state_13697;
(statearr_13712[(10)] = inst_13688);

return statearr_13712;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13697__$1,(9),results,inst_13683);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0 = (function (){
var statearr_13713 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13713[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__);

(statearr_13713[(1)] = (1));

return statearr_13713;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1 = (function (state_13697){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_13697);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e13714){var ex__13309__auto__ = e13714;
var statearr_13715_15691 = state_13697;
(statearr_13715_15691[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_13697[(4)]))){
var statearr_13716_15692 = state_13697;
(statearr_13716_15692[(1)] = cljs.core.first((state_13697[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15693 = state_13697;
state_13697 = G__15693;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__ = function(state_13697){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1.call(this,state_13697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__;
})()
})();
var state__13390__auto__ = (function (){var statearr_13719 = f__13389__auto__();
(statearr_13719[(6)] = c__13388__auto___15678);

return statearr_13719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13390__auto__);
}));


var c__13388__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13389__auto__ = (function (){var switch__13305__auto__ = (function (state_13761){
var state_val_13762 = (state_13761[(1)]);
if((state_val_13762 === (7))){
var inst_13757 = (state_13761[(2)]);
var state_13761__$1 = state_13761;
var statearr_13763_15694 = state_13761__$1;
(statearr_13763_15694[(2)] = inst_13757);

(statearr_13763_15694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13762 === (20))){
var state_13761__$1 = state_13761;
var statearr_13764_15695 = state_13761__$1;
(statearr_13764_15695[(2)] = null);

(statearr_13764_15695[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13762 === (1))){
var state_13761__$1 = state_13761;
var statearr_13765_15696 = state_13761__$1;
(statearr_13765_15696[(2)] = null);

(statearr_13765_15696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13762 === (4))){
var inst_13726 = (state_13761[(7)]);
var inst_13726__$1 = (state_13761[(2)]);
var inst_13727 = (inst_13726__$1 == null);
var state_13761__$1 = (function (){var statearr_13767 = state_13761;
(statearr_13767[(7)] = inst_13726__$1);

return statearr_13767;
})();
if(cljs.core.truth_(inst_13727)){
var statearr_13768_15697 = state_13761__$1;
(statearr_13768_15697[(1)] = (5));

} else {
var statearr_13770_15698 = state_13761__$1;
(statearr_13770_15698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13762 === (15))){
var inst_13739 = (state_13761[(8)]);
var state_13761__$1 = state_13761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13761__$1,(18),to,inst_13739);
} else {
if((state_val_13762 === (21))){
var inst_13752 = (state_13761[(2)]);
var state_13761__$1 = state_13761;
var statearr_13772_15699 = state_13761__$1;
(statearr_13772_15699[(2)] = inst_13752);

(statearr_13772_15699[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13762 === (13))){
var inst_13754 = (state_13761[(2)]);
var state_13761__$1 = (function (){var statearr_13773 = state_13761;
(statearr_13773[(9)] = inst_13754);

return statearr_13773;
})();
var statearr_13774_15700 = state_13761__$1;
(statearr_13774_15700[(2)] = null);

(statearr_13774_15700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13762 === (6))){
var inst_13726 = (state_13761[(7)]);
var state_13761__$1 = state_13761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13761__$1,(11),inst_13726);
} else {
if((state_val_13762 === (17))){
var inst_13747 = (state_13761[(2)]);
var state_13761__$1 = state_13761;
if(cljs.core.truth_(inst_13747)){
var statearr_13775_15701 = state_13761__$1;
(statearr_13775_15701[(1)] = (19));

} else {
var statearr_13776_15702 = state_13761__$1;
(statearr_13776_15702[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13762 === (3))){
var inst_13759 = (state_13761[(2)]);
var state_13761__$1 = state_13761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13761__$1,inst_13759);
} else {
if((state_val_13762 === (12))){
var inst_13736 = (state_13761[(10)]);
var state_13761__$1 = state_13761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13761__$1,(14),inst_13736);
} else {
if((state_val_13762 === (2))){
var state_13761__$1 = state_13761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13761__$1,(4),results);
} else {
if((state_val_13762 === (19))){
var state_13761__$1 = state_13761;
var statearr_13777_15703 = state_13761__$1;
(statearr_13777_15703[(2)] = null);

(statearr_13777_15703[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13762 === (11))){
var inst_13736 = (state_13761[(2)]);
var state_13761__$1 = (function (){var statearr_13778 = state_13761;
(statearr_13778[(10)] = inst_13736);

return statearr_13778;
})();
var statearr_13779_15704 = state_13761__$1;
(statearr_13779_15704[(2)] = null);

(statearr_13779_15704[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13762 === (9))){
var state_13761__$1 = state_13761;
var statearr_13780_15736 = state_13761__$1;
(statearr_13780_15736[(2)] = null);

(statearr_13780_15736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13762 === (5))){
var state_13761__$1 = state_13761;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13782_15737 = state_13761__$1;
(statearr_13782_15737[(1)] = (8));

} else {
var statearr_13783_15738 = state_13761__$1;
(statearr_13783_15738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13762 === (14))){
var inst_13741 = (state_13761[(11)]);
var inst_13739 = (state_13761[(8)]);
var inst_13739__$1 = (state_13761[(2)]);
var inst_13740 = (inst_13739__$1 == null);
var inst_13741__$1 = cljs.core.not(inst_13740);
var state_13761__$1 = (function (){var statearr_13787 = state_13761;
(statearr_13787[(11)] = inst_13741__$1);

(statearr_13787[(8)] = inst_13739__$1);

return statearr_13787;
})();
if(inst_13741__$1){
var statearr_13788_15739 = state_13761__$1;
(statearr_13788_15739[(1)] = (15));

} else {
var statearr_13789_15740 = state_13761__$1;
(statearr_13789_15740[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13762 === (16))){
var inst_13741 = (state_13761[(11)]);
var state_13761__$1 = state_13761;
var statearr_13790_15741 = state_13761__$1;
(statearr_13790_15741[(2)] = inst_13741);

(statearr_13790_15741[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13762 === (10))){
var inst_13733 = (state_13761[(2)]);
var state_13761__$1 = state_13761;
var statearr_13791_15742 = state_13761__$1;
(statearr_13791_15742[(2)] = inst_13733);

(statearr_13791_15742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13762 === (18))){
var inst_13744 = (state_13761[(2)]);
var state_13761__$1 = state_13761;
var statearr_13792_15743 = state_13761__$1;
(statearr_13792_15743[(2)] = inst_13744);

(statearr_13792_15743[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13762 === (8))){
var inst_13730 = cljs.core.async.close_BANG_(to);
var state_13761__$1 = state_13761;
var statearr_13793_15746 = state_13761__$1;
(statearr_13793_15746[(2)] = inst_13730);

(statearr_13793_15746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0 = (function (){
var statearr_13794 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13794[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__);

(statearr_13794[(1)] = (1));

return statearr_13794;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1 = (function (state_13761){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_13761);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e13795){var ex__13309__auto__ = e13795;
var statearr_13796_15748 = state_13761;
(statearr_13796_15748[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_13761[(4)]))){
var statearr_13797_15749 = state_13761;
(statearr_13797_15749[(1)] = cljs.core.first((state_13761[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15750 = state_13761;
state_13761 = G__15750;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__ = function(state_13761){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1.call(this,state_13761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13306__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13306__auto__;
})()
})();
var state__13390__auto__ = (function (){var statearr_13798 = f__13389__auto__();
(statearr_13798[(6)] = c__13388__auto__);

return statearr_13798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13390__auto__);
}));

return c__13388__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__13803 = arguments.length;
switch (G__13803) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__13805 = arguments.length;
switch (G__13805) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__13808 = arguments.length;
switch (G__13808) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13388__auto___15764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13389__auto__ = (function (){var switch__13305__auto__ = (function (state_13839){
var state_val_13840 = (state_13839[(1)]);
if((state_val_13840 === (7))){
var inst_13835 = (state_13839[(2)]);
var state_13839__$1 = state_13839;
var statearr_13841_15765 = state_13839__$1;
(statearr_13841_15765[(2)] = inst_13835);

(statearr_13841_15765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13840 === (1))){
var state_13839__$1 = state_13839;
var statearr_13842_15766 = state_13839__$1;
(statearr_13842_15766[(2)] = null);

(statearr_13842_15766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13840 === (4))){
var inst_13816 = (state_13839[(7)]);
var inst_13816__$1 = (state_13839[(2)]);
var inst_13817 = (inst_13816__$1 == null);
var state_13839__$1 = (function (){var statearr_13848 = state_13839;
(statearr_13848[(7)] = inst_13816__$1);

return statearr_13848;
})();
if(cljs.core.truth_(inst_13817)){
var statearr_13849_15767 = state_13839__$1;
(statearr_13849_15767[(1)] = (5));

} else {
var statearr_13850_15768 = state_13839__$1;
(statearr_13850_15768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13840 === (13))){
var state_13839__$1 = state_13839;
var statearr_13851_15769 = state_13839__$1;
(statearr_13851_15769[(2)] = null);

(statearr_13851_15769[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13840 === (6))){
var inst_13816 = (state_13839[(7)]);
var inst_13822 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13816) : p.call(null,inst_13816));
var state_13839__$1 = state_13839;
if(cljs.core.truth_(inst_13822)){
var statearr_13854_15770 = state_13839__$1;
(statearr_13854_15770[(1)] = (9));

} else {
var statearr_13855_15771 = state_13839__$1;
(statearr_13855_15771[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13840 === (3))){
var inst_13837 = (state_13839[(2)]);
var state_13839__$1 = state_13839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13839__$1,inst_13837);
} else {
if((state_val_13840 === (12))){
var state_13839__$1 = state_13839;
var statearr_13858_15814 = state_13839__$1;
(statearr_13858_15814[(2)] = null);

(statearr_13858_15814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13840 === (2))){
var state_13839__$1 = state_13839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13839__$1,(4),ch);
} else {
if((state_val_13840 === (11))){
var inst_13816 = (state_13839[(7)]);
var inst_13826 = (state_13839[(2)]);
var state_13839__$1 = state_13839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13839__$1,(8),inst_13826,inst_13816);
} else {
if((state_val_13840 === (9))){
var state_13839__$1 = state_13839;
var statearr_13861_15815 = state_13839__$1;
(statearr_13861_15815[(2)] = tc);

(statearr_13861_15815[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13840 === (5))){
var inst_13819 = cljs.core.async.close_BANG_(tc);
var inst_13820 = cljs.core.async.close_BANG_(fc);
var state_13839__$1 = (function (){var statearr_13864 = state_13839;
(statearr_13864[(8)] = inst_13819);

return statearr_13864;
})();
var statearr_13867_15816 = state_13839__$1;
(statearr_13867_15816[(2)] = inst_13820);

(statearr_13867_15816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13840 === (14))){
var inst_13833 = (state_13839[(2)]);
var state_13839__$1 = state_13839;
var statearr_13868_15817 = state_13839__$1;
(statearr_13868_15817[(2)] = inst_13833);

(statearr_13868_15817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13840 === (10))){
var state_13839__$1 = state_13839;
var statearr_13869_15818 = state_13839__$1;
(statearr_13869_15818[(2)] = fc);

(statearr_13869_15818[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13840 === (8))){
var inst_13828 = (state_13839[(2)]);
var state_13839__$1 = state_13839;
if(cljs.core.truth_(inst_13828)){
var statearr_13873_15819 = state_13839__$1;
(statearr_13873_15819[(1)] = (12));

} else {
var statearr_13875_15820 = state_13839__$1;
(statearr_13875_15820[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13306__auto__ = null;
var cljs$core$async$state_machine__13306__auto____0 = (function (){
var statearr_13879 = [null,null,null,null,null,null,null,null,null];
(statearr_13879[(0)] = cljs$core$async$state_machine__13306__auto__);

(statearr_13879[(1)] = (1));

return statearr_13879;
});
var cljs$core$async$state_machine__13306__auto____1 = (function (state_13839){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_13839);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e13880){var ex__13309__auto__ = e13880;
var statearr_13882_15821 = state_13839;
(statearr_13882_15821[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_13839[(4)]))){
var statearr_13883_15822 = state_13839;
(statearr_13883_15822[(1)] = cljs.core.first((state_13839[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15823 = state_13839;
state_13839 = G__15823;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$state_machine__13306__auto__ = function(state_13839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13306__auto____1.call(this,state_13839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13306__auto____0;
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13306__auto____1;
return cljs$core$async$state_machine__13306__auto__;
})()
})();
var state__13390__auto__ = (function (){var statearr_13886 = f__13389__auto__();
(statearr_13886[(6)] = c__13388__auto___15764);

return statearr_13886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13390__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13388__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13389__auto__ = (function (){var switch__13305__auto__ = (function (state_13909){
var state_val_13910 = (state_13909[(1)]);
if((state_val_13910 === (7))){
var inst_13905 = (state_13909[(2)]);
var state_13909__$1 = state_13909;
var statearr_13911_15824 = state_13909__$1;
(statearr_13911_15824[(2)] = inst_13905);

(statearr_13911_15824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13910 === (1))){
var inst_13887 = init;
var inst_13888 = inst_13887;
var state_13909__$1 = (function (){var statearr_13912 = state_13909;
(statearr_13912[(7)] = inst_13888);

return statearr_13912;
})();
var statearr_13913_15825 = state_13909__$1;
(statearr_13913_15825[(2)] = null);

(statearr_13913_15825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13910 === (4))){
var inst_13891 = (state_13909[(8)]);
var inst_13891__$1 = (state_13909[(2)]);
var inst_13892 = (inst_13891__$1 == null);
var state_13909__$1 = (function (){var statearr_13914 = state_13909;
(statearr_13914[(8)] = inst_13891__$1);

return statearr_13914;
})();
if(cljs.core.truth_(inst_13892)){
var statearr_13915_15826 = state_13909__$1;
(statearr_13915_15826[(1)] = (5));

} else {
var statearr_13916_15827 = state_13909__$1;
(statearr_13916_15827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13910 === (6))){
var inst_13888 = (state_13909[(7)]);
var inst_13891 = (state_13909[(8)]);
var inst_13895 = (state_13909[(9)]);
var inst_13895__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_13888,inst_13891) : f.call(null,inst_13888,inst_13891));
var inst_13897 = cljs.core.reduced_QMARK_(inst_13895__$1);
var state_13909__$1 = (function (){var statearr_13917 = state_13909;
(statearr_13917[(9)] = inst_13895__$1);

return statearr_13917;
})();
if(inst_13897){
var statearr_13918_15828 = state_13909__$1;
(statearr_13918_15828[(1)] = (8));

} else {
var statearr_13919_15829 = state_13909__$1;
(statearr_13919_15829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13910 === (3))){
var inst_13907 = (state_13909[(2)]);
var state_13909__$1 = state_13909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13909__$1,inst_13907);
} else {
if((state_val_13910 === (2))){
var state_13909__$1 = state_13909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13909__$1,(4),ch);
} else {
if((state_val_13910 === (9))){
var inst_13895 = (state_13909[(9)]);
var inst_13888 = inst_13895;
var state_13909__$1 = (function (){var statearr_13941 = state_13909;
(statearr_13941[(7)] = inst_13888);

return statearr_13941;
})();
var statearr_13942_15830 = state_13909__$1;
(statearr_13942_15830[(2)] = null);

(statearr_13942_15830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13910 === (5))){
var inst_13888 = (state_13909[(7)]);
var state_13909__$1 = state_13909;
var statearr_13943_15831 = state_13909__$1;
(statearr_13943_15831[(2)] = inst_13888);

(statearr_13943_15831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13910 === (10))){
var inst_13903 = (state_13909[(2)]);
var state_13909__$1 = state_13909;
var statearr_13944_15832 = state_13909__$1;
(statearr_13944_15832[(2)] = inst_13903);

(statearr_13944_15832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13910 === (8))){
var inst_13895 = (state_13909[(9)]);
var inst_13899 = cljs.core.deref(inst_13895);
var state_13909__$1 = state_13909;
var statearr_13945_15833 = state_13909__$1;
(statearr_13945_15833[(2)] = inst_13899);

(statearr_13945_15833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13306__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13306__auto____0 = (function (){
var statearr_13946 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13946[(0)] = cljs$core$async$reduce_$_state_machine__13306__auto__);

(statearr_13946[(1)] = (1));

return statearr_13946;
});
var cljs$core$async$reduce_$_state_machine__13306__auto____1 = (function (state_13909){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_13909);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e13947){var ex__13309__auto__ = e13947;
var statearr_13948_15834 = state_13909;
(statearr_13948_15834[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_13909[(4)]))){
var statearr_13949_15836 = state_13909;
(statearr_13949_15836[(1)] = cljs.core.first((state_13909[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15837 = state_13909;
state_13909 = G__15837;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13306__auto__ = function(state_13909){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13306__auto____1.call(this,state_13909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13306__auto____0;
cljs$core$async$reduce_$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13306__auto____1;
return cljs$core$async$reduce_$_state_machine__13306__auto__;
})()
})();
var state__13390__auto__ = (function (){var statearr_13953 = f__13389__auto__();
(statearr_13953[(6)] = c__13388__auto__);

return statearr_13953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13390__auto__);
}));

return c__13388__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13388__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13389__auto__ = (function (){var switch__13305__auto__ = (function (state_13964){
var state_val_13966 = (state_13964[(1)]);
if((state_val_13966 === (1))){
var inst_13958 = cljs.core.async.reduce(f__$1,init,ch);
var state_13964__$1 = state_13964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13964__$1,(2),inst_13958);
} else {
if((state_val_13966 === (2))){
var inst_13960 = (state_13964[(2)]);
var inst_13961 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_13960) : f__$1.call(null,inst_13960));
var state_13964__$1 = state_13964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13964__$1,inst_13961);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13306__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13306__auto____0 = (function (){
var statearr_13976 = [null,null,null,null,null,null,null];
(statearr_13976[(0)] = cljs$core$async$transduce_$_state_machine__13306__auto__);

(statearr_13976[(1)] = (1));

return statearr_13976;
});
var cljs$core$async$transduce_$_state_machine__13306__auto____1 = (function (state_13964){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_13964);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e13980){var ex__13309__auto__ = e13980;
var statearr_13982_15839 = state_13964;
(statearr_13982_15839[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_13964[(4)]))){
var statearr_13984_15840 = state_13964;
(statearr_13984_15840[(1)] = cljs.core.first((state_13964[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15841 = state_13964;
state_13964 = G__15841;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13306__auto__ = function(state_13964){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13306__auto____1.call(this,state_13964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13306__auto____0;
cljs$core$async$transduce_$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13306__auto____1;
return cljs$core$async$transduce_$_state_machine__13306__auto__;
})()
})();
var state__13390__auto__ = (function (){var statearr_13996 = f__13389__auto__();
(statearr_13996[(6)] = c__13388__auto__);

return statearr_13996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13390__auto__);
}));

return c__13388__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14002 = arguments.length;
switch (G__14002) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13388__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13389__auto__ = (function (){var switch__13305__auto__ = (function (state_14043){
var state_val_14044 = (state_14043[(1)]);
if((state_val_14044 === (7))){
var inst_14023 = (state_14043[(2)]);
var state_14043__$1 = state_14043;
var statearr_14048_15844 = state_14043__$1;
(statearr_14048_15844[(2)] = inst_14023);

(statearr_14048_15844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14044 === (1))){
var inst_14016 = cljs.core.seq(coll);
var inst_14017 = inst_14016;
var state_14043__$1 = (function (){var statearr_14049 = state_14043;
(statearr_14049[(7)] = inst_14017);

return statearr_14049;
})();
var statearr_14051_15846 = state_14043__$1;
(statearr_14051_15846[(2)] = null);

(statearr_14051_15846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14044 === (4))){
var inst_14017 = (state_14043[(7)]);
var inst_14021 = cljs.core.first(inst_14017);
var state_14043__$1 = state_14043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14043__$1,(7),ch,inst_14021);
} else {
if((state_val_14044 === (13))){
var inst_14037 = (state_14043[(2)]);
var state_14043__$1 = state_14043;
var statearr_14082_15847 = state_14043__$1;
(statearr_14082_15847[(2)] = inst_14037);

(statearr_14082_15847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14044 === (6))){
var inst_14026 = (state_14043[(2)]);
var state_14043__$1 = state_14043;
if(cljs.core.truth_(inst_14026)){
var statearr_14083_15848 = state_14043__$1;
(statearr_14083_15848[(1)] = (8));

} else {
var statearr_14084_15849 = state_14043__$1;
(statearr_14084_15849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14044 === (3))){
var inst_14041 = (state_14043[(2)]);
var state_14043__$1 = state_14043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14043__$1,inst_14041);
} else {
if((state_val_14044 === (12))){
var state_14043__$1 = state_14043;
var statearr_14088_15850 = state_14043__$1;
(statearr_14088_15850[(2)] = null);

(statearr_14088_15850[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14044 === (2))){
var inst_14017 = (state_14043[(7)]);
var state_14043__$1 = state_14043;
if(cljs.core.truth_(inst_14017)){
var statearr_14090_15851 = state_14043__$1;
(statearr_14090_15851[(1)] = (4));

} else {
var statearr_14091_15852 = state_14043__$1;
(statearr_14091_15852[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14044 === (11))){
var inst_14034 = cljs.core.async.close_BANG_(ch);
var state_14043__$1 = state_14043;
var statearr_14092_15853 = state_14043__$1;
(statearr_14092_15853[(2)] = inst_14034);

(statearr_14092_15853[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14044 === (9))){
var state_14043__$1 = state_14043;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14093_15854 = state_14043__$1;
(statearr_14093_15854[(1)] = (11));

} else {
var statearr_14094_15855 = state_14043__$1;
(statearr_14094_15855[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14044 === (5))){
var inst_14017 = (state_14043[(7)]);
var state_14043__$1 = state_14043;
var statearr_14095_15856 = state_14043__$1;
(statearr_14095_15856[(2)] = inst_14017);

(statearr_14095_15856[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14044 === (10))){
var inst_14039 = (state_14043[(2)]);
var state_14043__$1 = state_14043;
var statearr_14096_15857 = state_14043__$1;
(statearr_14096_15857[(2)] = inst_14039);

(statearr_14096_15857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14044 === (8))){
var inst_14017 = (state_14043[(7)]);
var inst_14029 = cljs.core.next(inst_14017);
var inst_14017__$1 = inst_14029;
var state_14043__$1 = (function (){var statearr_14101 = state_14043;
(statearr_14101[(7)] = inst_14017__$1);

return statearr_14101;
})();
var statearr_14106_15858 = state_14043__$1;
(statearr_14106_15858[(2)] = null);

(statearr_14106_15858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13306__auto__ = null;
var cljs$core$async$state_machine__13306__auto____0 = (function (){
var statearr_14107 = [null,null,null,null,null,null,null,null];
(statearr_14107[(0)] = cljs$core$async$state_machine__13306__auto__);

(statearr_14107[(1)] = (1));

return statearr_14107;
});
var cljs$core$async$state_machine__13306__auto____1 = (function (state_14043){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_14043);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e14108){var ex__13309__auto__ = e14108;
var statearr_14109_15859 = state_14043;
(statearr_14109_15859[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_14043[(4)]))){
var statearr_14110_15860 = state_14043;
(statearr_14110_15860[(1)] = cljs.core.first((state_14043[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15861 = state_14043;
state_14043 = G__15861;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$state_machine__13306__auto__ = function(state_14043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13306__auto____1.call(this,state_14043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13306__auto____0;
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13306__auto____1;
return cljs$core$async$state_machine__13306__auto__;
})()
})();
var state__13390__auto__ = (function (){var statearr_14111 = f__13389__auto__();
(statearr_14111[(6)] = c__13388__auto__);

return statearr_14111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13390__auto__);
}));

return c__13388__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14116 = arguments.length;
switch (G__14116) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_15866 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_15866(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_15867 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_15867(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_15894 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_15894(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_15895 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_15895(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14148 = (function (ch,cs,meta14149){
this.ch = ch;
this.cs = cs;
this.meta14149 = meta14149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14150,meta14149__$1){
var self__ = this;
var _14150__$1 = this;
return (new cljs.core.async.t_cljs$core$async14148(self__.ch,self__.cs,meta14149__$1));
}));

(cljs.core.async.t_cljs$core$async14148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14150){
var self__ = this;
var _14150__$1 = this;
return self__.meta14149;
}));

(cljs.core.async.t_cljs$core$async14148.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14148.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14148.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14148.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14148.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14148.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14149","meta14149",1388850037,null)], null);
}));

(cljs.core.async.t_cljs$core$async14148.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14148");

(cljs.core.async.t_cljs$core$async14148.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14148");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14148.
 */
cljs.core.async.__GT_t_cljs$core$async14148 = (function cljs$core$async$__GT_t_cljs$core$async14148(ch,cs,meta14149){
return (new cljs.core.async.t_cljs$core$async14148(ch,cs,meta14149));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async14148(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13388__auto___15901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13389__auto__ = (function (){var switch__13305__auto__ = (function (state_14306){
var state_val_14307 = (state_14306[(1)]);
if((state_val_14307 === (7))){
var inst_14302 = (state_14306[(2)]);
var state_14306__$1 = state_14306;
var statearr_14308_15902 = state_14306__$1;
(statearr_14308_15902[(2)] = inst_14302);

(statearr_14308_15902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (20))){
var inst_14200 = (state_14306[(7)]);
var inst_14216 = cljs.core.first(inst_14200);
var inst_14217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14216,(0),null);
var inst_14218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14216,(1),null);
var state_14306__$1 = (function (){var statearr_14309 = state_14306;
(statearr_14309[(8)] = inst_14217);

return statearr_14309;
})();
if(cljs.core.truth_(inst_14218)){
var statearr_14310_15903 = state_14306__$1;
(statearr_14310_15903[(1)] = (22));

} else {
var statearr_14311_15904 = state_14306__$1;
(statearr_14311_15904[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (27))){
var inst_14248 = (state_14306[(9)]);
var inst_14253 = (state_14306[(10)]);
var inst_14168 = (state_14306[(11)]);
var inst_14246 = (state_14306[(12)]);
var inst_14253__$1 = cljs.core._nth(inst_14246,inst_14248);
var inst_14254 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14253__$1,inst_14168,done);
var state_14306__$1 = (function (){var statearr_14314 = state_14306;
(statearr_14314[(10)] = inst_14253__$1);

return statearr_14314;
})();
if(cljs.core.truth_(inst_14254)){
var statearr_14315_15905 = state_14306__$1;
(statearr_14315_15905[(1)] = (30));

} else {
var statearr_14316_15906 = state_14306__$1;
(statearr_14316_15906[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (1))){
var state_14306__$1 = state_14306;
var statearr_14317_15907 = state_14306__$1;
(statearr_14317_15907[(2)] = null);

(statearr_14317_15907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (24))){
var inst_14200 = (state_14306[(7)]);
var inst_14223 = (state_14306[(2)]);
var inst_14224 = cljs.core.next(inst_14200);
var inst_14177 = inst_14224;
var inst_14178 = null;
var inst_14179 = (0);
var inst_14180 = (0);
var state_14306__$1 = (function (){var statearr_14318 = state_14306;
(statearr_14318[(13)] = inst_14180);

(statearr_14318[(14)] = inst_14223);

(statearr_14318[(15)] = inst_14178);

(statearr_14318[(16)] = inst_14177);

(statearr_14318[(17)] = inst_14179);

return statearr_14318;
})();
var statearr_14319_15908 = state_14306__$1;
(statearr_14319_15908[(2)] = null);

(statearr_14319_15908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (39))){
var state_14306__$1 = state_14306;
var statearr_14324_15909 = state_14306__$1;
(statearr_14324_15909[(2)] = null);

(statearr_14324_15909[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (4))){
var inst_14168 = (state_14306[(11)]);
var inst_14168__$1 = (state_14306[(2)]);
var inst_14169 = (inst_14168__$1 == null);
var state_14306__$1 = (function (){var statearr_14329 = state_14306;
(statearr_14329[(11)] = inst_14168__$1);

return statearr_14329;
})();
if(cljs.core.truth_(inst_14169)){
var statearr_14330_15910 = state_14306__$1;
(statearr_14330_15910[(1)] = (5));

} else {
var statearr_14331_15911 = state_14306__$1;
(statearr_14331_15911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (15))){
var inst_14180 = (state_14306[(13)]);
var inst_14178 = (state_14306[(15)]);
var inst_14177 = (state_14306[(16)]);
var inst_14179 = (state_14306[(17)]);
var inst_14195 = (state_14306[(2)]);
var inst_14197 = (inst_14180 + (1));
var tmp14320 = inst_14178;
var tmp14321 = inst_14177;
var tmp14322 = inst_14179;
var inst_14177__$1 = tmp14321;
var inst_14178__$1 = tmp14320;
var inst_14179__$1 = tmp14322;
var inst_14180__$1 = inst_14197;
var state_14306__$1 = (function (){var statearr_14332 = state_14306;
(statearr_14332[(13)] = inst_14180__$1);

(statearr_14332[(18)] = inst_14195);

(statearr_14332[(15)] = inst_14178__$1);

(statearr_14332[(16)] = inst_14177__$1);

(statearr_14332[(17)] = inst_14179__$1);

return statearr_14332;
})();
var statearr_14334_15912 = state_14306__$1;
(statearr_14334_15912[(2)] = null);

(statearr_14334_15912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (21))){
var inst_14227 = (state_14306[(2)]);
var state_14306__$1 = state_14306;
var statearr_14338_15913 = state_14306__$1;
(statearr_14338_15913[(2)] = inst_14227);

(statearr_14338_15913[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (31))){
var inst_14253 = (state_14306[(10)]);
var inst_14257 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14253);
var state_14306__$1 = state_14306;
var statearr_14343_15925 = state_14306__$1;
(statearr_14343_15925[(2)] = inst_14257);

(statearr_14343_15925[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (32))){
var inst_14248 = (state_14306[(9)]);
var inst_14245 = (state_14306[(19)]);
var inst_14246 = (state_14306[(12)]);
var inst_14247 = (state_14306[(20)]);
var inst_14259 = (state_14306[(2)]);
var inst_14263 = (inst_14248 + (1));
var tmp14335 = inst_14245;
var tmp14336 = inst_14246;
var tmp14337 = inst_14247;
var inst_14245__$1 = tmp14335;
var inst_14246__$1 = tmp14336;
var inst_14247__$1 = tmp14337;
var inst_14248__$1 = inst_14263;
var state_14306__$1 = (function (){var statearr_14344 = state_14306;
(statearr_14344[(9)] = inst_14248__$1);

(statearr_14344[(19)] = inst_14245__$1);

(statearr_14344[(21)] = inst_14259);

(statearr_14344[(12)] = inst_14246__$1);

(statearr_14344[(20)] = inst_14247__$1);

return statearr_14344;
})();
var statearr_14346_15926 = state_14306__$1;
(statearr_14346_15926[(2)] = null);

(statearr_14346_15926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (40))){
var inst_14275 = (state_14306[(22)]);
var inst_14279 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14275);
var state_14306__$1 = state_14306;
var statearr_14350_15927 = state_14306__$1;
(statearr_14350_15927[(2)] = inst_14279);

(statearr_14350_15927[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (33))){
var inst_14266 = (state_14306[(23)]);
var inst_14268 = cljs.core.chunked_seq_QMARK_(inst_14266);
var state_14306__$1 = state_14306;
if(inst_14268){
var statearr_14351_15929 = state_14306__$1;
(statearr_14351_15929[(1)] = (36));

} else {
var statearr_14352_15930 = state_14306__$1;
(statearr_14352_15930[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (13))){
var inst_14189 = (state_14306[(24)]);
var inst_14192 = cljs.core.async.close_BANG_(inst_14189);
var state_14306__$1 = state_14306;
var statearr_14361_15931 = state_14306__$1;
(statearr_14361_15931[(2)] = inst_14192);

(statearr_14361_15931[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (22))){
var inst_14217 = (state_14306[(8)]);
var inst_14220 = cljs.core.async.close_BANG_(inst_14217);
var state_14306__$1 = state_14306;
var statearr_14364_15932 = state_14306__$1;
(statearr_14364_15932[(2)] = inst_14220);

(statearr_14364_15932[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (36))){
var inst_14266 = (state_14306[(23)]);
var inst_14270 = cljs.core.chunk_first(inst_14266);
var inst_14271 = cljs.core.chunk_rest(inst_14266);
var inst_14272 = cljs.core.count(inst_14270);
var inst_14245 = inst_14271;
var inst_14246 = inst_14270;
var inst_14247 = inst_14272;
var inst_14248 = (0);
var state_14306__$1 = (function (){var statearr_14365 = state_14306;
(statearr_14365[(9)] = inst_14248);

(statearr_14365[(19)] = inst_14245);

(statearr_14365[(12)] = inst_14246);

(statearr_14365[(20)] = inst_14247);

return statearr_14365;
})();
var statearr_14366_15933 = state_14306__$1;
(statearr_14366_15933[(2)] = null);

(statearr_14366_15933[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (41))){
var inst_14266 = (state_14306[(23)]);
var inst_14281 = (state_14306[(2)]);
var inst_14282 = cljs.core.next(inst_14266);
var inst_14245 = inst_14282;
var inst_14246 = null;
var inst_14247 = (0);
var inst_14248 = (0);
var state_14306__$1 = (function (){var statearr_14367 = state_14306;
(statearr_14367[(9)] = inst_14248);

(statearr_14367[(19)] = inst_14245);

(statearr_14367[(12)] = inst_14246);

(statearr_14367[(20)] = inst_14247);

(statearr_14367[(25)] = inst_14281);

return statearr_14367;
})();
var statearr_14368_15934 = state_14306__$1;
(statearr_14368_15934[(2)] = null);

(statearr_14368_15934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (43))){
var state_14306__$1 = state_14306;
var statearr_14369_15935 = state_14306__$1;
(statearr_14369_15935[(2)] = null);

(statearr_14369_15935[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (29))){
var inst_14290 = (state_14306[(2)]);
var state_14306__$1 = state_14306;
var statearr_14371_15936 = state_14306__$1;
(statearr_14371_15936[(2)] = inst_14290);

(statearr_14371_15936[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (44))){
var inst_14299 = (state_14306[(2)]);
var state_14306__$1 = (function (){var statearr_14373 = state_14306;
(statearr_14373[(26)] = inst_14299);

return statearr_14373;
})();
var statearr_14375_15937 = state_14306__$1;
(statearr_14375_15937[(2)] = null);

(statearr_14375_15937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (6))){
var inst_14237 = (state_14306[(27)]);
var inst_14236 = cljs.core.deref(cs);
var inst_14237__$1 = cljs.core.keys(inst_14236);
var inst_14238 = cljs.core.count(inst_14237__$1);
var inst_14239 = cljs.core.reset_BANG_(dctr,inst_14238);
var inst_14244 = cljs.core.seq(inst_14237__$1);
var inst_14245 = inst_14244;
var inst_14246 = null;
var inst_14247 = (0);
var inst_14248 = (0);
var state_14306__$1 = (function (){var statearr_14378 = state_14306;
(statearr_14378[(27)] = inst_14237__$1);

(statearr_14378[(9)] = inst_14248);

(statearr_14378[(19)] = inst_14245);

(statearr_14378[(12)] = inst_14246);

(statearr_14378[(20)] = inst_14247);

(statearr_14378[(28)] = inst_14239);

return statearr_14378;
})();
var statearr_14379_15950 = state_14306__$1;
(statearr_14379_15950[(2)] = null);

(statearr_14379_15950[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (28))){
var inst_14266 = (state_14306[(23)]);
var inst_14245 = (state_14306[(19)]);
var inst_14266__$1 = cljs.core.seq(inst_14245);
var state_14306__$1 = (function (){var statearr_14380 = state_14306;
(statearr_14380[(23)] = inst_14266__$1);

return statearr_14380;
})();
if(inst_14266__$1){
var statearr_14381_15951 = state_14306__$1;
(statearr_14381_15951[(1)] = (33));

} else {
var statearr_14382_15952 = state_14306__$1;
(statearr_14382_15952[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (25))){
var inst_14248 = (state_14306[(9)]);
var inst_14247 = (state_14306[(20)]);
var inst_14250 = (inst_14248 < inst_14247);
var inst_14251 = inst_14250;
var state_14306__$1 = state_14306;
if(cljs.core.truth_(inst_14251)){
var statearr_14383_15953 = state_14306__$1;
(statearr_14383_15953[(1)] = (27));

} else {
var statearr_14389_15954 = state_14306__$1;
(statearr_14389_15954[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (34))){
var state_14306__$1 = state_14306;
var statearr_14390_15955 = state_14306__$1;
(statearr_14390_15955[(2)] = null);

(statearr_14390_15955[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (17))){
var state_14306__$1 = state_14306;
var statearr_14391_15956 = state_14306__$1;
(statearr_14391_15956[(2)] = null);

(statearr_14391_15956[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (3))){
var inst_14304 = (state_14306[(2)]);
var state_14306__$1 = state_14306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14306__$1,inst_14304);
} else {
if((state_val_14307 === (12))){
var inst_14232 = (state_14306[(2)]);
var state_14306__$1 = state_14306;
var statearr_14392_15957 = state_14306__$1;
(statearr_14392_15957[(2)] = inst_14232);

(statearr_14392_15957[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (2))){
var state_14306__$1 = state_14306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14306__$1,(4),ch);
} else {
if((state_val_14307 === (23))){
var state_14306__$1 = state_14306;
var statearr_14394_15958 = state_14306__$1;
(statearr_14394_15958[(2)] = null);

(statearr_14394_15958[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (35))){
var inst_14288 = (state_14306[(2)]);
var state_14306__$1 = state_14306;
var statearr_14398_15959 = state_14306__$1;
(statearr_14398_15959[(2)] = inst_14288);

(statearr_14398_15959[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (19))){
var inst_14200 = (state_14306[(7)]);
var inst_14206 = cljs.core.chunk_first(inst_14200);
var inst_14207 = cljs.core.chunk_rest(inst_14200);
var inst_14208 = cljs.core.count(inst_14206);
var inst_14177 = inst_14207;
var inst_14178 = inst_14206;
var inst_14179 = inst_14208;
var inst_14180 = (0);
var state_14306__$1 = (function (){var statearr_14401 = state_14306;
(statearr_14401[(13)] = inst_14180);

(statearr_14401[(15)] = inst_14178);

(statearr_14401[(16)] = inst_14177);

(statearr_14401[(17)] = inst_14179);

return statearr_14401;
})();
var statearr_14404_15960 = state_14306__$1;
(statearr_14404_15960[(2)] = null);

(statearr_14404_15960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (11))){
var inst_14177 = (state_14306[(16)]);
var inst_14200 = (state_14306[(7)]);
var inst_14200__$1 = cljs.core.seq(inst_14177);
var state_14306__$1 = (function (){var statearr_14407 = state_14306;
(statearr_14407[(7)] = inst_14200__$1);

return statearr_14407;
})();
if(inst_14200__$1){
var statearr_14410_15971 = state_14306__$1;
(statearr_14410_15971[(1)] = (16));

} else {
var statearr_14411_15972 = state_14306__$1;
(statearr_14411_15972[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (9))){
var inst_14234 = (state_14306[(2)]);
var state_14306__$1 = state_14306;
var statearr_14413_15973 = state_14306__$1;
(statearr_14413_15973[(2)] = inst_14234);

(statearr_14413_15973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (5))){
var inst_14175 = cljs.core.deref(cs);
var inst_14176 = cljs.core.seq(inst_14175);
var inst_14177 = inst_14176;
var inst_14178 = null;
var inst_14179 = (0);
var inst_14180 = (0);
var state_14306__$1 = (function (){var statearr_14414 = state_14306;
(statearr_14414[(13)] = inst_14180);

(statearr_14414[(15)] = inst_14178);

(statearr_14414[(16)] = inst_14177);

(statearr_14414[(17)] = inst_14179);

return statearr_14414;
})();
var statearr_14415_15974 = state_14306__$1;
(statearr_14415_15974[(2)] = null);

(statearr_14415_15974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (14))){
var state_14306__$1 = state_14306;
var statearr_14416_15975 = state_14306__$1;
(statearr_14416_15975[(2)] = null);

(statearr_14416_15975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (45))){
var inst_14296 = (state_14306[(2)]);
var state_14306__$1 = state_14306;
var statearr_14417_15977 = state_14306__$1;
(statearr_14417_15977[(2)] = inst_14296);

(statearr_14417_15977[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (26))){
var inst_14237 = (state_14306[(27)]);
var inst_14292 = (state_14306[(2)]);
var inst_14293 = cljs.core.seq(inst_14237);
var state_14306__$1 = (function (){var statearr_14418 = state_14306;
(statearr_14418[(29)] = inst_14292);

return statearr_14418;
})();
if(inst_14293){
var statearr_14419_15978 = state_14306__$1;
(statearr_14419_15978[(1)] = (42));

} else {
var statearr_14420_15979 = state_14306__$1;
(statearr_14420_15979[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (16))){
var inst_14200 = (state_14306[(7)]);
var inst_14203 = cljs.core.chunked_seq_QMARK_(inst_14200);
var state_14306__$1 = state_14306;
if(inst_14203){
var statearr_14421_15980 = state_14306__$1;
(statearr_14421_15980[(1)] = (19));

} else {
var statearr_14422_15981 = state_14306__$1;
(statearr_14422_15981[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (38))){
var inst_14285 = (state_14306[(2)]);
var state_14306__$1 = state_14306;
var statearr_14423_15982 = state_14306__$1;
(statearr_14423_15982[(2)] = inst_14285);

(statearr_14423_15982[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (30))){
var state_14306__$1 = state_14306;
var statearr_14425_15983 = state_14306__$1;
(statearr_14425_15983[(2)] = null);

(statearr_14425_15983[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (10))){
var inst_14180 = (state_14306[(13)]);
var inst_14178 = (state_14306[(15)]);
var inst_14188 = cljs.core._nth(inst_14178,inst_14180);
var inst_14189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14188,(0),null);
var inst_14190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14188,(1),null);
var state_14306__$1 = (function (){var statearr_14426 = state_14306;
(statearr_14426[(24)] = inst_14189);

return statearr_14426;
})();
if(cljs.core.truth_(inst_14190)){
var statearr_14428_15984 = state_14306__$1;
(statearr_14428_15984[(1)] = (13));

} else {
var statearr_14429_15985 = state_14306__$1;
(statearr_14429_15985[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (18))){
var inst_14230 = (state_14306[(2)]);
var state_14306__$1 = state_14306;
var statearr_14430_15988 = state_14306__$1;
(statearr_14430_15988[(2)] = inst_14230);

(statearr_14430_15988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (42))){
var state_14306__$1 = state_14306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14306__$1,(45),dchan);
} else {
if((state_val_14307 === (37))){
var inst_14266 = (state_14306[(23)]);
var inst_14275 = (state_14306[(22)]);
var inst_14168 = (state_14306[(11)]);
var inst_14275__$1 = cljs.core.first(inst_14266);
var inst_14276 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14275__$1,inst_14168,done);
var state_14306__$1 = (function (){var statearr_14431 = state_14306;
(statearr_14431[(22)] = inst_14275__$1);

return statearr_14431;
})();
if(cljs.core.truth_(inst_14276)){
var statearr_14432_15990 = state_14306__$1;
(statearr_14432_15990[(1)] = (39));

} else {
var statearr_14433_15991 = state_14306__$1;
(statearr_14433_15991[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14307 === (8))){
var inst_14180 = (state_14306[(13)]);
var inst_14179 = (state_14306[(17)]);
var inst_14182 = (inst_14180 < inst_14179);
var inst_14183 = inst_14182;
var state_14306__$1 = state_14306;
if(cljs.core.truth_(inst_14183)){
var statearr_14434_15992 = state_14306__$1;
(statearr_14434_15992[(1)] = (10));

} else {
var statearr_14435_15993 = state_14306__$1;
(statearr_14435_15993[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13306__auto__ = null;
var cljs$core$async$mult_$_state_machine__13306__auto____0 = (function (){
var statearr_14436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14436[(0)] = cljs$core$async$mult_$_state_machine__13306__auto__);

(statearr_14436[(1)] = (1));

return statearr_14436;
});
var cljs$core$async$mult_$_state_machine__13306__auto____1 = (function (state_14306){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_14306);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e14437){var ex__13309__auto__ = e14437;
var statearr_14438_15994 = state_14306;
(statearr_14438_15994[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_14306[(4)]))){
var statearr_14439_15995 = state_14306;
(statearr_14439_15995[(1)] = cljs.core.first((state_14306[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16000 = state_14306;
state_14306 = G__16000;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13306__auto__ = function(state_14306){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13306__auto____1.call(this,state_14306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13306__auto____0;
cljs$core$async$mult_$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13306__auto____1;
return cljs$core$async$mult_$_state_machine__13306__auto__;
})()
})();
var state__13390__auto__ = (function (){var statearr_14457 = f__13389__auto__();
(statearr_14457[(6)] = c__13388__auto___15901);

return statearr_14457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13390__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__14459 = arguments.length;
switch (G__14459) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_16003 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_16003(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_16018 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_16018(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_16021 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_16021(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_16024 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_16024(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_16030 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_16030(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16033 = arguments.length;
var i__5770__auto___16034 = (0);
while(true){
if((i__5770__auto___16034 < len__5769__auto___16033)){
args__5775__auto__.push((arguments[i__5770__auto___16034]));

var G__16035 = (i__5770__auto___16034 + (1));
i__5770__auto___16034 = G__16035;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14473){
var map__14474 = p__14473;
var map__14474__$1 = cljs.core.__destructure_map(map__14474);
var opts = map__14474__$1;
var statearr_14475_16036 = state;
(statearr_14475_16036[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_14477_16037 = state;
(statearr_14477_16037[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_14478_16038 = state;
(statearr_14478_16038[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14469){
var G__14470 = cljs.core.first(seq14469);
var seq14469__$1 = cljs.core.next(seq14469);
var G__14471 = cljs.core.first(seq14469__$1);
var seq14469__$2 = cljs.core.next(seq14469__$1);
var G__14472 = cljs.core.first(seq14469__$2);
var seq14469__$3 = cljs.core.next(seq14469__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14470,G__14471,G__14472,seq14469__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14484 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14485){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14485 = meta14485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14486,meta14485__$1){
var self__ = this;
var _14486__$1 = this;
return (new cljs.core.async.t_cljs$core$async14484(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14485__$1));
}));

(cljs.core.async.t_cljs$core$async14484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14486){
var self__ = this;
var _14486__$1 = this;
return self__.meta14485;
}));

(cljs.core.async.t_cljs$core$async14484.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14484.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async14484.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14484.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14484.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14484.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14484.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14484.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14485","meta14485",-232744522,null)], null);
}));

(cljs.core.async.t_cljs$core$async14484.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14484");

(cljs.core.async.t_cljs$core$async14484.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14484");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14484.
 */
cljs.core.async.__GT_t_cljs$core$async14484 = (function cljs$core$async$__GT_t_cljs$core$async14484(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14485){
return (new cljs.core.async.t_cljs$core$async14484(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14485));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async14484(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__13388__auto___16047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13389__auto__ = (function (){var switch__13305__auto__ = (function (state_14564){
var state_val_14565 = (state_14564[(1)]);
if((state_val_14565 === (7))){
var inst_14519 = (state_14564[(2)]);
var state_14564__$1 = state_14564;
if(cljs.core.truth_(inst_14519)){
var statearr_14567_16049 = state_14564__$1;
(statearr_14567_16049[(1)] = (8));

} else {
var statearr_14568_16050 = state_14564__$1;
(statearr_14568_16050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14565 === (20))){
var inst_14511 = (state_14564[(7)]);
var state_14564__$1 = state_14564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14564__$1,(23),out,inst_14511);
} else {
if((state_val_14565 === (1))){
var inst_14493 = calc_state();
var inst_14494 = cljs.core.__destructure_map(inst_14493);
var inst_14495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14494,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14494,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14494,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14498 = inst_14493;
var state_14564__$1 = (function (){var statearr_14571 = state_14564;
(statearr_14571[(8)] = inst_14497);

(statearr_14571[(9)] = inst_14496);

(statearr_14571[(10)] = inst_14498);

(statearr_14571[(11)] = inst_14495);

return statearr_14571;
})();
var statearr_14573_16052 = state_14564__$1;
(statearr_14573_16052[(2)] = null);

(statearr_14573_16052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14565 === (24))){
var inst_14501 = (state_14564[(12)]);
var inst_14498 = inst_14501;
var state_14564__$1 = (function (){var statearr_14574 = state_14564;
(statearr_14574[(10)] = inst_14498);

return statearr_14574;
})();
var statearr_14575_16053 = state_14564__$1;
(statearr_14575_16053[(2)] = null);

(statearr_14575_16053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14565 === (4))){
var inst_14514 = (state_14564[(13)]);
var inst_14511 = (state_14564[(7)]);
var inst_14510 = (state_14564[(2)]);
var inst_14511__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14510,(0),null);
var inst_14512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14510,(1),null);
var inst_14514__$1 = (inst_14511__$1 == null);
var state_14564__$1 = (function (){var statearr_14577 = state_14564;
(statearr_14577[(13)] = inst_14514__$1);

(statearr_14577[(14)] = inst_14512);

(statearr_14577[(7)] = inst_14511__$1);

return statearr_14577;
})();
if(cljs.core.truth_(inst_14514__$1)){
var statearr_14578_16055 = state_14564__$1;
(statearr_14578_16055[(1)] = (5));

} else {
var statearr_14579_16056 = state_14564__$1;
(statearr_14579_16056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14565 === (15))){
var inst_14502 = (state_14564[(15)]);
var inst_14533 = (state_14564[(16)]);
var inst_14533__$1 = cljs.core.empty_QMARK_(inst_14502);
var state_14564__$1 = (function (){var statearr_14580 = state_14564;
(statearr_14580[(16)] = inst_14533__$1);

return statearr_14580;
})();
if(inst_14533__$1){
var statearr_14581_16058 = state_14564__$1;
(statearr_14581_16058[(1)] = (17));

} else {
var statearr_14582_16059 = state_14564__$1;
(statearr_14582_16059[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14565 === (21))){
var inst_14501 = (state_14564[(12)]);
var inst_14498 = inst_14501;
var state_14564__$1 = (function (){var statearr_14589 = state_14564;
(statearr_14589[(10)] = inst_14498);

return statearr_14589;
})();
var statearr_14590_16060 = state_14564__$1;
(statearr_14590_16060[(2)] = null);

(statearr_14590_16060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14565 === (13))){
var inst_14526 = (state_14564[(2)]);
var inst_14527 = calc_state();
var inst_14498 = inst_14527;
var state_14564__$1 = (function (){var statearr_14591 = state_14564;
(statearr_14591[(17)] = inst_14526);

(statearr_14591[(10)] = inst_14498);

return statearr_14591;
})();
var statearr_14592_16061 = state_14564__$1;
(statearr_14592_16061[(2)] = null);

(statearr_14592_16061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14565 === (22))){
var inst_14553 = (state_14564[(2)]);
var state_14564__$1 = state_14564;
var statearr_14594_16063 = state_14564__$1;
(statearr_14594_16063[(2)] = inst_14553);

(statearr_14594_16063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14565 === (6))){
var inst_14512 = (state_14564[(14)]);
var inst_14517 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14512,change);
var state_14564__$1 = state_14564;
var statearr_14595_16065 = state_14564__$1;
(statearr_14595_16065[(2)] = inst_14517);

(statearr_14595_16065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14565 === (25))){
var state_14564__$1 = state_14564;
var statearr_14596_16066 = state_14564__$1;
(statearr_14596_16066[(2)] = null);

(statearr_14596_16066[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14565 === (17))){
var inst_14503 = (state_14564[(18)]);
var inst_14512 = (state_14564[(14)]);
var inst_14535 = (inst_14503.cljs$core$IFn$_invoke$arity$1 ? inst_14503.cljs$core$IFn$_invoke$arity$1(inst_14512) : inst_14503.call(null,inst_14512));
var inst_14536 = cljs.core.not(inst_14535);
var state_14564__$1 = state_14564;
var statearr_14597_16067 = state_14564__$1;
(statearr_14597_16067[(2)] = inst_14536);

(statearr_14597_16067[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14565 === (3))){
var inst_14557 = (state_14564[(2)]);
var state_14564__$1 = state_14564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14564__$1,inst_14557);
} else {
if((state_val_14565 === (12))){
var state_14564__$1 = state_14564;
var statearr_14598_16068 = state_14564__$1;
(statearr_14598_16068[(2)] = null);

(statearr_14598_16068[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14565 === (2))){
var inst_14498 = (state_14564[(10)]);
var inst_14501 = (state_14564[(12)]);
var inst_14501__$1 = cljs.core.__destructure_map(inst_14498);
var inst_14502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14501__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14501__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14501__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14564__$1 = (function (){var statearr_14600 = state_14564;
(statearr_14600[(18)] = inst_14503);

(statearr_14600[(15)] = inst_14502);

(statearr_14600[(12)] = inst_14501__$1);

return statearr_14600;
})();
return cljs.core.async.ioc_alts_BANG_(state_14564__$1,(4),inst_14504);
} else {
if((state_val_14565 === (23))){
var inst_14544 = (state_14564[(2)]);
var state_14564__$1 = state_14564;
if(cljs.core.truth_(inst_14544)){
var statearr_14601_16069 = state_14564__$1;
(statearr_14601_16069[(1)] = (24));

} else {
var statearr_14602_16070 = state_14564__$1;
(statearr_14602_16070[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14565 === (19))){
var inst_14539 = (state_14564[(2)]);
var state_14564__$1 = state_14564;
var statearr_14606_16071 = state_14564__$1;
(statearr_14606_16071[(2)] = inst_14539);

(statearr_14606_16071[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14565 === (11))){
var inst_14512 = (state_14564[(14)]);
var inst_14523 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14512);
var state_14564__$1 = state_14564;
var statearr_14607_16072 = state_14564__$1;
(statearr_14607_16072[(2)] = inst_14523);

(statearr_14607_16072[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14565 === (9))){
var inst_14502 = (state_14564[(15)]);
var inst_14512 = (state_14564[(14)]);
var inst_14530 = (state_14564[(19)]);
var inst_14530__$1 = (inst_14502.cljs$core$IFn$_invoke$arity$1 ? inst_14502.cljs$core$IFn$_invoke$arity$1(inst_14512) : inst_14502.call(null,inst_14512));
var state_14564__$1 = (function (){var statearr_14608 = state_14564;
(statearr_14608[(19)] = inst_14530__$1);

return statearr_14608;
})();
if(cljs.core.truth_(inst_14530__$1)){
var statearr_14609_16074 = state_14564__$1;
(statearr_14609_16074[(1)] = (14));

} else {
var statearr_14610_16075 = state_14564__$1;
(statearr_14610_16075[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14565 === (5))){
var inst_14514 = (state_14564[(13)]);
var state_14564__$1 = state_14564;
var statearr_14612_16076 = state_14564__$1;
(statearr_14612_16076[(2)] = inst_14514);

(statearr_14612_16076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14565 === (14))){
var inst_14530 = (state_14564[(19)]);
var state_14564__$1 = state_14564;
var statearr_14616_16077 = state_14564__$1;
(statearr_14616_16077[(2)] = inst_14530);

(statearr_14616_16077[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14565 === (26))){
var inst_14549 = (state_14564[(2)]);
var state_14564__$1 = state_14564;
var statearr_14617_16078 = state_14564__$1;
(statearr_14617_16078[(2)] = inst_14549);

(statearr_14617_16078[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14565 === (16))){
var inst_14541 = (state_14564[(2)]);
var state_14564__$1 = state_14564;
if(cljs.core.truth_(inst_14541)){
var statearr_14618_16079 = state_14564__$1;
(statearr_14618_16079[(1)] = (20));

} else {
var statearr_14619_16080 = state_14564__$1;
(statearr_14619_16080[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14565 === (10))){
var inst_14555 = (state_14564[(2)]);
var state_14564__$1 = state_14564;
var statearr_14620_16081 = state_14564__$1;
(statearr_14620_16081[(2)] = inst_14555);

(statearr_14620_16081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14565 === (18))){
var inst_14533 = (state_14564[(16)]);
var state_14564__$1 = state_14564;
var statearr_14621_16082 = state_14564__$1;
(statearr_14621_16082[(2)] = inst_14533);

(statearr_14621_16082[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14565 === (8))){
var inst_14511 = (state_14564[(7)]);
var inst_14521 = (inst_14511 == null);
var state_14564__$1 = state_14564;
if(cljs.core.truth_(inst_14521)){
var statearr_14622_16083 = state_14564__$1;
(statearr_14622_16083[(1)] = (11));

} else {
var statearr_14623_16084 = state_14564__$1;
(statearr_14623_16084[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13306__auto__ = null;
var cljs$core$async$mix_$_state_machine__13306__auto____0 = (function (){
var statearr_14624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14624[(0)] = cljs$core$async$mix_$_state_machine__13306__auto__);

(statearr_14624[(1)] = (1));

return statearr_14624;
});
var cljs$core$async$mix_$_state_machine__13306__auto____1 = (function (state_14564){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_14564);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e14625){var ex__13309__auto__ = e14625;
var statearr_14626_16085 = state_14564;
(statearr_14626_16085[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_14564[(4)]))){
var statearr_14627_16086 = state_14564;
(statearr_14627_16086[(1)] = cljs.core.first((state_14564[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16088 = state_14564;
state_14564 = G__16088;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13306__auto__ = function(state_14564){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13306__auto____1.call(this,state_14564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13306__auto____0;
cljs$core$async$mix_$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13306__auto____1;
return cljs$core$async$mix_$_state_machine__13306__auto__;
})()
})();
var state__13390__auto__ = (function (){var statearr_14628 = f__13389__auto__();
(statearr_14628[(6)] = c__13388__auto___16047);

return statearr_14628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13390__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_16094 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_16094(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_16095 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_16095(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_16100 = (function() {
var G__16101 = null;
var G__16101__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__16101__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__16101 = function(p,v){
switch(arguments.length){
case 1:
return G__16101__1.call(this,p);
case 2:
return G__16101__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16101.cljs$core$IFn$_invoke$arity$1 = G__16101__1;
G__16101.cljs$core$IFn$_invoke$arity$2 = G__16101__2;
return G__16101;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14640 = arguments.length;
switch (G__14640) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16100(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16100(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14650 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14651){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14651 = meta14651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14652,meta14651__$1){
var self__ = this;
var _14652__$1 = this;
return (new cljs.core.async.t_cljs$core$async14650(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14651__$1));
}));

(cljs.core.async.t_cljs$core$async14650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14652){
var self__ = this;
var _14652__$1 = this;
return self__.meta14651;
}));

(cljs.core.async.t_cljs$core$async14650.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14650.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14650.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14650.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async14650.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async14650.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async14650.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async14650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14651","meta14651",-492588648,null)], null);
}));

(cljs.core.async.t_cljs$core$async14650.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14650");

(cljs.core.async.t_cljs$core$async14650.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14650");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14650.
 */
cljs.core.async.__GT_t_cljs$core$async14650 = (function cljs$core$async$__GT_t_cljs$core$async14650(ch,topic_fn,buf_fn,mults,ensure_mult,meta14651){
return (new cljs.core.async.t_cljs$core$async14650(ch,topic_fn,buf_fn,mults,ensure_mult,meta14651));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__14647 = arguments.length;
switch (G__14647) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__14645_SHARP_){
if(cljs.core.truth_((p1__14645_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14645_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__14645_SHARP_.call(null,topic)))){
return p1__14645_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14645_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async14650(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__13388__auto___16125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13389__auto__ = (function (){var switch__13305__auto__ = (function (state_14728){
var state_val_14729 = (state_14728[(1)]);
if((state_val_14729 === (7))){
var inst_14724 = (state_14728[(2)]);
var state_14728__$1 = state_14728;
var statearr_14730_16126 = state_14728__$1;
(statearr_14730_16126[(2)] = inst_14724);

(statearr_14730_16126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (20))){
var state_14728__$1 = state_14728;
var statearr_14731_16127 = state_14728__$1;
(statearr_14731_16127[(2)] = null);

(statearr_14731_16127[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (1))){
var state_14728__$1 = state_14728;
var statearr_14732_16128 = state_14728__$1;
(statearr_14732_16128[(2)] = null);

(statearr_14732_16128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (24))){
var inst_14707 = (state_14728[(7)]);
var inst_14716 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_14707);
var state_14728__$1 = state_14728;
var statearr_14733_16132 = state_14728__$1;
(statearr_14733_16132[(2)] = inst_14716);

(statearr_14733_16132[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (4))){
var inst_14655 = (state_14728[(8)]);
var inst_14655__$1 = (state_14728[(2)]);
var inst_14656 = (inst_14655__$1 == null);
var state_14728__$1 = (function (){var statearr_14734 = state_14728;
(statearr_14734[(8)] = inst_14655__$1);

return statearr_14734;
})();
if(cljs.core.truth_(inst_14656)){
var statearr_14735_16133 = state_14728__$1;
(statearr_14735_16133[(1)] = (5));

} else {
var statearr_14736_16134 = state_14728__$1;
(statearr_14736_16134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (15))){
var inst_14701 = (state_14728[(2)]);
var state_14728__$1 = state_14728;
var statearr_14737_16135 = state_14728__$1;
(statearr_14737_16135[(2)] = inst_14701);

(statearr_14737_16135[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (21))){
var inst_14721 = (state_14728[(2)]);
var state_14728__$1 = (function (){var statearr_14738 = state_14728;
(statearr_14738[(9)] = inst_14721);

return statearr_14738;
})();
var statearr_14739_16136 = state_14728__$1;
(statearr_14739_16136[(2)] = null);

(statearr_14739_16136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (13))){
var inst_14681 = (state_14728[(10)]);
var inst_14685 = cljs.core.chunked_seq_QMARK_(inst_14681);
var state_14728__$1 = state_14728;
if(inst_14685){
var statearr_14740_16137 = state_14728__$1;
(statearr_14740_16137[(1)] = (16));

} else {
var statearr_14741_16138 = state_14728__$1;
(statearr_14741_16138[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (22))){
var inst_14713 = (state_14728[(2)]);
var state_14728__$1 = state_14728;
if(cljs.core.truth_(inst_14713)){
var statearr_14742_16142 = state_14728__$1;
(statearr_14742_16142[(1)] = (23));

} else {
var statearr_14743_16143 = state_14728__$1;
(statearr_14743_16143[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (6))){
var inst_14707 = (state_14728[(7)]);
var inst_14709 = (state_14728[(11)]);
var inst_14655 = (state_14728[(8)]);
var inst_14707__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_14655) : topic_fn.call(null,inst_14655));
var inst_14708 = cljs.core.deref(mults);
var inst_14709__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14708,inst_14707__$1);
var state_14728__$1 = (function (){var statearr_14744 = state_14728;
(statearr_14744[(7)] = inst_14707__$1);

(statearr_14744[(11)] = inst_14709__$1);

return statearr_14744;
})();
if(cljs.core.truth_(inst_14709__$1)){
var statearr_14745_16144 = state_14728__$1;
(statearr_14745_16144[(1)] = (19));

} else {
var statearr_14746_16145 = state_14728__$1;
(statearr_14746_16145[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (25))){
var inst_14718 = (state_14728[(2)]);
var state_14728__$1 = state_14728;
var statearr_14747_16146 = state_14728__$1;
(statearr_14747_16146[(2)] = inst_14718);

(statearr_14747_16146[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (17))){
var inst_14681 = (state_14728[(10)]);
var inst_14692 = cljs.core.first(inst_14681);
var inst_14693 = cljs.core.async.muxch_STAR_(inst_14692);
var inst_14694 = cljs.core.async.close_BANG_(inst_14693);
var inst_14695 = cljs.core.next(inst_14681);
var inst_14665 = inst_14695;
var inst_14666 = null;
var inst_14667 = (0);
var inst_14668 = (0);
var state_14728__$1 = (function (){var statearr_14748 = state_14728;
(statearr_14748[(12)] = inst_14668);

(statearr_14748[(13)] = inst_14667);

(statearr_14748[(14)] = inst_14666);

(statearr_14748[(15)] = inst_14665);

(statearr_14748[(16)] = inst_14694);

return statearr_14748;
})();
var statearr_14749_16147 = state_14728__$1;
(statearr_14749_16147[(2)] = null);

(statearr_14749_16147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (3))){
var inst_14726 = (state_14728[(2)]);
var state_14728__$1 = state_14728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14728__$1,inst_14726);
} else {
if((state_val_14729 === (12))){
var inst_14703 = (state_14728[(2)]);
var state_14728__$1 = state_14728;
var statearr_14752_16149 = state_14728__$1;
(statearr_14752_16149[(2)] = inst_14703);

(statearr_14752_16149[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (2))){
var state_14728__$1 = state_14728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14728__$1,(4),ch);
} else {
if((state_val_14729 === (23))){
var state_14728__$1 = state_14728;
var statearr_14755_16150 = state_14728__$1;
(statearr_14755_16150[(2)] = null);

(statearr_14755_16150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (19))){
var inst_14709 = (state_14728[(11)]);
var inst_14655 = (state_14728[(8)]);
var inst_14711 = cljs.core.async.muxch_STAR_(inst_14709);
var state_14728__$1 = state_14728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14728__$1,(22),inst_14711,inst_14655);
} else {
if((state_val_14729 === (11))){
var inst_14681 = (state_14728[(10)]);
var inst_14665 = (state_14728[(15)]);
var inst_14681__$1 = cljs.core.seq(inst_14665);
var state_14728__$1 = (function (){var statearr_14756 = state_14728;
(statearr_14756[(10)] = inst_14681__$1);

return statearr_14756;
})();
if(inst_14681__$1){
var statearr_14757_16151 = state_14728__$1;
(statearr_14757_16151[(1)] = (13));

} else {
var statearr_14759_16152 = state_14728__$1;
(statearr_14759_16152[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (9))){
var inst_14705 = (state_14728[(2)]);
var state_14728__$1 = state_14728;
var statearr_14762_16153 = state_14728__$1;
(statearr_14762_16153[(2)] = inst_14705);

(statearr_14762_16153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (5))){
var inst_14662 = cljs.core.deref(mults);
var inst_14663 = cljs.core.vals(inst_14662);
var inst_14664 = cljs.core.seq(inst_14663);
var inst_14665 = inst_14664;
var inst_14666 = null;
var inst_14667 = (0);
var inst_14668 = (0);
var state_14728__$1 = (function (){var statearr_14763 = state_14728;
(statearr_14763[(12)] = inst_14668);

(statearr_14763[(13)] = inst_14667);

(statearr_14763[(14)] = inst_14666);

(statearr_14763[(15)] = inst_14665);

return statearr_14763;
})();
var statearr_14764_16181 = state_14728__$1;
(statearr_14764_16181[(2)] = null);

(statearr_14764_16181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (14))){
var state_14728__$1 = state_14728;
var statearr_14769_16182 = state_14728__$1;
(statearr_14769_16182[(2)] = null);

(statearr_14769_16182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (16))){
var inst_14681 = (state_14728[(10)]);
var inst_14687 = cljs.core.chunk_first(inst_14681);
var inst_14688 = cljs.core.chunk_rest(inst_14681);
var inst_14689 = cljs.core.count(inst_14687);
var inst_14665 = inst_14688;
var inst_14666 = inst_14687;
var inst_14667 = inst_14689;
var inst_14668 = (0);
var state_14728__$1 = (function (){var statearr_14783 = state_14728;
(statearr_14783[(12)] = inst_14668);

(statearr_14783[(13)] = inst_14667);

(statearr_14783[(14)] = inst_14666);

(statearr_14783[(15)] = inst_14665);

return statearr_14783;
})();
var statearr_14784_16183 = state_14728__$1;
(statearr_14784_16183[(2)] = null);

(statearr_14784_16183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (10))){
var inst_14668 = (state_14728[(12)]);
var inst_14667 = (state_14728[(13)]);
var inst_14666 = (state_14728[(14)]);
var inst_14665 = (state_14728[(15)]);
var inst_14673 = cljs.core._nth(inst_14666,inst_14668);
var inst_14674 = cljs.core.async.muxch_STAR_(inst_14673);
var inst_14675 = cljs.core.async.close_BANG_(inst_14674);
var inst_14676 = (inst_14668 + (1));
var tmp14766 = inst_14667;
var tmp14767 = inst_14666;
var tmp14768 = inst_14665;
var inst_14665__$1 = tmp14768;
var inst_14666__$1 = tmp14767;
var inst_14667__$1 = tmp14766;
var inst_14668__$1 = inst_14676;
var state_14728__$1 = (function (){var statearr_14785 = state_14728;
(statearr_14785[(12)] = inst_14668__$1);

(statearr_14785[(13)] = inst_14667__$1);

(statearr_14785[(17)] = inst_14675);

(statearr_14785[(14)] = inst_14666__$1);

(statearr_14785[(15)] = inst_14665__$1);

return statearr_14785;
})();
var statearr_14786_16185 = state_14728__$1;
(statearr_14786_16185[(2)] = null);

(statearr_14786_16185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (18))){
var inst_14698 = (state_14728[(2)]);
var state_14728__$1 = state_14728;
var statearr_14787_16186 = state_14728__$1;
(statearr_14787_16186[(2)] = inst_14698);

(statearr_14787_16186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (8))){
var inst_14668 = (state_14728[(12)]);
var inst_14667 = (state_14728[(13)]);
var inst_14670 = (inst_14668 < inst_14667);
var inst_14671 = inst_14670;
var state_14728__$1 = state_14728;
if(cljs.core.truth_(inst_14671)){
var statearr_14789_16187 = state_14728__$1;
(statearr_14789_16187[(1)] = (10));

} else {
var statearr_14790_16188 = state_14728__$1;
(statearr_14790_16188[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13306__auto__ = null;
var cljs$core$async$state_machine__13306__auto____0 = (function (){
var statearr_14791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14791[(0)] = cljs$core$async$state_machine__13306__auto__);

(statearr_14791[(1)] = (1));

return statearr_14791;
});
var cljs$core$async$state_machine__13306__auto____1 = (function (state_14728){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_14728);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e14792){var ex__13309__auto__ = e14792;
var statearr_14793_16189 = state_14728;
(statearr_14793_16189[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_14728[(4)]))){
var statearr_14799_16190 = state_14728;
(statearr_14799_16190[(1)] = cljs.core.first((state_14728[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16191 = state_14728;
state_14728 = G__16191;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$state_machine__13306__auto__ = function(state_14728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13306__auto____1.call(this,state_14728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13306__auto____0;
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13306__auto____1;
return cljs$core$async$state_machine__13306__auto__;
})()
})();
var state__13390__auto__ = (function (){var statearr_14801 = f__13389__auto__();
(statearr_14801[(6)] = c__13388__auto___16125);

return statearr_14801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13390__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__14803 = arguments.length;
switch (G__14803) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__14807 = arguments.length;
switch (G__14807) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__14809 = arguments.length;
switch (G__14809) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13388__auto___16201 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13389__auto__ = (function (){var switch__13305__auto__ = (function (state_14853){
var state_val_14854 = (state_14853[(1)]);
if((state_val_14854 === (7))){
var state_14853__$1 = state_14853;
var statearr_14855_16202 = state_14853__$1;
(statearr_14855_16202[(2)] = null);

(statearr_14855_16202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (1))){
var state_14853__$1 = state_14853;
var statearr_14856_16203 = state_14853__$1;
(statearr_14856_16203[(2)] = null);

(statearr_14856_16203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (4))){
var inst_14813 = (state_14853[(7)]);
var inst_14812 = (state_14853[(8)]);
var inst_14815 = (inst_14813 < inst_14812);
var state_14853__$1 = state_14853;
if(cljs.core.truth_(inst_14815)){
var statearr_14857_16205 = state_14853__$1;
(statearr_14857_16205[(1)] = (6));

} else {
var statearr_14858_16206 = state_14853__$1;
(statearr_14858_16206[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (15))){
var inst_14839 = (state_14853[(9)]);
var inst_14844 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_14839);
var state_14853__$1 = state_14853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14853__$1,(17),out,inst_14844);
} else {
if((state_val_14854 === (13))){
var inst_14839 = (state_14853[(9)]);
var inst_14839__$1 = (state_14853[(2)]);
var inst_14840 = cljs.core.some(cljs.core.nil_QMARK_,inst_14839__$1);
var state_14853__$1 = (function (){var statearr_14859 = state_14853;
(statearr_14859[(9)] = inst_14839__$1);

return statearr_14859;
})();
if(cljs.core.truth_(inst_14840)){
var statearr_14860_16209 = state_14853__$1;
(statearr_14860_16209[(1)] = (14));

} else {
var statearr_14861_16210 = state_14853__$1;
(statearr_14861_16210[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (6))){
var state_14853__$1 = state_14853;
var statearr_14862_16213 = state_14853__$1;
(statearr_14862_16213[(2)] = null);

(statearr_14862_16213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (17))){
var inst_14846 = (state_14853[(2)]);
var state_14853__$1 = (function (){var statearr_14864 = state_14853;
(statearr_14864[(10)] = inst_14846);

return statearr_14864;
})();
var statearr_14865_16221 = state_14853__$1;
(statearr_14865_16221[(2)] = null);

(statearr_14865_16221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (3))){
var inst_14851 = (state_14853[(2)]);
var state_14853__$1 = state_14853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14853__$1,inst_14851);
} else {
if((state_val_14854 === (12))){
var _ = (function (){var statearr_14867 = state_14853;
(statearr_14867[(4)] = cljs.core.rest((state_14853[(4)])));

return statearr_14867;
})();
var state_14853__$1 = state_14853;
var ex14863 = (state_14853__$1[(2)]);
var statearr_14868_16222 = state_14853__$1;
(statearr_14868_16222[(5)] = ex14863);


if((ex14863 instanceof Object)){
var statearr_14870_16224 = state_14853__$1;
(statearr_14870_16224[(1)] = (11));

(statearr_14870_16224[(5)] = null);

} else {
throw ex14863;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (2))){
var inst_14811 = cljs.core.reset_BANG_(dctr,cnt);
var inst_14812 = cnt;
var inst_14813 = (0);
var state_14853__$1 = (function (){var statearr_14871 = state_14853;
(statearr_14871[(7)] = inst_14813);

(statearr_14871[(8)] = inst_14812);

(statearr_14871[(11)] = inst_14811);

return statearr_14871;
})();
var statearr_14872_16227 = state_14853__$1;
(statearr_14872_16227[(2)] = null);

(statearr_14872_16227[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (11))){
var inst_14817 = (state_14853[(2)]);
var inst_14818 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_14853__$1 = (function (){var statearr_14873 = state_14853;
(statearr_14873[(12)] = inst_14817);

return statearr_14873;
})();
var statearr_14874_16231 = state_14853__$1;
(statearr_14874_16231[(2)] = inst_14818);

(statearr_14874_16231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (9))){
var inst_14813 = (state_14853[(7)]);
var _ = (function (){var statearr_14875 = state_14853;
(statearr_14875[(4)] = cljs.core.cons((12),(state_14853[(4)])));

return statearr_14875;
})();
var inst_14824 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_14813) : chs__$1.call(null,inst_14813));
var inst_14825 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_14813) : done.call(null,inst_14813));
var inst_14826 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_14824,inst_14825);
var ___$1 = (function (){var statearr_14876 = state_14853;
(statearr_14876[(4)] = cljs.core.rest((state_14853[(4)])));

return statearr_14876;
})();
var state_14853__$1 = state_14853;
var statearr_14877_16238 = state_14853__$1;
(statearr_14877_16238[(2)] = inst_14826);

(statearr_14877_16238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (5))){
var inst_14836 = (state_14853[(2)]);
var state_14853__$1 = (function (){var statearr_14878 = state_14853;
(statearr_14878[(13)] = inst_14836);

return statearr_14878;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14853__$1,(13),dchan);
} else {
if((state_val_14854 === (14))){
var inst_14842 = cljs.core.async.close_BANG_(out);
var state_14853__$1 = state_14853;
var statearr_14879_16239 = state_14853__$1;
(statearr_14879_16239[(2)] = inst_14842);

(statearr_14879_16239[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (16))){
var inst_14849 = (state_14853[(2)]);
var state_14853__$1 = state_14853;
var statearr_14880_16240 = state_14853__$1;
(statearr_14880_16240[(2)] = inst_14849);

(statearr_14880_16240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (10))){
var inst_14813 = (state_14853[(7)]);
var inst_14829 = (state_14853[(2)]);
var inst_14830 = (inst_14813 + (1));
var inst_14813__$1 = inst_14830;
var state_14853__$1 = (function (){var statearr_14881 = state_14853;
(statearr_14881[(7)] = inst_14813__$1);

(statearr_14881[(14)] = inst_14829);

return statearr_14881;
})();
var statearr_14882_16257 = state_14853__$1;
(statearr_14882_16257[(2)] = null);

(statearr_14882_16257[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (8))){
var inst_14834 = (state_14853[(2)]);
var state_14853__$1 = state_14853;
var statearr_14883_16258 = state_14853__$1;
(statearr_14883_16258[(2)] = inst_14834);

(statearr_14883_16258[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13306__auto__ = null;
var cljs$core$async$state_machine__13306__auto____0 = (function (){
var statearr_14884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14884[(0)] = cljs$core$async$state_machine__13306__auto__);

(statearr_14884[(1)] = (1));

return statearr_14884;
});
var cljs$core$async$state_machine__13306__auto____1 = (function (state_14853){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_14853);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e14885){var ex__13309__auto__ = e14885;
var statearr_14886_16259 = state_14853;
(statearr_14886_16259[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_14853[(4)]))){
var statearr_14887_16260 = state_14853;
(statearr_14887_16260[(1)] = cljs.core.first((state_14853[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16261 = state_14853;
state_14853 = G__16261;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$state_machine__13306__auto__ = function(state_14853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13306__auto____1.call(this,state_14853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13306__auto____0;
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13306__auto____1;
return cljs$core$async$state_machine__13306__auto__;
})()
})();
var state__13390__auto__ = (function (){var statearr_14888 = f__13389__auto__();
(statearr_14888[(6)] = c__13388__auto___16201);

return statearr_14888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13390__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__14891 = arguments.length;
switch (G__14891) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13388__auto___16263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13389__auto__ = (function (){var switch__13305__auto__ = (function (state_14923){
var state_val_14924 = (state_14923[(1)]);
if((state_val_14924 === (7))){
var inst_14903 = (state_14923[(7)]);
var inst_14902 = (state_14923[(8)]);
var inst_14902__$1 = (state_14923[(2)]);
var inst_14903__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14902__$1,(0),null);
var inst_14904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14902__$1,(1),null);
var inst_14905 = (inst_14903__$1 == null);
var state_14923__$1 = (function (){var statearr_14925 = state_14923;
(statearr_14925[(7)] = inst_14903__$1);

(statearr_14925[(8)] = inst_14902__$1);

(statearr_14925[(9)] = inst_14904);

return statearr_14925;
})();
if(cljs.core.truth_(inst_14905)){
var statearr_14926_16264 = state_14923__$1;
(statearr_14926_16264[(1)] = (8));

} else {
var statearr_14927_16265 = state_14923__$1;
(statearr_14927_16265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14924 === (1))){
var inst_14892 = cljs.core.vec(chs);
var inst_14893 = inst_14892;
var state_14923__$1 = (function (){var statearr_14928 = state_14923;
(statearr_14928[(10)] = inst_14893);

return statearr_14928;
})();
var statearr_14929_16266 = state_14923__$1;
(statearr_14929_16266[(2)] = null);

(statearr_14929_16266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14924 === (4))){
var inst_14893 = (state_14923[(10)]);
var state_14923__$1 = state_14923;
return cljs.core.async.ioc_alts_BANG_(state_14923__$1,(7),inst_14893);
} else {
if((state_val_14924 === (6))){
var inst_14919 = (state_14923[(2)]);
var state_14923__$1 = state_14923;
var statearr_14930_16267 = state_14923__$1;
(statearr_14930_16267[(2)] = inst_14919);

(statearr_14930_16267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14924 === (3))){
var inst_14921 = (state_14923[(2)]);
var state_14923__$1 = state_14923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14923__$1,inst_14921);
} else {
if((state_val_14924 === (2))){
var inst_14893 = (state_14923[(10)]);
var inst_14895 = cljs.core.count(inst_14893);
var inst_14896 = (inst_14895 > (0));
var state_14923__$1 = state_14923;
if(cljs.core.truth_(inst_14896)){
var statearr_14932_16268 = state_14923__$1;
(statearr_14932_16268[(1)] = (4));

} else {
var statearr_14933_16269 = state_14923__$1;
(statearr_14933_16269[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14924 === (11))){
var inst_14893 = (state_14923[(10)]);
var inst_14912 = (state_14923[(2)]);
var tmp14931 = inst_14893;
var inst_14893__$1 = tmp14931;
var state_14923__$1 = (function (){var statearr_14934 = state_14923;
(statearr_14934[(11)] = inst_14912);

(statearr_14934[(10)] = inst_14893__$1);

return statearr_14934;
})();
var statearr_14935_16275 = state_14923__$1;
(statearr_14935_16275[(2)] = null);

(statearr_14935_16275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14924 === (9))){
var inst_14903 = (state_14923[(7)]);
var state_14923__$1 = state_14923;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14923__$1,(11),out,inst_14903);
} else {
if((state_val_14924 === (5))){
var inst_14917 = cljs.core.async.close_BANG_(out);
var state_14923__$1 = state_14923;
var statearr_14938_16279 = state_14923__$1;
(statearr_14938_16279[(2)] = inst_14917);

(statearr_14938_16279[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14924 === (10))){
var inst_14915 = (state_14923[(2)]);
var state_14923__$1 = state_14923;
var statearr_14939_16282 = state_14923__$1;
(statearr_14939_16282[(2)] = inst_14915);

(statearr_14939_16282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14924 === (8))){
var inst_14903 = (state_14923[(7)]);
var inst_14902 = (state_14923[(8)]);
var inst_14893 = (state_14923[(10)]);
var inst_14904 = (state_14923[(9)]);
var inst_14907 = (function (){var cs = inst_14893;
var vec__14898 = inst_14902;
var v = inst_14903;
var c = inst_14904;
return (function (p1__14889_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__14889_SHARP_);
});
})();
var inst_14908 = cljs.core.filterv(inst_14907,inst_14893);
var inst_14893__$1 = inst_14908;
var state_14923__$1 = (function (){var statearr_14940 = state_14923;
(statearr_14940[(10)] = inst_14893__$1);

return statearr_14940;
})();
var statearr_14941_16286 = state_14923__$1;
(statearr_14941_16286[(2)] = null);

(statearr_14941_16286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13306__auto__ = null;
var cljs$core$async$state_machine__13306__auto____0 = (function (){
var statearr_14942 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14942[(0)] = cljs$core$async$state_machine__13306__auto__);

(statearr_14942[(1)] = (1));

return statearr_14942;
});
var cljs$core$async$state_machine__13306__auto____1 = (function (state_14923){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_14923);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e14943){var ex__13309__auto__ = e14943;
var statearr_14944_16291 = state_14923;
(statearr_14944_16291[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_14923[(4)]))){
var statearr_14945_16292 = state_14923;
(statearr_14945_16292[(1)] = cljs.core.first((state_14923[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16297 = state_14923;
state_14923 = G__16297;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$state_machine__13306__auto__ = function(state_14923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13306__auto____1.call(this,state_14923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13306__auto____0;
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13306__auto____1;
return cljs$core$async$state_machine__13306__auto__;
})()
})();
var state__13390__auto__ = (function (){var statearr_14946 = f__13389__auto__();
(statearr_14946[(6)] = c__13388__auto___16263);

return statearr_14946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13390__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__14948 = arguments.length;
switch (G__14948) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13388__auto___16303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13389__auto__ = (function (){var switch__13305__auto__ = (function (state_14980){
var state_val_14981 = (state_14980[(1)]);
if((state_val_14981 === (7))){
var inst_14962 = (state_14980[(7)]);
var inst_14962__$1 = (state_14980[(2)]);
var inst_14963 = (inst_14962__$1 == null);
var inst_14964 = cljs.core.not(inst_14963);
var state_14980__$1 = (function (){var statearr_14982 = state_14980;
(statearr_14982[(7)] = inst_14962__$1);

return statearr_14982;
})();
if(inst_14964){
var statearr_14983_16304 = state_14980__$1;
(statearr_14983_16304[(1)] = (8));

} else {
var statearr_14984_16305 = state_14980__$1;
(statearr_14984_16305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (1))){
var inst_14957 = (0);
var state_14980__$1 = (function (){var statearr_14985 = state_14980;
(statearr_14985[(8)] = inst_14957);

return statearr_14985;
})();
var statearr_14986_16306 = state_14980__$1;
(statearr_14986_16306[(2)] = null);

(statearr_14986_16306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (4))){
var state_14980__$1 = state_14980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14980__$1,(7),ch);
} else {
if((state_val_14981 === (6))){
var inst_14975 = (state_14980[(2)]);
var state_14980__$1 = state_14980;
var statearr_14987_16310 = state_14980__$1;
(statearr_14987_16310[(2)] = inst_14975);

(statearr_14987_16310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (3))){
var inst_14977 = (state_14980[(2)]);
var inst_14978 = cljs.core.async.close_BANG_(out);
var state_14980__$1 = (function (){var statearr_14988 = state_14980;
(statearr_14988[(9)] = inst_14977);

return statearr_14988;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14980__$1,inst_14978);
} else {
if((state_val_14981 === (2))){
var inst_14957 = (state_14980[(8)]);
var inst_14959 = (inst_14957 < n);
var state_14980__$1 = state_14980;
if(cljs.core.truth_(inst_14959)){
var statearr_14989_16311 = state_14980__$1;
(statearr_14989_16311[(1)] = (4));

} else {
var statearr_14990_16312 = state_14980__$1;
(statearr_14990_16312[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (11))){
var inst_14957 = (state_14980[(8)]);
var inst_14967 = (state_14980[(2)]);
var inst_14968 = (inst_14957 + (1));
var inst_14957__$1 = inst_14968;
var state_14980__$1 = (function (){var statearr_14991 = state_14980;
(statearr_14991[(8)] = inst_14957__$1);

(statearr_14991[(10)] = inst_14967);

return statearr_14991;
})();
var statearr_14992_16313 = state_14980__$1;
(statearr_14992_16313[(2)] = null);

(statearr_14992_16313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (9))){
var state_14980__$1 = state_14980;
var statearr_14994_16314 = state_14980__$1;
(statearr_14994_16314[(2)] = null);

(statearr_14994_16314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (5))){
var state_14980__$1 = state_14980;
var statearr_14995_16315 = state_14980__$1;
(statearr_14995_16315[(2)] = null);

(statearr_14995_16315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (10))){
var inst_14972 = (state_14980[(2)]);
var state_14980__$1 = state_14980;
var statearr_14996_16316 = state_14980__$1;
(statearr_14996_16316[(2)] = inst_14972);

(statearr_14996_16316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (8))){
var inst_14962 = (state_14980[(7)]);
var state_14980__$1 = state_14980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14980__$1,(11),out,inst_14962);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13306__auto__ = null;
var cljs$core$async$state_machine__13306__auto____0 = (function (){
var statearr_14997 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14997[(0)] = cljs$core$async$state_machine__13306__auto__);

(statearr_14997[(1)] = (1));

return statearr_14997;
});
var cljs$core$async$state_machine__13306__auto____1 = (function (state_14980){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_14980);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e14999){var ex__13309__auto__ = e14999;
var statearr_15000_16317 = state_14980;
(statearr_15000_16317[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_14980[(4)]))){
var statearr_15001_16318 = state_14980;
(statearr_15001_16318[(1)] = cljs.core.first((state_14980[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16319 = state_14980;
state_14980 = G__16319;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$state_machine__13306__auto__ = function(state_14980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13306__auto____1.call(this,state_14980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13306__auto____0;
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13306__auto____1;
return cljs$core$async$state_machine__13306__auto__;
})()
})();
var state__13390__auto__ = (function (){var statearr_15005 = f__13389__auto__();
(statearr_15005[(6)] = c__13388__auto___16303);

return statearr_15005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13390__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15016 = (function (f,ch,meta15011,_,fn1,meta15017){
this.f = f;
this.ch = ch;
this.meta15011 = meta15011;
this._ = _;
this.fn1 = fn1;
this.meta15017 = meta15017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15018,meta15017__$1){
var self__ = this;
var _15018__$1 = this;
return (new cljs.core.async.t_cljs$core$async15016(self__.f,self__.ch,self__.meta15011,self__._,self__.fn1,meta15017__$1));
}));

(cljs.core.async.t_cljs$core$async15016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15018){
var self__ = this;
var _15018__$1 = this;
return self__.meta15017;
}));

(cljs.core.async.t_cljs$core$async15016.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15016.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async15016.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15016.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__15007_SHARP_){
var G__15019 = (((p1__15007_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15007_SHARP_) : self__.f.call(null,p1__15007_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15019) : f1.call(null,G__15019));
});
}));

(cljs.core.async.t_cljs$core$async15016.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15011","meta15011",73490169,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15010","cljs.core.async/t_cljs$core$async15010",438662424,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15017","meta15017",-982995716,null)], null);
}));

(cljs.core.async.t_cljs$core$async15016.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15016");

(cljs.core.async.t_cljs$core$async15016.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15016");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15016.
 */
cljs.core.async.__GT_t_cljs$core$async15016 = (function cljs$core$async$__GT_t_cljs$core$async15016(f,ch,meta15011,_,fn1,meta15017){
return (new cljs.core.async.t_cljs$core$async15016(f,ch,meta15011,_,fn1,meta15017));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15010 = (function (f,ch,meta15011){
this.f = f;
this.ch = ch;
this.meta15011 = meta15011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15012,meta15011__$1){
var self__ = this;
var _15012__$1 = this;
return (new cljs.core.async.t_cljs$core$async15010(self__.f,self__.ch,meta15011__$1));
}));

(cljs.core.async.t_cljs$core$async15010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15012){
var self__ = this;
var _15012__$1 = this;
return self__.meta15011;
}));

(cljs.core.async.t_cljs$core$async15010.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15010.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15010.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15010.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15010.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async15016(self__.f,self__.ch,self__.meta15011,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15020 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15020) : self__.f.call(null,G__15020));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async15010.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15010.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async15010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15011","meta15011",73490169,null)], null);
}));

(cljs.core.async.t_cljs$core$async15010.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15010.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15010");

(cljs.core.async.t_cljs$core$async15010.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15010");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15010.
 */
cljs.core.async.__GT_t_cljs$core$async15010 = (function cljs$core$async$__GT_t_cljs$core$async15010(f,ch,meta15011){
return (new cljs.core.async.t_cljs$core$async15010(f,ch,meta15011));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15010(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15022 = (function (f,ch,meta15023){
this.f = f;
this.ch = ch;
this.meta15023 = meta15023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15024,meta15023__$1){
var self__ = this;
var _15024__$1 = this;
return (new cljs.core.async.t_cljs$core$async15022(self__.f,self__.ch,meta15023__$1));
}));

(cljs.core.async.t_cljs$core$async15022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15024){
var self__ = this;
var _15024__$1 = this;
return self__.meta15023;
}));

(cljs.core.async.t_cljs$core$async15022.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15022.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15022.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15022.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15022.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15022.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async15022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15023","meta15023",-1740157958,null)], null);
}));

(cljs.core.async.t_cljs$core$async15022.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15022");

(cljs.core.async.t_cljs$core$async15022.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15022");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15022.
 */
cljs.core.async.__GT_t_cljs$core$async15022 = (function cljs$core$async$__GT_t_cljs$core$async15022(f,ch,meta15023){
return (new cljs.core.async.t_cljs$core$async15022(f,ch,meta15023));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15022(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15027 = (function (p,ch,meta15028){
this.p = p;
this.ch = ch;
this.meta15028 = meta15028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15029,meta15028__$1){
var self__ = this;
var _15029__$1 = this;
return (new cljs.core.async.t_cljs$core$async15027(self__.p,self__.ch,meta15028__$1));
}));

(cljs.core.async.t_cljs$core$async15027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15029){
var self__ = this;
var _15029__$1 = this;
return self__.meta15028;
}));

(cljs.core.async.t_cljs$core$async15027.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15027.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15027.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15027.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15027.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15027.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15027.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async15027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15028","meta15028",-1467255208,null)], null);
}));

(cljs.core.async.t_cljs$core$async15027.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15027");

(cljs.core.async.t_cljs$core$async15027.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15027");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15027.
 */
cljs.core.async.__GT_t_cljs$core$async15027 = (function cljs$core$async$__GT_t_cljs$core$async15027(p,ch,meta15028){
return (new cljs.core.async.t_cljs$core$async15027(p,ch,meta15028));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async15027(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__15045 = arguments.length;
switch (G__15045) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13388__auto___16323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13389__auto__ = (function (){var switch__13305__auto__ = (function (state_15071){
var state_val_15072 = (state_15071[(1)]);
if((state_val_15072 === (7))){
var inst_15065 = (state_15071[(2)]);
var state_15071__$1 = state_15071;
var statearr_15073_16324 = state_15071__$1;
(statearr_15073_16324[(2)] = inst_15065);

(statearr_15073_16324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (1))){
var state_15071__$1 = state_15071;
var statearr_15074_16325 = state_15071__$1;
(statearr_15074_16325[(2)] = null);

(statearr_15074_16325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (4))){
var inst_15049 = (state_15071[(7)]);
var inst_15049__$1 = (state_15071[(2)]);
var inst_15050 = (inst_15049__$1 == null);
var state_15071__$1 = (function (){var statearr_15078 = state_15071;
(statearr_15078[(7)] = inst_15049__$1);

return statearr_15078;
})();
if(cljs.core.truth_(inst_15050)){
var statearr_15079_16326 = state_15071__$1;
(statearr_15079_16326[(1)] = (5));

} else {
var statearr_15080_16327 = state_15071__$1;
(statearr_15080_16327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (6))){
var inst_15049 = (state_15071[(7)]);
var inst_15056 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15049) : p.call(null,inst_15049));
var state_15071__$1 = state_15071;
if(cljs.core.truth_(inst_15056)){
var statearr_15081_16328 = state_15071__$1;
(statearr_15081_16328[(1)] = (8));

} else {
var statearr_15082_16330 = state_15071__$1;
(statearr_15082_16330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (3))){
var inst_15067 = (state_15071[(2)]);
var state_15071__$1 = state_15071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15071__$1,inst_15067);
} else {
if((state_val_15072 === (2))){
var state_15071__$1 = state_15071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15071__$1,(4),ch);
} else {
if((state_val_15072 === (11))){
var inst_15059 = (state_15071[(2)]);
var state_15071__$1 = state_15071;
var statearr_15101_16331 = state_15071__$1;
(statearr_15101_16331[(2)] = inst_15059);

(statearr_15101_16331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (9))){
var state_15071__$1 = state_15071;
var statearr_15104_16332 = state_15071__$1;
(statearr_15104_16332[(2)] = null);

(statearr_15104_16332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (5))){
var inst_15052 = cljs.core.async.close_BANG_(out);
var state_15071__$1 = state_15071;
var statearr_15105_16333 = state_15071__$1;
(statearr_15105_16333[(2)] = inst_15052);

(statearr_15105_16333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (10))){
var inst_15062 = (state_15071[(2)]);
var state_15071__$1 = (function (){var statearr_15106 = state_15071;
(statearr_15106[(8)] = inst_15062);

return statearr_15106;
})();
var statearr_15107_16334 = state_15071__$1;
(statearr_15107_16334[(2)] = null);

(statearr_15107_16334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15072 === (8))){
var inst_15049 = (state_15071[(7)]);
var state_15071__$1 = state_15071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15071__$1,(11),out,inst_15049);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13306__auto__ = null;
var cljs$core$async$state_machine__13306__auto____0 = (function (){
var statearr_15108 = [null,null,null,null,null,null,null,null,null];
(statearr_15108[(0)] = cljs$core$async$state_machine__13306__auto__);

(statearr_15108[(1)] = (1));

return statearr_15108;
});
var cljs$core$async$state_machine__13306__auto____1 = (function (state_15071){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_15071);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e15109){var ex__13309__auto__ = e15109;
var statearr_15110_16335 = state_15071;
(statearr_15110_16335[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_15071[(4)]))){
var statearr_15111_16336 = state_15071;
(statearr_15111_16336[(1)] = cljs.core.first((state_15071[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16337 = state_15071;
state_15071 = G__16337;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$state_machine__13306__auto__ = function(state_15071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13306__auto____1.call(this,state_15071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13306__auto____0;
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13306__auto____1;
return cljs$core$async$state_machine__13306__auto__;
})()
})();
var state__13390__auto__ = (function (){var statearr_15112 = f__13389__auto__();
(statearr_15112[(6)] = c__13388__auto___16323);

return statearr_15112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13390__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15114 = arguments.length;
switch (G__15114) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13388__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13389__auto__ = (function (){var switch__13305__auto__ = (function (state_15191){
var state_val_15192 = (state_15191[(1)]);
if((state_val_15192 === (7))){
var inst_15187 = (state_15191[(2)]);
var state_15191__$1 = state_15191;
var statearr_15193_16351 = state_15191__$1;
(statearr_15193_16351[(2)] = inst_15187);

(statearr_15193_16351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (20))){
var inst_15157 = (state_15191[(7)]);
var inst_15168 = (state_15191[(2)]);
var inst_15169 = cljs.core.next(inst_15157);
var inst_15142 = inst_15169;
var inst_15143 = null;
var inst_15144 = (0);
var inst_15145 = (0);
var state_15191__$1 = (function (){var statearr_15195 = state_15191;
(statearr_15195[(8)] = inst_15143);

(statearr_15195[(9)] = inst_15142);

(statearr_15195[(10)] = inst_15145);

(statearr_15195[(11)] = inst_15144);

(statearr_15195[(12)] = inst_15168);

return statearr_15195;
})();
var statearr_15196_16352 = state_15191__$1;
(statearr_15196_16352[(2)] = null);

(statearr_15196_16352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (1))){
var state_15191__$1 = state_15191;
var statearr_15197_16353 = state_15191__$1;
(statearr_15197_16353[(2)] = null);

(statearr_15197_16353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (4))){
var inst_15129 = (state_15191[(13)]);
var inst_15129__$1 = (state_15191[(2)]);
var inst_15132 = (inst_15129__$1 == null);
var state_15191__$1 = (function (){var statearr_15198 = state_15191;
(statearr_15198[(13)] = inst_15129__$1);

return statearr_15198;
})();
if(cljs.core.truth_(inst_15132)){
var statearr_15199_16355 = state_15191__$1;
(statearr_15199_16355[(1)] = (5));

} else {
var statearr_15202_16356 = state_15191__$1;
(statearr_15202_16356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (15))){
var state_15191__$1 = state_15191;
var statearr_15206_16357 = state_15191__$1;
(statearr_15206_16357[(2)] = null);

(statearr_15206_16357[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (21))){
var state_15191__$1 = state_15191;
var statearr_15207_16358 = state_15191__$1;
(statearr_15207_16358[(2)] = null);

(statearr_15207_16358[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (13))){
var inst_15143 = (state_15191[(8)]);
var inst_15142 = (state_15191[(9)]);
var inst_15145 = (state_15191[(10)]);
var inst_15144 = (state_15191[(11)]);
var inst_15152 = (state_15191[(2)]);
var inst_15153 = (inst_15145 + (1));
var tmp15203 = inst_15143;
var tmp15204 = inst_15142;
var tmp15205 = inst_15144;
var inst_15142__$1 = tmp15204;
var inst_15143__$1 = tmp15203;
var inst_15144__$1 = tmp15205;
var inst_15145__$1 = inst_15153;
var state_15191__$1 = (function (){var statearr_15208 = state_15191;
(statearr_15208[(8)] = inst_15143__$1);

(statearr_15208[(9)] = inst_15142__$1);

(statearr_15208[(10)] = inst_15145__$1);

(statearr_15208[(11)] = inst_15144__$1);

(statearr_15208[(14)] = inst_15152);

return statearr_15208;
})();
var statearr_15209_16362 = state_15191__$1;
(statearr_15209_16362[(2)] = null);

(statearr_15209_16362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (22))){
var state_15191__$1 = state_15191;
var statearr_15210_16363 = state_15191__$1;
(statearr_15210_16363[(2)] = null);

(statearr_15210_16363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (6))){
var inst_15129 = (state_15191[(13)]);
var inst_15140 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15129) : f.call(null,inst_15129));
var inst_15141 = cljs.core.seq(inst_15140);
var inst_15142 = inst_15141;
var inst_15143 = null;
var inst_15144 = (0);
var inst_15145 = (0);
var state_15191__$1 = (function (){var statearr_15211 = state_15191;
(statearr_15211[(8)] = inst_15143);

(statearr_15211[(9)] = inst_15142);

(statearr_15211[(10)] = inst_15145);

(statearr_15211[(11)] = inst_15144);

return statearr_15211;
})();
var statearr_15212_16367 = state_15191__$1;
(statearr_15212_16367[(2)] = null);

(statearr_15212_16367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (17))){
var inst_15157 = (state_15191[(7)]);
var inst_15161 = cljs.core.chunk_first(inst_15157);
var inst_15162 = cljs.core.chunk_rest(inst_15157);
var inst_15163 = cljs.core.count(inst_15161);
var inst_15142 = inst_15162;
var inst_15143 = inst_15161;
var inst_15144 = inst_15163;
var inst_15145 = (0);
var state_15191__$1 = (function (){var statearr_15213 = state_15191;
(statearr_15213[(8)] = inst_15143);

(statearr_15213[(9)] = inst_15142);

(statearr_15213[(10)] = inst_15145);

(statearr_15213[(11)] = inst_15144);

return statearr_15213;
})();
var statearr_15214_16368 = state_15191__$1;
(statearr_15214_16368[(2)] = null);

(statearr_15214_16368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (3))){
var inst_15189 = (state_15191[(2)]);
var state_15191__$1 = state_15191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15191__$1,inst_15189);
} else {
if((state_val_15192 === (12))){
var inst_15177 = (state_15191[(2)]);
var state_15191__$1 = state_15191;
var statearr_15215_16369 = state_15191__$1;
(statearr_15215_16369[(2)] = inst_15177);

(statearr_15215_16369[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (2))){
var state_15191__$1 = state_15191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15191__$1,(4),in$);
} else {
if((state_val_15192 === (23))){
var inst_15185 = (state_15191[(2)]);
var state_15191__$1 = state_15191;
var statearr_15216_16370 = state_15191__$1;
(statearr_15216_16370[(2)] = inst_15185);

(statearr_15216_16370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (19))){
var inst_15172 = (state_15191[(2)]);
var state_15191__$1 = state_15191;
var statearr_15217_16371 = state_15191__$1;
(statearr_15217_16371[(2)] = inst_15172);

(statearr_15217_16371[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (11))){
var inst_15142 = (state_15191[(9)]);
var inst_15157 = (state_15191[(7)]);
var inst_15157__$1 = cljs.core.seq(inst_15142);
var state_15191__$1 = (function (){var statearr_15218 = state_15191;
(statearr_15218[(7)] = inst_15157__$1);

return statearr_15218;
})();
if(inst_15157__$1){
var statearr_15219_16372 = state_15191__$1;
(statearr_15219_16372[(1)] = (14));

} else {
var statearr_15220_16373 = state_15191__$1;
(statearr_15220_16373[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (9))){
var inst_15179 = (state_15191[(2)]);
var inst_15180 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15191__$1 = (function (){var statearr_15221 = state_15191;
(statearr_15221[(15)] = inst_15179);

return statearr_15221;
})();
if(cljs.core.truth_(inst_15180)){
var statearr_15222_16375 = state_15191__$1;
(statearr_15222_16375[(1)] = (21));

} else {
var statearr_15223_16415 = state_15191__$1;
(statearr_15223_16415[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (5))){
var inst_15134 = cljs.core.async.close_BANG_(out);
var state_15191__$1 = state_15191;
var statearr_15224_16416 = state_15191__$1;
(statearr_15224_16416[(2)] = inst_15134);

(statearr_15224_16416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (14))){
var inst_15157 = (state_15191[(7)]);
var inst_15159 = cljs.core.chunked_seq_QMARK_(inst_15157);
var state_15191__$1 = state_15191;
if(inst_15159){
var statearr_15225_16417 = state_15191__$1;
(statearr_15225_16417[(1)] = (17));

} else {
var statearr_15226_16420 = state_15191__$1;
(statearr_15226_16420[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (16))){
var inst_15175 = (state_15191[(2)]);
var state_15191__$1 = state_15191;
var statearr_15227_16421 = state_15191__$1;
(statearr_15227_16421[(2)] = inst_15175);

(statearr_15227_16421[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (10))){
var inst_15143 = (state_15191[(8)]);
var inst_15145 = (state_15191[(10)]);
var inst_15150 = cljs.core._nth(inst_15143,inst_15145);
var state_15191__$1 = state_15191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15191__$1,(13),out,inst_15150);
} else {
if((state_val_15192 === (18))){
var inst_15157 = (state_15191[(7)]);
var inst_15166 = cljs.core.first(inst_15157);
var state_15191__$1 = state_15191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15191__$1,(20),out,inst_15166);
} else {
if((state_val_15192 === (8))){
var inst_15145 = (state_15191[(10)]);
var inst_15144 = (state_15191[(11)]);
var inst_15147 = (inst_15145 < inst_15144);
var inst_15148 = inst_15147;
var state_15191__$1 = state_15191;
if(cljs.core.truth_(inst_15148)){
var statearr_15234_16422 = state_15191__$1;
(statearr_15234_16422[(1)] = (10));

} else {
var statearr_15235_16423 = state_15191__$1;
(statearr_15235_16423[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13306__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13306__auto____0 = (function (){
var statearr_15236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15236[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13306__auto__);

(statearr_15236[(1)] = (1));

return statearr_15236;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13306__auto____1 = (function (state_15191){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_15191);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e15237){var ex__13309__auto__ = e15237;
var statearr_15238_16424 = state_15191;
(statearr_15238_16424[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_15191[(4)]))){
var statearr_15241_16425 = state_15191;
(statearr_15241_16425[(1)] = cljs.core.first((state_15191[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16426 = state_15191;
state_15191 = G__16426;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13306__auto__ = function(state_15191){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13306__auto____1.call(this,state_15191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13306__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13306__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13306__auto__;
})()
})();
var state__13390__auto__ = (function (){var statearr_15246 = f__13389__auto__();
(statearr_15246[(6)] = c__13388__auto__);

return statearr_15246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13390__auto__);
}));

return c__13388__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15248 = arguments.length;
switch (G__15248) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__15256 = arguments.length;
switch (G__15256) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__15258 = arguments.length;
switch (G__15258) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13388__auto___16430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13389__auto__ = (function (){var switch__13305__auto__ = (function (state_15287){
var state_val_15288 = (state_15287[(1)]);
if((state_val_15288 === (7))){
var inst_15281 = (state_15287[(2)]);
var state_15287__$1 = state_15287;
var statearr_15289_16431 = state_15287__$1;
(statearr_15289_16431[(2)] = inst_15281);

(statearr_15289_16431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15288 === (1))){
var inst_15263 = null;
var state_15287__$1 = (function (){var statearr_15290 = state_15287;
(statearr_15290[(7)] = inst_15263);

return statearr_15290;
})();
var statearr_15291_16432 = state_15287__$1;
(statearr_15291_16432[(2)] = null);

(statearr_15291_16432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15288 === (4))){
var inst_15266 = (state_15287[(8)]);
var inst_15266__$1 = (state_15287[(2)]);
var inst_15267 = (inst_15266__$1 == null);
var inst_15268 = cljs.core.not(inst_15267);
var state_15287__$1 = (function (){var statearr_15292 = state_15287;
(statearr_15292[(8)] = inst_15266__$1);

return statearr_15292;
})();
if(inst_15268){
var statearr_15293_16433 = state_15287__$1;
(statearr_15293_16433[(1)] = (5));

} else {
var statearr_15294_16434 = state_15287__$1;
(statearr_15294_16434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15288 === (6))){
var state_15287__$1 = state_15287;
var statearr_15295_16435 = state_15287__$1;
(statearr_15295_16435[(2)] = null);

(statearr_15295_16435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15288 === (3))){
var inst_15283 = (state_15287[(2)]);
var inst_15284 = cljs.core.async.close_BANG_(out);
var state_15287__$1 = (function (){var statearr_15296 = state_15287;
(statearr_15296[(9)] = inst_15283);

return statearr_15296;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15287__$1,inst_15284);
} else {
if((state_val_15288 === (2))){
var state_15287__$1 = state_15287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15287__$1,(4),ch);
} else {
if((state_val_15288 === (11))){
var inst_15266 = (state_15287[(8)]);
var inst_15275 = (state_15287[(2)]);
var inst_15263 = inst_15266;
var state_15287__$1 = (function (){var statearr_15297 = state_15287;
(statearr_15297[(10)] = inst_15275);

(statearr_15297[(7)] = inst_15263);

return statearr_15297;
})();
var statearr_15298_16436 = state_15287__$1;
(statearr_15298_16436[(2)] = null);

(statearr_15298_16436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15288 === (9))){
var inst_15266 = (state_15287[(8)]);
var state_15287__$1 = state_15287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15287__$1,(11),out,inst_15266);
} else {
if((state_val_15288 === (5))){
var inst_15266 = (state_15287[(8)]);
var inst_15263 = (state_15287[(7)]);
var inst_15270 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15266,inst_15263);
var state_15287__$1 = state_15287;
if(inst_15270){
var statearr_15300_16444 = state_15287__$1;
(statearr_15300_16444[(1)] = (8));

} else {
var statearr_15301_16445 = state_15287__$1;
(statearr_15301_16445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15288 === (10))){
var inst_15278 = (state_15287[(2)]);
var state_15287__$1 = state_15287;
var statearr_15302_16446 = state_15287__$1;
(statearr_15302_16446[(2)] = inst_15278);

(statearr_15302_16446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15288 === (8))){
var inst_15263 = (state_15287[(7)]);
var tmp15299 = inst_15263;
var inst_15263__$1 = tmp15299;
var state_15287__$1 = (function (){var statearr_15303 = state_15287;
(statearr_15303[(7)] = inst_15263__$1);

return statearr_15303;
})();
var statearr_15304_16447 = state_15287__$1;
(statearr_15304_16447[(2)] = null);

(statearr_15304_16447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13306__auto__ = null;
var cljs$core$async$state_machine__13306__auto____0 = (function (){
var statearr_15305 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15305[(0)] = cljs$core$async$state_machine__13306__auto__);

(statearr_15305[(1)] = (1));

return statearr_15305;
});
var cljs$core$async$state_machine__13306__auto____1 = (function (state_15287){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_15287);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e15306){var ex__13309__auto__ = e15306;
var statearr_15307_16449 = state_15287;
(statearr_15307_16449[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_15287[(4)]))){
var statearr_15308_16450 = state_15287;
(statearr_15308_16450[(1)] = cljs.core.first((state_15287[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16451 = state_15287;
state_15287 = G__16451;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$state_machine__13306__auto__ = function(state_15287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13306__auto____1.call(this,state_15287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13306__auto____0;
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13306__auto____1;
return cljs$core$async$state_machine__13306__auto__;
})()
})();
var state__13390__auto__ = (function (){var statearr_15309 = f__13389__auto__();
(statearr_15309[(6)] = c__13388__auto___16430);

return statearr_15309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13390__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15311 = arguments.length;
switch (G__15311) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13388__auto___16454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13389__auto__ = (function (){var switch__13305__auto__ = (function (state_15350){
var state_val_15351 = (state_15350[(1)]);
if((state_val_15351 === (7))){
var inst_15346 = (state_15350[(2)]);
var state_15350__$1 = state_15350;
var statearr_15353_16459 = state_15350__$1;
(statearr_15353_16459[(2)] = inst_15346);

(statearr_15353_16459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (1))){
var inst_15313 = (new Array(n));
var inst_15314 = inst_15313;
var inst_15315 = (0);
var state_15350__$1 = (function (){var statearr_15354 = state_15350;
(statearr_15354[(7)] = inst_15315);

(statearr_15354[(8)] = inst_15314);

return statearr_15354;
})();
var statearr_15355_16465 = state_15350__$1;
(statearr_15355_16465[(2)] = null);

(statearr_15355_16465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (4))){
var inst_15318 = (state_15350[(9)]);
var inst_15318__$1 = (state_15350[(2)]);
var inst_15319 = (inst_15318__$1 == null);
var inst_15320 = cljs.core.not(inst_15319);
var state_15350__$1 = (function (){var statearr_15357 = state_15350;
(statearr_15357[(9)] = inst_15318__$1);

return statearr_15357;
})();
if(inst_15320){
var statearr_15358_16471 = state_15350__$1;
(statearr_15358_16471[(1)] = (5));

} else {
var statearr_15359_16472 = state_15350__$1;
(statearr_15359_16472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (15))){
var inst_15340 = (state_15350[(2)]);
var state_15350__$1 = state_15350;
var statearr_15360_16473 = state_15350__$1;
(statearr_15360_16473[(2)] = inst_15340);

(statearr_15360_16473[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (13))){
var state_15350__$1 = state_15350;
var statearr_15361_16474 = state_15350__$1;
(statearr_15361_16474[(2)] = null);

(statearr_15361_16474[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (6))){
var inst_15315 = (state_15350[(7)]);
var inst_15336 = (inst_15315 > (0));
var state_15350__$1 = state_15350;
if(cljs.core.truth_(inst_15336)){
var statearr_15362_16475 = state_15350__$1;
(statearr_15362_16475[(1)] = (12));

} else {
var statearr_15363_16476 = state_15350__$1;
(statearr_15363_16476[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (3))){
var inst_15348 = (state_15350[(2)]);
var state_15350__$1 = state_15350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15350__$1,inst_15348);
} else {
if((state_val_15351 === (12))){
var inst_15314 = (state_15350[(8)]);
var inst_15338 = cljs.core.vec(inst_15314);
var state_15350__$1 = state_15350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15350__$1,(15),out,inst_15338);
} else {
if((state_val_15351 === (2))){
var state_15350__$1 = state_15350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15350__$1,(4),ch);
} else {
if((state_val_15351 === (11))){
var inst_15330 = (state_15350[(2)]);
var inst_15331 = (new Array(n));
var inst_15314 = inst_15331;
var inst_15315 = (0);
var state_15350__$1 = (function (){var statearr_15370 = state_15350;
(statearr_15370[(10)] = inst_15330);

(statearr_15370[(7)] = inst_15315);

(statearr_15370[(8)] = inst_15314);

return statearr_15370;
})();
var statearr_15373_16478 = state_15350__$1;
(statearr_15373_16478[(2)] = null);

(statearr_15373_16478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (9))){
var inst_15314 = (state_15350[(8)]);
var inst_15328 = cljs.core.vec(inst_15314);
var state_15350__$1 = state_15350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15350__$1,(11),out,inst_15328);
} else {
if((state_val_15351 === (5))){
var inst_15315 = (state_15350[(7)]);
var inst_15323 = (state_15350[(11)]);
var inst_15318 = (state_15350[(9)]);
var inst_15314 = (state_15350[(8)]);
var inst_15322 = (inst_15314[inst_15315] = inst_15318);
var inst_15323__$1 = (inst_15315 + (1));
var inst_15324 = (inst_15323__$1 < n);
var state_15350__$1 = (function (){var statearr_15374 = state_15350;
(statearr_15374[(11)] = inst_15323__$1);

(statearr_15374[(12)] = inst_15322);

return statearr_15374;
})();
if(cljs.core.truth_(inst_15324)){
var statearr_15375_16480 = state_15350__$1;
(statearr_15375_16480[(1)] = (8));

} else {
var statearr_15376_16481 = state_15350__$1;
(statearr_15376_16481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (14))){
var inst_15343 = (state_15350[(2)]);
var inst_15344 = cljs.core.async.close_BANG_(out);
var state_15350__$1 = (function (){var statearr_15378 = state_15350;
(statearr_15378[(13)] = inst_15343);

return statearr_15378;
})();
var statearr_15379_16482 = state_15350__$1;
(statearr_15379_16482[(2)] = inst_15344);

(statearr_15379_16482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (10))){
var inst_15334 = (state_15350[(2)]);
var state_15350__$1 = state_15350;
var statearr_15380_16483 = state_15350__$1;
(statearr_15380_16483[(2)] = inst_15334);

(statearr_15380_16483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (8))){
var inst_15323 = (state_15350[(11)]);
var inst_15314 = (state_15350[(8)]);
var tmp15377 = inst_15314;
var inst_15314__$1 = tmp15377;
var inst_15315 = inst_15323;
var state_15350__$1 = (function (){var statearr_15381 = state_15350;
(statearr_15381[(7)] = inst_15315);

(statearr_15381[(8)] = inst_15314__$1);

return statearr_15381;
})();
var statearr_15382_16526 = state_15350__$1;
(statearr_15382_16526[(2)] = null);

(statearr_15382_16526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13306__auto__ = null;
var cljs$core$async$state_machine__13306__auto____0 = (function (){
var statearr_15383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15383[(0)] = cljs$core$async$state_machine__13306__auto__);

(statearr_15383[(1)] = (1));

return statearr_15383;
});
var cljs$core$async$state_machine__13306__auto____1 = (function (state_15350){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_15350);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e15384){var ex__13309__auto__ = e15384;
var statearr_15385_16527 = state_15350;
(statearr_15385_16527[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_15350[(4)]))){
var statearr_15386_16528 = state_15350;
(statearr_15386_16528[(1)] = cljs.core.first((state_15350[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16529 = state_15350;
state_15350 = G__16529;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$state_machine__13306__auto__ = function(state_15350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13306__auto____1.call(this,state_15350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13306__auto____0;
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13306__auto____1;
return cljs$core$async$state_machine__13306__auto__;
})()
})();
var state__13390__auto__ = (function (){var statearr_15391 = f__13389__auto__();
(statearr_15391[(6)] = c__13388__auto___16454);

return statearr_15391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13390__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15401 = arguments.length;
switch (G__15401) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13388__auto___16535 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13389__auto__ = (function (){var switch__13305__auto__ = (function (state_15446){
var state_val_15447 = (state_15446[(1)]);
if((state_val_15447 === (7))){
var inst_15442 = (state_15446[(2)]);
var state_15446__$1 = state_15446;
var statearr_15448_16536 = state_15446__$1;
(statearr_15448_16536[(2)] = inst_15442);

(statearr_15448_16536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15447 === (1))){
var inst_15402 = [];
var inst_15403 = inst_15402;
var inst_15404 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15446__$1 = (function (){var statearr_15449 = state_15446;
(statearr_15449[(7)] = inst_15403);

(statearr_15449[(8)] = inst_15404);

return statearr_15449;
})();
var statearr_15450_16537 = state_15446__$1;
(statearr_15450_16537[(2)] = null);

(statearr_15450_16537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15447 === (4))){
var inst_15407 = (state_15446[(9)]);
var inst_15407__$1 = (state_15446[(2)]);
var inst_15408 = (inst_15407__$1 == null);
var inst_15409 = cljs.core.not(inst_15408);
var state_15446__$1 = (function (){var statearr_15451 = state_15446;
(statearr_15451[(9)] = inst_15407__$1);

return statearr_15451;
})();
if(inst_15409){
var statearr_15457_16538 = state_15446__$1;
(statearr_15457_16538[(1)] = (5));

} else {
var statearr_15460_16539 = state_15446__$1;
(statearr_15460_16539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15447 === (15))){
var inst_15403 = (state_15446[(7)]);
var inst_15434 = cljs.core.vec(inst_15403);
var state_15446__$1 = state_15446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15446__$1,(18),out,inst_15434);
} else {
if((state_val_15447 === (13))){
var inst_15429 = (state_15446[(2)]);
var state_15446__$1 = state_15446;
var statearr_15462_16540 = state_15446__$1;
(statearr_15462_16540[(2)] = inst_15429);

(statearr_15462_16540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15447 === (6))){
var inst_15403 = (state_15446[(7)]);
var inst_15431 = inst_15403.length;
var inst_15432 = (inst_15431 > (0));
var state_15446__$1 = state_15446;
if(cljs.core.truth_(inst_15432)){
var statearr_15463_16541 = state_15446__$1;
(statearr_15463_16541[(1)] = (15));

} else {
var statearr_15464_16542 = state_15446__$1;
(statearr_15464_16542[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15447 === (17))){
var inst_15439 = (state_15446[(2)]);
var inst_15440 = cljs.core.async.close_BANG_(out);
var state_15446__$1 = (function (){var statearr_15465 = state_15446;
(statearr_15465[(10)] = inst_15439);

return statearr_15465;
})();
var statearr_15466_16543 = state_15446__$1;
(statearr_15466_16543[(2)] = inst_15440);

(statearr_15466_16543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15447 === (3))){
var inst_15444 = (state_15446[(2)]);
var state_15446__$1 = state_15446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15446__$1,inst_15444);
} else {
if((state_val_15447 === (12))){
var inst_15403 = (state_15446[(7)]);
var inst_15422 = cljs.core.vec(inst_15403);
var state_15446__$1 = state_15446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15446__$1,(14),out,inst_15422);
} else {
if((state_val_15447 === (2))){
var state_15446__$1 = state_15446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15446__$1,(4),ch);
} else {
if((state_val_15447 === (11))){
var inst_15407 = (state_15446[(9)]);
var inst_15403 = (state_15446[(7)]);
var inst_15411 = (state_15446[(11)]);
var inst_15419 = inst_15403.push(inst_15407);
var tmp15467 = inst_15403;
var inst_15403__$1 = tmp15467;
var inst_15404 = inst_15411;
var state_15446__$1 = (function (){var statearr_15468 = state_15446;
(statearr_15468[(7)] = inst_15403__$1);

(statearr_15468[(8)] = inst_15404);

(statearr_15468[(12)] = inst_15419);

return statearr_15468;
})();
var statearr_15470_16548 = state_15446__$1;
(statearr_15470_16548[(2)] = null);

(statearr_15470_16548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15447 === (9))){
var inst_15404 = (state_15446[(8)]);
var inst_15415 = cljs.core.keyword_identical_QMARK_(inst_15404,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_15446__$1 = state_15446;
var statearr_15471_16549 = state_15446__$1;
(statearr_15471_16549[(2)] = inst_15415);

(statearr_15471_16549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15447 === (5))){
var inst_15407 = (state_15446[(9)]);
var inst_15412 = (state_15446[(13)]);
var inst_15404 = (state_15446[(8)]);
var inst_15411 = (state_15446[(11)]);
var inst_15411__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15407) : f.call(null,inst_15407));
var inst_15412__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15411__$1,inst_15404);
var state_15446__$1 = (function (){var statearr_15474 = state_15446;
(statearr_15474[(13)] = inst_15412__$1);

(statearr_15474[(11)] = inst_15411__$1);

return statearr_15474;
})();
if(inst_15412__$1){
var statearr_15475_16550 = state_15446__$1;
(statearr_15475_16550[(1)] = (8));

} else {
var statearr_15476_16551 = state_15446__$1;
(statearr_15476_16551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15447 === (14))){
var inst_15407 = (state_15446[(9)]);
var inst_15411 = (state_15446[(11)]);
var inst_15424 = (state_15446[(2)]);
var inst_15425 = [];
var inst_15426 = inst_15425.push(inst_15407);
var inst_15403 = inst_15425;
var inst_15404 = inst_15411;
var state_15446__$1 = (function (){var statearr_15477 = state_15446;
(statearr_15477[(7)] = inst_15403);

(statearr_15477[(8)] = inst_15404);

(statearr_15477[(14)] = inst_15426);

(statearr_15477[(15)] = inst_15424);

return statearr_15477;
})();
var statearr_15478_16552 = state_15446__$1;
(statearr_15478_16552[(2)] = null);

(statearr_15478_16552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15447 === (16))){
var state_15446__$1 = state_15446;
var statearr_15479_16553 = state_15446__$1;
(statearr_15479_16553[(2)] = null);

(statearr_15479_16553[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15447 === (10))){
var inst_15417 = (state_15446[(2)]);
var state_15446__$1 = state_15446;
if(cljs.core.truth_(inst_15417)){
var statearr_15480_16554 = state_15446__$1;
(statearr_15480_16554[(1)] = (11));

} else {
var statearr_15481_16555 = state_15446__$1;
(statearr_15481_16555[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15447 === (18))){
var inst_15436 = (state_15446[(2)]);
var state_15446__$1 = state_15446;
var statearr_15482_16556 = state_15446__$1;
(statearr_15482_16556[(2)] = inst_15436);

(statearr_15482_16556[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15447 === (8))){
var inst_15412 = (state_15446[(13)]);
var state_15446__$1 = state_15446;
var statearr_15483_16557 = state_15446__$1;
(statearr_15483_16557[(2)] = inst_15412);

(statearr_15483_16557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13306__auto__ = null;
var cljs$core$async$state_machine__13306__auto____0 = (function (){
var statearr_15485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15485[(0)] = cljs$core$async$state_machine__13306__auto__);

(statearr_15485[(1)] = (1));

return statearr_15485;
});
var cljs$core$async$state_machine__13306__auto____1 = (function (state_15446){
while(true){
var ret_value__13307__auto__ = (function (){try{while(true){
var result__13308__auto__ = switch__13305__auto__(state_15446);
if(cljs.core.keyword_identical_QMARK_(result__13308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13308__auto__;
}
break;
}
}catch (e15488){var ex__13309__auto__ = e15488;
var statearr_15489_16561 = state_15446;
(statearr_15489_16561[(2)] = ex__13309__auto__);


if(cljs.core.seq((state_15446[(4)]))){
var statearr_15491_16562 = state_15446;
(statearr_15491_16562[(1)] = cljs.core.first((state_15446[(4)])));

} else {
throw ex__13309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16566 = state_15446;
state_15446 = G__16566;
continue;
} else {
return ret_value__13307__auto__;
}
break;
}
});
cljs$core$async$state_machine__13306__auto__ = function(state_15446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13306__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13306__auto____1.call(this,state_15446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13306__auto____0;
cljs$core$async$state_machine__13306__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13306__auto____1;
return cljs$core$async$state_machine__13306__auto__;
})()
})();
var state__13390__auto__ = (function (){var statearr_15492 = f__13389__auto__();
(statearr_15492[(6)] = c__13388__auto___16535);

return statearr_15492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13390__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
