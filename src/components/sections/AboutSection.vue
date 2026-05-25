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
import Button from '../ui/Button.vue'
import Flower from '../ui/Flower.vue'
import Grid from '../ui/Grid.vue'
import SectionIndicator from '../ui/SectionIndicator.vue'
import SectionNavigation from '../ui/SectionNavigation.vue'
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
        class="mx-auto flex w-full max-w-xl flex-col items-start gap-8 px-4 lg:mx-0"
        v-motion="getSlideUp(450)"
      >
        <div class="flex flex-col gap-3">
          <h2
            class="from-brand-dark to-brand-primary text-fluid-h2 bg-gradient-to-r bg-clip-text font-extrabold tracking-tight text-transparent"
          >
            Hello World !
          </h2>
          <div class="bg-brand-primary/40 h-1.5 w-16 rounded-full"></div>
        </div>

        <div
          class="relative rounded-3xl border border-white/50 bg-white/60 p-6 shadow-[0_20px_40px_#5a25fb15] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/80 hover:shadow-[0_25px_50px_#5a25fb26] md:p-8"
        >
          <svg
            class="text-brand-primary/30 absolute -top-5 -left-5 h-10 w-10 rotate-12 transition-transform duration-500 hover:rotate-0"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"
            />
          </svg>

          <p class="text-fluid-base text-left leading-relaxed font-medium text-slate-700">
            I'm <span class="text-brand-primary font-black">Andyh Rabefamantanatsoa</span>, a
            developer from Madagascar who loves bridging the gap between clean code and sharp
            design.
          </p>

          <p class="text-fluid-base mt-4 text-left leading-relaxed font-medium text-slate-600/90">
            I spend my time crafting smooth, modular web and mobile experiences. When I'm not
            tweaking a layout, I’m probably making pancakes or hanging out with dogs and cats.
          </p>

          <p class="text-fluid-base mt-6 flex items-center gap-2 font-bold text-slate-900">
            <span class="bg-brand-primary/50 block h-px w-8"></span>
            Let's build something memorable!
          </p>
        </div>
      </div>
    </div>

    <SectionIndicator name="About" current="01" total="3" />
    <SectionNavigation
      target="projects"
      label="Projects"
      :icon="arrow"
      icon-class="animate-bounce"
    />
  </section>
</template>
