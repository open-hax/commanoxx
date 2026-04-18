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
cljs.core.async.t_cljs$core$async14082 = (function (f,blockable,meta14083){
this.f = f;
this.blockable = blockable;
this.meta14083 = meta14083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14084,meta14083__$1){
var self__ = this;
var _14084__$1 = this;
return (new cljs.core.async.t_cljs$core$async14082(self__.f,self__.blockable,meta14083__$1));
}));

(cljs.core.async.t_cljs$core$async14082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14084){
var self__ = this;
var _14084__$1 = this;
return self__.meta14083;
}));

(cljs.core.async.t_cljs$core$async14082.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14082.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14082.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14082.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14083","meta14083",1788995985,null)], null);
}));

(cljs.core.async.t_cljs$core$async14082.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14082");

(cljs.core.async.t_cljs$core$async14082.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14082");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14082.
 */
cljs.core.async.__GT_t_cljs$core$async14082 = (function cljs$core$async$__GT_t_cljs$core$async14082(f,blockable,meta14083){
return (new cljs.core.async.t_cljs$core$async14082(f,blockable,meta14083));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14081 = arguments.length;
switch (G__14081) {
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
return (new cljs.core.async.t_cljs$core$async14082(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14102 = arguments.length;
switch (G__14102) {
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
var G__14122 = arguments.length;
switch (G__14122) {
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
var G__14127 = arguments.length;
switch (G__14127) {
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
var val_16570 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16570) : fn1.call(null,val_16570));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16570) : fn1.call(null,val_16570));
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
var G__14136 = arguments.length;
switch (G__14136) {
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
var n__5741__auto___16573 = n;
var x_16574 = (0);
while(true){
if((x_16574 < n__5741__auto___16573)){
(a[x_16574] = x_16574);

var G__16575 = (x_16574 + (1));
x_16574 = G__16575;
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
cljs.core.async.t_cljs$core$async14158 = (function (flag,meta14159){
this.flag = flag;
this.meta14159 = meta14159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14160,meta14159__$1){
var self__ = this;
var _14160__$1 = this;
return (new cljs.core.async.t_cljs$core$async14158(self__.flag,meta14159__$1));
}));

(cljs.core.async.t_cljs$core$async14158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14160){
var self__ = this;
var _14160__$1 = this;
return self__.meta14159;
}));

(cljs.core.async.t_cljs$core$async14158.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14158.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14158.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14158.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14159","meta14159",-895346321,null)], null);
}));

(cljs.core.async.t_cljs$core$async14158.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14158");

(cljs.core.async.t_cljs$core$async14158.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14158");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14158.
 */
cljs.core.async.__GT_t_cljs$core$async14158 = (function cljs$core$async$__GT_t_cljs$core$async14158(flag,meta14159){
return (new cljs.core.async.t_cljs$core$async14158(flag,meta14159));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14158(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14173 = (function (flag,cb,meta14174){
this.flag = flag;
this.cb = cb;
this.meta14174 = meta14174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14175,meta14174__$1){
var self__ = this;
var _14175__$1 = this;
return (new cljs.core.async.t_cljs$core$async14173(self__.flag,self__.cb,meta14174__$1));
}));

(cljs.core.async.t_cljs$core$async14173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14175){
var self__ = this;
var _14175__$1 = this;
return self__.meta14174;
}));

(cljs.core.async.t_cljs$core$async14173.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14173.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14173.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14173.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14174","meta14174",1523251980,null)], null);
}));

(cljs.core.async.t_cljs$core$async14173.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14173");

(cljs.core.async.t_cljs$core$async14173.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14173");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14173.
 */
cljs.core.async.__GT_t_cljs$core$async14173 = (function cljs$core$async$__GT_t_cljs$core$async14173(flag,cb,meta14174){
return (new cljs.core.async.t_cljs$core$async14173(flag,cb,meta14174));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14173(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_16582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_16582)){
if((!(((port_16582.cljs$core$IFn$_invoke$arity$1 ? port_16582.cljs$core$IFn$_invoke$arity$1((1)) : port_16582.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__16586 = (i + (1));
i = G__16586;
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
return (function (p1__14188_SHARP_){
var G__14197 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14188_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14197) : fret.call(null,G__14197));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14189_SHARP_){
var G__14199 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14189_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14199) : fret.call(null,G__14199));
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
var G__16587 = (i + (1));
i = G__16587;
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
var len__5876__auto___16588 = arguments.length;
var i__5877__auto___16589 = (0);
while(true){
if((i__5877__auto___16589 < len__5876__auto___16588)){
args__5882__auto__.push((arguments[i__5877__auto___16589]));

var G__16591 = (i__5877__auto___16589 + (1));
i__5877__auto___16589 = G__16591;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14218){
var map__14219 = p__14218;
var map__14219__$1 = cljs.core.__destructure_map(map__14219);
var opts = map__14219__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14213){
var G__14214 = cljs.core.first(seq14213);
var seq14213__$1 = cljs.core.next(seq14213);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14214,seq14213__$1);
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
var G__14231 = arguments.length;
switch (G__14231) {
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
var c__14009__auto___16596 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14010__auto__ = (function (){var switch__12306__auto__ = (function (state_14289){
var state_val_14293 = (state_14289[(1)]);
if((state_val_14293 === (7))){
var inst_14285 = (state_14289[(2)]);
var state_14289__$1 = state_14289;
var statearr_14300_16597 = state_14289__$1;
(statearr_14300_16597[(2)] = inst_14285);

(statearr_14300_16597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (1))){
var state_14289__$1 = state_14289;
var statearr_14301_16598 = state_14289__$1;
(statearr_14301_16598[(2)] = null);

(statearr_14301_16598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (4))){
var inst_14263 = (state_14289[(7)]);
var inst_14263__$1 = (state_14289[(2)]);
var inst_14265 = (inst_14263__$1 == null);
var state_14289__$1 = (function (){var statearr_14303 = state_14289;
(statearr_14303[(7)] = inst_14263__$1);

return statearr_14303;
})();
if(cljs.core.truth_(inst_14265)){
var statearr_14304_16599 = state_14289__$1;
(statearr_14304_16599[(1)] = (5));

} else {
var statearr_14305_16600 = state_14289__$1;
(statearr_14305_16600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (13))){
var state_14289__$1 = state_14289;
var statearr_14307_16601 = state_14289__$1;
(statearr_14307_16601[(2)] = null);

(statearr_14307_16601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (6))){
var inst_14263 = (state_14289[(7)]);
var state_14289__$1 = state_14289;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14289__$1,(11),to,inst_14263);
} else {
if((state_val_14293 === (3))){
var inst_14287 = (state_14289[(2)]);
var state_14289__$1 = state_14289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14289__$1,inst_14287);
} else {
if((state_val_14293 === (12))){
var state_14289__$1 = state_14289;
var statearr_14308_16602 = state_14289__$1;
(statearr_14308_16602[(2)] = null);

(statearr_14308_16602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (2))){
var state_14289__$1 = state_14289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14289__$1,(4),from);
} else {
if((state_val_14293 === (11))){
var inst_14278 = (state_14289[(2)]);
var state_14289__$1 = state_14289;
if(cljs.core.truth_(inst_14278)){
var statearr_14310_16603 = state_14289__$1;
(statearr_14310_16603[(1)] = (12));

} else {
var statearr_14314_16604 = state_14289__$1;
(statearr_14314_16604[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (9))){
var state_14289__$1 = state_14289;
var statearr_14315_16605 = state_14289__$1;
(statearr_14315_16605[(2)] = null);

(statearr_14315_16605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (5))){
var state_14289__$1 = state_14289;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14320_16606 = state_14289__$1;
(statearr_14320_16606[(1)] = (8));

} else {
var statearr_14321_16607 = state_14289__$1;
(statearr_14321_16607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (14))){
var inst_14283 = (state_14289[(2)]);
var state_14289__$1 = state_14289;
var statearr_14323_16608 = state_14289__$1;
(statearr_14323_16608[(2)] = inst_14283);

(statearr_14323_16608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (10))){
var inst_14274 = (state_14289[(2)]);
var state_14289__$1 = state_14289;
var statearr_14324_16609 = state_14289__$1;
(statearr_14324_16609[(2)] = inst_14274);

(statearr_14324_16609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (8))){
var inst_14271 = cljs.core.async.close_BANG_(to);
var state_14289__$1 = state_14289;
var statearr_14325_16616 = state_14289__$1;
(statearr_14325_16616[(2)] = inst_14271);

(statearr_14325_16616[(1)] = (10));


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
var cljs$core$async$state_machine__12307__auto__ = null;
var cljs$core$async$state_machine__12307__auto____0 = (function (){
var statearr_14326 = [null,null,null,null,null,null,null,null];
(statearr_14326[(0)] = cljs$core$async$state_machine__12307__auto__);

(statearr_14326[(1)] = (1));

return statearr_14326;
});
var cljs$core$async$state_machine__12307__auto____1 = (function (state_14289){
while(true){
var ret_value__12308__auto__ = (function (){try{while(true){
var result__12309__auto__ = switch__12306__auto__(state_14289);
if(cljs.core.keyword_identical_QMARK_(result__12309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12309__auto__;
}
break;
}
}catch (e14327){var ex__12310__auto__ = e14327;
var statearr_14328_16617 = state_14289;
(statearr_14328_16617[(2)] = ex__12310__auto__);


if(cljs.core.seq((state_14289[(4)]))){
var statearr_14332_16618 = state_14289;
(statearr_14332_16618[(1)] = cljs.core.first((state_14289[(4)])));

} else {
throw ex__12310__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16619 = state_14289;
state_14289 = G__16619;
continue;
} else {
return ret_value__12308__auto__;
}
break;
}
});
cljs$core$async$state_machine__12307__auto__ = function(state_14289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12307__auto____1.call(this,state_14289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12307__auto____0;
cljs$core$async$state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12307__auto____1;
return cljs$core$async$state_machine__12307__auto__;
})()
})();
var state__14011__auto__ = (function (){var statearr_14334 = f__14010__auto__();
(statearr_14334[(6)] = c__14009__auto___16596);

return statearr_14334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14011__auto__);
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
var process__$1 = (function (p__14352){
var vec__14353 = p__14352;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14353,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14353,(1),null);
var job = vec__14353;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14009__auto___16620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14010__auto__ = (function (){var switch__12306__auto__ = (function (state_14364){
var state_val_14365 = (state_14364[(1)]);
if((state_val_14365 === (1))){
var state_14364__$1 = state_14364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14364__$1,(2),res,v);
} else {
if((state_val_14365 === (2))){
var inst_14358 = (state_14364[(2)]);
var inst_14359 = cljs.core.async.close_BANG_(res);
var state_14364__$1 = (function (){var statearr_14370 = state_14364;
(statearr_14370[(7)] = inst_14358);

return statearr_14370;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14364__$1,inst_14359);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____0 = (function (){
var statearr_14374 = [null,null,null,null,null,null,null,null];
(statearr_14374[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__);

(statearr_14374[(1)] = (1));

return statearr_14374;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____1 = (function (state_14364){
while(true){
var ret_value__12308__auto__ = (function (){try{while(true){
var result__12309__auto__ = switch__12306__auto__(state_14364);
if(cljs.core.keyword_identical_QMARK_(result__12309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12309__auto__;
}
break;
}
}catch (e14375){var ex__12310__auto__ = e14375;
var statearr_14376_16629 = state_14364;
(statearr_14376_16629[(2)] = ex__12310__auto__);


if(cljs.core.seq((state_14364[(4)]))){
var statearr_14377_16630 = state_14364;
(statearr_14377_16630[(1)] = cljs.core.first((state_14364[(4)])));

} else {
throw ex__12310__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16631 = state_14364;
state_14364 = G__16631;
continue;
} else {
return ret_value__12308__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__ = function(state_14364){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____1.call(this,state_14364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__;
})()
})();
var state__14011__auto__ = (function (){var statearr_14378 = f__14010__auto__();
(statearr_14378[(6)] = c__14009__auto___16620);

return statearr_14378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14011__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14379){
var vec__14380 = p__14379;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14380,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14380,(1),null);
var job = vec__14380;
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
var n__5741__auto___16632 = n;
var __16633 = (0);
while(true){
if((__16633 < n__5741__auto___16632)){
var G__14387_16634 = type;
var G__14387_16635__$1 = (((G__14387_16634 instanceof cljs.core.Keyword))?G__14387_16634.fqn:null);
switch (G__14387_16635__$1) {
case "compute":
var c__14009__auto___16637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16633,c__14009__auto___16637,G__14387_16634,G__14387_16635__$1,n__5741__auto___16632,jobs,results,process__$1,async){
return (function (){
var f__14010__auto__ = (function (){var switch__12306__auto__ = ((function (__16633,c__14009__auto___16637,G__14387_16634,G__14387_16635__$1,n__5741__auto___16632,jobs,results,process__$1,async){
return (function (state_14400){
var state_val_14401 = (state_14400[(1)]);
if((state_val_14401 === (1))){
var state_14400__$1 = state_14400;
var statearr_14412_16638 = state_14400__$1;
(statearr_14412_16638[(2)] = null);

(statearr_14412_16638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14401 === (2))){
var state_14400__$1 = state_14400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14400__$1,(4),jobs);
} else {
if((state_val_14401 === (3))){
var inst_14398 = (state_14400[(2)]);
var state_14400__$1 = state_14400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14400__$1,inst_14398);
} else {
if((state_val_14401 === (4))){
var inst_14390 = (state_14400[(2)]);
var inst_14391 = process__$1(inst_14390);
var state_14400__$1 = state_14400;
if(cljs.core.truth_(inst_14391)){
var statearr_14413_16639 = state_14400__$1;
(statearr_14413_16639[(1)] = (5));

} else {
var statearr_14418_16640 = state_14400__$1;
(statearr_14418_16640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14401 === (5))){
var state_14400__$1 = state_14400;
var statearr_14419_16641 = state_14400__$1;
(statearr_14419_16641[(2)] = null);

(statearr_14419_16641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14401 === (6))){
var state_14400__$1 = state_14400;
var statearr_14420_16642 = state_14400__$1;
(statearr_14420_16642[(2)] = null);

(statearr_14420_16642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14401 === (7))){
var inst_14396 = (state_14400[(2)]);
var state_14400__$1 = state_14400;
var statearr_14421_16643 = state_14400__$1;
(statearr_14421_16643[(2)] = inst_14396);

(statearr_14421_16643[(1)] = (3));


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
});})(__16633,c__14009__auto___16637,G__14387_16634,G__14387_16635__$1,n__5741__auto___16632,jobs,results,process__$1,async))
;
return ((function (__16633,switch__12306__auto__,c__14009__auto___16637,G__14387_16634,G__14387_16635__$1,n__5741__auto___16632,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____0 = (function (){
var statearr_14422 = [null,null,null,null,null,null,null];
(statearr_14422[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__);

(statearr_14422[(1)] = (1));

return statearr_14422;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____1 = (function (state_14400){
while(true){
var ret_value__12308__auto__ = (function (){try{while(true){
var result__12309__auto__ = switch__12306__auto__(state_14400);
if(cljs.core.keyword_identical_QMARK_(result__12309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12309__auto__;
}
break;
}
}catch (e14423){var ex__12310__auto__ = e14423;
var statearr_14424_16645 = state_14400;
(statearr_14424_16645[(2)] = ex__12310__auto__);


if(cljs.core.seq((state_14400[(4)]))){
var statearr_14425_16646 = state_14400;
(statearr_14425_16646[(1)] = cljs.core.first((state_14400[(4)])));

} else {
throw ex__12310__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16647 = state_14400;
state_14400 = G__16647;
continue;
} else {
return ret_value__12308__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__ = function(state_14400){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____1.call(this,state_14400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__;
})()
;})(__16633,switch__12306__auto__,c__14009__auto___16637,G__14387_16634,G__14387_16635__$1,n__5741__auto___16632,jobs,results,process__$1,async))
})();
var state__14011__auto__ = (function (){var statearr_14426 = f__14010__auto__();
(statearr_14426[(6)] = c__14009__auto___16637);

return statearr_14426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14011__auto__);
});})(__16633,c__14009__auto___16637,G__14387_16634,G__14387_16635__$1,n__5741__auto___16632,jobs,results,process__$1,async))
);


break;
case "async":
var c__14009__auto___16648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16633,c__14009__auto___16648,G__14387_16634,G__14387_16635__$1,n__5741__auto___16632,jobs,results,process__$1,async){
return (function (){
var f__14010__auto__ = (function (){var switch__12306__auto__ = ((function (__16633,c__14009__auto___16648,G__14387_16634,G__14387_16635__$1,n__5741__auto___16632,jobs,results,process__$1,async){
return (function (state_14441){
var state_val_14442 = (state_14441[(1)]);
if((state_val_14442 === (1))){
var state_14441__$1 = state_14441;
var statearr_14443_16649 = state_14441__$1;
(statearr_14443_16649[(2)] = null);

(statearr_14443_16649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (2))){
var state_14441__$1 = state_14441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14441__$1,(4),jobs);
} else {
if((state_val_14442 === (3))){
var inst_14439 = (state_14441[(2)]);
var state_14441__$1 = state_14441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14441__$1,inst_14439);
} else {
if((state_val_14442 === (4))){
var inst_14430 = (state_14441[(2)]);
var inst_14431 = async(inst_14430);
var state_14441__$1 = state_14441;
if(cljs.core.truth_(inst_14431)){
var statearr_14444_16651 = state_14441__$1;
(statearr_14444_16651[(1)] = (5));

} else {
var statearr_14445_16652 = state_14441__$1;
(statearr_14445_16652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (5))){
var state_14441__$1 = state_14441;
var statearr_14446_16653 = state_14441__$1;
(statearr_14446_16653[(2)] = null);

(statearr_14446_16653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (6))){
var state_14441__$1 = state_14441;
var statearr_14447_16654 = state_14441__$1;
(statearr_14447_16654[(2)] = null);

(statearr_14447_16654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (7))){
var inst_14436 = (state_14441[(2)]);
var state_14441__$1 = state_14441;
var statearr_14448_16655 = state_14441__$1;
(statearr_14448_16655[(2)] = inst_14436);

(statearr_14448_16655[(1)] = (3));


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
});})(__16633,c__14009__auto___16648,G__14387_16634,G__14387_16635__$1,n__5741__auto___16632,jobs,results,process__$1,async))
;
return ((function (__16633,switch__12306__auto__,c__14009__auto___16648,G__14387_16634,G__14387_16635__$1,n__5741__auto___16632,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____0 = (function (){
var statearr_14449 = [null,null,null,null,null,null,null];
(statearr_14449[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__);

(statearr_14449[(1)] = (1));

return statearr_14449;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____1 = (function (state_14441){
while(true){
var ret_value__12308__auto__ = (function (){try{while(true){
var result__12309__auto__ = switch__12306__auto__(state_14441);
if(cljs.core.keyword_identical_QMARK_(result__12309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12309__auto__;
}
break;
}
}catch (e14450){var ex__12310__auto__ = e14450;
var statearr_14451_16656 = state_14441;
(statearr_14451_16656[(2)] = ex__12310__auto__);


if(cljs.core.seq((state_14441[(4)]))){
var statearr_14452_16657 = state_14441;
(statearr_14452_16657[(1)] = cljs.core.first((state_14441[(4)])));

} else {
throw ex__12310__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16658 = state_14441;
state_14441 = G__16658;
continue;
} else {
return ret_value__12308__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__ = function(state_14441){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____1.call(this,state_14441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__;
})()
;})(__16633,switch__12306__auto__,c__14009__auto___16648,G__14387_16634,G__14387_16635__$1,n__5741__auto___16632,jobs,results,process__$1,async))
})();
var state__14011__auto__ = (function (){var statearr_14453 = f__14010__auto__();
(statearr_14453[(6)] = c__14009__auto___16648);

return statearr_14453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14011__auto__);
});})(__16633,c__14009__auto___16648,G__14387_16634,G__14387_16635__$1,n__5741__auto___16632,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14387_16635__$1))));

}

var G__16660 = (__16633 + (1));
__16633 = G__16660;
continue;
} else {
}
break;
}

var c__14009__auto___16661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14010__auto__ = (function (){var switch__12306__auto__ = (function (state_14484){
var state_val_14485 = (state_14484[(1)]);
if((state_val_14485 === (7))){
var inst_14480 = (state_14484[(2)]);
var state_14484__$1 = state_14484;
var statearr_14490_16662 = state_14484__$1;
(statearr_14490_16662[(2)] = inst_14480);

(statearr_14490_16662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14485 === (1))){
var state_14484__$1 = state_14484;
var statearr_14491_16663 = state_14484__$1;
(statearr_14491_16663[(2)] = null);

(statearr_14491_16663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14485 === (4))){
var inst_14456 = (state_14484[(7)]);
var inst_14456__$1 = (state_14484[(2)]);
var inst_14457 = (inst_14456__$1 == null);
var state_14484__$1 = (function (){var statearr_14492 = state_14484;
(statearr_14492[(7)] = inst_14456__$1);

return statearr_14492;
})();
if(cljs.core.truth_(inst_14457)){
var statearr_14493_16664 = state_14484__$1;
(statearr_14493_16664[(1)] = (5));

} else {
var statearr_14494_16665 = state_14484__$1;
(statearr_14494_16665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14485 === (6))){
var inst_14456 = (state_14484[(7)]);
var inst_14461 = (state_14484[(8)]);
var inst_14461__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14471 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14472 = [inst_14456,inst_14461__$1];
var inst_14473 = (new cljs.core.PersistentVector(null,2,(5),inst_14471,inst_14472,null));
var state_14484__$1 = (function (){var statearr_14495 = state_14484;
(statearr_14495[(8)] = inst_14461__$1);

return statearr_14495;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14484__$1,(8),jobs,inst_14473);
} else {
if((state_val_14485 === (3))){
var inst_14482 = (state_14484[(2)]);
var state_14484__$1 = state_14484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14484__$1,inst_14482);
} else {
if((state_val_14485 === (2))){
var state_14484__$1 = state_14484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14484__$1,(4),from);
} else {
if((state_val_14485 === (9))){
var inst_14477 = (state_14484[(2)]);
var state_14484__$1 = (function (){var statearr_14496 = state_14484;
(statearr_14496[(9)] = inst_14477);

return statearr_14496;
})();
var statearr_14497_16667 = state_14484__$1;
(statearr_14497_16667[(2)] = null);

(statearr_14497_16667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14485 === (5))){
var inst_14459 = cljs.core.async.close_BANG_(jobs);
var state_14484__$1 = state_14484;
var statearr_14502_16668 = state_14484__$1;
(statearr_14502_16668[(2)] = inst_14459);

(statearr_14502_16668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14485 === (8))){
var inst_14461 = (state_14484[(8)]);
var inst_14475 = (state_14484[(2)]);
var state_14484__$1 = (function (){var statearr_14503 = state_14484;
(statearr_14503[(10)] = inst_14475);

return statearr_14503;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14484__$1,(9),results,inst_14461);
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
var cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____0 = (function (){
var statearr_14505 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14505[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__);

(statearr_14505[(1)] = (1));

return statearr_14505;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____1 = (function (state_14484){
while(true){
var ret_value__12308__auto__ = (function (){try{while(true){
var result__12309__auto__ = switch__12306__auto__(state_14484);
if(cljs.core.keyword_identical_QMARK_(result__12309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12309__auto__;
}
break;
}
}catch (e14510){var ex__12310__auto__ = e14510;
var statearr_14511_16675 = state_14484;
(statearr_14511_16675[(2)] = ex__12310__auto__);


if(cljs.core.seq((state_14484[(4)]))){
var statearr_14512_16676 = state_14484;
(statearr_14512_16676[(1)] = cljs.core.first((state_14484[(4)])));

} else {
throw ex__12310__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16677 = state_14484;
state_14484 = G__16677;
continue;
} else {
return ret_value__12308__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__ = function(state_14484){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____1.call(this,state_14484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__;
})()
})();
var state__14011__auto__ = (function (){var statearr_14513 = f__14010__auto__();
(statearr_14513[(6)] = c__14009__auto___16661);

return statearr_14513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14011__auto__);
}));


var c__14009__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14010__auto__ = (function (){var switch__12306__auto__ = (function (state_14551){
var state_val_14552 = (state_14551[(1)]);
if((state_val_14552 === (7))){
var inst_14547 = (state_14551[(2)]);
var state_14551__$1 = state_14551;
var statearr_14553_16683 = state_14551__$1;
(statearr_14553_16683[(2)] = inst_14547);

(statearr_14553_16683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (20))){
var state_14551__$1 = state_14551;
var statearr_14554_16684 = state_14551__$1;
(statearr_14554_16684[(2)] = null);

(statearr_14554_16684[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (1))){
var state_14551__$1 = state_14551;
var statearr_14555_16685 = state_14551__$1;
(statearr_14555_16685[(2)] = null);

(statearr_14555_16685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (4))){
var inst_14516 = (state_14551[(7)]);
var inst_14516__$1 = (state_14551[(2)]);
var inst_14517 = (inst_14516__$1 == null);
var state_14551__$1 = (function (){var statearr_14557 = state_14551;
(statearr_14557[(7)] = inst_14516__$1);

return statearr_14557;
})();
if(cljs.core.truth_(inst_14517)){
var statearr_14560_16686 = state_14551__$1;
(statearr_14560_16686[(1)] = (5));

} else {
var statearr_14563_16687 = state_14551__$1;
(statearr_14563_16687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (15))){
var inst_14529 = (state_14551[(8)]);
var state_14551__$1 = state_14551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14551__$1,(18),to,inst_14529);
} else {
if((state_val_14552 === (21))){
var inst_14542 = (state_14551[(2)]);
var state_14551__$1 = state_14551;
var statearr_14565_16688 = state_14551__$1;
(statearr_14565_16688[(2)] = inst_14542);

(statearr_14565_16688[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (13))){
var inst_14544 = (state_14551[(2)]);
var state_14551__$1 = (function (){var statearr_14566 = state_14551;
(statearr_14566[(9)] = inst_14544);

return statearr_14566;
})();
var statearr_14567_16689 = state_14551__$1;
(statearr_14567_16689[(2)] = null);

(statearr_14567_16689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (6))){
var inst_14516 = (state_14551[(7)]);
var state_14551__$1 = state_14551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14551__$1,(11),inst_14516);
} else {
if((state_val_14552 === (17))){
var inst_14537 = (state_14551[(2)]);
var state_14551__$1 = state_14551;
if(cljs.core.truth_(inst_14537)){
var statearr_14568_16690 = state_14551__$1;
(statearr_14568_16690[(1)] = (19));

} else {
var statearr_14569_16691 = state_14551__$1;
(statearr_14569_16691[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (3))){
var inst_14549 = (state_14551[(2)]);
var state_14551__$1 = state_14551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14551__$1,inst_14549);
} else {
if((state_val_14552 === (12))){
var inst_14526 = (state_14551[(10)]);
var state_14551__$1 = state_14551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14551__$1,(14),inst_14526);
} else {
if((state_val_14552 === (2))){
var state_14551__$1 = state_14551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14551__$1,(4),results);
} else {
if((state_val_14552 === (19))){
var state_14551__$1 = state_14551;
var statearr_14570_16692 = state_14551__$1;
(statearr_14570_16692[(2)] = null);

(statearr_14570_16692[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (11))){
var inst_14526 = (state_14551[(2)]);
var state_14551__$1 = (function (){var statearr_14571 = state_14551;
(statearr_14571[(10)] = inst_14526);

return statearr_14571;
})();
var statearr_14572_16693 = state_14551__$1;
(statearr_14572_16693[(2)] = null);

(statearr_14572_16693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (9))){
var state_14551__$1 = state_14551;
var statearr_14573_16694 = state_14551__$1;
(statearr_14573_16694[(2)] = null);

(statearr_14573_16694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (5))){
var state_14551__$1 = state_14551;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14574_16695 = state_14551__$1;
(statearr_14574_16695[(1)] = (8));

} else {
var statearr_14575_16696 = state_14551__$1;
(statearr_14575_16696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (14))){
var inst_14529 = (state_14551[(8)]);
var inst_14531 = (state_14551[(11)]);
var inst_14529__$1 = (state_14551[(2)]);
var inst_14530 = (inst_14529__$1 == null);
var inst_14531__$1 = cljs.core.not(inst_14530);
var state_14551__$1 = (function (){var statearr_14576 = state_14551;
(statearr_14576[(8)] = inst_14529__$1);

(statearr_14576[(11)] = inst_14531__$1);

return statearr_14576;
})();
if(inst_14531__$1){
var statearr_14577_16697 = state_14551__$1;
(statearr_14577_16697[(1)] = (15));

} else {
var statearr_14578_16698 = state_14551__$1;
(statearr_14578_16698[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (16))){
var inst_14531 = (state_14551[(11)]);
var state_14551__$1 = state_14551;
var statearr_14579_16699 = state_14551__$1;
(statearr_14579_16699[(2)] = inst_14531);

(statearr_14579_16699[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (10))){
var inst_14523 = (state_14551[(2)]);
var state_14551__$1 = state_14551;
var statearr_14581_16700 = state_14551__$1;
(statearr_14581_16700[(2)] = inst_14523);

(statearr_14581_16700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (18))){
var inst_14534 = (state_14551[(2)]);
var state_14551__$1 = state_14551;
var statearr_14583_16701 = state_14551__$1;
(statearr_14583_16701[(2)] = inst_14534);

(statearr_14583_16701[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14552 === (8))){
var inst_14520 = cljs.core.async.close_BANG_(to);
var state_14551__$1 = state_14551;
var statearr_14584_16702 = state_14551__$1;
(statearr_14584_16702[(2)] = inst_14520);

(statearr_14584_16702[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____0 = (function (){
var statearr_14585 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14585[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__);

(statearr_14585[(1)] = (1));

return statearr_14585;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____1 = (function (state_14551){
while(true){
var ret_value__12308__auto__ = (function (){try{while(true){
var result__12309__auto__ = switch__12306__auto__(state_14551);
if(cljs.core.keyword_identical_QMARK_(result__12309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12309__auto__;
}
break;
}
}catch (e14586){var ex__12310__auto__ = e14586;
var statearr_14587_16705 = state_14551;
(statearr_14587_16705[(2)] = ex__12310__auto__);


if(cljs.core.seq((state_14551[(4)]))){
var statearr_14588_16706 = state_14551;
(statearr_14588_16706[(1)] = cljs.core.first((state_14551[(4)])));

} else {
throw ex__12310__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16707 = state_14551;
state_14551 = G__16707;
continue;
} else {
return ret_value__12308__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__ = function(state_14551){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____1.call(this,state_14551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12307__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12307__auto__;
})()
})();
var state__14011__auto__ = (function (){var statearr_14593 = f__14010__auto__();
(statearr_14593[(6)] = c__14009__auto__);

return statearr_14593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14011__auto__);
}));

return c__14009__auto__;
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
var G__14598 = arguments.length;
switch (G__14598) {
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
var G__14604 = arguments.length;
switch (G__14604) {
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
var G__14606 = arguments.length;
switch (G__14606) {
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
var c__14009__auto___16719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14010__auto__ = (function (){var switch__12306__auto__ = (function (state_14637){
var state_val_14638 = (state_14637[(1)]);
if((state_val_14638 === (7))){
var inst_14633 = (state_14637[(2)]);
var state_14637__$1 = state_14637;
var statearr_14643_16720 = state_14637__$1;
(statearr_14643_16720[(2)] = inst_14633);

(statearr_14643_16720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (1))){
var state_14637__$1 = state_14637;
var statearr_14644_16721 = state_14637__$1;
(statearr_14644_16721[(2)] = null);

(statearr_14644_16721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (4))){
var inst_14613 = (state_14637[(7)]);
var inst_14613__$1 = (state_14637[(2)]);
var inst_14614 = (inst_14613__$1 == null);
var state_14637__$1 = (function (){var statearr_14645 = state_14637;
(statearr_14645[(7)] = inst_14613__$1);

return statearr_14645;
})();
if(cljs.core.truth_(inst_14614)){
var statearr_14646_16722 = state_14637__$1;
(statearr_14646_16722[(1)] = (5));

} else {
var statearr_14648_16724 = state_14637__$1;
(statearr_14648_16724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (13))){
var state_14637__$1 = state_14637;
var statearr_14650_16725 = state_14637__$1;
(statearr_14650_16725[(2)] = null);

(statearr_14650_16725[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (6))){
var inst_14613 = (state_14637[(7)]);
var inst_14619 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14613) : p.call(null,inst_14613));
var state_14637__$1 = state_14637;
if(cljs.core.truth_(inst_14619)){
var statearr_14651_16726 = state_14637__$1;
(statearr_14651_16726[(1)] = (9));

} else {
var statearr_14652_16727 = state_14637__$1;
(statearr_14652_16727[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (3))){
var inst_14635 = (state_14637[(2)]);
var state_14637__$1 = state_14637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14637__$1,inst_14635);
} else {
if((state_val_14638 === (12))){
var state_14637__$1 = state_14637;
var statearr_14655_16728 = state_14637__$1;
(statearr_14655_16728[(2)] = null);

(statearr_14655_16728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (2))){
var state_14637__$1 = state_14637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14637__$1,(4),ch);
} else {
if((state_val_14638 === (11))){
var inst_14613 = (state_14637[(7)]);
var inst_14624 = (state_14637[(2)]);
var state_14637__$1 = state_14637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14637__$1,(8),inst_14624,inst_14613);
} else {
if((state_val_14638 === (9))){
var state_14637__$1 = state_14637;
var statearr_14658_16729 = state_14637__$1;
(statearr_14658_16729[(2)] = tc);

(statearr_14658_16729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (5))){
var inst_14616 = cljs.core.async.close_BANG_(tc);
var inst_14617 = cljs.core.async.close_BANG_(fc);
var state_14637__$1 = (function (){var statearr_14659 = state_14637;
(statearr_14659[(8)] = inst_14616);

return statearr_14659;
})();
var statearr_14661_16732 = state_14637__$1;
(statearr_14661_16732[(2)] = inst_14617);

(statearr_14661_16732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (14))){
var inst_14631 = (state_14637[(2)]);
var state_14637__$1 = state_14637;
var statearr_14665_16737 = state_14637__$1;
(statearr_14665_16737[(2)] = inst_14631);

(statearr_14665_16737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (10))){
var state_14637__$1 = state_14637;
var statearr_14666_16738 = state_14637__$1;
(statearr_14666_16738[(2)] = fc);

(statearr_14666_16738[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14638 === (8))){
var inst_14626 = (state_14637[(2)]);
var state_14637__$1 = state_14637;
if(cljs.core.truth_(inst_14626)){
var statearr_14667_16740 = state_14637__$1;
(statearr_14667_16740[(1)] = (12));

} else {
var statearr_14668_16742 = state_14637__$1;
(statearr_14668_16742[(1)] = (13));

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
var cljs$core$async$state_machine__12307__auto__ = null;
var cljs$core$async$state_machine__12307__auto____0 = (function (){
var statearr_14669 = [null,null,null,null,null,null,null,null,null];
(statearr_14669[(0)] = cljs$core$async$state_machine__12307__auto__);

(statearr_14669[(1)] = (1));

return statearr_14669;
});
var cljs$core$async$state_machine__12307__auto____1 = (function (state_14637){
while(true){
var ret_value__12308__auto__ = (function (){try{while(true){
var result__12309__auto__ = switch__12306__auto__(state_14637);
if(cljs.core.keyword_identical_QMARK_(result__12309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12309__auto__;
}
break;
}
}catch (e14670){var ex__12310__auto__ = e14670;
var statearr_14671_16751 = state_14637;
(statearr_14671_16751[(2)] = ex__12310__auto__);


if(cljs.core.seq((state_14637[(4)]))){
var statearr_14676_16752 = state_14637;
(statearr_14676_16752[(1)] = cljs.core.first((state_14637[(4)])));

} else {
throw ex__12310__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16756 = state_14637;
state_14637 = G__16756;
continue;
} else {
return ret_value__12308__auto__;
}
break;
}
});
cljs$core$async$state_machine__12307__auto__ = function(state_14637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12307__auto____1.call(this,state_14637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12307__auto____0;
cljs$core$async$state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12307__auto____1;
return cljs$core$async$state_machine__12307__auto__;
})()
})();
var state__14011__auto__ = (function (){var statearr_14679 = f__14010__auto__();
(statearr_14679[(6)] = c__14009__auto___16719);

return statearr_14679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14011__auto__);
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
var c__14009__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14010__auto__ = (function (){var switch__12306__auto__ = (function (state_14706){
var state_val_14707 = (state_14706[(1)]);
if((state_val_14707 === (7))){
var inst_14702 = (state_14706[(2)]);
var state_14706__$1 = state_14706;
var statearr_14708_16757 = state_14706__$1;
(statearr_14708_16757[(2)] = inst_14702);

(statearr_14708_16757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14707 === (1))){
var inst_14680 = init;
var inst_14681 = inst_14680;
var state_14706__$1 = (function (){var statearr_14709 = state_14706;
(statearr_14709[(7)] = inst_14681);

return statearr_14709;
})();
var statearr_14710_16758 = state_14706__$1;
(statearr_14710_16758[(2)] = null);

(statearr_14710_16758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14707 === (4))){
var inst_14688 = (state_14706[(8)]);
var inst_14688__$1 = (state_14706[(2)]);
var inst_14689 = (inst_14688__$1 == null);
var state_14706__$1 = (function (){var statearr_14713 = state_14706;
(statearr_14713[(8)] = inst_14688__$1);

return statearr_14713;
})();
if(cljs.core.truth_(inst_14689)){
var statearr_14714_16759 = state_14706__$1;
(statearr_14714_16759[(1)] = (5));

} else {
var statearr_14715_16760 = state_14706__$1;
(statearr_14715_16760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14707 === (6))){
var inst_14681 = (state_14706[(7)]);
var inst_14688 = (state_14706[(8)]);
var inst_14692 = (state_14706[(9)]);
var inst_14692__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14681,inst_14688) : f.call(null,inst_14681,inst_14688));
var inst_14693 = cljs.core.reduced_QMARK_(inst_14692__$1);
var state_14706__$1 = (function (){var statearr_14716 = state_14706;
(statearr_14716[(9)] = inst_14692__$1);

return statearr_14716;
})();
if(inst_14693){
var statearr_14720_16767 = state_14706__$1;
(statearr_14720_16767[(1)] = (8));

} else {
var statearr_14721_16768 = state_14706__$1;
(statearr_14721_16768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14707 === (3))){
var inst_14704 = (state_14706[(2)]);
var state_14706__$1 = state_14706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14706__$1,inst_14704);
} else {
if((state_val_14707 === (2))){
var state_14706__$1 = state_14706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14706__$1,(4),ch);
} else {
if((state_val_14707 === (9))){
var inst_14692 = (state_14706[(9)]);
var inst_14681 = inst_14692;
var state_14706__$1 = (function (){var statearr_14724 = state_14706;
(statearr_14724[(7)] = inst_14681);

return statearr_14724;
})();
var statearr_14725_16769 = state_14706__$1;
(statearr_14725_16769[(2)] = null);

(statearr_14725_16769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14707 === (5))){
var inst_14681 = (state_14706[(7)]);
var state_14706__$1 = state_14706;
var statearr_14726_16770 = state_14706__$1;
(statearr_14726_16770[(2)] = inst_14681);

(statearr_14726_16770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14707 === (10))){
var inst_14700 = (state_14706[(2)]);
var state_14706__$1 = state_14706;
var statearr_14727_16771 = state_14706__$1;
(statearr_14727_16771[(2)] = inst_14700);

(statearr_14727_16771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14707 === (8))){
var inst_14692 = (state_14706[(9)]);
var inst_14695 = cljs.core.deref(inst_14692);
var state_14706__$1 = state_14706;
var statearr_14728_16772 = state_14706__$1;
(statearr_14728_16772[(2)] = inst_14695);

(statearr_14728_16772[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__12307__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12307__auto____0 = (function (){
var statearr_14729 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14729[(0)] = cljs$core$async$reduce_$_state_machine__12307__auto__);

(statearr_14729[(1)] = (1));

return statearr_14729;
});
var cljs$core$async$reduce_$_state_machine__12307__auto____1 = (function (state_14706){
while(true){
var ret_value__12308__auto__ = (function (){try{while(true){
var result__12309__auto__ = switch__12306__auto__(state_14706);
if(cljs.core.keyword_identical_QMARK_(result__12309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12309__auto__;
}
break;
}
}catch (e14730){var ex__12310__auto__ = e14730;
var statearr_14731_16777 = state_14706;
(statearr_14731_16777[(2)] = ex__12310__auto__);


if(cljs.core.seq((state_14706[(4)]))){
var statearr_14735_16778 = state_14706;
(statearr_14735_16778[(1)] = cljs.core.first((state_14706[(4)])));

} else {
throw ex__12310__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16779 = state_14706;
state_14706 = G__16779;
continue;
} else {
return ret_value__12308__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12307__auto__ = function(state_14706){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12307__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12307__auto____1.call(this,state_14706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12307__auto____0;
cljs$core$async$reduce_$_state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12307__auto____1;
return cljs$core$async$reduce_$_state_machine__12307__auto__;
})()
})();
var state__14011__auto__ = (function (){var statearr_14736 = f__14010__auto__();
(statearr_14736[(6)] = c__14009__auto__);

return statearr_14736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14011__auto__);
}));

return c__14009__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14009__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14010__auto__ = (function (){var switch__12306__auto__ = (function (state_14743){
var state_val_14744 = (state_14743[(1)]);
if((state_val_14744 === (1))){
var inst_14738 = cljs.core.async.reduce(f__$1,init,ch);
var state_14743__$1 = state_14743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14743__$1,(2),inst_14738);
} else {
if((state_val_14744 === (2))){
var inst_14740 = (state_14743[(2)]);
var inst_14741 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14740) : f__$1.call(null,inst_14740));
var state_14743__$1 = state_14743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14743__$1,inst_14741);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__12307__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12307__auto____0 = (function (){
var statearr_14745 = [null,null,null,null,null,null,null];
(statearr_14745[(0)] = cljs$core$async$transduce_$_state_machine__12307__auto__);

(statearr_14745[(1)] = (1));

return statearr_14745;
});
var cljs$core$async$transduce_$_state_machine__12307__auto____1 = (function (state_14743){
while(true){
var ret_value__12308__auto__ = (function (){try{while(true){
var result__12309__auto__ = switch__12306__auto__(state_14743);
if(cljs.core.keyword_identical_QMARK_(result__12309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12309__auto__;
}
break;
}
}catch (e14746){var ex__12310__auto__ = e14746;
var statearr_14747_16780 = state_14743;
(statearr_14747_16780[(2)] = ex__12310__auto__);


if(cljs.core.seq((state_14743[(4)]))){
var statearr_14748_16781 = state_14743;
(statearr_14748_16781[(1)] = cljs.core.first((state_14743[(4)])));

} else {
throw ex__12310__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16782 = state_14743;
state_14743 = G__16782;
continue;
} else {
return ret_value__12308__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12307__auto__ = function(state_14743){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12307__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12307__auto____1.call(this,state_14743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12307__auto____0;
cljs$core$async$transduce_$_state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12307__auto____1;
return cljs$core$async$transduce_$_state_machine__12307__auto__;
})()
})();
var state__14011__auto__ = (function (){var statearr_14762 = f__14010__auto__();
(statearr_14762[(6)] = c__14009__auto__);

return statearr_14762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14011__auto__);
}));

return c__14009__auto__;
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
var G__14773 = arguments.length;
switch (G__14773) {
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
var c__14009__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14010__auto__ = (function (){var switch__12306__auto__ = (function (state_14811){
var state_val_14812 = (state_14811[(1)]);
if((state_val_14812 === (7))){
var inst_14785 = (state_14811[(2)]);
var state_14811__$1 = state_14811;
var statearr_14819_16784 = state_14811__$1;
(statearr_14819_16784[(2)] = inst_14785);

(statearr_14819_16784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (1))){
var inst_14776 = cljs.core.seq(coll);
var inst_14777 = inst_14776;
var state_14811__$1 = (function (){var statearr_14823 = state_14811;
(statearr_14823[(7)] = inst_14777);

return statearr_14823;
})();
var statearr_14824_16785 = state_14811__$1;
(statearr_14824_16785[(2)] = null);

(statearr_14824_16785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (4))){
var inst_14777 = (state_14811[(7)]);
var inst_14780 = cljs.core.first(inst_14777);
var state_14811__$1 = state_14811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14811__$1,(7),ch,inst_14780);
} else {
if((state_val_14812 === (13))){
var inst_14805 = (state_14811[(2)]);
var state_14811__$1 = state_14811;
var statearr_14828_16786 = state_14811__$1;
(statearr_14828_16786[(2)] = inst_14805);

(statearr_14828_16786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (6))){
var inst_14788 = (state_14811[(2)]);
var state_14811__$1 = state_14811;
if(cljs.core.truth_(inst_14788)){
var statearr_14833_16787 = state_14811__$1;
(statearr_14833_16787[(1)] = (8));

} else {
var statearr_14834_16788 = state_14811__$1;
(statearr_14834_16788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (3))){
var inst_14809 = (state_14811[(2)]);
var state_14811__$1 = state_14811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14811__$1,inst_14809);
} else {
if((state_val_14812 === (12))){
var state_14811__$1 = state_14811;
var statearr_14835_16789 = state_14811__$1;
(statearr_14835_16789[(2)] = null);

(statearr_14835_16789[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (2))){
var inst_14777 = (state_14811[(7)]);
var state_14811__$1 = state_14811;
if(cljs.core.truth_(inst_14777)){
var statearr_14839_16790 = state_14811__$1;
(statearr_14839_16790[(1)] = (4));

} else {
var statearr_14840_16791 = state_14811__$1;
(statearr_14840_16791[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (11))){
var inst_14802 = cljs.core.async.close_BANG_(ch);
var state_14811__$1 = state_14811;
var statearr_14841_16792 = state_14811__$1;
(statearr_14841_16792[(2)] = inst_14802);

(statearr_14841_16792[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (9))){
var state_14811__$1 = state_14811;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14845_16793 = state_14811__$1;
(statearr_14845_16793[(1)] = (11));

} else {
var statearr_14846_16794 = state_14811__$1;
(statearr_14846_16794[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (5))){
var inst_14777 = (state_14811[(7)]);
var state_14811__$1 = state_14811;
var statearr_14847_16795 = state_14811__$1;
(statearr_14847_16795[(2)] = inst_14777);

(statearr_14847_16795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (10))){
var inst_14807 = (state_14811[(2)]);
var state_14811__$1 = state_14811;
var statearr_14848_16796 = state_14811__$1;
(statearr_14848_16796[(2)] = inst_14807);

(statearr_14848_16796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (8))){
var inst_14777 = (state_14811[(7)]);
var inst_14791 = cljs.core.next(inst_14777);
var inst_14777__$1 = inst_14791;
var state_14811__$1 = (function (){var statearr_14853 = state_14811;
(statearr_14853[(7)] = inst_14777__$1);

return statearr_14853;
})();
var statearr_14854_16797 = state_14811__$1;
(statearr_14854_16797[(2)] = null);

(statearr_14854_16797[(1)] = (2));


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
var cljs$core$async$state_machine__12307__auto__ = null;
var cljs$core$async$state_machine__12307__auto____0 = (function (){
var statearr_14857 = [null,null,null,null,null,null,null,null];
(statearr_14857[(0)] = cljs$core$async$state_machine__12307__auto__);

(statearr_14857[(1)] = (1));

return statearr_14857;
});
var cljs$core$async$state_machine__12307__auto____1 = (function (state_14811){
while(true){
var ret_value__12308__auto__ = (function (){try{while(true){
var result__12309__auto__ = switch__12306__auto__(state_14811);
if(cljs.core.keyword_identical_QMARK_(result__12309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12309__auto__;
}
break;
}
}catch (e14860){var ex__12310__auto__ = e14860;
var statearr_14861_16798 = state_14811;
(statearr_14861_16798[(2)] = ex__12310__auto__);


if(cljs.core.seq((state_14811[(4)]))){
var statearr_14862_16799 = state_14811;
(statearr_14862_16799[(1)] = cljs.core.first((state_14811[(4)])));

} else {
throw ex__12310__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16800 = state_14811;
state_14811 = G__16800;
continue;
} else {
return ret_value__12308__auto__;
}
break;
}
});
cljs$core$async$state_machine__12307__auto__ = function(state_14811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12307__auto____1.call(this,state_14811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12307__auto____0;
cljs$core$async$state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12307__auto____1;
return cljs$core$async$state_machine__12307__auto__;
})()
})();
var state__14011__auto__ = (function (){var statearr_14863 = f__14010__auto__();
(statearr_14863[(6)] = c__14009__auto__);

return statearr_14863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14011__auto__);
}));

return c__14009__auto__;
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
var G__14865 = arguments.length;
switch (G__14865) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_16806 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_16806(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_16807 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_16807(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_16808 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_16808(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_16809 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_16809(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14874 = (function (ch,cs,meta14875){
this.ch = ch;
this.cs = cs;
this.meta14875 = meta14875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14876,meta14875__$1){
var self__ = this;
var _14876__$1 = this;
return (new cljs.core.async.t_cljs$core$async14874(self__.ch,self__.cs,meta14875__$1));
}));

(cljs.core.async.t_cljs$core$async14874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14876){
var self__ = this;
var _14876__$1 = this;
return self__.meta14875;
}));

(cljs.core.async.t_cljs$core$async14874.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14874.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14874.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14874.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14874.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14874.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14875","meta14875",-1067257563,null)], null);
}));

(cljs.core.async.t_cljs$core$async14874.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14874");

(cljs.core.async.t_cljs$core$async14874.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14874");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14874.
 */
cljs.core.async.__GT_t_cljs$core$async14874 = (function cljs$core$async$__GT_t_cljs$core$async14874(ch,cs,meta14875){
return (new cljs.core.async.t_cljs$core$async14874(ch,cs,meta14875));
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
var m = (new cljs.core.async.t_cljs$core$async14874(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14009__auto___16813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14010__auto__ = (function (){var switch__12306__auto__ = (function (state_15042){
var state_val_15044 = (state_15042[(1)]);
if((state_val_15044 === (7))){
var inst_15038 = (state_15042[(2)]);
var state_15042__$1 = state_15042;
var statearr_15046_16815 = state_15042__$1;
(statearr_15046_16815[(2)] = inst_15038);

(statearr_15046_16815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (20))){
var inst_14936 = (state_15042[(7)]);
var inst_14949 = cljs.core.first(inst_14936);
var inst_14950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14949,(0),null);
var inst_14951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14949,(1),null);
var state_15042__$1 = (function (){var statearr_15047 = state_15042;
(statearr_15047[(8)] = inst_14950);

return statearr_15047;
})();
if(cljs.core.truth_(inst_14951)){
var statearr_15048_16816 = state_15042__$1;
(statearr_15048_16816[(1)] = (22));

} else {
var statearr_15050_16817 = state_15042__$1;
(statearr_15050_16817[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (27))){
var inst_14981 = (state_15042[(9)]);
var inst_14983 = (state_15042[(10)]);
var inst_14988 = (state_15042[(11)]);
var inst_14898 = (state_15042[(12)]);
var inst_14988__$1 = cljs.core._nth(inst_14981,inst_14983);
var inst_14990 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14988__$1,inst_14898,done);
var state_15042__$1 = (function (){var statearr_15054 = state_15042;
(statearr_15054[(11)] = inst_14988__$1);

return statearr_15054;
})();
if(cljs.core.truth_(inst_14990)){
var statearr_15056_16818 = state_15042__$1;
(statearr_15056_16818[(1)] = (30));

} else {
var statearr_15058_16819 = state_15042__$1;
(statearr_15058_16819[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (1))){
var state_15042__$1 = state_15042;
var statearr_15059_16820 = state_15042__$1;
(statearr_15059_16820[(2)] = null);

(statearr_15059_16820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (24))){
var inst_14936 = (state_15042[(7)]);
var inst_14956 = (state_15042[(2)]);
var inst_14958 = cljs.core.next(inst_14936);
var inst_14910 = inst_14958;
var inst_14911 = null;
var inst_14912 = (0);
var inst_14913 = (0);
var state_15042__$1 = (function (){var statearr_15062 = state_15042;
(statearr_15062[(13)] = inst_14956);

(statearr_15062[(14)] = inst_14910);

(statearr_15062[(15)] = inst_14911);

(statearr_15062[(16)] = inst_14912);

(statearr_15062[(17)] = inst_14913);

return statearr_15062;
})();
var statearr_15063_16821 = state_15042__$1;
(statearr_15063_16821[(2)] = null);

(statearr_15063_16821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (39))){
var state_15042__$1 = state_15042;
var statearr_15067_16822 = state_15042__$1;
(statearr_15067_16822[(2)] = null);

(statearr_15067_16822[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (4))){
var inst_14898 = (state_15042[(12)]);
var inst_14898__$1 = (state_15042[(2)]);
var inst_14899 = (inst_14898__$1 == null);
var state_15042__$1 = (function (){var statearr_15068 = state_15042;
(statearr_15068[(12)] = inst_14898__$1);

return statearr_15068;
})();
if(cljs.core.truth_(inst_14899)){
var statearr_15069_16826 = state_15042__$1;
(statearr_15069_16826[(1)] = (5));

} else {
var statearr_15070_16827 = state_15042__$1;
(statearr_15070_16827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (15))){
var inst_14913 = (state_15042[(17)]);
var inst_14910 = (state_15042[(14)]);
var inst_14911 = (state_15042[(15)]);
var inst_14912 = (state_15042[(16)]);
var inst_14932 = (state_15042[(2)]);
var inst_14933 = (inst_14913 + (1));
var tmp15064 = inst_14911;
var tmp15065 = inst_14912;
var tmp15066 = inst_14910;
var inst_14910__$1 = tmp15066;
var inst_14911__$1 = tmp15064;
var inst_14912__$1 = tmp15065;
var inst_14913__$1 = inst_14933;
var state_15042__$1 = (function (){var statearr_15071 = state_15042;
(statearr_15071[(18)] = inst_14932);

(statearr_15071[(14)] = inst_14910__$1);

(statearr_15071[(15)] = inst_14911__$1);

(statearr_15071[(16)] = inst_14912__$1);

(statearr_15071[(17)] = inst_14913__$1);

return statearr_15071;
})();
var statearr_15074_16828 = state_15042__$1;
(statearr_15074_16828[(2)] = null);

(statearr_15074_16828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (21))){
var inst_14961 = (state_15042[(2)]);
var state_15042__$1 = state_15042;
var statearr_15079_16829 = state_15042__$1;
(statearr_15079_16829[(2)] = inst_14961);

(statearr_15079_16829[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (31))){
var inst_14988 = (state_15042[(11)]);
var inst_14993 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14988);
var state_15042__$1 = state_15042;
var statearr_15081_16833 = state_15042__$1;
(statearr_15081_16833[(2)] = inst_14993);

(statearr_15081_16833[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (32))){
var inst_14983 = (state_15042[(10)]);
var inst_14980 = (state_15042[(19)]);
var inst_14981 = (state_15042[(9)]);
var inst_14982 = (state_15042[(20)]);
var inst_14995 = (state_15042[(2)]);
var inst_14997 = (inst_14983 + (1));
var tmp15075 = inst_14982;
var tmp15076 = inst_14980;
var tmp15077 = inst_14981;
var inst_14980__$1 = tmp15076;
var inst_14981__$1 = tmp15077;
var inst_14982__$1 = tmp15075;
var inst_14983__$1 = inst_14997;
var state_15042__$1 = (function (){var statearr_15082 = state_15042;
(statearr_15082[(21)] = inst_14995);

(statearr_15082[(19)] = inst_14980__$1);

(statearr_15082[(9)] = inst_14981__$1);

(statearr_15082[(20)] = inst_14982__$1);

(statearr_15082[(10)] = inst_14983__$1);

return statearr_15082;
})();
var statearr_15086_16834 = state_15042__$1;
(statearr_15086_16834[(2)] = null);

(statearr_15086_16834[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (40))){
var inst_15011 = (state_15042[(22)]);
var inst_15015 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15011);
var state_15042__$1 = state_15042;
var statearr_15087_16835 = state_15042__$1;
(statearr_15087_16835[(2)] = inst_15015);

(statearr_15087_16835[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (33))){
var inst_15001 = (state_15042[(23)]);
var inst_15004 = cljs.core.chunked_seq_QMARK_(inst_15001);
var state_15042__$1 = state_15042;
if(inst_15004){
var statearr_15088_16836 = state_15042__$1;
(statearr_15088_16836[(1)] = (36));

} else {
var statearr_15089_16837 = state_15042__$1;
(statearr_15089_16837[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (13))){
var inst_14924 = (state_15042[(24)]);
var inst_14929 = cljs.core.async.close_BANG_(inst_14924);
var state_15042__$1 = state_15042;
var statearr_15090_16838 = state_15042__$1;
(statearr_15090_16838[(2)] = inst_14929);

(statearr_15090_16838[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (22))){
var inst_14950 = (state_15042[(8)]);
var inst_14953 = cljs.core.async.close_BANG_(inst_14950);
var state_15042__$1 = state_15042;
var statearr_15092_16839 = state_15042__$1;
(statearr_15092_16839[(2)] = inst_14953);

(statearr_15092_16839[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (36))){
var inst_15001 = (state_15042[(23)]);
var inst_15006 = cljs.core.chunk_first(inst_15001);
var inst_15007 = cljs.core.chunk_rest(inst_15001);
var inst_15008 = cljs.core.count(inst_15006);
var inst_14980 = inst_15007;
var inst_14981 = inst_15006;
var inst_14982 = inst_15008;
var inst_14983 = (0);
var state_15042__$1 = (function (){var statearr_15093 = state_15042;
(statearr_15093[(19)] = inst_14980);

(statearr_15093[(9)] = inst_14981);

(statearr_15093[(20)] = inst_14982);

(statearr_15093[(10)] = inst_14983);

return statearr_15093;
})();
var statearr_15094_16840 = state_15042__$1;
(statearr_15094_16840[(2)] = null);

(statearr_15094_16840[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (41))){
var inst_15001 = (state_15042[(23)]);
var inst_15017 = (state_15042[(2)]);
var inst_15018 = cljs.core.next(inst_15001);
var inst_14980 = inst_15018;
var inst_14981 = null;
var inst_14982 = (0);
var inst_14983 = (0);
var state_15042__$1 = (function (){var statearr_15095 = state_15042;
(statearr_15095[(25)] = inst_15017);

(statearr_15095[(19)] = inst_14980);

(statearr_15095[(9)] = inst_14981);

(statearr_15095[(20)] = inst_14982);

(statearr_15095[(10)] = inst_14983);

return statearr_15095;
})();
var statearr_15096_16844 = state_15042__$1;
(statearr_15096_16844[(2)] = null);

(statearr_15096_16844[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (43))){
var state_15042__$1 = state_15042;
var statearr_15097_16845 = state_15042__$1;
(statearr_15097_16845[(2)] = null);

(statearr_15097_16845[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (29))){
var inst_15026 = (state_15042[(2)]);
var state_15042__$1 = state_15042;
var statearr_15098_16846 = state_15042__$1;
(statearr_15098_16846[(2)] = inst_15026);

(statearr_15098_16846[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (44))){
var inst_15035 = (state_15042[(2)]);
var state_15042__$1 = (function (){var statearr_15099 = state_15042;
(statearr_15099[(26)] = inst_15035);

return statearr_15099;
})();
var statearr_15100_16847 = state_15042__$1;
(statearr_15100_16847[(2)] = null);

(statearr_15100_16847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (6))){
var inst_14971 = (state_15042[(27)]);
var inst_14970 = cljs.core.deref(cs);
var inst_14971__$1 = cljs.core.keys(inst_14970);
var inst_14972 = cljs.core.count(inst_14971__$1);
var inst_14973 = cljs.core.reset_BANG_(dctr,inst_14972);
var inst_14978 = cljs.core.seq(inst_14971__$1);
var inst_14980 = inst_14978;
var inst_14981 = null;
var inst_14982 = (0);
var inst_14983 = (0);
var state_15042__$1 = (function (){var statearr_15102 = state_15042;
(statearr_15102[(27)] = inst_14971__$1);

(statearr_15102[(28)] = inst_14973);

(statearr_15102[(19)] = inst_14980);

(statearr_15102[(9)] = inst_14981);

(statearr_15102[(20)] = inst_14982);

(statearr_15102[(10)] = inst_14983);

return statearr_15102;
})();
var statearr_15103_16848 = state_15042__$1;
(statearr_15103_16848[(2)] = null);

(statearr_15103_16848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (28))){
var inst_14980 = (state_15042[(19)]);
var inst_15001 = (state_15042[(23)]);
var inst_15001__$1 = cljs.core.seq(inst_14980);
var state_15042__$1 = (function (){var statearr_15104 = state_15042;
(statearr_15104[(23)] = inst_15001__$1);

return statearr_15104;
})();
if(inst_15001__$1){
var statearr_15105_16849 = state_15042__$1;
(statearr_15105_16849[(1)] = (33));

} else {
var statearr_15106_16850 = state_15042__$1;
(statearr_15106_16850[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (25))){
var inst_14983 = (state_15042[(10)]);
var inst_14982 = (state_15042[(20)]);
var inst_14985 = (inst_14983 < inst_14982);
var inst_14986 = inst_14985;
var state_15042__$1 = state_15042;
if(cljs.core.truth_(inst_14986)){
var statearr_15107_16852 = state_15042__$1;
(statearr_15107_16852[(1)] = (27));

} else {
var statearr_15108_16855 = state_15042__$1;
(statearr_15108_16855[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (34))){
var state_15042__$1 = state_15042;
var statearr_15109_16856 = state_15042__$1;
(statearr_15109_16856[(2)] = null);

(statearr_15109_16856[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (17))){
var state_15042__$1 = state_15042;
var statearr_15110_16857 = state_15042__$1;
(statearr_15110_16857[(2)] = null);

(statearr_15110_16857[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (3))){
var inst_15040 = (state_15042[(2)]);
var state_15042__$1 = state_15042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15042__$1,inst_15040);
} else {
if((state_val_15044 === (12))){
var inst_14966 = (state_15042[(2)]);
var state_15042__$1 = state_15042;
var statearr_15111_16858 = state_15042__$1;
(statearr_15111_16858[(2)] = inst_14966);

(statearr_15111_16858[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (2))){
var state_15042__$1 = state_15042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15042__$1,(4),ch);
} else {
if((state_val_15044 === (23))){
var state_15042__$1 = state_15042;
var statearr_15113_16859 = state_15042__$1;
(statearr_15113_16859[(2)] = null);

(statearr_15113_16859[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (35))){
var inst_15024 = (state_15042[(2)]);
var state_15042__$1 = state_15042;
var statearr_15114_16860 = state_15042__$1;
(statearr_15114_16860[(2)] = inst_15024);

(statearr_15114_16860[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (19))){
var inst_14936 = (state_15042[(7)]);
var inst_14941 = cljs.core.chunk_first(inst_14936);
var inst_14942 = cljs.core.chunk_rest(inst_14936);
var inst_14943 = cljs.core.count(inst_14941);
var inst_14910 = inst_14942;
var inst_14911 = inst_14941;
var inst_14912 = inst_14943;
var inst_14913 = (0);
var state_15042__$1 = (function (){var statearr_15116 = state_15042;
(statearr_15116[(14)] = inst_14910);

(statearr_15116[(15)] = inst_14911);

(statearr_15116[(16)] = inst_14912);

(statearr_15116[(17)] = inst_14913);

return statearr_15116;
})();
var statearr_15117_16861 = state_15042__$1;
(statearr_15117_16861[(2)] = null);

(statearr_15117_16861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (11))){
var inst_14910 = (state_15042[(14)]);
var inst_14936 = (state_15042[(7)]);
var inst_14936__$1 = cljs.core.seq(inst_14910);
var state_15042__$1 = (function (){var statearr_15121 = state_15042;
(statearr_15121[(7)] = inst_14936__$1);

return statearr_15121;
})();
if(inst_14936__$1){
var statearr_15122_16862 = state_15042__$1;
(statearr_15122_16862[(1)] = (16));

} else {
var statearr_15123_16863 = state_15042__$1;
(statearr_15123_16863[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (9))){
var inst_14968 = (state_15042[(2)]);
var state_15042__$1 = state_15042;
var statearr_15124_16864 = state_15042__$1;
(statearr_15124_16864[(2)] = inst_14968);

(statearr_15124_16864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (5))){
var inst_14908 = cljs.core.deref(cs);
var inst_14909 = cljs.core.seq(inst_14908);
var inst_14910 = inst_14909;
var inst_14911 = null;
var inst_14912 = (0);
var inst_14913 = (0);
var state_15042__$1 = (function (){var statearr_15125 = state_15042;
(statearr_15125[(14)] = inst_14910);

(statearr_15125[(15)] = inst_14911);

(statearr_15125[(16)] = inst_14912);

(statearr_15125[(17)] = inst_14913);

return statearr_15125;
})();
var statearr_15126_16865 = state_15042__$1;
(statearr_15126_16865[(2)] = null);

(statearr_15126_16865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (14))){
var state_15042__$1 = state_15042;
var statearr_15127_16866 = state_15042__$1;
(statearr_15127_16866[(2)] = null);

(statearr_15127_16866[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (45))){
var inst_15032 = (state_15042[(2)]);
var state_15042__$1 = state_15042;
var statearr_15129_16867 = state_15042__$1;
(statearr_15129_16867[(2)] = inst_15032);

(statearr_15129_16867[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (26))){
var inst_14971 = (state_15042[(27)]);
var inst_15028 = (state_15042[(2)]);
var inst_15029 = cljs.core.seq(inst_14971);
var state_15042__$1 = (function (){var statearr_15130 = state_15042;
(statearr_15130[(29)] = inst_15028);

return statearr_15130;
})();
if(inst_15029){
var statearr_15132_16868 = state_15042__$1;
(statearr_15132_16868[(1)] = (42));

} else {
var statearr_15136_16869 = state_15042__$1;
(statearr_15136_16869[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (16))){
var inst_14936 = (state_15042[(7)]);
var inst_14939 = cljs.core.chunked_seq_QMARK_(inst_14936);
var state_15042__$1 = state_15042;
if(inst_14939){
var statearr_15137_16870 = state_15042__$1;
(statearr_15137_16870[(1)] = (19));

} else {
var statearr_15138_16871 = state_15042__$1;
(statearr_15138_16871[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (38))){
var inst_15021 = (state_15042[(2)]);
var state_15042__$1 = state_15042;
var statearr_15139_16872 = state_15042__$1;
(statearr_15139_16872[(2)] = inst_15021);

(statearr_15139_16872[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (30))){
var state_15042__$1 = state_15042;
var statearr_15140_16873 = state_15042__$1;
(statearr_15140_16873[(2)] = null);

(statearr_15140_16873[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (10))){
var inst_14911 = (state_15042[(15)]);
var inst_14913 = (state_15042[(17)]);
var inst_14923 = cljs.core._nth(inst_14911,inst_14913);
var inst_14924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14923,(0),null);
var inst_14927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14923,(1),null);
var state_15042__$1 = (function (){var statearr_15141 = state_15042;
(statearr_15141[(24)] = inst_14924);

return statearr_15141;
})();
if(cljs.core.truth_(inst_14927)){
var statearr_15142_16874 = state_15042__$1;
(statearr_15142_16874[(1)] = (13));

} else {
var statearr_15144_16875 = state_15042__$1;
(statearr_15144_16875[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (18))){
var inst_14964 = (state_15042[(2)]);
var state_15042__$1 = state_15042;
var statearr_15145_16876 = state_15042__$1;
(statearr_15145_16876[(2)] = inst_14964);

(statearr_15145_16876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (42))){
var state_15042__$1 = state_15042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15042__$1,(45),dchan);
} else {
if((state_val_15044 === (37))){
var inst_15001 = (state_15042[(23)]);
var inst_15011 = (state_15042[(22)]);
var inst_14898 = (state_15042[(12)]);
var inst_15011__$1 = cljs.core.first(inst_15001);
var inst_15012 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15011__$1,inst_14898,done);
var state_15042__$1 = (function (){var statearr_15146 = state_15042;
(statearr_15146[(22)] = inst_15011__$1);

return statearr_15146;
})();
if(cljs.core.truth_(inst_15012)){
var statearr_15147_16877 = state_15042__$1;
(statearr_15147_16877[(1)] = (39));

} else {
var statearr_15148_16878 = state_15042__$1;
(statearr_15148_16878[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15044 === (8))){
var inst_14913 = (state_15042[(17)]);
var inst_14912 = (state_15042[(16)]);
var inst_14917 = (inst_14913 < inst_14912);
var inst_14918 = inst_14917;
var state_15042__$1 = state_15042;
if(cljs.core.truth_(inst_14918)){
var statearr_15149_16879 = state_15042__$1;
(statearr_15149_16879[(1)] = (10));

} else {
var statearr_15150_16880 = state_15042__$1;
(statearr_15150_16880[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__12307__auto__ = null;
var cljs$core$async$mult_$_state_machine__12307__auto____0 = (function (){
var statearr_15151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15151[(0)] = cljs$core$async$mult_$_state_machine__12307__auto__);

(statearr_15151[(1)] = (1));

return statearr_15151;
});
var cljs$core$async$mult_$_state_machine__12307__auto____1 = (function (state_15042){
while(true){
var ret_value__12308__auto__ = (function (){try{while(true){
var result__12309__auto__ = switch__12306__auto__(state_15042);
if(cljs.core.keyword_identical_QMARK_(result__12309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12309__auto__;
}
break;
}
}catch (e15152){var ex__12310__auto__ = e15152;
var statearr_15153_16882 = state_15042;
(statearr_15153_16882[(2)] = ex__12310__auto__);


if(cljs.core.seq((state_15042[(4)]))){
var statearr_15154_16883 = state_15042;
(statearr_15154_16883[(1)] = cljs.core.first((state_15042[(4)])));

} else {
throw ex__12310__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16884 = state_15042;
state_15042 = G__16884;
continue;
} else {
return ret_value__12308__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12307__auto__ = function(state_15042){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12307__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12307__auto____1.call(this,state_15042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12307__auto____0;
cljs$core$async$mult_$_state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12307__auto____1;
return cljs$core$async$mult_$_state_machine__12307__auto__;
})()
})();
var state__14011__auto__ = (function (){var statearr_15155 = f__14010__auto__();
(statearr_15155[(6)] = c__14009__auto___16813);

return statearr_15155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14011__auto__);
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
var G__15158 = arguments.length;
switch (G__15158) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_16886 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_16886(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_16887 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_16887(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_16888 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_16888(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_16889 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_16889(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_16890 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_16890(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16897 = arguments.length;
var i__5877__auto___16898 = (0);
while(true){
if((i__5877__auto___16898 < len__5876__auto___16897)){
args__5882__auto__.push((arguments[i__5877__auto___16898]));

var G__16899 = (i__5877__auto___16898 + (1));
i__5877__auto___16898 = G__16899;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15171){
var map__15172 = p__15171;
var map__15172__$1 = cljs.core.__destructure_map(map__15172);
var opts = map__15172__$1;
var statearr_15173_16900 = state;
(statearr_15173_16900[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15175_16901 = state;
(statearr_15175_16901[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_15179_16902 = state;
(statearr_15179_16902[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15167){
var G__15168 = cljs.core.first(seq15167);
var seq15167__$1 = cljs.core.next(seq15167);
var G__15169 = cljs.core.first(seq15167__$1);
var seq15167__$2 = cljs.core.next(seq15167__$1);
var G__15170 = cljs.core.first(seq15167__$2);
var seq15167__$3 = cljs.core.next(seq15167__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15168,G__15169,G__15170,seq15167__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15202 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15203){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15203 = meta15203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15204,meta15203__$1){
var self__ = this;
var _15204__$1 = this;
return (new cljs.core.async.t_cljs$core$async15202(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15203__$1));
}));

(cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15204){
var self__ = this;
var _15204__$1 = this;
return self__.meta15203;
}));

(cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15203","meta15203",552191098,null)], null);
}));

(cljs.core.async.t_cljs$core$async15202.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15202");

(cljs.core.async.t_cljs$core$async15202.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15202");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15202.
 */
cljs.core.async.__GT_t_cljs$core$async15202 = (function cljs$core$async$__GT_t_cljs$core$async15202(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15203){
return (new cljs.core.async.t_cljs$core$async15202(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15203));
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
var m = (new cljs.core.async.t_cljs$core$async15202(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14009__auto___16913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14010__auto__ = (function (){var switch__12306__auto__ = (function (state_15272){
var state_val_15273 = (state_15272[(1)]);
if((state_val_15273 === (7))){
var inst_15232 = (state_15272[(2)]);
var state_15272__$1 = state_15272;
if(cljs.core.truth_(inst_15232)){
var statearr_15275_16914 = state_15272__$1;
(statearr_15275_16914[(1)] = (8));

} else {
var statearr_15276_16915 = state_15272__$1;
(statearr_15276_16915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (20))){
var inst_15225 = (state_15272[(7)]);
var state_15272__$1 = state_15272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15272__$1,(23),out,inst_15225);
} else {
if((state_val_15273 === (1))){
var inst_15208 = calc_state();
var inst_15209 = cljs.core.__destructure_map(inst_15208);
var inst_15210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15209,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15209,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15209,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15213 = inst_15208;
var state_15272__$1 = (function (){var statearr_15277 = state_15272;
(statearr_15277[(8)] = inst_15210);

(statearr_15277[(9)] = inst_15211);

(statearr_15277[(10)] = inst_15212);

(statearr_15277[(11)] = inst_15213);

return statearr_15277;
})();
var statearr_15278_16919 = state_15272__$1;
(statearr_15278_16919[(2)] = null);

(statearr_15278_16919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (24))){
var inst_15216 = (state_15272[(12)]);
var inst_15213 = inst_15216;
var state_15272__$1 = (function (){var statearr_15279 = state_15272;
(statearr_15279[(11)] = inst_15213);

return statearr_15279;
})();
var statearr_15280_16920 = state_15272__$1;
(statearr_15280_16920[(2)] = null);

(statearr_15280_16920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (4))){
var inst_15225 = (state_15272[(7)]);
var inst_15227 = (state_15272[(13)]);
var inst_15224 = (state_15272[(2)]);
var inst_15225__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15224,(0),null);
var inst_15226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15224,(1),null);
var inst_15227__$1 = (inst_15225__$1 == null);
var state_15272__$1 = (function (){var statearr_15282 = state_15272;
(statearr_15282[(7)] = inst_15225__$1);

(statearr_15282[(14)] = inst_15226);

(statearr_15282[(13)] = inst_15227__$1);

return statearr_15282;
})();
if(cljs.core.truth_(inst_15227__$1)){
var statearr_15283_16921 = state_15272__$1;
(statearr_15283_16921[(1)] = (5));

} else {
var statearr_15284_16922 = state_15272__$1;
(statearr_15284_16922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (15))){
var inst_15217 = (state_15272[(15)]);
var inst_15246 = (state_15272[(16)]);
var inst_15246__$1 = cljs.core.empty_QMARK_(inst_15217);
var state_15272__$1 = (function (){var statearr_15285 = state_15272;
(statearr_15285[(16)] = inst_15246__$1);

return statearr_15285;
})();
if(inst_15246__$1){
var statearr_15289_16923 = state_15272__$1;
(statearr_15289_16923[(1)] = (17));

} else {
var statearr_15290_16924 = state_15272__$1;
(statearr_15290_16924[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (21))){
var inst_15216 = (state_15272[(12)]);
var inst_15213 = inst_15216;
var state_15272__$1 = (function (){var statearr_15292 = state_15272;
(statearr_15292[(11)] = inst_15213);

return statearr_15292;
})();
var statearr_15293_16925 = state_15272__$1;
(statearr_15293_16925[(2)] = null);

(statearr_15293_16925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (13))){
var inst_15239 = (state_15272[(2)]);
var inst_15240 = calc_state();
var inst_15213 = inst_15240;
var state_15272__$1 = (function (){var statearr_15294 = state_15272;
(statearr_15294[(17)] = inst_15239);

(statearr_15294[(11)] = inst_15213);

return statearr_15294;
})();
var statearr_15295_16926 = state_15272__$1;
(statearr_15295_16926[(2)] = null);

(statearr_15295_16926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (22))){
var inst_15266 = (state_15272[(2)]);
var state_15272__$1 = state_15272;
var statearr_15296_16927 = state_15272__$1;
(statearr_15296_16927[(2)] = inst_15266);

(statearr_15296_16927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (6))){
var inst_15226 = (state_15272[(14)]);
var inst_15230 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15226,change);
var state_15272__$1 = state_15272;
var statearr_15297_16928 = state_15272__$1;
(statearr_15297_16928[(2)] = inst_15230);

(statearr_15297_16928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (25))){
var state_15272__$1 = state_15272;
var statearr_15298_16929 = state_15272__$1;
(statearr_15298_16929[(2)] = null);

(statearr_15298_16929[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (17))){
var inst_15218 = (state_15272[(18)]);
var inst_15226 = (state_15272[(14)]);
var inst_15248 = (inst_15218.cljs$core$IFn$_invoke$arity$1 ? inst_15218.cljs$core$IFn$_invoke$arity$1(inst_15226) : inst_15218.call(null,inst_15226));
var inst_15249 = cljs.core.not(inst_15248);
var state_15272__$1 = state_15272;
var statearr_15299_16932 = state_15272__$1;
(statearr_15299_16932[(2)] = inst_15249);

(statearr_15299_16932[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (3))){
var inst_15270 = (state_15272[(2)]);
var state_15272__$1 = state_15272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15272__$1,inst_15270);
} else {
if((state_val_15273 === (12))){
var state_15272__$1 = state_15272;
var statearr_15300_16933 = state_15272__$1;
(statearr_15300_16933[(2)] = null);

(statearr_15300_16933[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (2))){
var inst_15213 = (state_15272[(11)]);
var inst_15216 = (state_15272[(12)]);
var inst_15216__$1 = cljs.core.__destructure_map(inst_15213);
var inst_15217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15216__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15216__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15216__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15272__$1 = (function (){var statearr_15301 = state_15272;
(statearr_15301[(12)] = inst_15216__$1);

(statearr_15301[(15)] = inst_15217);

(statearr_15301[(18)] = inst_15218);

return statearr_15301;
})();
return cljs.core.async.ioc_alts_BANG_(state_15272__$1,(4),inst_15219);
} else {
if((state_val_15273 === (23))){
var inst_15257 = (state_15272[(2)]);
var state_15272__$1 = state_15272;
if(cljs.core.truth_(inst_15257)){
var statearr_15302_16934 = state_15272__$1;
(statearr_15302_16934[(1)] = (24));

} else {
var statearr_15303_16935 = state_15272__$1;
(statearr_15303_16935[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (19))){
var inst_15252 = (state_15272[(2)]);
var state_15272__$1 = state_15272;
var statearr_15306_16936 = state_15272__$1;
(statearr_15306_16936[(2)] = inst_15252);

(statearr_15306_16936[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (11))){
var inst_15226 = (state_15272[(14)]);
var inst_15236 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15226);
var state_15272__$1 = state_15272;
var statearr_15310_16937 = state_15272__$1;
(statearr_15310_16937[(2)] = inst_15236);

(statearr_15310_16937[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (9))){
var inst_15217 = (state_15272[(15)]);
var inst_15226 = (state_15272[(14)]);
var inst_15243 = (state_15272[(19)]);
var inst_15243__$1 = (inst_15217.cljs$core$IFn$_invoke$arity$1 ? inst_15217.cljs$core$IFn$_invoke$arity$1(inst_15226) : inst_15217.call(null,inst_15226));
var state_15272__$1 = (function (){var statearr_15311 = state_15272;
(statearr_15311[(19)] = inst_15243__$1);

return statearr_15311;
})();
if(cljs.core.truth_(inst_15243__$1)){
var statearr_15312_16938 = state_15272__$1;
(statearr_15312_16938[(1)] = (14));

} else {
var statearr_15313_16942 = state_15272__$1;
(statearr_15313_16942[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (5))){
var inst_15227 = (state_15272[(13)]);
var state_15272__$1 = state_15272;
var statearr_15314_16943 = state_15272__$1;
(statearr_15314_16943[(2)] = inst_15227);

(statearr_15314_16943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (14))){
var inst_15243 = (state_15272[(19)]);
var state_15272__$1 = state_15272;
var statearr_15315_16944 = state_15272__$1;
(statearr_15315_16944[(2)] = inst_15243);

(statearr_15315_16944[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (26))){
var inst_15262 = (state_15272[(2)]);
var state_15272__$1 = state_15272;
var statearr_15316_16945 = state_15272__$1;
(statearr_15316_16945[(2)] = inst_15262);

(statearr_15316_16945[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (16))){
var inst_15254 = (state_15272[(2)]);
var state_15272__$1 = state_15272;
if(cljs.core.truth_(inst_15254)){
var statearr_15319_16946 = state_15272__$1;
(statearr_15319_16946[(1)] = (20));

} else {
var statearr_15320_16947 = state_15272__$1;
(statearr_15320_16947[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (10))){
var inst_15268 = (state_15272[(2)]);
var state_15272__$1 = state_15272;
var statearr_15321_16948 = state_15272__$1;
(statearr_15321_16948[(2)] = inst_15268);

(statearr_15321_16948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (18))){
var inst_15246 = (state_15272[(16)]);
var state_15272__$1 = state_15272;
var statearr_15326_16949 = state_15272__$1;
(statearr_15326_16949[(2)] = inst_15246);

(statearr_15326_16949[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (8))){
var inst_15225 = (state_15272[(7)]);
var inst_15234 = (inst_15225 == null);
var state_15272__$1 = state_15272;
if(cljs.core.truth_(inst_15234)){
var statearr_15327_16950 = state_15272__$1;
(statearr_15327_16950[(1)] = (11));

} else {
var statearr_15329_16951 = state_15272__$1;
(statearr_15329_16951[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__12307__auto__ = null;
var cljs$core$async$mix_$_state_machine__12307__auto____0 = (function (){
var statearr_15334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15334[(0)] = cljs$core$async$mix_$_state_machine__12307__auto__);

(statearr_15334[(1)] = (1));

return statearr_15334;
});
var cljs$core$async$mix_$_state_machine__12307__auto____1 = (function (state_15272){
while(true){
var ret_value__12308__auto__ = (function (){try{while(true){
var result__12309__auto__ = switch__12306__auto__(state_15272);
if(cljs.core.keyword_identical_QMARK_(result__12309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12309__auto__;
}
break;
}
}catch (e15338){var ex__12310__auto__ = e15338;
var statearr_15343_16952 = state_15272;
(statearr_15343_16952[(2)] = ex__12310__auto__);


if(cljs.core.seq((state_15272[(4)]))){
var statearr_15345_16953 = state_15272;
(statearr_15345_16953[(1)] = cljs.core.first((state_15272[(4)])));

} else {
throw ex__12310__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16954 = state_15272;
state_15272 = G__16954;
continue;
} else {
return ret_value__12308__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12307__auto__ = function(state_15272){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12307__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12307__auto____1.call(this,state_15272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12307__auto____0;
cljs$core$async$mix_$_state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12307__auto____1;
return cljs$core$async$mix_$_state_machine__12307__auto__;
})()
})();
var state__14011__auto__ = (function (){var statearr_15350 = f__14010__auto__();
(statearr_15350[(6)] = c__14009__auto___16913);

return statearr_15350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14011__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_16955 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_16955(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_16959 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_16959(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_16960 = (function() {
var G__16961 = null;
var G__16961__1 = (function (p){
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
var G__16961__2 = (function (p,v){
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
G__16961 = function(p,v){
switch(arguments.length){
case 1:
return G__16961__1.call(this,p);
case 2:
return G__16961__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16961.cljs$core$IFn$_invoke$arity$1 = G__16961__1;
G__16961.cljs$core$IFn$_invoke$arity$2 = G__16961__2;
return G__16961;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15388 = arguments.length;
switch (G__15388) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16960(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16960(p,v);
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
cljs.core.async.t_cljs$core$async15405 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15406){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15406 = meta15406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15407,meta15406__$1){
var self__ = this;
var _15407__$1 = this;
return (new cljs.core.async.t_cljs$core$async15405(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15406__$1));
}));

(cljs.core.async.t_cljs$core$async15405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15407){
var self__ = this;
var _15407__$1 = this;
return self__.meta15406;
}));

(cljs.core.async.t_cljs$core$async15405.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15405.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15405.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15405.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15405.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async15405.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15405.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15406","meta15406",690138837,null)], null);
}));

(cljs.core.async.t_cljs$core$async15405.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15405");

(cljs.core.async.t_cljs$core$async15405.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15405");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15405.
 */
cljs.core.async.__GT_t_cljs$core$async15405 = (function cljs$core$async$__GT_t_cljs$core$async15405(ch,topic_fn,buf_fn,mults,ensure_mult,meta15406){
return (new cljs.core.async.t_cljs$core$async15405(ch,topic_fn,buf_fn,mults,ensure_mult,meta15406));
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
var G__15403 = arguments.length;
switch (G__15403) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15399_SHARP_){
if(cljs.core.truth_((p1__15399_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15399_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15399_SHARP_.call(null,topic)))){
return p1__15399_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15399_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15405(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14009__auto___16967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14010__auto__ = (function (){var switch__12306__auto__ = (function (state_15492){
var state_val_15493 = (state_15492[(1)]);
if((state_val_15493 === (7))){
var inst_15488 = (state_15492[(2)]);
var state_15492__$1 = state_15492;
var statearr_15496_16968 = state_15492__$1;
(statearr_15496_16968[(2)] = inst_15488);

(statearr_15496_16968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15493 === (20))){
var state_15492__$1 = state_15492;
var statearr_15497_16969 = state_15492__$1;
(statearr_15497_16969[(2)] = null);

(statearr_15497_16969[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15493 === (1))){
var state_15492__$1 = state_15492;
var statearr_15498_16970 = state_15492__$1;
(statearr_15498_16970[(2)] = null);

(statearr_15498_16970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15493 === (24))){
var inst_15470 = (state_15492[(7)]);
var inst_15479 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15470);
var state_15492__$1 = state_15492;
var statearr_15499_16971 = state_15492__$1;
(statearr_15499_16971[(2)] = inst_15479);

(statearr_15499_16971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15493 === (4))){
var inst_15416 = (state_15492[(8)]);
var inst_15416__$1 = (state_15492[(2)]);
var inst_15417 = (inst_15416__$1 == null);
var state_15492__$1 = (function (){var statearr_15500 = state_15492;
(statearr_15500[(8)] = inst_15416__$1);

return statearr_15500;
})();
if(cljs.core.truth_(inst_15417)){
var statearr_15501_16972 = state_15492__$1;
(statearr_15501_16972[(1)] = (5));

} else {
var statearr_15502_16973 = state_15492__$1;
(statearr_15502_16973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15493 === (15))){
var inst_15464 = (state_15492[(2)]);
var state_15492__$1 = state_15492;
var statearr_15503_16974 = state_15492__$1;
(statearr_15503_16974[(2)] = inst_15464);

(statearr_15503_16974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15493 === (21))){
var inst_15484 = (state_15492[(2)]);
var state_15492__$1 = (function (){var statearr_15504 = state_15492;
(statearr_15504[(9)] = inst_15484);

return statearr_15504;
})();
var statearr_15505_16975 = state_15492__$1;
(statearr_15505_16975[(2)] = null);

(statearr_15505_16975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15493 === (13))){
var inst_15446 = (state_15492[(10)]);
var inst_15448 = cljs.core.chunked_seq_QMARK_(inst_15446);
var state_15492__$1 = state_15492;
if(inst_15448){
var statearr_15506_16976 = state_15492__$1;
(statearr_15506_16976[(1)] = (16));

} else {
var statearr_15507_16977 = state_15492__$1;
(statearr_15507_16977[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15493 === (22))){
var inst_15476 = (state_15492[(2)]);
var state_15492__$1 = state_15492;
if(cljs.core.truth_(inst_15476)){
var statearr_15510_16978 = state_15492__$1;
(statearr_15510_16978[(1)] = (23));

} else {
var statearr_15512_16979 = state_15492__$1;
(statearr_15512_16979[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15493 === (6))){
var inst_15416 = (state_15492[(8)]);
var inst_15470 = (state_15492[(7)]);
var inst_15472 = (state_15492[(11)]);
var inst_15470__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15416) : topic_fn.call(null,inst_15416));
var inst_15471 = cljs.core.deref(mults);
var inst_15472__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15471,inst_15470__$1);
var state_15492__$1 = (function (){var statearr_15513 = state_15492;
(statearr_15513[(7)] = inst_15470__$1);

(statearr_15513[(11)] = inst_15472__$1);

return statearr_15513;
})();
if(cljs.core.truth_(inst_15472__$1)){
var statearr_15514_16980 = state_15492__$1;
(statearr_15514_16980[(1)] = (19));

} else {
var statearr_15515_16981 = state_15492__$1;
(statearr_15515_16981[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15493 === (25))){
var inst_15481 = (state_15492[(2)]);
var state_15492__$1 = state_15492;
var statearr_15516_16982 = state_15492__$1;
(statearr_15516_16982[(2)] = inst_15481);

(statearr_15516_16982[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15493 === (17))){
var inst_15446 = (state_15492[(10)]);
var inst_15455 = cljs.core.first(inst_15446);
var inst_15456 = cljs.core.async.muxch_STAR_(inst_15455);
var inst_15457 = cljs.core.async.close_BANG_(inst_15456);
var inst_15458 = cljs.core.next(inst_15446);
var inst_15430 = inst_15458;
var inst_15431 = null;
var inst_15432 = (0);
var inst_15433 = (0);
var state_15492__$1 = (function (){var statearr_15517 = state_15492;
(statearr_15517[(12)] = inst_15457);

(statearr_15517[(13)] = inst_15430);

(statearr_15517[(14)] = inst_15431);

(statearr_15517[(15)] = inst_15432);

(statearr_15517[(16)] = inst_15433);

return statearr_15517;
})();
var statearr_15518_16983 = state_15492__$1;
(statearr_15518_16983[(2)] = null);

(statearr_15518_16983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15493 === (3))){
var inst_15490 = (state_15492[(2)]);
var state_15492__$1 = state_15492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15492__$1,inst_15490);
} else {
if((state_val_15493 === (12))){
var inst_15466 = (state_15492[(2)]);
var state_15492__$1 = state_15492;
var statearr_15520_16985 = state_15492__$1;
(statearr_15520_16985[(2)] = inst_15466);

(statearr_15520_16985[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15493 === (2))){
var state_15492__$1 = state_15492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15492__$1,(4),ch);
} else {
if((state_val_15493 === (23))){
var state_15492__$1 = state_15492;
var statearr_15521_16989 = state_15492__$1;
(statearr_15521_16989[(2)] = null);

(statearr_15521_16989[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15493 === (19))){
var inst_15472 = (state_15492[(11)]);
var inst_15416 = (state_15492[(8)]);
var inst_15474 = cljs.core.async.muxch_STAR_(inst_15472);
var state_15492__$1 = state_15492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15492__$1,(22),inst_15474,inst_15416);
} else {
if((state_val_15493 === (11))){
var inst_15430 = (state_15492[(13)]);
var inst_15446 = (state_15492[(10)]);
var inst_15446__$1 = cljs.core.seq(inst_15430);
var state_15492__$1 = (function (){var statearr_15522 = state_15492;
(statearr_15522[(10)] = inst_15446__$1);

return statearr_15522;
})();
if(inst_15446__$1){
var statearr_15523_16994 = state_15492__$1;
(statearr_15523_16994[(1)] = (13));

} else {
var statearr_15524_16995 = state_15492__$1;
(statearr_15524_16995[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15493 === (9))){
var inst_15468 = (state_15492[(2)]);
var state_15492__$1 = state_15492;
var statearr_15525_16996 = state_15492__$1;
(statearr_15525_16996[(2)] = inst_15468);

(statearr_15525_16996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15493 === (5))){
var inst_15425 = cljs.core.deref(mults);
var inst_15426 = cljs.core.vals(inst_15425);
var inst_15427 = cljs.core.seq(inst_15426);
var inst_15430 = inst_15427;
var inst_15431 = null;
var inst_15432 = (0);
var inst_15433 = (0);
var state_15492__$1 = (function (){var statearr_15526 = state_15492;
(statearr_15526[(13)] = inst_15430);

(statearr_15526[(14)] = inst_15431);

(statearr_15526[(15)] = inst_15432);

(statearr_15526[(16)] = inst_15433);

return statearr_15526;
})();
var statearr_15527_16997 = state_15492__$1;
(statearr_15527_16997[(2)] = null);

(statearr_15527_16997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15493 === (14))){
var state_15492__$1 = state_15492;
var statearr_15531_16998 = state_15492__$1;
(statearr_15531_16998[(2)] = null);

(statearr_15531_16998[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15493 === (16))){
var inst_15446 = (state_15492[(10)]);
var inst_15450 = cljs.core.chunk_first(inst_15446);
var inst_15451 = cljs.core.chunk_rest(inst_15446);
var inst_15452 = cljs.core.count(inst_15450);
var inst_15430 = inst_15451;
var inst_15431 = inst_15450;
var inst_15432 = inst_15452;
var inst_15433 = (0);
var state_15492__$1 = (function (){var statearr_15532 = state_15492;
(statearr_15532[(13)] = inst_15430);

(statearr_15532[(14)] = inst_15431);

(statearr_15532[(15)] = inst_15432);

(statearr_15532[(16)] = inst_15433);

return statearr_15532;
})();
var statearr_15533_16999 = state_15492__$1;
(statearr_15533_16999[(2)] = null);

(statearr_15533_16999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15493 === (10))){
var inst_15431 = (state_15492[(14)]);
var inst_15433 = (state_15492[(16)]);
var inst_15430 = (state_15492[(13)]);
var inst_15432 = (state_15492[(15)]);
var inst_15438 = cljs.core._nth(inst_15431,inst_15433);
var inst_15439 = cljs.core.async.muxch_STAR_(inst_15438);
var inst_15440 = cljs.core.async.close_BANG_(inst_15439);
var inst_15443 = (inst_15433 + (1));
var tmp15528 = inst_15431;
var tmp15529 = inst_15430;
var tmp15530 = inst_15432;
var inst_15430__$1 = tmp15529;
var inst_15431__$1 = tmp15528;
var inst_15432__$1 = tmp15530;
var inst_15433__$1 = inst_15443;
var state_15492__$1 = (function (){var statearr_15535 = state_15492;
(statearr_15535[(17)] = inst_15440);

(statearr_15535[(13)] = inst_15430__$1);

(statearr_15535[(14)] = inst_15431__$1);

(statearr_15535[(15)] = inst_15432__$1);

(statearr_15535[(16)] = inst_15433__$1);

return statearr_15535;
})();
var statearr_15536_17000 = state_15492__$1;
(statearr_15536_17000[(2)] = null);

(statearr_15536_17000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15493 === (18))){
var inst_15461 = (state_15492[(2)]);
var state_15492__$1 = state_15492;
var statearr_15537_17001 = state_15492__$1;
(statearr_15537_17001[(2)] = inst_15461);

(statearr_15537_17001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15493 === (8))){
var inst_15433 = (state_15492[(16)]);
var inst_15432 = (state_15492[(15)]);
var inst_15435 = (inst_15433 < inst_15432);
var inst_15436 = inst_15435;
var state_15492__$1 = state_15492;
if(cljs.core.truth_(inst_15436)){
var statearr_15538_17002 = state_15492__$1;
(statearr_15538_17002[(1)] = (10));

} else {
var statearr_15539_17006 = state_15492__$1;
(statearr_15539_17006[(1)] = (11));

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
var cljs$core$async$state_machine__12307__auto__ = null;
var cljs$core$async$state_machine__12307__auto____0 = (function (){
var statearr_15540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15540[(0)] = cljs$core$async$state_machine__12307__auto__);

(statearr_15540[(1)] = (1));

return statearr_15540;
});
var cljs$core$async$state_machine__12307__auto____1 = (function (state_15492){
while(true){
var ret_value__12308__auto__ = (function (){try{while(true){
var result__12309__auto__ = switch__12306__auto__(state_15492);
if(cljs.core.keyword_identical_QMARK_(result__12309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12309__auto__;
}
break;
}
}catch (e15543){var ex__12310__auto__ = e15543;
var statearr_15544_17007 = state_15492;
(statearr_15544_17007[(2)] = ex__12310__auto__);


if(cljs.core.seq((state_15492[(4)]))){
var statearr_15548_17008 = state_15492;
(statearr_15548_17008[(1)] = cljs.core.first((state_15492[(4)])));

} else {
throw ex__12310__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17009 = state_15492;
state_15492 = G__17009;
continue;
} else {
return ret_value__12308__auto__;
}
break;
}
});
cljs$core$async$state_machine__12307__auto__ = function(state_15492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12307__auto____1.call(this,state_15492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12307__auto____0;
cljs$core$async$state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12307__auto____1;
return cljs$core$async$state_machine__12307__auto__;
})()
})();
var state__14011__auto__ = (function (){var statearr_15552 = f__14010__auto__();
(statearr_15552[(6)] = c__14009__auto___16967);

return statearr_15552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14011__auto__);
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
var G__15557 = arguments.length;
switch (G__15557) {
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
var G__15559 = arguments.length;
switch (G__15559) {
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
var G__15562 = arguments.length;
switch (G__15562) {
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
var c__14009__auto___17013 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14010__auto__ = (function (){var switch__12306__auto__ = (function (state_15606){
var state_val_15607 = (state_15606[(1)]);
if((state_val_15607 === (7))){
var state_15606__$1 = state_15606;
var statearr_15608_17014 = state_15606__$1;
(statearr_15608_17014[(2)] = null);

(statearr_15608_17014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (1))){
var state_15606__$1 = state_15606;
var statearr_15609_17015 = state_15606__$1;
(statearr_15609_17015[(2)] = null);

(statearr_15609_17015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (4))){
var inst_15567 = (state_15606[(7)]);
var inst_15566 = (state_15606[(8)]);
var inst_15569 = (inst_15567 < inst_15566);
var state_15606__$1 = state_15606;
if(cljs.core.truth_(inst_15569)){
var statearr_15610_17016 = state_15606__$1;
(statearr_15610_17016[(1)] = (6));

} else {
var statearr_15611_17017 = state_15606__$1;
(statearr_15611_17017[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (15))){
var inst_15592 = (state_15606[(9)]);
var inst_15597 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15592);
var state_15606__$1 = state_15606;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15606__$1,(17),out,inst_15597);
} else {
if((state_val_15607 === (13))){
var inst_15592 = (state_15606[(9)]);
var inst_15592__$1 = (state_15606[(2)]);
var inst_15593 = cljs.core.some(cljs.core.nil_QMARK_,inst_15592__$1);
var state_15606__$1 = (function (){var statearr_15613 = state_15606;
(statearr_15613[(9)] = inst_15592__$1);

return statearr_15613;
})();
if(cljs.core.truth_(inst_15593)){
var statearr_15614_17018 = state_15606__$1;
(statearr_15614_17018[(1)] = (14));

} else {
var statearr_15615_17019 = state_15606__$1;
(statearr_15615_17019[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (6))){
var state_15606__$1 = state_15606;
var statearr_15617_17020 = state_15606__$1;
(statearr_15617_17020[(2)] = null);

(statearr_15617_17020[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (17))){
var inst_15599 = (state_15606[(2)]);
var state_15606__$1 = (function (){var statearr_15627 = state_15606;
(statearr_15627[(10)] = inst_15599);

return statearr_15627;
})();
var statearr_15628_17021 = state_15606__$1;
(statearr_15628_17021[(2)] = null);

(statearr_15628_17021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (3))){
var inst_15604 = (state_15606[(2)]);
var state_15606__$1 = state_15606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15606__$1,inst_15604);
} else {
if((state_val_15607 === (12))){
var _ = (function (){var statearr_15629 = state_15606;
(statearr_15629[(4)] = cljs.core.rest((state_15606[(4)])));

return statearr_15629;
})();
var state_15606__$1 = state_15606;
var ex15619 = (state_15606__$1[(2)]);
var statearr_15630_17022 = state_15606__$1;
(statearr_15630_17022[(5)] = ex15619);


if((ex15619 instanceof Object)){
var statearr_15632_17023 = state_15606__$1;
(statearr_15632_17023[(1)] = (11));

(statearr_15632_17023[(5)] = null);

} else {
throw ex15619;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (2))){
var inst_15565 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15566 = cnt;
var inst_15567 = (0);
var state_15606__$1 = (function (){var statearr_15634 = state_15606;
(statearr_15634[(11)] = inst_15565);

(statearr_15634[(8)] = inst_15566);

(statearr_15634[(7)] = inst_15567);

return statearr_15634;
})();
var statearr_15635_17024 = state_15606__$1;
(statearr_15635_17024[(2)] = null);

(statearr_15635_17024[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (11))){
var inst_15571 = (state_15606[(2)]);
var inst_15572 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15606__$1 = (function (){var statearr_15636 = state_15606;
(statearr_15636[(12)] = inst_15571);

return statearr_15636;
})();
var statearr_15637_17027 = state_15606__$1;
(statearr_15637_17027[(2)] = inst_15572);

(statearr_15637_17027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (9))){
var inst_15567 = (state_15606[(7)]);
var _ = (function (){var statearr_15638 = state_15606;
(statearr_15638[(4)] = cljs.core.cons((12),(state_15606[(4)])));

return statearr_15638;
})();
var inst_15578 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15567) : chs__$1.call(null,inst_15567));
var inst_15579 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15567) : done.call(null,inst_15567));
var inst_15580 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15578,inst_15579);
var ___$1 = (function (){var statearr_15643 = state_15606;
(statearr_15643[(4)] = cljs.core.rest((state_15606[(4)])));

return statearr_15643;
})();
var state_15606__$1 = state_15606;
var statearr_15644_17028 = state_15606__$1;
(statearr_15644_17028[(2)] = inst_15580);

(statearr_15644_17028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (5))){
var inst_15590 = (state_15606[(2)]);
var state_15606__$1 = (function (){var statearr_15650 = state_15606;
(statearr_15650[(13)] = inst_15590);

return statearr_15650;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15606__$1,(13),dchan);
} else {
if((state_val_15607 === (14))){
var inst_15595 = cljs.core.async.close_BANG_(out);
var state_15606__$1 = state_15606;
var statearr_15652_17030 = state_15606__$1;
(statearr_15652_17030[(2)] = inst_15595);

(statearr_15652_17030[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (16))){
var inst_15602 = (state_15606[(2)]);
var state_15606__$1 = state_15606;
var statearr_15653_17031 = state_15606__$1;
(statearr_15653_17031[(2)] = inst_15602);

(statearr_15653_17031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (10))){
var inst_15567 = (state_15606[(7)]);
var inst_15583 = (state_15606[(2)]);
var inst_15584 = (inst_15567 + (1));
var inst_15567__$1 = inst_15584;
var state_15606__$1 = (function (){var statearr_15654 = state_15606;
(statearr_15654[(14)] = inst_15583);

(statearr_15654[(7)] = inst_15567__$1);

return statearr_15654;
})();
var statearr_15655_17032 = state_15606__$1;
(statearr_15655_17032[(2)] = null);

(statearr_15655_17032[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (8))){
var inst_15588 = (state_15606[(2)]);
var state_15606__$1 = state_15606;
var statearr_15656_17033 = state_15606__$1;
(statearr_15656_17033[(2)] = inst_15588);

(statearr_15656_17033[(1)] = (5));


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
var cljs$core$async$state_machine__12307__auto__ = null;
var cljs$core$async$state_machine__12307__auto____0 = (function (){
var statearr_15662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15662[(0)] = cljs$core$async$state_machine__12307__auto__);

(statearr_15662[(1)] = (1));

return statearr_15662;
});
var cljs$core$async$state_machine__12307__auto____1 = (function (state_15606){
while(true){
var ret_value__12308__auto__ = (function (){try{while(true){
var result__12309__auto__ = switch__12306__auto__(state_15606);
if(cljs.core.keyword_identical_QMARK_(result__12309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12309__auto__;
}
break;
}
}catch (e15666){var ex__12310__auto__ = e15666;
var statearr_15667_17034 = state_15606;
(statearr_15667_17034[(2)] = ex__12310__auto__);


if(cljs.core.seq((state_15606[(4)]))){
var statearr_15668_17035 = state_15606;
(statearr_15668_17035[(1)] = cljs.core.first((state_15606[(4)])));

} else {
throw ex__12310__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17036 = state_15606;
state_15606 = G__17036;
continue;
} else {
return ret_value__12308__auto__;
}
break;
}
});
cljs$core$async$state_machine__12307__auto__ = function(state_15606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12307__auto____1.call(this,state_15606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12307__auto____0;
cljs$core$async$state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12307__auto____1;
return cljs$core$async$state_machine__12307__auto__;
})()
})();
var state__14011__auto__ = (function (){var statearr_15677 = f__14010__auto__();
(statearr_15677[(6)] = c__14009__auto___17013);

return statearr_15677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14011__auto__);
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
var G__15680 = arguments.length;
switch (G__15680) {
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
var c__14009__auto___17038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14010__auto__ = (function (){var switch__12306__auto__ = (function (state_15714){
var state_val_15715 = (state_15714[(1)]);
if((state_val_15715 === (7))){
var inst_15693 = (state_15714[(7)]);
var inst_15694 = (state_15714[(8)]);
var inst_15693__$1 = (state_15714[(2)]);
var inst_15694__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15693__$1,(0),null);
var inst_15695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15693__$1,(1),null);
var inst_15696 = (inst_15694__$1 == null);
var state_15714__$1 = (function (){var statearr_15717 = state_15714;
(statearr_15717[(7)] = inst_15693__$1);

(statearr_15717[(8)] = inst_15694__$1);

(statearr_15717[(9)] = inst_15695);

return statearr_15717;
})();
if(cljs.core.truth_(inst_15696)){
var statearr_15718_17040 = state_15714__$1;
(statearr_15718_17040[(1)] = (8));

} else {
var statearr_15719_17041 = state_15714__$1;
(statearr_15719_17041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (1))){
var inst_15683 = cljs.core.vec(chs);
var inst_15684 = inst_15683;
var state_15714__$1 = (function (){var statearr_15720 = state_15714;
(statearr_15720[(10)] = inst_15684);

return statearr_15720;
})();
var statearr_15721_17042 = state_15714__$1;
(statearr_15721_17042[(2)] = null);

(statearr_15721_17042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (4))){
var inst_15684 = (state_15714[(10)]);
var state_15714__$1 = state_15714;
return cljs.core.async.ioc_alts_BANG_(state_15714__$1,(7),inst_15684);
} else {
if((state_val_15715 === (6))){
var inst_15710 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15725_17043 = state_15714__$1;
(statearr_15725_17043[(2)] = inst_15710);

(statearr_15725_17043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (3))){
var inst_15712 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15714__$1,inst_15712);
} else {
if((state_val_15715 === (2))){
var inst_15684 = (state_15714[(10)]);
var inst_15686 = cljs.core.count(inst_15684);
var inst_15687 = (inst_15686 > (0));
var state_15714__$1 = state_15714;
if(cljs.core.truth_(inst_15687)){
var statearr_15727_17044 = state_15714__$1;
(statearr_15727_17044[(1)] = (4));

} else {
var statearr_15728_17045 = state_15714__$1;
(statearr_15728_17045[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (11))){
var inst_15684 = (state_15714[(10)]);
var inst_15703 = (state_15714[(2)]);
var tmp15726 = inst_15684;
var inst_15684__$1 = tmp15726;
var state_15714__$1 = (function (){var statearr_15729 = state_15714;
(statearr_15729[(11)] = inst_15703);

(statearr_15729[(10)] = inst_15684__$1);

return statearr_15729;
})();
var statearr_15730_17046 = state_15714__$1;
(statearr_15730_17046[(2)] = null);

(statearr_15730_17046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (9))){
var inst_15694 = (state_15714[(8)]);
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15714__$1,(11),out,inst_15694);
} else {
if((state_val_15715 === (5))){
var inst_15708 = cljs.core.async.close_BANG_(out);
var state_15714__$1 = state_15714;
var statearr_15736_17047 = state_15714__$1;
(statearr_15736_17047[(2)] = inst_15708);

(statearr_15736_17047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (10))){
var inst_15706 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15737_17048 = state_15714__$1;
(statearr_15737_17048[(2)] = inst_15706);

(statearr_15737_17048[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (8))){
var inst_15684 = (state_15714[(10)]);
var inst_15693 = (state_15714[(7)]);
var inst_15694 = (state_15714[(8)]);
var inst_15695 = (state_15714[(9)]);
var inst_15698 = (function (){var cs = inst_15684;
var vec__15689 = inst_15693;
var v = inst_15694;
var c = inst_15695;
return (function (p1__15678_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15678_SHARP_);
});
})();
var inst_15699 = cljs.core.filterv(inst_15698,inst_15684);
var inst_15684__$1 = inst_15699;
var state_15714__$1 = (function (){var statearr_15766 = state_15714;
(statearr_15766[(10)] = inst_15684__$1);

return statearr_15766;
})();
var statearr_15767_17049 = state_15714__$1;
(statearr_15767_17049[(2)] = null);

(statearr_15767_17049[(1)] = (2));


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
var cljs$core$async$state_machine__12307__auto__ = null;
var cljs$core$async$state_machine__12307__auto____0 = (function (){
var statearr_15768 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15768[(0)] = cljs$core$async$state_machine__12307__auto__);

(statearr_15768[(1)] = (1));

return statearr_15768;
});
var cljs$core$async$state_machine__12307__auto____1 = (function (state_15714){
while(true){
var ret_value__12308__auto__ = (function (){try{while(true){
var result__12309__auto__ = switch__12306__auto__(state_15714);
if(cljs.core.keyword_identical_QMARK_(result__12309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12309__auto__;
}
break;
}
}catch (e15769){var ex__12310__auto__ = e15769;
var statearr_15773_17053 = state_15714;
(statearr_15773_17053[(2)] = ex__12310__auto__);


if(cljs.core.seq((state_15714[(4)]))){
var statearr_15774_17054 = state_15714;
(statearr_15774_17054[(1)] = cljs.core.first((state_15714[(4)])));

} else {
throw ex__12310__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17055 = state_15714;
state_15714 = G__17055;
continue;
} else {
return ret_value__12308__auto__;
}
break;
}
});
cljs$core$async$state_machine__12307__auto__ = function(state_15714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12307__auto____1.call(this,state_15714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12307__auto____0;
cljs$core$async$state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12307__auto____1;
return cljs$core$async$state_machine__12307__auto__;
})()
})();
var state__14011__auto__ = (function (){var statearr_15787 = f__14010__auto__();
(statearr_15787[(6)] = c__14009__auto___17038);

return statearr_15787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14011__auto__);
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
var G__15793 = arguments.length;
switch (G__15793) {
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
var c__14009__auto___17057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14010__auto__ = (function (){var switch__12306__auto__ = (function (state_15827){
var state_val_15828 = (state_15827[(1)]);
if((state_val_15828 === (7))){
var inst_15806 = (state_15827[(7)]);
var inst_15806__$1 = (state_15827[(2)]);
var inst_15808 = (inst_15806__$1 == null);
var inst_15811 = cljs.core.not(inst_15808);
var state_15827__$1 = (function (){var statearr_15829 = state_15827;
(statearr_15829[(7)] = inst_15806__$1);

return statearr_15829;
})();
if(inst_15811){
var statearr_15830_17058 = state_15827__$1;
(statearr_15830_17058[(1)] = (8));

} else {
var statearr_15831_17059 = state_15827__$1;
(statearr_15831_17059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15828 === (1))){
var inst_15801 = (0);
var state_15827__$1 = (function (){var statearr_15832 = state_15827;
(statearr_15832[(8)] = inst_15801);

return statearr_15832;
})();
var statearr_15833_17060 = state_15827__$1;
(statearr_15833_17060[(2)] = null);

(statearr_15833_17060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15828 === (4))){
var state_15827__$1 = state_15827;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15827__$1,(7),ch);
} else {
if((state_val_15828 === (6))){
var inst_15822 = (state_15827[(2)]);
var state_15827__$1 = state_15827;
var statearr_15840_17061 = state_15827__$1;
(statearr_15840_17061[(2)] = inst_15822);

(statearr_15840_17061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15828 === (3))){
var inst_15824 = (state_15827[(2)]);
var inst_15825 = cljs.core.async.close_BANG_(out);
var state_15827__$1 = (function (){var statearr_15850 = state_15827;
(statearr_15850[(9)] = inst_15824);

return statearr_15850;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15827__$1,inst_15825);
} else {
if((state_val_15828 === (2))){
var inst_15801 = (state_15827[(8)]);
var inst_15803 = (inst_15801 < n);
var state_15827__$1 = state_15827;
if(cljs.core.truth_(inst_15803)){
var statearr_15851_17062 = state_15827__$1;
(statearr_15851_17062[(1)] = (4));

} else {
var statearr_15852_17063 = state_15827__$1;
(statearr_15852_17063[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15828 === (11))){
var inst_15801 = (state_15827[(8)]);
var inst_15814 = (state_15827[(2)]);
var inst_15815 = (inst_15801 + (1));
var inst_15801__$1 = inst_15815;
var state_15827__$1 = (function (){var statearr_15859 = state_15827;
(statearr_15859[(10)] = inst_15814);

(statearr_15859[(8)] = inst_15801__$1);

return statearr_15859;
})();
var statearr_15860_17064 = state_15827__$1;
(statearr_15860_17064[(2)] = null);

(statearr_15860_17064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15828 === (9))){
var state_15827__$1 = state_15827;
var statearr_15865_17065 = state_15827__$1;
(statearr_15865_17065[(2)] = null);

(statearr_15865_17065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15828 === (5))){
var state_15827__$1 = state_15827;
var statearr_15868_17066 = state_15827__$1;
(statearr_15868_17066[(2)] = null);

(statearr_15868_17066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15828 === (10))){
var inst_15819 = (state_15827[(2)]);
var state_15827__$1 = state_15827;
var statearr_15869_17067 = state_15827__$1;
(statearr_15869_17067[(2)] = inst_15819);

(statearr_15869_17067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15828 === (8))){
var inst_15806 = (state_15827[(7)]);
var state_15827__$1 = state_15827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15827__$1,(11),out,inst_15806);
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
var cljs$core$async$state_machine__12307__auto__ = null;
var cljs$core$async$state_machine__12307__auto____0 = (function (){
var statearr_15870 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15870[(0)] = cljs$core$async$state_machine__12307__auto__);

(statearr_15870[(1)] = (1));

return statearr_15870;
});
var cljs$core$async$state_machine__12307__auto____1 = (function (state_15827){
while(true){
var ret_value__12308__auto__ = (function (){try{while(true){
var result__12309__auto__ = switch__12306__auto__(state_15827);
if(cljs.core.keyword_identical_QMARK_(result__12309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12309__auto__;
}
break;
}
}catch (e15874){var ex__12310__auto__ = e15874;
var statearr_15875_17069 = state_15827;
(statearr_15875_17069[(2)] = ex__12310__auto__);


if(cljs.core.seq((state_15827[(4)]))){
var statearr_15878_17071 = state_15827;
(statearr_15878_17071[(1)] = cljs.core.first((state_15827[(4)])));

} else {
throw ex__12310__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17072 = state_15827;
state_15827 = G__17072;
continue;
} else {
return ret_value__12308__auto__;
}
break;
}
});
cljs$core$async$state_machine__12307__auto__ = function(state_15827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12307__auto____1.call(this,state_15827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12307__auto____0;
cljs$core$async$state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12307__auto____1;
return cljs$core$async$state_machine__12307__auto__;
})()
})();
var state__14011__auto__ = (function (){var statearr_15879 = f__14010__auto__();
(statearr_15879[(6)] = c__14009__auto___17057);

return statearr_15879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14011__auto__);
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
cljs.core.async.t_cljs$core$async15892 = (function (f,ch,meta15890,_,fn1,meta15893){
this.f = f;
this.ch = ch;
this.meta15890 = meta15890;
this._ = _;
this.fn1 = fn1;
this.meta15893 = meta15893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15894,meta15893__$1){
var self__ = this;
var _15894__$1 = this;
return (new cljs.core.async.t_cljs$core$async15892(self__.f,self__.ch,self__.meta15890,self__._,self__.fn1,meta15893__$1));
}));

(cljs.core.async.t_cljs$core$async15892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15894){
var self__ = this;
var _15894__$1 = this;
return self__.meta15893;
}));

(cljs.core.async.t_cljs$core$async15892.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15892.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async15892.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15892.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__15884_SHARP_){
var G__15895 = (((p1__15884_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15884_SHARP_) : self__.f.call(null,p1__15884_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15895) : f1.call(null,G__15895));
});
}));

(cljs.core.async.t_cljs$core$async15892.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15890","meta15890",-1285014524,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15889","cljs.core.async/t_cljs$core$async15889",-1208116134,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15893","meta15893",-894502222,null)], null);
}));

(cljs.core.async.t_cljs$core$async15892.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15892");

(cljs.core.async.t_cljs$core$async15892.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15892");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15892.
 */
cljs.core.async.__GT_t_cljs$core$async15892 = (function cljs$core$async$__GT_t_cljs$core$async15892(f,ch,meta15890,_,fn1,meta15893){
return (new cljs.core.async.t_cljs$core$async15892(f,ch,meta15890,_,fn1,meta15893));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15889 = (function (f,ch,meta15890){
this.f = f;
this.ch = ch;
this.meta15890 = meta15890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15891,meta15890__$1){
var self__ = this;
var _15891__$1 = this;
return (new cljs.core.async.t_cljs$core$async15889(self__.f,self__.ch,meta15890__$1));
}));

(cljs.core.async.t_cljs$core$async15889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15891){
var self__ = this;
var _15891__$1 = this;
return self__.meta15890;
}));

(cljs.core.async.t_cljs$core$async15889.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15889.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15889.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15889.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15889.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async15892(self__.f,self__.ch,self__.meta15890,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15905 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15905) : self__.f.call(null,G__15905));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async15889.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15889.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async15889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15890","meta15890",-1285014524,null)], null);
}));

(cljs.core.async.t_cljs$core$async15889.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15889");

(cljs.core.async.t_cljs$core$async15889.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15889");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15889.
 */
cljs.core.async.__GT_t_cljs$core$async15889 = (function cljs$core$async$__GT_t_cljs$core$async15889(f,ch,meta15890){
return (new cljs.core.async.t_cljs$core$async15889(f,ch,meta15890));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15889(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15910 = (function (f,ch,meta15911){
this.f = f;
this.ch = ch;
this.meta15911 = meta15911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15912,meta15911__$1){
var self__ = this;
var _15912__$1 = this;
return (new cljs.core.async.t_cljs$core$async15910(self__.f,self__.ch,meta15911__$1));
}));

(cljs.core.async.t_cljs$core$async15910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15912){
var self__ = this;
var _15912__$1 = this;
return self__.meta15911;
}));

(cljs.core.async.t_cljs$core$async15910.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15910.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15910.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15910.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15910.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15910.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async15910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15911","meta15911",846206036,null)], null);
}));

(cljs.core.async.t_cljs$core$async15910.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15910");

(cljs.core.async.t_cljs$core$async15910.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15910");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15910.
 */
cljs.core.async.__GT_t_cljs$core$async15910 = (function cljs$core$async$__GT_t_cljs$core$async15910(f,ch,meta15911){
return (new cljs.core.async.t_cljs$core$async15910(f,ch,meta15911));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15910(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15915 = (function (p,ch,meta15916){
this.p = p;
this.ch = ch;
this.meta15916 = meta15916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15917,meta15916__$1){
var self__ = this;
var _15917__$1 = this;
return (new cljs.core.async.t_cljs$core$async15915(self__.p,self__.ch,meta15916__$1));
}));

(cljs.core.async.t_cljs$core$async15915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15917){
var self__ = this;
var _15917__$1 = this;
return self__.meta15916;
}));

(cljs.core.async.t_cljs$core$async15915.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15915.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15915.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15915.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15915.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15915.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15915.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async15915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15916","meta15916",-1805104511,null)], null);
}));

(cljs.core.async.t_cljs$core$async15915.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15915");

(cljs.core.async.t_cljs$core$async15915.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15915");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15915.
 */
cljs.core.async.__GT_t_cljs$core$async15915 = (function cljs$core$async$__GT_t_cljs$core$async15915(p,ch,meta15916){
return (new cljs.core.async.t_cljs$core$async15915(p,ch,meta15916));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async15915(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15941 = arguments.length;
switch (G__15941) {
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
var c__14009__auto___17080 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14010__auto__ = (function (){var switch__12306__auto__ = (function (state_15963){
var state_val_15964 = (state_15963[(1)]);
if((state_val_15964 === (7))){
var inst_15959 = (state_15963[(2)]);
var state_15963__$1 = state_15963;
var statearr_15965_17081 = state_15963__$1;
(statearr_15965_17081[(2)] = inst_15959);

(statearr_15965_17081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15964 === (1))){
var state_15963__$1 = state_15963;
var statearr_15966_17082 = state_15963__$1;
(statearr_15966_17082[(2)] = null);

(statearr_15966_17082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15964 === (4))){
var inst_15945 = (state_15963[(7)]);
var inst_15945__$1 = (state_15963[(2)]);
var inst_15946 = (inst_15945__$1 == null);
var state_15963__$1 = (function (){var statearr_15967 = state_15963;
(statearr_15967[(7)] = inst_15945__$1);

return statearr_15967;
})();
if(cljs.core.truth_(inst_15946)){
var statearr_15968_17083 = state_15963__$1;
(statearr_15968_17083[(1)] = (5));

} else {
var statearr_15969_17084 = state_15963__$1;
(statearr_15969_17084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15964 === (6))){
var inst_15945 = (state_15963[(7)]);
var inst_15950 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15945) : p.call(null,inst_15945));
var state_15963__$1 = state_15963;
if(cljs.core.truth_(inst_15950)){
var statearr_15970_17085 = state_15963__$1;
(statearr_15970_17085[(1)] = (8));

} else {
var statearr_15971_17086 = state_15963__$1;
(statearr_15971_17086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15964 === (3))){
var inst_15961 = (state_15963[(2)]);
var state_15963__$1 = state_15963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15963__$1,inst_15961);
} else {
if((state_val_15964 === (2))){
var state_15963__$1 = state_15963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15963__$1,(4),ch);
} else {
if((state_val_15964 === (11))){
var inst_15953 = (state_15963[(2)]);
var state_15963__$1 = state_15963;
var statearr_15972_17087 = state_15963__$1;
(statearr_15972_17087[(2)] = inst_15953);

(statearr_15972_17087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15964 === (9))){
var state_15963__$1 = state_15963;
var statearr_15973_17088 = state_15963__$1;
(statearr_15973_17088[(2)] = null);

(statearr_15973_17088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15964 === (5))){
var inst_15948 = cljs.core.async.close_BANG_(out);
var state_15963__$1 = state_15963;
var statearr_15974_17089 = state_15963__$1;
(statearr_15974_17089[(2)] = inst_15948);

(statearr_15974_17089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15964 === (10))){
var inst_15956 = (state_15963[(2)]);
var state_15963__$1 = (function (){var statearr_15975 = state_15963;
(statearr_15975[(8)] = inst_15956);

return statearr_15975;
})();
var statearr_15976_17090 = state_15963__$1;
(statearr_15976_17090[(2)] = null);

(statearr_15976_17090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15964 === (8))){
var inst_15945 = (state_15963[(7)]);
var state_15963__$1 = state_15963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15963__$1,(11),out,inst_15945);
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
var cljs$core$async$state_machine__12307__auto__ = null;
var cljs$core$async$state_machine__12307__auto____0 = (function (){
var statearr_15977 = [null,null,null,null,null,null,null,null,null];
(statearr_15977[(0)] = cljs$core$async$state_machine__12307__auto__);

(statearr_15977[(1)] = (1));

return statearr_15977;
});
var cljs$core$async$state_machine__12307__auto____1 = (function (state_15963){
while(true){
var ret_value__12308__auto__ = (function (){try{while(true){
var result__12309__auto__ = switch__12306__auto__(state_15963);
if(cljs.core.keyword_identical_QMARK_(result__12309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12309__auto__;
}
break;
}
}catch (e15978){var ex__12310__auto__ = e15978;
var statearr_15979_17093 = state_15963;
(statearr_15979_17093[(2)] = ex__12310__auto__);


if(cljs.core.seq((state_15963[(4)]))){
var statearr_15980_17094 = state_15963;
(statearr_15980_17094[(1)] = cljs.core.first((state_15963[(4)])));

} else {
throw ex__12310__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17095 = state_15963;
state_15963 = G__17095;
continue;
} else {
return ret_value__12308__auto__;
}
break;
}
});
cljs$core$async$state_machine__12307__auto__ = function(state_15963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12307__auto____1.call(this,state_15963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12307__auto____0;
cljs$core$async$state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12307__auto____1;
return cljs$core$async$state_machine__12307__auto__;
})()
})();
var state__14011__auto__ = (function (){var statearr_15981 = f__14010__auto__();
(statearr_15981[(6)] = c__14009__auto___17080);

return statearr_15981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14011__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15984 = arguments.length;
switch (G__15984) {
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
var c__14009__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14010__auto__ = (function (){var switch__12306__auto__ = (function (state_16048){
var state_val_16049 = (state_16048[(1)]);
if((state_val_16049 === (7))){
var inst_16042 = (state_16048[(2)]);
var state_16048__$1 = state_16048;
var statearr_16050_17099 = state_16048__$1;
(statearr_16050_17099[(2)] = inst_16042);

(statearr_16050_17099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (20))){
var inst_16012 = (state_16048[(7)]);
var inst_16023 = (state_16048[(2)]);
var inst_16024 = cljs.core.next(inst_16012);
var inst_15998 = inst_16024;
var inst_15999 = null;
var inst_16000 = (0);
var inst_16001 = (0);
var state_16048__$1 = (function (){var statearr_16051 = state_16048;
(statearr_16051[(8)] = inst_16023);

(statearr_16051[(9)] = inst_15998);

(statearr_16051[(10)] = inst_15999);

(statearr_16051[(11)] = inst_16000);

(statearr_16051[(12)] = inst_16001);

return statearr_16051;
})();
var statearr_16053_17104 = state_16048__$1;
(statearr_16053_17104[(2)] = null);

(statearr_16053_17104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (1))){
var state_16048__$1 = state_16048;
var statearr_16054_17105 = state_16048__$1;
(statearr_16054_17105[(2)] = null);

(statearr_16054_17105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (4))){
var inst_15987 = (state_16048[(13)]);
var inst_15987__$1 = (state_16048[(2)]);
var inst_15988 = (inst_15987__$1 == null);
var state_16048__$1 = (function (){var statearr_16056 = state_16048;
(statearr_16056[(13)] = inst_15987__$1);

return statearr_16056;
})();
if(cljs.core.truth_(inst_15988)){
var statearr_16058_17106 = state_16048__$1;
(statearr_16058_17106[(1)] = (5));

} else {
var statearr_16059_17107 = state_16048__$1;
(statearr_16059_17107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (15))){
var state_16048__$1 = state_16048;
var statearr_16063_17108 = state_16048__$1;
(statearr_16063_17108[(2)] = null);

(statearr_16063_17108[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (21))){
var state_16048__$1 = state_16048;
var statearr_16064_17109 = state_16048__$1;
(statearr_16064_17109[(2)] = null);

(statearr_16064_17109[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (13))){
var inst_16001 = (state_16048[(12)]);
var inst_15998 = (state_16048[(9)]);
var inst_15999 = (state_16048[(10)]);
var inst_16000 = (state_16048[(11)]);
var inst_16008 = (state_16048[(2)]);
var inst_16009 = (inst_16001 + (1));
var tmp16060 = inst_15999;
var tmp16061 = inst_16000;
var tmp16062 = inst_15998;
var inst_15998__$1 = tmp16062;
var inst_15999__$1 = tmp16060;
var inst_16000__$1 = tmp16061;
var inst_16001__$1 = inst_16009;
var state_16048__$1 = (function (){var statearr_16065 = state_16048;
(statearr_16065[(14)] = inst_16008);

(statearr_16065[(9)] = inst_15998__$1);

(statearr_16065[(10)] = inst_15999__$1);

(statearr_16065[(11)] = inst_16000__$1);

(statearr_16065[(12)] = inst_16001__$1);

return statearr_16065;
})();
var statearr_16066_17110 = state_16048__$1;
(statearr_16066_17110[(2)] = null);

(statearr_16066_17110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (22))){
var state_16048__$1 = state_16048;
var statearr_16067_17111 = state_16048__$1;
(statearr_16067_17111[(2)] = null);

(statearr_16067_17111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (6))){
var inst_15987 = (state_16048[(13)]);
var inst_15996 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15987) : f.call(null,inst_15987));
var inst_15997 = cljs.core.seq(inst_15996);
var inst_15998 = inst_15997;
var inst_15999 = null;
var inst_16000 = (0);
var inst_16001 = (0);
var state_16048__$1 = (function (){var statearr_16074 = state_16048;
(statearr_16074[(9)] = inst_15998);

(statearr_16074[(10)] = inst_15999);

(statearr_16074[(11)] = inst_16000);

(statearr_16074[(12)] = inst_16001);

return statearr_16074;
})();
var statearr_16077_17112 = state_16048__$1;
(statearr_16077_17112[(2)] = null);

(statearr_16077_17112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (17))){
var inst_16012 = (state_16048[(7)]);
var inst_16016 = cljs.core.chunk_first(inst_16012);
var inst_16017 = cljs.core.chunk_rest(inst_16012);
var inst_16018 = cljs.core.count(inst_16016);
var inst_15998 = inst_16017;
var inst_15999 = inst_16016;
var inst_16000 = inst_16018;
var inst_16001 = (0);
var state_16048__$1 = (function (){var statearr_16090 = state_16048;
(statearr_16090[(9)] = inst_15998);

(statearr_16090[(10)] = inst_15999);

(statearr_16090[(11)] = inst_16000);

(statearr_16090[(12)] = inst_16001);

return statearr_16090;
})();
var statearr_16096_17113 = state_16048__$1;
(statearr_16096_17113[(2)] = null);

(statearr_16096_17113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (3))){
var inst_16044 = (state_16048[(2)]);
var state_16048__$1 = state_16048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16048__$1,inst_16044);
} else {
if((state_val_16049 === (12))){
var inst_16032 = (state_16048[(2)]);
var state_16048__$1 = state_16048;
var statearr_16100_17114 = state_16048__$1;
(statearr_16100_17114[(2)] = inst_16032);

(statearr_16100_17114[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (2))){
var state_16048__$1 = state_16048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16048__$1,(4),in$);
} else {
if((state_val_16049 === (23))){
var inst_16040 = (state_16048[(2)]);
var state_16048__$1 = state_16048;
var statearr_16106_17115 = state_16048__$1;
(statearr_16106_17115[(2)] = inst_16040);

(statearr_16106_17115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (19))){
var inst_16027 = (state_16048[(2)]);
var state_16048__$1 = state_16048;
var statearr_16113_17116 = state_16048__$1;
(statearr_16113_17116[(2)] = inst_16027);

(statearr_16113_17116[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (11))){
var inst_15998 = (state_16048[(9)]);
var inst_16012 = (state_16048[(7)]);
var inst_16012__$1 = cljs.core.seq(inst_15998);
var state_16048__$1 = (function (){var statearr_16114 = state_16048;
(statearr_16114[(7)] = inst_16012__$1);

return statearr_16114;
})();
if(inst_16012__$1){
var statearr_16117_17117 = state_16048__$1;
(statearr_16117_17117[(1)] = (14));

} else {
var statearr_16118_17118 = state_16048__$1;
(statearr_16118_17118[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (9))){
var inst_16034 = (state_16048[(2)]);
var inst_16035 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16048__$1 = (function (){var statearr_16122 = state_16048;
(statearr_16122[(15)] = inst_16034);

return statearr_16122;
})();
if(cljs.core.truth_(inst_16035)){
var statearr_16123_17119 = state_16048__$1;
(statearr_16123_17119[(1)] = (21));

} else {
var statearr_16124_17120 = state_16048__$1;
(statearr_16124_17120[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (5))){
var inst_15990 = cljs.core.async.close_BANG_(out);
var state_16048__$1 = state_16048;
var statearr_16125_17121 = state_16048__$1;
(statearr_16125_17121[(2)] = inst_15990);

(statearr_16125_17121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (14))){
var inst_16012 = (state_16048[(7)]);
var inst_16014 = cljs.core.chunked_seq_QMARK_(inst_16012);
var state_16048__$1 = state_16048;
if(inst_16014){
var statearr_16130_17122 = state_16048__$1;
(statearr_16130_17122[(1)] = (17));

} else {
var statearr_16131_17123 = state_16048__$1;
(statearr_16131_17123[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (16))){
var inst_16030 = (state_16048[(2)]);
var state_16048__$1 = state_16048;
var statearr_16132_17124 = state_16048__$1;
(statearr_16132_17124[(2)] = inst_16030);

(statearr_16132_17124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (10))){
var inst_15999 = (state_16048[(10)]);
var inst_16001 = (state_16048[(12)]);
var inst_16006 = cljs.core._nth(inst_15999,inst_16001);
var state_16048__$1 = state_16048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16048__$1,(13),out,inst_16006);
} else {
if((state_val_16049 === (18))){
var inst_16012 = (state_16048[(7)]);
var inst_16021 = cljs.core.first(inst_16012);
var state_16048__$1 = state_16048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16048__$1,(20),out,inst_16021);
} else {
if((state_val_16049 === (8))){
var inst_16001 = (state_16048[(12)]);
var inst_16000 = (state_16048[(11)]);
var inst_16003 = (inst_16001 < inst_16000);
var inst_16004 = inst_16003;
var state_16048__$1 = state_16048;
if(cljs.core.truth_(inst_16004)){
var statearr_16136_17125 = state_16048__$1;
(statearr_16136_17125[(1)] = (10));

} else {
var statearr_16137_17126 = state_16048__$1;
(statearr_16137_17126[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__12307__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12307__auto____0 = (function (){
var statearr_16138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16138[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12307__auto__);

(statearr_16138[(1)] = (1));

return statearr_16138;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12307__auto____1 = (function (state_16048){
while(true){
var ret_value__12308__auto__ = (function (){try{while(true){
var result__12309__auto__ = switch__12306__auto__(state_16048);
if(cljs.core.keyword_identical_QMARK_(result__12309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12309__auto__;
}
break;
}
}catch (e16139){var ex__12310__auto__ = e16139;
var statearr_16140_17127 = state_16048;
(statearr_16140_17127[(2)] = ex__12310__auto__);


if(cljs.core.seq((state_16048[(4)]))){
var statearr_16144_17128 = state_16048;
(statearr_16144_17128[(1)] = cljs.core.first((state_16048[(4)])));

} else {
throw ex__12310__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17129 = state_16048;
state_16048 = G__17129;
continue;
} else {
return ret_value__12308__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12307__auto__ = function(state_16048){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12307__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12307__auto____1.call(this,state_16048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12307__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12307__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12307__auto__;
})()
})();
var state__14011__auto__ = (function (){var statearr_16150 = f__14010__auto__();
(statearr_16150[(6)] = c__14009__auto__);

return statearr_16150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14011__auto__);
}));

return c__14009__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16167 = arguments.length;
switch (G__16167) {
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
var G__16182 = arguments.length;
switch (G__16182) {
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
var G__16201 = arguments.length;
switch (G__16201) {
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
var c__14009__auto___17133 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14010__auto__ = (function (){var switch__12306__auto__ = (function (state_16251){
var state_val_16252 = (state_16251[(1)]);
if((state_val_16252 === (7))){
var inst_16242 = (state_16251[(2)]);
var state_16251__$1 = state_16251;
var statearr_16262_17134 = state_16251__$1;
(statearr_16262_17134[(2)] = inst_16242);

(statearr_16262_17134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16252 === (1))){
var inst_16223 = null;
var state_16251__$1 = (function (){var statearr_16263 = state_16251;
(statearr_16263[(7)] = inst_16223);

return statearr_16263;
})();
var statearr_16268_17135 = state_16251__$1;
(statearr_16268_17135[(2)] = null);

(statearr_16268_17135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16252 === (4))){
var inst_16227 = (state_16251[(8)]);
var inst_16227__$1 = (state_16251[(2)]);
var inst_16228 = (inst_16227__$1 == null);
var inst_16229 = cljs.core.not(inst_16228);
var state_16251__$1 = (function (){var statearr_16275 = state_16251;
(statearr_16275[(8)] = inst_16227__$1);

return statearr_16275;
})();
if(inst_16229){
var statearr_16276_17136 = state_16251__$1;
(statearr_16276_17136[(1)] = (5));

} else {
var statearr_16279_17137 = state_16251__$1;
(statearr_16279_17137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16252 === (6))){
var state_16251__$1 = state_16251;
var statearr_16280_17138 = state_16251__$1;
(statearr_16280_17138[(2)] = null);

(statearr_16280_17138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16252 === (3))){
var inst_16244 = (state_16251[(2)]);
var inst_16245 = cljs.core.async.close_BANG_(out);
var state_16251__$1 = (function (){var statearr_16287 = state_16251;
(statearr_16287[(9)] = inst_16244);

return statearr_16287;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16251__$1,inst_16245);
} else {
if((state_val_16252 === (2))){
var state_16251__$1 = state_16251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16251__$1,(4),ch);
} else {
if((state_val_16252 === (11))){
var inst_16227 = (state_16251[(8)]);
var inst_16236 = (state_16251[(2)]);
var inst_16223 = inst_16227;
var state_16251__$1 = (function (){var statearr_16293 = state_16251;
(statearr_16293[(10)] = inst_16236);

(statearr_16293[(7)] = inst_16223);

return statearr_16293;
})();
var statearr_16296_17139 = state_16251__$1;
(statearr_16296_17139[(2)] = null);

(statearr_16296_17139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16252 === (9))){
var inst_16227 = (state_16251[(8)]);
var state_16251__$1 = state_16251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16251__$1,(11),out,inst_16227);
} else {
if((state_val_16252 === (5))){
var inst_16227 = (state_16251[(8)]);
var inst_16223 = (state_16251[(7)]);
var inst_16231 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16227,inst_16223);
var state_16251__$1 = state_16251;
if(inst_16231){
var statearr_16308_17140 = state_16251__$1;
(statearr_16308_17140[(1)] = (8));

} else {
var statearr_16309_17141 = state_16251__$1;
(statearr_16309_17141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16252 === (10))){
var inst_16239 = (state_16251[(2)]);
var state_16251__$1 = state_16251;
var statearr_16310_17142 = state_16251__$1;
(statearr_16310_17142[(2)] = inst_16239);

(statearr_16310_17142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16252 === (8))){
var inst_16223 = (state_16251[(7)]);
var tmp16301 = inst_16223;
var inst_16223__$1 = tmp16301;
var state_16251__$1 = (function (){var statearr_16313 = state_16251;
(statearr_16313[(7)] = inst_16223__$1);

return statearr_16313;
})();
var statearr_16314_17143 = state_16251__$1;
(statearr_16314_17143[(2)] = null);

(statearr_16314_17143[(1)] = (2));


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
var cljs$core$async$state_machine__12307__auto__ = null;
var cljs$core$async$state_machine__12307__auto____0 = (function (){
var statearr_16329 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16329[(0)] = cljs$core$async$state_machine__12307__auto__);

(statearr_16329[(1)] = (1));

return statearr_16329;
});
var cljs$core$async$state_machine__12307__auto____1 = (function (state_16251){
while(true){
var ret_value__12308__auto__ = (function (){try{while(true){
var result__12309__auto__ = switch__12306__auto__(state_16251);
if(cljs.core.keyword_identical_QMARK_(result__12309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12309__auto__;
}
break;
}
}catch (e16336){var ex__12310__auto__ = e16336;
var statearr_16337_17144 = state_16251;
(statearr_16337_17144[(2)] = ex__12310__auto__);


if(cljs.core.seq((state_16251[(4)]))){
var statearr_16338_17145 = state_16251;
(statearr_16338_17145[(1)] = cljs.core.first((state_16251[(4)])));

} else {
throw ex__12310__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17147 = state_16251;
state_16251 = G__17147;
continue;
} else {
return ret_value__12308__auto__;
}
break;
}
});
cljs$core$async$state_machine__12307__auto__ = function(state_16251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12307__auto____1.call(this,state_16251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12307__auto____0;
cljs$core$async$state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12307__auto____1;
return cljs$core$async$state_machine__12307__auto__;
})()
})();
var state__14011__auto__ = (function (){var statearr_16342 = f__14010__auto__();
(statearr_16342[(6)] = c__14009__auto___17133);

return statearr_16342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14011__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16355 = arguments.length;
switch (G__16355) {
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
var c__14009__auto___17149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14010__auto__ = (function (){var switch__12306__auto__ = (function (state_16403){
var state_val_16406 = (state_16403[(1)]);
if((state_val_16406 === (7))){
var inst_16399 = (state_16403[(2)]);
var state_16403__$1 = state_16403;
var statearr_16410_17150 = state_16403__$1;
(statearr_16410_17150[(2)] = inst_16399);

(statearr_16410_17150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16406 === (1))){
var inst_16366 = (new Array(n));
var inst_16367 = inst_16366;
var inst_16368 = (0);
var state_16403__$1 = (function (){var statearr_16411 = state_16403;
(statearr_16411[(7)] = inst_16367);

(statearr_16411[(8)] = inst_16368);

return statearr_16411;
})();
var statearr_16412_17154 = state_16403__$1;
(statearr_16412_17154[(2)] = null);

(statearr_16412_17154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16406 === (4))){
var inst_16371 = (state_16403[(9)]);
var inst_16371__$1 = (state_16403[(2)]);
var inst_16372 = (inst_16371__$1 == null);
var inst_16373 = cljs.core.not(inst_16372);
var state_16403__$1 = (function (){var statearr_16420 = state_16403;
(statearr_16420[(9)] = inst_16371__$1);

return statearr_16420;
})();
if(inst_16373){
var statearr_16421_17155 = state_16403__$1;
(statearr_16421_17155[(1)] = (5));

} else {
var statearr_16423_17156 = state_16403__$1;
(statearr_16423_17156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16406 === (15))){
var inst_16393 = (state_16403[(2)]);
var state_16403__$1 = state_16403;
var statearr_16424_17157 = state_16403__$1;
(statearr_16424_17157[(2)] = inst_16393);

(statearr_16424_17157[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16406 === (13))){
var state_16403__$1 = state_16403;
var statearr_16425_17162 = state_16403__$1;
(statearr_16425_17162[(2)] = null);

(statearr_16425_17162[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16406 === (6))){
var inst_16368 = (state_16403[(8)]);
var inst_16389 = (inst_16368 > (0));
var state_16403__$1 = state_16403;
if(cljs.core.truth_(inst_16389)){
var statearr_16430_17163 = state_16403__$1;
(statearr_16430_17163[(1)] = (12));

} else {
var statearr_16435_17164 = state_16403__$1;
(statearr_16435_17164[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16406 === (3))){
var inst_16401 = (state_16403[(2)]);
var state_16403__$1 = state_16403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16403__$1,inst_16401);
} else {
if((state_val_16406 === (12))){
var inst_16367 = (state_16403[(7)]);
var inst_16391 = cljs.core.vec(inst_16367);
var state_16403__$1 = state_16403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16403__$1,(15),out,inst_16391);
} else {
if((state_val_16406 === (2))){
var state_16403__$1 = state_16403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16403__$1,(4),ch);
} else {
if((state_val_16406 === (11))){
var inst_16383 = (state_16403[(2)]);
var inst_16384 = (new Array(n));
var inst_16367 = inst_16384;
var inst_16368 = (0);
var state_16403__$1 = (function (){var statearr_16441 = state_16403;
(statearr_16441[(10)] = inst_16383);

(statearr_16441[(7)] = inst_16367);

(statearr_16441[(8)] = inst_16368);

return statearr_16441;
})();
var statearr_16442_17165 = state_16403__$1;
(statearr_16442_17165[(2)] = null);

(statearr_16442_17165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16406 === (9))){
var inst_16367 = (state_16403[(7)]);
var inst_16381 = cljs.core.vec(inst_16367);
var state_16403__$1 = state_16403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16403__$1,(11),out,inst_16381);
} else {
if((state_val_16406 === (5))){
var inst_16367 = (state_16403[(7)]);
var inst_16368 = (state_16403[(8)]);
var inst_16371 = (state_16403[(9)]);
var inst_16376 = (state_16403[(11)]);
var inst_16375 = (inst_16367[inst_16368] = inst_16371);
var inst_16376__$1 = (inst_16368 + (1));
var inst_16377 = (inst_16376__$1 < n);
var state_16403__$1 = (function (){var statearr_16443 = state_16403;
(statearr_16443[(12)] = inst_16375);

(statearr_16443[(11)] = inst_16376__$1);

return statearr_16443;
})();
if(cljs.core.truth_(inst_16377)){
var statearr_16444_17166 = state_16403__$1;
(statearr_16444_17166[(1)] = (8));

} else {
var statearr_16445_17167 = state_16403__$1;
(statearr_16445_17167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16406 === (14))){
var inst_16396 = (state_16403[(2)]);
var inst_16397 = cljs.core.async.close_BANG_(out);
var state_16403__$1 = (function (){var statearr_16447 = state_16403;
(statearr_16447[(13)] = inst_16396);

return statearr_16447;
})();
var statearr_16448_17172 = state_16403__$1;
(statearr_16448_17172[(2)] = inst_16397);

(statearr_16448_17172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16406 === (10))){
var inst_16387 = (state_16403[(2)]);
var state_16403__$1 = state_16403;
var statearr_16451_17173 = state_16403__$1;
(statearr_16451_17173[(2)] = inst_16387);

(statearr_16451_17173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16406 === (8))){
var inst_16367 = (state_16403[(7)]);
var inst_16376 = (state_16403[(11)]);
var tmp16446 = inst_16367;
var inst_16367__$1 = tmp16446;
var inst_16368 = inst_16376;
var state_16403__$1 = (function (){var statearr_16452 = state_16403;
(statearr_16452[(7)] = inst_16367__$1);

(statearr_16452[(8)] = inst_16368);

return statearr_16452;
})();
var statearr_16453_17174 = state_16403__$1;
(statearr_16453_17174[(2)] = null);

(statearr_16453_17174[(1)] = (2));


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
var cljs$core$async$state_machine__12307__auto__ = null;
var cljs$core$async$state_machine__12307__auto____0 = (function (){
var statearr_16457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16457[(0)] = cljs$core$async$state_machine__12307__auto__);

(statearr_16457[(1)] = (1));

return statearr_16457;
});
var cljs$core$async$state_machine__12307__auto____1 = (function (state_16403){
while(true){
var ret_value__12308__auto__ = (function (){try{while(true){
var result__12309__auto__ = switch__12306__auto__(state_16403);
if(cljs.core.keyword_identical_QMARK_(result__12309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12309__auto__;
}
break;
}
}catch (e16460){var ex__12310__auto__ = e16460;
var statearr_16461_17175 = state_16403;
(statearr_16461_17175[(2)] = ex__12310__auto__);


if(cljs.core.seq((state_16403[(4)]))){
var statearr_16462_17176 = state_16403;
(statearr_16462_17176[(1)] = cljs.core.first((state_16403[(4)])));

} else {
throw ex__12310__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17177 = state_16403;
state_16403 = G__17177;
continue;
} else {
return ret_value__12308__auto__;
}
break;
}
});
cljs$core$async$state_machine__12307__auto__ = function(state_16403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12307__auto____1.call(this,state_16403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12307__auto____0;
cljs$core$async$state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12307__auto____1;
return cljs$core$async$state_machine__12307__auto__;
})()
})();
var state__14011__auto__ = (function (){var statearr_16463 = f__14010__auto__();
(statearr_16463[(6)] = c__14009__auto___17149);

return statearr_16463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14011__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16465 = arguments.length;
switch (G__16465) {
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
var c__14009__auto___17179 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14010__auto__ = (function (){var switch__12306__auto__ = (function (state_16515){
var state_val_16516 = (state_16515[(1)]);
if((state_val_16516 === (7))){
var inst_16511 = (state_16515[(2)]);
var state_16515__$1 = state_16515;
var statearr_16517_17180 = state_16515__$1;
(statearr_16517_17180[(2)] = inst_16511);

(statearr_16517_17180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (1))){
var inst_16470 = [];
var inst_16471 = inst_16470;
var inst_16472 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16515__$1 = (function (){var statearr_16518 = state_16515;
(statearr_16518[(7)] = inst_16471);

(statearr_16518[(8)] = inst_16472);

return statearr_16518;
})();
var statearr_16519_17181 = state_16515__$1;
(statearr_16519_17181[(2)] = null);

(statearr_16519_17181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (4))){
var inst_16475 = (state_16515[(9)]);
var inst_16475__$1 = (state_16515[(2)]);
var inst_16476 = (inst_16475__$1 == null);
var inst_16477 = cljs.core.not(inst_16476);
var state_16515__$1 = (function (){var statearr_16520 = state_16515;
(statearr_16520[(9)] = inst_16475__$1);

return statearr_16520;
})();
if(inst_16477){
var statearr_16521_17182 = state_16515__$1;
(statearr_16521_17182[(1)] = (5));

} else {
var statearr_16522_17184 = state_16515__$1;
(statearr_16522_17184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (15))){
var inst_16471 = (state_16515[(7)]);
var inst_16503 = cljs.core.vec(inst_16471);
var state_16515__$1 = state_16515;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16515__$1,(18),out,inst_16503);
} else {
if((state_val_16516 === (13))){
var inst_16498 = (state_16515[(2)]);
var state_16515__$1 = state_16515;
var statearr_16523_17185 = state_16515__$1;
(statearr_16523_17185[(2)] = inst_16498);

(statearr_16523_17185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (6))){
var inst_16471 = (state_16515[(7)]);
var inst_16500 = inst_16471.length;
var inst_16501 = (inst_16500 > (0));
var state_16515__$1 = state_16515;
if(cljs.core.truth_(inst_16501)){
var statearr_16524_17186 = state_16515__$1;
(statearr_16524_17186[(1)] = (15));

} else {
var statearr_16525_17187 = state_16515__$1;
(statearr_16525_17187[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (17))){
var inst_16508 = (state_16515[(2)]);
var inst_16509 = cljs.core.async.close_BANG_(out);
var state_16515__$1 = (function (){var statearr_16527 = state_16515;
(statearr_16527[(10)] = inst_16508);

return statearr_16527;
})();
var statearr_16528_17188 = state_16515__$1;
(statearr_16528_17188[(2)] = inst_16509);

(statearr_16528_17188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (3))){
var inst_16513 = (state_16515[(2)]);
var state_16515__$1 = state_16515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16515__$1,inst_16513);
} else {
if((state_val_16516 === (12))){
var inst_16471 = (state_16515[(7)]);
var inst_16491 = cljs.core.vec(inst_16471);
var state_16515__$1 = state_16515;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16515__$1,(14),out,inst_16491);
} else {
if((state_val_16516 === (2))){
var state_16515__$1 = state_16515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16515__$1,(4),ch);
} else {
if((state_val_16516 === (11))){
var inst_16471 = (state_16515[(7)]);
var inst_16475 = (state_16515[(9)]);
var inst_16480 = (state_16515[(11)]);
var inst_16488 = inst_16471.push(inst_16475);
var tmp16529 = inst_16471;
var inst_16471__$1 = tmp16529;
var inst_16472 = inst_16480;
var state_16515__$1 = (function (){var statearr_16537 = state_16515;
(statearr_16537[(12)] = inst_16488);

(statearr_16537[(7)] = inst_16471__$1);

(statearr_16537[(8)] = inst_16472);

return statearr_16537;
})();
var statearr_16538_17189 = state_16515__$1;
(statearr_16538_17189[(2)] = null);

(statearr_16538_17189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (9))){
var inst_16472 = (state_16515[(8)]);
var inst_16484 = cljs.core.keyword_identical_QMARK_(inst_16472,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_16515__$1 = state_16515;
var statearr_16539_17190 = state_16515__$1;
(statearr_16539_17190[(2)] = inst_16484);

(statearr_16539_17190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (5))){
var inst_16475 = (state_16515[(9)]);
var inst_16480 = (state_16515[(11)]);
var inst_16472 = (state_16515[(8)]);
var inst_16481 = (state_16515[(13)]);
var inst_16480__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16475) : f.call(null,inst_16475));
var inst_16481__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16480__$1,inst_16472);
var state_16515__$1 = (function (){var statearr_16540 = state_16515;
(statearr_16540[(11)] = inst_16480__$1);

(statearr_16540[(13)] = inst_16481__$1);

return statearr_16540;
})();
if(inst_16481__$1){
var statearr_16541_17191 = state_16515__$1;
(statearr_16541_17191[(1)] = (8));

} else {
var statearr_16542_17192 = state_16515__$1;
(statearr_16542_17192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (14))){
var inst_16475 = (state_16515[(9)]);
var inst_16480 = (state_16515[(11)]);
var inst_16493 = (state_16515[(2)]);
var inst_16494 = [];
var inst_16495 = inst_16494.push(inst_16475);
var inst_16471 = inst_16494;
var inst_16472 = inst_16480;
var state_16515__$1 = (function (){var statearr_16544 = state_16515;
(statearr_16544[(14)] = inst_16493);

(statearr_16544[(15)] = inst_16495);

(statearr_16544[(7)] = inst_16471);

(statearr_16544[(8)] = inst_16472);

return statearr_16544;
})();
var statearr_16545_17194 = state_16515__$1;
(statearr_16545_17194[(2)] = null);

(statearr_16545_17194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (16))){
var state_16515__$1 = state_16515;
var statearr_16546_17195 = state_16515__$1;
(statearr_16546_17195[(2)] = null);

(statearr_16546_17195[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (10))){
var inst_16486 = (state_16515[(2)]);
var state_16515__$1 = state_16515;
if(cljs.core.truth_(inst_16486)){
var statearr_16547_17196 = state_16515__$1;
(statearr_16547_17196[(1)] = (11));

} else {
var statearr_16548_17197 = state_16515__$1;
(statearr_16548_17197[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (18))){
var inst_16505 = (state_16515[(2)]);
var state_16515__$1 = state_16515;
var statearr_16549_17198 = state_16515__$1;
(statearr_16549_17198[(2)] = inst_16505);

(statearr_16549_17198[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (8))){
var inst_16481 = (state_16515[(13)]);
var state_16515__$1 = state_16515;
var statearr_16550_17199 = state_16515__$1;
(statearr_16550_17199[(2)] = inst_16481);

(statearr_16550_17199[(1)] = (10));


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
var cljs$core$async$state_machine__12307__auto__ = null;
var cljs$core$async$state_machine__12307__auto____0 = (function (){
var statearr_16551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16551[(0)] = cljs$core$async$state_machine__12307__auto__);

(statearr_16551[(1)] = (1));

return statearr_16551;
});
var cljs$core$async$state_machine__12307__auto____1 = (function (state_16515){
while(true){
var ret_value__12308__auto__ = (function (){try{while(true){
var result__12309__auto__ = switch__12306__auto__(state_16515);
if(cljs.core.keyword_identical_QMARK_(result__12309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12309__auto__;
}
break;
}
}catch (e16552){var ex__12310__auto__ = e16552;
var statearr_16553_17200 = state_16515;
(statearr_16553_17200[(2)] = ex__12310__auto__);


if(cljs.core.seq((state_16515[(4)]))){
var statearr_16554_17201 = state_16515;
(statearr_16554_17201[(1)] = cljs.core.first((state_16515[(4)])));

} else {
throw ex__12310__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17202 = state_16515;
state_16515 = G__17202;
continue;
} else {
return ret_value__12308__auto__;
}
break;
}
});
cljs$core$async$state_machine__12307__auto__ = function(state_16515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12307__auto____1.call(this,state_16515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12307__auto____0;
cljs$core$async$state_machine__12307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12307__auto____1;
return cljs$core$async$state_machine__12307__auto__;
})()
})();
var state__14011__auto__ = (function (){var statearr_16557 = f__14010__auto__();
(statearr_16557[(6)] = c__14009__auto___17179);

return statearr_16557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14011__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
