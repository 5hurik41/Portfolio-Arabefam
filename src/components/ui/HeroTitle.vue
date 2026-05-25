<script setup lang="ts">
import { getPop } from '@/utils/animation'
import flower from '../../assets/flower.svg'
import star from '../../assets/star.svg'
import Tag from './Tag.vue'

const tags = ['ui/ux', 'frontend', 'mobiledev', 'prototyping']
</script>

<template>
  <div
    class="absolute top-1/2 left-1/2 flex w-full max-w-[95vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 leading-none select-none px-4 text-center"
    v-motion="getPop(900)"
  >
    <h2 class="text-fluid-h2 font-medium w-full text-center">Creative Developer</h2>
    <div class="text-fluid-h1 font-extrabold w-full text-center whitespace-nowrap">
      <span class="relative inline-block">
        P
        <img
          :src="flower"
          class="absolute top-[15%] left-[10%] w-[0.5em] -translate-x-1/2 -translate-y-1/2 animate-[spin_15s_linear_infinite]"
        />
      </span>

      <span>ortfol</span>

      <span class="relative inline-block">
        ı
        <img
          :src="star"
          class="absolute -top-2 left-1/2 w-[0.4em] -translate-x-1/2 animate-[bounce_2s_linear_infinite]"
        /> </span
      >o
    </div>
    <footer class="flex w-full flex-wrap justify-center gap-2">
      <Tag v-for="(tag, index) in tags" :tagname="tag" :key="index" />
    </footer>
  </div>
</template>
