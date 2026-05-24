<script setup lang="ts">
import { getPop, getSlideLeft, getSlideRight, getSlideUp } from '@/utils/animation'
import avatarBlob from '../../assets/Avatar.svg'
import Flower from '../ui/Flower.vue'
import Grid from '../ui/Grid.vue'
</script>

<template>
  <section
    id="about"
    class="relative z-20 flex h-screen w-screen snap-start items-center justify-center overflow-hidden text-9xl"
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

    <div
      class="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-8 lg:grid-cols-12"
    >
      <div
        class="relative hidden aspect-square w-full max-w-85 md:max-w-100 lg:col-span-5 lg:block lg:max-w-full"
        v-motion="getPop(550)"
      >
        <img :src="avatarBlob" alt="Andyh Illustration" class="h-full w-full object-contain" />
      </div>

      <div
        class="flex w-full max-w-xl flex-col items-center gap-4 px-4 lg:col-span-7 lg:items-start"
        v-motion="getSlideUp(450)"
      >
        <h2
          class="from-brand-dark to-brand-primary bg-linear-to-r bg-clip-text text-5xl font-bold text-transparent md:text-6xl"
        >
          Hello World !
        </h2>
        <p class="text-center text-xl leading-relaxed font-medium lg:text-left">
          I'm <span class="text-brand-primary font-bold">Andyh Rabefamantanatsoa</span>, a developer
          from Madagascar who loves bridging the gap between clean code and sharp design. I spend my
          time crafting smooth, modular web and mobile experiences. When I'm not tweaking a layout,
          I’m probably making pancakes or hanging out with dogs and cats. Let's build something
          memorable together!
        </p>
      </div>
    </div>
  </section>
</template>
