import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Pony.GG",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", href: "/img/favicon.png" }],
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/test-utils", "@nuxt/fonts"],
  css: ["~/assets/css/main.css"],
  fonts: {
    priority: ["google"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
