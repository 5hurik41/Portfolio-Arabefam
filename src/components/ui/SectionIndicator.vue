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
    class="absolute top-6 right-6 md:right-10 md:top-10 z-50 flex items-center gap-1.5 rounded-full border border-white/50 bg-white/60 px-3 py-1.5 text-[10px] font-bold tracking-widest text-slate-500 uppercase shadow-sm backdrop-blur-md md:text-xs"
    v-motion="getPop(450)"
  >
    {{ name }} <span class="text-brand-primary font-black">{{ current }}/{{ total }}</span>
  </div>
</template>
