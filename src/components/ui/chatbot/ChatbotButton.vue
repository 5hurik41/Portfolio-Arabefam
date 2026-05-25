<script setup lang="ts">
import { getPop } from '@/utils/animation'
import star from '@/assets/star.svg'

defineProps<{
  isOpen: boolean
}>()

defineEmits<{
  (e: 'toggle'): void
}>()
</script>

<template>
  <button 
    @click="$emit('toggle')"
    class="relative flex items-center justify-center w-16 h-16 rounded-full bg-brand-dark shadow-[0_10px_25px_#26252966] transition-transform duration-300 hover:scale-110 group"
    v-motion="getPop(1000)"
  >
    <!-- Orb glow -->
    <div class="absolute inset-0 bg-brand-primary rounded-full opacity-40 blur-md animate-pulse"></div>
    
    <!-- Core Icon -->
    <div v-if="!isOpen" class="relative z-10 w-8 h-8 flex items-center justify-center">
      <img :src="star" class="w-full h-full animate-[spin_10s_linear_infinite]" />
    </div>
    <div v-else class="relative z-10 text-white transition-all transform hover:rotate-90">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </div>
  </button>
</template>
