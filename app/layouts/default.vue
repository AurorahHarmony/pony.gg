<script setup>
const navItems = [
  { name: "Home", to: "/" },
  // { name: "Marketplace", to: "/marketplace" },
  { name: "SL Regions", to: "/regions" },
  // { name: "Events", to: "/events" },
  // { name: "Guides", to: "/guides" },
  { name: "About", to: "/about" },
];
</script>

<template>
  <div
    class="bg-black text-white min-h-lvh max-w-lvw overflow-x-hidden font-ubuntu py-4 px-2 md:px-4 bg-radial-[at_90%_0%] from-[#1A102A] to-black"
  >
    <Container class="mb-4 relative z-10">
      <nav
        class="bg-black/10 rounded-xl p-5 w-full backdrop-blur-2xl flex outline-white/4 outline-1"
      >
        <nuxt-link
          to="/"
          class="mr-auto text-2xl text-indigo-400 font-passero"
          style="
            text-shadow: -1px -1px 0 rgb(55, 42, 172),
              1px -1px 0 rgb(55, 42, 172), -1px 1px 0 rgb(55, 42, 172),
              1px 1px 0 rgb(55, 42, 172);
          "
        >
          <img src="/img/logo.png" class="h-8 inline-block mr-2" />Pony.gg
        </nuxt-link>
        <ul class="flex justify-evenly items-center gap-6">
          <li
            v-for="item in navItems"
            :key="item.name"
            class="hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
          >
            <NuxtLink :to="item.to">{{ item.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </Container>
    <slot />
  </div>
</template>
