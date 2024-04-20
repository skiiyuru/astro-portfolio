/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderSlot, j as renderComponent, h as addAttribute, s as spreadAttributes, u as unescapeHTML, k as Fragment, l as renderHead, A as AstroError, n as UnknownContentCollectionError, o as renderUniqueStylesheet, p as renderScriptElement, q as createHeadAndContent } from '../astro_DANpytN0.mjs';
import 'kleur/colors';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { getIconData, iconToSVG } from '@iconify/utils';
import 'clsx';
import { $ as $$Image } from './generic_DsLMu7I9.mjs';

const $$Astro$d = createAstro("https://stargazers.club");
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Container;
  return renderTemplate`${maybeRenderHead()}<div class="border-b-2"> <div class="container"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/layouts/Container.astro", void 0);

const $$Astro$c = createAstro("https://stargazers.club");
const $$Heading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Heading;
  const styles = {
    h1: "text-3xl lg:text-5xl font-display",
    h2: "text-2xl lg:text-4xl font-bold",
    h3: "text-xl lg:text-3xl font-display font-semibold",
    h4: "text-xl lg:text-2xl font-bold"
  };
  const { tagName, classes } = Astro2.props;
  const Tag = tagName;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": [styles[tagName], classes] }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/components/ui/Heading.astro", void 0);

const $$Astro$b = createAstro("https://stargazers.club");
const styles = {
  primary: `bg-zinc-950 hover:bg-zinc-500
  border-4 border-transparent hover:border-zinc-500
  text-white`,
  secondary: `border-4 border-zinc-950 hover:border-zinc-500
  text-zinc-950 hover:text-zinc-500
  bg-white`,
  badge: " border-2 border-zinc-950  font-bold hover:border-zinc-500 hover:text-zinc-500"
};
const $$ButtonLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ButtonLink;
  const { href, variant = "primary", ...otherProps } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(["py-1 px-4 w-fit font-semibold", styles[variant]], "class:list")}${spreadAttributes(otherProps)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/components/ui/ButtonLink.astro", void 0);

const $$Astro$a = createAstro("https://stargazers.club");
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ContactForm;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="contact-form" aria-label="Contact Form" class="py-10 flex justify-center"> <form id="contact-form" class="p-4 grid gap-4 border-4 md:w-4/5 lg:w-2/5"> <div class="grid gap-1.5"> ${renderComponent($$result2, "Heading", $$Heading, { "tagName": "h1" }, { "default": ($$result3) => renderTemplate`Let's Connect!` })} <p>Reach out below for inquiries, quotes or collaborations.</p> </div> <div class="grid gap-1.5"> <label for="name">First name</label> <input required type="text" id="name" name="name" placeholder="e.g. Stephen" class="border-2 rounded-none p-2"> </div> <div class="grid gap-1.5"> <label for="email">Email</label> <input required type="email" id="email" name="email" placeholder="e.g. hi@mail.com" class="border-2 rounded-none p-2"> </div> <button type="submit"${addAttribute(["py-1 px-4 w-fit font-semibold", styles.primary], "class:list")}>Contact Me</button> <p id="message" class="font-bold"></p> </form> </section> ` })} `;
}, "C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/components/ContactForm.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1713645413,"icons":{"award":{"body":"<path fill=\"currentColor\" d=\"M18 4V2H6v2H1v5h1v2h1v1h1v1h1v1h1v1h3v1h2v3H7v3h10v-3h-4v-3h2v-1h3v-1h1v-1h1v-1h1v-1h1V9h1V4h-5ZM8 13H6v-1H5v-1H4V9H3V6h2v1h1v2h1v3h1v1Zm0-4V4h8v5h-1v3h-1v2h-4v-2H9V9H8Zm12 0v2h-1v1h-1v1h-2v-1h1v-2h1V7h1V6h2v3h-1Z\"/>"},"close":{"body":"<path fill=\"currentColor\" d=\"m12 10.587 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.415 1.414-4.95-4.95-4.949 4.95-1.414-1.415 4.95-4.95-4.95-4.95L7.05 5.638z\"/>"},"css":{"body":"<path fill=\"currentColor\" d=\"M1.75 0h17.5l-1.592 17.97L10.481 20l-7.138-2.032L1.75 0Zm14.242 3.678L5.008 3.675l.178 2.185 8.437.002-.212 2.263H7.878l.2 2.144h5.151l-.305 2.936-2.425.67-2.463-.675-.157-1.758H5.704l.242 3.212 4.554 1.42 4.477-1.276 1.015-11.12Z\"/>","width":21,"height":20},"design":{"body":"<path fill=\"currentColor\" d=\"M19 11v-1h1V9h1V8h1V7h1V4h-1V3h-1V2h-1V1h-3v1h-1v1h-1v1h-1v1h-1v1h-2V5h-1V4H9V3H8V2H7V1H5v1H4v1H3v1H2v1H1v2h1v1h1v1h1v1h1v1h1v2H5v1H4v1H3v1H2v1H1v6h6v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-2h-1v-1h-1v-1h-1v-1h-1v-1h-1v-2h1ZM7 10V9H6V8H5V7H4V5h1V4h2v1h1v1H7v1h1v1h1V7h1v2H9v1H7Zm6 3v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H3v-3h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1v1h1v1h1v1h-1v1h-1v1h-1v1h-1Zm6 3v1h1v2h-1v1h-2v-1h-1v-1h-1v-1h-1v-2h1v-1h2v1h-1v1h1v1h1v-1h1Zm-2-9V6h-1V5h1V4h1V3h1v1h1v1h1v1h-1v1h-1v1h-1V7h-1Z\"/>"},"external-link":{"body":"<g fill=\"currentColor\"><path d=\"M20 15v7h-1v1H2v-1H1V5h1V4h9v2H3v15h15v-6h2Z\"/><path d=\"M23 1v8h-2V5h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H7v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h-4V1h8Z\"/></g>"},"face":{"body":"<path fill=\"currentColor\" d=\"M251.47 19.188c-38.454 1.225-74.12 17.995-102.876 44.874h143.25L251.5 19.188zM277 20.625l106.156 118.03a9.007 9.007 0 0 1 .656.814h31.625C389.93 75.593 337.993 29.355 277 20.624zM131.594 82.063c-13.968 16.764-25.626 36.19-34.344 57.406h262.406L308.03 82.062H131.595zm290.125 75.124a9 9 0 0 1-2.314.282H92.594a9 9 0 0 1-1.844-.157 234.927 234.927 0 0 0-6.156 23.53c10.116-3.31 20.786-4.79 30.562-4.78 28.234.03 58.968 1.987 82.875 12.5 8.163 3.59 15.634 8.29 21.626 14.437h72.688c5.992-6.146 13.463-10.848 21.625-14.438 23.906-10.512 54.64-12.47 82.874-12.5 9.866-.01 20.644 1.5 30.844 4.875a236.45 236.45 0 0 0-5.97-23.75zm-303.25 36.875c-7.975.024-14.797.522-19.157 1.594-12.054 36.836-.837 77.202 8.218 112.72.656.762 11.178 4.697 19.282 4.53-7.954-23.88 13.606-98.775 35.344-115.53-13.86-2.1-30.398-3.353-43.687-3.314m271.436.063c-21.518.234-46.257 2.96-58.812 7.28-12.053 36.837-1.15 70.11 7.906 105.626.655.765 11.052 5.23 19.156 5.064-7.954-23.882 14.262-101.213 36-117.97-1.402-.006-2.814-.015-4.25 0m-156.375 38.78c.71 6.47.392 13.46-1.03 20.907-2.746 14.383-7.356 26.488-13.344 36.5h73.688c-5.988-10.012-10.598-22.117-13.344-36.5-1.422-7.447-1.74-14.438-1.03-20.906h-44.94zm-28.81 75.407a76.108 76.108 0 0 1-11.282 8.72c-18.483 11.666-40 14.714-59.844 14.343-16.54-.31-30.828-4.272-42.78-10.72 3.945 15.8 8.843 30.875 14.624 45.064h301.125c5.777-14.182 10.68-29.272 14.625-45.064-11.954 6.447-26.243 10.41-42.782 10.72-19.844.37-41.36-2.678-59.844-14.345a75.833 75.833 0 0 1-11.28-8.717H204.718zm-91.282 75.407c5.733 11.796 12.095 22.846 19 33.03 6.078 8.966 12.546 17.27 19.375 24.813a9 9 0 0 1 2.718-.407h202.94a9 9 0 0 1 2.717.375c6.823-7.537 13.3-15.82 19.375-24.78 6.905-10.184 13.267-21.234 19-33.03zm94.718 18.842a9 9 0 0 1 .625 0h94.44a9 9 0 1 1 0 18h-94.44a9.005 9.005 0 0 1-.624-18zM170 459.156c25.64 21.635 54.99 33.72 86 33.72 31.01 0 60.36-12.085 86-33.72z\"/>","width":512,"height":512},"github":{"body":"<path fill=\"currentColor\" d=\"M23 9v6h-1v2h-1v2h-1v1h-1v1h-1v1h-2v1h-1v-5h-1v-1h1v-1h2v-1h1v-1h1V9h-1V6h-2v1h-1v1h-1V7h-4v1H9V7H8V6H6v3H5v5h1v1h1v1h2v2H7v-1H6v-1H4v1h1v2h1v1h3v3H8v-1H6v-1H5v-1H4v-1H3v-2H2v-2H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h2v1h1v1h1v2h1v2h1Z\"/>"},"html":{"body":"<path fill=\"currentColor\" d=\"M1.75 0h17.5l-1.592 17.97L10.481 20l-7.137-2.032L1.75 0Zm5.86 8.125L7.415 5.86l8.382.002.192-2.184-10.98-.003.582 6.675h7.605l-.272 2.855-2.425.67-2.463-.675-.156-1.758H5.707l.275 3.476 4.518 1.208 4.483-1.203.62-6.797-7.994-.001Z\"/>","width":21,"height":20},"javascript":{"body":"<path fill=\"currentColor\" d=\"M0 32v448h448V32zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6\"/>","width":448,"height":512},"linkedin":{"body":"<path fill=\"currentColor\" d=\"M22 2V1H2v1H1v20h1v1h20v-1h1V2h-1Zm-9 10v8h-3V9h3v1h1V9h4v1h1v10h-3v-8h-3ZM4 8V5h3v3H4Zm3 1v11H4V9h3Z\"/>"},"memory-cube":{"body":"<path fill=\"currentColor\" d=\"M12 21h-2v-1H8v-1H6v-1H4v-1H2V5h2V4h2V3h2V2h2V1h2v1h2v1h2v1h2v1h2v12h-2v1h-2v1h-2v1h-2m0-10V9h2V8h2V7h2V6h-2V5h-2V4h-2V3h-2v1H8v1H6v1H4v1h2v1h2v1h2v1m0 8v-7H8v-1H6V9H4v7h2v1h2v1m6 0v-1h2v-1h2V9h-2v1h-2v1h-2v7Z\"/>","width":22,"height":22},"react":{"body":"<g fill=\"none\"><g clip-path=\"url(#a)\"><path fill=\"currentColor\" d=\"M12.358 10.003a1.863 1.863 0 1 1-3.726 0 1.863 1.863 0 0 1 3.726 0Zm2.207-8.908c-1.122 0-2.59.8-4.073 2.185C9.008 1.903 7.54 1.112 6.419 1.112a1.83 1.83 0 0 0-.921.231c-1.146.661-1.403 2.72-.811 5.305C2.15 7.43.5 8.683.5 10.003c0 1.325 1.658 2.581 4.203 3.359-.587 2.594-.325 4.656.823 5.316.267.156.575.23.918.23 1.121 0 2.59-.8 4.074-2.187C12 18.099 13.469 18.89 14.59 18.89c.342 0 .652-.075.922-.23 1.145-.66 1.402-2.718.81-5.303 2.528-.777 4.178-2.032 4.178-3.354 0-1.325-1.658-2.58-4.203-3.36.587-2.591.325-4.655-.823-5.316a1.803 1.803 0 0 0-.909-.232Zm-.004.908v.005c.187 0 .338.037.465.106.555.319.796 1.53.608 3.087-.045.383-.118.787-.208 1.2a19.563 19.563 0 0 0-2.59-.445 19.916 19.916 0 0 0-1.695-2.04c1.326-1.233 2.572-1.91 3.42-1.912Zm-8.142.017c.844 0 2.095.673 3.425 1.9-.571.6-1.141 1.28-1.683 2.035-.874.09-1.741.239-2.594.448-.09-.39-.16-.785-.212-1.183-.192-1.557.045-2.767.595-3.09.158-.074.333-.106.47-.11Zm4.069 2.542c.379.39.758.826 1.133 1.303a24.673 24.673 0 0 0-1.121-.028c-.383 0-.762.008-1.133.028a15.65 15.65 0 0 1 1.12-1.303ZM10.5 6.75c.617 0 1.23.028 1.835.078a22.018 22.018 0 0 1 1.834 3.171 22.664 22.664 0 0 1-.844 1.625 21.23 21.23 0 0 1-.983 1.558 21.375 21.375 0 0 1-3.677.005 22.22 22.22 0 0 1-.986-1.55 20.892 20.892 0 0 1-.848-1.622c.257-.555.539-1.098.844-1.628.317-.55.644-1.072.983-1.557a21.037 21.037 0 0 1 1.842-.082v.002Zm-3.03.212a22.259 22.259 0 0 0-1.115 1.945 17.259 17.259 0 0 1-.563-1.623 20.348 20.348 0 0 1 1.679-.322Zm6.05 0c.58.086 1.138.191 1.673.322a17.88 17.88 0 0 1-.55 1.611 21.634 21.634 0 0 0-1.121-1.933h-.001Zm2.553.562c.404.125.787.264 1.146.415 1.444.617 2.377 1.424 2.377 2.063-.004.64-.938 1.45-2.381 2.063-.35.15-.733.285-1.13.41a19.973 19.973 0 0 0-.916-2.482c.375-.848.675-1.675.904-2.47v.001Zm-11.162.004c.232.8.537 1.63.917 2.483a19.28 19.28 0 0 0-.905 2.47 11.822 11.822 0 0 1-1.142-.417c-1.444-.614-2.377-1.421-2.377-2.062 0-.64.934-1.451 2.377-2.063.35-.15.733-.285 1.13-.411Zm9.732 3.566c.22.548.408 1.094.563 1.624-.534.13-1.097.241-1.68.325.406-.63.778-1.28 1.117-1.949Zm-8.288.017a20.108 20.108 0 0 0 1.121 1.932 18.356 18.356 0 0 1-1.672-.322c.15-.525.338-1.069.55-1.611h.001Zm9.078 2.489c.094.41.167.807.212 1.186.192 1.557-.045 2.766-.595 3.09a.896.896 0 0 1-.47.107c-.842 0-2.094-.673-3.424-1.9.571-.6 1.141-1.28 1.683-2.034a18.995 18.995 0 0 0 2.594-.449Zm-9.858.008c.8.195 1.672.346 2.59.444.55.754 1.12 1.439 1.695 2.038-1.33 1.236-2.577 1.913-3.425 1.913a.987.987 0 0 1-.46-.11c-.556-.317-.797-1.529-.61-3.086a12.5 12.5 0 0 1 .21-1.199Zm3.8.534c.367.016.742.028 1.12.028.384 0 .763-.008 1.134-.028-.367.476-.746.912-1.12 1.304-.38-.392-.759-.828-1.134-1.304Z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M.5 0h20v20H.5z\"/></clipPath></defs></g>","width":21,"height":20},"speed":{"body":"<path fill=\"currentColor\" d=\"M14 10V6h1V3h1V1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v1h7v4H9v3H8v2h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h-7Zm4 2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-5H6v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1v5h5v1Z\"/>"},"tailwind":{"body":"<g fill=\"none\"><g clip-path=\"url(#a)\"><path fill=\"currentColor\" d=\"M10.501 4c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.76.19 1.304.742 1.907 1.353.98.995 2.115 2.147 4.593 2.147 2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.76-.19-1.304-.742-1.907-1.353C14.114 5.152 12.98 4 10.501 4Zm-5 6c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.76.19 1.304.742 1.907 1.353C6.888 14.848 8.023 16 10.5 16c2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.76-.19-1.304-.742-1.907-1.353C9.114 11.152 7.98 10 5.501 10Z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M.5 0h20v20H.5z\"/></clipPath></defs></g>","width":21,"height":20},"twitter":{"body":"<path fill=\"currentColor\" d=\"M15.5 10V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h-3v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2V7h-1V6h-1V4h-1V3h-1V2h-7v1h1v1h1v1h1v2h1v1h1v2h1v1h1v2h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h3v-1h1v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v2h1v1h1v1h7v-1h-1v-1h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h1Zm0 4v1h1v2h1v1h1v2h-3v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-1h-1v-2h-1V9h-1V7h-1V6h-1V4h3v1h1v2h1v1h1v2h1v1h1v1h1v2h1Z\"/>"},"vite":{"body":"<g fill=\"none\"><g clip-path=\"url(#a)\"><path fill=\"currentColor\" d=\"m7.405 8.815.427-7.214a.255.255 0 0 1 .205-.235L14.981.005a.255.255 0 0 1 .294.32l-1.298 4.503a.255.255 0 0 0 .293.321l1.99-.383a.255.255 0 0 1 .277.365l-5.659 11.292-.102.158a.244.244 0 0 1-.21.117c-.148 0-.292-.127-.254-.308l.912-4.417a.254.254 0 0 0-.323-.296l-1.194.362a.255.255 0 0 1-.325-.295l.575-2.812a.255.255 0 0 0-.308-.3l-1.933.446a.255.255 0 0 1-.312-.263h.001Zm12.48-6.605-4.982.907-.453 1.572 1.73-.333a.667.667 0 0 1 .7.307.667.667 0 0 1 .03.653l-5.66 11.292-.01.021-.013.02-.102.158a.669.669 0 0 1-1.088.056.667.667 0 0 1-.134-.558l.858-4.15-.934.283a.674.674 0 0 1-.854-.777l.525-2.567-1.689.39a.673.673 0 0 1-.82-.694l.323-5.475-6.2-1.108a.51.51 0 0 0-.533.755l9.571 16.78a.51.51 0 0 0 .888-.003L20.422 2.96a.509.509 0 0 0-.537-.75Z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M.5 0h20v20H.5z\"/></clipPath></defs></g>","width":21,"height":20}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$9 = createAstro("https://stargazers.club");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$8 = createAstro("https://stargazers.club");
const $$NavLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { href, icon, title, classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a class="relative group"${addAttribute(href, "href")}${addAttribute(icon && title, "aria-label")}> ${icon ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "class:list": ["size-14 hover:text-zinc-500", classes], "name": icon, "aria-hidden": "true" })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span class="font-semibold text-2xl font-display">${title}</span> <span class="absolute -bottom-1 left-0 w-0 h-2 bg-zinc-700 transition-all group-hover:w-full"></span> ` })}`} </a> </li>`;
}, "C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/components/ui/NavLink.astro", void 0);

const $$Astro$7 = createAstro("https://stargazers.club");
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Nav;
  const navData = [
    {
      title: "Projects",
      href: "/projects"
    },
    {
      title: "Home",
      href: "/",
      icon: "memory-cube"
    },
    {
      title: "Writings",
      href: "/blog"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="flex justify-center border border-b-2 p-2"> <ul class="flex items-center gap-4"> ${navData.map((item) => renderTemplate`${renderComponent($$result, "NavLink", $$NavLink, { "icon": item.icon, "href": item.href, "title": item.title })}`)} </ul> </nav>`;
}, "C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/components/Nav.astro", void 0);

