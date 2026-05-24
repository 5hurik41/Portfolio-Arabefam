<script setup lang="ts">
defineProps({
  icon: String,
  iconClass: String,
  label: String,
})
</script>

<template>
  <button
    class="flex cursor-pointer items-center justify-center gap-2 rounded-full border-4 border-white/20 bg-white/5 px-4 py-2 text-lg font-semibold backdrop-blur-[3px] transition-all duration-300 hover:scale-110 hover:bg-white/30"
  >
    <span> {{ label }} </span>
    <img v-if="icon" :src="icon" :class="iconClass" />
  </button>
</template>
