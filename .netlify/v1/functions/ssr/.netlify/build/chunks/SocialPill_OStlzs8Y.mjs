import { c as createComponent, r as renderTemplate, a as addAttribute, e as createAstro, m as maybeRenderHead, f as renderSlot } from './astro/server_g7NCrqTr.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                             */

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Bonilla/Desktop/kevin-bonilla/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$SocialPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SocialPill;
  const { url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="border-white/10 px-6 py-2 font-bold text-white rounded-lg border hover:bg-white/10 duration-200 transition-all flex justify-center items-center gap-3"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/Bonilla/Desktop/kevin-bonilla/src/components/ui/SocialPill.astro", void 0);

export { $$ViewTransitions as $, $$SocialPill as a };
