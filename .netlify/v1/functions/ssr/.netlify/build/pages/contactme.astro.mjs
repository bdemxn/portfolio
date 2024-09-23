/* empty css                                     */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_g7NCrqTr.mjs';
import 'kleur/colors';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_62ZgtmMT.mjs';
import { $ as $$Briefcase, a as $$LinkIcon, b as $$MainLayout } from '../chunks/LinkIcon_hGyf60-s.mjs';
import { a as $$SocialPill } from '../chunks/SocialPill_OStlzs8Y.mjs';
export { renderers } from '../renderers.mjs';

const giphy = new Proxy({"src":"/_astro/giphy.xZG7yXPc.webp","width":400,"height":225,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Bonilla/Desktop/kevin-bonilla/public/img/giphy.webp";
							}
							
							return target[name];
						}
					});

const $$Contactme = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Alo? Is Kevin there?" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mt-28 border rounded-xl border-white/20 w-[300px] md:w-[700px] mx-auto px-2 pt-6 pb-2"> <section class="font-inter text-center"> ${renderComponent($$result2, "Image", $$Image, { "src": giphy, "alt": "alo", "class": "mx-auto mb-2" })} <p class="mb-10 text-white">
I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. If you have any questions, feedback, or just want to say hello, feel free to get in touch with me using the form below or through my social media channels.
</p> <div class="flex md:gap-x-2 md:my-2 md:justify-center flex-col md:flex-row gap-y-2"> ${renderComponent($$result2, "SocialPill", $$SocialPill, { "url": "mailto:kb1909zzz@gmail.com" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Briefcase", $$Briefcase, { "class": "stroke-white" })} <p>Send me an email</p> ` })} ${renderComponent($$result2, "SocialPill", $$SocialPill, { "url": "https://www.linkedin.com/in/kb1909zzz/" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "LinkIcon", $$LinkIcon, { "class": "stroke-white" })} <p>Let's connect</p> ` })} ${renderComponent($$result2, "SocialPill", $$SocialPill, { "url": "/" }, { "default": ($$result3) => renderTemplate`
Back to Homepage
` })} </div> </section> </main> ` })}`;
}, "C:/Users/Bonilla/Desktop/kevin-bonilla/src/pages/contactme.astro", void 0);

const $$file = "C:/Users/Bonilla/Desktop/kevin-bonilla/src/pages/contactme.astro";
const $$url = "/contactme";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contactme,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
