<script setup lang="ts">
defineProps({
  tagname: String,
})
</script>

<template>
  <div
    class="px-4 py-2 border-2 border-brand-primary text-sm md:text-[1em] rounded-full italic font-medium bg-brand-background"
  >
    #{{ tagname }}
  </div>
</template>
