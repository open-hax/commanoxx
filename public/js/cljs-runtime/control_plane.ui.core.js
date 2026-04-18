goog.provide('control_plane.ui.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
var module$node_modules$$open_hax$uxx$dist$react$src$primitives$index=shadow.js.require("module$node_modules$$open_hax$uxx$dist$react$src$primitives$index", {});
if((typeof control_plane !== 'undefined') && (typeof control_plane.ui !== 'undefined') && (typeof control_plane.ui.core !== 'undefined') && (typeof control_plane.ui.core.state !== 'undefined')){
} else {
control_plane.ui.core.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"health","health",-295520649),null,new cljs.core.Keyword(null,"containers","containers",-2127048083),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pm2","pm2",558965668),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"loading","loading",-737050189),true], null));
}
control_plane.ui.core.App = (function control_plane$ui$core$App(){
var map__15292 = cljs.core.deref(control_plane.ui.core.state);
var map__15292__$1 = cljs.core.__destructure_map(map__15292);
var loading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15292__$1,new cljs.core.Keyword(null,"loading","loading",-737050189));
var health = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15292__$1,new cljs.core.Keyword(null,"health","health",-295520649));
var containers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15292__$1,new cljs.core.Keyword(null,"containers","containers",-2127048083));
var pm2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15292__$1,new cljs.core.Keyword(null,"pm2","pm2",558965668));
module$node_modules$react$index.useEffect((function (){
if(cljs.core.truth_(loading)){
control_plane.ui.api.fetch_all((function (h,c,p){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control_plane.ui.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"health","health",-295520649),h,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"containers","containers",-2127048083),c,new cljs.core.Keyword(null,"pm2","pm2",558965668),p,new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0));
}));
} else {
}

return null;
}),null);

if(cljs.core.truth_(loading)){
return module$node_modules$react$index.createElement("div",({"style": ({"display": "flex", "justify-content": "center", "align-items": "center", "height": "100vh"})}),module$node_modules$react$index.createElement(module$node_modules$$open_hax$uxx$dist$react$src$primitives$index.Spinner,({"size": "lg"})));
} else {
return module$node_modules$react$index.createElement(module$node_modules$$open_hax$uxx$dist$react$src$primitives$index.UxxThemeProvider,({"theme": "monokai"}),module$node_modules$react$index.createElement("div",({"style": ({"padding": "2rem"})}),module$node_modules$react$index.createElement(module$node_modules$$open_hax$uxx$dist$react$src$primitives$index.MetricTile,({"label": "Health", "value": (cljs.core.truth_(health)?"Healthy":"Unhealthy"), "variant": (cljs.core.truth_(health)?"success":"error")})),module$node_modules$react$index.createElement(module$node_modules$$open_hax$uxx$dist$react$src$primitives$index.MetricTile,({"label": "Containers", "value": (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(containers)))})),module$node_modules$react$index.createElement(module$node_modules$$open_hax$uxx$dist$react$src$primitives$index.MetricTile,({"label": "PM2", "value": (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(pm2)))}))));
}
});
control_plane.ui.core.mount_BANG_ = (function control_plane$ui$core$mount_BANG_(){
var root = module$node_modules$react_dom$client.createRoot(document.getElementById("root"));
return root.render(control_plane.ui.core.App());
});

//# sourceMappingURL=control_plane.ui.core.js.map
