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
  <footer
    class="text-fluid-tag absolute bottom-6 left-1/2 z-10 -translate-x-1/2 md:bottom-14"
    v-motion="getSlideUp(delay)"
  >
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
        class="absolute bottom-[-5%] left-[-2%] z-0 w-5 animate-[spin_10s_linear_infinite] lg:bottom-[-25%] lg:left-[-15%] lg:w-12"
      />
      <img
        :src="star"
        class="absolute top-[-5%] right-[-5%] z-0 w-6 animate-pulse lg:top-[-30%] lg:right-[-15%] lg:w-12"
      />
    </div>
  </footer>
</template>
