<script setup lang="ts">
interface Region {
  name: string;
  image: string;
  url: string;
  rating: "g" | "m" | "a";
}

const regions: Region[] = [
  {
    name: "Mares Nest",
    image: "/img/mares-nest.jpg",
    url: "https://maresnest.harmonylink.io",
    rating: "a",
  },
  {
    name: "Ponyville",
    image: "/img/ponyville.jpg",
    url: "https://world.secondlife.com/place/e8bb3997-320b-7e02-042f-de9b9c7ba391",
    rating: "g",
  },
  {
    name: "Neighberry",
    image: "/img/neighberry.jpg",
    url: "https://neighberry.horse/",
    rating: "a",
  },
];
</script>
<template>
  <Container>
    <div class="flex mb-3 flex-col md:flex-row gap-2">
      <div>
        <h1 class="text-2xl">Regions</h1>
        <p class="text-sm">Pony Regions in SecondLife</p>
      </div>
      <div class="flex gap-3 text-xs justify-end mt-auto ml-auto">
        <div>
          <Rating size="small" rating="g" class="mr-1 inline-block" /> = General
        </div>
        <div>
          <Rating size="small" rating="m" class="mr-1 inline-block" /> =
          Moderate
        </div>
        <div>
          <Rating size="small" rating="a" class="mr-1 inline-block" /> = Adult
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 -mx-1">
      <div v-for="region in regions">
        <NuxtLink :to="region.url" target="_blank" rel="noopener" class="group">
          <div
            class="hover:outline-white/50 outline-2 outline-transparent p-[0.3rem] rounded-[1.3rem] transition-all duration-500 drop-shadow-2xl drop-shadow-transparent hover:drop-shadow-purple-500/15"
          >
            <div
              class="aspect-12/7 bg-white/10 rounded-2xl overflow-hidden relative"
            >
              <img
                :src="region.image"
                class="h-full w-full object-cover scale-105 group-hover:scale-100 transition-transform duration-500"
              />
              <div class="absolute bottom-0 w-full p-2 flex">
                <Rating :rating="region.rating" class="ml-auto" />
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </Container>
</template>
