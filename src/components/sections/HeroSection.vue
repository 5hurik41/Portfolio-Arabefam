<script setup lang="ts">
import { getSlideLeft, getSlideRight, getSlideUp, scrollIntoSection } from '@/utils/animation'
import arrow from '../../assets/arrow-down.svg'
import flower from '../../assets/flower.svg'
import star from '../../assets/star.svg'
import Button from '../ui/Button.vue'
import Flower from '../ui/Flower.vue'
import Grid from '../ui/Grid.vue'
import HeroTitle from '../ui/HeroTitle.vue'
</script>

<template>
  <section id="home" class="relative z-10 h-screen w-screen snap-start overflow-hidden">
    <Grid />

    <Flower
      class="absolute top-5 left-0 w-52 -translate-x-1/2 opacity-80 md:w-64 lg:w-72"
      v-motion="getSlideLeft(150)"
    />

    <Flower
      class="absolute right-0 bottom-10 w-60 translate-x-1/2 opacity-80 md:w-80 lg:w-96"
      v-motion="getSlideRight(300)"
    />

    <HeroTitle />

    <footer class="absolute bottom-14 left-1/2 -translate-x-1/2" v-motion="getSlideUp(450)">
      <div class="relative">
        <Button
          @click="scrollIntoSection('about')"
          class="relative z-10"
          label="Discover"
          :icon="arrow"
          icon-class="animate-bounce"
        />
        <img :src="flower" class="z- absolute top-[20%] left-[-15%] w-12.5" />
        <img :src="star" class="absolute top-[-60%] right-[-20%] z-0 w-16.5" />
      </div>
    </footer>
  </section>
</template>
