<script setup lang="ts">
import { getPop } from '@/utils/animation'
import flower from '../../assets/flower.svg'
import star from '../../assets/star.svg'
import Tag from './Tag.vue'

const tags = ['ui/ux', 'frontend', 'mobiledev', 'prototyping']
</script>

<template>
  <div
    class="absolute flex flex-col gap-2 items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none leading-none whitespace-nowrap"
    v-motion="getPop(900)"
  >
    <p class="text-3xl md:text-[3vw] font-medium">Creative Developer</p>
    <div class="text-8xl md:text-[12vw] font-extrabold">
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
          class="absolute -top-2 left-1/2 -translate-x-1/2 w-[0.4em] animate-[bounce_2s_linear_infinite]"
        /> </span
      >o
    </div>
    <footer class="flex gap-2 justify-center w-full">
      <Tag v-for="(tag, index) in tags" :tagname="tag" :key="index" />
    </footer>
  </div>
</template>
