<script setup lang="ts">
import { getSlideLeft, getSlideRight } from '@/utils/animation'
import arrow from '../../assets/arrow-down.svg'
import Flower from '../ui/Flower.vue'
import Grid from '../ui/Grid.vue'
import HeroTitle from '../ui/HeroTitle.vue'
import SectionNavigation from '../ui/SectionNavigation.vue'
</script>

<template>
  <section id="home" class="relative z-10 h-dvh w-full snap-start overflow-hidden">
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

    <SectionNavigation target="about" label="Discover" :icon="arrow" icon-class="animate-bounce" />
  </section>
</template>
