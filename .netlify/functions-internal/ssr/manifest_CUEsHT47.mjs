import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_DANpytN0.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CZ0TFQCk.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.qBzObCKR.js"},{"type":"external","value":"/_astro/page.CZ0TFQCk.js"}],"styles":[{"type":"external","src":"/_astro/_page_.B1Czoyto.css"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://stargazers.club","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/pages/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/pages/projects.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/components/home/Features.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/components/home/ProjectSection.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/components/ui/ProjectCard.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-manifest":"manifest_CUEsHT47.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_2R5hJU1L.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_CkwVlOzy.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"chunks/_slug__02Ot5JZG.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"chunks/_.._CQLOydck.mjs","\u0000@astro-page:src/pages/projects@_@astro":"chunks/projects_D0QTXuRu.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_76roce-b.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/posts/bring-out-your-inner-artist.md?astroContentCollectionEntry=true":"chunks/bring-out-your-inner-artist_VYD0bwFl.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/posts/five-challenges-to-frontend-web-development.md?astroContentCollectionEntry=true":"chunks/five-challenges-to-frontend-web-development_CZTWa004.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/posts/five-quick-javascript-project-ideas.md?astroContentCollectionEntry=true":"chunks/five-quick-javascript-project-ideas_B_YNhDBG.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/posts/how-to-stop-worrying-about-keeping-up.md?astroContentCollectionEntry=true":"chunks/how-to-stop-worrying-about-keeping-up_DJhEsiKx.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/posts/learn-the-basics-of-html.md?astroContentCollectionEntry=true":"chunks/learn-the-basics-of-html_DkE_O8hB.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/posts/rethinking-imla.md?astroContentCollectionEntry=true":"chunks/rethinking-imla_BA0ZFg8q.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/posts/retro-gaming-and-web-design.md?astroContentCollectionEntry=true":"chunks/retro-gaming-and-web-design_D7alYCyH.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/features/award-winning.yaml?astroDataCollectionEntry=true":"chunks/award-winning_k9l4JqnT.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/features/custom-designed.yaml?astroDataCollectionEntry=true":"chunks/custom-designed_BQs_-jO2.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/features/snappy-fast.yaml?astroDataCollectionEntry=true":"chunks/snappy-fast_CAWOFD2R.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/projects/dog-vision.yaml?astroDataCollectionEntry=true":"chunks/dog-vision_BH9KMUNq.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/projects/facemask.yaml?astroDataCollectionEntry=true":"chunks/facemask_Bi7KnCB9.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/projects/imla.yaml?astroDataCollectionEntry=true":"chunks/imla_BCipFPyI.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/projects/marble-race.yaml?astroDataCollectionEntry=true":"chunks/marble-race_CAsSm1Cp.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/projects/portfolio.yaml?astroDataCollectionEntry=true":"chunks/portfolio_Mdt7_PGR.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/tools/css.yaml?astroDataCollectionEntry=true":"chunks/css_1chaRcTX.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/tools/html.yaml?astroDataCollectionEntry=true":"chunks/html_TSQ7fIpg.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/tools/javascript.yaml?astroDataCollectionEntry=true":"chunks/javascript_BakS7cwn.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/tools/react.yaml?astroDataCollectionEntry=true":"chunks/react_DmTpF4Mf.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/tools/tailwind.yaml?astroDataCollectionEntry=true":"chunks/tailwind_CtPFwI0K.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/tools/vite.yaml?astroDataCollectionEntry=true":"chunks/vite_9QESFMMn.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/posts/bring-out-your-inner-artist.md?astroPropagatedAssets":"chunks/bring-out-your-inner-artist_Dg14mxdn.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/posts/five-challenges-to-frontend-web-development.md?astroPropagatedAssets":"chunks/five-challenges-to-frontend-web-development_DJtnP1xe.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/posts/five-quick-javascript-project-ideas.md?astroPropagatedAssets":"chunks/five-quick-javascript-project-ideas_Bn-drI7R.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/posts/how-to-stop-worrying-about-keeping-up.md?astroPropagatedAssets":"chunks/how-to-stop-worrying-about-keeping-up_H2pGL1Dr.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/posts/learn-the-basics-of-html.md?astroPropagatedAssets":"chunks/learn-the-basics-of-html_BNcJap8C.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/posts/rethinking-imla.md?astroPropagatedAssets":"chunks/rethinking-imla_zMmBl0qZ.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/posts/retro-gaming-and-web-design.md?astroPropagatedAssets":"chunks/retro-gaming-and-web-design_CI6P9yEZ.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/posts/bring-out-your-inner-artist.md":"chunks/bring-out-your-inner-artist_B1--i6qL.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/posts/five-challenges-to-frontend-web-development.md":"chunks/five-challenges-to-frontend-web-development_BVrnUzG_.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/posts/five-quick-javascript-project-ideas.md":"chunks/five-quick-javascript-project-ideas_izd-nGfY.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/posts/how-to-stop-worrying-about-keeping-up.md":"chunks/how-to-stop-worrying-about-keeping-up_ieWHGEU9.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/posts/learn-the-basics-of-html.md":"chunks/learn-the-basics-of-html_Bnzs8ORN.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/posts/rethinking-imla.md":"chunks/rethinking-imla_DB8mnLtI.mjs","C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/posts/retro-gaming-and-web-design.md":"chunks/retro-gaming-and-web-design_BHKyJIBn.mjs","astro:scripts/page.js":"_astro/page.CZ0TFQCk.js","/astro/hoisted.js?q=2":"_astro/hoisted.Baw_JnMB.js","/astro/hoisted.js?q=0":"_astro/hoisted.qBzObCKR.js","/astro/hoisted.js?q=1":"_astro/hoisted.jc7B31Zf.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/smile.CAn8MiPB.png","/_astro/poppins-devanagari-400-normal.DXhQFdtL.woff2","/_astro/pixelify-sans-latin-ext-wght-normal.DEDzhmUG.woff2","/_astro/pixelify-sans-cyrillic-wght-normal.CPPz0Qvd.woff2","/_astro/pixelify-sans-latin-wght-normal.vdc2vUDH.woff2","/_astro/poppins-latin-400-normal.cpxAROuN.woff2","/_astro/poppins-latin-ext-400-normal.CZnfsGfc.woff2","/_astro/open-sans-hebrew-wght-normal.DrVQLkKb.woff2","/_astro/open-sans-cyrillic-ext-wght-normal.f7eF65bT.woff2","/_astro/open-sans-symbols-wght-normal.C2QAFfGS.woff2","/_astro/open-sans-math-wght-normal.cwLdES2L.woff2","/_astro/open-sans-vietnamese-wght-normal.0eckKRMD.woff2","/_astro/open-sans-greek-ext-wght-normal.Cs5KUPhG.woff2","/_astro/open-sans-greek-wght-normal.CtQ6sbau.woff2","/_astro/open-sans-cyrillic-wght-normal.Cw00GhOR.woff2","/_astro/open-sans-latin-ext-wght-normal.CrpOxvfM.woff2","/_astro/abril-fatface-latin-ext-400-normal.C5FI7UIy.woff2","/_astro/open-sans-latin-wght-normal.CYuRH5ug.woff2","/_astro/abril-fatface-latin-400-normal.Bld6cQVQ.woff2","/_astro/poppins-devanagari-400-normal.C8-_4xxD.woff","/_astro/poppins-latin-ext-400-normal.DdMv8PPD.woff","/_astro/poppins-latin-400-normal.B_rUbtde.woff","/_astro/abril-fatface-latin-ext-400-normal.CIwJmCNm.woff","/_astro/abril-fatface-latin-400-normal.Ma3PFmLR.woff","/_astro/bring-out-your-inner-artist.D0YwhTC2.jpg","/_astro/retro-gaming-and-web-design.CimbS2rX.jpg","/_astro/five-challenges-to-frontend-web-development.s9J_DgNB.jpg","/_astro/five-quick-javascript-project-ideas.CbQ-IYaf.jpg","/_astro/how-to-stop-worrying-about-keeping-up.Cm7Y3ZAp.jpg","/_astro/learn-the-basics-of-html.DzjQ9nnm.jpg","/_astro/imla.BEG0j3KO.png","/_astro/_page_.B1Czoyto.css","/favicon.svg","/memory-cube.svg","/_astro/hoisted.Baw_JnMB.js","/_astro/hoisted.jc7B31Zf.js","/_astro/hoisted.qBzObCKR.js","/_astro/page.CZ0TFQCk.js","/_astro/page.CZ0TFQCk.js","/404.html","/index.html"],"buildFormat":"directory"});

export { manifest };
