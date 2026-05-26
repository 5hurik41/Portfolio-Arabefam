<script setup lang="ts">
import { getPop, getSlideLeft, getSlideRight, getSlideUp } from '@/utils/animation'
import arrowUp from '../../assets/arrow-down.svg'
import Flower from '../ui/Flower.vue'
import Grid from '../ui/Grid.vue'
import SectionIndicator from '../ui/SectionIndicator.vue'
import SectionNavigation from '../ui/SectionNavigation.vue'

const contactLinks = [
  {
    label: 'Email Me',
    url: 'mailto:andyhrabefamantanatsoa@yahoo.com',
    colorClass: 'text-brand-primary',
    bgClass: 'bg-brand-primary/10',
    groupHoverBg: 'group-hover:bg-brand-primary',
    shadowHover: 'hover:shadow-[0_15px_30px_#5a25fb26]',
    iconSvg: `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>`,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/andyh-rabe',
    colorClass: 'text-[#0a66c2]',
    bgClass: 'bg-[#0a66c2]/10',
    groupHoverBg: 'group-hover:bg-[#0a66c2]',
    shadowHover: 'hover:shadow-[0_15px_30px_#0a66c226]',
    iconSvg: `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>`,
  },
  {
    label: 'GitHub',
    url: 'https://github.com/5hurik41',
    colorClass: 'text-[#181717]',
    bgClass: 'bg-[#181717]/10',
    groupHoverBg: 'group-hover:bg-[#181717]',
    shadowHover: 'hover:shadow-[0_15px_30px_#18171726]',
    iconSvg: `<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>`,
  },
]
</script>

<template>
  <section
    id="footer"
    class="relative z-20 flex h-dvh w-full snap-start flex-col items-center justify-center overflow-hidden"
  >
    <Grid />

    <Flower
      class="absolute top-10 right-0 w-52 translate-x-1/2 opacity-80 md:w-64"
      v-motion="getSlideRight(150)"
    />

    <Flower
      class="absolute bottom-10 left-0 w-24 -translate-x-1/2 opacity-80 md:w-48"
      v-motion="getSlideLeft(300)"
    />

    <div
      class="relative z-10 flex flex-col items-center justify-center px-4 text-center"
      v-motion="getSlideUp(250)"
    >
      <h2
        class="text-[clamp(3rem,8vw,8rem)] leading-[1.1] font-extrabold tracking-tight text-slate-900"
      >
        Let's Build <br />
        <span class="text-brand-primary">Something.</span>
      </h2>
      <p
        class="text-fluid-base mt-6 max-w-xl font-medium text-slate-600"
        v-motion="getSlideUp(350)"
      >
        I'm always open to discussing product design work or partnership opportunities. Let's make
        something memorable together.
      </p>
    </div>

    <div
      class="relative z-10 mt-12 flex flex-wrap items-center justify-center gap-4 px-4"
      v-motion="getPop(450)"
    >
      <a
        v-for="(link, i) in contactLinks"
        :key="i"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="group text-fluid-base! flex items-center gap-3 rounded-2xl border border-white/50 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-2"
        :class="link.shadowHover"
      >
        <div
          class="flex h-10 w-10 items-center justify-center rounded-full transition-colors group-hover:text-white"
          :class="[link.colorClass, link.bgClass, link.groupHoverBg]"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            v-html="link.iconSvg"
          ></svg>
        </div>
        <span class="font-bold text-slate-800">{{ link.label }}</span>
      </a>
    </div>

    <SectionIndicator name="Contact" current="03" total="3" />
    <SectionNavigation
      target="home"
      label="Back to Top"
      :icon="arrowUp"
      icon-class="animate-bounce rotate-180"
      :delay="550"
      class="hidden md:block"
    />
  </section>
</template>
