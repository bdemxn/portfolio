/* empty css                                     */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, e as createAstro, b as renderComponent } from '../chunks/astro/server_g7NCrqTr.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$LinkIcon, $ as $$Briefcase, b as $$MainLayout } from '../chunks/LinkIcon_hGyf60-s.mjs';
import { a as $$SocialPill } from '../chunks/SocialPill_OStlzs8Y.mjs';
import 'clsx';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_62ZgtmMT.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$a = createAstro();
const $$Upwork = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Upwork;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-upwork" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 7v5a3 3 0 0 0 6 0v-5h1l4 6c.824 1.319 1.945 2 3.5 2a3.5 3.5 0 0 0 0 -7c-2.027 0 -3.137 1 -3.5 3c-.242 1.33 -.908 4 -2 8"></path> </svg>`;
}, "C:/Users/Bonilla/Desktop/kevin-bonilla/src/components/icons/Upwork.astro", void 0);

const $$Astro$9 = createAstro();
const $$GithubIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$GithubIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path> </svg>`;
}, "C:/Users/Bonilla/Desktop/kevin-bonilla/src/components/icons/GithubIcon.astro", void 0);

const $$Astro$8 = createAstro();
const $$WorldIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$WorldIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path> <path d="M3.6 9h16.8"></path> <path d="M3.6 15h16.8"></path> <path d="M11.5 3a17 17 0 0 0 0 18"></path> <path d="M12.5 3a17 17 0 0 1 0 18"></path> </svg>`;
}, "C:/Users/Bonilla/Desktop/kevin-bonilla/src/components/icons/WorldIcon.astro", void 0);

const $$Astro$7 = createAstro();
const $$ExperienceSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ExperienceSection;
  const { company, date, position, desc } = Astro2.props;
  return renderTemplate`<!-- Timeline -->${maybeRenderHead()}<div> <!-- Heading --> <div class="ps-2 my-2 first:mt-3"> <h3 class="text-xs font-medium uppercase text-white"> ${date} </h3> </div> <!-- End Heading --> <!-- Item --> <div class="flex gap-x-3"> <!-- Icon --> <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200"> <div class="relative z-10 size-7 flex justify-center items-center"> <div class="size-2 rounded-full bg-blue-500"></div> </div> </div> <!-- End Icon --> <!-- Right Content --> <div class="grow pt-0.5 pb-8"> <h3 class="flex gap-x-1.5 font-semibold text-blue-500"> ${company} </h3> <h3 class="flex gap-x-1.5 font-semibold text-white"> ${position} </h3> <p class="mt-1 text-sm text-white/60 text-wrap"> ${desc} </p> </div> <!-- End Right Content --> </div> <!-- End Item --></div>`;
}, "C:/Users/Bonilla/Desktop/kevin-bonilla/src/components/sections/ExperienceSection.astro", void 0);

const $$Astro$6 = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Experience;
  const EXPERIENCE = [
    {
      company: "Momotus Sytems",
      date: "July 2024 - Current",
      position: "Software Developer",
      desc: "I lead the design and development of user interfaces and experiences for diverse digital products, managing project lifecycles from planning to execution, ensuring timely delivery and client satisfaction. I specialize in building and maintaining high-quality landing pages using tools like React, Astro, and NodeJS, with a focus on responsive design and performance optimization."
    },
    {
      company: "Microsoft/Concentrix",
      date: "April 2023 - July 2024",
      position: "Cloud Support Engineer",
      desc: "As a Cloud Support Engineer, I excel in Microsoft 365 integration, including full on-premises and hybrid environments, Active Directory management, and SSO implementation with Microsoft Entra ID. I have hands-on expertise in deploying Microsoft Intune, managing VoIP via Direct Routing in Teams, and troubleshooting identity solutions, ensuring seamless operations across cloud and local infrastructures."
    },
    {
      company: "Newspaper",
      date: "January 2023 - April 2023",
      position: "Junior Front-End Developer",
      desc: "As a front-end developer for Newspaper, I utilize JavaScript, primarily React, to build dynamic news platforms. Leveraging TailwindCSS for responsive design and Figma for UI/UX prototyping, I deliver user-centered solutions that enhance the website's global news delivery experience."
    },
    {
      company: "Global Training Nicaraguan Institute",
      date: "January 2022 - January 2023",
      position: "IT Specialist",
      desc: "I developed a user-friendly environment for the institute using Google Workspace, addressing key issues for GTNI such as PC maintenance, networking, and quality assurance for products."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<main id="experience" class="md:mt-[10rem] mt-[6rem]"> <section class="flex items-center gap-x-2"> ${renderComponent($$result, "WorldIcon", $$WorldIcon, { "class": "stroke-white size-10" })} <h1 class="md:text-3xl text-xl font-extrabold text-white">My Experience</h1> <div class="ml-auto"> ${renderComponent($$result, "SocialPill", $$SocialPill, { "url": "https://momotus.systems/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LinkIcon", $$LinkIcon, { "class": "stroke-white" })}
My job
` })} </div> </section> <section class="mt-10"> ${EXPERIENCE.map((exp) => renderTemplate`${renderComponent($$result, "ExperienceSection", $$ExperienceSection, { "company": exp.company, "date": exp.date, "desc": exp.desc, "position": exp.position })}`)} </section> </main>`;
}, "C:/Users/Bonilla/Desktop/kevin-bonilla/src/components/sections/Experience.astro", void 0);

const $$Astro$5 = createAstro();
const $$FlutterIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FlutterIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 317"> <defs> <linearGradient x1="4%" y1="27%" x2="75.9%" y2="52.9%" id="a"> <stop offset="0%"></stop> <stop stop-opacity="0" offset="100%"></stop> </linearGradient> </defs> <path fill="#47C5FB" d="M158 0 0 158l49 48L255 0zM157 145l-85 85 49 50 49-49 85-86z"></path> <path fill="#00569E" d="m121 280 37 37h97l-85-86z"></path> <path fill="#00B5F8" d="m72 230 48-48 50 49-49 49z"></path> <path fill-opacity=".8" fill="url(#a)" d="m121 280 41-14 4-31z"></path> </svg>`;
}, "C:/Users/Bonilla/Desktop/kevin-bonilla/src/components/icons/FlutterIcon.astro", void 0);

