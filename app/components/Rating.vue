<script setup lang="ts">
interface RatingProps {
  rating: "g" | "m" | "a";
  size?: "small" | "normal";
}

const props = withDefaults(defineProps<RatingProps>(), {
  size: "normal",
});

const ratingClasses = computed(() => {
  const classes = {
    g: "bg-[#3888C0]",
    m: "bg-[#424242]",
    a: "bg-[#D93E3A]",
  };
  return classes[props.rating] || "bg-gray-500"; // Fallback to a default color
});
</script>
<template>
  <div>
    <div
      class="flex items-center justify-center text-white"
      :class="[
        ratingClasses,
        {
          'w-5 h-5 rounded-sm text-xs': props.size === 'small',
          'w-7 h-7 rounded-md': props.size === 'normal',
        },
      ]"
    >
      {{ props.rating.toUpperCase() }}
    </div>
  </div>
</template>
