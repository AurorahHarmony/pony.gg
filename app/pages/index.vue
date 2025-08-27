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
  <div>
    <Container
      class="text-center relative mt-6 md:mt-9 lg:mt-18 mb-12 md:mb-22"
    >
      <img
        src="/img/rainbow-oval.png"
        alt=""
        class="absolute -top-16 md:-top-26 lg:-top-42 h-auto pointer-events-none"
      />
      <div class="relative">
        <img
          src="/img/rafale-system.png"
          alt=""
          class="inline-block w-full sm:w-11/12 md:w-10/12 lg:w-9/12 mb-6"
        />
        <p class="text-2xl md:text-4xl font-bold">
          Bringing together Pony Communities
        </p>
      </div>
    </Container>
    <Container width="thin" class="md:mt-9 lg:mt-18 mb-12 md:mb-22">
      <h2 class="text-2xl">SL Regions</h2>
      <p class="text-sm text-zinc-500">0 Ponies online</p>
      <div class="flex -mx-1 flex-wrap md:flex-nowrap">
        <div v-for="region in regions" class="w-6/12 md:w-auto p-1">
          <NuxtLink
            :to="region.url"
            target="_blank"
            rel="noopener"
            class="group"
          >
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
        <div class="w-6/12 md:w-24 md:shrink-0 p-1 relative">
          <NuxtLink to="/regions">
            <div
              class="h-full w-full hover:outline-white/50 outline-2 outline-transparent p-[0.3rem] rounded-[1.3rem] transition-all duration-500 drop-shadow-2xl hover:drop-shadow-purple-500"
            >
              <div
                class="h-full w-full flex justify-center items-center bg-indigo-500/5 rounded-2xl"
              >
                <p>More ></p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </Container>
    <Container width="thin" class="md:mt-9 lg:mt-18 mb-12 md:mb-22 relative">
      <div
        class="from-green-700/30 to-transparent to-65% bg-radial absolute aspect-square -right-60 -top-40 -bottom-40 pointer-events-none"
      ></div>
      <div
        class="bg-green-800/10 rounded-xl px-4 py-10 border-green-300/15 border-2 flex relative flex-col md:flex-row"
      >
        <div
          class="order-1 mx-auto mb-6 md:order-2 md:ml-auto md:-mt-16 md:-mb-25 md:-mr-10"
        >
          <img src="/img/dash.png" class="h-42 md:h-86 object-contain" />
        </div>
        <div
          class="order-2 md:order-1 w-full md:max-w-lg text-center md:text-left"
        >
          <p class="text-2xl font-bold mb-4 md:mb-6 md:text-4xl">
            See what's happening
          </p>
          <p class="mb-6 md:mb-18">
            From Canterlot to Ponyville, discover the latest events bringing
            ponies together across the grid.
          </p>
          <NuxtLink
            class="rounded-full bg-green-700/30 hover:bg-green-700/40 px-4 py-3 border-green-600/30 border-1"
          >
            Coming Soon
          </NuxtLink>
        </div>
      </div>
    </Container>
    <Container width="thin" class="mb-16">
      <div
        class="bg-blue-400/25 rounded-xl px-4 py-10 border-sky-300/50 border-2 flex justify-center"
      >
        <div class="text-center max-w-xl">
          <p class="text-2xl md:text-4xl font-bold mb-6">Join the Herd</p>
          <p class="mb-6">
            Pony.gg is built by the community, for the community. If you’re an
            artist, region owner, event organizer, or just have something
            wonderful to share with the everypony, we’d love to hear from you.
          </p>
          <NuxtLink
            to="mailto:luna@pony.gg"
            class="rounded-full bg-cyan-600/30 hover:bg-cyan-600/50 px-4 py-3 border-sky-300/50 border-1"
          >
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </Container>
  </div>
</template>