const $$Astro$4 = createAstro();
const $$LinuxIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LinuxIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="27.77" height="32" viewBox="0 0 256 295"><defs><linearGradient id="logosLinuxTux0" x1="48.548%" x2="51.047%" y1="115.276%" y2="41.364%"><stop offset="0%" stop-color="#FFEED7"></stop><stop offset="100%" stop-color="#BDBFC2"></stop></linearGradient><linearGradient id="logosLinuxTux1" x1="54.407%" x2="46.175%" y1="2.404%" y2="90.542%"><stop offset="0%" stop-color="#FFF" stop-opacity=".8"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="logosLinuxTux2" x1="51.86%" x2="47.947%" y1="88.248%" y2="9.748%"><stop offset="0%" stop-color="#FFEED7"></stop><stop offset="100%" stop-color="#BDBFC2"></stop></linearGradient><linearGradient id="logosLinuxTux3" x1="49.925%" x2="49.924%" y1="85.49%" y2="13.811%"><stop offset="0%" stop-color="#FFEED7"></stop><stop offset="100%" stop-color="#BDBFC2"></stop></linearGradient><linearGradient id="logosLinuxTux4" x1="53.901%" x2="45.956%" y1="3.102%" y2="93.895%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="logosLinuxTux5" x1="45.593%" x2="54.811%" y1="5.475%" y2="93.524%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="logosLinuxTux6" x1="49.984%" x2="49.984%" y1="89.845%" y2="40.632%"><stop offset="0%" stop-color="#FFEED7"></stop><stop offset="100%" stop-color="#BDBFC2"></stop></linearGradient><linearGradient id="logosLinuxTux7" x1="53.505%" x2="42.746%" y1="99.975%" y2="23.545%"><stop offset="0%" stop-color="#FFEED7"></stop><stop offset="100%" stop-color="#BDBFC2"></stop></linearGradient><linearGradient id="logosLinuxTux8" x1="49.841%" x2="50.241%" y1="13.229%" y2="94.673%"><stop offset="0%" stop-color="#FFF" stop-opacity=".8"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="logosLinuxTux9" x1="49.927%" x2="50.727%" y1="37.327%" y2="92.782%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="logosLinuxTuxa" x1="49.876%" x2="49.876%" y1="2.299%" y2="81.204%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="logosLinuxTuxb" x1="49.833%" x2="49.824%" y1="2.272%" y2="71.799%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="logosLinuxTuxc" x1="53.467%" x2="38.949%" y1="48.921%" y2="98.1%"><stop offset="0%" stop-color="#FFA63F"></stop><stop offset="100%" stop-color="#FF0"></stop></linearGradient><linearGradient id="logosLinuxTuxd" x1="52.373%" x2="47.579%" y1="143.009%" y2="-64.622%"><stop offset="0%" stop-color="#FFEED7"></stop><stop offset="100%" stop-color="#BDBFC2"></stop></linearGradient><linearGradient id="logosLinuxTuxe" x1="30.581%" x2="65.887%" y1="34.024%" y2="89.175%"><stop offset="0%" stop-color="#FFA63F"></stop><stop offset="100%" stop-color="#FF0"></stop></linearGradient><linearGradient id="logosLinuxTuxf" x1="59.572%" x2="48.361%" y1="-17.216%" y2="66.118%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="logosLinuxTuxg" x1="47.769%" x2="51.373%" y1="1.565%" y2="104.313%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="logosLinuxTuxh" x1="43.55%" x2="57.114%" y1="4.533%" y2="92.827%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="logosLinuxTuxi" x1="49.733%" x2="50.558%" y1="17.609%" y2="99.385%"><stop offset="0%" stop-color="#FFA63F"></stop><stop offset="100%" stop-color="#FF0"></stop></linearGradient><linearGradient id="logosLinuxTuxj" x1="50.17%" x2="49.68%" y1="2.89%" y2="94.17%"><stop offset="0%" stop-color="#FFF" stop-opacity=".65"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><filter id="logosLinuxTuxk" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="6.5"></feGaussianBlur></filter></defs><g fill="none"><path fill="#000" fill-opacity=".2" d="M235.125 249.359c0 17.355-52.617 31.497-117.54 31.497S.044 266.806.044 249.359c0-17.356 52.618-31.498 117.54-31.498c64.924 0 117.45 14.142 117.541 31.498" filter="url(#logosLinuxTuxk)" transform="translate(10)"></path><path fill="#000" d="M63.213 215.474c-11.387-16.346-13.591-69.606 12.947-102.39C89.292 97.383 92.69 86.455 93.7 71.67c.734-16.805-11.846-66.851 35.537-70.616c48.027-3.857 45.364 43.526 45.088 68.596c-.183 21.12 15.52 33.15 26.355 49.68c19.927 30.303 18.274 82.461-3.765 110.745c-27.916 35.354-51.791 20.018-67.678 21.304c-29.752 1.745-30.762 17.54-66.024-35.905"></path><path fill="url(#logosLinuxTux0)" d="M169.1 122.451c8.265 7.622 29.661 41.69-4.224 62.995c-11.937 7.438 10.653 35.721 21.488 22.039c19.193-24.61 6.98-63.913-4.591-77.963c-7.714-9.917-19.651-13.774-12.672-7.07" transform="translate(10)"></path><path fill="#000" stroke="#000" stroke-width=".977" d="M176.805 117.86c13.59 11.02 38.292 49.587 2.204 74.748c-11.846 7.806 10.468 32.508 23.049 19.927c43.618-43.894-1.102-94.308-16.53-111.664c-13.774-15.151-25.987 3.49-8.723 16.989z"></path><path fill="url(#logosLinuxTux1)" d="M147.245 25.02c-.459 12.581-14.325 23.51-30.946 24.52c-16.621 1.01-29.66-8.54-29.202-21.121c.46-12.581 14.326-23.509 30.947-24.519c16.62-.918 29.66 8.54 29.201 21.12" transform="translate(10)"></path><path fill="url(#logosLinuxTux2)" d="M107.483 54.957c.46 8.173-3.397 15.06-8.723 15.335c-5.326.276-10.01-6.06-10.469-14.233c-.459-8.173 3.398-15.06 8.724-15.335c5.326-.276 10.01 6.06 10.468 14.233" transform="translate(10)"></path><path fill="url(#logosLinuxTux3)" d="M117.125 55.6c.184 9.458 6.337 16.988 13.683 16.805c7.346-.184 13.131-7.99 12.948-17.54c-.184-9.458-6.336-16.988-13.683-16.804c-7.346.183-13.223 8.08-12.948 17.539" transform="translate(10)"></path><path fill="#000" d="M133.186 57.712c-.092 5.234 2.48 9.458 5.877 9.458c3.306 0 6.153-4.224 6.245-9.366c.091-5.234-2.48-9.459-5.878-9.459c-3.397 0-6.152 4.225-6.244 9.367m-21.212.092c.459 4.316-1.194 7.989-3.582 8.356c-2.387.276-4.683-2.938-5.142-7.254c-.46-4.316 1.194-7.99 3.581-8.357c2.388-.275 4.684 2.939 5.143 7.255"></path><path fill="url(#logosLinuxTux4)" d="M124.564 54.773c-.276 2.939 1.102 5.326 3.03 5.51c1.928.184 3.765-2.112 4.04-4.959c.276-2.938-1.102-5.326-3.03-5.51c-1.928-.183-3.765 2.113-4.04 4.96" transform="translate(10)"></path><path fill="url(#logosLinuxTux5)" d="M99.953 55.508c.276 2.388-.734 4.5-2.203 4.683c-1.47.184-2.847-1.653-3.123-4.132c-.275-2.388.735-4.5 2.204-4.683c1.47-.184 2.847 1.744 3.122 4.132" transform="translate(10)"></path><path fill="url(#logosLinuxTux6)" d="M71.027 145.684c6.52-14.785 20.386-40.772 20.662-60.883c0-15.978 47.843-19.835 51.7-3.856c3.856 15.978 13.59 39.853 19.834 51.424c6.245 11.478 24.335 48.118 5.051 80.074c-17.356 28.284-69.973 50.69-98.073-3.856c-9.55-18.917-7.806-42.333.826-62.903" transform="translate(10)"></path><path fill="url(#logosLinuxTux7)" d="M65.15 134.664c-5.601 10.56-17.172 38.293 11.112 53.445c30.395 16.162 30.303 49.312-6.245 33.517c-33.425-14.233-18.641-71.902-9.274-85.676c6.06-9.642 15.243-21.488 4.407-1.286" transform="translate(10)"></path><path fill="#000" stroke="#000" stroke-width="1.25" d="M79.925 122.727c-8.907 14.509-30.211 48.669-1.652 66.484c38.384 23.6 27.548 47.108-7.53 25.895c-49.404-29.568-5.97-89.257 13.774-112.03c22.59-25.529 4.316 4.683-4.592 19.65z"></path><path fill="url(#logosLinuxTux8)" d="M156.428 151.285c0 16.162-15.519 37.1-42.15 36.916c-27.456.183-39.118-20.754-39.118-36.916c0-16.161 18.182-29.293 40.588-29.293c22.498.092 40.68 13.132 40.68 29.293" transform="translate(10)"></path><path fill="url(#logosLinuxTux9)" d="M141.92 100.504c-.276 16.713-11.204 20.662-24.978 20.662c-13.775 0-23.784-2.48-24.978-20.662c0-11.387 11.203-17.998 24.978-17.998c13.774-.092 24.977 6.52 24.977 17.998" transform="translate(10)"></path><path fill="url(#logosLinuxTuxa)" d="M58.63 126.216c9-13.682 28.008-34.711 3.582 2.939c-19.835 31.038-7.346 50.965-.918 56.474c18.549 16.53 17.814 27.64 3.214 18.917c-31.314-18.641-24.794-50.047-5.878-78.33" transform="translate(10)"></path><path fill="url(#logosLinuxTuxb)" d="M188.936 131.818c-7.806-16.07-32.6-56.842 1.193-9.459c30.763 42.884 9.183 72.729 5.326 75.667c-3.856 2.939-16.804 8.908-13.04-1.469c3.858-10.377 22.958-30.028 6.52-64.74" transform="translate(10)"></path><path fill="url(#logosLinuxTuxc)" stroke="#E68C3F" stroke-width="6.25" d="M51.835 258.542c-20.57-10.928-50.414 2.112-39.578-27.457c2.204-6.704-3.214-16.805.275-23.325c4.133-7.989 13.04-6.244 18.366-11.57c5.234-5.51 8.54-15.06 18.366-13.59c9.734 1.468 16.254 13.406 23.049 28.099c5.05 10.468 22.865 25.253 21.672 37.007c-1.47 17.998-21.948 21.396-42.15 10.836z" transform="translate(10)"></path><path fill="url(#logosLinuxTuxd)" d="M201.608 189.119c-3.122 5.877-16.162 15.335-24.886 12.856c-8.815-2.388-12.856-15.795-11.111-25.988c1.653-11.386 11.111-12.03 23.05-6.336c12.855 6.336 16.712 11.662 12.947 19.468" transform="translate(10)"></path><path fill="url(#logosLinuxTuxe)" stroke="#E68C3F" stroke-width="6.251" d="M194.445 253.49c15.06-18.273 48.578-14.508 25.988-39.577c-4.775-5.418-3.306-16.989-9.183-21.947c-6.887-6.061-14.509-1.102-21.488-4.224c-6.979-3.398-14.325-9.918-22.865-5.327c-8.54 4.684-9.459 16.805-10.285 32.783c-.735 11.479-11.203 30.671-5.602 41.231c8.081 16.346 29.11 14.142 43.435-2.938z" transform="translate(10)"></path><path fill="url(#logosLinuxTuxf)" d="M187.925 229.064c23.325-34.435 5.97-34.16.092-36.823c-5.877-2.755-12.03-8.173-18.916-4.408c-6.888 3.857-7.255 13.775-7.439 26.814c-.275 9.367-8.08 25.07-3.397 33.793c5.693 10.193 19.467-4.591 29.66-19.376" transform="translate(10)"></path><path fill="url(#logosLinuxTuxg)" d="M47.06 234.023c-34.895-22.59-18.55-30.303-13.315-33.885c6.336-4.591 6.428-13.407 14.233-12.58c7.806.826 12.397 10.468 17.631 22.406c3.857 8.54 17.264 19.927 16.254 29.753c-1.285 11.57-19.743 3.948-34.803-5.694" transform="translate(10)"></path><path fill="#000" d="M209.588 188.843c-2.755 4.776-13.958 12.306-21.396 10.285c-7.622-1.928-11.112-12.672-9.55-20.753c1.377-9.183 9.55-9.642 19.834-5.05c10.928 4.958 14.326 9.182 11.112 15.518"></path><path fill="url(#logosLinuxTuxh)" d="M192.058 186.18c-1.745 3.306-9.091 8.54-14.234 7.163c-5.142-1.377-7.713-8.815-6.887-14.417c.735-6.336 6.244-6.704 13.223-3.581c7.53 3.49 9.918 6.428 7.898 10.835" transform="translate(10)"></path><path fill="url(#logosLinuxTuxi)" stroke="#E68C3F" stroke-width="3.75" d="M97.107 66.344c3.673-3.398 12.58-13.774 29.477-2.939c3.122 2.02 5.693 2.204 11.662 4.775c12.03 4.96 6.336 16.897-6.52 20.937c-5.51 1.745-10.468 8.449-20.386 7.806c-8.54-.46-10.744-6.06-15.978-9.091c-9.275-5.234-10.652-12.305-5.602-16.07c5.051-3.765 6.98-5.143 7.347-5.418z" transform="translate(10)"></path><path stroke="#E68C3F" stroke-width="2.5" d="M148.43 75.986c-5.05.275-15.979 11.203-27.457 11.203c-11.479 0-18.366-10.652-20.11-10.652"></path><path fill="url(#logosLinuxTuxj)" d="M102.8 65.426c1.837-1.653 7.622-6.153 15.244-1.562c1.653.919 3.306 1.929 5.693 3.306c4.867 2.847 2.48 6.98-3.398 9.55c-2.663 1.102-7.07 3.49-10.376 3.306c-3.673-.367-6.153-2.755-8.54-4.316c-4.5-2.938-4.224-5.418-2.112-7.346c1.56-1.47 3.305-2.847 3.49-2.938" transform="translate(10)"></path></g></svg>`;
}, "C:/Users/Bonilla/Desktop/kevin-bonilla/src/components/icons/LinuxIcon.astro", void 0);

