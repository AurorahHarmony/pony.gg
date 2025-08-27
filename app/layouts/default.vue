<script setup>
const navItems = [
  { name: "Home", to: "/" },
  { name: "Marketplace", to: "/marketplace" },
  { name: "Regions", to: "/regions" },
  { name: "Events", to: "/events" },
  { name: "Guides", to: "/guides" },
  { name: "About", to: "/about" },
];
</script>

<template>
  <div class="bg-black text-white min-h-lvh font-ubuntu py-4">
    <Container class="mb-4 relative z-10">
      <nav class="bg-white/4 rounded-xl p-5 w-full backdrop-blur-2xl flex r">
        <nuxt-link to="/" class="mr-auto">
          <div class="">Pony.GG</div>
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
