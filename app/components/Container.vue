<script setup lang="ts">
interface ContainerProps {
  width?: "thin" | "normal";
}

const props = withDefaults(defineProps<ContainerProps>(), {
  width: "normal",
});
</script>
<template>
  <div
    class="container mx-auto px-4"
    :class="{
      'max-w-7xl': props.width === 'normal',
      'max-w-5xl': props.width === 'thin',
    }"
  >
    <slot />
  </div>
</template>