const $$Astro$3 = createAstro();
const $$AstroIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AstroIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 366" xmlns="http://www.w3.org/2000/svg" width="256" height="366" preserveAspectRatio="xMidYMid"><path d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z"></path><path fill="#FF5D01" d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z"></path></svg>`;
}, "C:/Users/Bonilla/Desktop/kevin-bonilla/src/components/icons/AstroIcon.astro", void 0);

const $$Astro$2 = createAstro();
const $$TailwindIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TailwindIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 154" width="256" height="154" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <defs><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient"> <stop stop-color="#2298BD" offset="0%"></stop> <stop stop-color="#0ED7B5" offset="100%"></stop> </linearGradient></defs> <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="url(#gradient)"></path></svg>`;
}, "C:/Users/Bonilla/Desktop/kevin-bonilla/src/components/icons/TailwindIcon.astro", void 0);

const MomotusPOS = new Proxy({"src":"/_astro/momotus-pos.CAI42AAm.webp","width":960,"height":720,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Bonilla/Desktop/kevin-bonilla/public/img/momotus-pos.webp";
							}
							
							return target[name];
						}
					});

const MomotusWeb = new Proxy({"src":"/_astro/momotus-web.CLDILV2M.webp","width":1920,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Bonilla/Desktop/kevin-bonilla/public/img/momotus-web.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$RustIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RustIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 224 224"><path fill="#000" d="M218.46 109.358l-9.062-5.614c-.076-.882-.162-1.762-.258-2.642l7.803-7.265a3.107 3.107 0 00.933-2.89 3.093 3.093 0 00-1.967-2.312l-9.97-3.715c-.25-.863-.512-1.72-.781-2.58l6.214-8.628a3.114 3.114 0 00-.592-4.263 3.134 3.134 0 00-1.431-.637l-10.507-1.709a80.869 80.869 0 00-1.263-2.353l4.417-9.7a3.12 3.12 0 00-.243-3.035 3.106 3.106 0 00-2.705-1.385l-10.671.372a85.152 85.152 0 00-1.685-2.044l2.456-10.381a3.125 3.125 0 00-3.762-3.763l-10.384 2.456a88.996 88.996 0 00-2.047-1.684l.373-10.671a3.11 3.11 0 00-1.385-2.704 3.127 3.127 0 00-3.034-.246l-9.681 4.417c-.782-.429-1.567-.854-2.353-1.265l-1.713-10.506a3.098 3.098 0 00-1.887-2.373 3.108 3.108 0 00-3.014.35l-8.628 6.213c-.85-.27-1.703-.53-2.56-.778l-3.716-9.97a3.111 3.111 0 00-2.311-1.97 3.134 3.134 0 00-2.89.933l-7.266 7.802a93.746 93.746 0 00-2.643-.258l-5.614-9.082A3.125 3.125 0 00111.97 4c-1.09 0-2.085.56-2.642 1.478l-5.615 9.081a93.32 93.32 0 00-2.642.259l-7.266-7.802a3.13 3.13 0 00-2.89-.933 3.106 3.106 0 00-2.312 1.97l-3.715 9.97c-.857.247-1.71.506-2.56.778L73.7 12.588a3.101 3.101 0 00-3.014-.35A3.127 3.127 0 0068.8 14.61l-1.713 10.506c-.79.41-1.575.832-2.353 1.265l-9.681-4.417a3.125 3.125 0 00-4.42 2.95l.372 10.67c-.69.553-1.373 1.115-2.048 1.685l-10.383-2.456a3.143 3.143 0 00-2.93.832 3.124 3.124 0 00-.833 2.93l2.436 10.383a93.897 93.897 0 00-1.68 2.043l-10.672-.372a3.138 3.138 0 00-2.704 1.385 3.126 3.126 0 00-.246 3.035l4.418 9.7c-.43.779-.855 1.563-1.266 2.353l-10.507 1.71a3.097 3.097 0 00-2.373 1.886 3.117 3.117 0 00.35 3.013l6.214 8.628a89.12 89.12 0 00-.78 2.58l-9.97 3.715a3.117 3.117 0 00-1.035 5.202l7.803 7.265c-.098.879-.184 1.76-.258 2.642l-9.062 5.614A3.122 3.122 0 004 112.021c0 1.092.56 2.084 1.478 2.642l9.062 5.614c.074.882.16 1.762.258 2.642l-7.803 7.265a3.117 3.117 0 001.034 5.201l9.97 3.716a110 110 0 00.78 2.58l-6.212 8.627a3.112 3.112 0 00.6 4.27c.419.33.916.547 1.443.63l10.507 1.709c.407.792.83 1.576 1.265 2.353l-4.417 9.68a3.126 3.126 0 002.95 4.42l10.65-.374c.553.69 1.115 1.372 1.685 2.047l-2.435 10.383a3.09 3.09 0 00.831 2.91 3.117 3.117 0 002.931.83l10.384-2.436a82.268 82.268 0 002.047 1.68l-.371 10.671a3.11 3.11 0 001.385 2.704 3.125 3.125 0 003.034.241l9.681-4.416c.779.432 1.563.854 2.353 1.265l1.713 10.505a3.147 3.147 0 001.887 2.395 3.111 3.111 0 003.014-.349l8.628-6.213c.853.271 1.71.535 2.58.783l3.716 9.969a3.112 3.112 0 002.312 1.967 3.112 3.112 0 002.89-.933l7.266-7.802c.877.101 1.761.186 2.642.264l5.615 9.061a3.12 3.12 0 002.642 1.478 3.165 3.165 0 002.663-1.478l5.614-9.061c.884-.078 1.765-.163 2.643-.264l7.265 7.802a3.106 3.106 0 002.89.933 3.105 3.105 0 002.312-1.967l3.716-9.969c.863-.248 1.719-.512 2.58-.783l8.629 6.213a3.12 3.12 0 004.9-2.045l1.713-10.506c.793-.411 1.577-.838 2.353-1.265l9.681 4.416a3.13 3.13 0 003.035-.241 3.126 3.126 0 001.385-2.704l-.372-10.671a81.794 81.794 0 002.046-1.68l10.383 2.436a3.123 3.123 0 003.763-3.74l-2.436-10.382a84.588 84.588 0 001.68-2.048l10.672.374a3.104 3.104 0 002.704-1.385 3.118 3.118 0 00.244-3.035l-4.417-9.68c.43-.779.852-1.563 1.263-2.353l10.507-1.709a3.08 3.08 0 002.373-1.886 3.11 3.11 0 00-.35-3.014l-6.214-8.627c.272-.857.532-1.717.781-2.58l9.97-3.716a3.109 3.109 0 001.967-2.311 3.107 3.107 0 00-.933-2.89l-7.803-7.265c.096-.88.182-1.761.258-2.642l9.062-5.614a3.11 3.11 0 001.478-2.642 3.157 3.157 0 00-1.476-2.663h-.064zm-60.687 75.337c-3.468-.747-5.656-4.169-4.913-7.637a6.412 6.412 0 017.617-4.933c3.468.741 5.676 4.169 4.933 7.637a6.414 6.414 0 01-7.617 4.933h-.02zm-3.076-20.847c-3.158-.677-6.275 1.334-6.936 4.5l-3.22 15.026c-9.929 4.5-21.055 7.018-32.614 7.018-11.89 0-23.12-2.622-33.234-7.328l-3.22-15.026c-.677-3.158-3.778-5.18-6.936-4.499l-13.273 2.848a80.222 80.222 0 01-6.853-8.091h64.61c.731 0 1.218-.132 1.218-.797v-22.91c0-.665-.487-.797-1.218-.797H94.133v-14.469h20.415c1.864 0 9.97.533 12.551 10.898.811 3.179 2.601 13.54 3.818 16.863 1.214 3.715 6.152 11.146 11.415 11.146h32.202c.365 0 .755-.041 1.166-.116a80.56 80.56 0 01-7.307 8.587l-13.583-2.911-.113.058zm-89.38 20.537a6.407 6.407 0 01-7.617-4.933c-.74-3.467 1.462-6.894 4.934-7.637a6.417 6.417 0 017.617 4.933c.74 3.468-1.464 6.894-4.934 7.637zm-24.564-99.28a6.438 6.438 0 01-3.261 8.484c-3.241 1.438-7.019-.025-8.464-3.261-1.445-3.237.025-7.039 3.262-8.483a6.416 6.416 0 018.463 3.26zM33.22 102.94l13.83-6.15c2.952-1.311 4.294-4.769 2.972-7.72l-2.848-6.44H58.36v50.362h-22.5a79.158 79.158 0 01-3.014-21.672c0-2.869.155-5.697.452-8.483l-.08.103zm60.687-4.892v-14.86h26.629c1.376 0 9.722 1.59 9.722 7.822 0 5.18-6.399 7.038-11.663 7.038h-24.77.082zm96.811 13.375c0 1.973-.072 3.922-.216 5.862h-8.113c-.811 0-1.137.532-1.137 1.327v3.715c0 8.752-4.934 10.671-9.268 11.146-4.129.464-8.691-1.726-9.248-4.252-2.436-13.684-6.482-16.595-12.881-21.672 7.948-5.036 16.204-12.487 16.204-22.498 0-10.753-7.369-17.523-12.385-20.847-7.059-4.644-14.862-5.572-16.968-5.572H52.899c11.374-12.673 26.835-21.673 44.174-24.975l9.887 10.361a5.849 5.849 0 008.278.19l11.064-10.568c23.119 4.314 42.729 18.721 54.082 38.598l-7.576 17.09c-1.306 2.951.027 6.419 2.973 7.72l14.573 6.48c.255 2.607.383 5.224.384 7.843l-.021.052zM106.912 24.94a6.398 6.398 0 019.062.209 6.437 6.437 0 01-.213 9.082 6.396 6.396 0 01-9.062-.21 6.436 6.436 0 01.213-9.083v.002zm75.137 60.476a6.402 6.402 0 018.463-3.26 6.425 6.425 0 013.261 8.482 6.402 6.402 0 01-8.463 3.261 6.425 6.425 0 01-3.261-8.483z"></path></svg>`;
}, "C:/Users/Bonilla/Desktop/kevin-bonilla/src/components/icons/RustIcon.astro", void 0);

