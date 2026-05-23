<script setup lang="ts">
import { getSlideLeft, getSlideRight, getSlideUp } from '@/utils/animation'
import flower from '../../assets/flower.svg'
import star from '../../assets/star.svg'
import Button from '../ui/Button.vue'
import Flower from '../ui/Flower.vue'
import Grid from '../ui/Grid.vue'
import HeroTitle from '../ui/HeroTitle.vue'
</script>

<template>
  <section class="w-full h-full">
    <Grid />
    <Flower
      class="w-52 md:w-64 lg:w-72 absolute bottom-5 left-0 -translate-x-1/2 opacity-80"
      v-motion="getSlideLeft(150)"
    />
    <Flower
      class="w-60 md:w-80 lg:w-96 absolute top-10 right-0 translate-x-1/2 opacity-80"
      v-motion="getSlideRight(300)"
    />
    <HeroTitle />
    <footer class="absolute bottom-14 left-1/2 -translate-x-1/2" v-motion="getSlideUp(450)">
      <div class="relative">
        <Button class="relative z-10" />
        <img :src="flower" class="absolute z-0 top-[20%] left-[-15%] w-12.5" />
        <img :src="star" class="absolute z-0 top-[-60%] right-[-20%] w-16.5" />
      </div>
    </footer>
  </section>
</template>
