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
cljs.core.async.t_cljs$core$async14751 = (function (f,blockable,meta14752){
this.f = f;
this.blockable = blockable;
this.meta14752 = meta14752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14753,meta14752__$1){
var self__ = this;
var _14753__$1 = this;
return (new cljs.core.async.t_cljs$core$async14751(self__.f,self__.blockable,meta14752__$1));
}));

(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14753){
var self__ = this;
var _14753__$1 = this;
return self__.meta14752;
}));

(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14752","meta14752",-1259385417,null)], null);
}));

(cljs.core.async.t_cljs$core$async14751.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14751");

(cljs.core.async.t_cljs$core$async14751.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14751");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14751.
 */
cljs.core.async.__GT_t_cljs$core$async14751 = (function cljs$core$async$__GT_t_cljs$core$async14751(f,blockable,meta14752){
return (new cljs.core.async.t_cljs$core$async14751(f,blockable,meta14752));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14744 = arguments.length;
switch (G__14744) {
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
return (new cljs.core.async.t_cljs$core$async14751(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14791 = arguments.length;
switch (G__14791) {
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
var G__14813 = arguments.length;
switch (G__14813) {
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
var G__14843 = arguments.length;
switch (G__14843) {
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
var val_19353 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19353) : fn1.call(null,val_19353));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19353) : fn1.call(null,val_19353));
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
var G__14862 = arguments.length;
switch (G__14862) {
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
var n__5741__auto___19358 = n;
var x_19359 = (0);
while(true){
if((x_19359 < n__5741__auto___19358)){
(a[x_19359] = x_19359);

var G__19360 = (x_19359 + (1));
x_19359 = G__19360;
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
cljs.core.async.t_cljs$core$async14900 = (function (flag,meta14901){
this.flag = flag;
this.meta14901 = meta14901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14902,meta14901__$1){
var self__ = this;
var _14902__$1 = this;
return (new cljs.core.async.t_cljs$core$async14900(self__.flag,meta14901__$1));
}));

(cljs.core.async.t_cljs$core$async14900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14902){
var self__ = this;
var _14902__$1 = this;
return self__.meta14901;
}));

(cljs.core.async.t_cljs$core$async14900.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14900.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14900.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14900.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14901","meta14901",-2111760075,null)], null);
}));

(cljs.core.async.t_cljs$core$async14900.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14900");

(cljs.core.async.t_cljs$core$async14900.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14900");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14900.
 */
cljs.core.async.__GT_t_cljs$core$async14900 = (function cljs$core$async$__GT_t_cljs$core$async14900(flag,meta14901){
return (new cljs.core.async.t_cljs$core$async14900(flag,meta14901));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14900(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14925 = (function (flag,cb,meta14926){
this.flag = flag;
this.cb = cb;
this.meta14926 = meta14926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14927,meta14926__$1){
var self__ = this;
var _14927__$1 = this;
return (new cljs.core.async.t_cljs$core$async14925(self__.flag,self__.cb,meta14926__$1));
}));

(cljs.core.async.t_cljs$core$async14925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14927){
var self__ = this;
var _14927__$1 = this;
return self__.meta14926;
}));

(cljs.core.async.t_cljs$core$async14925.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14925.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14925.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14925.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14926","meta14926",-1352036440,null)], null);
}));

(cljs.core.async.t_cljs$core$async14925.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14925");

(cljs.core.async.t_cljs$core$async14925.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14925");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14925.
 */
cljs.core.async.__GT_t_cljs$core$async14925 = (function cljs$core$async$__GT_t_cljs$core$async14925(flag,cb,meta14926){
return (new cljs.core.async.t_cljs$core$async14925(flag,cb,meta14926));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14925(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_19361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_19361)){
if((!(((port_19361.cljs$core$IFn$_invoke$arity$1 ? port_19361.cljs$core$IFn$_invoke$arity$1((1)) : port_19361.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__19362 = (i + (1));
i = G__19362;
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
return (function (p1__14958_SHARP_){
var G__14971 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14958_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14971) : fret.call(null,G__14971));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14960_SHARP_){
var G__14972 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14960_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14972) : fret.call(null,G__14972));
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
var G__19363 = (i + (1));
i = G__19363;
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
var len__5876__auto___19365 = arguments.length;
var i__5877__auto___19366 = (0);
while(true){
if((i__5877__auto___19366 < len__5876__auto___19365)){
args__5882__auto__.push((arguments[i__5877__auto___19366]));

var G__19368 = (i__5877__auto___19366 + (1));
i__5877__auto___19366 = G__19368;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14997){
var map__14998 = p__14997;
var map__14998__$1 = cljs.core.__destructure_map(map__14998);
var opts = map__14998__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14985){
var G__14986 = cljs.core.first(seq14985);
var seq14985__$1 = cljs.core.next(seq14985);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14986,seq14985__$1);
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
var G__15029 = arguments.length;
switch (G__15029) {
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
var c__14614__auto___19373 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14615__auto__ = (function (){var switch__13874__auto__ = (function (state_15168){
var state_val_15172 = (state_15168[(1)]);
if((state_val_15172 === (7))){
var inst_15154 = (state_15168[(2)]);
var state_15168__$1 = state_15168;
var statearr_15241_19374 = state_15168__$1;
(statearr_15241_19374[(2)] = inst_15154);

(statearr_15241_19374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (1))){
var state_15168__$1 = state_15168;
var statearr_15244_19375 = state_15168__$1;
(statearr_15244_19375[(2)] = null);

(statearr_15244_19375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (4))){
var inst_15104 = (state_15168[(7)]);
var inst_15104__$1 = (state_15168[(2)]);
var inst_15119 = (inst_15104__$1 == null);
var state_15168__$1 = (function (){var statearr_15260 = state_15168;
(statearr_15260[(7)] = inst_15104__$1);

return statearr_15260;
})();
if(cljs.core.truth_(inst_15119)){
var statearr_15264_19376 = state_15168__$1;
(statearr_15264_19376[(1)] = (5));

} else {
var statearr_15265_19377 = state_15168__$1;
(statearr_15265_19377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (13))){
var state_15168__$1 = state_15168;
var statearr_15275_19378 = state_15168__$1;
(statearr_15275_19378[(2)] = null);

(statearr_15275_19378[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (6))){
var inst_15104 = (state_15168[(7)]);
var state_15168__$1 = state_15168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15168__$1,(11),to,inst_15104);
} else {
if((state_val_15172 === (3))){
var inst_15162 = (state_15168[(2)]);
var state_15168__$1 = state_15168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15168__$1,inst_15162);
} else {
if((state_val_15172 === (12))){
var state_15168__$1 = state_15168;
var statearr_15291_19379 = state_15168__$1;
(statearr_15291_19379[(2)] = null);

(statearr_15291_19379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (2))){
var state_15168__$1 = state_15168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15168__$1,(4),from);
} else {
if((state_val_15172 === (11))){
var inst_15144 = (state_15168[(2)]);
var state_15168__$1 = state_15168;
if(cljs.core.truth_(inst_15144)){
var statearr_15302_19380 = state_15168__$1;
(statearr_15302_19380[(1)] = (12));

} else {
var statearr_15307_19381 = state_15168__$1;
(statearr_15307_19381[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (9))){
var state_15168__$1 = state_15168;
var statearr_15310_19384 = state_15168__$1;
(statearr_15310_19384[(2)] = null);

(statearr_15310_19384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (5))){
var state_15168__$1 = state_15168;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15317_19385 = state_15168__$1;
(statearr_15317_19385[(1)] = (8));

} else {
var statearr_15321_19386 = state_15168__$1;
(statearr_15321_19386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (14))){
var inst_15152 = (state_15168[(2)]);
var state_15168__$1 = state_15168;
var statearr_15333_19387 = state_15168__$1;
(statearr_15333_19387[(2)] = inst_15152);

(statearr_15333_19387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (10))){
var inst_15138 = (state_15168[(2)]);
var state_15168__$1 = state_15168;
var statearr_15335_19388 = state_15168__$1;
(statearr_15335_19388[(2)] = inst_15138);

(statearr_15335_19388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15172 === (8))){
var inst_15130 = cljs.core.async.close_BANG_(to);
var state_15168__$1 = state_15168;
var statearr_15339_19389 = state_15168__$1;
(statearr_15339_19389[(2)] = inst_15130);

(statearr_15339_19389[(1)] = (10));


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
var cljs$core$async$state_machine__13875__auto__ = null;
var cljs$core$async$state_machine__13875__auto____0 = (function (){
var statearr_15352 = [null,null,null,null,null,null,null,null];
(statearr_15352[(0)] = cljs$core$async$state_machine__13875__auto__);

(statearr_15352[(1)] = (1));

return statearr_15352;
});
var cljs$core$async$state_machine__13875__auto____1 = (function (state_15168){
while(true){
var ret_value__13876__auto__ = (function (){try{while(true){
var result__13877__auto__ = switch__13874__auto__(state_15168);
if(cljs.core.keyword_identical_QMARK_(result__13877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13877__auto__;
}
break;
}
}catch (e15359){var ex__13878__auto__ = e15359;
var statearr_15363_19390 = state_15168;
(statearr_15363_19390[(2)] = ex__13878__auto__);


if(cljs.core.seq((state_15168[(4)]))){
var statearr_15365_19391 = state_15168;
(statearr_15365_19391[(1)] = cljs.core.first((state_15168[(4)])));

} else {
throw ex__13878__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19392 = state_15168;
state_15168 = G__19392;
continue;
} else {
return ret_value__13876__auto__;
}
break;
}
});
cljs$core$async$state_machine__13875__auto__ = function(state_15168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13875__auto____1.call(this,state_15168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13875__auto____0;
cljs$core$async$state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13875__auto____1;
return cljs$core$async$state_machine__13875__auto__;
})()
})();
var state__14616__auto__ = (function (){var statearr_15384 = f__14615__auto__();
(statearr_15384[(6)] = c__14614__auto___19373);

return statearr_15384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14616__auto__);
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
var process__$1 = (function (p__15407){
var vec__15408 = p__15407;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15408,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15408,(1),null);
var job = vec__15408;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14614__auto___19393 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14615__auto__ = (function (){var switch__13874__auto__ = (function (state_15431){
var state_val_15433 = (state_15431[(1)]);
if((state_val_15433 === (1))){
var state_15431__$1 = state_15431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15431__$1,(2),res,v);
} else {
if((state_val_15433 === (2))){
var inst_15427 = (state_15431[(2)]);
var inst_15428 = cljs.core.async.close_BANG_(res);
var state_15431__$1 = (function (){var statearr_15456 = state_15431;
(statearr_15456[(7)] = inst_15427);

return statearr_15456;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15431__$1,inst_15428);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____0 = (function (){
var statearr_15466 = [null,null,null,null,null,null,null,null];
(statearr_15466[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__);

(statearr_15466[(1)] = (1));

return statearr_15466;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____1 = (function (state_15431){
while(true){
var ret_value__13876__auto__ = (function (){try{while(true){
var result__13877__auto__ = switch__13874__auto__(state_15431);
if(cljs.core.keyword_identical_QMARK_(result__13877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13877__auto__;
}
break;
}
}catch (e15473){var ex__13878__auto__ = e15473;
var statearr_15475_19395 = state_15431;
(statearr_15475_19395[(2)] = ex__13878__auto__);


if(cljs.core.seq((state_15431[(4)]))){
var statearr_15478_19397 = state_15431;
(statearr_15478_19397[(1)] = cljs.core.first((state_15431[(4)])));

} else {
throw ex__13878__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19398 = state_15431;
state_15431 = G__19398;
continue;
} else {
return ret_value__13876__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__ = function(state_15431){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____1.call(this,state_15431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__;
})()
})();
var state__14616__auto__ = (function (){var statearr_15489 = f__14615__auto__();
(statearr_15489[(6)] = c__14614__auto___19393);

return statearr_15489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14616__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15505){
var vec__15506 = p__15505;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15506,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15506,(1),null);
var job = vec__15506;
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
var n__5741__auto___19400 = n;
var __19401 = (0);
while(true){
if((__19401 < n__5741__auto___19400)){
var G__15512_19402 = type;
var G__15512_19403__$1 = (((G__15512_19402 instanceof cljs.core.Keyword))?G__15512_19402.fqn:null);
switch (G__15512_19403__$1) {
case "compute":
var c__14614__auto___19405 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19401,c__14614__auto___19405,G__15512_19402,G__15512_19403__$1,n__5741__auto___19400,jobs,results,process__$1,async){
return (function (){
var f__14615__auto__ = (function (){var switch__13874__auto__ = ((function (__19401,c__14614__auto___19405,G__15512_19402,G__15512_19403__$1,n__5741__auto___19400,jobs,results,process__$1,async){
return (function (state_15544){
var state_val_15545 = (state_15544[(1)]);
if((state_val_15545 === (1))){
var state_15544__$1 = state_15544;
var statearr_15561_19406 = state_15544__$1;
(statearr_15561_19406[(2)] = null);

(statearr_15561_19406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15545 === (2))){
var state_15544__$1 = state_15544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15544__$1,(4),jobs);
} else {
if((state_val_15545 === (3))){
var inst_15540 = (state_15544[(2)]);
var state_15544__$1 = state_15544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15544__$1,inst_15540);
} else {
if((state_val_15545 === (4))){
var inst_15527 = (state_15544[(2)]);
var inst_15530 = process__$1(inst_15527);
var state_15544__$1 = state_15544;
if(cljs.core.truth_(inst_15530)){
var statearr_15576_19411 = state_15544__$1;
(statearr_15576_19411[(1)] = (5));

} else {
var statearr_15579_19412 = state_15544__$1;
(statearr_15579_19412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15545 === (5))){
var state_15544__$1 = state_15544;
var statearr_15593_19413 = state_15544__$1;
(statearr_15593_19413[(2)] = null);

(statearr_15593_19413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15545 === (6))){
var state_15544__$1 = state_15544;
var statearr_15602_19414 = state_15544__$1;
(statearr_15602_19414[(2)] = null);

(statearr_15602_19414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15545 === (7))){
var inst_15536 = (state_15544[(2)]);
var state_15544__$1 = state_15544;
var statearr_15608_19415 = state_15544__$1;
(statearr_15608_19415[(2)] = inst_15536);

(statearr_15608_19415[(1)] = (3));


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
});})(__19401,c__14614__auto___19405,G__15512_19402,G__15512_19403__$1,n__5741__auto___19400,jobs,results,process__$1,async))
;
return ((function (__19401,switch__13874__auto__,c__14614__auto___19405,G__15512_19402,G__15512_19403__$1,n__5741__auto___19400,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____0 = (function (){
var statearr_15622 = [null,null,null,null,null,null,null];
(statearr_15622[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__);

(statearr_15622[(1)] = (1));

return statearr_15622;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____1 = (function (state_15544){
while(true){
var ret_value__13876__auto__ = (function (){try{while(true){
var result__13877__auto__ = switch__13874__auto__(state_15544);
if(cljs.core.keyword_identical_QMARK_(result__13877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13877__auto__;
}
break;
}
}catch (e15634){var ex__13878__auto__ = e15634;
var statearr_15641_19416 = state_15544;
(statearr_15641_19416[(2)] = ex__13878__auto__);


if(cljs.core.seq((state_15544[(4)]))){
var statearr_15650_19417 = state_15544;
(statearr_15650_19417[(1)] = cljs.core.first((state_15544[(4)])));

} else {
throw ex__13878__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19418 = state_15544;
state_15544 = G__19418;
continue;
} else {
return ret_value__13876__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__ = function(state_15544){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____1.call(this,state_15544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__;
})()
;})(__19401,switch__13874__auto__,c__14614__auto___19405,G__15512_19402,G__15512_19403__$1,n__5741__auto___19400,jobs,results,process__$1,async))
})();
var state__14616__auto__ = (function (){var statearr_15658 = f__14615__auto__();
(statearr_15658[(6)] = c__14614__auto___19405);

return statearr_15658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14616__auto__);
});})(__19401,c__14614__auto___19405,G__15512_19402,G__15512_19403__$1,n__5741__auto___19400,jobs,results,process__$1,async))
);


break;
case "async":
var c__14614__auto___19419 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19401,c__14614__auto___19419,G__15512_19402,G__15512_19403__$1,n__5741__auto___19400,jobs,results,process__$1,async){
return (function (){
var f__14615__auto__ = (function (){var switch__13874__auto__ = ((function (__19401,c__14614__auto___19419,G__15512_19402,G__15512_19403__$1,n__5741__auto___19400,jobs,results,process__$1,async){
return (function (state_15681){
var state_val_15682 = (state_15681[(1)]);
if((state_val_15682 === (1))){
var state_15681__$1 = state_15681;
var statearr_15692_19420 = state_15681__$1;
(statearr_15692_19420[(2)] = null);

(statearr_15692_19420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15682 === (2))){
var state_15681__$1 = state_15681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15681__$1,(4),jobs);
} else {
if((state_val_15682 === (3))){
var inst_15677 = (state_15681[(2)]);
var state_15681__$1 = state_15681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15681__$1,inst_15677);
} else {
if((state_val_15682 === (4))){
var inst_15667 = (state_15681[(2)]);
var inst_15669 = async(inst_15667);
var state_15681__$1 = state_15681;
if(cljs.core.truth_(inst_15669)){
var statearr_15700_19421 = state_15681__$1;
(statearr_15700_19421[(1)] = (5));

} else {
var statearr_15701_19422 = state_15681__$1;
(statearr_15701_19422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15682 === (5))){
var state_15681__$1 = state_15681;
var statearr_15708_19423 = state_15681__$1;
(statearr_15708_19423[(2)] = null);

(statearr_15708_19423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15682 === (6))){
var state_15681__$1 = state_15681;
var statearr_15749_19424 = state_15681__$1;
(statearr_15749_19424[(2)] = null);

(statearr_15749_19424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15682 === (7))){
var inst_15675 = (state_15681[(2)]);
var state_15681__$1 = state_15681;
var statearr_15766_19425 = state_15681__$1;
(statearr_15766_19425[(2)] = inst_15675);

(statearr_15766_19425[(1)] = (3));


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
});})(__19401,c__14614__auto___19419,G__15512_19402,G__15512_19403__$1,n__5741__auto___19400,jobs,results,process__$1,async))
;
return ((function (__19401,switch__13874__auto__,c__14614__auto___19419,G__15512_19402,G__15512_19403__$1,n__5741__auto___19400,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____0 = (function (){
var statearr_15800 = [null,null,null,null,null,null,null];
(statearr_15800[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__);

(statearr_15800[(1)] = (1));

return statearr_15800;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____1 = (function (state_15681){
while(true){
var ret_value__13876__auto__ = (function (){try{while(true){
var result__13877__auto__ = switch__13874__auto__(state_15681);
if(cljs.core.keyword_identical_QMARK_(result__13877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13877__auto__;
}
break;
}
}catch (e15802){var ex__13878__auto__ = e15802;
var statearr_15805_19427 = state_15681;
(statearr_15805_19427[(2)] = ex__13878__auto__);


if(cljs.core.seq((state_15681[(4)]))){
var statearr_15807_19428 = state_15681;
(statearr_15807_19428[(1)] = cljs.core.first((state_15681[(4)])));

} else {
throw ex__13878__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19429 = state_15681;
state_15681 = G__19429;
continue;
} else {
return ret_value__13876__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__ = function(state_15681){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____1.call(this,state_15681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__;
})()
;})(__19401,switch__13874__auto__,c__14614__auto___19419,G__15512_19402,G__15512_19403__$1,n__5741__auto___19400,jobs,results,process__$1,async))
})();
var state__14616__auto__ = (function (){var statearr_15823 = f__14615__auto__();
(statearr_15823[(6)] = c__14614__auto___19419);

return statearr_15823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14616__auto__);
});})(__19401,c__14614__auto___19419,G__15512_19402,G__15512_19403__$1,n__5741__auto___19400,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15512_19403__$1))));

}

var G__19430 = (__19401 + (1));
__19401 = G__19430;
continue;
} else {
}
break;
}

var c__14614__auto___19431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14615__auto__ = (function (){var switch__13874__auto__ = (function (state_15909){
var state_val_15912 = (state_15909[(1)]);
if((state_val_15912 === (7))){
var inst_15890 = (state_15909[(2)]);
var state_15909__$1 = state_15909;
var statearr_15922_19432 = state_15909__$1;
(statearr_15922_19432[(2)] = inst_15890);

(statearr_15922_19432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15912 === (1))){
var state_15909__$1 = state_15909;
var statearr_15923_19433 = state_15909__$1;
(statearr_15923_19433[(2)] = null);

(statearr_15923_19433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15912 === (4))){
var inst_15834 = (state_15909[(7)]);
var inst_15834__$1 = (state_15909[(2)]);
var inst_15835 = (inst_15834__$1 == null);
var state_15909__$1 = (function (){var statearr_15939 = state_15909;
(statearr_15939[(7)] = inst_15834__$1);

return statearr_15939;
})();
if(cljs.core.truth_(inst_15835)){
var statearr_15942_19434 = state_15909__$1;
(statearr_15942_19434[(1)] = (5));

} else {
var statearr_15944_19435 = state_15909__$1;
(statearr_15944_19435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15912 === (6))){
var inst_15834 = (state_15909[(7)]);
var inst_15841 = (state_15909[(8)]);
var inst_15841__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15868 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15870 = [inst_15834,inst_15841__$1];
var inst_15875 = (new cljs.core.PersistentVector(null,2,(5),inst_15868,inst_15870,null));
var state_15909__$1 = (function (){var statearr_15947 = state_15909;
(statearr_15947[(8)] = inst_15841__$1);

return statearr_15947;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15909__$1,(8),jobs,inst_15875);
} else {
if((state_val_15912 === (3))){
var inst_15897 = (state_15909[(2)]);
var state_15909__$1 = state_15909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15909__$1,inst_15897);
} else {
if((state_val_15912 === (2))){
var state_15909__$1 = state_15909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15909__$1,(4),from);
} else {
if((state_val_15912 === (9))){
var inst_15885 = (state_15909[(2)]);
var state_15909__$1 = (function (){var statearr_15951 = state_15909;
(statearr_15951[(9)] = inst_15885);

return statearr_15951;
})();
var statearr_15952_19441 = state_15909__$1;
(statearr_15952_19441[(2)] = null);

(statearr_15952_19441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15912 === (5))){
var inst_15838 = cljs.core.async.close_BANG_(jobs);
var state_15909__$1 = state_15909;
var statearr_15954_19442 = state_15909__$1;
(statearr_15954_19442[(2)] = inst_15838);

(statearr_15954_19442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15912 === (8))){
var inst_15841 = (state_15909[(8)]);
var inst_15878 = (state_15909[(2)]);
var state_15909__$1 = (function (){var statearr_15956 = state_15909;
(statearr_15956[(10)] = inst_15878);

return statearr_15956;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15909__$1,(9),results,inst_15841);
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
var cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____0 = (function (){
var statearr_15962 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15962[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__);

(statearr_15962[(1)] = (1));

return statearr_15962;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____1 = (function (state_15909){
while(true){
var ret_value__13876__auto__ = (function (){try{while(true){
var result__13877__auto__ = switch__13874__auto__(state_15909);
if(cljs.core.keyword_identical_QMARK_(result__13877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13877__auto__;
}
break;
}
}catch (e15963){var ex__13878__auto__ = e15963;
var statearr_15964_19443 = state_15909;
(statearr_15964_19443[(2)] = ex__13878__auto__);


if(cljs.core.seq((state_15909[(4)]))){
var statearr_15965_19444 = state_15909;
(statearr_15965_19444[(1)] = cljs.core.first((state_15909[(4)])));

} else {
throw ex__13878__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19445 = state_15909;
state_15909 = G__19445;
continue;
} else {
return ret_value__13876__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__ = function(state_15909){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____1.call(this,state_15909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__;
})()
})();
var state__14616__auto__ = (function (){var statearr_15978 = f__14615__auto__();
(statearr_15978[(6)] = c__14614__auto___19431);

return statearr_15978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14616__auto__);
}));


var c__14614__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14615__auto__ = (function (){var switch__13874__auto__ = (function (state_16025){
var state_val_16027 = (state_16025[(1)]);
if((state_val_16027 === (7))){
var inst_16020 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
var statearr_16030_19451 = state_16025__$1;
(statearr_16030_19451[(2)] = inst_16020);

(statearr_16030_19451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (20))){
var state_16025__$1 = state_16025;
var statearr_16033_19452 = state_16025__$1;
(statearr_16033_19452[(2)] = null);

(statearr_16033_19452[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (1))){
var state_16025__$1 = state_16025;
var statearr_16037_19453 = state_16025__$1;
(statearr_16037_19453[(2)] = null);

(statearr_16037_19453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (4))){
var inst_15985 = (state_16025[(7)]);
var inst_15985__$1 = (state_16025[(2)]);
var inst_15988 = (inst_15985__$1 == null);
var state_16025__$1 = (function (){var statearr_16038 = state_16025;
(statearr_16038[(7)] = inst_15985__$1);

return statearr_16038;
})();
if(cljs.core.truth_(inst_15988)){
var statearr_16040_19454 = state_16025__$1;
(statearr_16040_19454[(1)] = (5));

} else {
var statearr_16041_19455 = state_16025__$1;
(statearr_16041_19455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (15))){
var inst_16002 = (state_16025[(8)]);
var state_16025__$1 = state_16025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16025__$1,(18),to,inst_16002);
} else {
if((state_val_16027 === (21))){
var inst_16015 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
var statearr_16043_19458 = state_16025__$1;
(statearr_16043_19458[(2)] = inst_16015);

(statearr_16043_19458[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (13))){
var inst_16017 = (state_16025[(2)]);
var state_16025__$1 = (function (){var statearr_16048 = state_16025;
(statearr_16048[(9)] = inst_16017);

return statearr_16048;
})();
var statearr_16049_19459 = state_16025__$1;
(statearr_16049_19459[(2)] = null);

(statearr_16049_19459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (6))){
var inst_15985 = (state_16025[(7)]);
var state_16025__$1 = state_16025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16025__$1,(11),inst_15985);
} else {
if((state_val_16027 === (17))){
var inst_16010 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
if(cljs.core.truth_(inst_16010)){
var statearr_16054_19460 = state_16025__$1;
(statearr_16054_19460[(1)] = (19));

} else {
var statearr_16056_19461 = state_16025__$1;
(statearr_16056_19461[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (3))){
var inst_16022 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16025__$1,inst_16022);
} else {
if((state_val_16027 === (12))){
var inst_15999 = (state_16025[(10)]);
var state_16025__$1 = state_16025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16025__$1,(14),inst_15999);
} else {
if((state_val_16027 === (2))){
var state_16025__$1 = state_16025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16025__$1,(4),results);
} else {
if((state_val_16027 === (19))){
var state_16025__$1 = state_16025;
var statearr_16065_19463 = state_16025__$1;
(statearr_16065_19463[(2)] = null);

(statearr_16065_19463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (11))){
var inst_15999 = (state_16025[(2)]);
var state_16025__$1 = (function (){var statearr_16072 = state_16025;
(statearr_16072[(10)] = inst_15999);

return statearr_16072;
})();
var statearr_16073_19465 = state_16025__$1;
(statearr_16073_19465[(2)] = null);

(statearr_16073_19465[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (9))){
var state_16025__$1 = state_16025;
var statearr_16075_19466 = state_16025__$1;
(statearr_16075_19466[(2)] = null);

(statearr_16075_19466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (5))){
var state_16025__$1 = state_16025;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16080_19468 = state_16025__$1;
(statearr_16080_19468[(1)] = (8));

} else {
var statearr_16082_19469 = state_16025__$1;
(statearr_16082_19469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (14))){
var inst_16002 = (state_16025[(8)]);
var inst_16004 = (state_16025[(11)]);
var inst_16002__$1 = (state_16025[(2)]);
var inst_16003 = (inst_16002__$1 == null);
var inst_16004__$1 = cljs.core.not(inst_16003);
var state_16025__$1 = (function (){var statearr_16091 = state_16025;
(statearr_16091[(8)] = inst_16002__$1);

(statearr_16091[(11)] = inst_16004__$1);

return statearr_16091;
})();
if(inst_16004__$1){
var statearr_16093_19479 = state_16025__$1;
(statearr_16093_19479[(1)] = (15));

} else {
var statearr_16094_19480 = state_16025__$1;
(statearr_16094_19480[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (16))){
var inst_16004 = (state_16025[(11)]);
var state_16025__$1 = state_16025;
var statearr_16113_19485 = state_16025__$1;
(statearr_16113_19485[(2)] = inst_16004);

(statearr_16113_19485[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (10))){
var inst_15996 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
var statearr_16123_19491 = state_16025__$1;
(statearr_16123_19491[(2)] = inst_15996);

(statearr_16123_19491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (18))){
var inst_16007 = (state_16025[(2)]);
var state_16025__$1 = state_16025;
var statearr_16125_19499 = state_16025__$1;
(statearr_16125_19499[(2)] = inst_16007);

(statearr_16125_19499[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (8))){
var inst_15993 = cljs.core.async.close_BANG_(to);
var state_16025__$1 = state_16025;
var statearr_16131_19508 = state_16025__$1;
(statearr_16131_19508[(2)] = inst_15993);

(statearr_16131_19508[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____0 = (function (){
var statearr_16145 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16145[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__);

(statearr_16145[(1)] = (1));

return statearr_16145;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____1 = (function (state_16025){
while(true){
var ret_value__13876__auto__ = (function (){try{while(true){
var result__13877__auto__ = switch__13874__auto__(state_16025);
if(cljs.core.keyword_identical_QMARK_(result__13877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13877__auto__;
}
break;
}
}catch (e16151){var ex__13878__auto__ = e16151;
var statearr_16154_19509 = state_16025;
(statearr_16154_19509[(2)] = ex__13878__auto__);


if(cljs.core.seq((state_16025[(4)]))){
var statearr_16162_19510 = state_16025;
(statearr_16162_19510[(1)] = cljs.core.first((state_16025[(4)])));

} else {
throw ex__13878__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19511 = state_16025;
state_16025 = G__19511;
continue;
} else {
return ret_value__13876__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__ = function(state_16025){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____1.call(this,state_16025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13875__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13875__auto__;
})()
})();
var state__14616__auto__ = (function (){var statearr_16182 = f__14615__auto__();
(statearr_16182[(6)] = c__14614__auto__);

return statearr_16182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14616__auto__);
}));

return c__14614__auto__;
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
var G__16233 = arguments.length;
switch (G__16233) {
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
var G__16314 = arguments.length;
switch (G__16314) {
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
var G__16379 = arguments.length;
switch (G__16379) {
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
var c__14614__auto___19528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14615__auto__ = (function (){var switch__13874__auto__ = (function (state_16452){
var state_val_16457 = (state_16452[(1)]);
if((state_val_16457 === (7))){
var inst_16445 = (state_16452[(2)]);
var state_16452__$1 = state_16452;
var statearr_16484_19529 = state_16452__$1;
(statearr_16484_19529[(2)] = inst_16445);

(statearr_16484_19529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (1))){
var state_16452__$1 = state_16452;
var statearr_16488_19530 = state_16452__$1;
(statearr_16488_19530[(2)] = null);

(statearr_16488_19530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (4))){
var inst_16415 = (state_16452[(7)]);
var inst_16415__$1 = (state_16452[(2)]);
var inst_16416 = (inst_16415__$1 == null);
var state_16452__$1 = (function (){var statearr_16494 = state_16452;
(statearr_16494[(7)] = inst_16415__$1);

return statearr_16494;
})();
if(cljs.core.truth_(inst_16416)){
var statearr_16503_19531 = state_16452__$1;
(statearr_16503_19531[(1)] = (5));

} else {
var statearr_16506_19532 = state_16452__$1;
(statearr_16506_19532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (13))){
var state_16452__$1 = state_16452;
var statearr_16521_19533 = state_16452__$1;
(statearr_16521_19533[(2)] = null);

(statearr_16521_19533[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (6))){
var inst_16415 = (state_16452[(7)]);
var inst_16428 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16415) : p.call(null,inst_16415));
var state_16452__$1 = state_16452;
if(cljs.core.truth_(inst_16428)){
var statearr_16533_19534 = state_16452__$1;
(statearr_16533_19534[(1)] = (9));

} else {
var statearr_16536_19535 = state_16452__$1;
(statearr_16536_19535[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (3))){
var inst_16447 = (state_16452[(2)]);
var state_16452__$1 = state_16452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16452__$1,inst_16447);
} else {
if((state_val_16457 === (12))){
var state_16452__$1 = state_16452;
var statearr_16546_19541 = state_16452__$1;
(statearr_16546_19541[(2)] = null);

(statearr_16546_19541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (2))){
var state_16452__$1 = state_16452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16452__$1,(4),ch);
} else {
if((state_val_16457 === (11))){
var inst_16415 = (state_16452[(7)]);
var inst_16434 = (state_16452[(2)]);
var state_16452__$1 = state_16452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16452__$1,(8),inst_16434,inst_16415);
} else {
if((state_val_16457 === (9))){
var state_16452__$1 = state_16452;
var statearr_16569_19542 = state_16452__$1;
(statearr_16569_19542[(2)] = tc);

(statearr_16569_19542[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (5))){
var inst_16419 = cljs.core.async.close_BANG_(tc);
var inst_16420 = cljs.core.async.close_BANG_(fc);
var state_16452__$1 = (function (){var statearr_16578 = state_16452;
(statearr_16578[(8)] = inst_16419);

return statearr_16578;
})();
var statearr_16582_19543 = state_16452__$1;
(statearr_16582_19543[(2)] = inst_16420);

(statearr_16582_19543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (14))){
var inst_16443 = (state_16452[(2)]);
var state_16452__$1 = state_16452;
var statearr_16589_19544 = state_16452__$1;
(statearr_16589_19544[(2)] = inst_16443);

(statearr_16589_19544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (10))){
var state_16452__$1 = state_16452;
var statearr_16593_19545 = state_16452__$1;
(statearr_16593_19545[(2)] = fc);

(statearr_16593_19545[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (8))){
var inst_16437 = (state_16452[(2)]);
var state_16452__$1 = state_16452;
if(cljs.core.truth_(inst_16437)){
var statearr_16597_19546 = state_16452__$1;
(statearr_16597_19546[(1)] = (12));

} else {
var statearr_16599_19547 = state_16452__$1;
(statearr_16599_19547[(1)] = (13));

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
var cljs$core$async$state_machine__13875__auto__ = null;
var cljs$core$async$state_machine__13875__auto____0 = (function (){
var statearr_16613 = [null,null,null,null,null,null,null,null,null];
(statearr_16613[(0)] = cljs$core$async$state_machine__13875__auto__);

(statearr_16613[(1)] = (1));

return statearr_16613;
});
var cljs$core$async$state_machine__13875__auto____1 = (function (state_16452){
while(true){
var ret_value__13876__auto__ = (function (){try{while(true){
var result__13877__auto__ = switch__13874__auto__(state_16452);
if(cljs.core.keyword_identical_QMARK_(result__13877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13877__auto__;
}
break;
}
}catch (e16617){var ex__13878__auto__ = e16617;
var statearr_16624_19548 = state_16452;
(statearr_16624_19548[(2)] = ex__13878__auto__);


if(cljs.core.seq((state_16452[(4)]))){
var statearr_16630_19549 = state_16452;
(statearr_16630_19549[(1)] = cljs.core.first((state_16452[(4)])));

} else {
throw ex__13878__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19550 = state_16452;
state_16452 = G__19550;
continue;
} else {
return ret_value__13876__auto__;
}
break;
}
});
cljs$core$async$state_machine__13875__auto__ = function(state_16452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13875__auto____1.call(this,state_16452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13875__auto____0;
cljs$core$async$state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13875__auto____1;
return cljs$core$async$state_machine__13875__auto__;
})()
})();
var state__14616__auto__ = (function (){var statearr_16638 = f__14615__auto__();
(statearr_16638[(6)] = c__14614__auto___19528);

return statearr_16638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14616__auto__);
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
var c__14614__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14615__auto__ = (function (){var switch__13874__auto__ = (function (state_16703){
var state_val_16704 = (state_16703[(1)]);
if((state_val_16704 === (7))){
var inst_16699 = (state_16703[(2)]);
var state_16703__$1 = state_16703;
var statearr_16719_19551 = state_16703__$1;
(statearr_16719_19551[(2)] = inst_16699);

(statearr_16719_19551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16704 === (1))){
var inst_16670 = init;
var inst_16671 = inst_16670;
var state_16703__$1 = (function (){var statearr_16720 = state_16703;
(statearr_16720[(7)] = inst_16671);

return statearr_16720;
})();
var statearr_16721_19552 = state_16703__$1;
(statearr_16721_19552[(2)] = null);

(statearr_16721_19552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16704 === (4))){
var inst_16680 = (state_16703[(8)]);
var inst_16680__$1 = (state_16703[(2)]);
var inst_16682 = (inst_16680__$1 == null);
var state_16703__$1 = (function (){var statearr_16722 = state_16703;
(statearr_16722[(8)] = inst_16680__$1);

return statearr_16722;
})();
if(cljs.core.truth_(inst_16682)){
var statearr_16725_19553 = state_16703__$1;
(statearr_16725_19553[(1)] = (5));

} else {
var statearr_16728_19554 = state_16703__$1;
(statearr_16728_19554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16704 === (6))){
var inst_16671 = (state_16703[(7)]);
var inst_16680 = (state_16703[(8)]);
var inst_16686 = (state_16703[(9)]);
var inst_16686__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16671,inst_16680) : f.call(null,inst_16671,inst_16680));
var inst_16687 = cljs.core.reduced_QMARK_(inst_16686__$1);
var state_16703__$1 = (function (){var statearr_16735 = state_16703;
(statearr_16735[(9)] = inst_16686__$1);

return statearr_16735;
})();
if(inst_16687){
var statearr_16739_19555 = state_16703__$1;
(statearr_16739_19555[(1)] = (8));

} else {
var statearr_16740_19558 = state_16703__$1;
(statearr_16740_19558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16704 === (3))){
var inst_16701 = (state_16703[(2)]);
var state_16703__$1 = state_16703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16703__$1,inst_16701);
} else {
if((state_val_16704 === (2))){
var state_16703__$1 = state_16703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16703__$1,(4),ch);
} else {
if((state_val_16704 === (9))){
var inst_16686 = (state_16703[(9)]);
var inst_16671 = inst_16686;
var state_16703__$1 = (function (){var statearr_16755 = state_16703;
(statearr_16755[(7)] = inst_16671);

return statearr_16755;
})();
var statearr_16756_19559 = state_16703__$1;
(statearr_16756_19559[(2)] = null);

(statearr_16756_19559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16704 === (5))){
var inst_16671 = (state_16703[(7)]);
var state_16703__$1 = state_16703;
var statearr_16761_19560 = state_16703__$1;
(statearr_16761_19560[(2)] = inst_16671);

(statearr_16761_19560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16704 === (10))){
var inst_16697 = (state_16703[(2)]);
var state_16703__$1 = state_16703;
var statearr_16763_19561 = state_16703__$1;
(statearr_16763_19561[(2)] = inst_16697);

(statearr_16763_19561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16704 === (8))){
var inst_16686 = (state_16703[(9)]);
var inst_16693 = cljs.core.deref(inst_16686);
var state_16703__$1 = state_16703;
var statearr_16767_19562 = state_16703__$1;
(statearr_16767_19562[(2)] = inst_16693);

(statearr_16767_19562[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__13875__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13875__auto____0 = (function (){
var statearr_16769 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16769[(0)] = cljs$core$async$reduce_$_state_machine__13875__auto__);

(statearr_16769[(1)] = (1));

return statearr_16769;
});
var cljs$core$async$reduce_$_state_machine__13875__auto____1 = (function (state_16703){
while(true){
var ret_value__13876__auto__ = (function (){try{while(true){
var result__13877__auto__ = switch__13874__auto__(state_16703);
if(cljs.core.keyword_identical_QMARK_(result__13877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13877__auto__;
}
break;
}
}catch (e16775){var ex__13878__auto__ = e16775;
var statearr_16777_19563 = state_16703;
(statearr_16777_19563[(2)] = ex__13878__auto__);


if(cljs.core.seq((state_16703[(4)]))){
var statearr_16778_19564 = state_16703;
(statearr_16778_19564[(1)] = cljs.core.first((state_16703[(4)])));

} else {
throw ex__13878__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19565 = state_16703;
state_16703 = G__19565;
continue;
} else {
return ret_value__13876__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13875__auto__ = function(state_16703){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13875__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13875__auto____1.call(this,state_16703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13875__auto____0;
cljs$core$async$reduce_$_state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13875__auto____1;
return cljs$core$async$reduce_$_state_machine__13875__auto__;
})()
})();
var state__14616__auto__ = (function (){var statearr_16786 = f__14615__auto__();
(statearr_16786[(6)] = c__14614__auto__);

return statearr_16786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14616__auto__);
}));

return c__14614__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14614__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14615__auto__ = (function (){var switch__13874__auto__ = (function (state_16808){
var state_val_16809 = (state_16808[(1)]);
if((state_val_16809 === (1))){
var inst_16799 = cljs.core.async.reduce(f__$1,init,ch);
var state_16808__$1 = state_16808;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16808__$1,(2),inst_16799);
} else {
if((state_val_16809 === (2))){
var inst_16801 = (state_16808[(2)]);
var inst_16805 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16801) : f__$1.call(null,inst_16801));
var state_16808__$1 = state_16808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16808__$1,inst_16805);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13875__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13875__auto____0 = (function (){
var statearr_16832 = [null,null,null,null,null,null,null];
(statearr_16832[(0)] = cljs$core$async$transduce_$_state_machine__13875__auto__);

(statearr_16832[(1)] = (1));

return statearr_16832;
});
var cljs$core$async$transduce_$_state_machine__13875__auto____1 = (function (state_16808){
while(true){
var ret_value__13876__auto__ = (function (){try{while(true){
var result__13877__auto__ = switch__13874__auto__(state_16808);
if(cljs.core.keyword_identical_QMARK_(result__13877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13877__auto__;
}
break;
}
}catch (e16836){var ex__13878__auto__ = e16836;
var statearr_16839_19566 = state_16808;
(statearr_16839_19566[(2)] = ex__13878__auto__);


if(cljs.core.seq((state_16808[(4)]))){
var statearr_16840_19567 = state_16808;
(statearr_16840_19567[(1)] = cljs.core.first((state_16808[(4)])));

} else {
throw ex__13878__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19568 = state_16808;
state_16808 = G__19568;
continue;
} else {
return ret_value__13876__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13875__auto__ = function(state_16808){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13875__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13875__auto____1.call(this,state_16808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13875__auto____0;
cljs$core$async$transduce_$_state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13875__auto____1;
return cljs$core$async$transduce_$_state_machine__13875__auto__;
})()
})();
var state__14616__auto__ = (function (){var statearr_16843 = f__14615__auto__();
(statearr_16843[(6)] = c__14614__auto__);

return statearr_16843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14616__auto__);
}));

return c__14614__auto__;
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
var G__16845 = arguments.length;
switch (G__16845) {
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
var c__14614__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14615__auto__ = (function (){var switch__13874__auto__ = (function (state_16881){
var state_val_16882 = (state_16881[(1)]);
if((state_val_16882 === (7))){
var inst_16863 = (state_16881[(2)]);
var state_16881__$1 = state_16881;
var statearr_16885_19574 = state_16881__$1;
(statearr_16885_19574[(2)] = inst_16863);

(statearr_16885_19574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (1))){
var inst_16852 = cljs.core.seq(coll);
var inst_16856 = inst_16852;
var state_16881__$1 = (function (){var statearr_16886 = state_16881;
(statearr_16886[(7)] = inst_16856);

return statearr_16886;
})();
var statearr_16887_19575 = state_16881__$1;
(statearr_16887_19575[(2)] = null);

(statearr_16887_19575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (4))){
var inst_16856 = (state_16881[(7)]);
var inst_16861 = cljs.core.first(inst_16856);
var state_16881__$1 = state_16881;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16881__$1,(7),ch,inst_16861);
} else {
if((state_val_16882 === (13))){
var inst_16875 = (state_16881[(2)]);
var state_16881__$1 = state_16881;
var statearr_16889_19576 = state_16881__$1;
(statearr_16889_19576[(2)] = inst_16875);

(statearr_16889_19576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (6))){
var inst_16866 = (state_16881[(2)]);
var state_16881__$1 = state_16881;
if(cljs.core.truth_(inst_16866)){
var statearr_16890_19577 = state_16881__$1;
(statearr_16890_19577[(1)] = (8));

} else {
var statearr_16891_19578 = state_16881__$1;
(statearr_16891_19578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (3))){
var inst_16879 = (state_16881[(2)]);
var state_16881__$1 = state_16881;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16881__$1,inst_16879);
} else {
if((state_val_16882 === (12))){
var state_16881__$1 = state_16881;
var statearr_16893_19581 = state_16881__$1;
(statearr_16893_19581[(2)] = null);

(statearr_16893_19581[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (2))){
var inst_16856 = (state_16881[(7)]);
var state_16881__$1 = state_16881;
if(cljs.core.truth_(inst_16856)){
var statearr_16894_19582 = state_16881__$1;
(statearr_16894_19582[(1)] = (4));

} else {
var statearr_16895_19584 = state_16881__$1;
(statearr_16895_19584[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (11))){
var inst_16872 = cljs.core.async.close_BANG_(ch);
var state_16881__$1 = state_16881;
var statearr_16896_19587 = state_16881__$1;
(statearr_16896_19587[(2)] = inst_16872);

(statearr_16896_19587[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (9))){
var state_16881__$1 = state_16881;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16901_19589 = state_16881__$1;
(statearr_16901_19589[(1)] = (11));

} else {
var statearr_16902_19590 = state_16881__$1;
(statearr_16902_19590[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (5))){
var inst_16856 = (state_16881[(7)]);
var state_16881__$1 = state_16881;
var statearr_16903_19591 = state_16881__$1;
(statearr_16903_19591[(2)] = inst_16856);

(statearr_16903_19591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (10))){
var inst_16877 = (state_16881[(2)]);
var state_16881__$1 = state_16881;
var statearr_16904_19592 = state_16881__$1;
(statearr_16904_19592[(2)] = inst_16877);

(statearr_16904_19592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16882 === (8))){
var inst_16856 = (state_16881[(7)]);
var inst_16868 = cljs.core.next(inst_16856);
var inst_16856__$1 = inst_16868;
var state_16881__$1 = (function (){var statearr_16905 = state_16881;
(statearr_16905[(7)] = inst_16856__$1);

return statearr_16905;
})();
var statearr_16907_19593 = state_16881__$1;
(statearr_16907_19593[(2)] = null);

(statearr_16907_19593[(1)] = (2));


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
var cljs$core$async$state_machine__13875__auto__ = null;
var cljs$core$async$state_machine__13875__auto____0 = (function (){
var statearr_16915 = [null,null,null,null,null,null,null,null];
(statearr_16915[(0)] = cljs$core$async$state_machine__13875__auto__);

(statearr_16915[(1)] = (1));

return statearr_16915;
});
var cljs$core$async$state_machine__13875__auto____1 = (function (state_16881){
while(true){
var ret_value__13876__auto__ = (function (){try{while(true){
var result__13877__auto__ = switch__13874__auto__(state_16881);
if(cljs.core.keyword_identical_QMARK_(result__13877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13877__auto__;
}
break;
}
}catch (e16917){var ex__13878__auto__ = e16917;
var statearr_16919_19596 = state_16881;
(statearr_16919_19596[(2)] = ex__13878__auto__);


if(cljs.core.seq((state_16881[(4)]))){
var statearr_16920_19597 = state_16881;
(statearr_16920_19597[(1)] = cljs.core.first((state_16881[(4)])));

} else {
throw ex__13878__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19598 = state_16881;
state_16881 = G__19598;
continue;
} else {
return ret_value__13876__auto__;
}
break;
}
});
cljs$core$async$state_machine__13875__auto__ = function(state_16881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13875__auto____1.call(this,state_16881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13875__auto____0;
cljs$core$async$state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13875__auto____1;
return cljs$core$async$state_machine__13875__auto__;
})()
})();
var state__14616__auto__ = (function (){var statearr_16923 = f__14615__auto__();
(statearr_16923[(6)] = c__14614__auto__);

return statearr_16923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14616__auto__);
}));

return c__14614__auto__;
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
var G__16930 = arguments.length;
switch (G__16930) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_19618 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_19618(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19619 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_19619(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19620 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_19620(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19621 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_19621(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16996 = (function (ch,cs,meta16997){
this.ch = ch;
this.cs = cs;
this.meta16997 = meta16997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16998,meta16997__$1){
var self__ = this;
var _16998__$1 = this;
return (new cljs.core.async.t_cljs$core$async16996(self__.ch,self__.cs,meta16997__$1));
}));

(cljs.core.async.t_cljs$core$async16996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16998){
var self__ = this;
var _16998__$1 = this;
return self__.meta16997;
}));

(cljs.core.async.t_cljs$core$async16996.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16996.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16996.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16996.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16996.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16996.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16997","meta16997",2073920064,null)], null);
}));

(cljs.core.async.t_cljs$core$async16996.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16996");

(cljs.core.async.t_cljs$core$async16996.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16996");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16996.
 */
cljs.core.async.__GT_t_cljs$core$async16996 = (function cljs$core$async$__GT_t_cljs$core$async16996(ch,cs,meta16997){
return (new cljs.core.async.t_cljs$core$async16996(ch,cs,meta16997));
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
var m = (new cljs.core.async.t_cljs$core$async16996(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14614__auto___19625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14615__auto__ = (function (){var switch__13874__auto__ = (function (state_17166){
var state_val_17167 = (state_17166[(1)]);
if((state_val_17167 === (7))){
var inst_17160 = (state_17166[(2)]);
var state_17166__$1 = state_17166;
var statearr_17169_19626 = state_17166__$1;
(statearr_17169_19626[(2)] = inst_17160);

(statearr_17169_19626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (20))){
var inst_17050 = (state_17166[(7)]);
var inst_17062 = cljs.core.first(inst_17050);
var inst_17063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17062,(0),null);
var inst_17064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17062,(1),null);
var state_17166__$1 = (function (){var statearr_17170 = state_17166;
(statearr_17170[(8)] = inst_17063);

return statearr_17170;
})();
if(cljs.core.truth_(inst_17064)){
var statearr_17171_19627 = state_17166__$1;
(statearr_17171_19627[(1)] = (22));

} else {
var statearr_17172_19628 = state_17166__$1;
(statearr_17172_19628[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (27))){
var inst_17096 = (state_17166[(9)]);
var inst_17098 = (state_17166[(10)]);
var inst_17107 = (state_17166[(11)]);
var inst_17013 = (state_17166[(12)]);
var inst_17107__$1 = cljs.core._nth(inst_17096,inst_17098);
var inst_17108 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17107__$1,inst_17013,done);
var state_17166__$1 = (function (){var statearr_17182 = state_17166;
(statearr_17182[(11)] = inst_17107__$1);

return statearr_17182;
})();
if(cljs.core.truth_(inst_17108)){
var statearr_17183_19629 = state_17166__$1;
(statearr_17183_19629[(1)] = (30));

} else {
var statearr_17184_19630 = state_17166__$1;
(statearr_17184_19630[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (1))){
var state_17166__$1 = state_17166;
var statearr_17187_19631 = state_17166__$1;
(statearr_17187_19631[(2)] = null);

(statearr_17187_19631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (24))){
var inst_17050 = (state_17166[(7)]);
var inst_17069 = (state_17166[(2)]);
var inst_17070 = cljs.core.next(inst_17050);
var inst_17024 = inst_17070;
var inst_17026 = null;
var inst_17027 = (0);
var inst_17028 = (0);
var state_17166__$1 = (function (){var statearr_17188 = state_17166;
(statearr_17188[(13)] = inst_17069);

(statearr_17188[(14)] = inst_17024);

(statearr_17188[(15)] = inst_17026);

(statearr_17188[(16)] = inst_17027);

(statearr_17188[(17)] = inst_17028);

return statearr_17188;
})();
var statearr_17189_19633 = state_17166__$1;
(statearr_17189_19633[(2)] = null);

(statearr_17189_19633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (39))){
var state_17166__$1 = state_17166;
var statearr_17193_19634 = state_17166__$1;
(statearr_17193_19634[(2)] = null);

(statearr_17193_19634[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (4))){
var inst_17013 = (state_17166[(12)]);
var inst_17013__$1 = (state_17166[(2)]);
var inst_17014 = (inst_17013__$1 == null);
var state_17166__$1 = (function (){var statearr_17194 = state_17166;
(statearr_17194[(12)] = inst_17013__$1);

return statearr_17194;
})();
if(cljs.core.truth_(inst_17014)){
var statearr_17195_19635 = state_17166__$1;
(statearr_17195_19635[(1)] = (5));

} else {
var statearr_17196_19636 = state_17166__$1;
(statearr_17196_19636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (15))){
var inst_17028 = (state_17166[(17)]);
var inst_17024 = (state_17166[(14)]);
var inst_17026 = (state_17166[(15)]);
var inst_17027 = (state_17166[(16)]);
var inst_17045 = (state_17166[(2)]);
var inst_17046 = (inst_17028 + (1));
var tmp17190 = inst_17026;
var tmp17191 = inst_17027;
var tmp17192 = inst_17024;
var inst_17024__$1 = tmp17192;
var inst_17026__$1 = tmp17190;
var inst_17027__$1 = tmp17191;
var inst_17028__$1 = inst_17046;
var state_17166__$1 = (function (){var statearr_17197 = state_17166;
(statearr_17197[(18)] = inst_17045);

(statearr_17197[(14)] = inst_17024__$1);

(statearr_17197[(15)] = inst_17026__$1);

(statearr_17197[(16)] = inst_17027__$1);

(statearr_17197[(17)] = inst_17028__$1);

return statearr_17197;
})();
var statearr_17198_19637 = state_17166__$1;
(statearr_17198_19637[(2)] = null);

(statearr_17198_19637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (21))){
var inst_17073 = (state_17166[(2)]);
var state_17166__$1 = state_17166;
var statearr_17202_19638 = state_17166__$1;
(statearr_17202_19638[(2)] = inst_17073);

(statearr_17202_19638[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (31))){
var inst_17107 = (state_17166[(11)]);
var inst_17111 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17107);
var state_17166__$1 = state_17166;
var statearr_17203_19639 = state_17166__$1;
(statearr_17203_19639[(2)] = inst_17111);

(statearr_17203_19639[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (32))){
var inst_17098 = (state_17166[(10)]);
var inst_17095 = (state_17166[(19)]);
var inst_17096 = (state_17166[(9)]);
var inst_17097 = (state_17166[(20)]);
var inst_17117 = (state_17166[(2)]);
var inst_17118 = (inst_17098 + (1));
var tmp17199 = inst_17095;
var tmp17200 = inst_17096;
var tmp17201 = inst_17097;
var inst_17095__$1 = tmp17199;
var inst_17096__$1 = tmp17200;
var inst_17097__$1 = tmp17201;
var inst_17098__$1 = inst_17118;
var state_17166__$1 = (function (){var statearr_17206 = state_17166;
(statearr_17206[(21)] = inst_17117);

(statearr_17206[(19)] = inst_17095__$1);

(statearr_17206[(9)] = inst_17096__$1);

(statearr_17206[(20)] = inst_17097__$1);

(statearr_17206[(10)] = inst_17098__$1);

return statearr_17206;
})();
var statearr_17207_19640 = state_17166__$1;
(statearr_17207_19640[(2)] = null);

(statearr_17207_19640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (40))){
var inst_17130 = (state_17166[(22)]);
var inst_17134 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17130);
var state_17166__$1 = state_17166;
var statearr_17209_19641 = state_17166__$1;
(statearr_17209_19641[(2)] = inst_17134);

(statearr_17209_19641[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (33))){
var inst_17121 = (state_17166[(23)]);
var inst_17123 = cljs.core.chunked_seq_QMARK_(inst_17121);
var state_17166__$1 = state_17166;
if(inst_17123){
var statearr_17210_19642 = state_17166__$1;
(statearr_17210_19642[(1)] = (36));

} else {
var statearr_17211_19643 = state_17166__$1;
(statearr_17211_19643[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (13))){
var inst_17037 = (state_17166[(24)]);
var inst_17042 = cljs.core.async.close_BANG_(inst_17037);
var state_17166__$1 = state_17166;
var statearr_17212_19644 = state_17166__$1;
(statearr_17212_19644[(2)] = inst_17042);

(statearr_17212_19644[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (22))){
var inst_17063 = (state_17166[(8)]);
var inst_17066 = cljs.core.async.close_BANG_(inst_17063);
var state_17166__$1 = state_17166;
var statearr_17217_19648 = state_17166__$1;
(statearr_17217_19648[(2)] = inst_17066);

(statearr_17217_19648[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (36))){
var inst_17121 = (state_17166[(23)]);
var inst_17125 = cljs.core.chunk_first(inst_17121);
var inst_17126 = cljs.core.chunk_rest(inst_17121);
var inst_17127 = cljs.core.count(inst_17125);
var inst_17095 = inst_17126;
var inst_17096 = inst_17125;
var inst_17097 = inst_17127;
var inst_17098 = (0);
var state_17166__$1 = (function (){var statearr_17218 = state_17166;
(statearr_17218[(19)] = inst_17095);

(statearr_17218[(9)] = inst_17096);

(statearr_17218[(20)] = inst_17097);

(statearr_17218[(10)] = inst_17098);

return statearr_17218;
})();
var statearr_17219_19650 = state_17166__$1;
(statearr_17219_19650[(2)] = null);

(statearr_17219_19650[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (41))){
var inst_17121 = (state_17166[(23)]);
var inst_17136 = (state_17166[(2)]);
var inst_17137 = cljs.core.next(inst_17121);
var inst_17095 = inst_17137;
var inst_17096 = null;
var inst_17097 = (0);
var inst_17098 = (0);
var state_17166__$1 = (function (){var statearr_17221 = state_17166;
(statearr_17221[(25)] = inst_17136);

(statearr_17221[(19)] = inst_17095);

(statearr_17221[(9)] = inst_17096);

(statearr_17221[(20)] = inst_17097);

(statearr_17221[(10)] = inst_17098);

return statearr_17221;
})();
var statearr_17222_19651 = state_17166__$1;
(statearr_17222_19651[(2)] = null);

(statearr_17222_19651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (43))){
var state_17166__$1 = state_17166;
var statearr_17223_19652 = state_17166__$1;
(statearr_17223_19652[(2)] = null);

(statearr_17223_19652[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (29))){
var inst_17145 = (state_17166[(2)]);
var state_17166__$1 = state_17166;
var statearr_17224_19653 = state_17166__$1;
(statearr_17224_19653[(2)] = inst_17145);

(statearr_17224_19653[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (44))){
var inst_17157 = (state_17166[(2)]);
var state_17166__$1 = (function (){var statearr_17225 = state_17166;
(statearr_17225[(26)] = inst_17157);

return statearr_17225;
})();
var statearr_17226_19654 = state_17166__$1;
(statearr_17226_19654[(2)] = null);

(statearr_17226_19654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (6))){
var inst_17083 = (state_17166[(27)]);
var inst_17082 = cljs.core.deref(cs);
var inst_17083__$1 = cljs.core.keys(inst_17082);
var inst_17084 = cljs.core.count(inst_17083__$1);
var inst_17085 = cljs.core.reset_BANG_(dctr,inst_17084);
var inst_17094 = cljs.core.seq(inst_17083__$1);
var inst_17095 = inst_17094;
var inst_17096 = null;
var inst_17097 = (0);
var inst_17098 = (0);
var state_17166__$1 = (function (){var statearr_17228 = state_17166;
(statearr_17228[(27)] = inst_17083__$1);

(statearr_17228[(28)] = inst_17085);

(statearr_17228[(19)] = inst_17095);

(statearr_17228[(9)] = inst_17096);

(statearr_17228[(20)] = inst_17097);

(statearr_17228[(10)] = inst_17098);

return statearr_17228;
})();
var statearr_17232_19655 = state_17166__$1;
(statearr_17232_19655[(2)] = null);

(statearr_17232_19655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (28))){
var inst_17095 = (state_17166[(19)]);
var inst_17121 = (state_17166[(23)]);
var inst_17121__$1 = cljs.core.seq(inst_17095);
var state_17166__$1 = (function (){var statearr_17236 = state_17166;
(statearr_17236[(23)] = inst_17121__$1);

return statearr_17236;
})();
if(inst_17121__$1){
var statearr_17238_19656 = state_17166__$1;
(statearr_17238_19656[(1)] = (33));

} else {
var statearr_17239_19657 = state_17166__$1;
(statearr_17239_19657[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (25))){
var inst_17098 = (state_17166[(10)]);
var inst_17097 = (state_17166[(20)]);
var inst_17104 = (inst_17098 < inst_17097);
var inst_17105 = inst_17104;
var state_17166__$1 = state_17166;
if(cljs.core.truth_(inst_17105)){
var statearr_17245_19658 = state_17166__$1;
(statearr_17245_19658[(1)] = (27));

} else {
var statearr_17251_19659 = state_17166__$1;
(statearr_17251_19659[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (34))){
var state_17166__$1 = state_17166;
var statearr_17260_19660 = state_17166__$1;
(statearr_17260_19660[(2)] = null);

(statearr_17260_19660[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (17))){
var state_17166__$1 = state_17166;
var statearr_17261_19661 = state_17166__$1;
(statearr_17261_19661[(2)] = null);

(statearr_17261_19661[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (3))){
var inst_17164 = (state_17166[(2)]);
var state_17166__$1 = state_17166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17166__$1,inst_17164);
} else {
if((state_val_17167 === (12))){
var inst_17078 = (state_17166[(2)]);
var state_17166__$1 = state_17166;
var statearr_17277_19663 = state_17166__$1;
(statearr_17277_19663[(2)] = inst_17078);

(statearr_17277_19663[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (2))){
var state_17166__$1 = state_17166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17166__$1,(4),ch);
} else {
if((state_val_17167 === (23))){
var state_17166__$1 = state_17166;
var statearr_17283_19664 = state_17166__$1;
(statearr_17283_19664[(2)] = null);

(statearr_17283_19664[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (35))){
var inst_17143 = (state_17166[(2)]);
var state_17166__$1 = state_17166;
var statearr_17295_19666 = state_17166__$1;
(statearr_17295_19666[(2)] = inst_17143);

(statearr_17295_19666[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (19))){
var inst_17050 = (state_17166[(7)]);
var inst_17054 = cljs.core.chunk_first(inst_17050);
var inst_17055 = cljs.core.chunk_rest(inst_17050);
var inst_17056 = cljs.core.count(inst_17054);
var inst_17024 = inst_17055;
var inst_17026 = inst_17054;
var inst_17027 = inst_17056;
var inst_17028 = (0);
var state_17166__$1 = (function (){var statearr_17306 = state_17166;
(statearr_17306[(14)] = inst_17024);

(statearr_17306[(15)] = inst_17026);

(statearr_17306[(16)] = inst_17027);

(statearr_17306[(17)] = inst_17028);

return statearr_17306;
})();
var statearr_17308_19667 = state_17166__$1;
(statearr_17308_19667[(2)] = null);

(statearr_17308_19667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (11))){
var inst_17024 = (state_17166[(14)]);
var inst_17050 = (state_17166[(7)]);
var inst_17050__$1 = cljs.core.seq(inst_17024);
var state_17166__$1 = (function (){var statearr_17316 = state_17166;
(statearr_17316[(7)] = inst_17050__$1);

return statearr_17316;
})();
if(inst_17050__$1){
var statearr_17317_19670 = state_17166__$1;
(statearr_17317_19670[(1)] = (16));

} else {
var statearr_17318_19671 = state_17166__$1;
(statearr_17318_19671[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (9))){
var inst_17080 = (state_17166[(2)]);
var state_17166__$1 = state_17166;
var statearr_17319_19672 = state_17166__$1;
(statearr_17319_19672[(2)] = inst_17080);

(statearr_17319_19672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (5))){
var inst_17021 = cljs.core.deref(cs);
var inst_17022 = cljs.core.seq(inst_17021);
var inst_17024 = inst_17022;
var inst_17026 = null;
var inst_17027 = (0);
var inst_17028 = (0);
var state_17166__$1 = (function (){var statearr_17320 = state_17166;
(statearr_17320[(14)] = inst_17024);

(statearr_17320[(15)] = inst_17026);

(statearr_17320[(16)] = inst_17027);

(statearr_17320[(17)] = inst_17028);

return statearr_17320;
})();
var statearr_17322_19673 = state_17166__$1;
(statearr_17322_19673[(2)] = null);

(statearr_17322_19673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (14))){
var state_17166__$1 = state_17166;
var statearr_17323_19677 = state_17166__$1;
(statearr_17323_19677[(2)] = null);

(statearr_17323_19677[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (45))){
var inst_17154 = (state_17166[(2)]);
var state_17166__$1 = state_17166;
var statearr_17324_19678 = state_17166__$1;
(statearr_17324_19678[(2)] = inst_17154);

(statearr_17324_19678[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (26))){
var inst_17083 = (state_17166[(27)]);
var inst_17147 = (state_17166[(2)]);
var inst_17151 = cljs.core.seq(inst_17083);
var state_17166__$1 = (function (){var statearr_17327 = state_17166;
(statearr_17327[(29)] = inst_17147);

return statearr_17327;
})();
if(inst_17151){
var statearr_17328_19679 = state_17166__$1;
(statearr_17328_19679[(1)] = (42));

} else {
var statearr_17329_19680 = state_17166__$1;
(statearr_17329_19680[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (16))){
var inst_17050 = (state_17166[(7)]);
var inst_17052 = cljs.core.chunked_seq_QMARK_(inst_17050);
var state_17166__$1 = state_17166;
if(inst_17052){
var statearr_17330_19681 = state_17166__$1;
(statearr_17330_19681[(1)] = (19));

} else {
var statearr_17331_19684 = state_17166__$1;
(statearr_17331_19684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (38))){
var inst_17140 = (state_17166[(2)]);
var state_17166__$1 = state_17166;
var statearr_17332_19691 = state_17166__$1;
(statearr_17332_19691[(2)] = inst_17140);

(statearr_17332_19691[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (30))){
var state_17166__$1 = state_17166;
var statearr_17333_19695 = state_17166__$1;
(statearr_17333_19695[(2)] = null);

(statearr_17333_19695[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (10))){
var inst_17026 = (state_17166[(15)]);
var inst_17028 = (state_17166[(17)]);
var inst_17036 = cljs.core._nth(inst_17026,inst_17028);
var inst_17037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17036,(0),null);
var inst_17040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17036,(1),null);
var state_17166__$1 = (function (){var statearr_17337 = state_17166;
(statearr_17337[(24)] = inst_17037);

return statearr_17337;
})();
if(cljs.core.truth_(inst_17040)){
var statearr_17338_19696 = state_17166__$1;
(statearr_17338_19696[(1)] = (13));

} else {
var statearr_17339_19697 = state_17166__$1;
(statearr_17339_19697[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (18))){
var inst_17076 = (state_17166[(2)]);
var state_17166__$1 = state_17166;
var statearr_17340_19698 = state_17166__$1;
(statearr_17340_19698[(2)] = inst_17076);

(statearr_17340_19698[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (42))){
var state_17166__$1 = state_17166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17166__$1,(45),dchan);
} else {
if((state_val_17167 === (37))){
var inst_17121 = (state_17166[(23)]);
var inst_17130 = (state_17166[(22)]);
var inst_17013 = (state_17166[(12)]);
var inst_17130__$1 = cljs.core.first(inst_17121);
var inst_17131 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17130__$1,inst_17013,done);
var state_17166__$1 = (function (){var statearr_17343 = state_17166;
(statearr_17343[(22)] = inst_17130__$1);

return statearr_17343;
})();
if(cljs.core.truth_(inst_17131)){
var statearr_17344_19699 = state_17166__$1;
(statearr_17344_19699[(1)] = (39));

} else {
var statearr_17345_19700 = state_17166__$1;
(statearr_17345_19700[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (8))){
var inst_17028 = (state_17166[(17)]);
var inst_17027 = (state_17166[(16)]);
var inst_17030 = (inst_17028 < inst_17027);
var inst_17031 = inst_17030;
var state_17166__$1 = state_17166;
if(cljs.core.truth_(inst_17031)){
var statearr_17346_19704 = state_17166__$1;
(statearr_17346_19704[(1)] = (10));

} else {
var statearr_17347_19705 = state_17166__$1;
(statearr_17347_19705[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__13875__auto__ = null;
var cljs$core$async$mult_$_state_machine__13875__auto____0 = (function (){
var statearr_17349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17349[(0)] = cljs$core$async$mult_$_state_machine__13875__auto__);

(statearr_17349[(1)] = (1));

return statearr_17349;
});
var cljs$core$async$mult_$_state_machine__13875__auto____1 = (function (state_17166){
while(true){
var ret_value__13876__auto__ = (function (){try{while(true){
var result__13877__auto__ = switch__13874__auto__(state_17166);
if(cljs.core.keyword_identical_QMARK_(result__13877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13877__auto__;
}
break;
}
}catch (e17350){var ex__13878__auto__ = e17350;
var statearr_17353_19707 = state_17166;
(statearr_17353_19707[(2)] = ex__13878__auto__);


if(cljs.core.seq((state_17166[(4)]))){
var statearr_17354_19708 = state_17166;
(statearr_17354_19708[(1)] = cljs.core.first((state_17166[(4)])));

} else {
throw ex__13878__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19709 = state_17166;
state_17166 = G__19709;
continue;
} else {
return ret_value__13876__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13875__auto__ = function(state_17166){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13875__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13875__auto____1.call(this,state_17166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13875__auto____0;
cljs$core$async$mult_$_state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13875__auto____1;
return cljs$core$async$mult_$_state_machine__13875__auto__;
})()
})();
var state__14616__auto__ = (function (){var statearr_17358 = f__14615__auto__();
(statearr_17358[(6)] = c__14614__auto___19625);

return statearr_17358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14616__auto__);
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
var G__17361 = arguments.length;
switch (G__17361) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_19714 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_19714(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19715 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_19715(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19718 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19718(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19720 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_19720(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19721 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19721(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___19726 = arguments.length;
var i__5877__auto___19727 = (0);
while(true){
if((i__5877__auto___19727 < len__5876__auto___19726)){
args__5882__auto__.push((arguments[i__5877__auto___19727]));

var G__19728 = (i__5877__auto___19727 + (1));
i__5877__auto___19727 = G__19728;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17415){
var map__17416 = p__17415;
var map__17416__$1 = cljs.core.__destructure_map(map__17416);
var opts = map__17416__$1;
var statearr_17419_19729 = state;
(statearr_17419_19729[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17421_19730 = state;
(statearr_17421_19730[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_17423_19731 = state;
(statearr_17423_19731[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17400){
var G__17401 = cljs.core.first(seq17400);
var seq17400__$1 = cljs.core.next(seq17400);
var G__17402 = cljs.core.first(seq17400__$1);
var seq17400__$2 = cljs.core.next(seq17400__$1);
var G__17403 = cljs.core.first(seq17400__$2);
var seq17400__$3 = cljs.core.next(seq17400__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17401,G__17402,G__17403,seq17400__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17435 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17436){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17436 = meta17436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17437,meta17436__$1){
var self__ = this;
var _17437__$1 = this;
return (new cljs.core.async.t_cljs$core$async17435(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17436__$1));
}));

(cljs.core.async.t_cljs$core$async17435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17437){
var self__ = this;
var _17437__$1 = this;
return self__.meta17436;
}));

(cljs.core.async.t_cljs$core$async17435.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17435.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17435.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17435.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17435.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17435.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17435.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17435.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17436","meta17436",-561916240,null)], null);
}));

(cljs.core.async.t_cljs$core$async17435.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17435");

(cljs.core.async.t_cljs$core$async17435.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17435");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17435.
 */
cljs.core.async.__GT_t_cljs$core$async17435 = (function cljs$core$async$__GT_t_cljs$core$async17435(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17436){
return (new cljs.core.async.t_cljs$core$async17435(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17436));
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
var m = (new cljs.core.async.t_cljs$core$async17435(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14614__auto___19744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14615__auto__ = (function (){var switch__13874__auto__ = (function (state_17560){
var state_val_17561 = (state_17560[(1)]);
if((state_val_17561 === (7))){
var inst_17504 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
if(cljs.core.truth_(inst_17504)){
var statearr_17567_19745 = state_17560__$1;
(statearr_17567_19745[(1)] = (8));

} else {
var statearr_17571_19746 = state_17560__$1;
(statearr_17571_19746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (20))){
var inst_17497 = (state_17560[(7)]);
var state_17560__$1 = state_17560;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17560__$1,(23),out,inst_17497);
} else {
if((state_val_17561 === (1))){
var inst_17477 = calc_state();
var inst_17478 = cljs.core.__destructure_map(inst_17477);
var inst_17479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17478,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17478,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17478,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17482 = inst_17477;
var state_17560__$1 = (function (){var statearr_17586 = state_17560;
(statearr_17586[(8)] = inst_17479);

(statearr_17586[(9)] = inst_17480);

(statearr_17586[(10)] = inst_17481);

(statearr_17586[(11)] = inst_17482);

return statearr_17586;
})();
var statearr_17588_19747 = state_17560__$1;
(statearr_17588_19747[(2)] = null);

(statearr_17588_19747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (24))){
var inst_17487 = (state_17560[(12)]);
var inst_17482 = inst_17487;
var state_17560__$1 = (function (){var statearr_17592 = state_17560;
(statearr_17592[(11)] = inst_17482);

return statearr_17592;
})();
var statearr_17593_19748 = state_17560__$1;
(statearr_17593_19748[(2)] = null);

(statearr_17593_19748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (4))){
var inst_17497 = (state_17560[(7)]);
var inst_17499 = (state_17560[(13)]);
var inst_17496 = (state_17560[(2)]);
var inst_17497__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17496,(0),null);
var inst_17498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17496,(1),null);
var inst_17499__$1 = (inst_17497__$1 == null);
var state_17560__$1 = (function (){var statearr_17595 = state_17560;
(statearr_17595[(7)] = inst_17497__$1);

(statearr_17595[(14)] = inst_17498);

(statearr_17595[(13)] = inst_17499__$1);

return statearr_17595;
})();
if(cljs.core.truth_(inst_17499__$1)){
var statearr_17596_19750 = state_17560__$1;
(statearr_17596_19750[(1)] = (5));

} else {
var statearr_17597_19751 = state_17560__$1;
(statearr_17597_19751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (15))){
var inst_17489 = (state_17560[(15)]);
var inst_17523 = (state_17560[(16)]);
var inst_17523__$1 = cljs.core.empty_QMARK_(inst_17489);
var state_17560__$1 = (function (){var statearr_17601 = state_17560;
(statearr_17601[(16)] = inst_17523__$1);

return statearr_17601;
})();
if(inst_17523__$1){
var statearr_17602_19752 = state_17560__$1;
(statearr_17602_19752[(1)] = (17));

} else {
var statearr_17603_19753 = state_17560__$1;
(statearr_17603_19753[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (21))){
var inst_17487 = (state_17560[(12)]);
var inst_17482 = inst_17487;
var state_17560__$1 = (function (){var statearr_17604 = state_17560;
(statearr_17604[(11)] = inst_17482);

return statearr_17604;
})();
var statearr_17605_19754 = state_17560__$1;
(statearr_17605_19754[(2)] = null);

(statearr_17605_19754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (13))){
var inst_17511 = (state_17560[(2)]);
var inst_17512 = calc_state();
var inst_17482 = inst_17512;
var state_17560__$1 = (function (){var statearr_17606 = state_17560;
(statearr_17606[(17)] = inst_17511);

(statearr_17606[(11)] = inst_17482);

return statearr_17606;
})();
var statearr_17607_19755 = state_17560__$1;
(statearr_17607_19755[(2)] = null);

(statearr_17607_19755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (22))){
var inst_17550 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
var statearr_17608_19758 = state_17560__$1;
(statearr_17608_19758[(2)] = inst_17550);

(statearr_17608_19758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (6))){
var inst_17498 = (state_17560[(14)]);
var inst_17502 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17498,change);
var state_17560__$1 = state_17560;
var statearr_17611_19760 = state_17560__$1;
(statearr_17611_19760[(2)] = inst_17502);

(statearr_17611_19760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (25))){
var state_17560__$1 = state_17560;
var statearr_17613_19761 = state_17560__$1;
(statearr_17613_19761[(2)] = null);

(statearr_17613_19761[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (17))){
var inst_17490 = (state_17560[(18)]);
var inst_17498 = (state_17560[(14)]);
var inst_17528 = (inst_17490.cljs$core$IFn$_invoke$arity$1 ? inst_17490.cljs$core$IFn$_invoke$arity$1(inst_17498) : inst_17490.call(null,inst_17498));
var inst_17529 = cljs.core.not(inst_17528);
var state_17560__$1 = state_17560;
var statearr_17614_19764 = state_17560__$1;
(statearr_17614_19764[(2)] = inst_17529);

(statearr_17614_19764[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (3))){
var inst_17554 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17560__$1,inst_17554);
} else {
if((state_val_17561 === (12))){
var state_17560__$1 = state_17560;
var statearr_17615_19768 = state_17560__$1;
(statearr_17615_19768[(2)] = null);

(statearr_17615_19768[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (2))){
var inst_17482 = (state_17560[(11)]);
var inst_17487 = (state_17560[(12)]);
var inst_17487__$1 = cljs.core.__destructure_map(inst_17482);
var inst_17489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17487__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17487__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17487__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17560__$1 = (function (){var statearr_17617 = state_17560;
(statearr_17617[(12)] = inst_17487__$1);

(statearr_17617[(15)] = inst_17489);

(statearr_17617[(18)] = inst_17490);

return statearr_17617;
})();
return cljs.core.async.ioc_alts_BANG_(state_17560__$1,(4),inst_17491);
} else {
if((state_val_17561 === (23))){
var inst_17540 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
if(cljs.core.truth_(inst_17540)){
var statearr_17619_19771 = state_17560__$1;
(statearr_17619_19771[(1)] = (24));

} else {
var statearr_17621_19773 = state_17560__$1;
(statearr_17621_19773[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (19))){
var inst_17532 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
var statearr_17624_19774 = state_17560__$1;
(statearr_17624_19774[(2)] = inst_17532);

(statearr_17624_19774[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (11))){
var inst_17498 = (state_17560[(14)]);
var inst_17508 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17498);
var state_17560__$1 = state_17560;
var statearr_17627_19775 = state_17560__$1;
(statearr_17627_19775[(2)] = inst_17508);

(statearr_17627_19775[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (9))){
var inst_17489 = (state_17560[(15)]);
var inst_17498 = (state_17560[(14)]);
var inst_17517 = (state_17560[(19)]);
var inst_17517__$1 = (inst_17489.cljs$core$IFn$_invoke$arity$1 ? inst_17489.cljs$core$IFn$_invoke$arity$1(inst_17498) : inst_17489.call(null,inst_17498));
var state_17560__$1 = (function (){var statearr_17646 = state_17560;
(statearr_17646[(19)] = inst_17517__$1);

return statearr_17646;
})();
if(cljs.core.truth_(inst_17517__$1)){
var statearr_17647_19776 = state_17560__$1;
(statearr_17647_19776[(1)] = (14));

} else {
var statearr_17651_19777 = state_17560__$1;
(statearr_17651_19777[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (5))){
var inst_17499 = (state_17560[(13)]);
var state_17560__$1 = state_17560;
var statearr_17653_19778 = state_17560__$1;
(statearr_17653_19778[(2)] = inst_17499);

(statearr_17653_19778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (14))){
var inst_17517 = (state_17560[(19)]);
var state_17560__$1 = state_17560;
var statearr_17654_19779 = state_17560__$1;
(statearr_17654_19779[(2)] = inst_17517);

(statearr_17654_19779[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (26))){
var inst_17546 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
var statearr_17656_19780 = state_17560__$1;
(statearr_17656_19780[(2)] = inst_17546);

(statearr_17656_19780[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (16))){
var inst_17537 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
if(cljs.core.truth_(inst_17537)){
var statearr_17661_19781 = state_17560__$1;
(statearr_17661_19781[(1)] = (20));

} else {
var statearr_17662_19782 = state_17560__$1;
(statearr_17662_19782[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (10))){
var inst_17552 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
var statearr_17663_19783 = state_17560__$1;
(statearr_17663_19783[(2)] = inst_17552);

(statearr_17663_19783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (18))){
var inst_17523 = (state_17560[(16)]);
var state_17560__$1 = state_17560;
var statearr_17664_19784 = state_17560__$1;
(statearr_17664_19784[(2)] = inst_17523);

(statearr_17664_19784[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (8))){
var inst_17497 = (state_17560[(7)]);
var inst_17506 = (inst_17497 == null);
var state_17560__$1 = state_17560;
if(cljs.core.truth_(inst_17506)){
var statearr_17665_19787 = state_17560__$1;
(statearr_17665_19787[(1)] = (11));

} else {
var statearr_17666_19788 = state_17560__$1;
(statearr_17666_19788[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__13875__auto__ = null;
var cljs$core$async$mix_$_state_machine__13875__auto____0 = (function (){
var statearr_17667 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17667[(0)] = cljs$core$async$mix_$_state_machine__13875__auto__);

(statearr_17667[(1)] = (1));

return statearr_17667;
});
var cljs$core$async$mix_$_state_machine__13875__auto____1 = (function (state_17560){
while(true){
var ret_value__13876__auto__ = (function (){try{while(true){
var result__13877__auto__ = switch__13874__auto__(state_17560);
if(cljs.core.keyword_identical_QMARK_(result__13877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13877__auto__;
}
break;
}
}catch (e17668){var ex__13878__auto__ = e17668;
var statearr_17669_19797 = state_17560;
(statearr_17669_19797[(2)] = ex__13878__auto__);


if(cljs.core.seq((state_17560[(4)]))){
var statearr_17670_19798 = state_17560;
(statearr_17670_19798[(1)] = cljs.core.first((state_17560[(4)])));

} else {
throw ex__13878__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19799 = state_17560;
state_17560 = G__19799;
continue;
} else {
return ret_value__13876__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13875__auto__ = function(state_17560){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13875__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13875__auto____1.call(this,state_17560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13875__auto____0;
cljs$core$async$mix_$_state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13875__auto____1;
return cljs$core$async$mix_$_state_machine__13875__auto__;
})()
})();
var state__14616__auto__ = (function (){var statearr_17683 = f__14615__auto__();
(statearr_17683[(6)] = c__14614__auto___19744);

return statearr_17683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14616__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_19807 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_19807(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19811 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_19811(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19812 = (function() {
var G__19813 = null;
var G__19813__1 = (function (p){
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
var G__19813__2 = (function (p,v){
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
G__19813 = function(p,v){
switch(arguments.length){
case 1:
return G__19813__1.call(this,p);
case 2:
return G__19813__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19813.cljs$core$IFn$_invoke$arity$1 = G__19813__1;
G__19813.cljs$core$IFn$_invoke$arity$2 = G__19813__2;
return G__19813;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17749 = arguments.length;
switch (G__17749) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19812(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19812(p,v);
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
cljs.core.async.t_cljs$core$async17819 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17820){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17820 = meta17820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17821,meta17820__$1){
var self__ = this;
var _17821__$1 = this;
return (new cljs.core.async.t_cljs$core$async17819(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17820__$1));
}));

(cljs.core.async.t_cljs$core$async17819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17821){
var self__ = this;
var _17821__$1 = this;
return self__.meta17820;
}));

(cljs.core.async.t_cljs$core$async17819.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17819.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17819.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17819.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17819.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async17819.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17819.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17820","meta17820",-1341691536,null)], null);
}));

(cljs.core.async.t_cljs$core$async17819.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17819");

(cljs.core.async.t_cljs$core$async17819.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17819");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17819.
 */
cljs.core.async.__GT_t_cljs$core$async17819 = (function cljs$core$async$__GT_t_cljs$core$async17819(ch,topic_fn,buf_fn,mults,ensure_mult,meta17820){
return (new cljs.core.async.t_cljs$core$async17819(ch,topic_fn,buf_fn,mults,ensure_mult,meta17820));
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
var G__17798 = arguments.length;
switch (G__17798) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17788_SHARP_){
if(cljs.core.truth_((p1__17788_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17788_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17788_SHARP_.call(null,topic)))){
return p1__17788_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17788_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async17819(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14614__auto___19843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14615__auto__ = (function (){var switch__13874__auto__ = (function (state_17963){
var state_val_17964 = (state_17963[(1)]);
if((state_val_17964 === (7))){
var inst_17958 = (state_17963[(2)]);
var state_17963__$1 = state_17963;
var statearr_17975_19844 = state_17963__$1;
(statearr_17975_19844[(2)] = inst_17958);

(statearr_17975_19844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (20))){
var state_17963__$1 = state_17963;
var statearr_17976_19845 = state_17963__$1;
(statearr_17976_19845[(2)] = null);

(statearr_17976_19845[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (1))){
var state_17963__$1 = state_17963;
var statearr_17980_19846 = state_17963__$1;
(statearr_17980_19846[(2)] = null);

(statearr_17980_19846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (24))){
var inst_17940 = (state_17963[(7)]);
var inst_17950 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17940);
var state_17963__$1 = state_17963;
var statearr_17981_19847 = state_17963__$1;
(statearr_17981_19847[(2)] = inst_17950);

(statearr_17981_19847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (4))){
var inst_17881 = (state_17963[(8)]);
var inst_17881__$1 = (state_17963[(2)]);
var inst_17885 = (inst_17881__$1 == null);
var state_17963__$1 = (function (){var statearr_17982 = state_17963;
(statearr_17982[(8)] = inst_17881__$1);

return statearr_17982;
})();
if(cljs.core.truth_(inst_17885)){
var statearr_17984_19854 = state_17963__$1;
(statearr_17984_19854[(1)] = (5));

} else {
var statearr_17988_19855 = state_17963__$1;
(statearr_17988_19855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (15))){
var inst_17934 = (state_17963[(2)]);
var state_17963__$1 = state_17963;
var statearr_17989_19856 = state_17963__$1;
(statearr_17989_19856[(2)] = inst_17934);

(statearr_17989_19856[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (21))){
var inst_17955 = (state_17963[(2)]);
var state_17963__$1 = (function (){var statearr_17990 = state_17963;
(statearr_17990[(9)] = inst_17955);

return statearr_17990;
})();
var statearr_17992_19857 = state_17963__$1;
(statearr_17992_19857[(2)] = null);

(statearr_17992_19857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (13))){
var inst_17912 = (state_17963[(10)]);
var inst_17917 = cljs.core.chunked_seq_QMARK_(inst_17912);
var state_17963__$1 = state_17963;
if(inst_17917){
var statearr_17993_19858 = state_17963__$1;
(statearr_17993_19858[(1)] = (16));

} else {
var statearr_17994_19859 = state_17963__$1;
(statearr_17994_19859[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (22))){
var inst_17947 = (state_17963[(2)]);
var state_17963__$1 = state_17963;
if(cljs.core.truth_(inst_17947)){
var statearr_17995_19866 = state_17963__$1;
(statearr_17995_19866[(1)] = (23));

} else {
var statearr_17996_19867 = state_17963__$1;
(statearr_17996_19867[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (6))){
var inst_17881 = (state_17963[(8)]);
var inst_17940 = (state_17963[(7)]);
var inst_17943 = (state_17963[(11)]);
var inst_17940__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17881) : topic_fn.call(null,inst_17881));
var inst_17941 = cljs.core.deref(mults);
var inst_17943__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17941,inst_17940__$1);
var state_17963__$1 = (function (){var statearr_17997 = state_17963;
(statearr_17997[(7)] = inst_17940__$1);

(statearr_17997[(11)] = inst_17943__$1);

return statearr_17997;
})();
if(cljs.core.truth_(inst_17943__$1)){
var statearr_17998_19868 = state_17963__$1;
(statearr_17998_19868[(1)] = (19));

} else {
var statearr_17999_19869 = state_17963__$1;
(statearr_17999_19869[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (25))){
var inst_17952 = (state_17963[(2)]);
var state_17963__$1 = state_17963;
var statearr_18006_19870 = state_17963__$1;
(statearr_18006_19870[(2)] = inst_17952);

(statearr_18006_19870[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (17))){
var inst_17912 = (state_17963[(10)]);
var inst_17925 = cljs.core.first(inst_17912);
var inst_17926 = cljs.core.async.muxch_STAR_(inst_17925);
var inst_17927 = cljs.core.async.close_BANG_(inst_17926);
var inst_17928 = cljs.core.next(inst_17912);
var inst_17894 = inst_17928;
var inst_17895 = null;
var inst_17896 = (0);
var inst_17897 = (0);
var state_17963__$1 = (function (){var statearr_18007 = state_17963;
(statearr_18007[(12)] = inst_17927);

(statearr_18007[(13)] = inst_17894);

(statearr_18007[(14)] = inst_17895);

(statearr_18007[(15)] = inst_17896);

(statearr_18007[(16)] = inst_17897);

return statearr_18007;
})();
var statearr_18008_19872 = state_17963__$1;
(statearr_18008_19872[(2)] = null);

(statearr_18008_19872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (3))){
var inst_17960 = (state_17963[(2)]);
var state_17963__$1 = state_17963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17963__$1,inst_17960);
} else {
if((state_val_17964 === (12))){
var inst_17936 = (state_17963[(2)]);
var state_17963__$1 = state_17963;
var statearr_18009_19873 = state_17963__$1;
(statearr_18009_19873[(2)] = inst_17936);

(statearr_18009_19873[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (2))){
var state_17963__$1 = state_17963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17963__$1,(4),ch);
} else {
if((state_val_17964 === (23))){
var state_17963__$1 = state_17963;
var statearr_18010_19874 = state_17963__$1;
(statearr_18010_19874[(2)] = null);

(statearr_18010_19874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (19))){
var inst_17943 = (state_17963[(11)]);
var inst_17881 = (state_17963[(8)]);
var inst_17945 = cljs.core.async.muxch_STAR_(inst_17943);
var state_17963__$1 = state_17963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17963__$1,(22),inst_17945,inst_17881);
} else {
if((state_val_17964 === (11))){
var inst_17894 = (state_17963[(13)]);
var inst_17912 = (state_17963[(10)]);
var inst_17912__$1 = cljs.core.seq(inst_17894);
var state_17963__$1 = (function (){var statearr_18017 = state_17963;
(statearr_18017[(10)] = inst_17912__$1);

return statearr_18017;
})();
if(inst_17912__$1){
var statearr_18018_19878 = state_17963__$1;
(statearr_18018_19878[(1)] = (13));

} else {
var statearr_18020_19879 = state_17963__$1;
(statearr_18020_19879[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (9))){
var inst_17938 = (state_17963[(2)]);
var state_17963__$1 = state_17963;
var statearr_18021_19880 = state_17963__$1;
(statearr_18021_19880[(2)] = inst_17938);

(statearr_18021_19880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (5))){
var inst_17891 = cljs.core.deref(mults);
var inst_17892 = cljs.core.vals(inst_17891);
var inst_17893 = cljs.core.seq(inst_17892);
var inst_17894 = inst_17893;
var inst_17895 = null;
var inst_17896 = (0);
var inst_17897 = (0);
var state_17963__$1 = (function (){var statearr_18022 = state_17963;
(statearr_18022[(13)] = inst_17894);

(statearr_18022[(14)] = inst_17895);

(statearr_18022[(15)] = inst_17896);

(statearr_18022[(16)] = inst_17897);

return statearr_18022;
})();
var statearr_18023_19895 = state_17963__$1;
(statearr_18023_19895[(2)] = null);

(statearr_18023_19895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (14))){
var state_17963__$1 = state_17963;
var statearr_18027_19896 = state_17963__$1;
(statearr_18027_19896[(2)] = null);

(statearr_18027_19896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (16))){
var inst_17912 = (state_17963[(10)]);
var inst_17920 = cljs.core.chunk_first(inst_17912);
var inst_17921 = cljs.core.chunk_rest(inst_17912);
var inst_17922 = cljs.core.count(inst_17920);
var inst_17894 = inst_17921;
var inst_17895 = inst_17920;
var inst_17896 = inst_17922;
var inst_17897 = (0);
var state_17963__$1 = (function (){var statearr_18029 = state_17963;
(statearr_18029[(13)] = inst_17894);

(statearr_18029[(14)] = inst_17895);

(statearr_18029[(15)] = inst_17896);

(statearr_18029[(16)] = inst_17897);

return statearr_18029;
})();
var statearr_18030_19897 = state_17963__$1;
(statearr_18030_19897[(2)] = null);

(statearr_18030_19897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (10))){
var inst_17895 = (state_17963[(14)]);
var inst_17897 = (state_17963[(16)]);
var inst_17894 = (state_17963[(13)]);
var inst_17896 = (state_17963[(15)]);
var inst_17906 = cljs.core._nth(inst_17895,inst_17897);
var inst_17907 = cljs.core.async.muxch_STAR_(inst_17906);
var inst_17908 = cljs.core.async.close_BANG_(inst_17907);
var inst_17909 = (inst_17897 + (1));
var tmp18024 = inst_17895;
var tmp18025 = inst_17894;
var tmp18026 = inst_17896;
var inst_17894__$1 = tmp18025;
var inst_17895__$1 = tmp18024;
var inst_17896__$1 = tmp18026;
var inst_17897__$1 = inst_17909;
var state_17963__$1 = (function (){var statearr_18032 = state_17963;
(statearr_18032[(17)] = inst_17908);

(statearr_18032[(13)] = inst_17894__$1);

(statearr_18032[(14)] = inst_17895__$1);

(statearr_18032[(15)] = inst_17896__$1);

(statearr_18032[(16)] = inst_17897__$1);

return statearr_18032;
})();
var statearr_18034_19898 = state_17963__$1;
(statearr_18034_19898[(2)] = null);

(statearr_18034_19898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (18))){
var inst_17931 = (state_17963[(2)]);
var state_17963__$1 = state_17963;
var statearr_18035_19899 = state_17963__$1;
(statearr_18035_19899[(2)] = inst_17931);

(statearr_18035_19899[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17964 === (8))){
var inst_17897 = (state_17963[(16)]);
var inst_17896 = (state_17963[(15)]);
var inst_17903 = (inst_17897 < inst_17896);
var inst_17904 = inst_17903;
var state_17963__$1 = state_17963;
if(cljs.core.truth_(inst_17904)){
var statearr_18037_19900 = state_17963__$1;
(statearr_18037_19900[(1)] = (10));

} else {
var statearr_18038_19901 = state_17963__$1;
(statearr_18038_19901[(1)] = (11));

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
var cljs$core$async$state_machine__13875__auto__ = null;
var cljs$core$async$state_machine__13875__auto____0 = (function (){
var statearr_18039 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18039[(0)] = cljs$core$async$state_machine__13875__auto__);

(statearr_18039[(1)] = (1));

return statearr_18039;
});
var cljs$core$async$state_machine__13875__auto____1 = (function (state_17963){
while(true){
var ret_value__13876__auto__ = (function (){try{while(true){
var result__13877__auto__ = switch__13874__auto__(state_17963);
if(cljs.core.keyword_identical_QMARK_(result__13877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13877__auto__;
}
break;
}
}catch (e18040){var ex__13878__auto__ = e18040;
var statearr_18041_19903 = state_17963;
(statearr_18041_19903[(2)] = ex__13878__auto__);


if(cljs.core.seq((state_17963[(4)]))){
var statearr_18042_19904 = state_17963;
(statearr_18042_19904[(1)] = cljs.core.first((state_17963[(4)])));

} else {
throw ex__13878__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19905 = state_17963;
state_17963 = G__19905;
continue;
} else {
return ret_value__13876__auto__;
}
break;
}
});
cljs$core$async$state_machine__13875__auto__ = function(state_17963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13875__auto____1.call(this,state_17963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13875__auto____0;
cljs$core$async$state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13875__auto____1;
return cljs$core$async$state_machine__13875__auto__;
})()
})();
var state__14616__auto__ = (function (){var statearr_18044 = f__14615__auto__();
(statearr_18044[(6)] = c__14614__auto___19843);

return statearr_18044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14616__auto__);
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
var G__18054 = arguments.length;
switch (G__18054) {
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
var G__18062 = arguments.length;
switch (G__18062) {
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
var G__18065 = arguments.length;
switch (G__18065) {
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
var c__14614__auto___19912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14615__auto__ = (function (){var switch__13874__auto__ = (function (state_18119){
var state_val_18121 = (state_18119[(1)]);
if((state_val_18121 === (7))){
var state_18119__$1 = state_18119;
var statearr_18125_19913 = state_18119__$1;
(statearr_18125_19913[(2)] = null);

(statearr_18125_19913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (1))){
var state_18119__$1 = state_18119;
var statearr_18128_19914 = state_18119__$1;
(statearr_18128_19914[(2)] = null);

(statearr_18128_19914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (4))){
var inst_18080 = (state_18119[(7)]);
var inst_18079 = (state_18119[(8)]);
var inst_18082 = (inst_18080 < inst_18079);
var state_18119__$1 = state_18119;
if(cljs.core.truth_(inst_18082)){
var statearr_18129_19915 = state_18119__$1;
(statearr_18129_19915[(1)] = (6));

} else {
var statearr_18130_19916 = state_18119__$1;
(statearr_18130_19916[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (15))){
var inst_18105 = (state_18119[(9)]);
var inst_18110 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18105);
var state_18119__$1 = state_18119;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18119__$1,(17),out,inst_18110);
} else {
if((state_val_18121 === (13))){
var inst_18105 = (state_18119[(9)]);
var inst_18105__$1 = (state_18119[(2)]);
var inst_18106 = cljs.core.some(cljs.core.nil_QMARK_,inst_18105__$1);
var state_18119__$1 = (function (){var statearr_18131 = state_18119;
(statearr_18131[(9)] = inst_18105__$1);

return statearr_18131;
})();
if(cljs.core.truth_(inst_18106)){
var statearr_18132_19917 = state_18119__$1;
(statearr_18132_19917[(1)] = (14));

} else {
var statearr_18133_19918 = state_18119__$1;
(statearr_18133_19918[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (6))){
var state_18119__$1 = state_18119;
var statearr_18138_19919 = state_18119__$1;
(statearr_18138_19919[(2)] = null);

(statearr_18138_19919[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (17))){
var inst_18112 = (state_18119[(2)]);
var state_18119__$1 = (function (){var statearr_18149 = state_18119;
(statearr_18149[(10)] = inst_18112);

return statearr_18149;
})();
var statearr_18150_19920 = state_18119__$1;
(statearr_18150_19920[(2)] = null);

(statearr_18150_19920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (3))){
var inst_18117 = (state_18119[(2)]);
var state_18119__$1 = state_18119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18119__$1,inst_18117);
} else {
if((state_val_18121 === (12))){
var _ = (function (){var statearr_18152 = state_18119;
(statearr_18152[(4)] = cljs.core.rest((state_18119[(4)])));

return statearr_18152;
})();
var state_18119__$1 = state_18119;
var ex18145 = (state_18119__$1[(2)]);
var statearr_18154_19921 = state_18119__$1;
(statearr_18154_19921[(5)] = ex18145);


if((ex18145 instanceof Object)){
var statearr_18155_19922 = state_18119__$1;
(statearr_18155_19922[(1)] = (11));

(statearr_18155_19922[(5)] = null);

} else {
throw ex18145;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (2))){
var inst_18077 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18079 = cnt;
var inst_18080 = (0);
var state_18119__$1 = (function (){var statearr_18161 = state_18119;
(statearr_18161[(11)] = inst_18077);

(statearr_18161[(8)] = inst_18079);

(statearr_18161[(7)] = inst_18080);

return statearr_18161;
})();
var statearr_18165_19923 = state_18119__$1;
(statearr_18165_19923[(2)] = null);

(statearr_18165_19923[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (11))){
var inst_18084 = (state_18119[(2)]);
var inst_18085 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18119__$1 = (function (){var statearr_18171 = state_18119;
(statearr_18171[(12)] = inst_18084);

return statearr_18171;
})();
var statearr_18174_19924 = state_18119__$1;
(statearr_18174_19924[(2)] = inst_18085);

(statearr_18174_19924[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (9))){
var inst_18080 = (state_18119[(7)]);
var _ = (function (){var statearr_18175 = state_18119;
(statearr_18175[(4)] = cljs.core.cons((12),(state_18119[(4)])));

return statearr_18175;
})();
var inst_18091 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18080) : chs__$1.call(null,inst_18080));
var inst_18092 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18080) : done.call(null,inst_18080));
var inst_18093 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18091,inst_18092);
var ___$1 = (function (){var statearr_18178 = state_18119;
(statearr_18178[(4)] = cljs.core.rest((state_18119[(4)])));

return statearr_18178;
})();
var state_18119__$1 = state_18119;
var statearr_18179_19929 = state_18119__$1;
(statearr_18179_19929[(2)] = inst_18093);

(statearr_18179_19929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (5))){
var inst_18103 = (state_18119[(2)]);
var state_18119__$1 = (function (){var statearr_18180 = state_18119;
(statearr_18180[(13)] = inst_18103);

return statearr_18180;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18119__$1,(13),dchan);
} else {
if((state_val_18121 === (14))){
var inst_18108 = cljs.core.async.close_BANG_(out);
var state_18119__$1 = state_18119;
var statearr_18181_19933 = state_18119__$1;
(statearr_18181_19933[(2)] = inst_18108);

(statearr_18181_19933[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (16))){
var inst_18115 = (state_18119[(2)]);
var state_18119__$1 = state_18119;
var statearr_18182_19934 = state_18119__$1;
(statearr_18182_19934[(2)] = inst_18115);

(statearr_18182_19934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (10))){
var inst_18080 = (state_18119[(7)]);
var inst_18096 = (state_18119[(2)]);
var inst_18097 = (inst_18080 + (1));
var inst_18080__$1 = inst_18097;
var state_18119__$1 = (function (){var statearr_18186 = state_18119;
(statearr_18186[(14)] = inst_18096);

(statearr_18186[(7)] = inst_18080__$1);

return statearr_18186;
})();
var statearr_18188_19935 = state_18119__$1;
(statearr_18188_19935[(2)] = null);

(statearr_18188_19935[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18121 === (8))){
var inst_18101 = (state_18119[(2)]);
var state_18119__$1 = state_18119;
var statearr_18189_19936 = state_18119__$1;
(statearr_18189_19936[(2)] = inst_18101);

(statearr_18189_19936[(1)] = (5));


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
var cljs$core$async$state_machine__13875__auto__ = null;
var cljs$core$async$state_machine__13875__auto____0 = (function (){
var statearr_18190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18190[(0)] = cljs$core$async$state_machine__13875__auto__);

(statearr_18190[(1)] = (1));

return statearr_18190;
});
var cljs$core$async$state_machine__13875__auto____1 = (function (state_18119){
while(true){
var ret_value__13876__auto__ = (function (){try{while(true){
var result__13877__auto__ = switch__13874__auto__(state_18119);
if(cljs.core.keyword_identical_QMARK_(result__13877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13877__auto__;
}
break;
}
}catch (e18191){var ex__13878__auto__ = e18191;
var statearr_18192_19937 = state_18119;
(statearr_18192_19937[(2)] = ex__13878__auto__);


if(cljs.core.seq((state_18119[(4)]))){
var statearr_18193_19938 = state_18119;
(statearr_18193_19938[(1)] = cljs.core.first((state_18119[(4)])));

} else {
throw ex__13878__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19939 = state_18119;
state_18119 = G__19939;
continue;
} else {
return ret_value__13876__auto__;
}
break;
}
});
cljs$core$async$state_machine__13875__auto__ = function(state_18119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13875__auto____1.call(this,state_18119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13875__auto____0;
cljs$core$async$state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13875__auto____1;
return cljs$core$async$state_machine__13875__auto__;
})()
})();
var state__14616__auto__ = (function (){var statearr_18195 = f__14615__auto__();
(statearr_18195[(6)] = c__14614__auto___19912);

return statearr_18195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14616__auto__);
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
var G__18199 = arguments.length;
switch (G__18199) {
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
var c__14614__auto___19941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14615__auto__ = (function (){var switch__13874__auto__ = (function (state_18240){
var state_val_18241 = (state_18240[(1)]);
if((state_val_18241 === (7))){
var inst_18218 = (state_18240[(7)]);
var inst_18219 = (state_18240[(8)]);
var inst_18218__$1 = (state_18240[(2)]);
var inst_18219__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18218__$1,(0),null);
var inst_18220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18218__$1,(1),null);
var inst_18221 = (inst_18219__$1 == null);
var state_18240__$1 = (function (){var statearr_18246 = state_18240;
(statearr_18246[(7)] = inst_18218__$1);

(statearr_18246[(8)] = inst_18219__$1);

(statearr_18246[(9)] = inst_18220);

return statearr_18246;
})();
if(cljs.core.truth_(inst_18221)){
var statearr_18247_19942 = state_18240__$1;
(statearr_18247_19942[(1)] = (8));

} else {
var statearr_18248_19943 = state_18240__$1;
(statearr_18248_19943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (1))){
var inst_18208 = cljs.core.vec(chs);
var inst_18209 = inst_18208;
var state_18240__$1 = (function (){var statearr_18253 = state_18240;
(statearr_18253[(10)] = inst_18209);

return statearr_18253;
})();
var statearr_18254_19944 = state_18240__$1;
(statearr_18254_19944[(2)] = null);

(statearr_18254_19944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (4))){
var inst_18209 = (state_18240[(10)]);
var state_18240__$1 = state_18240;
return cljs.core.async.ioc_alts_BANG_(state_18240__$1,(7),inst_18209);
} else {
if((state_val_18241 === (6))){
var inst_18235 = (state_18240[(2)]);
var state_18240__$1 = state_18240;
var statearr_18261_19945 = state_18240__$1;
(statearr_18261_19945[(2)] = inst_18235);

(statearr_18261_19945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (3))){
var inst_18237 = (state_18240[(2)]);
var state_18240__$1 = state_18240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18240__$1,inst_18237);
} else {
if((state_val_18241 === (2))){
var inst_18209 = (state_18240[(10)]);
var inst_18211 = cljs.core.count(inst_18209);
var inst_18212 = (inst_18211 > (0));
var state_18240__$1 = state_18240;
if(cljs.core.truth_(inst_18212)){
var statearr_18263_19946 = state_18240__$1;
(statearr_18263_19946[(1)] = (4));

} else {
var statearr_18265_19947 = state_18240__$1;
(statearr_18265_19947[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (11))){
var inst_18209 = (state_18240[(10)]);
var inst_18228 = (state_18240[(2)]);
var tmp18262 = inst_18209;
var inst_18209__$1 = tmp18262;
var state_18240__$1 = (function (){var statearr_18266 = state_18240;
(statearr_18266[(11)] = inst_18228);

(statearr_18266[(10)] = inst_18209__$1);

return statearr_18266;
})();
var statearr_18267_19949 = state_18240__$1;
(statearr_18267_19949[(2)] = null);

(statearr_18267_19949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (9))){
var inst_18219 = (state_18240[(8)]);
var state_18240__$1 = state_18240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18240__$1,(11),out,inst_18219);
} else {
if((state_val_18241 === (5))){
var inst_18233 = cljs.core.async.close_BANG_(out);
var state_18240__$1 = state_18240;
var statearr_18274_19953 = state_18240__$1;
(statearr_18274_19953[(2)] = inst_18233);

(statearr_18274_19953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (10))){
var inst_18231 = (state_18240[(2)]);
var state_18240__$1 = state_18240;
var statearr_18275_19954 = state_18240__$1;
(statearr_18275_19954[(2)] = inst_18231);

(statearr_18275_19954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18241 === (8))){
var inst_18209 = (state_18240[(10)]);
var inst_18218 = (state_18240[(7)]);
var inst_18219 = (state_18240[(8)]);
var inst_18220 = (state_18240[(9)]);
var inst_18223 = (function (){var cs = inst_18209;
var vec__18214 = inst_18218;
var v = inst_18219;
var c = inst_18220;
return (function (p1__18197_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18197_SHARP_);
});
})();
var inst_18224 = cljs.core.filterv(inst_18223,inst_18209);
var inst_18209__$1 = inst_18224;
var state_18240__$1 = (function (){var statearr_18276 = state_18240;
(statearr_18276[(10)] = inst_18209__$1);

return statearr_18276;
})();
var statearr_18277_19961 = state_18240__$1;
(statearr_18277_19961[(2)] = null);

(statearr_18277_19961[(1)] = (2));


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
var cljs$core$async$state_machine__13875__auto__ = null;
var cljs$core$async$state_machine__13875__auto____0 = (function (){
var statearr_18282 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18282[(0)] = cljs$core$async$state_machine__13875__auto__);

(statearr_18282[(1)] = (1));

return statearr_18282;
});
var cljs$core$async$state_machine__13875__auto____1 = (function (state_18240){
while(true){
var ret_value__13876__auto__ = (function (){try{while(true){
var result__13877__auto__ = switch__13874__auto__(state_18240);
if(cljs.core.keyword_identical_QMARK_(result__13877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13877__auto__;
}
break;
}
}catch (e18283){var ex__13878__auto__ = e18283;
var statearr_18286_19970 = state_18240;
(statearr_18286_19970[(2)] = ex__13878__auto__);


if(cljs.core.seq((state_18240[(4)]))){
var statearr_18287_19971 = state_18240;
(statearr_18287_19971[(1)] = cljs.core.first((state_18240[(4)])));

} else {
throw ex__13878__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19972 = state_18240;
state_18240 = G__19972;
continue;
} else {
return ret_value__13876__auto__;
}
break;
}
});
cljs$core$async$state_machine__13875__auto__ = function(state_18240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13875__auto____1.call(this,state_18240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13875__auto____0;
cljs$core$async$state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13875__auto____1;
return cljs$core$async$state_machine__13875__auto__;
})()
})();
var state__14616__auto__ = (function (){var statearr_18292 = f__14615__auto__();
(statearr_18292[(6)] = c__14614__auto___19941);

return statearr_18292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14616__auto__);
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
var G__18303 = arguments.length;
switch (G__18303) {
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
var c__14614__auto___19974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14615__auto__ = (function (){var switch__13874__auto__ = (function (state_18341){
var state_val_18342 = (state_18341[(1)]);
if((state_val_18342 === (7))){
var inst_18322 = (state_18341[(7)]);
var inst_18322__$1 = (state_18341[(2)]);
var inst_18323 = (inst_18322__$1 == null);
var inst_18324 = cljs.core.not(inst_18323);
var state_18341__$1 = (function (){var statearr_18346 = state_18341;
(statearr_18346[(7)] = inst_18322__$1);

return statearr_18346;
})();
if(inst_18324){
var statearr_18347_19975 = state_18341__$1;
(statearr_18347_19975[(1)] = (8));

} else {
var statearr_18349_19976 = state_18341__$1;
(statearr_18349_19976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (1))){
var inst_18317 = (0);
var state_18341__$1 = (function (){var statearr_18350 = state_18341;
(statearr_18350[(8)] = inst_18317);

return statearr_18350;
})();
var statearr_18351_19977 = state_18341__$1;
(statearr_18351_19977[(2)] = null);

(statearr_18351_19977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (4))){
var state_18341__$1 = state_18341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18341__$1,(7),ch);
} else {
if((state_val_18342 === (6))){
var inst_18335 = (state_18341[(2)]);
var state_18341__$1 = state_18341;
var statearr_18371_19978 = state_18341__$1;
(statearr_18371_19978[(2)] = inst_18335);

(statearr_18371_19978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (3))){
var inst_18337 = (state_18341[(2)]);
var inst_18338 = cljs.core.async.close_BANG_(out);
var state_18341__$1 = (function (){var statearr_18377 = state_18341;
(statearr_18377[(9)] = inst_18337);

return statearr_18377;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18341__$1,inst_18338);
} else {
if((state_val_18342 === (2))){
var inst_18317 = (state_18341[(8)]);
var inst_18319 = (inst_18317 < n);
var state_18341__$1 = state_18341;
if(cljs.core.truth_(inst_18319)){
var statearr_18378_19979 = state_18341__$1;
(statearr_18378_19979[(1)] = (4));

} else {
var statearr_18381_19980 = state_18341__$1;
(statearr_18381_19980[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (11))){
var inst_18317 = (state_18341[(8)]);
var inst_18327 = (state_18341[(2)]);
var inst_18328 = (inst_18317 + (1));
var inst_18317__$1 = inst_18328;
var state_18341__$1 = (function (){var statearr_18383 = state_18341;
(statearr_18383[(10)] = inst_18327);

(statearr_18383[(8)] = inst_18317__$1);

return statearr_18383;
})();
var statearr_18384_19981 = state_18341__$1;
(statearr_18384_19981[(2)] = null);

(statearr_18384_19981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (9))){
var state_18341__$1 = state_18341;
var statearr_18386_19982 = state_18341__$1;
(statearr_18386_19982[(2)] = null);

(statearr_18386_19982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (5))){
var state_18341__$1 = state_18341;
var statearr_18387_19983 = state_18341__$1;
(statearr_18387_19983[(2)] = null);

(statearr_18387_19983[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (10))){
var inst_18332 = (state_18341[(2)]);
var state_18341__$1 = state_18341;
var statearr_18388_19984 = state_18341__$1;
(statearr_18388_19984[(2)] = inst_18332);

(statearr_18388_19984[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18342 === (8))){
var inst_18322 = (state_18341[(7)]);
var state_18341__$1 = state_18341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18341__$1,(11),out,inst_18322);
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
var cljs$core$async$state_machine__13875__auto__ = null;
var cljs$core$async$state_machine__13875__auto____0 = (function (){
var statearr_18389 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18389[(0)] = cljs$core$async$state_machine__13875__auto__);

(statearr_18389[(1)] = (1));

return statearr_18389;
});
var cljs$core$async$state_machine__13875__auto____1 = (function (state_18341){
while(true){
var ret_value__13876__auto__ = (function (){try{while(true){
var result__13877__auto__ = switch__13874__auto__(state_18341);
if(cljs.core.keyword_identical_QMARK_(result__13877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13877__auto__;
}
break;
}
}catch (e18390){var ex__13878__auto__ = e18390;
var statearr_18391_19987 = state_18341;
(statearr_18391_19987[(2)] = ex__13878__auto__);


if(cljs.core.seq((state_18341[(4)]))){
var statearr_18392_19988 = state_18341;
(statearr_18392_19988[(1)] = cljs.core.first((state_18341[(4)])));

} else {
throw ex__13878__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19989 = state_18341;
state_18341 = G__19989;
continue;
} else {
return ret_value__13876__auto__;
}
break;
}
});
cljs$core$async$state_machine__13875__auto__ = function(state_18341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13875__auto____1.call(this,state_18341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13875__auto____0;
cljs$core$async$state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13875__auto____1;
return cljs$core$async$state_machine__13875__auto__;
})()
})();
var state__14616__auto__ = (function (){var statearr_18393 = f__14615__auto__();
(statearr_18393[(6)] = c__14614__auto___19974);

return statearr_18393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14616__auto__);
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
cljs.core.async.t_cljs$core$async18425 = (function (f,ch,meta18399,_,fn1,meta18426){
this.f = f;
this.ch = ch;
this.meta18399 = meta18399;
this._ = _;
this.fn1 = fn1;
this.meta18426 = meta18426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18427,meta18426__$1){
var self__ = this;
var _18427__$1 = this;
return (new cljs.core.async.t_cljs$core$async18425(self__.f,self__.ch,self__.meta18399,self__._,self__.fn1,meta18426__$1));
}));

(cljs.core.async.t_cljs$core$async18425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18427){
var self__ = this;
var _18427__$1 = this;
return self__.meta18426;
}));

(cljs.core.async.t_cljs$core$async18425.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18425.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18397_SHARP_){
var G__18437 = (((p1__18397_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18397_SHARP_) : self__.f.call(null,p1__18397_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18437) : f1.call(null,G__18437));
});
}));

(cljs.core.async.t_cljs$core$async18425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18399","meta18399",695604658,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18398","cljs.core.async/t_cljs$core$async18398",-113643210,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18426","meta18426",614557361,null)], null);
}));

(cljs.core.async.t_cljs$core$async18425.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18425");

(cljs.core.async.t_cljs$core$async18425.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18425");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18425.
 */
cljs.core.async.__GT_t_cljs$core$async18425 = (function cljs$core$async$__GT_t_cljs$core$async18425(f,ch,meta18399,_,fn1,meta18426){
return (new cljs.core.async.t_cljs$core$async18425(f,ch,meta18399,_,fn1,meta18426));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18398 = (function (f,ch,meta18399){
this.f = f;
this.ch = ch;
this.meta18399 = meta18399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18400,meta18399__$1){
var self__ = this;
var _18400__$1 = this;
return (new cljs.core.async.t_cljs$core$async18398(self__.f,self__.ch,meta18399__$1));
}));

(cljs.core.async.t_cljs$core$async18398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18400){
var self__ = this;
var _18400__$1 = this;
return self__.meta18399;
}));

(cljs.core.async.t_cljs$core$async18398.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18398.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18398.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18398.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18398.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18425(self__.f,self__.ch,self__.meta18399,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18449 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18449) : self__.f.call(null,G__18449));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18398.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18398.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18399","meta18399",695604658,null)], null);
}));

(cljs.core.async.t_cljs$core$async18398.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18398");

(cljs.core.async.t_cljs$core$async18398.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18398");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18398.
 */
cljs.core.async.__GT_t_cljs$core$async18398 = (function cljs$core$async$__GT_t_cljs$core$async18398(f,ch,meta18399){
return (new cljs.core.async.t_cljs$core$async18398(f,ch,meta18399));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18398(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18461 = (function (f,ch,meta18462){
this.f = f;
this.ch = ch;
this.meta18462 = meta18462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18463,meta18462__$1){
var self__ = this;
var _18463__$1 = this;
return (new cljs.core.async.t_cljs$core$async18461(self__.f,self__.ch,meta18462__$1));
}));

(cljs.core.async.t_cljs$core$async18461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18463){
var self__ = this;
var _18463__$1 = this;
return self__.meta18462;
}));

(cljs.core.async.t_cljs$core$async18461.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18461.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18461.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18461.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18461.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18461.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18461.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18462","meta18462",-605014700,null)], null);
}));

(cljs.core.async.t_cljs$core$async18461.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18461");

(cljs.core.async.t_cljs$core$async18461.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18461");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18461.
 */
cljs.core.async.__GT_t_cljs$core$async18461 = (function cljs$core$async$__GT_t_cljs$core$async18461(f,ch,meta18462){
return (new cljs.core.async.t_cljs$core$async18461(f,ch,meta18462));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18461(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18477 = (function (p,ch,meta18478){
this.p = p;
this.ch = ch;
this.meta18478 = meta18478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18479,meta18478__$1){
var self__ = this;
var _18479__$1 = this;
return (new cljs.core.async.t_cljs$core$async18477(self__.p,self__.ch,meta18478__$1));
}));

(cljs.core.async.t_cljs$core$async18477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18479){
var self__ = this;
var _18479__$1 = this;
return self__.meta18478;
}));

(cljs.core.async.t_cljs$core$async18477.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18477.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18477.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18477.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18477.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18477.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18477.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18478","meta18478",1540004125,null)], null);
}));

(cljs.core.async.t_cljs$core$async18477.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18477");

(cljs.core.async.t_cljs$core$async18477.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18477");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18477.
 */
cljs.core.async.__GT_t_cljs$core$async18477 = (function cljs$core$async$__GT_t_cljs$core$async18477(p,ch,meta18478){
return (new cljs.core.async.t_cljs$core$async18477(p,ch,meta18478));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18477(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18493 = arguments.length;
switch (G__18493) {
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
var c__14614__auto___19999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14615__auto__ = (function (){var switch__13874__auto__ = (function (state_18525){
var state_val_18526 = (state_18525[(1)]);
if((state_val_18526 === (7))){
var inst_18521 = (state_18525[(2)]);
var state_18525__$1 = state_18525;
var statearr_18530_20000 = state_18525__$1;
(statearr_18530_20000[(2)] = inst_18521);

(statearr_18530_20000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18526 === (1))){
var state_18525__$1 = state_18525;
var statearr_18531_20001 = state_18525__$1;
(statearr_18531_20001[(2)] = null);

(statearr_18531_20001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18526 === (4))){
var inst_18503 = (state_18525[(7)]);
var inst_18503__$1 = (state_18525[(2)]);
var inst_18504 = (inst_18503__$1 == null);
var state_18525__$1 = (function (){var statearr_18535 = state_18525;
(statearr_18535[(7)] = inst_18503__$1);

return statearr_18535;
})();
if(cljs.core.truth_(inst_18504)){
var statearr_18536_20004 = state_18525__$1;
(statearr_18536_20004[(1)] = (5));

} else {
var statearr_18537_20005 = state_18525__$1;
(statearr_18537_20005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18526 === (6))){
var inst_18503 = (state_18525[(7)]);
var inst_18512 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18503) : p.call(null,inst_18503));
var state_18525__$1 = state_18525;
if(cljs.core.truth_(inst_18512)){
var statearr_18538_20006 = state_18525__$1;
(statearr_18538_20006[(1)] = (8));

} else {
var statearr_18539_20007 = state_18525__$1;
(statearr_18539_20007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18526 === (3))){
var inst_18523 = (state_18525[(2)]);
var state_18525__$1 = state_18525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18525__$1,inst_18523);
} else {
if((state_val_18526 === (2))){
var state_18525__$1 = state_18525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18525__$1,(4),ch);
} else {
if((state_val_18526 === (11))){
var inst_18515 = (state_18525[(2)]);
var state_18525__$1 = state_18525;
var statearr_18540_20008 = state_18525__$1;
(statearr_18540_20008[(2)] = inst_18515);

(statearr_18540_20008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18526 === (9))){
var state_18525__$1 = state_18525;
var statearr_18547_20009 = state_18525__$1;
(statearr_18547_20009[(2)] = null);

(statearr_18547_20009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18526 === (5))){
var inst_18510 = cljs.core.async.close_BANG_(out);
var state_18525__$1 = state_18525;
var statearr_18548_20010 = state_18525__$1;
(statearr_18548_20010[(2)] = inst_18510);

(statearr_18548_20010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18526 === (10))){
var inst_18518 = (state_18525[(2)]);
var state_18525__$1 = (function (){var statearr_18549 = state_18525;
(statearr_18549[(8)] = inst_18518);

return statearr_18549;
})();
var statearr_18550_20011 = state_18525__$1;
(statearr_18550_20011[(2)] = null);

(statearr_18550_20011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18526 === (8))){
var inst_18503 = (state_18525[(7)]);
var state_18525__$1 = state_18525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18525__$1,(11),out,inst_18503);
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
var cljs$core$async$state_machine__13875__auto__ = null;
var cljs$core$async$state_machine__13875__auto____0 = (function (){
var statearr_18552 = [null,null,null,null,null,null,null,null,null];
(statearr_18552[(0)] = cljs$core$async$state_machine__13875__auto__);

(statearr_18552[(1)] = (1));

return statearr_18552;
});
var cljs$core$async$state_machine__13875__auto____1 = (function (state_18525){
while(true){
var ret_value__13876__auto__ = (function (){try{while(true){
var result__13877__auto__ = switch__13874__auto__(state_18525);
if(cljs.core.keyword_identical_QMARK_(result__13877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13877__auto__;
}
break;
}
}catch (e18554){var ex__13878__auto__ = e18554;
var statearr_18556_20018 = state_18525;
(statearr_18556_20018[(2)] = ex__13878__auto__);


if(cljs.core.seq((state_18525[(4)]))){
var statearr_18557_20019 = state_18525;
(statearr_18557_20019[(1)] = cljs.core.first((state_18525[(4)])));

} else {
throw ex__13878__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20020 = state_18525;
state_18525 = G__20020;
continue;
} else {
return ret_value__13876__auto__;
}
break;
}
});
cljs$core$async$state_machine__13875__auto__ = function(state_18525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13875__auto____1.call(this,state_18525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13875__auto____0;
cljs$core$async$state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13875__auto____1;
return cljs$core$async$state_machine__13875__auto__;
})()
})();
var state__14616__auto__ = (function (){var statearr_18561 = f__14615__auto__();
(statearr_18561[(6)] = c__14614__auto___19999);

return statearr_18561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14616__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18569 = arguments.length;
switch (G__18569) {
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
var c__14614__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14615__auto__ = (function (){var switch__13874__auto__ = (function (state_18652){
var state_val_18657 = (state_18652[(1)]);
if((state_val_18657 === (7))){
var inst_18648 = (state_18652[(2)]);
var state_18652__$1 = state_18652;
var statearr_18695_20022 = state_18652__$1;
(statearr_18695_20022[(2)] = inst_18648);

(statearr_18695_20022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18657 === (20))){
var inst_18616 = (state_18652[(7)]);
var inst_18628 = (state_18652[(2)]);
var inst_18629 = cljs.core.next(inst_18616);
var inst_18601 = inst_18629;
var inst_18602 = null;
var inst_18603 = (0);
var inst_18604 = (0);
var state_18652__$1 = (function (){var statearr_18723 = state_18652;
(statearr_18723[(8)] = inst_18628);

(statearr_18723[(9)] = inst_18601);

(statearr_18723[(10)] = inst_18602);

(statearr_18723[(11)] = inst_18603);

(statearr_18723[(12)] = inst_18604);

return statearr_18723;
})();
var statearr_18731_20024 = state_18652__$1;
(statearr_18731_20024[(2)] = null);

(statearr_18731_20024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18657 === (1))){
var state_18652__$1 = state_18652;
var statearr_18749_20025 = state_18652__$1;
(statearr_18749_20025[(2)] = null);

(statearr_18749_20025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18657 === (4))){
var inst_18588 = (state_18652[(13)]);
var inst_18588__$1 = (state_18652[(2)]);
var inst_18589 = (inst_18588__$1 == null);
var state_18652__$1 = (function (){var statearr_18758 = state_18652;
(statearr_18758[(13)] = inst_18588__$1);

return statearr_18758;
})();
if(cljs.core.truth_(inst_18589)){
var statearr_18759_20026 = state_18652__$1;
(statearr_18759_20026[(1)] = (5));

} else {
var statearr_18764_20027 = state_18652__$1;
(statearr_18764_20027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18657 === (15))){
var state_18652__$1 = state_18652;
var statearr_18768_20028 = state_18652__$1;
(statearr_18768_20028[(2)] = null);

(statearr_18768_20028[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18657 === (21))){
var state_18652__$1 = state_18652;
var statearr_18770_20029 = state_18652__$1;
(statearr_18770_20029[(2)] = null);

(statearr_18770_20029[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18657 === (13))){
var inst_18604 = (state_18652[(12)]);
var inst_18601 = (state_18652[(9)]);
var inst_18602 = (state_18652[(10)]);
var inst_18603 = (state_18652[(11)]);
var inst_18612 = (state_18652[(2)]);
var inst_18613 = (inst_18604 + (1));
var tmp18765 = inst_18602;
var tmp18766 = inst_18601;
var tmp18767 = inst_18603;
var inst_18601__$1 = tmp18766;
var inst_18602__$1 = tmp18765;
var inst_18603__$1 = tmp18767;
var inst_18604__$1 = inst_18613;
var state_18652__$1 = (function (){var statearr_18781 = state_18652;
(statearr_18781[(14)] = inst_18612);

(statearr_18781[(9)] = inst_18601__$1);

(statearr_18781[(10)] = inst_18602__$1);

(statearr_18781[(11)] = inst_18603__$1);

(statearr_18781[(12)] = inst_18604__$1);

return statearr_18781;
})();
var statearr_18785_20030 = state_18652__$1;
(statearr_18785_20030[(2)] = null);

(statearr_18785_20030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18657 === (22))){
var state_18652__$1 = state_18652;
var statearr_18788_20032 = state_18652__$1;
(statearr_18788_20032[(2)] = null);

(statearr_18788_20032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18657 === (6))){
var inst_18588 = (state_18652[(13)]);
var inst_18598 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18588) : f.call(null,inst_18588));
var inst_18599 = cljs.core.seq(inst_18598);
var inst_18601 = inst_18599;
var inst_18602 = null;
var inst_18603 = (0);
var inst_18604 = (0);
var state_18652__$1 = (function (){var statearr_18791 = state_18652;
(statearr_18791[(9)] = inst_18601);

(statearr_18791[(10)] = inst_18602);

(statearr_18791[(11)] = inst_18603);

(statearr_18791[(12)] = inst_18604);

return statearr_18791;
})();
var statearr_18796_20033 = state_18652__$1;
(statearr_18796_20033[(2)] = null);

(statearr_18796_20033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18657 === (17))){
var inst_18616 = (state_18652[(7)]);
var inst_18620 = cljs.core.chunk_first(inst_18616);
var inst_18621 = cljs.core.chunk_rest(inst_18616);
var inst_18622 = cljs.core.count(inst_18620);
var inst_18601 = inst_18621;
var inst_18602 = inst_18620;
var inst_18603 = inst_18622;
var inst_18604 = (0);
var state_18652__$1 = (function (){var statearr_18799 = state_18652;
(statearr_18799[(9)] = inst_18601);

(statearr_18799[(10)] = inst_18602);

(statearr_18799[(11)] = inst_18603);

(statearr_18799[(12)] = inst_18604);

return statearr_18799;
})();
var statearr_18804_20034 = state_18652__$1;
(statearr_18804_20034[(2)] = null);

(statearr_18804_20034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18657 === (3))){
var inst_18650 = (state_18652[(2)]);
var state_18652__$1 = state_18652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18652__$1,inst_18650);
} else {
if((state_val_18657 === (12))){
var inst_18637 = (state_18652[(2)]);
var state_18652__$1 = state_18652;
var statearr_18813_20035 = state_18652__$1;
(statearr_18813_20035[(2)] = inst_18637);

(statearr_18813_20035[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18657 === (2))){
var state_18652__$1 = state_18652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18652__$1,(4),in$);
} else {
if((state_val_18657 === (23))){
var inst_18646 = (state_18652[(2)]);
var state_18652__$1 = state_18652;
var statearr_18825_20036 = state_18652__$1;
(statearr_18825_20036[(2)] = inst_18646);

(statearr_18825_20036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18657 === (19))){
var inst_18632 = (state_18652[(2)]);
var state_18652__$1 = state_18652;
var statearr_18837_20037 = state_18652__$1;
(statearr_18837_20037[(2)] = inst_18632);

(statearr_18837_20037[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18657 === (11))){
var inst_18601 = (state_18652[(9)]);
var inst_18616 = (state_18652[(7)]);
var inst_18616__$1 = cljs.core.seq(inst_18601);
var state_18652__$1 = (function (){var statearr_18844 = state_18652;
(statearr_18844[(7)] = inst_18616__$1);

return statearr_18844;
})();
if(inst_18616__$1){
var statearr_18853_20042 = state_18652__$1;
(statearr_18853_20042[(1)] = (14));

} else {
var statearr_18855_20043 = state_18652__$1;
(statearr_18855_20043[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18657 === (9))){
var inst_18639 = (state_18652[(2)]);
var inst_18640 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18652__$1 = (function (){var statearr_18870 = state_18652;
(statearr_18870[(15)] = inst_18639);

return statearr_18870;
})();
if(cljs.core.truth_(inst_18640)){
var statearr_18872_20044 = state_18652__$1;
(statearr_18872_20044[(1)] = (21));

} else {
var statearr_18878_20045 = state_18652__$1;
(statearr_18878_20045[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18657 === (5))){
var inst_18591 = cljs.core.async.close_BANG_(out);
var state_18652__$1 = state_18652;
var statearr_18890_20046 = state_18652__$1;
(statearr_18890_20046[(2)] = inst_18591);

(statearr_18890_20046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18657 === (14))){
var inst_18616 = (state_18652[(7)]);
var inst_18618 = cljs.core.chunked_seq_QMARK_(inst_18616);
var state_18652__$1 = state_18652;
if(inst_18618){
var statearr_18892_20048 = state_18652__$1;
(statearr_18892_20048[(1)] = (17));

} else {
var statearr_18893_20049 = state_18652__$1;
(statearr_18893_20049[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18657 === (16))){
var inst_18635 = (state_18652[(2)]);
var state_18652__$1 = state_18652;
var statearr_18894_20050 = state_18652__$1;
(statearr_18894_20050[(2)] = inst_18635);

(statearr_18894_20050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18657 === (10))){
var inst_18602 = (state_18652[(10)]);
var inst_18604 = (state_18652[(12)]);
var inst_18610 = cljs.core._nth(inst_18602,inst_18604);
var state_18652__$1 = state_18652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18652__$1,(13),out,inst_18610);
} else {
if((state_val_18657 === (18))){
var inst_18616 = (state_18652[(7)]);
var inst_18626 = cljs.core.first(inst_18616);
var state_18652__$1 = state_18652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18652__$1,(20),out,inst_18626);
} else {
if((state_val_18657 === (8))){
var inst_18604 = (state_18652[(12)]);
var inst_18603 = (state_18652[(11)]);
var inst_18606 = (inst_18604 < inst_18603);
var inst_18608 = inst_18606;
var state_18652__$1 = state_18652;
if(cljs.core.truth_(inst_18608)){
var statearr_18899_20051 = state_18652__$1;
(statearr_18899_20051[(1)] = (10));

} else {
var statearr_18900_20052 = state_18652__$1;
(statearr_18900_20052[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__13875__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13875__auto____0 = (function (){
var statearr_18904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18904[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13875__auto__);

(statearr_18904[(1)] = (1));

return statearr_18904;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13875__auto____1 = (function (state_18652){
while(true){
var ret_value__13876__auto__ = (function (){try{while(true){
var result__13877__auto__ = switch__13874__auto__(state_18652);
if(cljs.core.keyword_identical_QMARK_(result__13877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13877__auto__;
}
break;
}
}catch (e18905){var ex__13878__auto__ = e18905;
var statearr_18906_20053 = state_18652;
(statearr_18906_20053[(2)] = ex__13878__auto__);


if(cljs.core.seq((state_18652[(4)]))){
var statearr_18907_20054 = state_18652;
(statearr_18907_20054[(1)] = cljs.core.first((state_18652[(4)])));

} else {
throw ex__13878__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20055 = state_18652;
state_18652 = G__20055;
continue;
} else {
return ret_value__13876__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13875__auto__ = function(state_18652){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13875__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13875__auto____1.call(this,state_18652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13875__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13875__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13875__auto__;
})()
})();
var state__14616__auto__ = (function (){var statearr_18911 = f__14615__auto__();
(statearr_18911[(6)] = c__14614__auto__);

return statearr_18911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14616__auto__);
}));

return c__14614__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18916 = arguments.length;
switch (G__18916) {
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
var G__18931 = arguments.length;
switch (G__18931) {
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
var G__18938 = arguments.length;
switch (G__18938) {
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
var c__14614__auto___20064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14615__auto__ = (function (){var switch__13874__auto__ = (function (state_18984){
var state_val_18985 = (state_18984[(1)]);
if((state_val_18985 === (7))){
var inst_18979 = (state_18984[(2)]);
var state_18984__$1 = state_18984;
var statearr_18991_20065 = state_18984__$1;
(statearr_18991_20065[(2)] = inst_18979);

(statearr_18991_20065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (1))){
var inst_18958 = null;
var state_18984__$1 = (function (){var statearr_18993 = state_18984;
(statearr_18993[(7)] = inst_18958);

return statearr_18993;
})();
var statearr_18994_20067 = state_18984__$1;
(statearr_18994_20067[(2)] = null);

(statearr_18994_20067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (4))){
var inst_18964 = (state_18984[(8)]);
var inst_18964__$1 = (state_18984[(2)]);
var inst_18965 = (inst_18964__$1 == null);
var inst_18966 = cljs.core.not(inst_18965);
var state_18984__$1 = (function (){var statearr_18995 = state_18984;
(statearr_18995[(8)] = inst_18964__$1);

return statearr_18995;
})();
if(inst_18966){
var statearr_18996_20069 = state_18984__$1;
(statearr_18996_20069[(1)] = (5));

} else {
var statearr_18997_20070 = state_18984__$1;
(statearr_18997_20070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (6))){
var state_18984__$1 = state_18984;
var statearr_18998_20071 = state_18984__$1;
(statearr_18998_20071[(2)] = null);

(statearr_18998_20071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (3))){
var inst_18981 = (state_18984[(2)]);
var inst_18982 = cljs.core.async.close_BANG_(out);
var state_18984__$1 = (function (){var statearr_19002 = state_18984;
(statearr_19002[(9)] = inst_18981);

return statearr_19002;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18984__$1,inst_18982);
} else {
if((state_val_18985 === (2))){
var state_18984__$1 = state_18984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18984__$1,(4),ch);
} else {
if((state_val_18985 === (11))){
var inst_18964 = (state_18984[(8)]);
var inst_18973 = (state_18984[(2)]);
var inst_18958 = inst_18964;
var state_18984__$1 = (function (){var statearr_19004 = state_18984;
(statearr_19004[(10)] = inst_18973);

(statearr_19004[(7)] = inst_18958);

return statearr_19004;
})();
var statearr_19007_20072 = state_18984__$1;
(statearr_19007_20072[(2)] = null);

(statearr_19007_20072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (9))){
var inst_18964 = (state_18984[(8)]);
var state_18984__$1 = state_18984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18984__$1,(11),out,inst_18964);
} else {
if((state_val_18985 === (5))){
var inst_18964 = (state_18984[(8)]);
var inst_18958 = (state_18984[(7)]);
var inst_18968 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18964,inst_18958);
var state_18984__$1 = state_18984;
if(inst_18968){
var statearr_19010_20073 = state_18984__$1;
(statearr_19010_20073[(1)] = (8));

} else {
var statearr_19012_20074 = state_18984__$1;
(statearr_19012_20074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (10))){
var inst_18976 = (state_18984[(2)]);
var state_18984__$1 = state_18984;
var statearr_19013_20075 = state_18984__$1;
(statearr_19013_20075[(2)] = inst_18976);

(statearr_19013_20075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (8))){
var inst_18958 = (state_18984[(7)]);
var tmp19008 = inst_18958;
var inst_18958__$1 = tmp19008;
var state_18984__$1 = (function (){var statearr_19014 = state_18984;
(statearr_19014[(7)] = inst_18958__$1);

return statearr_19014;
})();
var statearr_19015_20076 = state_18984__$1;
(statearr_19015_20076[(2)] = null);

(statearr_19015_20076[(1)] = (2));


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
var cljs$core$async$state_machine__13875__auto__ = null;
var cljs$core$async$state_machine__13875__auto____0 = (function (){
var statearr_19020 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19020[(0)] = cljs$core$async$state_machine__13875__auto__);

(statearr_19020[(1)] = (1));

return statearr_19020;
});
var cljs$core$async$state_machine__13875__auto____1 = (function (state_18984){
while(true){
var ret_value__13876__auto__ = (function (){try{while(true){
var result__13877__auto__ = switch__13874__auto__(state_18984);
if(cljs.core.keyword_identical_QMARK_(result__13877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13877__auto__;
}
break;
}
}catch (e19021){var ex__13878__auto__ = e19021;
var statearr_19022_20077 = state_18984;
(statearr_19022_20077[(2)] = ex__13878__auto__);


if(cljs.core.seq((state_18984[(4)]))){
var statearr_19023_20078 = state_18984;
(statearr_19023_20078[(1)] = cljs.core.first((state_18984[(4)])));

} else {
throw ex__13878__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20079 = state_18984;
state_18984 = G__20079;
continue;
} else {
return ret_value__13876__auto__;
}
break;
}
});
cljs$core$async$state_machine__13875__auto__ = function(state_18984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13875__auto____1.call(this,state_18984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13875__auto____0;
cljs$core$async$state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13875__auto____1;
return cljs$core$async$state_machine__13875__auto__;
})()
})();
var state__14616__auto__ = (function (){var statearr_19026 = f__14615__auto__();
(statearr_19026[(6)] = c__14614__auto___20064);

return statearr_19026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14616__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19030 = arguments.length;
switch (G__19030) {
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
var c__14614__auto___20084 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14615__auto__ = (function (){var switch__13874__auto__ = (function (state_19070){
var state_val_19071 = (state_19070[(1)]);
if((state_val_19071 === (7))){
var inst_19066 = (state_19070[(2)]);
var state_19070__$1 = state_19070;
var statearr_19073_20085 = state_19070__$1;
(statearr_19073_20085[(2)] = inst_19066);

(statearr_19073_20085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19071 === (1))){
var inst_19031 = (new Array(n));
var inst_19032 = inst_19031;
var inst_19033 = (0);
var state_19070__$1 = (function (){var statearr_19077 = state_19070;
(statearr_19077[(7)] = inst_19032);

(statearr_19077[(8)] = inst_19033);

return statearr_19077;
})();
var statearr_19078_20087 = state_19070__$1;
(statearr_19078_20087[(2)] = null);

(statearr_19078_20087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19071 === (4))){
var inst_19036 = (state_19070[(9)]);
var inst_19036__$1 = (state_19070[(2)]);
var inst_19037 = (inst_19036__$1 == null);
var inst_19038 = cljs.core.not(inst_19037);
var state_19070__$1 = (function (){var statearr_19082 = state_19070;
(statearr_19082[(9)] = inst_19036__$1);

return statearr_19082;
})();
if(inst_19038){
var statearr_19083_20088 = state_19070__$1;
(statearr_19083_20088[(1)] = (5));

} else {
var statearr_19084_20089 = state_19070__$1;
(statearr_19084_20089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19071 === (15))){
var inst_19060 = (state_19070[(2)]);
var state_19070__$1 = state_19070;
var statearr_19085_20090 = state_19070__$1;
(statearr_19085_20090[(2)] = inst_19060);

(statearr_19085_20090[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19071 === (13))){
var state_19070__$1 = state_19070;
var statearr_19087_20091 = state_19070__$1;
(statearr_19087_20091[(2)] = null);

(statearr_19087_20091[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19071 === (6))){
var inst_19033 = (state_19070[(8)]);
var inst_19055 = (inst_19033 > (0));
var state_19070__$1 = state_19070;
if(cljs.core.truth_(inst_19055)){
var statearr_19088_20092 = state_19070__$1;
(statearr_19088_20092[(1)] = (12));

} else {
var statearr_19092_20093 = state_19070__$1;
(statearr_19092_20093[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19071 === (3))){
var inst_19068 = (state_19070[(2)]);
var state_19070__$1 = state_19070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19070__$1,inst_19068);
} else {
if((state_val_19071 === (12))){
var inst_19032 = (state_19070[(7)]);
var inst_19058 = cljs.core.vec(inst_19032);
var state_19070__$1 = state_19070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19070__$1,(15),out,inst_19058);
} else {
if((state_val_19071 === (2))){
var state_19070__$1 = state_19070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19070__$1,(4),ch);
} else {
if((state_val_19071 === (11))){
var inst_19049 = (state_19070[(2)]);
var inst_19050 = (new Array(n));
var inst_19032 = inst_19050;
var inst_19033 = (0);
var state_19070__$1 = (function (){var statearr_19093 = state_19070;
(statearr_19093[(10)] = inst_19049);

(statearr_19093[(7)] = inst_19032);

(statearr_19093[(8)] = inst_19033);

return statearr_19093;
})();
var statearr_19094_20095 = state_19070__$1;
(statearr_19094_20095[(2)] = null);

(statearr_19094_20095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19071 === (9))){
var inst_19032 = (state_19070[(7)]);
var inst_19047 = cljs.core.vec(inst_19032);
var state_19070__$1 = state_19070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19070__$1,(11),out,inst_19047);
} else {
if((state_val_19071 === (5))){
var inst_19032 = (state_19070[(7)]);
var inst_19033 = (state_19070[(8)]);
var inst_19036 = (state_19070[(9)]);
var inst_19042 = (state_19070[(11)]);
var inst_19040 = (inst_19032[inst_19033] = inst_19036);
var inst_19042__$1 = (inst_19033 + (1));
var inst_19043 = (inst_19042__$1 < n);
var state_19070__$1 = (function (){var statearr_19102 = state_19070;
(statearr_19102[(12)] = inst_19040);

(statearr_19102[(11)] = inst_19042__$1);

return statearr_19102;
})();
if(cljs.core.truth_(inst_19043)){
var statearr_19107_20096 = state_19070__$1;
(statearr_19107_20096[(1)] = (8));

} else {
var statearr_19108_20097 = state_19070__$1;
(statearr_19108_20097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19071 === (14))){
var inst_19063 = (state_19070[(2)]);
var inst_19064 = cljs.core.async.close_BANG_(out);
var state_19070__$1 = (function (){var statearr_19114 = state_19070;
(statearr_19114[(13)] = inst_19063);

return statearr_19114;
})();
var statearr_19116_20098 = state_19070__$1;
(statearr_19116_20098[(2)] = inst_19064);

(statearr_19116_20098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19071 === (10))){
var inst_19053 = (state_19070[(2)]);
var state_19070__$1 = state_19070;
var statearr_19117_20103 = state_19070__$1;
(statearr_19117_20103[(2)] = inst_19053);

(statearr_19117_20103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19071 === (8))){
var inst_19032 = (state_19070[(7)]);
var inst_19042 = (state_19070[(11)]);
var tmp19109 = inst_19032;
var inst_19032__$1 = tmp19109;
var inst_19033 = inst_19042;
var state_19070__$1 = (function (){var statearr_19119 = state_19070;
(statearr_19119[(7)] = inst_19032__$1);

(statearr_19119[(8)] = inst_19033);

return statearr_19119;
})();
var statearr_19120_20108 = state_19070__$1;
(statearr_19120_20108[(2)] = null);

(statearr_19120_20108[(1)] = (2));


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
var cljs$core$async$state_machine__13875__auto__ = null;
var cljs$core$async$state_machine__13875__auto____0 = (function (){
var statearr_19136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19136[(0)] = cljs$core$async$state_machine__13875__auto__);

(statearr_19136[(1)] = (1));

return statearr_19136;
});
var cljs$core$async$state_machine__13875__auto____1 = (function (state_19070){
while(true){
var ret_value__13876__auto__ = (function (){try{while(true){
var result__13877__auto__ = switch__13874__auto__(state_19070);
if(cljs.core.keyword_identical_QMARK_(result__13877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13877__auto__;
}
break;
}
}catch (e19141){var ex__13878__auto__ = e19141;
var statearr_19142_20110 = state_19070;
(statearr_19142_20110[(2)] = ex__13878__auto__);


if(cljs.core.seq((state_19070[(4)]))){
var statearr_19147_20111 = state_19070;
(statearr_19147_20111[(1)] = cljs.core.first((state_19070[(4)])));

} else {
throw ex__13878__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20112 = state_19070;
state_19070 = G__20112;
continue;
} else {
return ret_value__13876__auto__;
}
break;
}
});
cljs$core$async$state_machine__13875__auto__ = function(state_19070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13875__auto____1.call(this,state_19070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13875__auto____0;
cljs$core$async$state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13875__auto____1;
return cljs$core$async$state_machine__13875__auto__;
})()
})();
var state__14616__auto__ = (function (){var statearr_19149 = f__14615__auto__();
(statearr_19149[(6)] = c__14614__auto___20084);

return statearr_19149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14616__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19162 = arguments.length;
switch (G__19162) {
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
var c__14614__auto___20119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14615__auto__ = (function (){var switch__13874__auto__ = (function (state_19235){
var state_val_19236 = (state_19235[(1)]);
if((state_val_19236 === (7))){
var inst_19228 = (state_19235[(2)]);
var state_19235__$1 = state_19235;
var statearr_19259_20120 = state_19235__$1;
(statearr_19259_20120[(2)] = inst_19228);

(statearr_19259_20120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (1))){
var inst_19165 = [];
var inst_19166 = inst_19165;
var inst_19167 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19235__$1 = (function (){var statearr_19266 = state_19235;
(statearr_19266[(7)] = inst_19166);

(statearr_19266[(8)] = inst_19167);

return statearr_19266;
})();
var statearr_19271_20121 = state_19235__$1;
(statearr_19271_20121[(2)] = null);

(statearr_19271_20121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (4))){
var inst_19170 = (state_19235[(9)]);
var inst_19170__$1 = (state_19235[(2)]);
var inst_19175 = (inst_19170__$1 == null);
var inst_19176 = cljs.core.not(inst_19175);
var state_19235__$1 = (function (){var statearr_19274 = state_19235;
(statearr_19274[(9)] = inst_19170__$1);

return statearr_19274;
})();
if(inst_19176){
var statearr_19280_20122 = state_19235__$1;
(statearr_19280_20122[(1)] = (5));

} else {
var statearr_19281_20123 = state_19235__$1;
(statearr_19281_20123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (15))){
var inst_19166 = (state_19235[(7)]);
var inst_19220 = cljs.core.vec(inst_19166);
var state_19235__$1 = state_19235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19235__$1,(18),out,inst_19220);
} else {
if((state_val_19236 === (13))){
var inst_19215 = (state_19235[(2)]);
var state_19235__$1 = state_19235;
var statearr_19293_20124 = state_19235__$1;
(statearr_19293_20124[(2)] = inst_19215);

(statearr_19293_20124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (6))){
var inst_19166 = (state_19235[(7)]);
var inst_19217 = inst_19166.length;
var inst_19218 = (inst_19217 > (0));
var state_19235__$1 = state_19235;
if(cljs.core.truth_(inst_19218)){
var statearr_19294_20125 = state_19235__$1;
(statearr_19294_20125[(1)] = (15));

} else {
var statearr_19295_20126 = state_19235__$1;
(statearr_19295_20126[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (17))){
var inst_19225 = (state_19235[(2)]);
var inst_19226 = cljs.core.async.close_BANG_(out);
var state_19235__$1 = (function (){var statearr_19297 = state_19235;
(statearr_19297[(10)] = inst_19225);

return statearr_19297;
})();
var statearr_19299_20127 = state_19235__$1;
(statearr_19299_20127[(2)] = inst_19226);

(statearr_19299_20127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (3))){
var inst_19230 = (state_19235[(2)]);
var state_19235__$1 = state_19235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19235__$1,inst_19230);
} else {
if((state_val_19236 === (12))){
var inst_19166 = (state_19235[(7)]);
var inst_19202 = cljs.core.vec(inst_19166);
var state_19235__$1 = state_19235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19235__$1,(14),out,inst_19202);
} else {
if((state_val_19236 === (2))){
var state_19235__$1 = state_19235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19235__$1,(4),ch);
} else {
if((state_val_19236 === (11))){
var inst_19166 = (state_19235[(7)]);
var inst_19170 = (state_19235[(9)]);
var inst_19178 = (state_19235[(11)]);
var inst_19194 = inst_19166.push(inst_19170);
var tmp19300 = inst_19166;
var inst_19166__$1 = tmp19300;
var inst_19167 = inst_19178;
var state_19235__$1 = (function (){var statearr_19302 = state_19235;
(statearr_19302[(12)] = inst_19194);

(statearr_19302[(7)] = inst_19166__$1);

(statearr_19302[(8)] = inst_19167);

return statearr_19302;
})();
var statearr_19303_20129 = state_19235__$1;
(statearr_19303_20129[(2)] = null);

(statearr_19303_20129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (9))){
var inst_19167 = (state_19235[(8)]);
var inst_19188 = cljs.core.keyword_identical_QMARK_(inst_19167,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19235__$1 = state_19235;
var statearr_19304_20130 = state_19235__$1;
(statearr_19304_20130[(2)] = inst_19188);

(statearr_19304_20130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (5))){
var inst_19170 = (state_19235[(9)]);
var inst_19178 = (state_19235[(11)]);
var inst_19167 = (state_19235[(8)]);
var inst_19184 = (state_19235[(13)]);
var inst_19178__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19170) : f.call(null,inst_19170));
var inst_19184__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19178__$1,inst_19167);
var state_19235__$1 = (function (){var statearr_19306 = state_19235;
(statearr_19306[(11)] = inst_19178__$1);

(statearr_19306[(13)] = inst_19184__$1);

return statearr_19306;
})();
if(inst_19184__$1){
var statearr_19307_20131 = state_19235__$1;
(statearr_19307_20131[(1)] = (8));

} else {
var statearr_19308_20132 = state_19235__$1;
(statearr_19308_20132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (14))){
var inst_19170 = (state_19235[(9)]);
var inst_19178 = (state_19235[(11)]);
var inst_19204 = (state_19235[(2)]);
var inst_19210 = [];
var inst_19211 = inst_19210.push(inst_19170);
var inst_19166 = inst_19210;
var inst_19167 = inst_19178;
var state_19235__$1 = (function (){var statearr_19309 = state_19235;
(statearr_19309[(14)] = inst_19204);

(statearr_19309[(15)] = inst_19211);

(statearr_19309[(7)] = inst_19166);

(statearr_19309[(8)] = inst_19167);

return statearr_19309;
})();
var statearr_19310_20133 = state_19235__$1;
(statearr_19310_20133[(2)] = null);

(statearr_19310_20133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (16))){
var state_19235__$1 = state_19235;
var statearr_19311_20134 = state_19235__$1;
(statearr_19311_20134[(2)] = null);

(statearr_19311_20134[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (10))){
var inst_19191 = (state_19235[(2)]);
var state_19235__$1 = state_19235;
if(cljs.core.truth_(inst_19191)){
var statearr_19312_20135 = state_19235__$1;
(statearr_19312_20135[(1)] = (11));

} else {
var statearr_19313_20137 = state_19235__$1;
(statearr_19313_20137[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (18))){
var inst_19222 = (state_19235[(2)]);
var state_19235__$1 = state_19235;
var statearr_19314_20138 = state_19235__$1;
(statearr_19314_20138[(2)] = inst_19222);

(statearr_19314_20138[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19236 === (8))){
var inst_19184 = (state_19235[(13)]);
var state_19235__$1 = state_19235;
var statearr_19315_20142 = state_19235__$1;
(statearr_19315_20142[(2)] = inst_19184);

(statearr_19315_20142[(1)] = (10));


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
var cljs$core$async$state_machine__13875__auto__ = null;
var cljs$core$async$state_machine__13875__auto____0 = (function (){
var statearr_19319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19319[(0)] = cljs$core$async$state_machine__13875__auto__);

(statearr_19319[(1)] = (1));

return statearr_19319;
});
var cljs$core$async$state_machine__13875__auto____1 = (function (state_19235){
while(true){
var ret_value__13876__auto__ = (function (){try{while(true){
var result__13877__auto__ = switch__13874__auto__(state_19235);
if(cljs.core.keyword_identical_QMARK_(result__13877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13877__auto__;
}
break;
}
}catch (e19321){var ex__13878__auto__ = e19321;
var statearr_19322_20143 = state_19235;
(statearr_19322_20143[(2)] = ex__13878__auto__);


if(cljs.core.seq((state_19235[(4)]))){
var statearr_19327_20148 = state_19235;
(statearr_19327_20148[(1)] = cljs.core.first((state_19235[(4)])));

} else {
throw ex__13878__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20149 = state_19235;
state_19235 = G__20149;
continue;
} else {
return ret_value__13876__auto__;
}
break;
}
});
cljs$core$async$state_machine__13875__auto__ = function(state_19235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13875__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13875__auto____1.call(this,state_19235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13875__auto____0;
cljs$core$async$state_machine__13875__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13875__auto____1;
return cljs$core$async$state_machine__13875__auto__;
})()
})();
var state__14616__auto__ = (function (){var statearr_19329 = f__14615__auto__();
(statearr_19329[(6)] = c__14614__auto___20119);

return statearr_19329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14616__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
