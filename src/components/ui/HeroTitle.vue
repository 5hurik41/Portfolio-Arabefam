<script setup lang="ts">
import flower from '../../assets/flower.svg'
import star from '../../assets/star.svg'
</script>

<template>
  <div
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold select-none leading-none text-8xl md:text-[12vw] whitespace-nowrap"
  >
    <span class="relative inline-block">
      P
      <img
        :src="flower"
        class="absolute top-[15%] left-[10%] w-[0.5em] -translate-x-1/2 -translate-y-1/2"
      />
    </span>

    <span>ortfol</span>

    <span class="relative inline-block">
      ı
      <img :src="star" class="absolute -top-2 left-1/2 -translate-x-1/2 w-[0.4em]" /> </span
    >o
  </div>
</template>
