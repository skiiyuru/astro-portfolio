import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CUEsHT47.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_2R5hJU1L.mjs');
const _page1 = () => import('./chunks/404_CkwVlOzy.mjs');
const _page2 = () => import('./chunks/_slug__02Ot5JZG.mjs');
const _page3 = () => import('./chunks/_.._CQLOydck.mjs');
const _page4 = () => import('./chunks/projects_D0QTXuRu.mjs');
const _page5 = () => import('./chunks/index_76roce-b.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/blog/[slug].astro", _page2],
    ["src/pages/blog/[...page].astro", _page3],
    ["src/pages/projects.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "4dcc136e-ba17-47de-8267-c1fea3d2a230"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
