import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DANpytN0.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"rethinking-imla\">Rethinking Imla</h1>\n<ul>\n<li>Someone from KEMRI tried to find us on google but failes\n<ul>\n<li>SEO is really bad</li>\n</ul>\n</li>\n<li>They also wanted to use readily available information to present a case for affordability\n<ul>\n<li>Pricing page was okay but left more to be desired\n<ul>\n<li>Maybe have a cost calculator or invoice generator for people with volumes\n<ul>\n<li>For example this person had 6000 min in question but could not easily figure out the cost and they needed to present an invoice to their bosses</li>\n<li>Nvivo and Lumivero, on the other hand had something to cater for this need</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Long term goals\n<ul>\n<li>For SEO and brand building\n<ul>\n<li>Rebuild Imla using Astro</li>\n<li>Prehaps add a blog section “imla.io/blog” where content can be diverse\n<ul>\n<li>Technical writing\n<ul>\n<li>the dev team can write articles about problems they are solving in their day to day work</li>\n</ul>\n</li>\n<li>General writing\n<ul>\n<li>Daniel can write articles about how Imla can solve problems within different sectors in Kenya</li>\n<li>County governments</li>\n<li>Research firms etc</li>\n</ul>\n</li>\n<li>These articles can then be mentioned during conversations as credibility of the software and team behind it</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Share article with Kemri research department\n<ul>\n<li>Charges</li>\n<li>Success stories</li>\n<li>Dr. Nelly Mugo</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<hr>\n<p>I would also want to Rethink the Discovery Centre site with a similar approach especially for blogs. We could capture the stories, events and other activities related to it as content for the blog</p>\n<p>Such articles could give more credibility regarding the organization to parents and schools</p>\n<hr>\n<p><a href=\"http://DiscoveryLabs.dev\">DiscoveryLabs.dev</a> site with blog for technical writing</p>";

				const frontmatter = {"title":"Rethinking Imla","description":"Someone from KEMRI tried to find us on google but fails.","pubDate":"2024-04-05T00:00:00.000Z","image":"./images/retro-gaming-and-web-design.jpg"};
				const file = "C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/posts/rethinking-imla.md";
				const url = undefined;
				function rawContent() {
					return "\n# Rethinking Imla\n\n- Someone from KEMRI tried to find us on google but failes\n  - SEO is really bad\n- They also wanted to use readily available information to present a case for affordability\n  - Pricing page was okay but left more to be desired\n    - Maybe have a cost calculator or invoice generator for people with volumes\n      - For example this person had 6000 min in question but could not easily figure out the cost and they needed to present an invoice to their bosses\n      - Nvivo and Lumivero, on the other hand had something to cater for this need\n- Long term goals\n  - For SEO and brand building\n    - Rebuild Imla using Astro\n    - Prehaps add a blog section “imla.io/blog” where content can be diverse\n      - Technical writing\n        - the dev team can write articles about problems they are solving in their day to day work\n      - General writing\n        - Daniel can write articles about how Imla can solve problems within different sectors in Kenya\n        - County governments\n        - Research firms etc\n      - These articles can then be mentioned during conversations as credibility of the software and team behind it\n  - Share article with Kemri research department\n    - Charges\n    - Success stories\n    - Dr. Nelly Mugo\n\n---\n\nI would also want to Rethink the Discovery Centre site with a similar approach especially for blogs. We could capture the stories, events and other activities related to it as content for the blog\n\nSuch articles could give more credibility regarding the organization to parents and schools\n\n---\n\n[DiscoveryLabs.dev](http://DiscoveryLabs.dev) site with blog for technical writing\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"rethinking-imla","text":"Rethinking Imla"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