const $$Astro = createAstro();
const $$ProjectCards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCards;
  const TAGS = {
    FLUTTER: {
      name: "Flutter",
      icon: $$FlutterIcon
    },
    LINUX: {
      name: "Linux",
      icon: $$LinuxIcon
    },
    ASTRO: {
      name: "Astro",
      icon: $$AstroIcon
    },
    TAILWIND: {
      name: "TailwindCSS",
      icon: $$TailwindIcon
    },
    RUST: {
      name: "Rust",
      icon: $$RustIcon
    }
  };
  const PROJECTS = [
    {
      title: "Momotus POS (no released yet)",
      desc: "Momotus POS is designed to streamline retail operations, offering an intuitive interface that simplifies sales, inventory management, and customer transactions. Built with a focus on speed and reliability, it provides real-time data insights, seamless integration with payment gateways, and customizable features tailored to meet the needs of small to medium-sized businesses. Whether you\u2019re managing a single store or multiple locations, our POS ensures efficient, secure, and user-friendly experiences for both staff and customers.",
      image: MomotusPOS,
      tags: [TAGS.FLUTTER, TAGS.LINUX, TAGS.RUST],
      url: "#projects"
    },
    {
      title: "Momotus Website",
      desc: "Welcome to our landing page, where we offer cutting-edge solutions in cybersecurity, cloud computing, app development, and more. At Momotus, we are dedicated to empowering your business with state-of-the-art technologies and services. From robust security measures to safeguard your data, to scalable cloud solutions and innovative app development, we provide a comprehensive suite of services designed to drive growth and efficiency. Explore our offerings and discover how we can help you stay ahead in the digital landscape.",
      image: MomotusWeb,
      tags: [TAGS.ASTRO, TAGS.TAILWIND],
      url: "https://momotus.systems"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div> ${PROJECTS.map(({ title, desc, tags, image, url }) => renderTemplate`<article class="mt-12 -z-10"> <div> <div class="flex justify-between items-center my-1"> <h3 class="text-white font-semibold text-xl">${title}</h3> ${renderComponent($$result, "SocialPill", $$SocialPill, { "url": url }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LinkIcon", $$LinkIcon, { "class": "stroke-white" })}
Link
` })} </div> <p class="text-white/60 text-wrap">${desc}</p> </div> <ul class="flex items-center gap-4 my-3"> ${tags.map((tag) => renderTemplate`<div class="flex items-center gap-x-2 rounded-lg px-3 py-1 bg-white font-semibold text-sm"> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-5" })} <li class="">${tag.name}</li> </div>`)} </ul> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": "imageCode", "class": "rounded-lg drop-shadow-lg shadow-white/10" })}</article>`)} </div>`;
}, "C:/Users/Bonilla/Desktop/kevin-bonilla/src/components/sections/ProjectCards.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main id="projects" class="md:mt-[10rem] mt-[6rem]"> <section class="flex items-center gap-x-2"> ${renderComponent($$result, "GithubIcon", $$GithubIcon, { "class": "stroke-white size-10" })} <p class="md:text-3xl text-xl font-extrabold text-white">My Projects</p> </section> <section> ${renderComponent($$result, "ProjectCards", $$ProjectCards, {})} </section> </main>`;
}, "C:/Users/Bonilla/Desktop/kevin-bonilla/src/components/sections/Projects.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Kevin Bonilla" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="font-inter md:mx-auto mx-2 md:w-[1000px] md:my-28"> <section class="flex items-center md:h-16 gap-5"> <div> <h1 class="font-extrabold w-full md:text-4xl text-6xl text-white"><span class="collapse md:visible">Hello there,</span> I'm Kevin Bonilla👋</h1> <p class="text-slate-300 text-base md:mt-0 mt-3">Software Developer | UI/UX Designer</p> </div> </section> <section class="mt-5 md:w-[750px]"> <p class="text-wrap text-white">
With 2.5 years in IT, including over a year at <span class="text-blue-400 font-bold">Microsoft-Concentrix</span> and 6 months specializing in <span class="text-yellow-300 font-bold">front-end development</span>, I’m focused on building sleek and efficient user interfaces from Nicaragua.
</p> <div class="mt-5 flex flex-col md:flex-row gap-3"> ${renderComponent($$result2, "SocialPill", $$SocialPill, { "url": "https://www.linkedin.com/in/kb1909zzz/" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Briefcase", $$Briefcase, { "class": "stroke-white" })}
Let's Connect
` })} ${renderComponent($$result2, "SocialPill", $$SocialPill, { "url": "https://www.upwork.com/freelancers/~01ee7674eaf4753663" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Upwork", $$Upwork, { "class": "stroke-white" })}
Hire me
` })} ${renderComponent($$result2, "SocialPill", $$SocialPill, { "url": "https://github.com/bdemxn" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "GithubIcon", $$GithubIcon, { "class": "stroke-white" })}
Github
` })} </div> </section> ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} </main> ` })}`;
}, "C:/Users/Bonilla/Desktop/kevin-bonilla/src/pages/index.astro", void 0);

const $$file = "C:/Users/Bonilla/Desktop/kevin-bonilla/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
