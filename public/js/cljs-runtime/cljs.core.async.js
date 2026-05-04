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
cljs.core.async.t_cljs$core$async15315 = (function (f,blockable,meta15316){
this.f = f;
this.blockable = blockable;
this.meta15316 = meta15316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15317,meta15316__$1){
var self__ = this;
var _15317__$1 = this;
return (new cljs.core.async.t_cljs$core$async15315(self__.f,self__.blockable,meta15316__$1));
}));

(cljs.core.async.t_cljs$core$async15315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15317){
var self__ = this;
var _15317__$1 = this;
return self__.meta15316;
}));

(cljs.core.async.t_cljs$core$async15315.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15315.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15316","meta15316",832340698,null)], null);
}));

(cljs.core.async.t_cljs$core$async15315.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15315");

(cljs.core.async.t_cljs$core$async15315.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15315");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15315.
 */
cljs.core.async.__GT_t_cljs$core$async15315 = (function cljs$core$async$__GT_t_cljs$core$async15315(f,blockable,meta15316){
return (new cljs.core.async.t_cljs$core$async15315(f,blockable,meta15316));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15308 = arguments.length;
switch (G__15308) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async15315(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15390 = arguments.length;
switch (G__15390) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
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
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15418 = arguments.length;
switch (G__15418) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__15431 = arguments.length;
switch (G__15431) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19430 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19430) : fn1.call(null,val_19430));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19430) : fn1.call(null,val_19430));
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
var G__15468 = arguments.length;
switch (G__15468) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
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
var n__5741__auto___19434 = n;
var x_19435 = (0);
while(true){
if((x_19435 < n__5741__auto___19434)){
(a[x_19435] = x_19435);

var G__19436 = (x_19435 + (1));
x_19435 = G__19436;
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
cljs.core.async.t_cljs$core$async15510 = (function (flag,meta15511){
this.flag = flag;
this.meta15511 = meta15511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15512,meta15511__$1){
var self__ = this;
var _15512__$1 = this;
return (new cljs.core.async.t_cljs$core$async15510(self__.flag,meta15511__$1));
}));

(cljs.core.async.t_cljs$core$async15510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15512){
var self__ = this;
var _15512__$1 = this;
return self__.meta15511;
}));

(cljs.core.async.t_cljs$core$async15510.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15510.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15510.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15510.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15511","meta15511",1328045060,null)], null);
}));

(cljs.core.async.t_cljs$core$async15510.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15510.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15510");

(cljs.core.async.t_cljs$core$async15510.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15510");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15510.
 */
cljs.core.async.__GT_t_cljs$core$async15510 = (function cljs$core$async$__GT_t_cljs$core$async15510(flag,meta15511){
return (new cljs.core.async.t_cljs$core$async15510(flag,meta15511));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15510(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15541 = (function (flag,cb,meta15542){
this.flag = flag;
this.cb = cb;
this.meta15542 = meta15542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15543,meta15542__$1){
var self__ = this;
var _15543__$1 = this;
return (new cljs.core.async.t_cljs$core$async15541(self__.flag,self__.cb,meta15542__$1));
}));

(cljs.core.async.t_cljs$core$async15541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15543){
var self__ = this;
var _15543__$1 = this;
return self__.meta15542;
}));

(cljs.core.async.t_cljs$core$async15541.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15541.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15542","meta15542",871939970,null)], null);
}));

