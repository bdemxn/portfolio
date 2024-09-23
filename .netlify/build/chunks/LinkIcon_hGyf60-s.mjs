import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent, d as renderHead, f as renderSlot, e as createAstro, s as spreadAttributes } from './astro/server_g7NCrqTr.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$ViewTransitions } from './SocialPill_OStlzs8Y.mjs';
import 'clsx';
/* empty css                             */

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 bg-[#1C1C1C]/10 h-[3rem] p-1 backdrop-blur-lg z-50"> <nav class="flex justify-center text-xs font-inter font-semibold text-white md:gap-7 gap-4 mt-3"> <a href="/#experience" class="hover:text-blue-400 duration-200 transition-all">Experience</a> <a href="/#projects" class="hover:text-blue-400 duration-200 transition-all">Projects</a> <a href="/contactme" class="hover:text-blue-400 duration-200 transition-all">Contact me</a> </nav></header>`;
}, "C:/Users/Bonilla/Desktop/kevin-bonilla/src/components/ui/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="text-center footer text-white font-inter my-4 mt-[6rem]"> <p>Made with ❤ - Kevin Bonilla 2024</p> </footer>`;
}, "C:/Users/Bonilla/Desktop/kevin-bonilla/src/components/ui/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-[#1C1C1C]"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Bonilla/Desktop/kevin-bonilla/src/layouts/MainLayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Briefcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-briefcase-2" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z"></path> <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path> </svg>`;
}, "C:/Users/Bonilla/Desktop/kevin-bonilla/src/components/icons/Briefcase.astro", void 0);

const $$Astro = createAstro();
const $$LinkIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LinkIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 15l6 -6"></path> <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path> <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path> </svg>`;
}, "C:/Users/Bonilla/Desktop/kevin-bonilla/src/components/icons/LinkIcon.astro", void 0);

export { $$Briefcase as $, $$LinkIcon as a, $$MainLayout as b };