const baseData = {
  title: "Stephen Kiiyuru Portfolio Site",
  description: `Welcome to my portfolio site!
   I'm a Front End Engineer obsessed
   with immersive experiences.
  `
};
const socialData = [
  {
    href: "https://github.com/skiiyuru",
    icon: "github",
    title: "Github"
  },
  {
    href: "https://www.linkedin.com/in/skiiyuru/",
    icon: "linkedin",
    title: "Linked In"
  },
  {
    href: "https://twitter.com/snkiiyuru",
    icon: "twitter",
    title: "Twitter"
  }
];

const $$Astro$6 = createAstro("https://stargazers.club");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title = baseData.title, description = baseData.description } = Astro2.props;
  return renderTemplate`<head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/memory-cube.svg"><link rel="sitemap" href="/sitemap-index.xml"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><title>${title}</title>${renderHead()}</head>`;
}, "C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/layouts/BaseHead.astro", void 0);

const $$Astro$5 = createAstro("https://stargazers.club");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="py-10 container"> <div class="flex justify-between items-center gap-2"> <p>
&copy; <span id="copyright">${(/* @__PURE__ */ new Date()).getFullYear()}</span>
Stephen Kiiyuru. All rights reserved.
</p> <ul class="flex gap-4"> ${socialData.map((item) => renderTemplate`${renderComponent($$result, "NavLink", $$NavLink, { "href": item.href, "title": item.title, "icon": item.icon, "classes": "size-8" })}`)} </ul> </div> </footer> `;
}, "C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/components/Footer.astro", void 0);

const $$Astro$4 = createAstro("https://stargazers.club");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "BaseHead", $$BaseHead, { ...Astro2.props })}${maybeRenderHead()}<body class="text-zinc-950"> ${renderComponent($$result, "Nav", $$Nav, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/layouts/BaseLayout.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://stargazers.club", "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function")
      return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
function createGetEntries(getEntry) {
  return async function getEntries(entries) {
    return Promise.all(entries.map((e) => getEntry(e)));
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/bring-out-your-inner-artist.md": () => import('../bring-out-your-inner-artist_VYD0bwFl.mjs'),"/src/content/posts/five-challenges-to-frontend-web-development.md": () => import('../five-challenges-to-frontend-web-development_CZTWa004.mjs'),"/src/content/posts/five-quick-javascript-project-ideas.md": () => import('../five-quick-javascript-project-ideas_B_YNhDBG.mjs'),"/src/content/posts/how-to-stop-worrying-about-keeping-up.md": () => import('../how-to-stop-worrying-about-keeping-up_DJhEsiKx.mjs'),"/src/content/posts/learn-the-basics-of-html.md": () => import('../learn-the-basics-of-html_DkE_O8hB.mjs'),"/src/content/posts/rethinking-imla.md": () => import('../rethinking-imla_BA0ZFg8q.mjs'),"/src/content/posts/retro-gaming-and-web-design.md": () => import('../retro-gaming-and-web-design_D7alYCyH.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/features/award-winning.yaml": () => import('../award-winning_k9l4JqnT.mjs'),"/src/content/features/custom-designed.yaml": () => import('../custom-designed_BQs_-jO2.mjs'),"/src/content/features/snappy-fast.yaml": () => import('../snappy-fast_CAWOFD2R.mjs'),"/src/content/projects/dog-vision.yaml": () => import('../dog-vision_BH9KMUNq.mjs'),"/src/content/projects/facemask.yaml": () => import('../facemask_Bi7KnCB9.mjs'),"/src/content/projects/imla.yaml": () => import('../imla_BCipFPyI.mjs'),"/src/content/projects/marble-race.yaml": () => import('../marble-race_CAsSm1Cp.mjs'),"/src/content/projects/portfolio.yaml": () => import('../portfolio_Mdt7_PGR.mjs'),"/src/content/tools/css.yaml": () => import('../css_1chaRcTX.mjs'),"/src/content/tools/html.yaml": () => import('../html_TSQ7fIpg.mjs'),"/src/content/tools/javascript.yaml": () => import('../javascript_BakS7cwn.mjs'),"/src/content/tools/react.yaml": () => import('../react_DmTpF4Mf.mjs'),"/src/content/tools/tailwind.yaml": () => import('../tailwind_CtPFwI0K.mjs'),"/src/content/tools/vite.yaml": () => import('../vite_9QESFMMn.mjs')});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"features":{"type":"data","entries":{"award-winning":"/src/content/features/award-winning.yaml","custom-designed":"/src/content/features/custom-designed.yaml","snappy-fast":"/src/content/features/snappy-fast.yaml"}},"tools":{"type":"data","entries":{"css":"/src/content/tools/css.yaml","html":"/src/content/tools/html.yaml","javascript":"/src/content/tools/javascript.yaml","react":"/src/content/tools/react.yaml","tailwind":"/src/content/tools/tailwind.yaml","vite":"/src/content/tools/vite.yaml"}},"projects":{"type":"data","entries":{"dog-vision":"/src/content/projects/dog-vision.yaml","facemask":"/src/content/projects/facemask.yaml","imla":"/src/content/projects/imla.yaml","marble-race":"/src/content/projects/marble-race.yaml","portfolio":"/src/content/projects/portfolio.yaml"}},"posts":{"type":"content","entries":{"five-challenges-to-frontend-web-development":"/src/content/posts/five-challenges-to-frontend-web-development.md","bring-out-your-inner-artist":"/src/content/posts/bring-out-your-inner-artist.md","how-to-stop-worrying-about-keeping-up":"/src/content/posts/how-to-stop-worrying-about-keeping-up.md","learn-the-basics-of-html":"/src/content/posts/learn-the-basics-of-html.md","five-quick-javascript-project-ideas":"/src/content/posts/five-quick-javascript-project-ideas.md","retro-gaming-and-web-design":"/src/content/posts/retro-gaming-and-web-design.md","rethinking-imla":"/src/content/posts/rethinking-imla.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/bring-out-your-inner-artist.md": () => import('../bring-out-your-inner-artist_Dg14mxdn.mjs'),"/src/content/posts/five-challenges-to-frontend-web-development.md": () => import('../five-challenges-to-frontend-web-development_DJtnP1xe.mjs'),"/src/content/posts/five-quick-javascript-project-ideas.md": () => import('../five-quick-javascript-project-ideas_Bn-drI7R.mjs'),"/src/content/posts/how-to-stop-worrying-about-keeping-up.md": () => import('../how-to-stop-worrying-about-keeping-up_H2pGL1Dr.mjs'),"/src/content/posts/learn-the-basics-of-html.md": () => import('../learn-the-basics-of-html_BNcJap8C.mjs'),"/src/content/posts/rethinking-imla.md": () => import('../rethinking-imla_zMmBl0qZ.mjs'),"/src/content/posts/retro-gaming-and-web-design.md": () => import('../retro-gaming-and-web-design_CI6P9yEZ.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntries = createGetEntries(getEntry);

const $$Astro$3 = createAstro("https://stargazers.club");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<header aria-label="Introduction to Stephen" class="flex flex-col gap-4 items-center py-10"> ${renderComponent($$result, "Heading", $$Heading, { "tagName": "h1" }, { "default": ($$result2) => renderTemplate`My Projects` })} <p class="text-center md:w-4/5 lg:w-2/5">
Here are some recent websites and apps you can explore for yourself!
</p> </header>`;
}, "C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/components/projects/Hero.astro", void 0);

