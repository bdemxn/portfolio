/* empty css                                     */
import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderComponent, d as renderHead, e as createAstro } from '../chunks/astro/server_g7NCrqTr.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$ViewTransitions, a as $$SocialPill } from '../chunks/SocialPill_OStlzs8Y.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Oopss! :/</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-[#1C1C1C]"> <main class="font-inter md:mx-auto mx-2 md:w-[1000px] md:my-28"> <section class="my-[15rem] md:my-[20rem] text-white text-center"> <p class="text-2xl font-extrabold">Page not found</p> <p class="mb-10">Sorry, something went wrong :/</p> ${renderComponent($$result, "SocialPill", $$SocialPill, { "url": "/" }, { "default": ($$result2) => renderTemplate`
Back to Homepage
` })} </section> </main> </body></html>`;
}, "C:/Users/Bonilla/Desktop/kevin-bonilla/src/pages/404.astro", void 0);

const $$file = "C:/Users/Bonilla/Desktop/kevin-bonilla/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
