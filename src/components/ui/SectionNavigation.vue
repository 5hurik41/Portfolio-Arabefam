<script setup lang="ts">
import { getSlideUp, scrollIntoSection } from '@/utils/animation'
import Button from './Button.vue'
import flower from '../../assets/flower.svg'
import star from '../../assets/star.svg'

withDefaults(defineProps<{
  target: string
  label: string
  icon?: string
  iconClass?: string
  delay?: number
}>(), {
  delay: 450
})
</script>

<template>
  <footer class="absolute bottom-14 left-1/2 -translate-x-1/2 z-10" v-motion="getSlideUp(delay)">
    <div class="relative">
      <Button
        @click="scrollIntoSection(target)"
        class="relative z-20"
        :label="label"
        :icon="icon"
        :icon-class="iconClass"
      />
      <img :src="flower" class="absolute top-[-40%] left-[-20%] w-12.5 z-0 animate-[spin_10s_linear_infinite]" />
      <img :src="star" class="absolute top-[80%] right-[-15%] w-8 z-0 animate-pulse" />
    </div>
  </footer>
</template>