(cljs.core.async.t_cljs$core$async15541.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15541");

(cljs.core.async.t_cljs$core$async15541.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15541");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15541.
 */
cljs.core.async.__GT_t_cljs$core$async15541 = (function cljs$core$async$__GT_t_cljs$core$async15541(flag,cb,meta15542){
return (new cljs.core.async.t_cljs$core$async15541(flag,cb,meta15542));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15541(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_19438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_19438)){
if((!(((port_19438.cljs$core$IFn$_invoke$arity$1 ? port_19438.cljs$core$IFn$_invoke$arity$1((1)) : port_19438.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__19443 = (i + (1));
i = G__19443;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15564_SHARP_){
var G__15586 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15564_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15586) : fret.call(null,G__15586));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15566_SHARP_){
var G__15591 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15566_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15591) : fret.call(null,G__15591));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5142__auto__ = wport;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19450 = (i + (1));
i = G__19450;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5142__auto__ = ret;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5140__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5140__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
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
var args__5882__auto__ = [];
var len__5876__auto___19451 = arguments.length;
var i__5877__auto___19452 = (0);
while(true){
if((i__5877__auto___19452 < len__5876__auto___19451)){
args__5882__auto__.push((arguments[i__5877__auto___19452]));

var G__19453 = (i__5877__auto___19452 + (1));
i__5877__auto___19452 = G__19453;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15610){
var map__15611 = p__15610;
var map__15611__$1 = cljs.core.__destructure_map(map__15611);
var opts = map__15611__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15601){
var G__15602 = cljs.core.first(seq15601);
var seq15601__$1 = cljs.core.next(seq15601);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15602,seq15601__$1);
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
var G__15639 = arguments.length;
switch (G__15639) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15182__auto___19459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15183__auto__ = (function (){var switch__13867__auto__ = (function (state_15790){
var state_val_15793 = (state_15790[(1)]);
if((state_val_15793 === (7))){
var inst_15776 = (state_15790[(2)]);
var state_15790__$1 = state_15790;
var statearr_15826_19460 = state_15790__$1;
(statearr_15826_19460[(2)] = inst_15776);

(statearr_15826_19460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15793 === (1))){
var state_15790__$1 = state_15790;
var statearr_15837_19465 = state_15790__$1;
(statearr_15837_19465[(2)] = null);

(statearr_15837_19465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15793 === (4))){
var inst_15712 = (state_15790[(7)]);
var inst_15712__$1 = (state_15790[(2)]);
var inst_15756 = (inst_15712__$1 == null);
var state_15790__$1 = (function (){var statearr_15878 = state_15790;
(statearr_15878[(7)] = inst_15712__$1);

return statearr_15878;
})();
if(cljs.core.truth_(inst_15756)){
var statearr_15889_19483 = state_15790__$1;
(statearr_15889_19483[(1)] = (5));

} else {
var statearr_15892_19484 = state_15790__$1;
(statearr_15892_19484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15793 === (13))){
var state_15790__$1 = state_15790;
var statearr_15916_19485 = state_15790__$1;
(statearr_15916_19485[(2)] = null);

(statearr_15916_19485[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15793 === (6))){
var inst_15712 = (state_15790[(7)]);
var state_15790__$1 = state_15790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15790__$1,(11),to,inst_15712);
} else {
if((state_val_15793 === (3))){
var inst_15779 = (state_15790[(2)]);
var state_15790__$1 = state_15790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15790__$1,inst_15779);
} else {
if((state_val_15793 === (12))){
var state_15790__$1 = state_15790;
var statearr_15938_19493 = state_15790__$1;
(statearr_15938_19493[(2)] = null);

(statearr_15938_19493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15793 === (2))){
var state_15790__$1 = state_15790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15790__$1,(4),from);
} else {
if((state_val_15793 === (11))){
var inst_15767 = (state_15790[(2)]);
var state_15790__$1 = state_15790;
if(cljs.core.truth_(inst_15767)){
var statearr_15941_19508 = state_15790__$1;
(statearr_15941_19508[(1)] = (12));

} else {
var statearr_15942_19509 = state_15790__$1;
(statearr_15942_19509[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15793 === (9))){
var state_15790__$1 = state_15790;
var statearr_15944_19510 = state_15790__$1;
(statearr_15944_19510[(2)] = null);

(statearr_15944_19510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15793 === (5))){
var state_15790__$1 = state_15790;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15945_19521 = state_15790__$1;
(statearr_15945_19521[(1)] = (8));

} else {
var statearr_15946_19527 = state_15790__$1;
(statearr_15946_19527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15793 === (14))){
var inst_15774 = (state_15790[(2)]);
var state_15790__$1 = state_15790;
var statearr_15947_19537 = state_15790__$1;
(statearr_15947_19537[(2)] = inst_15774);

(statearr_15947_19537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15793 === (10))){
var inst_15764 = (state_15790[(2)]);
var state_15790__$1 = state_15790;
var statearr_15954_19538 = state_15790__$1;
(statearr_15954_19538[(2)] = inst_15764);

(statearr_15954_19538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15793 === (8))){
var inst_15759 = cljs.core.async.close_BANG_(to);
var state_15790__$1 = state_15790;
var statearr_15955_19546 = state_15790__$1;
(statearr_15955_19546[(2)] = inst_15759);

(statearr_15955_19546[(1)] = (10));


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
var cljs$core$async$state_machine__13868__auto__ = null;
var cljs$core$async$state_machine__13868__auto____0 = (function (){
var statearr_15961 = [null,null,null,null,null,null,null,null];
(statearr_15961[(0)] = cljs$core$async$state_machine__13868__auto__);

(statearr_15961[(1)] = (1));

return statearr_15961;
});
var cljs$core$async$state_machine__13868__auto____1 = (function (state_15790){
while(true){
var ret_value__13870__auto__ = (function (){try{while(true){
var result__13871__auto__ = switch__13867__auto__(state_15790);
if(cljs.core.keyword_identical_QMARK_(result__13871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13871__auto__;
}
break;
}
}catch (e15964){var ex__13872__auto__ = e15964;
var statearr_15967_19564 = state_15790;
(statearr_15967_19564[(2)] = ex__13872__auto__);


if(cljs.core.seq((state_15790[(4)]))){
var statearr_15971_19569 = state_15790;
(statearr_15971_19569[(1)] = cljs.core.first((state_15790[(4)])));

} else {
throw ex__13872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19577 = state_15790;
state_15790 = G__19577;
continue;
} else {
return ret_value__13870__auto__;
}
break;
}
});
cljs$core$async$state_machine__13868__auto__ = function(state_15790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13868__auto____1.call(this,state_15790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13868__auto____0;
cljs$core$async$state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13868__auto____1;
return cljs$core$async$state_machine__13868__auto__;
})()
})();
var state__15184__auto__ = (function (){var statearr_15991 = f__15183__auto__();
(statearr_15991[(6)] = c__15182__auto___19459);

return statearr_15991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15184__auto__);
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
var process__$1 = (function (p__16027){
var vec__16028 = p__16027;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16028,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16028,(1),null);
var job = vec__16028;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15182__auto___19582 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15183__auto__ = (function (){var switch__13867__auto__ = (function (state_16052){
var state_val_16054 = (state_16052[(1)]);
if((state_val_16054 === (1))){
var state_16052__$1 = state_16052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16052__$1,(2),res,v);
} else {
if((state_val_16054 === (2))){
var inst_16048 = (state_16052[(2)]);
var inst_16049 = cljs.core.async.close_BANG_(res);
var state_16052__$1 = (function (){var statearr_16056 = state_16052;
(statearr_16056[(7)] = inst_16048);

return statearr_16056;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16052__$1,inst_16049);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____0 = (function (){
var statearr_16069 = [null,null,null,null,null,null,null,null];
(statearr_16069[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__);

(statearr_16069[(1)] = (1));

return statearr_16069;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____1 = (function (state_16052){
while(true){
var ret_value__13870__auto__ = (function (){try{while(true){
var result__13871__auto__ = switch__13867__auto__(state_16052);
if(cljs.core.keyword_identical_QMARK_(result__13871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13871__auto__;
}
break;
}
}catch (e16076){var ex__13872__auto__ = e16076;
var statearr_16080_19588 = state_16052;
(statearr_16080_19588[(2)] = ex__13872__auto__);


if(cljs.core.seq((state_16052[(4)]))){
var statearr_16081_19589 = state_16052;
(statearr_16081_19589[(1)] = cljs.core.first((state_16052[(4)])));

} else {
throw ex__13872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19592 = state_16052;
state_16052 = G__19592;
continue;
} else {
return ret_value__13870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__ = function(state_16052){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____1.call(this,state_16052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__;
})()
})();
var state__15184__auto__ = (function (){var statearr_16087 = f__15183__auto__();
(statearr_16087[(6)] = c__15182__auto___19582);

return statearr_16087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15184__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__16088){
var vec__16089 = p__16088;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16089,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16089,(1),null);
var job = vec__16089;
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
var n__5741__auto___19595 = n;
var __19596 = (0);
while(true){
if((__19596 < n__5741__auto___19595)){
var G__16097_19598 = type;
var G__16097_19599__$1 = (((G__16097_19598 instanceof cljs.core.Keyword))?G__16097_19598.fqn:null);
switch (G__16097_19599__$1) {
case "compute":
var c__15182__auto___19601 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19596,c__15182__auto___19601,G__16097_19598,G__16097_19599__$1,n__5741__auto___19595,jobs,results,process__$1,async){
return (function (){
var f__15183__auto__ = (function (){var switch__13867__auto__ = ((function (__19596,c__15182__auto___19601,G__16097_19598,G__16097_19599__$1,n__5741__auto___19595,jobs,results,process__$1,async){
return (function (state_16130){
var state_val_16131 = (state_16130[(1)]);
if((state_val_16131 === (1))){
var state_16130__$1 = state_16130;
var statearr_16143_19606 = state_16130__$1;
(statearr_16143_19606[(2)] = null);

(statearr_16143_19606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16131 === (2))){
var state_16130__$1 = state_16130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16130__$1,(4),jobs);
} else {
if((state_val_16131 === (3))){
var inst_16123 = (state_16130[(2)]);
var state_16130__$1 = state_16130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16130__$1,inst_16123);
} else {
if((state_val_16131 === (4))){
var inst_16109 = (state_16130[(2)]);
var inst_16111 = process__$1(inst_16109);
var state_16130__$1 = state_16130;
if(cljs.core.truth_(inst_16111)){
var statearr_16150_19612 = state_16130__$1;
(statearr_16150_19612[(1)] = (5));

} else {
var statearr_16151_19614 = state_16130__$1;
(statearr_16151_19614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16131 === (5))){
var state_16130__$1 = state_16130;
var statearr_16154_19616 = state_16130__$1;
(statearr_16154_19616[(2)] = null);

(statearr_16154_19616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16131 === (6))){
var state_16130__$1 = state_16130;
var statearr_16157_19617 = state_16130__$1;
(statearr_16157_19617[(2)] = null);

(statearr_16157_19617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16131 === (7))){
var inst_16119 = (state_16130[(2)]);
var state_16130__$1 = state_16130;
var statearr_16161_19618 = state_16130__$1;
(statearr_16161_19618[(2)] = inst_16119);

(statearr_16161_19618[(1)] = (3));


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
});})(__19596,c__15182__auto___19601,G__16097_19598,G__16097_19599__$1,n__5741__auto___19595,jobs,results,process__$1,async))
;
return ((function (__19596,switch__13867__auto__,c__15182__auto___19601,G__16097_19598,G__16097_19599__$1,n__5741__auto___19595,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____0 = (function (){
var statearr_16171 = [null,null,null,null,null,null,null];
(statearr_16171[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__);

(statearr_16171[(1)] = (1));

return statearr_16171;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____1 = (function (state_16130){
while(true){
var ret_value__13870__auto__ = (function (){try{while(true){
var result__13871__auto__ = switch__13867__auto__(state_16130);
if(cljs.core.keyword_identical_QMARK_(result__13871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13871__auto__;
}
break;
}
}catch (e16177){var ex__13872__auto__ = e16177;
var statearr_16178_19626 = state_16130;
(statearr_16178_19626[(2)] = ex__13872__auto__);


if(cljs.core.seq((state_16130[(4)]))){
var statearr_16181_19628 = state_16130;
(statearr_16181_19628[(1)] = cljs.core.first((state_16130[(4)])));

} else {
throw ex__13872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19633 = state_16130;
state_16130 = G__19633;
continue;
} else {
return ret_value__13870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__ = function(state_16130){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____1.call(this,state_16130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__;
})()
;})(__19596,switch__13867__auto__,c__15182__auto___19601,G__16097_19598,G__16097_19599__$1,n__5741__auto___19595,jobs,results,process__$1,async))
})();
var state__15184__auto__ = (function (){var statearr_16186 = f__15183__auto__();
(statearr_16186[(6)] = c__15182__auto___19601);

return statearr_16186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15184__auto__);
});})(__19596,c__15182__auto___19601,G__16097_19598,G__16097_19599__$1,n__5741__auto___19595,jobs,results,process__$1,async))
);


break;
case "async":
var c__15182__auto___19638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19596,c__15182__auto___19638,G__16097_19598,G__16097_19599__$1,n__5741__auto___19595,jobs,results,process__$1,async){
return (function (){
var f__15183__auto__ = (function (){var switch__13867__auto__ = ((function (__19596,c__15182__auto___19638,G__16097_19598,G__16097_19599__$1,n__5741__auto___19595,jobs,results,process__$1,async){
return (function (state_16223){
var state_val_16224 = (state_16223[(1)]);
if((state_val_16224 === (1))){
var state_16223__$1 = state_16223;
var statearr_16233_19639 = state_16223__$1;
(statearr_16233_19639[(2)] = null);

(statearr_16233_19639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16224 === (2))){
var state_16223__$1 = state_16223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16223__$1,(4),jobs);
} else {
if((state_val_16224 === (3))){
var inst_16221 = (state_16223[(2)]);
var state_16223__$1 = state_16223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16223__$1,inst_16221);
} else {
if((state_val_16224 === (4))){
var inst_16206 = (state_16223[(2)]);
var inst_16211 = async(inst_16206);
var state_16223__$1 = state_16223;
if(cljs.core.truth_(inst_16211)){
var statearr_16260_19642 = state_16223__$1;
(statearr_16260_19642[(1)] = (5));

} else {
var statearr_16265_19643 = state_16223__$1;
(statearr_16265_19643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16224 === (5))){
var state_16223__$1 = state_16223;
var statearr_16266_19645 = state_16223__$1;
(statearr_16266_19645[(2)] = null);

(statearr_16266_19645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16224 === (6))){
var state_16223__$1 = state_16223;
var statearr_16282_19647 = state_16223__$1;
(statearr_16282_19647[(2)] = null);

(statearr_16282_19647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16224 === (7))){
var inst_16219 = (state_16223[(2)]);
var state_16223__$1 = state_16223;
var statearr_16312_19650 = state_16223__$1;
(statearr_16312_19650[(2)] = inst_16219);

(statearr_16312_19650[(1)] = (3));


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
});})(__19596,c__15182__auto___19638,G__16097_19598,G__16097_19599__$1,n__5741__auto___19595,jobs,results,process__$1,async))
;
return ((function (__19596,switch__13867__auto__,c__15182__auto___19638,G__16097_19598,G__16097_19599__$1,n__5741__auto___19595,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____0 = (function (){
var statearr_16339 = [null,null,null,null,null,null,null];
(statearr_16339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__);

(statearr_16339[(1)] = (1));

return statearr_16339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____1 = (function (state_16223){
while(true){
var ret_value__13870__auto__ = (function (){try{while(true){
var result__13871__auto__ = switch__13867__auto__(state_16223);
if(cljs.core.keyword_identical_QMARK_(result__13871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13871__auto__;
}
break;
}
}catch (e16353){var ex__13872__auto__ = e16353;
var statearr_16362_19657 = state_16223;
(statearr_16362_19657[(2)] = ex__13872__auto__);


if(cljs.core.seq((state_16223[(4)]))){
var statearr_16373_19658 = state_16223;
(statearr_16373_19658[(1)] = cljs.core.first((state_16223[(4)])));

} else {
throw ex__13872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19659 = state_16223;
state_16223 = G__19659;
continue;
} else {
return ret_value__13870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__ = function(state_16223){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____1.call(this,state_16223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__;
})()
;})(__19596,switch__13867__auto__,c__15182__auto___19638,G__16097_19598,G__16097_19599__$1,n__5741__auto___19595,jobs,results,process__$1,async))
})();
var state__15184__auto__ = (function (){var statearr_16376 = f__15183__auto__();
(statearr_16376[(6)] = c__15182__auto___19638);

return statearr_16376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15184__auto__);
});})(__19596,c__15182__auto___19638,G__16097_19598,G__16097_19599__$1,n__5741__auto___19595,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16097_19599__$1))));

}

var G__19664 = (__19596 + (1));
__19596 = G__19664;
continue;
} else {
}
break;
}

var c__15182__auto___19665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15183__auto__ = (function (){var switch__13867__auto__ = (function (state_16418){
var state_val_16419 = (state_16418[(1)]);
if((state_val_16419 === (7))){
var inst_16405 = (state_16418[(2)]);
var state_16418__$1 = state_16418;
var statearr_16426_19666 = state_16418__$1;
(statearr_16426_19666[(2)] = inst_16405);

(statearr_16426_19666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16419 === (1))){
var state_16418__$1 = state_16418;
var statearr_16428_19667 = state_16418__$1;
(statearr_16428_19667[(2)] = null);

(statearr_16428_19667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16419 === (4))){
var inst_16389 = (state_16418[(7)]);
var inst_16389__$1 = (state_16418[(2)]);
var inst_16390 = (inst_16389__$1 == null);
var state_16418__$1 = (function (){var statearr_16430 = state_16418;
(statearr_16430[(7)] = inst_16389__$1);

return statearr_16430;
})();
if(cljs.core.truth_(inst_16390)){
var statearr_16433_19669 = state_16418__$1;
(statearr_16433_19669[(1)] = (5));

} else {
var statearr_16435_19670 = state_16418__$1;
(statearr_16435_19670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16419 === (6))){
var inst_16389 = (state_16418[(7)]);
var inst_16394 = (state_16418[(8)]);
var inst_16394__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16396 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16397 = [inst_16389,inst_16394__$1];
var inst_16398 = (new cljs.core.PersistentVector(null,2,(5),inst_16396,inst_16397,null));
var state_16418__$1 = (function (){var statearr_16437 = state_16418;
(statearr_16437[(8)] = inst_16394__$1);

return statearr_16437;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16418__$1,(8),jobs,inst_16398);
} else {
if((state_val_16419 === (3))){
var inst_16407 = (state_16418[(2)]);
var state_16418__$1 = state_16418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16418__$1,inst_16407);
} else {
if((state_val_16419 === (2))){
var state_16418__$1 = state_16418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16418__$1,(4),from);
} else {
if((state_val_16419 === (9))){
var inst_16402 = (state_16418[(2)]);
var state_16418__$1 = (function (){var statearr_16447 = state_16418;
(statearr_16447[(9)] = inst_16402);

return statearr_16447;
})();
var statearr_16449_19677 = state_16418__$1;
(statearr_16449_19677[(2)] = null);

(statearr_16449_19677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16419 === (5))){
var inst_16392 = cljs.core.async.close_BANG_(jobs);
var state_16418__$1 = state_16418;
var statearr_16454_19679 = state_16418__$1;
(statearr_16454_19679[(2)] = inst_16392);

(statearr_16454_19679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16419 === (8))){
var inst_16394 = (state_16418[(8)]);
var inst_16400 = (state_16418[(2)]);
var state_16418__$1 = (function (){var statearr_16455 = state_16418;
(statearr_16455[(10)] = inst_16400);

return statearr_16455;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16418__$1,(9),results,inst_16394);
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
var cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____0 = (function (){
var statearr_16459 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16459[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__);

(statearr_16459[(1)] = (1));

return statearr_16459;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____1 = (function (state_16418){
while(true){
var ret_value__13870__auto__ = (function (){try{while(true){
var result__13871__auto__ = switch__13867__auto__(state_16418);
if(cljs.core.keyword_identical_QMARK_(result__13871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13871__auto__;
}
break;
}
}catch (e16461){var ex__13872__auto__ = e16461;
var statearr_16462_19680 = state_16418;
(statearr_16462_19680[(2)] = ex__13872__auto__);


if(cljs.core.seq((state_16418[(4)]))){
var statearr_16463_19681 = state_16418;
(statearr_16463_19681[(1)] = cljs.core.first((state_16418[(4)])));

} else {
throw ex__13872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19682 = state_16418;
state_16418 = G__19682;
continue;
} else {
return ret_value__13870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__ = function(state_16418){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____1.call(this,state_16418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__;
})()
})();
var state__15184__auto__ = (function (){var statearr_16465 = f__15183__auto__();
(statearr_16465[(6)] = c__15182__auto___19665);

return statearr_16465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15184__auto__);
}));


var c__15182__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15183__auto__ = (function (){var switch__13867__auto__ = (function (state_16521){
var state_val_16522 = (state_16521[(1)]);
if((state_val_16522 === (7))){
var inst_16517 = (state_16521[(2)]);
var state_16521__$1 = state_16521;
var statearr_16527_19686 = state_16521__$1;
(statearr_16527_19686[(2)] = inst_16517);

(statearr_16527_19686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (20))){
var state_16521__$1 = state_16521;
var statearr_16528_19688 = state_16521__$1;
(statearr_16528_19688[(2)] = null);

(statearr_16528_19688[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (1))){
var state_16521__$1 = state_16521;
var statearr_16533_19690 = state_16521__$1;
(statearr_16533_19690[(2)] = null);

(statearr_16533_19690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (4))){
var inst_16473 = (state_16521[(7)]);
var inst_16473__$1 = (state_16521[(2)]);
var inst_16478 = (inst_16473__$1 == null);
var state_16521__$1 = (function (){var statearr_16538 = state_16521;
(statearr_16538[(7)] = inst_16473__$1);

return statearr_16538;
})();
if(cljs.core.truth_(inst_16478)){
var statearr_16541_19692 = state_16521__$1;
(statearr_16541_19692[(1)] = (5));

} else {
var statearr_16542_19693 = state_16521__$1;
(statearr_16542_19693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (15))){
var inst_16499 = (state_16521[(8)]);
var state_16521__$1 = state_16521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16521__$1,(18),to,inst_16499);
} else {
if((state_val_16522 === (21))){
var inst_16512 = (state_16521[(2)]);
var state_16521__$1 = state_16521;
var statearr_16550_19694 = state_16521__$1;
(statearr_16550_19694[(2)] = inst_16512);

(statearr_16550_19694[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (13))){
var inst_16514 = (state_16521[(2)]);
var state_16521__$1 = (function (){var statearr_16551 = state_16521;
(statearr_16551[(9)] = inst_16514);

return statearr_16551;
})();
var statearr_16554_19697 = state_16521__$1;
(statearr_16554_19697[(2)] = null);

(statearr_16554_19697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (6))){
var inst_16473 = (state_16521[(7)]);
var state_16521__$1 = state_16521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16521__$1,(11),inst_16473);
} else {
if((state_val_16522 === (17))){
var inst_16507 = (state_16521[(2)]);
var state_16521__$1 = state_16521;
if(cljs.core.truth_(inst_16507)){
var statearr_16565_19704 = state_16521__$1;
(statearr_16565_19704[(1)] = (19));

} else {
var statearr_16566_19705 = state_16521__$1;
(statearr_16566_19705[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (3))){
var inst_16519 = (state_16521[(2)]);
var state_16521__$1 = state_16521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16521__$1,inst_16519);
} else {
if((state_val_16522 === (12))){
var inst_16496 = (state_16521[(10)]);
var state_16521__$1 = state_16521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16521__$1,(14),inst_16496);
} else {
if((state_val_16522 === (2))){
var state_16521__$1 = state_16521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16521__$1,(4),results);
} else {
if((state_val_16522 === (19))){
var state_16521__$1 = state_16521;
var statearr_16571_19712 = state_16521__$1;
(statearr_16571_19712[(2)] = null);

(statearr_16571_19712[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (11))){
var inst_16496 = (state_16521[(2)]);
var state_16521__$1 = (function (){var statearr_16572 = state_16521;
(statearr_16572[(10)] = inst_16496);

return statearr_16572;
})();
var statearr_16573_19714 = state_16521__$1;
(statearr_16573_19714[(2)] = null);

(statearr_16573_19714[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (9))){
var state_16521__$1 = state_16521;
var statearr_16577_19715 = state_16521__$1;
(statearr_16577_19715[(2)] = null);

(statearr_16577_19715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (5))){
var state_16521__$1 = state_16521;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16583_19716 = state_16521__$1;
(statearr_16583_19716[(1)] = (8));

} else {
var statearr_16585_19717 = state_16521__$1;
(statearr_16585_19717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (14))){
var inst_16499 = (state_16521[(8)]);
var inst_16501 = (state_16521[(11)]);
var inst_16499__$1 = (state_16521[(2)]);
var inst_16500 = (inst_16499__$1 == null);
var inst_16501__$1 = cljs.core.not(inst_16500);
var state_16521__$1 = (function (){var statearr_16588 = state_16521;
(statearr_16588[(8)] = inst_16499__$1);

(statearr_16588[(11)] = inst_16501__$1);

return statearr_16588;
})();
if(inst_16501__$1){
var statearr_16589_19733 = state_16521__$1;
(statearr_16589_19733[(1)] = (15));

} else {
var statearr_16590_19734 = state_16521__$1;
(statearr_16590_19734[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (16))){
var inst_16501 = (state_16521[(11)]);
var state_16521__$1 = state_16521;
var statearr_16596_19739 = state_16521__$1;
(statearr_16596_19739[(2)] = inst_16501);

(statearr_16596_19739[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (10))){
var inst_16492 = (state_16521[(2)]);
var state_16521__$1 = state_16521;
var statearr_16600_19745 = state_16521__$1;
(statearr_16600_19745[(2)] = inst_16492);

(statearr_16600_19745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (18))){
var inst_16504 = (state_16521[(2)]);
var state_16521__$1 = state_16521;
var statearr_16601_19746 = state_16521__$1;
(statearr_16601_19746[(2)] = inst_16504);

(statearr_16601_19746[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (8))){
var inst_16481 = cljs.core.async.close_BANG_(to);
var state_16521__$1 = state_16521;
var statearr_16604_19748 = state_16521__$1;
(statearr_16604_19748[(2)] = inst_16481);

(statearr_16604_19748[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____0 = (function (){
var statearr_16615 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16615[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__);

(statearr_16615[(1)] = (1));

return statearr_16615;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____1 = (function (state_16521){
while(true){
var ret_value__13870__auto__ = (function (){try{while(true){
var result__13871__auto__ = switch__13867__auto__(state_16521);
if(cljs.core.keyword_identical_QMARK_(result__13871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13871__auto__;
}
break;
}
}catch (e16624){var ex__13872__auto__ = e16624;
var statearr_16625_19755 = state_16521;
(statearr_16625_19755[(2)] = ex__13872__auto__);


if(cljs.core.seq((state_16521[(4)]))){
var statearr_16628_19756 = state_16521;
(statearr_16628_19756[(1)] = cljs.core.first((state_16521[(4)])));

} else {
throw ex__13872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19757 = state_16521;
state_16521 = G__19757;
continue;
} else {
return ret_value__13870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__ = function(state_16521){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____1.call(this,state_16521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13868__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13868__auto__;
})()
})();
var state__15184__auto__ = (function (){var statearr_16632 = f__15183__auto__();
(statearr_16632[(6)] = c__15182__auto__);

return statearr_16632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15184__auto__);
}));

return c__15182__auto__;
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
var G__16638 = arguments.length;
switch (G__16638) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__16647 = arguments.length;
switch (G__16647) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__16656 = arguments.length;
switch (G__16656) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15182__auto___19793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15183__auto__ = (function (){var switch__13867__auto__ = (function (state_16687){
var state_val_16688 = (state_16687[(1)]);
if((state_val_16688 === (7))){
var inst_16682 = (state_16687[(2)]);
var state_16687__$1 = state_16687;
var statearr_16697_19797 = state_16687__$1;
(statearr_16697_19797[(2)] = inst_16682);

(statearr_16697_19797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16688 === (1))){
var state_16687__$1 = state_16687;
var statearr_16698_19801 = state_16687__$1;
(statearr_16698_19801[(2)] = null);

(statearr_16698_19801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16688 === (4))){
var inst_16663 = (state_16687[(7)]);
var inst_16663__$1 = (state_16687[(2)]);
var inst_16664 = (inst_16663__$1 == null);
var state_16687__$1 = (function (){var statearr_16699 = state_16687;
(statearr_16699[(7)] = inst_16663__$1);

return statearr_16699;
})();
if(cljs.core.truth_(inst_16664)){
var statearr_16700_19803 = state_16687__$1;
(statearr_16700_19803[(1)] = (5));

} else {
var statearr_16701_19804 = state_16687__$1;
(statearr_16701_19804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16688 === (13))){
var state_16687__$1 = state_16687;
var statearr_16711_19805 = state_16687__$1;
(statearr_16711_19805[(2)] = null);

(statearr_16711_19805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16688 === (6))){
var inst_16663 = (state_16687[(7)]);
var inst_16669 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16663) : p.call(null,inst_16663));
var state_16687__$1 = state_16687;
if(cljs.core.truth_(inst_16669)){
var statearr_16725_19812 = state_16687__$1;
(statearr_16725_19812[(1)] = (9));

} else {
var statearr_16726_19819 = state_16687__$1;
(statearr_16726_19819[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16688 === (3))){
var inst_16684 = (state_16687[(2)]);
var state_16687__$1 = state_16687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16687__$1,inst_16684);
} else {
if((state_val_16688 === (12))){
var state_16687__$1 = state_16687;
var statearr_16731_19821 = state_16687__$1;
(statearr_16731_19821[(2)] = null);

(statearr_16731_19821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16688 === (2))){
var state_16687__$1 = state_16687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16687__$1,(4),ch);
} else {
if((state_val_16688 === (11))){
var inst_16663 = (state_16687[(7)]);
var inst_16673 = (state_16687[(2)]);
var state_16687__$1 = state_16687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16687__$1,(8),inst_16673,inst_16663);
} else {
if((state_val_16688 === (9))){
var state_16687__$1 = state_16687;
var statearr_16743_19824 = state_16687__$1;
(statearr_16743_19824[(2)] = tc);

(statearr_16743_19824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16688 === (5))){
var inst_16666 = cljs.core.async.close_BANG_(tc);
var inst_16667 = cljs.core.async.close_BANG_(fc);
var state_16687__$1 = (function (){var statearr_16744 = state_16687;
(statearr_16744[(8)] = inst_16666);

return statearr_16744;
})();
var statearr_16747_19832 = state_16687__$1;
(statearr_16747_19832[(2)] = inst_16667);

(statearr_16747_19832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16688 === (14))){
var inst_16680 = (state_16687[(2)]);
var state_16687__$1 = state_16687;
var statearr_16750_19839 = state_16687__$1;
(statearr_16750_19839[(2)] = inst_16680);

(statearr_16750_19839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16688 === (10))){
var state_16687__$1 = state_16687;
var statearr_16752_19846 = state_16687__$1;
(statearr_16752_19846[(2)] = fc);

(statearr_16752_19846[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16688 === (8))){
var inst_16675 = (state_16687[(2)]);
var state_16687__$1 = state_16687;
if(cljs.core.truth_(inst_16675)){
var statearr_16759_19851 = state_16687__$1;
(statearr_16759_19851[(1)] = (12));

} else {
var statearr_16760_19852 = state_16687__$1;
(statearr_16760_19852[(1)] = (13));

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
var cljs$core$async$state_machine__13868__auto__ = null;
var cljs$core$async$state_machine__13868__auto____0 = (function (){
var statearr_16764 = [null,null,null,null,null,null,null,null,null];
(statearr_16764[(0)] = cljs$core$async$state_machine__13868__auto__);

(statearr_16764[(1)] = (1));

return statearr_16764;
});
var cljs$core$async$state_machine__13868__auto____1 = (function (state_16687){
while(true){
var ret_value__13870__auto__ = (function (){try{while(true){
var result__13871__auto__ = switch__13867__auto__(state_16687);
if(cljs.core.keyword_identical_QMARK_(result__13871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13871__auto__;
}
break;
}
}catch (e16767){var ex__13872__auto__ = e16767;
var statearr_16768_19857 = state_16687;
(statearr_16768_19857[(2)] = ex__13872__auto__);


if(cljs.core.seq((state_16687[(4)]))){
var statearr_16770_19858 = state_16687;
(statearr_16770_19858[(1)] = cljs.core.first((state_16687[(4)])));

} else {
throw ex__13872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19860 = state_16687;
state_16687 = G__19860;
continue;
} else {
return ret_value__13870__auto__;
}
break;
}
});
cljs$core$async$state_machine__13868__auto__ = function(state_16687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13868__auto____1.call(this,state_16687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13868__auto____0;
cljs$core$async$state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13868__auto____1;
return cljs$core$async$state_machine__13868__auto__;
})()
})();
var state__15184__auto__ = (function (){var statearr_16773 = f__15183__auto__();
(statearr_16773[(6)] = c__15182__auto___19793);

return statearr_16773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15184__auto__);
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
var c__15182__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15183__auto__ = (function (){var switch__13867__auto__ = (function (state_16812){
var state_val_16815 = (state_16812[(1)]);
if((state_val_16815 === (7))){
var inst_16807 = (state_16812[(2)]);
var state_16812__$1 = state_16812;
var statearr_16822_19873 = state_16812__$1;
(statearr_16822_19873[(2)] = inst_16807);

(statearr_16822_19873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (1))){
var inst_16783 = init;
var inst_16786 = inst_16783;
var state_16812__$1 = (function (){var statearr_16826 = state_16812;
(statearr_16826[(7)] = inst_16786);

return statearr_16826;
})();
var statearr_16828_19879 = state_16812__$1;
(statearr_16828_19879[(2)] = null);

(statearr_16828_19879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (4))){
var inst_16792 = (state_16812[(8)]);
var inst_16792__$1 = (state_16812[(2)]);
var inst_16794 = (inst_16792__$1 == null);
var state_16812__$1 = (function (){var statearr_16831 = state_16812;
(statearr_16831[(8)] = inst_16792__$1);

return statearr_16831;
})();
if(cljs.core.truth_(inst_16794)){
var statearr_16832_19880 = state_16812__$1;
(statearr_16832_19880[(1)] = (5));

} else {
var statearr_16833_19881 = state_16812__$1;
(statearr_16833_19881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (6))){
var inst_16786 = (state_16812[(7)]);
var inst_16792 = (state_16812[(8)]);
var inst_16797 = (state_16812[(9)]);
var inst_16797__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16786,inst_16792) : f.call(null,inst_16786,inst_16792));
var inst_16798 = cljs.core.reduced_QMARK_(inst_16797__$1);
var state_16812__$1 = (function (){var statearr_16867 = state_16812;
(statearr_16867[(9)] = inst_16797__$1);

return statearr_16867;
})();
if(inst_16798){
var statearr_16868_19882 = state_16812__$1;
(statearr_16868_19882[(1)] = (8));

} else {
var statearr_16869_19883 = state_16812__$1;
(statearr_16869_19883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (3))){
var inst_16810 = (state_16812[(2)]);
var state_16812__$1 = state_16812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16812__$1,inst_16810);
} else {
if((state_val_16815 === (2))){
var state_16812__$1 = state_16812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16812__$1,(4),ch);
} else {
if((state_val_16815 === (9))){
var inst_16797 = (state_16812[(9)]);
var inst_16786 = inst_16797;
var state_16812__$1 = (function (){var statearr_16872 = state_16812;
(statearr_16872[(7)] = inst_16786);

return statearr_16872;
})();
var statearr_16873_19885 = state_16812__$1;
(statearr_16873_19885[(2)] = null);

(statearr_16873_19885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (5))){
var inst_16786 = (state_16812[(7)]);
var state_16812__$1 = state_16812;
var statearr_16876_19886 = state_16812__$1;
(statearr_16876_19886[(2)] = inst_16786);

(statearr_16876_19886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (10))){
var inst_16805 = (state_16812[(2)]);
var state_16812__$1 = state_16812;
var statearr_16879_19890 = state_16812__$1;
(statearr_16879_19890[(2)] = inst_16805);

(statearr_16879_19890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (8))){
var inst_16797 = (state_16812[(9)]);
var inst_16801 = cljs.core.deref(inst_16797);
var state_16812__$1 = state_16812;
var statearr_16882_19893 = state_16812__$1;
(statearr_16882_19893[(2)] = inst_16801);

(statearr_16882_19893[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__13868__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13868__auto____0 = (function (){
var statearr_16936 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16936[(0)] = cljs$core$async$reduce_$_state_machine__13868__auto__);

(statearr_16936[(1)] = (1));

return statearr_16936;
});
var cljs$core$async$reduce_$_state_machine__13868__auto____1 = (function (state_16812){
while(true){
var ret_value__13870__auto__ = (function (){try{while(true){
var result__13871__auto__ = switch__13867__auto__(state_16812);
if(cljs.core.keyword_identical_QMARK_(result__13871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13871__auto__;
}
break;
}
}catch (e16938){var ex__13872__auto__ = e16938;
var statearr_16939_19902 = state_16812;
(statearr_16939_19902[(2)] = ex__13872__auto__);


if(cljs.core.seq((state_16812[(4)]))){
var statearr_16942_19903 = state_16812;
(statearr_16942_19903[(1)] = cljs.core.first((state_16812[(4)])));

} else {
throw ex__13872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19907 = state_16812;
state_16812 = G__19907;
continue;
} else {
return ret_value__13870__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13868__auto__ = function(state_16812){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13868__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13868__auto____1.call(this,state_16812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13868__auto____0;
cljs$core$async$reduce_$_state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13868__auto____1;
return cljs$core$async$reduce_$_state_machine__13868__auto__;
})()
})();
var state__15184__auto__ = (function (){var statearr_16955 = f__15183__auto__();
(statearr_16955[(6)] = c__15182__auto__);

return statearr_16955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15184__auto__);
}));

return c__15182__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15182__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15183__auto__ = (function (){var switch__13867__auto__ = (function (state_17015){
var state_val_17016 = (state_17015[(1)]);
if((state_val_17016 === (1))){
var inst_16977 = cljs.core.async.reduce(f__$1,init,ch);
var state_17015__$1 = state_17015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17015__$1,(2),inst_16977);
} else {
if((state_val_17016 === (2))){
var inst_16979 = (state_17015[(2)]);
var inst_16981 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16979) : f__$1.call(null,inst_16979));
var state_17015__$1 = state_17015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17015__$1,inst_16981);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13868__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13868__auto____0 = (function (){
var statearr_17059 = [null,null,null,null,null,null,null];
(statearr_17059[(0)] = cljs$core$async$transduce_$_state_machine__13868__auto__);

(statearr_17059[(1)] = (1));

return statearr_17059;
});
var cljs$core$async$transduce_$_state_machine__13868__auto____1 = (function (state_17015){
while(true){
var ret_value__13870__auto__ = (function (){try{while(true){
var result__13871__auto__ = switch__13867__auto__(state_17015);
if(cljs.core.keyword_identical_QMARK_(result__13871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13871__auto__;
}
break;
}
}catch (e17061){var ex__13872__auto__ = e17061;
var statearr_17062_19909 = state_17015;
(statearr_17062_19909[(2)] = ex__13872__auto__);


if(cljs.core.seq((state_17015[(4)]))){
var statearr_17071_19914 = state_17015;
(statearr_17071_19914[(1)] = cljs.core.first((state_17015[(4)])));

} else {
throw ex__13872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19915 = state_17015;
state_17015 = G__19915;
continue;
} else {
return ret_value__13870__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13868__auto__ = function(state_17015){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13868__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13868__auto____1.call(this,state_17015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13868__auto____0;
cljs$core$async$transduce_$_state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13868__auto____1;
return cljs$core$async$transduce_$_state_machine__13868__auto__;
})()
})();
var state__15184__auto__ = (function (){var statearr_17082 = f__15183__auto__();
(statearr_17082[(6)] = c__15182__auto__);

return statearr_17082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15184__auto__);
}));

return c__15182__auto__;
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
var G__17108 = arguments.length;
switch (G__17108) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15182__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15183__auto__ = (function (){var switch__13867__auto__ = (function (state_17182){
var state_val_17184 = (state_17182[(1)]);
if((state_val_17184 === (7))){
var inst_17158 = (state_17182[(2)]);
var state_17182__$1 = state_17182;
var statearr_17191_19920 = state_17182__$1;
(statearr_17191_19920[(2)] = inst_17158);

(statearr_17191_19920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17184 === (1))){
var inst_17130 = cljs.core.seq(coll);
var inst_17133 = inst_17130;
var state_17182__$1 = (function (){var statearr_17199 = state_17182;
(statearr_17199[(7)] = inst_17133);

return statearr_17199;
})();
var statearr_17201_19921 = state_17182__$1;
(statearr_17201_19921[(2)] = null);

(statearr_17201_19921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17184 === (4))){
var inst_17133 = (state_17182[(7)]);
var inst_17156 = cljs.core.first(inst_17133);
var state_17182__$1 = state_17182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17182__$1,(7),ch,inst_17156);
} else {
if((state_val_17184 === (13))){
var inst_17173 = (state_17182[(2)]);
var state_17182__$1 = state_17182;
var statearr_17205_19922 = state_17182__$1;
(statearr_17205_19922[(2)] = inst_17173);

(statearr_17205_19922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17184 === (6))){
var inst_17161 = (state_17182[(2)]);
var state_17182__$1 = state_17182;
if(cljs.core.truth_(inst_17161)){
var statearr_17206_19923 = state_17182__$1;
(statearr_17206_19923[(1)] = (8));

} else {
var statearr_17207_19924 = state_17182__$1;
(statearr_17207_19924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17184 === (3))){
var inst_17177 = (state_17182[(2)]);
var state_17182__$1 = state_17182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17182__$1,inst_17177);
} else {
if((state_val_17184 === (12))){
var state_17182__$1 = state_17182;
var statearr_17209_19925 = state_17182__$1;
(statearr_17209_19925[(2)] = null);

(statearr_17209_19925[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17184 === (2))){
var inst_17133 = (state_17182[(7)]);
var state_17182__$1 = state_17182;
if(cljs.core.truth_(inst_17133)){
var statearr_17211_19926 = state_17182__$1;
(statearr_17211_19926[(1)] = (4));

} else {
var statearr_17212_19927 = state_17182__$1;
(statearr_17212_19927[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17184 === (11))){
var inst_17170 = cljs.core.async.close_BANG_(ch);
var state_17182__$1 = state_17182;
var statearr_17213_19929 = state_17182__$1;
(statearr_17213_19929[(2)] = inst_17170);

(statearr_17213_19929[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17184 === (9))){
var state_17182__$1 = state_17182;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17214_19930 = state_17182__$1;
(statearr_17214_19930[(1)] = (11));

} else {
var statearr_17215_19931 = state_17182__$1;
(statearr_17215_19931[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17184 === (5))){
var inst_17133 = (state_17182[(7)]);
var state_17182__$1 = state_17182;
var statearr_17216_19932 = state_17182__$1;
(statearr_17216_19932[(2)] = inst_17133);

(statearr_17216_19932[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17184 === (10))){
var inst_17175 = (state_17182[(2)]);
var state_17182__$1 = state_17182;
var statearr_17217_19934 = state_17182__$1;
(statearr_17217_19934[(2)] = inst_17175);

(statearr_17217_19934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17184 === (8))){
var inst_17133 = (state_17182[(7)]);
var inst_17165 = cljs.core.next(inst_17133);
var inst_17133__$1 = inst_17165;
var state_17182__$1 = (function (){var statearr_17222 = state_17182;
(statearr_17222[(7)] = inst_17133__$1);

return statearr_17222;
})();
var statearr_17223_19936 = state_17182__$1;
(statearr_17223_19936[(2)] = null);

(statearr_17223_19936[(1)] = (2));


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
var cljs$core$async$state_machine__13868__auto__ = null;
var cljs$core$async$state_machine__13868__auto____0 = (function (){
var statearr_17225 = [null,null,null,null,null,null,null,null];
(statearr_17225[(0)] = cljs$core$async$state_machine__13868__auto__);

(statearr_17225[(1)] = (1));

return statearr_17225;
});
var cljs$core$async$state_machine__13868__auto____1 = (function (state_17182){
while(true){
var ret_value__13870__auto__ = (function (){try{while(true){
var result__13871__auto__ = switch__13867__auto__(state_17182);
if(cljs.core.keyword_identical_QMARK_(result__13871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13871__auto__;
}
break;
}
}catch (e17227){var ex__13872__auto__ = e17227;
var statearr_17228_19945 = state_17182;
(statearr_17228_19945[(2)] = ex__13872__auto__);


if(cljs.core.seq((state_17182[(4)]))){
var statearr_17229_19946 = state_17182;
(statearr_17229_19946[(1)] = cljs.core.first((state_17182[(4)])));

} else {
throw ex__13872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19949 = state_17182;
state_17182 = G__19949;
continue;
} else {
return ret_value__13870__auto__;
}
break;
}
});
cljs$core$async$state_machine__13868__auto__ = function(state_17182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13868__auto____1.call(this,state_17182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13868__auto____0;
cljs$core$async$state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13868__auto____1;
return cljs$core$async$state_machine__13868__auto__;
})()
})();
var state__15184__auto__ = (function (){var statearr_17232 = f__15183__auto__();
(statearr_17232[(6)] = c__15182__auto__);

return statearr_17232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15184__auto__);
}));

return c__15182__auto__;
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
var G__17242 = arguments.length;
switch (G__17242) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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

var cljs$core$async$Mux$muxch_STAR_$dyn_19956 = (function (_){
var x__5498__auto__ = (((_ == null))?null:_);
var m__5499__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5499__auto__.call(null,_));
} else {
var m__5497__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5497__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19956(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19960 = (function (m,ch,close_QMARK_){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5499__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5497__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19960(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19968 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19968(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19971 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19971(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17333 = (function (ch,cs,meta17334){
this.ch = ch;
this.cs = cs;
this.meta17334 = meta17334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17335,meta17334__$1){
var self__ = this;
var _17335__$1 = this;
return (new cljs.core.async.t_cljs$core$async17333(self__.ch,self__.cs,meta17334__$1));
}));

(cljs.core.async.t_cljs$core$async17333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17335){
var self__ = this;
var _17335__$1 = this;
return self__.meta17334;
}));

(cljs.core.async.t_cljs$core$async17333.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17333.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17333.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17333.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17333.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17333.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17334","meta17334",-503596792,null)], null);
}));

(cljs.core.async.t_cljs$core$async17333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17333");

(cljs.core.async.t_cljs$core$async17333.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17333.
 */
cljs.core.async.__GT_t_cljs$core$async17333 = (function cljs$core$async$__GT_t_cljs$core$async17333(ch,cs,meta17334){
return (new cljs.core.async.t_cljs$core$async17333(ch,cs,meta17334));
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
var m = (new cljs.core.async.t_cljs$core$async17333(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15182__auto___19987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15183__auto__ = (function (){var switch__13867__auto__ = (function (state_17562){
var state_val_17565 = (state_17562[(1)]);
if((state_val_17565 === (7))){
var inst_17555 = (state_17562[(2)]);
var state_17562__$1 = state_17562;
var statearr_17568_19989 = state_17562__$1;
(statearr_17568_19989[(2)] = inst_17555);

(statearr_17568_19989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (20))){
var inst_17392 = (state_17562[(7)]);
var inst_17409 = cljs.core.first(inst_17392);
var inst_17410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17409,(0),null);
var inst_17411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17409,(1),null);
var state_17562__$1 = (function (){var statearr_17569 = state_17562;
(statearr_17569[(8)] = inst_17410);

return statearr_17569;
})();
if(cljs.core.truth_(inst_17411)){
var statearr_17570_19990 = state_17562__$1;
(statearr_17570_19990[(1)] = (22));

} else {
var statearr_17571_19992 = state_17562__$1;
(statearr_17571_19992[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (27))){
var inst_17455 = (state_17562[(9)]);
var inst_17457 = (state_17562[(10)]);
var inst_17470 = (state_17562[(11)]);
var inst_17359 = (state_17562[(12)]);
var inst_17470__$1 = cljs.core._nth(inst_17455,inst_17457);
var inst_17471 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17470__$1,inst_17359,done);
var state_17562__$1 = (function (){var statearr_17573 = state_17562;
(statearr_17573[(11)] = inst_17470__$1);

return statearr_17573;
})();
if(cljs.core.truth_(inst_17471)){
var statearr_17575_19997 = state_17562__$1;
(statearr_17575_19997[(1)] = (30));

} else {
var statearr_17577_19998 = state_17562__$1;
(statearr_17577_19998[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (1))){
var state_17562__$1 = state_17562;
var statearr_17581_19999 = state_17562__$1;
(statearr_17581_19999[(2)] = null);

(statearr_17581_19999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (24))){
var inst_17392 = (state_17562[(7)]);
var inst_17422 = (state_17562[(2)]);
var inst_17425 = cljs.core.next(inst_17392);
var inst_17368 = inst_17425;
var inst_17369 = null;
var inst_17370 = (0);
var inst_17371 = (0);
var state_17562__$1 = (function (){var statearr_17588 = state_17562;
(statearr_17588[(13)] = inst_17422);

(statearr_17588[(14)] = inst_17368);

(statearr_17588[(15)] = inst_17369);

(statearr_17588[(16)] = inst_17370);

(statearr_17588[(17)] = inst_17371);

return statearr_17588;
})();
var statearr_17589_20001 = state_17562__$1;
(statearr_17589_20001[(2)] = null);

(statearr_17589_20001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (39))){
var state_17562__$1 = state_17562;
var statearr_17593_20003 = state_17562__$1;
(statearr_17593_20003[(2)] = null);

(statearr_17593_20003[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (4))){
var inst_17359 = (state_17562[(12)]);
var inst_17359__$1 = (state_17562[(2)]);
var inst_17360 = (inst_17359__$1 == null);
var state_17562__$1 = (function (){var statearr_17596 = state_17562;
(statearr_17596[(12)] = inst_17359__$1);

return statearr_17596;
})();
if(cljs.core.truth_(inst_17360)){
var statearr_17597_20004 = state_17562__$1;
(statearr_17597_20004[(1)] = (5));

} else {
var statearr_17598_20005 = state_17562__$1;
(statearr_17598_20005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (15))){
var inst_17371 = (state_17562[(17)]);
var inst_17368 = (state_17562[(14)]);
var inst_17369 = (state_17562[(15)]);
var inst_17370 = (state_17562[(16)]);
var inst_17387 = (state_17562[(2)]);
var inst_17389 = (inst_17371 + (1));
var tmp17590 = inst_17369;
var tmp17591 = inst_17370;
var tmp17592 = inst_17368;
var inst_17368__$1 = tmp17592;
var inst_17369__$1 = tmp17590;
var inst_17370__$1 = tmp17591;
var inst_17371__$1 = inst_17389;
var state_17562__$1 = (function (){var statearr_17600 = state_17562;
(statearr_17600[(18)] = inst_17387);

(statearr_17600[(14)] = inst_17368__$1);

(statearr_17600[(15)] = inst_17369__$1);

(statearr_17600[(16)] = inst_17370__$1);

(statearr_17600[(17)] = inst_17371__$1);

return statearr_17600;
})();
var statearr_17601_20009 = state_17562__$1;
(statearr_17601_20009[(2)] = null);

(statearr_17601_20009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (21))){
var inst_17428 = (state_17562[(2)]);
var state_17562__$1 = state_17562;
var statearr_17605_20015 = state_17562__$1;
(statearr_17605_20015[(2)] = inst_17428);

(statearr_17605_20015[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (31))){
var inst_17470 = (state_17562[(11)]);
var inst_17475 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17470);
var state_17562__$1 = state_17562;
var statearr_17609_20016 = state_17562__$1;
(statearr_17609_20016[(2)] = inst_17475);

(statearr_17609_20016[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (32))){
var inst_17457 = (state_17562[(10)]);
var inst_17454 = (state_17562[(19)]);
var inst_17455 = (state_17562[(9)]);
var inst_17456 = (state_17562[(20)]);
var inst_17477 = (state_17562[(2)]);
var inst_17478 = (inst_17457 + (1));
var tmp17602 = inst_17456;
var tmp17603 = inst_17455;
var tmp17604 = inst_17454;
var inst_17454__$1 = tmp17604;
var inst_17455__$1 = tmp17603;
var inst_17456__$1 = tmp17602;
var inst_17457__$1 = inst_17478;
var state_17562__$1 = (function (){var statearr_17612 = state_17562;
(statearr_17612[(21)] = inst_17477);

(statearr_17612[(19)] = inst_17454__$1);

(statearr_17612[(9)] = inst_17455__$1);

(statearr_17612[(20)] = inst_17456__$1);

(statearr_17612[(10)] = inst_17457__$1);

return statearr_17612;
})();
var statearr_17615_20020 = state_17562__$1;
(statearr_17615_20020[(2)] = null);

(statearr_17615_20020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (40))){
var inst_17511 = (state_17562[(22)]);
var inst_17515 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17511);
var state_17562__$1 = state_17562;
var statearr_17618_20022 = state_17562__$1;
(statearr_17618_20022[(2)] = inst_17515);

(statearr_17618_20022[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (33))){
var inst_17483 = (state_17562[(23)]);
var inst_17487 = cljs.core.chunked_seq_QMARK_(inst_17483);
var state_17562__$1 = state_17562;
if(inst_17487){
var statearr_17620_20023 = state_17562__$1;
(statearr_17620_20023[(1)] = (36));

} else {
var statearr_17621_20024 = state_17562__$1;
(statearr_17621_20024[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (13))){
var inst_17380 = (state_17562[(24)]);
var inst_17383 = cljs.core.async.close_BANG_(inst_17380);
var state_17562__$1 = state_17562;
var statearr_17622_20025 = state_17562__$1;
(statearr_17622_20025[(2)] = inst_17383);

(statearr_17622_20025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (22))){
var inst_17410 = (state_17562[(8)]);
var inst_17413 = cljs.core.async.close_BANG_(inst_17410);
var state_17562__$1 = state_17562;
var statearr_17624_20026 = state_17562__$1;
(statearr_17624_20026[(2)] = inst_17413);

(statearr_17624_20026[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (36))){
var inst_17483 = (state_17562[(23)]);
var inst_17498 = cljs.core.chunk_first(inst_17483);
var inst_17499 = cljs.core.chunk_rest(inst_17483);
var inst_17506 = cljs.core.count(inst_17498);
var inst_17454 = inst_17499;
var inst_17455 = inst_17498;
var inst_17456 = inst_17506;
var inst_17457 = (0);
var state_17562__$1 = (function (){var statearr_17628 = state_17562;
(statearr_17628[(19)] = inst_17454);

(statearr_17628[(9)] = inst_17455);

(statearr_17628[(20)] = inst_17456);

(statearr_17628[(10)] = inst_17457);

return statearr_17628;
})();
var statearr_17631_20027 = state_17562__$1;
(statearr_17631_20027[(2)] = null);

(statearr_17631_20027[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (41))){
var inst_17483 = (state_17562[(23)]);
var inst_17517 = (state_17562[(2)]);
var inst_17521 = cljs.core.next(inst_17483);
var inst_17454 = inst_17521;
var inst_17455 = null;
var inst_17456 = (0);
var inst_17457 = (0);
var state_17562__$1 = (function (){var statearr_17634 = state_17562;
(statearr_17634[(25)] = inst_17517);

(statearr_17634[(19)] = inst_17454);

(statearr_17634[(9)] = inst_17455);

(statearr_17634[(20)] = inst_17456);

(statearr_17634[(10)] = inst_17457);

return statearr_17634;
})();
var statearr_17635_20028 = state_17562__$1;
(statearr_17635_20028[(2)] = null);

(statearr_17635_20028[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (43))){
var state_17562__$1 = state_17562;
var statearr_17637_20029 = state_17562__$1;
(statearr_17637_20029[(2)] = null);

(statearr_17637_20029[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (29))){
var inst_17539 = (state_17562[(2)]);
var state_17562__$1 = state_17562;
var statearr_17638_20031 = state_17562__$1;
(statearr_17638_20031[(2)] = inst_17539);

(statearr_17638_20031[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (44))){
var inst_17552 = (state_17562[(2)]);
var state_17562__$1 = (function (){var statearr_17639 = state_17562;
(statearr_17639[(26)] = inst_17552);

return statearr_17639;
})();
var statearr_17640_20032 = state_17562__$1;
(statearr_17640_20032[(2)] = null);

(statearr_17640_20032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (6))){
var inst_17444 = (state_17562[(27)]);
var inst_17443 = cljs.core.deref(cs);
var inst_17444__$1 = cljs.core.keys(inst_17443);
var inst_17445 = cljs.core.count(inst_17444__$1);
var inst_17446 = cljs.core.reset_BANG_(dctr,inst_17445);
var inst_17453 = cljs.core.seq(inst_17444__$1);
var inst_17454 = inst_17453;
var inst_17455 = null;
var inst_17456 = (0);
var inst_17457 = (0);
var state_17562__$1 = (function (){var statearr_17643 = state_17562;
(statearr_17643[(27)] = inst_17444__$1);

(statearr_17643[(28)] = inst_17446);

(statearr_17643[(19)] = inst_17454);

(statearr_17643[(9)] = inst_17455);

(statearr_17643[(20)] = inst_17456);

(statearr_17643[(10)] = inst_17457);

return statearr_17643;
})();
var statearr_17644_20034 = state_17562__$1;
(statearr_17644_20034[(2)] = null);

(statearr_17644_20034[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (28))){
var inst_17454 = (state_17562[(19)]);
var inst_17483 = (state_17562[(23)]);
var inst_17483__$1 = cljs.core.seq(inst_17454);
var state_17562__$1 = (function (){var statearr_17646 = state_17562;
(statearr_17646[(23)] = inst_17483__$1);

return statearr_17646;
})();
if(inst_17483__$1){
var statearr_17648_20035 = state_17562__$1;
(statearr_17648_20035[(1)] = (33));

} else {
var statearr_17649_20036 = state_17562__$1;
(statearr_17649_20036[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (25))){
var inst_17457 = (state_17562[(10)]);
var inst_17456 = (state_17562[(20)]);
var inst_17466 = (inst_17457 < inst_17456);
var inst_17467 = inst_17466;
var state_17562__$1 = state_17562;
if(cljs.core.truth_(inst_17467)){
var statearr_17650_20037 = state_17562__$1;
(statearr_17650_20037[(1)] = (27));

} else {
var statearr_17652_20039 = state_17562__$1;
(statearr_17652_20039[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (34))){
var state_17562__$1 = state_17562;
var statearr_17653_20040 = state_17562__$1;
(statearr_17653_20040[(2)] = null);

(statearr_17653_20040[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (17))){
var state_17562__$1 = state_17562;
var statearr_17655_20041 = state_17562__$1;
(statearr_17655_20041[(2)] = null);

(statearr_17655_20041[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (3))){
var inst_17557 = (state_17562[(2)]);
var state_17562__$1 = state_17562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17562__$1,inst_17557);
} else {
if((state_val_17565 === (12))){
var inst_17433 = (state_17562[(2)]);
var state_17562__$1 = state_17562;
var statearr_17662_20043 = state_17562__$1;
(statearr_17662_20043[(2)] = inst_17433);

(statearr_17662_20043[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (2))){
var state_17562__$1 = state_17562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17562__$1,(4),ch);
} else {
if((state_val_17565 === (23))){
var state_17562__$1 = state_17562;
var statearr_17669_20045 = state_17562__$1;
(statearr_17669_20045[(2)] = null);

(statearr_17669_20045[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (35))){
var inst_17530 = (state_17562[(2)]);
var state_17562__$1 = state_17562;
var statearr_17673_20046 = state_17562__$1;
(statearr_17673_20046[(2)] = inst_17530);

(statearr_17673_20046[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (19))){
var inst_17392 = (state_17562[(7)]);
var inst_17398 = cljs.core.chunk_first(inst_17392);
var inst_17400 = cljs.core.chunk_rest(inst_17392);
var inst_17402 = cljs.core.count(inst_17398);
var inst_17368 = inst_17400;
var inst_17369 = inst_17398;
var inst_17370 = inst_17402;
var inst_17371 = (0);
var state_17562__$1 = (function (){var statearr_17676 = state_17562;
(statearr_17676[(14)] = inst_17368);

(statearr_17676[(15)] = inst_17369);

(statearr_17676[(16)] = inst_17370);

(statearr_17676[(17)] = inst_17371);

return statearr_17676;
})();
var statearr_17677_20055 = state_17562__$1;
(statearr_17677_20055[(2)] = null);

(statearr_17677_20055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (11))){
var inst_17368 = (state_17562[(14)]);
var inst_17392 = (state_17562[(7)]);
var inst_17392__$1 = cljs.core.seq(inst_17368);
var state_17562__$1 = (function (){var statearr_17679 = state_17562;
(statearr_17679[(7)] = inst_17392__$1);

return statearr_17679;
})();
if(inst_17392__$1){
var statearr_17682_20058 = state_17562__$1;
(statearr_17682_20058[(1)] = (16));

} else {
var statearr_17683_20060 = state_17562__$1;
(statearr_17683_20060[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (9))){
var inst_17435 = (state_17562[(2)]);
var state_17562__$1 = state_17562;
var statearr_17684_20063 = state_17562__$1;
(statearr_17684_20063[(2)] = inst_17435);

(statearr_17684_20063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (5))){
var inst_17366 = cljs.core.deref(cs);
var inst_17367 = cljs.core.seq(inst_17366);
var inst_17368 = inst_17367;
var inst_17369 = null;
var inst_17370 = (0);
var inst_17371 = (0);
var state_17562__$1 = (function (){var statearr_17685 = state_17562;
(statearr_17685[(14)] = inst_17368);

(statearr_17685[(15)] = inst_17369);

(statearr_17685[(16)] = inst_17370);

(statearr_17685[(17)] = inst_17371);

return statearr_17685;
})();
var statearr_17686_20065 = state_17562__$1;
(statearr_17686_20065[(2)] = null);

(statearr_17686_20065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (14))){
var state_17562__$1 = state_17562;
var statearr_17687_20066 = state_17562__$1;
(statearr_17687_20066[(2)] = null);

(statearr_17687_20066[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (45))){
var inst_17548 = (state_17562[(2)]);
var state_17562__$1 = state_17562;
var statearr_17688_20067 = state_17562__$1;
(statearr_17688_20067[(2)] = inst_17548);

(statearr_17688_20067[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (26))){
var inst_17444 = (state_17562[(27)]);
var inst_17541 = (state_17562[(2)]);
var inst_17542 = cljs.core.seq(inst_17444);
var state_17562__$1 = (function (){var statearr_17689 = state_17562;
(statearr_17689[(29)] = inst_17541);

return statearr_17689;
})();
if(inst_17542){
var statearr_17690_20068 = state_17562__$1;
(statearr_17690_20068[(1)] = (42));

} else {
var statearr_17691_20069 = state_17562__$1;
(statearr_17691_20069[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (16))){
var inst_17392 = (state_17562[(7)]);
var inst_17394 = cljs.core.chunked_seq_QMARK_(inst_17392);
var state_17562__$1 = state_17562;
if(inst_17394){
var statearr_17695_20074 = state_17562__$1;
(statearr_17695_20074[(1)] = (19));

} else {
var statearr_17698_20077 = state_17562__$1;
(statearr_17698_20077[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (38))){
var inst_17527 = (state_17562[(2)]);
var state_17562__$1 = state_17562;
var statearr_17699_20078 = state_17562__$1;
(statearr_17699_20078[(2)] = inst_17527);

(statearr_17699_20078[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (30))){
var state_17562__$1 = state_17562;
var statearr_17700_20080 = state_17562__$1;
(statearr_17700_20080[(2)] = null);

(statearr_17700_20080[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (10))){
var inst_17369 = (state_17562[(15)]);
var inst_17371 = (state_17562[(17)]);
var inst_17379 = cljs.core._nth(inst_17369,inst_17371);
var inst_17380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17379,(0),null);
var inst_17381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17379,(1),null);
var state_17562__$1 = (function (){var statearr_17705 = state_17562;
(statearr_17705[(24)] = inst_17380);

return statearr_17705;
})();
if(cljs.core.truth_(inst_17381)){
var statearr_17707_20081 = state_17562__$1;
(statearr_17707_20081[(1)] = (13));

} else {
var statearr_17708_20083 = state_17562__$1;
(statearr_17708_20083[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (18))){
var inst_17431 = (state_17562[(2)]);
var state_17562__$1 = state_17562;
var statearr_17709_20089 = state_17562__$1;
(statearr_17709_20089[(2)] = inst_17431);

(statearr_17709_20089[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (42))){
var state_17562__$1 = state_17562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17562__$1,(45),dchan);
} else {
if((state_val_17565 === (37))){
var inst_17483 = (state_17562[(23)]);
var inst_17511 = (state_17562[(22)]);
var inst_17359 = (state_17562[(12)]);
var inst_17511__$1 = cljs.core.first(inst_17483);
var inst_17512 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17511__$1,inst_17359,done);
var state_17562__$1 = (function (){var statearr_17712 = state_17562;
(statearr_17712[(22)] = inst_17511__$1);

return statearr_17712;
})();
if(cljs.core.truth_(inst_17512)){
var statearr_17713_20093 = state_17562__$1;
(statearr_17713_20093[(1)] = (39));

} else {
var statearr_17714_20094 = state_17562__$1;
(statearr_17714_20094[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (8))){
var inst_17371 = (state_17562[(17)]);
var inst_17370 = (state_17562[(16)]);
var inst_17373 = (inst_17371 < inst_17370);
var inst_17374 = inst_17373;
var state_17562__$1 = state_17562;
if(cljs.core.truth_(inst_17374)){
var statearr_17715_20096 = state_17562__$1;
(statearr_17715_20096[(1)] = (10));

} else {
var statearr_17716_20097 = state_17562__$1;
(statearr_17716_20097[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__13868__auto__ = null;
var cljs$core$async$mult_$_state_machine__13868__auto____0 = (function (){
var statearr_17720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17720[(0)] = cljs$core$async$mult_$_state_machine__13868__auto__);

(statearr_17720[(1)] = (1));

return statearr_17720;
});
var cljs$core$async$mult_$_state_machine__13868__auto____1 = (function (state_17562){
while(true){
var ret_value__13870__auto__ = (function (){try{while(true){
var result__13871__auto__ = switch__13867__auto__(state_17562);
if(cljs.core.keyword_identical_QMARK_(result__13871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13871__auto__;
}
break;
}
}catch (e17721){var ex__13872__auto__ = e17721;
var statearr_17722_20098 = state_17562;
(statearr_17722_20098[(2)] = ex__13872__auto__);


if(cljs.core.seq((state_17562[(4)]))){
var statearr_17723_20099 = state_17562;
(statearr_17723_20099[(1)] = cljs.core.first((state_17562[(4)])));

} else {
throw ex__13872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20100 = state_17562;
state_17562 = G__20100;
continue;
} else {
return ret_value__13870__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13868__auto__ = function(state_17562){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13868__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13868__auto____1.call(this,state_17562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13868__auto____0;
cljs$core$async$mult_$_state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13868__auto____1;
return cljs$core$async$mult_$_state_machine__13868__auto__;
})()
})();
var state__15184__auto__ = (function (){var statearr_17724 = f__15183__auto__();
(statearr_17724[(6)] = c__15182__auto___19987);

return statearr_17724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15184__auto__);
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
var G__17734 = arguments.length;
switch (G__17734) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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

var cljs$core$async$Mix$admix_STAR_$dyn_20108 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20108(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20113 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20113(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20119 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20119(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20125 = (function (m,state_map){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5499__auto__.call(null,m,state_map));
} else {
var m__5497__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5497__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20125(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20126 = (function (m,mode){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5499__auto__.call(null,m,mode));
} else {
var m__5497__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5497__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20126(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___20129 = arguments.length;
var i__5877__auto___20130 = (0);
while(true){
if((i__5877__auto___20130 < len__5876__auto___20129)){
args__5882__auto__.push((arguments[i__5877__auto___20130]));

var G__20141 = (i__5877__auto___20130 + (1));
i__5877__auto___20130 = G__20141;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17789){
var map__17790 = p__17789;
var map__17790__$1 = cljs.core.__destructure_map(map__17790);
var opts = map__17790__$1;
var statearr_17791_20147 = state;
(statearr_17791_20147[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17792_20148 = state;
(statearr_17792_20148[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_17797_20151 = state;
(statearr_17797_20151[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17781){
var G__17782 = cljs.core.first(seq17781);
var seq17781__$1 = cljs.core.next(seq17781);
var G__17783 = cljs.core.first(seq17781__$1);
var seq17781__$2 = cljs.core.next(seq17781__$1);
var G__17784 = cljs.core.first(seq17781__$2);
var seq17781__$3 = cljs.core.next(seq17781__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17782,G__17783,G__17784,seq17781__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17821 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17822){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17822 = meta17822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17823,meta17822__$1){
var self__ = this;
var _17823__$1 = this;
return (new cljs.core.async.t_cljs$core$async17821(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17822__$1));
}));

(cljs.core.async.t_cljs$core$async17821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17823){
var self__ = this;
var _17823__$1 = this;
return self__.meta17822;
}));

(cljs.core.async.t_cljs$core$async17821.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17821.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17821.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17821.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17821.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17821.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17821.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17821.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17822","meta17822",556926955,null)], null);
}));

(cljs.core.async.t_cljs$core$async17821.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17821");

(cljs.core.async.t_cljs$core$async17821.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17821");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17821.
 */
cljs.core.async.__GT_t_cljs$core$async17821 = (function cljs$core$async$__GT_t_cljs$core$async17821(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17822){
return (new cljs.core.async.t_cljs$core$async17821(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17822));
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async17821(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__15182__auto___20178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15183__auto__ = (function (){var switch__13867__auto__ = (function (state_17936){
var state_val_17937 = (state_17936[(1)]);
if((state_val_17937 === (7))){
var inst_17884 = (state_17936[(2)]);
var state_17936__$1 = state_17936;
if(cljs.core.truth_(inst_17884)){
var statearr_17944_20185 = state_17936__$1;
(statearr_17944_20185[(1)] = (8));

} else {
var statearr_17945_20186 = state_17936__$1;
(statearr_17945_20186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17937 === (20))){
var inst_17871 = (state_17936[(7)]);
var state_17936__$1 = state_17936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17936__$1,(23),out,inst_17871);
} else {
if((state_val_17937 === (1))){
var inst_17845 = calc_state();
var inst_17848 = cljs.core.__destructure_map(inst_17845);
var inst_17849 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17848,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17848,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17848,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17852 = inst_17845;
var state_17936__$1 = (function (){var statearr_17957 = state_17936;
(statearr_17957[(8)] = inst_17849);

(statearr_17957[(9)] = inst_17850);

(statearr_17957[(10)] = inst_17851);

(statearr_17957[(11)] = inst_17852);

return statearr_17957;
})();
var statearr_17958_20193 = state_17936__$1;
(statearr_17958_20193[(2)] = null);

(statearr_17958_20193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17937 === (24))){
var inst_17858 = (state_17936[(12)]);
var inst_17852 = inst_17858;
var state_17936__$1 = (function (){var statearr_17961 = state_17936;
(statearr_17961[(11)] = inst_17852);

return statearr_17961;
})();
var statearr_17965_20197 = state_17936__$1;
(statearr_17965_20197[(2)] = null);

(statearr_17965_20197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17937 === (4))){
var inst_17871 = (state_17936[(7)]);
var inst_17879 = (state_17936[(13)]);
var inst_17870 = (state_17936[(2)]);
var inst_17871__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17870,(0),null);
var inst_17877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17870,(1),null);
var inst_17879__$1 = (inst_17871__$1 == null);
var state_17936__$1 = (function (){var statearr_17968 = state_17936;
(statearr_17968[(7)] = inst_17871__$1);

(statearr_17968[(14)] = inst_17877);

(statearr_17968[(13)] = inst_17879__$1);

return statearr_17968;
})();
if(cljs.core.truth_(inst_17879__$1)){
var statearr_17973_20202 = state_17936__$1;
(statearr_17973_20202[(1)] = (5));

} else {
var statearr_17974_20204 = state_17936__$1;
(statearr_17974_20204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17937 === (15))){
var inst_17859 = (state_17936[(15)]);
var inst_17908 = (state_17936[(16)]);
var inst_17908__$1 = cljs.core.empty_QMARK_(inst_17859);
var state_17936__$1 = (function (){var statearr_17979 = state_17936;
(statearr_17979[(16)] = inst_17908__$1);

return statearr_17979;
})();
if(inst_17908__$1){
var statearr_17985_20208 = state_17936__$1;
(statearr_17985_20208[(1)] = (17));

} else {
var statearr_17986_20209 = state_17936__$1;
(statearr_17986_20209[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17937 === (21))){
var inst_17858 = (state_17936[(12)]);
var inst_17852 = inst_17858;
var state_17936__$1 = (function (){var statearr_17987 = state_17936;
(statearr_17987[(11)] = inst_17852);

return statearr_17987;
})();
var statearr_17988_20210 = state_17936__$1;
(statearr_17988_20210[(2)] = null);

(statearr_17988_20210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17937 === (13))){
var inst_17894 = (state_17936[(2)]);
var inst_17895 = calc_state();
var inst_17852 = inst_17895;
var state_17936__$1 = (function (){var statearr_17992 = state_17936;
(statearr_17992[(17)] = inst_17894);

(statearr_17992[(11)] = inst_17852);

return statearr_17992;
})();
var statearr_17993_20211 = state_17936__$1;
(statearr_17993_20211[(2)] = null);

(statearr_17993_20211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17937 === (22))){
var inst_17929 = (state_17936[(2)]);
var state_17936__$1 = state_17936;
var statearr_17998_20212 = state_17936__$1;
(statearr_17998_20212[(2)] = inst_17929);

(statearr_17998_20212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17937 === (6))){
var inst_17877 = (state_17936[(14)]);
var inst_17882 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17877,change);
var state_17936__$1 = state_17936;
var statearr_18004_20213 = state_17936__$1;
(statearr_18004_20213[(2)] = inst_17882);

(statearr_18004_20213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17937 === (25))){
var state_17936__$1 = state_17936;
var statearr_18018_20214 = state_17936__$1;
(statearr_18018_20214[(2)] = null);

(statearr_18018_20214[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17937 === (17))){
var inst_17863 = (state_17936[(18)]);
var inst_17877 = (state_17936[(14)]);
var inst_17910 = (inst_17863.cljs$core$IFn$_invoke$arity$1 ? inst_17863.cljs$core$IFn$_invoke$arity$1(inst_17877) : inst_17863.call(null,inst_17877));
var inst_17911 = cljs.core.not(inst_17910);
var state_17936__$1 = state_17936;
var statearr_18023_20215 = state_17936__$1;
(statearr_18023_20215[(2)] = inst_17911);

(statearr_18023_20215[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17937 === (3))){
var inst_17933 = (state_17936[(2)]);
var state_17936__$1 = state_17936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17936__$1,inst_17933);
} else {
if((state_val_17937 === (12))){
var state_17936__$1 = state_17936;
var statearr_18028_20216 = state_17936__$1;
(statearr_18028_20216[(2)] = null);

(statearr_18028_20216[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17937 === (2))){
var inst_17852 = (state_17936[(11)]);
var inst_17858 = (state_17936[(12)]);
var inst_17858__$1 = cljs.core.__destructure_map(inst_17852);
var inst_17859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17858__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17858__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17858__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17936__$1 = (function (){var statearr_18029 = state_17936;
(statearr_18029[(12)] = inst_17858__$1);

(statearr_18029[(15)] = inst_17859);

(statearr_18029[(18)] = inst_17863);

return statearr_18029;
})();
return cljs.core.async.ioc_alts_BANG_(state_17936__$1,(4),inst_17864);
} else {
if((state_val_17937 === (23))){
var inst_17919 = (state_17936[(2)]);
var state_17936__$1 = state_17936;
if(cljs.core.truth_(inst_17919)){
var statearr_18030_20218 = state_17936__$1;
(statearr_18030_20218[(1)] = (24));

} else {
var statearr_18031_20219 = state_17936__$1;
(statearr_18031_20219[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17937 === (19))){
var inst_17914 = (state_17936[(2)]);
var state_17936__$1 = state_17936;
var statearr_18032_20221 = state_17936__$1;
(statearr_18032_20221[(2)] = inst_17914);

(statearr_18032_20221[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17937 === (11))){
var inst_17877 = (state_17936[(14)]);
var inst_17891 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17877);
var state_17936__$1 = state_17936;
var statearr_18035_20222 = state_17936__$1;
(statearr_18035_20222[(2)] = inst_17891);

(statearr_18035_20222[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17937 === (9))){
var inst_17859 = (state_17936[(15)]);
var inst_17877 = (state_17936[(14)]);
var inst_17900 = (state_17936[(19)]);
var inst_17900__$1 = (inst_17859.cljs$core$IFn$_invoke$arity$1 ? inst_17859.cljs$core$IFn$_invoke$arity$1(inst_17877) : inst_17859.call(null,inst_17877));
var state_17936__$1 = (function (){var statearr_18036 = state_17936;
(statearr_18036[(19)] = inst_17900__$1);

return statearr_18036;
})();
if(cljs.core.truth_(inst_17900__$1)){
var statearr_18037_20223 = state_17936__$1;
(statearr_18037_20223[(1)] = (14));

} else {
var statearr_18038_20224 = state_17936__$1;
(statearr_18038_20224[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17937 === (5))){
var inst_17879 = (state_17936[(13)]);
var state_17936__$1 = state_17936;
var statearr_18039_20226 = state_17936__$1;
(statearr_18039_20226[(2)] = inst_17879);

(statearr_18039_20226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17937 === (14))){
var inst_17900 = (state_17936[(19)]);
var state_17936__$1 = state_17936;
var statearr_18042_20228 = state_17936__$1;
(statearr_18042_20228[(2)] = inst_17900);

(statearr_18042_20228[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17937 === (26))){
var inst_17925 = (state_17936[(2)]);
var state_17936__$1 = state_17936;
var statearr_18043_20229 = state_17936__$1;
(statearr_18043_20229[(2)] = inst_17925);

(statearr_18043_20229[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17937 === (16))){
var inst_17916 = (state_17936[(2)]);
var state_17936__$1 = state_17936;
if(cljs.core.truth_(inst_17916)){
var statearr_18045_20231 = state_17936__$1;
(statearr_18045_20231[(1)] = (20));

} else {
var statearr_18046_20232 = state_17936__$1;
(statearr_18046_20232[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17937 === (10))){
var inst_17931 = (state_17936[(2)]);
var state_17936__$1 = state_17936;
var statearr_18047_20233 = state_17936__$1;
(statearr_18047_20233[(2)] = inst_17931);

(statearr_18047_20233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17937 === (18))){
var inst_17908 = (state_17936[(16)]);
var state_17936__$1 = state_17936;
var statearr_18048_20234 = state_17936__$1;
(statearr_18048_20234[(2)] = inst_17908);

(statearr_18048_20234[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17937 === (8))){
var inst_17871 = (state_17936[(7)]);
var inst_17889 = (inst_17871 == null);
var state_17936__$1 = state_17936;
if(cljs.core.truth_(inst_17889)){
var statearr_18049_20235 = state_17936__$1;
(statearr_18049_20235[(1)] = (11));

} else {
var statearr_18050_20237 = state_17936__$1;
(statearr_18050_20237[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__13868__auto__ = null;
var cljs$core$async$mix_$_state_machine__13868__auto____0 = (function (){
var statearr_18051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18051[(0)] = cljs$core$async$mix_$_state_machine__13868__auto__);

(statearr_18051[(1)] = (1));

return statearr_18051;
});
var cljs$core$async$mix_$_state_machine__13868__auto____1 = (function (state_17936){
while(true){
var ret_value__13870__auto__ = (function (){try{while(true){
var result__13871__auto__ = switch__13867__auto__(state_17936);
if(cljs.core.keyword_identical_QMARK_(result__13871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13871__auto__;
}
break;
}
}catch (e18052){var ex__13872__auto__ = e18052;
var statearr_18053_20238 = state_17936;
(statearr_18053_20238[(2)] = ex__13872__auto__);


if(cljs.core.seq((state_17936[(4)]))){
var statearr_18057_20239 = state_17936;
(statearr_18057_20239[(1)] = cljs.core.first((state_17936[(4)])));

} else {
throw ex__13872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20240 = state_17936;
state_17936 = G__20240;
continue;
} else {
return ret_value__13870__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13868__auto__ = function(state_17936){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13868__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13868__auto____1.call(this,state_17936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13868__auto____0;
cljs$core$async$mix_$_state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13868__auto____1;
return cljs$core$async$mix_$_state_machine__13868__auto__;
})()
})();
var state__15184__auto__ = (function (){var statearr_18065 = f__15183__auto__();
(statearr_18065[(6)] = c__15182__auto___20178);

return statearr_18065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15184__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_20242 = (function (p,v,ch,close_QMARK_){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5499__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5497__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20242(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20244 = (function (p,v,ch){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5499__auto__.call(null,p,v,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5497__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20244(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20256 = (function() {
var G__20257 = null;
var G__20257__1 = (function (p){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5499__auto__.call(null,p));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5497__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20257__2 = (function (p,v){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5499__auto__.call(null,p,v));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5497__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20257 = function(p,v){
switch(arguments.length){
case 1:
return G__20257__1.call(this,p);
case 2:
return G__20257__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20257.cljs$core$IFn$_invoke$arity$1 = G__20257__1;
G__20257.cljs$core$IFn$_invoke$arity$2 = G__20257__2;
return G__20257;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18078 = arguments.length;
switch (G__18078) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20256(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20256(p,v);
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
cljs.core.async.t_cljs$core$async18115 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18116){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18116 = meta18116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18117,meta18116__$1){
var self__ = this;
var _18117__$1 = this;
return (new cljs.core.async.t_cljs$core$async18115(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18116__$1));
}));

(cljs.core.async.t_cljs$core$async18115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18117){
var self__ = this;
var _18117__$1 = this;
return self__.meta18116;
}));

(cljs.core.async.t_cljs$core$async18115.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18115.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18115.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18115.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18115.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18115.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18115.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18116","meta18116",-1737846963,null)], null);
}));

(cljs.core.async.t_cljs$core$async18115.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18115");

(cljs.core.async.t_cljs$core$async18115.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18115");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18115.
 */
cljs.core.async.__GT_t_cljs$core$async18115 = (function cljs$core$async$__GT_t_cljs$core$async18115(ch,topic_fn,buf_fn,mults,ensure_mult,meta18116){
return (new cljs.core.async.t_cljs$core$async18115(ch,topic_fn,buf_fn,mults,ensure_mult,meta18116));
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
var G__18091 = arguments.length;
switch (G__18091) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18086_SHARP_){
if(cljs.core.truth_((p1__18086_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18086_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18086_SHARP_.call(null,topic)))){
return p1__18086_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18086_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async18115(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__15182__auto___20308 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15183__auto__ = (function (){var switch__13867__auto__ = (function (state_18212){
var state_val_18213 = (state_18212[(1)]);
if((state_val_18213 === (7))){
var inst_18208 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
var statearr_18214_20310 = state_18212__$1;
(statearr_18214_20310[(2)] = inst_18208);

(statearr_18214_20310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (20))){
var state_18212__$1 = state_18212;
var statearr_18216_20314 = state_18212__$1;
(statearr_18216_20314[(2)] = null);

(statearr_18216_20314[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (1))){
var state_18212__$1 = state_18212;
var statearr_18220_20315 = state_18212__$1;
(statearr_18220_20315[(2)] = null);

(statearr_18220_20315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (24))){
var inst_18190 = (state_18212[(7)]);
var inst_18200 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18190);
var state_18212__$1 = state_18212;
var statearr_18222_20316 = state_18212__$1;
(statearr_18222_20316[(2)] = inst_18200);

(statearr_18222_20316[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (4))){
var inst_18133 = (state_18212[(8)]);
var inst_18133__$1 = (state_18212[(2)]);
var inst_18134 = (inst_18133__$1 == null);
var state_18212__$1 = (function (){var statearr_18223 = state_18212;
(statearr_18223[(8)] = inst_18133__$1);

return statearr_18223;
})();
if(cljs.core.truth_(inst_18134)){
var statearr_18224_20323 = state_18212__$1;
(statearr_18224_20323[(1)] = (5));

} else {
var statearr_18225_20325 = state_18212__$1;
(statearr_18225_20325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (15))){
var inst_18182 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
var statearr_18226_20328 = state_18212__$1;
(statearr_18226_20328[(2)] = inst_18182);

(statearr_18226_20328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (21))){
var inst_18205 = (state_18212[(2)]);
var state_18212__$1 = (function (){var statearr_18227 = state_18212;
(statearr_18227[(9)] = inst_18205);

return statearr_18227;
})();
var statearr_18228_20332 = state_18212__$1;
(statearr_18228_20332[(2)] = null);

(statearr_18228_20332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (13))){
var inst_18157 = (state_18212[(10)]);
var inst_18159 = cljs.core.chunked_seq_QMARK_(inst_18157);
var state_18212__$1 = state_18212;
if(inst_18159){
var statearr_18236_20333 = state_18212__$1;
(statearr_18236_20333[(1)] = (16));

} else {
var statearr_18239_20334 = state_18212__$1;
(statearr_18239_20334[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (22))){
var inst_18196 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
if(cljs.core.truth_(inst_18196)){
var statearr_18240_20335 = state_18212__$1;
(statearr_18240_20335[(1)] = (23));

} else {
var statearr_18241_20339 = state_18212__$1;
(statearr_18241_20339[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (6))){
var inst_18133 = (state_18212[(8)]);
var inst_18190 = (state_18212[(7)]);
var inst_18192 = (state_18212[(11)]);
var inst_18190__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18133) : topic_fn.call(null,inst_18133));
var inst_18191 = cljs.core.deref(mults);
var inst_18192__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18191,inst_18190__$1);
var state_18212__$1 = (function (){var statearr_18242 = state_18212;
(statearr_18242[(7)] = inst_18190__$1);

(statearr_18242[(11)] = inst_18192__$1);

return statearr_18242;
})();
if(cljs.core.truth_(inst_18192__$1)){
var statearr_18246_20352 = state_18212__$1;
(statearr_18246_20352[(1)] = (19));

} else {
var statearr_18247_20353 = state_18212__$1;
(statearr_18247_20353[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (25))){
var inst_18202 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
var statearr_18248_20355 = state_18212__$1;
(statearr_18248_20355[(2)] = inst_18202);

(statearr_18248_20355[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (17))){
var inst_18157 = (state_18212[(10)]);
var inst_18172 = cljs.core.first(inst_18157);
var inst_18173 = cljs.core.async.muxch_STAR_(inst_18172);
var inst_18174 = cljs.core.async.close_BANG_(inst_18173);
var inst_18175 = cljs.core.next(inst_18157);
var inst_18143 = inst_18175;
var inst_18144 = null;
var inst_18145 = (0);
var inst_18146 = (0);
var state_18212__$1 = (function (){var statearr_18251 = state_18212;
(statearr_18251[(12)] = inst_18174);

(statearr_18251[(13)] = inst_18143);

(statearr_18251[(14)] = inst_18144);

(statearr_18251[(15)] = inst_18145);

(statearr_18251[(16)] = inst_18146);

return statearr_18251;
})();
var statearr_18252_20357 = state_18212__$1;
(statearr_18252_20357[(2)] = null);

(statearr_18252_20357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (3))){
var inst_18210 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18212__$1,inst_18210);
} else {
if((state_val_18213 === (12))){
var inst_18184 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
var statearr_18254_20361 = state_18212__$1;
(statearr_18254_20361[(2)] = inst_18184);

(statearr_18254_20361[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (2))){
var state_18212__$1 = state_18212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18212__$1,(4),ch);
} else {
if((state_val_18213 === (23))){
var state_18212__$1 = state_18212;
var statearr_18259_20362 = state_18212__$1;
(statearr_18259_20362[(2)] = null);

(statearr_18259_20362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (19))){
var inst_18192 = (state_18212[(11)]);
var inst_18133 = (state_18212[(8)]);
var inst_18194 = cljs.core.async.muxch_STAR_(inst_18192);
var state_18212__$1 = state_18212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18212__$1,(22),inst_18194,inst_18133);
} else {
if((state_val_18213 === (11))){
var inst_18143 = (state_18212[(13)]);
var inst_18157 = (state_18212[(10)]);
var inst_18157__$1 = cljs.core.seq(inst_18143);
var state_18212__$1 = (function (){var statearr_18261 = state_18212;
(statearr_18261[(10)] = inst_18157__$1);

return statearr_18261;
})();
if(inst_18157__$1){
var statearr_18262_20363 = state_18212__$1;
(statearr_18262_20363[(1)] = (13));

} else {
var statearr_18263_20364 = state_18212__$1;
(statearr_18263_20364[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (9))){
var inst_18187 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
var statearr_18264_20365 = state_18212__$1;
(statearr_18264_20365[(2)] = inst_18187);

(statearr_18264_20365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (5))){
var inst_18140 = cljs.core.deref(mults);
var inst_18141 = cljs.core.vals(inst_18140);
var inst_18142 = cljs.core.seq(inst_18141);
var inst_18143 = inst_18142;
var inst_18144 = null;
var inst_18145 = (0);
var inst_18146 = (0);
var state_18212__$1 = (function (){var statearr_18266 = state_18212;
(statearr_18266[(13)] = inst_18143);

(statearr_18266[(14)] = inst_18144);

(statearr_18266[(15)] = inst_18145);

(statearr_18266[(16)] = inst_18146);

return statearr_18266;
})();
var statearr_18267_20367 = state_18212__$1;
(statearr_18267_20367[(2)] = null);

(statearr_18267_20367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (14))){
var state_18212__$1 = state_18212;
var statearr_18273_20369 = state_18212__$1;
(statearr_18273_20369[(2)] = null);

(statearr_18273_20369[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (16))){
var inst_18157 = (state_18212[(10)]);
var inst_18161 = cljs.core.chunk_first(inst_18157);
var inst_18168 = cljs.core.chunk_rest(inst_18157);
var inst_18169 = cljs.core.count(inst_18161);
var inst_18143 = inst_18168;
var inst_18144 = inst_18161;
var inst_18145 = inst_18169;
var inst_18146 = (0);
var state_18212__$1 = (function (){var statearr_18275 = state_18212;
(statearr_18275[(13)] = inst_18143);

(statearr_18275[(14)] = inst_18144);

(statearr_18275[(15)] = inst_18145);

(statearr_18275[(16)] = inst_18146);

return statearr_18275;
})();
var statearr_18276_20370 = state_18212__$1;
(statearr_18276_20370[(2)] = null);

(statearr_18276_20370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (10))){
var inst_18144 = (state_18212[(14)]);
var inst_18146 = (state_18212[(16)]);
var inst_18143 = (state_18212[(13)]);
var inst_18145 = (state_18212[(15)]);
var inst_18151 = cljs.core._nth(inst_18144,inst_18146);
var inst_18152 = cljs.core.async.muxch_STAR_(inst_18151);
var inst_18153 = cljs.core.async.close_BANG_(inst_18152);
var inst_18154 = (inst_18146 + (1));
var tmp18268 = inst_18145;
var tmp18269 = inst_18144;
var tmp18270 = inst_18143;
var inst_18143__$1 = tmp18270;
var inst_18144__$1 = tmp18269;
var inst_18145__$1 = tmp18268;
var inst_18146__$1 = inst_18154;
var state_18212__$1 = (function (){var statearr_18279 = state_18212;
(statearr_18279[(17)] = inst_18153);

(statearr_18279[(13)] = inst_18143__$1);

(statearr_18279[(14)] = inst_18144__$1);

(statearr_18279[(15)] = inst_18145__$1);

(statearr_18279[(16)] = inst_18146__$1);

return statearr_18279;
})();
var statearr_18292_20372 = state_18212__$1;
(statearr_18292_20372[(2)] = null);

(statearr_18292_20372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (18))){
var inst_18179 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
var statearr_18296_20373 = state_18212__$1;
(statearr_18296_20373[(2)] = inst_18179);

(statearr_18296_20373[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (8))){
var inst_18146 = (state_18212[(16)]);
var inst_18145 = (state_18212[(15)]);
var inst_18148 = (inst_18146 < inst_18145);
var inst_18149 = inst_18148;
var state_18212__$1 = state_18212;
if(cljs.core.truth_(inst_18149)){
var statearr_18297_20374 = state_18212__$1;
(statearr_18297_20374[(1)] = (10));

} else {
var statearr_18298_20375 = state_18212__$1;
(statearr_18298_20375[(1)] = (11));

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
var cljs$core$async$state_machine__13868__auto__ = null;
var cljs$core$async$state_machine__13868__auto____0 = (function (){
var statearr_18302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18302[(0)] = cljs$core$async$state_machine__13868__auto__);

(statearr_18302[(1)] = (1));

return statearr_18302;
});
var cljs$core$async$state_machine__13868__auto____1 = (function (state_18212){
while(true){
var ret_value__13870__auto__ = (function (){try{while(true){
var result__13871__auto__ = switch__13867__auto__(state_18212);
if(cljs.core.keyword_identical_QMARK_(result__13871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13871__auto__;
}
break;
}
}catch (e18303){var ex__13872__auto__ = e18303;
var statearr_18304_20379 = state_18212;
(statearr_18304_20379[(2)] = ex__13872__auto__);


if(cljs.core.seq((state_18212[(4)]))){
var statearr_18305_20380 = state_18212;
(statearr_18305_20380[(1)] = cljs.core.first((state_18212[(4)])));

} else {
throw ex__13872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20381 = state_18212;
state_18212 = G__20381;
continue;
} else {
return ret_value__13870__auto__;
}
break;
}
});
cljs$core$async$state_machine__13868__auto__ = function(state_18212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13868__auto____1.call(this,state_18212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13868__auto____0;
cljs$core$async$state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13868__auto____1;
return cljs$core$async$state_machine__13868__auto__;
})()
})();
var state__15184__auto__ = (function (){var statearr_18310 = f__15183__auto__();
(statearr_18310[(6)] = c__15182__auto___20308);

return statearr_18310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15184__auto__);
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
var G__18312 = arguments.length;
switch (G__18312) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__18323 = arguments.length;
switch (G__18323) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__18337 = arguments.length;
switch (G__18337) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var c__15182__auto___20415 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15183__auto__ = (function (){var switch__13867__auto__ = (function (state_18415){
var state_val_18416 = (state_18415[(1)]);
if((state_val_18416 === (7))){
var state_18415__$1 = state_18415;
var statearr_18429_20416 = state_18415__$1;
(statearr_18429_20416[(2)] = null);

(statearr_18429_20416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (1))){
var state_18415__$1 = state_18415;
var statearr_18430_20420 = state_18415__$1;
(statearr_18430_20420[(2)] = null);

(statearr_18430_20420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (4))){
var inst_18370 = (state_18415[(7)]);
var inst_18368 = (state_18415[(8)]);
var inst_18373 = (inst_18370 < inst_18368);
var state_18415__$1 = state_18415;
if(cljs.core.truth_(inst_18373)){
var statearr_18431_20421 = state_18415__$1;
(statearr_18431_20421[(1)] = (6));

} else {
var statearr_18434_20422 = state_18415__$1;
(statearr_18434_20422[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (15))){
var inst_18398 = (state_18415[(9)]);
var inst_18403 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18398);
var state_18415__$1 = state_18415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18415__$1,(17),out,inst_18403);
} else {
if((state_val_18416 === (13))){
var inst_18398 = (state_18415[(9)]);
var inst_18398__$1 = (state_18415[(2)]);
var inst_18399 = cljs.core.some(cljs.core.nil_QMARK_,inst_18398__$1);
var state_18415__$1 = (function (){var statearr_18452 = state_18415;
(statearr_18452[(9)] = inst_18398__$1);

return statearr_18452;
})();
if(cljs.core.truth_(inst_18399)){
var statearr_18453_20424 = state_18415__$1;
(statearr_18453_20424[(1)] = (14));

} else {
var statearr_18454_20425 = state_18415__$1;
(statearr_18454_20425[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (6))){
var state_18415__$1 = state_18415;
var statearr_18459_20427 = state_18415__$1;
(statearr_18459_20427[(2)] = null);

(statearr_18459_20427[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (17))){
var inst_18405 = (state_18415[(2)]);
var state_18415__$1 = (function (){var statearr_18472 = state_18415;
(statearr_18472[(10)] = inst_18405);

return statearr_18472;
})();
var statearr_18476_20428 = state_18415__$1;
(statearr_18476_20428[(2)] = null);

(statearr_18476_20428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (3))){
var inst_18410 = (state_18415[(2)]);
var state_18415__$1 = state_18415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18415__$1,inst_18410);
} else {
if((state_val_18416 === (12))){
var _ = (function (){var statearr_18477 = state_18415;
(statearr_18477[(4)] = cljs.core.rest((state_18415[(4)])));

return statearr_18477;
})();
var state_18415__$1 = state_18415;
var ex18470 = (state_18415__$1[(2)]);
var statearr_18478_20430 = state_18415__$1;
(statearr_18478_20430[(5)] = ex18470);


if((ex18470 instanceof Object)){
var statearr_18481_20431 = state_18415__$1;
(statearr_18481_20431[(1)] = (11));

(statearr_18481_20431[(5)] = null);

} else {
throw ex18470;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (2))){
var inst_18365 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18368 = cnt;
var inst_18370 = (0);
var state_18415__$1 = (function (){var statearr_18488 = state_18415;
(statearr_18488[(11)] = inst_18365);

(statearr_18488[(8)] = inst_18368);

(statearr_18488[(7)] = inst_18370);

return statearr_18488;
})();
var statearr_18489_20432 = state_18415__$1;
(statearr_18489_20432[(2)] = null);

(statearr_18489_20432[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (11))){
var inst_18375 = (state_18415[(2)]);
var inst_18377 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18415__$1 = (function (){var statearr_18492 = state_18415;
(statearr_18492[(12)] = inst_18375);

return statearr_18492;
})();
var statearr_18493_20433 = state_18415__$1;
(statearr_18493_20433[(2)] = inst_18377);

(statearr_18493_20433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (9))){
var inst_18370 = (state_18415[(7)]);
var _ = (function (){var statearr_18494 = state_18415;
(statearr_18494[(4)] = cljs.core.cons((12),(state_18415[(4)])));

return statearr_18494;
})();
var inst_18383 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18370) : chs__$1.call(null,inst_18370));
var inst_18384 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18370) : done.call(null,inst_18370));
var inst_18385 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18383,inst_18384);
var ___$1 = (function (){var statearr_18495 = state_18415;
(statearr_18495[(4)] = cljs.core.rest((state_18415[(4)])));

return statearr_18495;
})();
var state_18415__$1 = state_18415;
var statearr_18496_20435 = state_18415__$1;
(statearr_18496_20435[(2)] = inst_18385);

(statearr_18496_20435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (5))){
var inst_18395 = (state_18415[(2)]);
var state_18415__$1 = (function (){var statearr_18497 = state_18415;
(statearr_18497[(13)] = inst_18395);

return statearr_18497;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18415__$1,(13),dchan);
} else {
if((state_val_18416 === (14))){
var inst_18401 = cljs.core.async.close_BANG_(out);
var state_18415__$1 = state_18415;
var statearr_18498_20436 = state_18415__$1;
(statearr_18498_20436[(2)] = inst_18401);

(statearr_18498_20436[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (16))){
var inst_18408 = (state_18415[(2)]);
var state_18415__$1 = state_18415;
var statearr_18499_20437 = state_18415__$1;
(statearr_18499_20437[(2)] = inst_18408);

(statearr_18499_20437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (10))){
var inst_18370 = (state_18415[(7)]);
var inst_18388 = (state_18415[(2)]);
var inst_18389 = (inst_18370 + (1));
var inst_18370__$1 = inst_18389;
var state_18415__$1 = (function (){var statearr_18500 = state_18415;
(statearr_18500[(14)] = inst_18388);

(statearr_18500[(7)] = inst_18370__$1);

return statearr_18500;
})();
var statearr_18501_20438 = state_18415__$1;
(statearr_18501_20438[(2)] = null);

(statearr_18501_20438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18416 === (8))){
var inst_18393 = (state_18415[(2)]);
var state_18415__$1 = state_18415;
var statearr_18502_20439 = state_18415__$1;
(statearr_18502_20439[(2)] = inst_18393);

(statearr_18502_20439[(1)] = (5));


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
var cljs$core$async$state_machine__13868__auto__ = null;
var cljs$core$async$state_machine__13868__auto____0 = (function (){
var statearr_18503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18503[(0)] = cljs$core$async$state_machine__13868__auto__);

(statearr_18503[(1)] = (1));

return statearr_18503;
});
var cljs$core$async$state_machine__13868__auto____1 = (function (state_18415){
while(true){
var ret_value__13870__auto__ = (function (){try{while(true){
var result__13871__auto__ = switch__13867__auto__(state_18415);
if(cljs.core.keyword_identical_QMARK_(result__13871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13871__auto__;
}
break;
}
}catch (e18504){var ex__13872__auto__ = e18504;
var statearr_18505_20440 = state_18415;
(statearr_18505_20440[(2)] = ex__13872__auto__);


if(cljs.core.seq((state_18415[(4)]))){
var statearr_18506_20441 = state_18415;
(statearr_18506_20441[(1)] = cljs.core.first((state_18415[(4)])));

} else {
throw ex__13872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20442 = state_18415;
state_18415 = G__20442;
continue;
} else {
return ret_value__13870__auto__;
}
break;
}
});
cljs$core$async$state_machine__13868__auto__ = function(state_18415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13868__auto____1.call(this,state_18415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13868__auto____0;
cljs$core$async$state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13868__auto____1;
return cljs$core$async$state_machine__13868__auto__;
})()
})();
var state__15184__auto__ = (function (){var statearr_18508 = f__15183__auto__();
(statearr_18508[(6)] = c__15182__auto___20415);

return statearr_18508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15184__auto__);
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
var G__18518 = arguments.length;
switch (G__18518) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15182__auto___20446 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15183__auto__ = (function (){var switch__13867__auto__ = (function (state_18570){
var state_val_18571 = (state_18570[(1)]);
if((state_val_18571 === (7))){
var inst_18533 = (state_18570[(7)]);
var inst_18537 = (state_18570[(8)]);
var inst_18533__$1 = (state_18570[(2)]);
var inst_18537__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18533__$1,(0),null);
var inst_18538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18533__$1,(1),null);
var inst_18550 = (inst_18537__$1 == null);
var state_18570__$1 = (function (){var statearr_18576 = state_18570;
(statearr_18576[(7)] = inst_18533__$1);

(statearr_18576[(8)] = inst_18537__$1);

(statearr_18576[(9)] = inst_18538);

return statearr_18576;
})();
if(cljs.core.truth_(inst_18550)){
var statearr_18578_20447 = state_18570__$1;
(statearr_18578_20447[(1)] = (8));

} else {
var statearr_18579_20448 = state_18570__$1;
(statearr_18579_20448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18571 === (1))){
var inst_18522 = cljs.core.vec(chs);
var inst_18523 = inst_18522;
var state_18570__$1 = (function (){var statearr_18580 = state_18570;
(statearr_18580[(10)] = inst_18523);

return statearr_18580;
})();
var statearr_18581_20449 = state_18570__$1;
(statearr_18581_20449[(2)] = null);

(statearr_18581_20449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18571 === (4))){
var inst_18523 = (state_18570[(10)]);
var state_18570__$1 = state_18570;
return cljs.core.async.ioc_alts_BANG_(state_18570__$1,(7),inst_18523);
} else {
if((state_val_18571 === (6))){
var inst_18564 = (state_18570[(2)]);
var state_18570__$1 = state_18570;
var statearr_18584_20452 = state_18570__$1;
(statearr_18584_20452[(2)] = inst_18564);

(statearr_18584_20452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18571 === (3))){
var inst_18566 = (state_18570[(2)]);
var state_18570__$1 = state_18570;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18570__$1,inst_18566);
} else {
if((state_val_18571 === (2))){
var inst_18523 = (state_18570[(10)]);
var inst_18526 = cljs.core.count(inst_18523);
var inst_18527 = (inst_18526 > (0));
var state_18570__$1 = state_18570;
if(cljs.core.truth_(inst_18527)){
var statearr_18586_20454 = state_18570__$1;
(statearr_18586_20454[(1)] = (4));

} else {
var statearr_18587_20455 = state_18570__$1;
(statearr_18587_20455[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18571 === (11))){
var inst_18523 = (state_18570[(10)]);
var inst_18557 = (state_18570[(2)]);
var tmp18585 = inst_18523;
var inst_18523__$1 = tmp18585;
var state_18570__$1 = (function (){var statearr_18588 = state_18570;
(statearr_18588[(11)] = inst_18557);

(statearr_18588[(10)] = inst_18523__$1);

return statearr_18588;
})();
var statearr_18589_20457 = state_18570__$1;
(statearr_18589_20457[(2)] = null);

(statearr_18589_20457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18571 === (9))){
var inst_18537 = (state_18570[(8)]);
var state_18570__$1 = state_18570;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18570__$1,(11),out,inst_18537);
} else {
if((state_val_18571 === (5))){
var inst_18562 = cljs.core.async.close_BANG_(out);
var state_18570__$1 = state_18570;
var statearr_18597_20458 = state_18570__$1;
(statearr_18597_20458[(2)] = inst_18562);

(statearr_18597_20458[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18571 === (10))){
var inst_18560 = (state_18570[(2)]);
var state_18570__$1 = state_18570;
var statearr_18598_20459 = state_18570__$1;
(statearr_18598_20459[(2)] = inst_18560);

(statearr_18598_20459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18571 === (8))){
var inst_18523 = (state_18570[(10)]);
var inst_18533 = (state_18570[(7)]);
var inst_18537 = (state_18570[(8)]);
var inst_18538 = (state_18570[(9)]);
var inst_18552 = (function (){var cs = inst_18523;
var vec__18529 = inst_18533;
var v = inst_18537;
var c = inst_18538;
return (function (p1__18515_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18515_SHARP_);
});
})();
var inst_18553 = cljs.core.filterv(inst_18552,inst_18523);
var inst_18523__$1 = inst_18553;
var state_18570__$1 = (function (){var statearr_18603 = state_18570;
(statearr_18603[(10)] = inst_18523__$1);

return statearr_18603;
})();
var statearr_18607_20461 = state_18570__$1;
(statearr_18607_20461[(2)] = null);

(statearr_18607_20461[(1)] = (2));


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
var cljs$core$async$state_machine__13868__auto__ = null;
var cljs$core$async$state_machine__13868__auto____0 = (function (){
var statearr_18638 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18638[(0)] = cljs$core$async$state_machine__13868__auto__);

(statearr_18638[(1)] = (1));

return statearr_18638;
});
var cljs$core$async$state_machine__13868__auto____1 = (function (state_18570){
while(true){
var ret_value__13870__auto__ = (function (){try{while(true){
var result__13871__auto__ = switch__13867__auto__(state_18570);
if(cljs.core.keyword_identical_QMARK_(result__13871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13871__auto__;
}
break;
}
}catch (e18639){var ex__13872__auto__ = e18639;
var statearr_18646_20463 = state_18570;
(statearr_18646_20463[(2)] = ex__13872__auto__);


if(cljs.core.seq((state_18570[(4)]))){
var statearr_18650_20464 = state_18570;
(statearr_18650_20464[(1)] = cljs.core.first((state_18570[(4)])));

} else {
throw ex__13872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20465 = state_18570;
state_18570 = G__20465;
continue;
} else {
return ret_value__13870__auto__;
}
break;
}
});
cljs$core$async$state_machine__13868__auto__ = function(state_18570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13868__auto____1.call(this,state_18570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13868__auto____0;
cljs$core$async$state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13868__auto____1;
return cljs$core$async$state_machine__13868__auto__;
})()
})();
var state__15184__auto__ = (function (){var statearr_18652 = f__15183__auto__();
(statearr_18652[(6)] = c__15182__auto___20446);

return statearr_18652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15184__auto__);
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
var G__18663 = arguments.length;
switch (G__18663) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15182__auto___20467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15183__auto__ = (function (){var switch__13867__auto__ = (function (state_18697){
var state_val_18698 = (state_18697[(1)]);
if((state_val_18698 === (7))){
var inst_18679 = (state_18697[(7)]);
var inst_18679__$1 = (state_18697[(2)]);
var inst_18680 = (inst_18679__$1 == null);
var inst_18681 = cljs.core.not(inst_18680);
var state_18697__$1 = (function (){var statearr_18705 = state_18697;
(statearr_18705[(7)] = inst_18679__$1);

return statearr_18705;
})();
if(inst_18681){
var statearr_18706_20469 = state_18697__$1;
(statearr_18706_20469[(1)] = (8));

} else {
var statearr_18707_20470 = state_18697__$1;
(statearr_18707_20470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18698 === (1))){
var inst_18668 = (0);
var state_18697__$1 = (function (){var statearr_18712 = state_18697;
(statearr_18712[(8)] = inst_18668);

return statearr_18712;
})();
var statearr_18713_20471 = state_18697__$1;
(statearr_18713_20471[(2)] = null);

(statearr_18713_20471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18698 === (4))){
var state_18697__$1 = state_18697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18697__$1,(7),ch);
} else {
if((state_val_18698 === (6))){
var inst_18692 = (state_18697[(2)]);
var state_18697__$1 = state_18697;
var statearr_18715_20472 = state_18697__$1;
(statearr_18715_20472[(2)] = inst_18692);

(statearr_18715_20472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18698 === (3))){
var inst_18694 = (state_18697[(2)]);
var inst_18695 = cljs.core.async.close_BANG_(out);
var state_18697__$1 = (function (){var statearr_18716 = state_18697;
(statearr_18716[(9)] = inst_18694);

return statearr_18716;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18697__$1,inst_18695);
} else {
if((state_val_18698 === (2))){
var inst_18668 = (state_18697[(8)]);
var inst_18676 = (inst_18668 < n);
var state_18697__$1 = state_18697;
if(cljs.core.truth_(inst_18676)){
var statearr_18717_20480 = state_18697__$1;
(statearr_18717_20480[(1)] = (4));

} else {
var statearr_18718_20481 = state_18697__$1;
(statearr_18718_20481[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18698 === (11))){
var inst_18668 = (state_18697[(8)]);
var inst_18684 = (state_18697[(2)]);
var inst_18685 = (inst_18668 + (1));
var inst_18668__$1 = inst_18685;
var state_18697__$1 = (function (){var statearr_18719 = state_18697;
(statearr_18719[(10)] = inst_18684);

(statearr_18719[(8)] = inst_18668__$1);

return statearr_18719;
})();
var statearr_18720_20483 = state_18697__$1;
(statearr_18720_20483[(2)] = null);

(statearr_18720_20483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18698 === (9))){
var state_18697__$1 = state_18697;
var statearr_18726_20485 = state_18697__$1;
(statearr_18726_20485[(2)] = null);

(statearr_18726_20485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18698 === (5))){
var state_18697__$1 = state_18697;
var statearr_18727_20486 = state_18697__$1;
(statearr_18727_20486[(2)] = null);

(statearr_18727_20486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18698 === (10))){
var inst_18689 = (state_18697[(2)]);
var state_18697__$1 = state_18697;
var statearr_18733_20489 = state_18697__$1;
(statearr_18733_20489[(2)] = inst_18689);

(statearr_18733_20489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18698 === (8))){
var inst_18679 = (state_18697[(7)]);
var state_18697__$1 = state_18697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18697__$1,(11),out,inst_18679);
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
var cljs$core$async$state_machine__13868__auto__ = null;
var cljs$core$async$state_machine__13868__auto____0 = (function (){
var statearr_18734 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18734[(0)] = cljs$core$async$state_machine__13868__auto__);

(statearr_18734[(1)] = (1));

return statearr_18734;
});
var cljs$core$async$state_machine__13868__auto____1 = (function (state_18697){
while(true){
var ret_value__13870__auto__ = (function (){try{while(true){
var result__13871__auto__ = switch__13867__auto__(state_18697);
if(cljs.core.keyword_identical_QMARK_(result__13871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13871__auto__;
}
break;
}
}catch (e18735){var ex__13872__auto__ = e18735;
var statearr_18736_20497 = state_18697;
(statearr_18736_20497[(2)] = ex__13872__auto__);


if(cljs.core.seq((state_18697[(4)]))){
var statearr_18737_20499 = state_18697;
(statearr_18737_20499[(1)] = cljs.core.first((state_18697[(4)])));

} else {
throw ex__13872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20500 = state_18697;
state_18697 = G__20500;
continue;
} else {
return ret_value__13870__auto__;
}
break;
}
});
cljs$core$async$state_machine__13868__auto__ = function(state_18697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13868__auto____1.call(this,state_18697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13868__auto____0;
cljs$core$async$state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13868__auto____1;
return cljs$core$async$state_machine__13868__auto__;
})()
})();
var state__15184__auto__ = (function (){var statearr_18739 = f__15183__auto__();
(statearr_18739[(6)] = c__15182__auto___20467);

return statearr_18739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15184__auto__);
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
cljs.core.async.t_cljs$core$async18759 = (function (f,ch,meta18752,_,fn1,meta18760){
this.f = f;
this.ch = ch;
this.meta18752 = meta18752;
this._ = _;
this.fn1 = fn1;
this.meta18760 = meta18760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18761,meta18760__$1){
var self__ = this;
var _18761__$1 = this;
return (new cljs.core.async.t_cljs$core$async18759(self__.f,self__.ch,self__.meta18752,self__._,self__.fn1,meta18760__$1));
}));

(cljs.core.async.t_cljs$core$async18759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18761){
var self__ = this;
var _18761__$1 = this;
return self__.meta18760;
}));

(cljs.core.async.t_cljs$core$async18759.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18759.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18759.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18759.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18750_SHARP_){
var G__18772 = (((p1__18750_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18750_SHARP_) : self__.f.call(null,p1__18750_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18772) : f1.call(null,G__18772));
});
}));

(cljs.core.async.t_cljs$core$async18759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18752","meta18752",1003682893,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18751","cljs.core.async/t_cljs$core$async18751",1998511092,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18760","meta18760",-911799787,null)], null);
}));

(cljs.core.async.t_cljs$core$async18759.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18759");

(cljs.core.async.t_cljs$core$async18759.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18759");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18759.
 */
cljs.core.async.__GT_t_cljs$core$async18759 = (function cljs$core$async$__GT_t_cljs$core$async18759(f,ch,meta18752,_,fn1,meta18760){
return (new cljs.core.async.t_cljs$core$async18759(f,ch,meta18752,_,fn1,meta18760));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18751 = (function (f,ch,meta18752){
this.f = f;
this.ch = ch;
this.meta18752 = meta18752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18753,meta18752__$1){
var self__ = this;
var _18753__$1 = this;
return (new cljs.core.async.t_cljs$core$async18751(self__.f,self__.ch,meta18752__$1));
}));

(cljs.core.async.t_cljs$core$async18751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18753){
var self__ = this;
var _18753__$1 = this;
return self__.meta18752;
}));

(cljs.core.async.t_cljs$core$async18751.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18751.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18751.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18751.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18751.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18759(self__.f,self__.ch,self__.meta18752,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18791 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18791) : self__.f.call(null,G__18791));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18751.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18751.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18752","meta18752",1003682893,null)], null);
}));

(cljs.core.async.t_cljs$core$async18751.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18751");

(cljs.core.async.t_cljs$core$async18751.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18751");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18751.
 */
cljs.core.async.__GT_t_cljs$core$async18751 = (function cljs$core$async$__GT_t_cljs$core$async18751(f,ch,meta18752){
return (new cljs.core.async.t_cljs$core$async18751(f,ch,meta18752));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18751(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18799 = (function (f,ch,meta18800){
this.f = f;
this.ch = ch;
this.meta18800 = meta18800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18801,meta18800__$1){
var self__ = this;
var _18801__$1 = this;
return (new cljs.core.async.t_cljs$core$async18799(self__.f,self__.ch,meta18800__$1));
}));

(cljs.core.async.t_cljs$core$async18799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18801){
var self__ = this;
var _18801__$1 = this;
return self__.meta18800;
}));

(cljs.core.async.t_cljs$core$async18799.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18799.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18799.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18799.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18799.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18799.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18800","meta18800",-195924389,null)], null);
}));

(cljs.core.async.t_cljs$core$async18799.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18799");

(cljs.core.async.t_cljs$core$async18799.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18799");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18799.
 */
cljs.core.async.__GT_t_cljs$core$async18799 = (function cljs$core$async$__GT_t_cljs$core$async18799(f,ch,meta18800){
return (new cljs.core.async.t_cljs$core$async18799(f,ch,meta18800));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18799(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18823 = (function (p,ch,meta18824){
this.p = p;
this.ch = ch;
this.meta18824 = meta18824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18825,meta18824__$1){
var self__ = this;
var _18825__$1 = this;
return (new cljs.core.async.t_cljs$core$async18823(self__.p,self__.ch,meta18824__$1));
}));

(cljs.core.async.t_cljs$core$async18823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18825){
var self__ = this;
var _18825__$1 = this;
return self__.meta18824;
}));

(cljs.core.async.t_cljs$core$async18823.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18823.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18823.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18823.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18823.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18823.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18823.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18823.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18824","meta18824",-1900744380,null)], null);
}));

(cljs.core.async.t_cljs$core$async18823.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18823");

(cljs.core.async.t_cljs$core$async18823.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18823");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18823.
 */
cljs.core.async.__GT_t_cljs$core$async18823 = (function cljs$core$async$__GT_t_cljs$core$async18823(p,ch,meta18824){
return (new cljs.core.async.t_cljs$core$async18823(p,ch,meta18824));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18823(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18844 = arguments.length;
switch (G__18844) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15182__auto___20545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15183__auto__ = (function (){var switch__13867__auto__ = (function (state_18878){
var state_val_18879 = (state_18878[(1)]);
if((state_val_18879 === (7))){
var inst_18874 = (state_18878[(2)]);
var state_18878__$1 = state_18878;
var statearr_18889_20548 = state_18878__$1;
(statearr_18889_20548[(2)] = inst_18874);

(statearr_18889_20548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18879 === (1))){
var state_18878__$1 = state_18878;
var statearr_18890_20549 = state_18878__$1;
(statearr_18890_20549[(2)] = null);

(statearr_18890_20549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18879 === (4))){
var inst_18860 = (state_18878[(7)]);
var inst_18860__$1 = (state_18878[(2)]);
var inst_18861 = (inst_18860__$1 == null);
var state_18878__$1 = (function (){var statearr_18891 = state_18878;
(statearr_18891[(7)] = inst_18860__$1);

return statearr_18891;
})();
if(cljs.core.truth_(inst_18861)){
var statearr_18892_20551 = state_18878__$1;
(statearr_18892_20551[(1)] = (5));

} else {
var statearr_18893_20552 = state_18878__$1;
(statearr_18893_20552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18879 === (6))){
var inst_18860 = (state_18878[(7)]);
var inst_18865 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18860) : p.call(null,inst_18860));
var state_18878__$1 = state_18878;
if(cljs.core.truth_(inst_18865)){
var statearr_18894_20556 = state_18878__$1;
(statearr_18894_20556[(1)] = (8));

} else {
var statearr_18895_20557 = state_18878__$1;
(statearr_18895_20557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18879 === (3))){
var inst_18876 = (state_18878[(2)]);
var state_18878__$1 = state_18878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18878__$1,inst_18876);
} else {
if((state_val_18879 === (2))){
var state_18878__$1 = state_18878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18878__$1,(4),ch);
} else {
if((state_val_18879 === (11))){
var inst_18868 = (state_18878[(2)]);
var state_18878__$1 = state_18878;
var statearr_18898_20558 = state_18878__$1;
(statearr_18898_20558[(2)] = inst_18868);

(statearr_18898_20558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18879 === (9))){
var state_18878__$1 = state_18878;
var statearr_18899_20559 = state_18878__$1;
(statearr_18899_20559[(2)] = null);

(statearr_18899_20559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18879 === (5))){
var inst_18863 = cljs.core.async.close_BANG_(out);
var state_18878__$1 = state_18878;
var statearr_18900_20560 = state_18878__$1;
(statearr_18900_20560[(2)] = inst_18863);

(statearr_18900_20560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18879 === (10))){
var inst_18871 = (state_18878[(2)]);
var state_18878__$1 = (function (){var statearr_18901 = state_18878;
(statearr_18901[(8)] = inst_18871);

return statearr_18901;
})();
var statearr_18902_20561 = state_18878__$1;
(statearr_18902_20561[(2)] = null);

(statearr_18902_20561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18879 === (8))){
var inst_18860 = (state_18878[(7)]);
var state_18878__$1 = state_18878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18878__$1,(11),out,inst_18860);
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
var cljs$core$async$state_machine__13868__auto__ = null;
var cljs$core$async$state_machine__13868__auto____0 = (function (){
var statearr_18905 = [null,null,null,null,null,null,null,null,null];
(statearr_18905[(0)] = cljs$core$async$state_machine__13868__auto__);

(statearr_18905[(1)] = (1));

return statearr_18905;
});
var cljs$core$async$state_machine__13868__auto____1 = (function (state_18878){
while(true){
var ret_value__13870__auto__ = (function (){try{while(true){
var result__13871__auto__ = switch__13867__auto__(state_18878);
if(cljs.core.keyword_identical_QMARK_(result__13871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13871__auto__;
}
break;
}
}catch (e18906){var ex__13872__auto__ = e18906;
var statearr_18913_20565 = state_18878;
(statearr_18913_20565[(2)] = ex__13872__auto__);


if(cljs.core.seq((state_18878[(4)]))){
var statearr_18914_20566 = state_18878;
(statearr_18914_20566[(1)] = cljs.core.first((state_18878[(4)])));

} else {
throw ex__13872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20568 = state_18878;
state_18878 = G__20568;
continue;
} else {
return ret_value__13870__auto__;
}
break;
}
});
cljs$core$async$state_machine__13868__auto__ = function(state_18878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13868__auto____1.call(this,state_18878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13868__auto____0;
cljs$core$async$state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13868__auto____1;
return cljs$core$async$state_machine__13868__auto__;
})()
})();
var state__15184__auto__ = (function (){var statearr_18916 = f__15183__auto__();
(statearr_18916[(6)] = c__15182__auto___20545);

return statearr_18916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15184__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18919 = arguments.length;
switch (G__18919) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var c__15182__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15183__auto__ = (function (){var switch__13867__auto__ = (function (state_18999){
var state_val_19000 = (state_18999[(1)]);
if((state_val_19000 === (7))){
var inst_18995 = (state_18999[(2)]);
var state_18999__$1 = state_18999;
var statearr_19004_20577 = state_18999__$1;
(statearr_19004_20577[(2)] = inst_18995);

(statearr_19004_20577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (20))){
var inst_18961 = (state_18999[(7)]);
var inst_18972 = (state_18999[(2)]);
var inst_18973 = cljs.core.next(inst_18961);
var inst_18938 = inst_18973;
var inst_18940 = null;
var inst_18942 = (0);
var inst_18945 = (0);
var state_18999__$1 = (function (){var statearr_19006 = state_18999;
(statearr_19006[(8)] = inst_18972);

(statearr_19006[(9)] = inst_18938);

(statearr_19006[(10)] = inst_18940);

(statearr_19006[(11)] = inst_18942);

(statearr_19006[(12)] = inst_18945);

return statearr_19006;
})();
var statearr_19007_20580 = state_18999__$1;
(statearr_19007_20580[(2)] = null);

(statearr_19007_20580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (1))){
var state_18999__$1 = state_18999;
var statearr_19008_20582 = state_18999__$1;
(statearr_19008_20582[(2)] = null);

(statearr_19008_20582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (4))){
var inst_18927 = (state_18999[(13)]);
var inst_18927__$1 = (state_18999[(2)]);
var inst_18928 = (inst_18927__$1 == null);
var state_18999__$1 = (function (){var statearr_19014 = state_18999;
(statearr_19014[(13)] = inst_18927__$1);

return statearr_19014;
})();
if(cljs.core.truth_(inst_18928)){
var statearr_19015_20588 = state_18999__$1;
(statearr_19015_20588[(1)] = (5));

} else {
var statearr_19016_20589 = state_18999__$1;
(statearr_19016_20589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (15))){
var state_18999__$1 = state_18999;
var statearr_19024_20591 = state_18999__$1;
(statearr_19024_20591[(2)] = null);

(statearr_19024_20591[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (21))){
var state_18999__$1 = state_18999;
var statearr_19025_20592 = state_18999__$1;
(statearr_19025_20592[(2)] = null);

(statearr_19025_20592[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (13))){
var inst_18945 = (state_18999[(12)]);
var inst_18938 = (state_18999[(9)]);
var inst_18940 = (state_18999[(10)]);
var inst_18942 = (state_18999[(11)]);
var inst_18957 = (state_18999[(2)]);
var inst_18958 = (inst_18945 + (1));
var tmp19021 = inst_18940;
var tmp19022 = inst_18938;
var tmp19023 = inst_18942;
var inst_18938__$1 = tmp19022;
var inst_18940__$1 = tmp19021;
var inst_18942__$1 = tmp19023;
var inst_18945__$1 = inst_18958;
var state_18999__$1 = (function (){var statearr_19026 = state_18999;
(statearr_19026[(14)] = inst_18957);

(statearr_19026[(9)] = inst_18938__$1);

(statearr_19026[(10)] = inst_18940__$1);

(statearr_19026[(11)] = inst_18942__$1);

(statearr_19026[(12)] = inst_18945__$1);

return statearr_19026;
})();
var statearr_19027_20621 = state_18999__$1;
(statearr_19027_20621[(2)] = null);

(statearr_19027_20621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (22))){
var state_18999__$1 = state_18999;
var statearr_19029_20626 = state_18999__$1;
(statearr_19029_20626[(2)] = null);

(statearr_19029_20626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (6))){
var inst_18927 = (state_18999[(13)]);
var inst_18936 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18927) : f.call(null,inst_18927));
var inst_18937 = cljs.core.seq(inst_18936);
var inst_18938 = inst_18937;
var inst_18940 = null;
var inst_18942 = (0);
var inst_18945 = (0);
var state_18999__$1 = (function (){var statearr_19031 = state_18999;
(statearr_19031[(9)] = inst_18938);

(statearr_19031[(10)] = inst_18940);

(statearr_19031[(11)] = inst_18942);

(statearr_19031[(12)] = inst_18945);

return statearr_19031;
})();
var statearr_19032_20628 = state_18999__$1;
(statearr_19032_20628[(2)] = null);

(statearr_19032_20628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (17))){
var inst_18961 = (state_18999[(7)]);
var inst_18965 = cljs.core.chunk_first(inst_18961);
var inst_18966 = cljs.core.chunk_rest(inst_18961);
var inst_18967 = cljs.core.count(inst_18965);
var inst_18938 = inst_18966;
var inst_18940 = inst_18965;
var inst_18942 = inst_18967;
var inst_18945 = (0);
var state_18999__$1 = (function (){var statearr_19033 = state_18999;
(statearr_19033[(9)] = inst_18938);

(statearr_19033[(10)] = inst_18940);

(statearr_19033[(11)] = inst_18942);

(statearr_19033[(12)] = inst_18945);

return statearr_19033;
})();
var statearr_19034_20635 = state_18999__$1;
(statearr_19034_20635[(2)] = null);

(statearr_19034_20635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (3))){
var inst_18997 = (state_18999[(2)]);
var state_18999__$1 = state_18999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18999__$1,inst_18997);
} else {
if((state_val_19000 === (12))){
var inst_18981 = (state_18999[(2)]);
var state_18999__$1 = state_18999;
var statearr_19039_20636 = state_18999__$1;
(statearr_19039_20636[(2)] = inst_18981);

(statearr_19039_20636[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (2))){
var state_18999__$1 = state_18999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18999__$1,(4),in$);
} else {
if((state_val_19000 === (23))){
var inst_18993 = (state_18999[(2)]);
var state_18999__$1 = state_18999;
var statearr_19041_20639 = state_18999__$1;
(statearr_19041_20639[(2)] = inst_18993);

(statearr_19041_20639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (19))){
var inst_18976 = (state_18999[(2)]);
var state_18999__$1 = state_18999;
var statearr_19042_20644 = state_18999__$1;
(statearr_19042_20644[(2)] = inst_18976);

(statearr_19042_20644[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (11))){
var inst_18938 = (state_18999[(9)]);
var inst_18961 = (state_18999[(7)]);
var inst_18961__$1 = cljs.core.seq(inst_18938);
var state_18999__$1 = (function (){var statearr_19043 = state_18999;
(statearr_19043[(7)] = inst_18961__$1);

return statearr_19043;
})();
if(inst_18961__$1){
var statearr_19045_20645 = state_18999__$1;
(statearr_19045_20645[(1)] = (14));

} else {
var statearr_19046_20646 = state_18999__$1;
(statearr_19046_20646[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (9))){
var inst_18983 = (state_18999[(2)]);
var inst_18984 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18999__$1 = (function (){var statearr_19047 = state_18999;
(statearr_19047[(15)] = inst_18983);

return statearr_19047;
})();
if(cljs.core.truth_(inst_18984)){
var statearr_19048_20647 = state_18999__$1;
(statearr_19048_20647[(1)] = (21));

} else {
var statearr_19049_20648 = state_18999__$1;
(statearr_19049_20648[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (5))){
var inst_18930 = cljs.core.async.close_BANG_(out);
var state_18999__$1 = state_18999;
var statearr_19050_20649 = state_18999__$1;
(statearr_19050_20649[(2)] = inst_18930);

(statearr_19050_20649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (14))){
var inst_18961 = (state_18999[(7)]);
var inst_18963 = cljs.core.chunked_seq_QMARK_(inst_18961);
var state_18999__$1 = state_18999;
if(inst_18963){
var statearr_19052_20650 = state_18999__$1;
(statearr_19052_20650[(1)] = (17));

} else {
var statearr_19053_20651 = state_18999__$1;
(statearr_19053_20651[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (16))){
var inst_18979 = (state_18999[(2)]);
var state_18999__$1 = state_18999;
var statearr_19054_20653 = state_18999__$1;
(statearr_19054_20653[(2)] = inst_18979);

(statearr_19054_20653[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (10))){
var inst_18940 = (state_18999[(10)]);
var inst_18945 = (state_18999[(12)]);
var inst_18955 = cljs.core._nth(inst_18940,inst_18945);
var state_18999__$1 = state_18999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18999__$1,(13),out,inst_18955);
} else {
if((state_val_19000 === (18))){
var inst_18961 = (state_18999[(7)]);
var inst_18970 = cljs.core.first(inst_18961);
var state_18999__$1 = state_18999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18999__$1,(20),out,inst_18970);
} else {
if((state_val_19000 === (8))){
var inst_18945 = (state_18999[(12)]);
var inst_18942 = (state_18999[(11)]);
var inst_18947 = (inst_18945 < inst_18942);
var inst_18948 = inst_18947;
var state_18999__$1 = state_18999;
if(cljs.core.truth_(inst_18948)){
var statearr_19055_20654 = state_18999__$1;
(statearr_19055_20654[(1)] = (10));

} else {
var statearr_19056_20655 = state_18999__$1;
(statearr_19056_20655[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__13868__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13868__auto____0 = (function (){
var statearr_19063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19063[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13868__auto__);

(statearr_19063[(1)] = (1));

return statearr_19063;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13868__auto____1 = (function (state_18999){
while(true){
var ret_value__13870__auto__ = (function (){try{while(true){
var result__13871__auto__ = switch__13867__auto__(state_18999);
if(cljs.core.keyword_identical_QMARK_(result__13871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13871__auto__;
}
break;
}
}catch (e19064){var ex__13872__auto__ = e19064;
var statearr_19069_20656 = state_18999;
(statearr_19069_20656[(2)] = ex__13872__auto__);


if(cljs.core.seq((state_18999[(4)]))){
var statearr_19070_20657 = state_18999;
(statearr_19070_20657[(1)] = cljs.core.first((state_18999[(4)])));

} else {
throw ex__13872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20659 = state_18999;
state_18999 = G__20659;
continue;
} else {
return ret_value__13870__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13868__auto__ = function(state_18999){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13868__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13868__auto____1.call(this,state_18999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13868__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13868__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13868__auto__;
})()
})();
var state__15184__auto__ = (function (){var statearr_19071 = f__15183__auto__();
(statearr_19071[(6)] = c__15182__auto__);

return statearr_19071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15184__auto__);
}));

return c__15182__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19087 = arguments.length;
switch (G__19087) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__19101 = arguments.length;
switch (G__19101) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__19107 = arguments.length;
switch (G__19107) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15182__auto___20672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15183__auto__ = (function (){var switch__13867__auto__ = (function (state_19132){
var state_val_19133 = (state_19132[(1)]);
if((state_val_19133 === (7))){
var inst_19127 = (state_19132[(2)]);
var state_19132__$1 = state_19132;
var statearr_19150_20676 = state_19132__$1;
(statearr_19150_20676[(2)] = inst_19127);

(statearr_19150_20676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (1))){
var inst_19109 = null;
var state_19132__$1 = (function (){var statearr_19151 = state_19132;
(statearr_19151[(7)] = inst_19109);

return statearr_19151;
})();
var statearr_19152_20677 = state_19132__$1;
(statearr_19152_20677[(2)] = null);

(statearr_19152_20677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (4))){
var inst_19112 = (state_19132[(8)]);
var inst_19112__$1 = (state_19132[(2)]);
var inst_19113 = (inst_19112__$1 == null);
var inst_19114 = cljs.core.not(inst_19113);
var state_19132__$1 = (function (){var statearr_19153 = state_19132;
(statearr_19153[(8)] = inst_19112__$1);

return statearr_19153;
})();
if(inst_19114){
var statearr_19154_20680 = state_19132__$1;
(statearr_19154_20680[(1)] = (5));

} else {
var statearr_19155_20681 = state_19132__$1;
(statearr_19155_20681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (6))){
var state_19132__$1 = state_19132;
var statearr_19160_20682 = state_19132__$1;
(statearr_19160_20682[(2)] = null);

(statearr_19160_20682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (3))){
var inst_19129 = (state_19132[(2)]);
var inst_19130 = cljs.core.async.close_BANG_(out);
var state_19132__$1 = (function (){var statearr_19166 = state_19132;
(statearr_19166[(9)] = inst_19129);

return statearr_19166;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19132__$1,inst_19130);
} else {
if((state_val_19133 === (2))){
var state_19132__$1 = state_19132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19132__$1,(4),ch);
} else {
if((state_val_19133 === (11))){
var inst_19112 = (state_19132[(8)]);
var inst_19121 = (state_19132[(2)]);
var inst_19109 = inst_19112;
var state_19132__$1 = (function (){var statearr_19167 = state_19132;
(statearr_19167[(10)] = inst_19121);

(statearr_19167[(7)] = inst_19109);

return statearr_19167;
})();
var statearr_19168_20686 = state_19132__$1;
(statearr_19168_20686[(2)] = null);

(statearr_19168_20686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (9))){
var inst_19112 = (state_19132[(8)]);
var state_19132__$1 = state_19132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19132__$1,(11),out,inst_19112);
} else {
if((state_val_19133 === (5))){
var inst_19112 = (state_19132[(8)]);
var inst_19109 = (state_19132[(7)]);
var inst_19116 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19112,inst_19109);
var state_19132__$1 = state_19132;
if(inst_19116){
var statearr_19174_20687 = state_19132__$1;
(statearr_19174_20687[(1)] = (8));

} else {
var statearr_19175_20688 = state_19132__$1;
(statearr_19175_20688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (10))){
var inst_19124 = (state_19132[(2)]);
var state_19132__$1 = state_19132;
var statearr_19176_20689 = state_19132__$1;
(statearr_19176_20689[(2)] = inst_19124);

(statearr_19176_20689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (8))){
var inst_19109 = (state_19132[(7)]);
var tmp19173 = inst_19109;
var inst_19109__$1 = tmp19173;
var state_19132__$1 = (function (){var statearr_19177 = state_19132;
(statearr_19177[(7)] = inst_19109__$1);

return statearr_19177;
})();
var statearr_19178_20690 = state_19132__$1;
(statearr_19178_20690[(2)] = null);

(statearr_19178_20690[(1)] = (2));


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
var cljs$core$async$state_machine__13868__auto__ = null;
var cljs$core$async$state_machine__13868__auto____0 = (function (){
var statearr_19179 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19179[(0)] = cljs$core$async$state_machine__13868__auto__);

(statearr_19179[(1)] = (1));

return statearr_19179;
});
var cljs$core$async$state_machine__13868__auto____1 = (function (state_19132){
while(true){
var ret_value__13870__auto__ = (function (){try{while(true){
var result__13871__auto__ = switch__13867__auto__(state_19132);
if(cljs.core.keyword_identical_QMARK_(result__13871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13871__auto__;
}
break;
}
}catch (e19185){var ex__13872__auto__ = e19185;
var statearr_19186_20695 = state_19132;
(statearr_19186_20695[(2)] = ex__13872__auto__);


if(cljs.core.seq((state_19132[(4)]))){
var statearr_19188_20701 = state_19132;
(statearr_19188_20701[(1)] = cljs.core.first((state_19132[(4)])));

} else {
throw ex__13872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20703 = state_19132;
state_19132 = G__20703;
continue;
} else {
return ret_value__13870__auto__;
}
break;
}
});
cljs$core$async$state_machine__13868__auto__ = function(state_19132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13868__auto____1.call(this,state_19132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13868__auto____0;
cljs$core$async$state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13868__auto____1;
return cljs$core$async$state_machine__13868__auto__;
})()
})();
var state__15184__auto__ = (function (){var statearr_19195 = f__15183__auto__();
(statearr_19195[(6)] = c__15182__auto___20672);

return statearr_19195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15184__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19201 = arguments.length;
switch (G__19201) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15182__auto___20707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15183__auto__ = (function (){var switch__13867__auto__ = (function (state_19244){
var state_val_19245 = (state_19244[(1)]);
if((state_val_19245 === (7))){
var inst_19240 = (state_19244[(2)]);
var state_19244__$1 = state_19244;
var statearr_19248_20709 = state_19244__$1;
(statearr_19248_20709[(2)] = inst_19240);

(statearr_19248_20709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (1))){
var inst_19207 = (new Array(n));
var inst_19208 = inst_19207;
var inst_19209 = (0);
var state_19244__$1 = (function (){var statearr_19251 = state_19244;
(statearr_19251[(7)] = inst_19208);

(statearr_19251[(8)] = inst_19209);

return statearr_19251;
})();
var statearr_19252_20710 = state_19244__$1;
(statearr_19252_20710[(2)] = null);

(statearr_19252_20710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (4))){
var inst_19212 = (state_19244[(9)]);
var inst_19212__$1 = (state_19244[(2)]);
var inst_19213 = (inst_19212__$1 == null);
var inst_19214 = cljs.core.not(inst_19213);
var state_19244__$1 = (function (){var statearr_19253 = state_19244;
(statearr_19253[(9)] = inst_19212__$1);

return statearr_19253;
})();
if(inst_19214){
var statearr_19254_20711 = state_19244__$1;
(statearr_19254_20711[(1)] = (5));

} else {
var statearr_19255_20712 = state_19244__$1;
(statearr_19255_20712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (15))){
var inst_19234 = (state_19244[(2)]);
var state_19244__$1 = state_19244;
var statearr_19256_20713 = state_19244__$1;
(statearr_19256_20713[(2)] = inst_19234);

(statearr_19256_20713[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (13))){
var state_19244__$1 = state_19244;
var statearr_19257_20714 = state_19244__$1;
(statearr_19257_20714[(2)] = null);

(statearr_19257_20714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (6))){
var inst_19209 = (state_19244[(8)]);
var inst_19230 = (inst_19209 > (0));
var state_19244__$1 = state_19244;
if(cljs.core.truth_(inst_19230)){
var statearr_19258_20715 = state_19244__$1;
(statearr_19258_20715[(1)] = (12));

} else {
var statearr_19259_20716 = state_19244__$1;
(statearr_19259_20716[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (3))){
var inst_19242 = (state_19244[(2)]);
var state_19244__$1 = state_19244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19244__$1,inst_19242);
} else {
if((state_val_19245 === (12))){
var inst_19208 = (state_19244[(7)]);
var inst_19232 = cljs.core.vec(inst_19208);
var state_19244__$1 = state_19244;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19244__$1,(15),out,inst_19232);
} else {
if((state_val_19245 === (2))){
var state_19244__$1 = state_19244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19244__$1,(4),ch);
} else {
if((state_val_19245 === (11))){
var inst_19224 = (state_19244[(2)]);
var inst_19225 = (new Array(n));
var inst_19208 = inst_19225;
var inst_19209 = (0);
var state_19244__$1 = (function (){var statearr_19265 = state_19244;
(statearr_19265[(10)] = inst_19224);

(statearr_19265[(7)] = inst_19208);

(statearr_19265[(8)] = inst_19209);

return statearr_19265;
})();
var statearr_19266_20718 = state_19244__$1;
(statearr_19266_20718[(2)] = null);

(statearr_19266_20718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (9))){
var inst_19208 = (state_19244[(7)]);
var inst_19222 = cljs.core.vec(inst_19208);
var state_19244__$1 = state_19244;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19244__$1,(11),out,inst_19222);
} else {
if((state_val_19245 === (5))){
var inst_19208 = (state_19244[(7)]);
var inst_19209 = (state_19244[(8)]);
var inst_19212 = (state_19244[(9)]);
var inst_19217 = (state_19244[(11)]);
var inst_19216 = (inst_19208[inst_19209] = inst_19212);
var inst_19217__$1 = (inst_19209 + (1));
var inst_19218 = (inst_19217__$1 < n);
var state_19244__$1 = (function (){var statearr_19267 = state_19244;
(statearr_19267[(12)] = inst_19216);

(statearr_19267[(11)] = inst_19217__$1);

return statearr_19267;
})();
if(cljs.core.truth_(inst_19218)){
var statearr_19268_20739 = state_19244__$1;
(statearr_19268_20739[(1)] = (8));

} else {
var statearr_19269_20740 = state_19244__$1;
(statearr_19269_20740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (14))){
var inst_19237 = (state_19244[(2)]);
var inst_19238 = cljs.core.async.close_BANG_(out);
var state_19244__$1 = (function (){var statearr_19271 = state_19244;
(statearr_19271[(13)] = inst_19237);

return statearr_19271;
})();
var statearr_19276_20741 = state_19244__$1;
(statearr_19276_20741[(2)] = inst_19238);

(statearr_19276_20741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (10))){
var inst_19228 = (state_19244[(2)]);
var state_19244__$1 = state_19244;
var statearr_19277_20742 = state_19244__$1;
(statearr_19277_20742[(2)] = inst_19228);

(statearr_19277_20742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19245 === (8))){
var inst_19208 = (state_19244[(7)]);
var inst_19217 = (state_19244[(11)]);
var tmp19270 = inst_19208;
var inst_19208__$1 = tmp19270;
var inst_19209 = inst_19217;
var state_19244__$1 = (function (){var statearr_19278 = state_19244;
(statearr_19278[(7)] = inst_19208__$1);

(statearr_19278[(8)] = inst_19209);

return statearr_19278;
})();
var statearr_19279_20744 = state_19244__$1;
(statearr_19279_20744[(2)] = null);

(statearr_19279_20744[(1)] = (2));


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
var cljs$core$async$state_machine__13868__auto__ = null;
var cljs$core$async$state_machine__13868__auto____0 = (function (){
var statearr_19284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19284[(0)] = cljs$core$async$state_machine__13868__auto__);

(statearr_19284[(1)] = (1));

return statearr_19284;
});
var cljs$core$async$state_machine__13868__auto____1 = (function (state_19244){
while(true){
var ret_value__13870__auto__ = (function (){try{while(true){
var result__13871__auto__ = switch__13867__auto__(state_19244);
if(cljs.core.keyword_identical_QMARK_(result__13871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13871__auto__;
}
break;
}
}catch (e19285){var ex__13872__auto__ = e19285;
var statearr_19286_20745 = state_19244;
(statearr_19286_20745[(2)] = ex__13872__auto__);


if(cljs.core.seq((state_19244[(4)]))){
var statearr_19287_20746 = state_19244;
(statearr_19287_20746[(1)] = cljs.core.first((state_19244[(4)])));

} else {
throw ex__13872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20748 = state_19244;
state_19244 = G__20748;
continue;
} else {
return ret_value__13870__auto__;
}
break;
}
});
cljs$core$async$state_machine__13868__auto__ = function(state_19244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13868__auto____1.call(this,state_19244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13868__auto____0;
cljs$core$async$state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13868__auto____1;
return cljs$core$async$state_machine__13868__auto__;
})()
})();
var state__15184__auto__ = (function (){var statearr_19289 = f__15183__auto__();
(statearr_19289[(6)] = c__15182__auto___20707);

return statearr_19289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15184__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19298 = arguments.length;
switch (G__19298) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15182__auto___20750 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15183__auto__ = (function (){var switch__13867__auto__ = (function (state_19343){
var state_val_19344 = (state_19343[(1)]);
if((state_val_19344 === (7))){
var inst_19339 = (state_19343[(2)]);
var state_19343__$1 = state_19343;
var statearr_19346_20751 = state_19343__$1;
(statearr_19346_20751[(2)] = inst_19339);

(statearr_19346_20751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (1))){
var inst_19299 = [];
var inst_19300 = inst_19299;
var inst_19301 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19343__$1 = (function (){var statearr_19347 = state_19343;
(statearr_19347[(7)] = inst_19300);

(statearr_19347[(8)] = inst_19301);

return statearr_19347;
})();
var statearr_19348_20753 = state_19343__$1;
(statearr_19348_20753[(2)] = null);

(statearr_19348_20753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (4))){
var inst_19304 = (state_19343[(9)]);
var inst_19304__$1 = (state_19343[(2)]);
var inst_19305 = (inst_19304__$1 == null);
var inst_19306 = cljs.core.not(inst_19305);
var state_19343__$1 = (function (){var statearr_19349 = state_19343;
(statearr_19349[(9)] = inst_19304__$1);

return statearr_19349;
})();
if(inst_19306){
var statearr_19350_20754 = state_19343__$1;
(statearr_19350_20754[(1)] = (5));

} else {
var statearr_19351_20757 = state_19343__$1;
(statearr_19351_20757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (15))){
var inst_19300 = (state_19343[(7)]);
var inst_19331 = cljs.core.vec(inst_19300);
var state_19343__$1 = state_19343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19343__$1,(18),out,inst_19331);
} else {
if((state_val_19344 === (13))){
var inst_19326 = (state_19343[(2)]);
var state_19343__$1 = state_19343;
var statearr_19352_20759 = state_19343__$1;
(statearr_19352_20759[(2)] = inst_19326);

(statearr_19352_20759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (6))){
var inst_19300 = (state_19343[(7)]);
var inst_19328 = inst_19300.length;
var inst_19329 = (inst_19328 > (0));
var state_19343__$1 = state_19343;
if(cljs.core.truth_(inst_19329)){
var statearr_19356_20760 = state_19343__$1;
(statearr_19356_20760[(1)] = (15));

} else {
var statearr_19357_20761 = state_19343__$1;
(statearr_19357_20761[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (17))){
var inst_19336 = (state_19343[(2)]);
var inst_19337 = cljs.core.async.close_BANG_(out);
var state_19343__$1 = (function (){var statearr_19360 = state_19343;
(statearr_19360[(10)] = inst_19336);

return statearr_19360;
})();
var statearr_19361_20763 = state_19343__$1;
(statearr_19361_20763[(2)] = inst_19337);

(statearr_19361_20763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (3))){
var inst_19341 = (state_19343[(2)]);
var state_19343__$1 = state_19343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19343__$1,inst_19341);
} else {
if((state_val_19344 === (12))){
var inst_19300 = (state_19343[(7)]);
var inst_19319 = cljs.core.vec(inst_19300);
var state_19343__$1 = state_19343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19343__$1,(14),out,inst_19319);
} else {
if((state_val_19344 === (2))){
var state_19343__$1 = state_19343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19343__$1,(4),ch);
} else {
if((state_val_19344 === (11))){
var inst_19300 = (state_19343[(7)]);
var inst_19304 = (state_19343[(9)]);
var inst_19308 = (state_19343[(11)]);
var inst_19316 = inst_19300.push(inst_19304);
var tmp19362 = inst_19300;
var inst_19300__$1 = tmp19362;
var inst_19301 = inst_19308;
var state_19343__$1 = (function (){var statearr_19363 = state_19343;
(statearr_19363[(12)] = inst_19316);

(statearr_19363[(7)] = inst_19300__$1);

(statearr_19363[(8)] = inst_19301);

return statearr_19363;
})();
var statearr_19365_20768 = state_19343__$1;
(statearr_19365_20768[(2)] = null);

(statearr_19365_20768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (9))){
var inst_19301 = (state_19343[(8)]);
var inst_19312 = cljs.core.keyword_identical_QMARK_(inst_19301,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19343__$1 = state_19343;
var statearr_19371_20769 = state_19343__$1;
(statearr_19371_20769[(2)] = inst_19312);

(statearr_19371_20769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (5))){
var inst_19304 = (state_19343[(9)]);
var inst_19308 = (state_19343[(11)]);
var inst_19301 = (state_19343[(8)]);
var inst_19309 = (state_19343[(13)]);
var inst_19308__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19304) : f.call(null,inst_19304));
var inst_19309__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19308__$1,inst_19301);
var state_19343__$1 = (function (){var statearr_19372 = state_19343;
(statearr_19372[(11)] = inst_19308__$1);

(statearr_19372[(13)] = inst_19309__$1);

return statearr_19372;
})();
if(inst_19309__$1){
var statearr_19373_20775 = state_19343__$1;
(statearr_19373_20775[(1)] = (8));

} else {
var statearr_19377_20777 = state_19343__$1;
(statearr_19377_20777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (14))){
var inst_19304 = (state_19343[(9)]);
var inst_19308 = (state_19343[(11)]);
var inst_19321 = (state_19343[(2)]);
var inst_19322 = [];
var inst_19323 = inst_19322.push(inst_19304);
var inst_19300 = inst_19322;
var inst_19301 = inst_19308;
var state_19343__$1 = (function (){var statearr_19378 = state_19343;
(statearr_19378[(14)] = inst_19321);

(statearr_19378[(15)] = inst_19323);

(statearr_19378[(7)] = inst_19300);

(statearr_19378[(8)] = inst_19301);

return statearr_19378;
})();
var statearr_19379_20779 = state_19343__$1;
(statearr_19379_20779[(2)] = null);

(statearr_19379_20779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (16))){
var state_19343__$1 = state_19343;
var statearr_19383_20781 = state_19343__$1;
(statearr_19383_20781[(2)] = null);

(statearr_19383_20781[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (10))){
var inst_19314 = (state_19343[(2)]);
var state_19343__$1 = state_19343;
if(cljs.core.truth_(inst_19314)){
var statearr_19384_20783 = state_19343__$1;
(statearr_19384_20783[(1)] = (11));

} else {
var statearr_19385_20784 = state_19343__$1;
(statearr_19385_20784[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (18))){
var inst_19333 = (state_19343[(2)]);
var state_19343__$1 = state_19343;
var statearr_19386_20785 = state_19343__$1;
(statearr_19386_20785[(2)] = inst_19333);

(statearr_19386_20785[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (8))){
var inst_19309 = (state_19343[(13)]);
var state_19343__$1 = state_19343;
var statearr_19387_20786 = state_19343__$1;
(statearr_19387_20786[(2)] = inst_19309);

(statearr_19387_20786[(1)] = (10));


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
var cljs$core$async$state_machine__13868__auto__ = null;
var cljs$core$async$state_machine__13868__auto____0 = (function (){
var statearr_19396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19396[(0)] = cljs$core$async$state_machine__13868__auto__);

(statearr_19396[(1)] = (1));

return statearr_19396;
});
var cljs$core$async$state_machine__13868__auto____1 = (function (state_19343){
while(true){
var ret_value__13870__auto__ = (function (){try{while(true){
var result__13871__auto__ = switch__13867__auto__(state_19343);
if(cljs.core.keyword_identical_QMARK_(result__13871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13871__auto__;
}
break;
}
}catch (e19397){var ex__13872__auto__ = e19397;
var statearr_19401_20792 = state_19343;
(statearr_19401_20792[(2)] = ex__13872__auto__);


if(cljs.core.seq((state_19343[(4)]))){
var statearr_19402_20793 = state_19343;
(statearr_19402_20793[(1)] = cljs.core.first((state_19343[(4)])));

} else {
throw ex__13872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20795 = state_19343;
state_19343 = G__20795;
continue;
} else {
return ret_value__13870__auto__;
}
break;
}
});
cljs$core$async$state_machine__13868__auto__ = function(state_19343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13868__auto____1.call(this,state_19343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13868__auto____0;
cljs$core$async$state_machine__13868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13868__auto____1;
return cljs$core$async$state_machine__13868__auto__;
})()
})();
var state__15184__auto__ = (function (){var statearr_19406 = f__15183__auto__();
(statearr_19406[(6)] = c__15182__auto___20750);

return statearr_19406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15184__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