const $$Astro$2 = createAstro("https://stargazers.club");
const $$ProjectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { data } = Astro2.props;
  const { title, url, icons, thumbnail } = data;
  const iconData = await getEntries(icons);
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(title, "aria-label")} class="border-4 hover:shadow-lg"> <a${addAttribute(url, "href")} class="flex flex-col"> ${renderComponent($$result, "Image", $$Image, { "src": thumbnail, "class": "w-100", "alt": title, "format": "avif" })} <div class="p-4"> <div class="flex gap-3 items-center pb-2"> ${renderComponent($$result, "Heading", $$Heading, { "tagName": "h4" }, { "default": ($$result2) => renderTemplate`${title}` })} ${renderComponent($$result, "Icon", $$Icon, { "name": "external-link", "class": "size-4" })} </div> <ul class="flex gap-2"> ${iconData.map(({ data: data2 }) => renderTemplate`<li> ${renderComponent($$result, "Icon", $$Icon, { "name": data2.icon, "title": data2.icon, "aria-label": data2.icon })} </li>`)} </ul> </div> </a> </article>`;
}, "C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/components/ui/ProjectCard.astro", void 0);

const $$Astro$1 = createAstro("https://stargazers.club");
const $$Badge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Badge;
  const { pressed, ...otherProps } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button aria-label="Remove"${addAttribute([
    "relative inline-block border-2 border-zinc-950 px-2 py-1 text-sm font-medium hover:border-zinc-500 hover:text-zinc-500",
    pressed && "bg-zinc-950 text-white"
  ], "class:list")}${spreadAttributes(otherProps)}> ${renderSlot($$result, $$slots["default"])} ${pressed && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "close", "aria-hidden": "true", "class": "size-5 bg-white text-zinc-950 border border-zinc-950 absolute top-0 right-0 inline-flex items-center justify-center p-1 text-sm transform translate-x-1/2 -translate-y-1/2" })}`} </button>`;
}, "C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/components/ui/Badge.astro", void 0);

function getSearchParamAsArray(url, key) {
  const params = url.searchParams.get(key);
  if (!params) {
    return [];
  }
  return params.split(",");
}

const $$Astro = createAstro("https://stargazers.club");
const prerender = false;
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  let projects = await getCollection("projects");
  const allTools = await getCollection("tools");
  const filters = getSearchParamAsArray(Astro2.url, "tools");
  if (filters.length > 0) {
    projects = projects.filter((project) => {
      const tools = project.data.icons.map((icon) => icon.id);
      return filters.some((filter) => tools.includes(filter));
    });
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Stephen Kiiyuru's Projects", "description": "Here are some recent projects I've done" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ${maybeRenderHead()}<section class="py-10 grid gap-4"> <div class="flex gap-4 flex-wrap items-center"> <p class="font-bold">FILTER BY TOOLS</p> ${filters.length > 0 && renderTemplate`${renderComponent($$result3, "Badge", $$Badge, { "id": "clear-all", "pressed": true, "aria-pressed": "true" }, { "default": ($$result4) => renderTemplate`
Clear All
` })}`} </div> <ul class="flex gap-4 flex-wrap items-center"> ${allTools.map(({ data, id }) => {
    const isPressed = filters.includes(id);
    return renderTemplate`${renderComponent($$result3, "Badge", $$Badge, { "data-tool": id, "aria-pressed": isPressed ? "true" : "false", "pressed": isPressed }, { "default": ($$result4) => renderTemplate`${data.title}` })}`;
  })} </ul> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center"> ${projects.map(({ data }) => renderTemplate`${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "data": data })}`)} </div> </section> ` })} ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} ` })} `;
}, "C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/pages/projects.astro", void 0);

const $$file = "C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/pages/projects.astro";
const $$url = "/projects";

const projects = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Heading as $, $$ButtonLink as a, $$Container as b, $$ContactForm as c, $$BaseLayout as d, $$Icon as e, $$ProjectCard as f, getCollection as g, projects as p };
