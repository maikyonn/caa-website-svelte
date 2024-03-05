export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["artmart_first.jpg","favicon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.TNMv-rRV.js","app":"_app/immutable/entry/app.DNnI-hKr.js","imports":["_app/immutable/entry/start.TNMv-rRV.js","_app/immutable/chunks/entry.B9zgMDpk.js","_app/immutable/chunks/runtime.DPct-Ydm.js","_app/immutable/entry/app.DNnI-hKr.js","_app/immutable/chunks/runtime.DPct-Ydm.js","_app/immutable/chunks/disclose-version.h_rUUzP8.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
