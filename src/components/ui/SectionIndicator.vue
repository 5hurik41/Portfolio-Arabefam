<script setup lang="ts">
import { getPop } from '@/utils/animation'

defineProps<{
  name: string
  current: number | string
  total: number | string
}>()
</script>

<template>
  <div
    class="text-fluid-base absolute right-14 bottom-6 z-10 font-bold lg:right-26 lg:bottom-12"
    v-motion="getPop(450)"
  >
    {{ name }} {{ current }}/{{ total }}
  </div>
</template>
