<script setup lang="ts">
defineProps({
  tagname: String,
})
</script>

<template>
  <div
    class="border-brand-primary text-fluid-tag bg-brand-background rounded-full border-2 px-4 py-2 font-medium italic"
  >
    #{{ tagname }}
  </div>
</template>
