goog.provide('control_plane.ui.api');
control_plane.ui.api.API_BASE = "/api/v1";
control_plane.ui.api.fetch_json = (function control_plane$ui$api$fetch_json(endpoint){
return fetch((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(control_plane.ui.api.API_BASE)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(endpoint))).then((function (res){
return res.json();
}));
});
control_plane.ui.api.fetch_all = (function control_plane$ui$api$fetch_all(callback){
return Promise.all([control_plane.ui.api.fetch_json("/health"),control_plane.ui.api.fetch_json("/docker"),control_plane.ui.api.fetch_json("/pm2")]).then((function (results){
var h = (results[(0)]);
var c = (results[(1)]);
var p = (results[(2)]);
var G__15289 = h;
var G__15290 = (c["containers"]);
var G__15291 = (p["processes"]);
return (callback.cljs$core$IFn$_invoke$arity$3 ? callback.cljs$core$IFn$_invoke$arity$3(G__15289,G__15290,G__15291) : callback.call(null,G__15289,G__15290,G__15291));
}));
});

//# sourceMappingURL=control_plane.ui.api.js.map
