<script setup lang="ts">
import {
  getPop,
  getSlideDown,
  getSlideLeft,
  getSlideRight,
  getSlideUp,
  scrollIntoSection,
} from '@/utils/animation'
import arrow from '../../assets/arrow-down.svg'
import avatarBlob from '../../assets/Avatar.svg'
import flower from '../../assets/flower.svg'
import star from '../../assets/star.svg'
import Button from '../ui/Button.vue'
import Flower from '../ui/Flower.vue'
import Grid from '../ui/Grid.vue'
</script>

<template>
  <section
    id="about"
    class="relative z-20 flex h-screen w-screen snap-start items-center justify-center overflow-hidden"
  >
    <Flower
      class="absolute bottom-5 left-0 w-52 -translate-x-1/2 opacity-80 md:w-64 lg:w-72"
      v-motion="getSlideLeft(150)"
    />

    <Flower
      class="absolute top-5 right-0 w-60 translate-x-1/2 opacity-80 md:w-80 lg:w-96"
      v-motion="getSlideRight(300)"
    />
    <Grid />
    <header class="absolute top-14 left-1/2 -translate-x-1/2" v-motion="getSlideDown(450)">
      <div class="relative">
        <Button
          @click="scrollIntoSection('home')"
          class="text-brand-primary relative z-20 animate-[bounce_3s_infinite] transition-all duration-300 hover:-translate-y-1"
          label="Back to home"
        />
      </div>
    </header>
    <div
      class="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-14 lg:flex-row lg:gap-8"
    >
      <div
        class="relative hidden aspect-square w-full max-w-85 shrink-0 md:max-w-100 lg:block lg:w-100"
        v-motion="getPop(550)"
      >
        <img :src="avatarBlob" alt="Andyh Illustration" class="h-full w-full object-contain" />
      </div>

      <div
        class="mx-auto flex w-full max-w-xl flex-col items-start gap-2 px-4 lg:mx-0"
        v-motion="getSlideUp(450)"
      >
        <h2
          class="from-brand-dark to-brand-primary text-fluid-h2 bg-linear-to-r bg-clip-text font-bold text-transparent"
        >
          Hello World !
        </h2>
        <p class="text-fluid-base text-left leading-relaxed font-medium text-slate-600">
          I'm <span class="text-brand-primary font-bold">Andyh Rabefamantanatsoa</span>, a developer
          from Madagascar who loves bridging the gap between clean code and sharp design. I spend my
          time crafting smooth, modular web and mobile experiences. When I'm not tweaking a layout,
          I’m probably making pancakes or hanging out with dogs and cats. Let's build something
          memorable together!
        </p>
      </div>
    </div>

    <div
      class="text-fluid-base absolute right-14 bottom-6 font-bold lg:right-24 lg:bottom-12"
      v-motion="getPop(450)"
    >
      About 01/4
    </div>
    <footer class="absolute bottom-14 left-1/2 -translate-x-1/2" v-motion="getSlideUp(450)">
      <div class="relative">
        <Button
          @click="scrollIntoSection('projects')"
          class="relative z-20"
          label="Projects"
          :icon="arrow"
          icon-class="animate-bounce"
        />
        <img :src="flower" class="z- absolute top-[20%] left-[-15%] w-12.5" />
        <img :src="star" class="absolute top-[-60%] right-[-20%] z-0 w-16.5" />
      </div>
    </footer>
  </section>
</template>
