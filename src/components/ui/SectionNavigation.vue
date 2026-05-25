<script setup lang="ts">
import { getSlideUp, scrollIntoSection } from '@/utils/animation'
import flower from '../../assets/flower.svg'
import star from '../../assets/star.svg'
import Button from './Button.vue'

withDefaults(
  defineProps<{
    target: string
    label: string
    icon?: string
    iconClass?: string
    delay?: number
  }>(),
  {
    delay: 450,
  },
)
</script>

<template>
  <footer class="absolute bottom-6 md:bottom-14 left-1/2 z-10 -translate-x-1/2" v-motion="getSlideUp(delay)">
    <div class="relative">
      <Button
        @click="scrollIntoSection(target)"
        class="relative z-20"
        :label="label"
        :icon="icon"
        :icon-class="iconClass"
      />
      <img
        :src="flower"
        class="absolute bottom-[-15%] left-[-20%] z-0 w-12.5 animate-[spin_10s_linear_infinite]"
      />
      <img :src="star" class="absolute top-[-25%] right-[-15%] z-0 w-12 animate-pulse" />
    </div>
  </footer>
</template>
