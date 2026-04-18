goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12141 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12141(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12152 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12152(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__10266 = coll;
var G__10267 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__10266,G__10267) : shadow.dom.lazy_native_coll_seq.call(null,G__10266,G__10267));
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
var or__5142__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.dom/NativeColl");
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
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__10346 = arguments.length;
switch (G__10346) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__10353 = arguments.length;
switch (G__10353) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__10357 = arguments.length;
switch (G__10357) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__10363 = arguments.length;
switch (G__10363) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__10414 = arguments.length;
switch (G__10414) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__10441 = arguments.length;
switch (G__10441) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e10491){if((e10491 instanceof Object)){
var e = e10491;
return console.log("didnt support attachEvent",el,e);
} else {
throw e10491;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__10545 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__10546 = null;
var count__10547 = (0);
var i__10548 = (0);
while(true){
if((i__10548 < count__10547)){
var el = chunk__10546.cljs$core$IIndexed$_nth$arity$2(null,i__10548);
var handler_12245__$1 = ((function (seq__10545,chunk__10546,count__10547,i__10548,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__10545,chunk__10546,count__10547,i__10548,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12245__$1);


var G__12246 = seq__10545;
var G__12247 = chunk__10546;
var G__12248 = count__10547;
var G__12249 = (i__10548 + (1));
seq__10545 = G__12246;
chunk__10546 = G__12247;
count__10547 = G__12248;
i__10548 = G__12249;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__10545);
if(temp__5825__auto__){
var seq__10545__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10545__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__10545__$1);
var G__12250 = cljs.core.chunk_rest(seq__10545__$1);
var G__12251 = c__5673__auto__;
var G__12252 = cljs.core.count(c__5673__auto__);
var G__12253 = (0);
seq__10545 = G__12250;
chunk__10546 = G__12251;
count__10547 = G__12252;
i__10548 = G__12253;
continue;
} else {
var el = cljs.core.first(seq__10545__$1);
var handler_12254__$1 = ((function (seq__10545,chunk__10546,count__10547,i__10548,el,seq__10545__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__10545,chunk__10546,count__10547,i__10548,el,seq__10545__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12254__$1);


var G__12257 = cljs.core.next(seq__10545__$1);
var G__12258 = null;
var G__12259 = (0);
var G__12260 = (0);
seq__10545 = G__12257;
chunk__10546 = G__12258;
count__10547 = G__12259;
i__10548 = G__12260;
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
var G__10600 = arguments.length;
switch (G__10600) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var seq__10641 = cljs.core.seq(events);
var chunk__10643 = null;
var count__10644 = (0);
var i__10645 = (0);
while(true){
if((i__10645 < count__10644)){
var vec__10696 = chunk__10643.cljs$core$IIndexed$_nth$arity$2(null,i__10645);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10696,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10696,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12265 = seq__10641;
var G__12266 = chunk__10643;
var G__12267 = count__10644;
var G__12268 = (i__10645 + (1));
seq__10641 = G__12265;
chunk__10643 = G__12266;
count__10644 = G__12267;
i__10645 = G__12268;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__10641);
if(temp__5825__auto__){
var seq__10641__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10641__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__10641__$1);
var G__12271 = cljs.core.chunk_rest(seq__10641__$1);
var G__12272 = c__5673__auto__;
var G__12273 = cljs.core.count(c__5673__auto__);
var G__12274 = (0);
seq__10641 = G__12271;
chunk__10643 = G__12272;
count__10644 = G__12273;
i__10645 = G__12274;
continue;
} else {
var vec__10703 = cljs.core.first(seq__10641__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10703,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10703,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12275 = cljs.core.next(seq__10641__$1);
var G__12276 = null;
var G__12277 = (0);
var G__12278 = (0);
seq__10641 = G__12275;
chunk__10643 = G__12276;
count__10644 = G__12277;
i__10645 = G__12278;
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
var seq__10713 = cljs.core.seq(styles);
var chunk__10714 = null;
var count__10715 = (0);
var i__10716 = (0);
while(true){
if((i__10716 < count__10715)){
var vec__10743 = chunk__10714.cljs$core$IIndexed$_nth$arity$2(null,i__10716);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10743,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10743,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12279 = seq__10713;
var G__12280 = chunk__10714;
var G__12281 = count__10715;
var G__12282 = (i__10716 + (1));
seq__10713 = G__12279;
chunk__10714 = G__12280;
count__10715 = G__12281;
i__10716 = G__12282;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__10713);
if(temp__5825__auto__){
var seq__10713__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10713__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__10713__$1);
var G__12285 = cljs.core.chunk_rest(seq__10713__$1);
var G__12286 = c__5673__auto__;
var G__12287 = cljs.core.count(c__5673__auto__);
var G__12288 = (0);
seq__10713 = G__12285;
chunk__10714 = G__12286;
count__10715 = G__12287;
i__10716 = G__12288;
continue;
} else {
var vec__10764 = cljs.core.first(seq__10713__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10764,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10764,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12290 = cljs.core.next(seq__10713__$1);
var G__12291 = null;
var G__12292 = (0);
var G__12293 = (0);
seq__10713 = G__12290;
chunk__10714 = G__12291;
count__10715 = G__12292;
i__10716 = G__12293;
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
var G__10797_12295 = key;
var G__10797_12296__$1 = (((G__10797_12295 instanceof cljs.core.Keyword))?G__10797_12295.fqn:null);
switch (G__10797_12296__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

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
var ks_12305 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5142__auto__ = goog.string.startsWith(ks_12305,"data-");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.string.startsWith(ks_12305,"aria-");
}
})())){
el.setAttribute(ks_12305,value);
} else {
(el[ks_12305] = value);
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
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
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__10859){
var map__10860 = p__10859;
var map__10860__$1 = cljs.core.__destructure_map(map__10860);
var props = map__10860__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10860__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__10865 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10865,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10865,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10865,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__10876 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__10876,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__10876;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__10882 = arguments.length;
switch (G__10882) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
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
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__10903){
var vec__10905 = p__10903;
var seq__10906 = cljs.core.seq(vec__10905);
var first__10907 = cljs.core.first(seq__10906);
var seq__10906__$1 = cljs.core.next(seq__10906);
var nn = first__10907;
var first__10907__$1 = cljs.core.first(seq__10906__$1);
var seq__10906__$2 = cljs.core.next(seq__10906__$1);
var np = first__10907__$1;
var nc = seq__10906__$2;
var node = vec__10905;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__10913 = nn;
var G__10914 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__10913,G__10914) : create_fn.call(null,G__10913,G__10914));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__10915 = nn;
var G__10916 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__10915,G__10916) : create_fn.call(null,G__10915,G__10916));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__10919 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10919,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10919,(1),null);
var seq__10922_12322 = cljs.core.seq(node_children);
var chunk__10923_12323 = null;
var count__10924_12324 = (0);
var i__10925_12325 = (0);
while(true){
if((i__10925_12325 < count__10924_12324)){
var child_struct_12326 = chunk__10923_12323.cljs$core$IIndexed$_nth$arity$2(null,i__10925_12325);
var children_12327 = shadow.dom.dom_node(child_struct_12326);
if(cljs.core.seq_QMARK_(children_12327)){
var seq__10964_12328 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12327));
var chunk__10966_12329 = null;
var count__10967_12330 = (0);
var i__10968_12331 = (0);
while(true){
if((i__10968_12331 < count__10967_12330)){
var child_12332 = chunk__10966_12329.cljs$core$IIndexed$_nth$arity$2(null,i__10968_12331);
if(cljs.core.truth_(child_12332)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12332);


var G__12333 = seq__10964_12328;
var G__12334 = chunk__10966_12329;
var G__12335 = count__10967_12330;
var G__12336 = (i__10968_12331 + (1));
seq__10964_12328 = G__12333;
chunk__10966_12329 = G__12334;
count__10967_12330 = G__12335;
i__10968_12331 = G__12336;
continue;
} else {
var G__12337 = seq__10964_12328;
var G__12338 = chunk__10966_12329;
var G__12339 = count__10967_12330;
var G__12340 = (i__10968_12331 + (1));
seq__10964_12328 = G__12337;
chunk__10966_12329 = G__12338;
count__10967_12330 = G__12339;
i__10968_12331 = G__12340;
continue;
}
} else {
var temp__5825__auto___12341 = cljs.core.seq(seq__10964_12328);
if(temp__5825__auto___12341){
var seq__10964_12343__$1 = temp__5825__auto___12341;
if(cljs.core.chunked_seq_QMARK_(seq__10964_12343__$1)){
var c__5673__auto___12345 = cljs.core.chunk_first(seq__10964_12343__$1);
var G__12346 = cljs.core.chunk_rest(seq__10964_12343__$1);
var G__12347 = c__5673__auto___12345;
var G__12348 = cljs.core.count(c__5673__auto___12345);
var G__12349 = (0);
seq__10964_12328 = G__12346;
chunk__10966_12329 = G__12347;
count__10967_12330 = G__12348;
i__10968_12331 = G__12349;
continue;
} else {
var child_12351 = cljs.core.first(seq__10964_12343__$1);
if(cljs.core.truth_(child_12351)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12351);


var G__12358 = cljs.core.next(seq__10964_12343__$1);
var G__12359 = null;
var G__12360 = (0);
var G__12361 = (0);
seq__10964_12328 = G__12358;
chunk__10966_12329 = G__12359;
count__10967_12330 = G__12360;
i__10968_12331 = G__12361;
continue;
} else {
var G__12362 = cljs.core.next(seq__10964_12343__$1);
var G__12363 = null;
var G__12364 = (0);
var G__12365 = (0);
seq__10964_12328 = G__12362;
chunk__10966_12329 = G__12363;
count__10967_12330 = G__12364;
i__10968_12331 = G__12365;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12327);
}


var G__12366 = seq__10922_12322;
var G__12367 = chunk__10923_12323;
var G__12368 = count__10924_12324;
var G__12369 = (i__10925_12325 + (1));
seq__10922_12322 = G__12366;
chunk__10923_12323 = G__12367;
count__10924_12324 = G__12368;
i__10925_12325 = G__12369;
continue;
} else {
var temp__5825__auto___12370 = cljs.core.seq(seq__10922_12322);
if(temp__5825__auto___12370){
var seq__10922_12371__$1 = temp__5825__auto___12370;
if(cljs.core.chunked_seq_QMARK_(seq__10922_12371__$1)){
var c__5673__auto___12372 = cljs.core.chunk_first(seq__10922_12371__$1);
var G__12373 = cljs.core.chunk_rest(seq__10922_12371__$1);
var G__12374 = c__5673__auto___12372;
var G__12375 = cljs.core.count(c__5673__auto___12372);
var G__12376 = (0);
seq__10922_12322 = G__12373;
chunk__10923_12323 = G__12374;
count__10924_12324 = G__12375;
i__10925_12325 = G__12376;
continue;
} else {
var child_struct_12378 = cljs.core.first(seq__10922_12371__$1);
var children_12379 = shadow.dom.dom_node(child_struct_12378);
if(cljs.core.seq_QMARK_(children_12379)){
var seq__10990_12380 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12379));
var chunk__10992_12381 = null;
var count__10993_12382 = (0);
var i__10994_12383 = (0);
while(true){
if((i__10994_12383 < count__10993_12382)){
var child_12386 = chunk__10992_12381.cljs$core$IIndexed$_nth$arity$2(null,i__10994_12383);
if(cljs.core.truth_(child_12386)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12386);


var G__12387 = seq__10990_12380;
var G__12388 = chunk__10992_12381;
var G__12389 = count__10993_12382;
var G__12390 = (i__10994_12383 + (1));
seq__10990_12380 = G__12387;
chunk__10992_12381 = G__12388;
count__10993_12382 = G__12389;
i__10994_12383 = G__12390;
continue;
} else {
var G__12394 = seq__10990_12380;
var G__12395 = chunk__10992_12381;
var G__12396 = count__10993_12382;
var G__12397 = (i__10994_12383 + (1));
seq__10990_12380 = G__12394;
chunk__10992_12381 = G__12395;
count__10993_12382 = G__12396;
i__10994_12383 = G__12397;
continue;
}
} else {
var temp__5825__auto___12398__$1 = cljs.core.seq(seq__10990_12380);
if(temp__5825__auto___12398__$1){
var seq__10990_12400__$1 = temp__5825__auto___12398__$1;
if(cljs.core.chunked_seq_QMARK_(seq__10990_12400__$1)){
var c__5673__auto___12401 = cljs.core.chunk_first(seq__10990_12400__$1);
var G__12402 = cljs.core.chunk_rest(seq__10990_12400__$1);
var G__12403 = c__5673__auto___12401;
var G__12404 = cljs.core.count(c__5673__auto___12401);
var G__12405 = (0);
seq__10990_12380 = G__12402;
chunk__10992_12381 = G__12403;
count__10993_12382 = G__12404;
i__10994_12383 = G__12405;
continue;
} else {
var child_12407 = cljs.core.first(seq__10990_12400__$1);
if(cljs.core.truth_(child_12407)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12407);


var G__12408 = cljs.core.next(seq__10990_12400__$1);
var G__12412 = null;
var G__12413 = (0);
var G__12414 = (0);
seq__10990_12380 = G__12408;
chunk__10992_12381 = G__12412;
count__10993_12382 = G__12413;
i__10994_12383 = G__12414;
continue;
} else {
var G__12415 = cljs.core.next(seq__10990_12400__$1);
var G__12416 = null;
var G__12417 = (0);
var G__12418 = (0);
seq__10990_12380 = G__12415;
chunk__10992_12381 = G__12416;
count__10993_12382 = G__12417;
i__10994_12383 = G__12418;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12379);
}


var G__12421 = cljs.core.next(seq__10922_12371__$1);
var G__12422 = null;
var G__12423 = (0);
var G__12424 = (0);
seq__10922_12322 = G__12421;
chunk__10923_12323 = G__12422;
count__10924_12324 = G__12423;
i__10925_12325 = G__12424;
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
var seq__11041 = cljs.core.seq(node);
var chunk__11042 = null;
var count__11043 = (0);
var i__11044 = (0);
while(true){
if((i__11044 < count__11043)){
var n = chunk__11042.cljs$core$IIndexed$_nth$arity$2(null,i__11044);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12458 = seq__11041;
var G__12459 = chunk__11042;
var G__12460 = count__11043;
var G__12461 = (i__11044 + (1));
seq__11041 = G__12458;
chunk__11042 = G__12459;
count__11043 = G__12460;
i__11044 = G__12461;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__11041);
if(temp__5825__auto__){
var seq__11041__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11041__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11041__$1);
var G__12463 = cljs.core.chunk_rest(seq__11041__$1);
var G__12464 = c__5673__auto__;
var G__12465 = cljs.core.count(c__5673__auto__);
var G__12466 = (0);
seq__11041 = G__12463;
chunk__11042 = G__12464;
count__11043 = G__12465;
i__11044 = G__12466;
continue;
} else {
var n = cljs.core.first(seq__11041__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12467 = cljs.core.next(seq__11041__$1);
var G__12468 = null;
var G__12469 = (0);
var G__12470 = (0);
seq__11041 = G__12467;
chunk__11042 = G__12468;
count__11043 = G__12469;
i__11044 = G__12470;
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
var G__11059 = arguments.length;
switch (G__11059) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__11071 = arguments.length;
switch (G__11071) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__11093 = arguments.length;
switch (G__11093) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5142__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5882__auto__ = [];
var len__5876__auto___12498 = arguments.length;
var i__5877__auto___12499 = (0);
while(true){
if((i__5877__auto___12499 < len__5876__auto___12498)){
args__5882__auto__.push((arguments[i__5877__auto___12499]));

var G__12500 = (i__5877__auto___12499 + (1));
i__5877__auto___12499 = G__12500;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__11122_12501 = cljs.core.seq(nodes);
var chunk__11123_12502 = null;
var count__11124_12503 = (0);
var i__11125_12504 = (0);
while(true){
if((i__11125_12504 < count__11124_12503)){
var node_12505 = chunk__11123_12502.cljs$core$IIndexed$_nth$arity$2(null,i__11125_12504);
fragment.appendChild(shadow.dom._to_dom(node_12505));


var G__12507 = seq__11122_12501;
var G__12508 = chunk__11123_12502;
var G__12509 = count__11124_12503;
var G__12510 = (i__11125_12504 + (1));
seq__11122_12501 = G__12507;
chunk__11123_12502 = G__12508;
count__11124_12503 = G__12509;
i__11125_12504 = G__12510;
continue;
} else {
var temp__5825__auto___12512 = cljs.core.seq(seq__11122_12501);
if(temp__5825__auto___12512){
var seq__11122_12513__$1 = temp__5825__auto___12512;
if(cljs.core.chunked_seq_QMARK_(seq__11122_12513__$1)){
var c__5673__auto___12514 = cljs.core.chunk_first(seq__11122_12513__$1);
var G__12523 = cljs.core.chunk_rest(seq__11122_12513__$1);
var G__12524 = c__5673__auto___12514;
var G__12525 = cljs.core.count(c__5673__auto___12514);
var G__12526 = (0);
seq__11122_12501 = G__12523;
chunk__11123_12502 = G__12524;
count__11124_12503 = G__12525;
i__11125_12504 = G__12526;
continue;
} else {
var node_12527 = cljs.core.first(seq__11122_12513__$1);
fragment.appendChild(shadow.dom._to_dom(node_12527));


var G__12528 = cljs.core.next(seq__11122_12513__$1);
var G__12529 = null;
var G__12530 = (0);
var G__12531 = (0);
seq__11122_12501 = G__12528;
chunk__11123_12502 = G__12529;
count__11124_12503 = G__12530;
i__11125_12504 = G__12531;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq11118){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11118));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__11143_12532 = cljs.core.seq(scripts);
var chunk__11144_12533 = null;
var count__11145_12534 = (0);
var i__11146_12535 = (0);
while(true){
if((i__11146_12535 < count__11145_12534)){
var vec__11164_12537 = chunk__11144_12533.cljs$core$IIndexed$_nth$arity$2(null,i__11146_12535);
var script_tag_12538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11164_12537,(0),null);
var script_body_12539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11164_12537,(1),null);
eval(script_body_12539);


var G__12542 = seq__11143_12532;
var G__12543 = chunk__11144_12533;
var G__12544 = count__11145_12534;
var G__12545 = (i__11146_12535 + (1));
seq__11143_12532 = G__12542;
chunk__11144_12533 = G__12543;
count__11145_12534 = G__12544;
i__11146_12535 = G__12545;
continue;
} else {
var temp__5825__auto___12547 = cljs.core.seq(seq__11143_12532);
if(temp__5825__auto___12547){
var seq__11143_12549__$1 = temp__5825__auto___12547;
if(cljs.core.chunked_seq_QMARK_(seq__11143_12549__$1)){
var c__5673__auto___12555 = cljs.core.chunk_first(seq__11143_12549__$1);
var G__12556 = cljs.core.chunk_rest(seq__11143_12549__$1);
var G__12557 = c__5673__auto___12555;
var G__12558 = cljs.core.count(c__5673__auto___12555);
var G__12559 = (0);
seq__11143_12532 = G__12556;
chunk__11144_12533 = G__12557;
count__11145_12534 = G__12558;
i__11146_12535 = G__12559;
continue;
} else {
var vec__11169_12560 = cljs.core.first(seq__11143_12549__$1);
var script_tag_12561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11169_12560,(0),null);
var script_body_12562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11169_12560,(1),null);
eval(script_body_12562);


var G__12564 = cljs.core.next(seq__11143_12549__$1);
var G__12565 = null;
var G__12566 = (0);
var G__12567 = (0);
seq__11143_12532 = G__12564;
chunk__11144_12533 = G__12565;
count__11145_12534 = G__12566;
i__11146_12535 = G__12567;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__11178){
var vec__11179 = p__11178;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11179,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11179,(1),null);
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
var G__11201 = arguments.length;
switch (G__11201) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
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
var seq__11237 = cljs.core.seq(style_keys);
var chunk__11238 = null;
var count__11239 = (0);
var i__11240 = (0);
while(true){
if((i__11240 < count__11239)){
var it = chunk__11238.cljs$core$IIndexed$_nth$arity$2(null,i__11240);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12578 = seq__11237;
var G__12579 = chunk__11238;
var G__12580 = count__11239;
var G__12581 = (i__11240 + (1));
seq__11237 = G__12578;
chunk__11238 = G__12579;
count__11239 = G__12580;
i__11240 = G__12581;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__11237);
if(temp__5825__auto__){
var seq__11237__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11237__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11237__$1);
var G__12582 = cljs.core.chunk_rest(seq__11237__$1);
var G__12583 = c__5673__auto__;
var G__12584 = cljs.core.count(c__5673__auto__);
var G__12585 = (0);
seq__11237 = G__12582;
chunk__11238 = G__12583;
count__11239 = G__12584;
i__11240 = G__12585;
continue;
} else {
var it = cljs.core.first(seq__11237__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12587 = cljs.core.next(seq__11237__$1);
var G__12588 = null;
var G__12589 = (0);
var G__12590 = (0);
seq__11237 = G__12587;
chunk__11238 = G__12588;
count__11239 = G__12589;
i__11240 = G__12590;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k11253,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__11271 = k11253;
var G__11271__$1 = (((G__11271 instanceof cljs.core.Keyword))?G__11271.fqn:null);
switch (G__11271__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11253,else__5451__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__11275){
var vec__11276 = p__11275;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11276,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11276,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11252){
var self__ = this;
var G__11252__$1 = this;
return (new cljs.core.RecordIter((0),G__11252__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11254,other11255){
var self__ = this;
var this11254__$1 = this;
return (((!((other11255 == null)))) && ((((this11254__$1.constructor === other11255.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11254__$1.x,other11255.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11254__$1.y,other11255.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11254__$1.__extmap,other11255.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k11253){
var self__ = this;
var this__5455__auto____$1 = this;
var G__11297 = k11253;
var G__11297__$1 = (((G__11297 instanceof cljs.core.Keyword))?G__11297.fqn:null);
switch (G__11297__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k11253);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__11252){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__11302 = cljs.core.keyword_identical_QMARK_;
var expr__11303 = k__5457__auto__;
if(cljs.core.truth_((pred__11302.cljs$core$IFn$_invoke$arity$2 ? pred__11302.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__11303) : pred__11302.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__11303)))){
return (new shadow.dom.Coordinate(G__11252,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11302.cljs$core$IFn$_invoke$arity$2 ? pred__11302.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__11303) : pred__11302.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__11303)))){
return (new shadow.dom.Coordinate(self__.x,G__11252,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__11252),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__11252){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__11252,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__11257){
var extmap__5490__auto__ = (function (){var G__11315 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11257,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__11257)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__11315);
} else {
return G__11315;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__11257),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__11257),null,cljs.core.not_empty(extmap__5490__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k11341,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__11356 = k11341;
var G__11356__$1 = (((G__11356 instanceof cljs.core.Keyword))?G__11356.fqn:null);
switch (G__11356__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11341,else__5451__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__11371){
var vec__11372 = p__11371;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11372,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11372,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Size{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11340){
var self__ = this;
var G__11340__$1 = this;
return (new cljs.core.RecordIter((0),G__11340__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11342,other11343){
var self__ = this;
var this11342__$1 = this;
return (((!((other11343 == null)))) && ((((this11342__$1.constructor === other11343.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11342__$1.w,other11343.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11342__$1.h,other11343.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11342__$1.__extmap,other11343.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k11341){
var self__ = this;
var this__5455__auto____$1 = this;
var G__11394 = k11341;
var G__11394__$1 = (((G__11394 instanceof cljs.core.Keyword))?G__11394.fqn:null);
switch (G__11394__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k11341);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__11340){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__11396 = cljs.core.keyword_identical_QMARK_;
var expr__11397 = k__5457__auto__;
if(cljs.core.truth_((pred__11396.cljs$core$IFn$_invoke$arity$2 ? pred__11396.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__11397) : pred__11396.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__11397)))){
return (new shadow.dom.Size(G__11340,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11396.cljs$core$IFn$_invoke$arity$2 ? pred__11396.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__11397) : pred__11396.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__11397)))){
return (new shadow.dom.Size(self__.w,G__11340,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__11340),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__11340){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__11340,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__11344){
var extmap__5490__auto__ = (function (){var G__11415 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11344,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__11344)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__11415);
} else {
return G__11415;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__11344),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__11344),null,cljs.core.not_empty(extmap__5490__auto__),null));
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
var a__5738__auto__ = opts;
var l__5739__auto__ = a__5738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5739__auto__)){
var G__12654 = (i + (1));
var G__12655 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12654;
ret = G__12655;
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__11493){
var vec__11494 = p__11493;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11494,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11494,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__11532 = arguments.length;
switch (G__11532) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var temp__5823__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
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
var G__12670 = ps;
var G__12671 = (i + (1));
el__$1 = G__12670;
i = G__12671;
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
var vec__11682 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11682,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11682,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11682,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__11689_12676 = cljs.core.seq(props);
var chunk__11690_12677 = null;
var count__11691_12678 = (0);
var i__11692_12679 = (0);
while(true){
if((i__11692_12679 < count__11691_12678)){
var vec__11724_12685 = chunk__11690_12677.cljs$core$IIndexed$_nth$arity$2(null,i__11692_12679);
var k_12686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11724_12685,(0),null);
var v_12687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11724_12685,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_12686);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12686),v_12687);


var G__12688 = seq__11689_12676;
var G__12689 = chunk__11690_12677;
var G__12690 = count__11691_12678;
var G__12691 = (i__11692_12679 + (1));
seq__11689_12676 = G__12688;
chunk__11690_12677 = G__12689;
count__11691_12678 = G__12690;
i__11692_12679 = G__12691;
continue;
} else {
var temp__5825__auto___12692 = cljs.core.seq(seq__11689_12676);
if(temp__5825__auto___12692){
var seq__11689_12693__$1 = temp__5825__auto___12692;
if(cljs.core.chunked_seq_QMARK_(seq__11689_12693__$1)){
var c__5673__auto___12694 = cljs.core.chunk_first(seq__11689_12693__$1);
var G__12695 = cljs.core.chunk_rest(seq__11689_12693__$1);
var G__12696 = c__5673__auto___12694;
var G__12697 = cljs.core.count(c__5673__auto___12694);
var G__12698 = (0);
seq__11689_12676 = G__12695;
chunk__11690_12677 = G__12696;
count__11691_12678 = G__12697;
i__11692_12679 = G__12698;
continue;
} else {
var vec__11736_12699 = cljs.core.first(seq__11689_12693__$1);
var k_12700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11736_12699,(0),null);
var v_12701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11736_12699,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_12700);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12700),v_12701);


var G__12707 = cljs.core.next(seq__11689_12693__$1);
var G__12708 = null;
var G__12709 = (0);
var G__12710 = (0);
seq__11689_12676 = G__12707;
chunk__11690_12677 = G__12708;
count__11691_12678 = G__12709;
i__11692_12679 = G__12710;
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
var vec__11761 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11761,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11761,(1),null);
var seq__11764_12711 = cljs.core.seq(node_children);
var chunk__11766_12712 = null;
var count__11767_12713 = (0);
var i__11768_12714 = (0);
while(true){
if((i__11768_12714 < count__11767_12713)){
var child_struct_12715 = chunk__11766_12712.cljs$core$IIndexed$_nth$arity$2(null,i__11768_12714);
if((!((child_struct_12715 == null)))){
if(typeof child_struct_12715 === 'string'){
var text_12716 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12716)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_12715)));
} else {
var children_12717 = shadow.dom.svg_node(child_struct_12715);
if(cljs.core.seq_QMARK_(children_12717)){
var seq__11963_12718 = cljs.core.seq(children_12717);
var chunk__11965_12719 = null;
var count__11966_12720 = (0);
var i__11967_12721 = (0);
while(true){
if((i__11967_12721 < count__11966_12720)){
var child_12722 = chunk__11965_12719.cljs$core$IIndexed$_nth$arity$2(null,i__11967_12721);
if(cljs.core.truth_(child_12722)){
node.appendChild(child_12722);


var G__12723 = seq__11963_12718;
var G__12724 = chunk__11965_12719;
var G__12725 = count__11966_12720;
var G__12726 = (i__11967_12721 + (1));
seq__11963_12718 = G__12723;
chunk__11965_12719 = G__12724;
count__11966_12720 = G__12725;
i__11967_12721 = G__12726;
continue;
} else {
var G__12727 = seq__11963_12718;
var G__12728 = chunk__11965_12719;
var G__12729 = count__11966_12720;
var G__12730 = (i__11967_12721 + (1));
seq__11963_12718 = G__12727;
chunk__11965_12719 = G__12728;
count__11966_12720 = G__12729;
i__11967_12721 = G__12730;
continue;
}
} else {
var temp__5825__auto___12732 = cljs.core.seq(seq__11963_12718);
if(temp__5825__auto___12732){
var seq__11963_12733__$1 = temp__5825__auto___12732;
if(cljs.core.chunked_seq_QMARK_(seq__11963_12733__$1)){
var c__5673__auto___12734 = cljs.core.chunk_first(seq__11963_12733__$1);
var G__12735 = cljs.core.chunk_rest(seq__11963_12733__$1);
var G__12736 = c__5673__auto___12734;
var G__12737 = cljs.core.count(c__5673__auto___12734);
var G__12738 = (0);
seq__11963_12718 = G__12735;
chunk__11965_12719 = G__12736;
count__11966_12720 = G__12737;
i__11967_12721 = G__12738;
continue;
} else {
var child_12739 = cljs.core.first(seq__11963_12733__$1);
if(cljs.core.truth_(child_12739)){
node.appendChild(child_12739);


var G__12740 = cljs.core.next(seq__11963_12733__$1);
var G__12741 = null;
var G__12742 = (0);
var G__12743 = (0);
seq__11963_12718 = G__12740;
chunk__11965_12719 = G__12741;
count__11966_12720 = G__12742;
i__11967_12721 = G__12743;
continue;
} else {
var G__12744 = cljs.core.next(seq__11963_12733__$1);
var G__12745 = null;
var G__12746 = (0);
var G__12747 = (0);
seq__11963_12718 = G__12744;
chunk__11965_12719 = G__12745;
count__11966_12720 = G__12746;
i__11967_12721 = G__12747;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12717);
}
}


var G__12749 = seq__11764_12711;
var G__12750 = chunk__11766_12712;
var G__12751 = count__11767_12713;
var G__12752 = (i__11768_12714 + (1));
seq__11764_12711 = G__12749;
chunk__11766_12712 = G__12750;
count__11767_12713 = G__12751;
i__11768_12714 = G__12752;
continue;
} else {
var G__12753 = seq__11764_12711;
var G__12754 = chunk__11766_12712;
var G__12755 = count__11767_12713;
var G__12756 = (i__11768_12714 + (1));
seq__11764_12711 = G__12753;
chunk__11766_12712 = G__12754;
count__11767_12713 = G__12755;
i__11768_12714 = G__12756;
continue;
}
} else {
var temp__5825__auto___12757 = cljs.core.seq(seq__11764_12711);
if(temp__5825__auto___12757){
var seq__11764_12758__$1 = temp__5825__auto___12757;
if(cljs.core.chunked_seq_QMARK_(seq__11764_12758__$1)){
var c__5673__auto___12759 = cljs.core.chunk_first(seq__11764_12758__$1);
var G__12760 = cljs.core.chunk_rest(seq__11764_12758__$1);
var G__12761 = c__5673__auto___12759;
var G__12762 = cljs.core.count(c__5673__auto___12759);
var G__12763 = (0);
seq__11764_12711 = G__12760;
chunk__11766_12712 = G__12761;
count__11767_12713 = G__12762;
i__11768_12714 = G__12763;
continue;
} else {
var child_struct_12764 = cljs.core.first(seq__11764_12758__$1);
if((!((child_struct_12764 == null)))){
if(typeof child_struct_12764 === 'string'){
var text_12765 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12765)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_12764)));
} else {
var children_12766 = shadow.dom.svg_node(child_struct_12764);
if(cljs.core.seq_QMARK_(children_12766)){
var seq__12005_12767 = cljs.core.seq(children_12766);
var chunk__12007_12768 = null;
var count__12008_12769 = (0);
var i__12009_12770 = (0);
while(true){
if((i__12009_12770 < count__12008_12769)){
var child_12771 = chunk__12007_12768.cljs$core$IIndexed$_nth$arity$2(null,i__12009_12770);
if(cljs.core.truth_(child_12771)){
node.appendChild(child_12771);


var G__12772 = seq__12005_12767;
var G__12773 = chunk__12007_12768;
var G__12774 = count__12008_12769;
var G__12776 = (i__12009_12770 + (1));
seq__12005_12767 = G__12772;
chunk__12007_12768 = G__12773;
count__12008_12769 = G__12774;
i__12009_12770 = G__12776;
continue;
} else {
var G__12782 = seq__12005_12767;
var G__12783 = chunk__12007_12768;
var G__12784 = count__12008_12769;
var G__12785 = (i__12009_12770 + (1));
seq__12005_12767 = G__12782;
chunk__12007_12768 = G__12783;
count__12008_12769 = G__12784;
i__12009_12770 = G__12785;
continue;
}
} else {
var temp__5825__auto___12787__$1 = cljs.core.seq(seq__12005_12767);
if(temp__5825__auto___12787__$1){
var seq__12005_12788__$1 = temp__5825__auto___12787__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12005_12788__$1)){
var c__5673__auto___12789 = cljs.core.chunk_first(seq__12005_12788__$1);
var G__12790 = cljs.core.chunk_rest(seq__12005_12788__$1);
var G__12791 = c__5673__auto___12789;
var G__12792 = cljs.core.count(c__5673__auto___12789);
var G__12793 = (0);
seq__12005_12767 = G__12790;
chunk__12007_12768 = G__12791;
count__12008_12769 = G__12792;
i__12009_12770 = G__12793;
continue;
} else {
var child_12794 = cljs.core.first(seq__12005_12788__$1);
if(cljs.core.truth_(child_12794)){
node.appendChild(child_12794);


var G__12797 = cljs.core.next(seq__12005_12788__$1);
var G__12798 = null;
var G__12799 = (0);
var G__12800 = (0);
seq__12005_12767 = G__12797;
chunk__12007_12768 = G__12798;
count__12008_12769 = G__12799;
i__12009_12770 = G__12800;
continue;
} else {
var G__12801 = cljs.core.next(seq__12005_12788__$1);
var G__12802 = null;
var G__12803 = (0);
var G__12804 = (0);
seq__12005_12767 = G__12801;
chunk__12007_12768 = G__12802;
count__12008_12769 = G__12803;
i__12009_12770 = G__12804;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12766);
}
}


var G__12806 = cljs.core.next(seq__11764_12758__$1);
var G__12807 = null;
var G__12808 = (0);
var G__12809 = (0);
seq__11764_12711 = G__12806;
chunk__11766_12712 = G__12807;
count__11767_12713 = G__12808;
i__11768_12714 = G__12809;
continue;
} else {
var G__12810 = cljs.core.next(seq__11764_12758__$1);
var G__12811 = null;
var G__12812 = (0);
var G__12813 = (0);
seq__11764_12711 = G__12810;
chunk__11766_12712 = G__12811;
count__11767_12713 = G__12812;
i__11768_12714 = G__12813;
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
var args__5882__auto__ = [];
var len__5876__auto___12816 = arguments.length;
var i__5877__auto___12817 = (0);
while(true){
if((i__5877__auto___12817 < len__5876__auto___12816)){
args__5882__auto__.push((arguments[i__5877__auto___12817]));

var G__12820 = (i__5877__auto___12817 + (1));
i__5877__auto___12817 = G__12820;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12092){
var G__12093 = cljs.core.first(seq12092);
var seq12092__$1 = cljs.core.next(seq12092);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12093,seq12092__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
