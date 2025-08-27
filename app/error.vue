<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div>
    <NuxtLayout>
      <Container>
        <div class="text-center">
          <h2 class="text-8xl">{{ error?.statusCode }}</h2>
          <h3 v-if="error?.statusCode === 404" class="text-3xl mt-4 mb-8">
            Page Not Found
          </h3>
          <button @click="handleError" class="underline cursor-pointer">
            Go home
          </button>
        </div>
      </Container>
    </NuxtLayout>
  </div>
</template>
