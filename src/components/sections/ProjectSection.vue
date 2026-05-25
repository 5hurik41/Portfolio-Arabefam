<script setup lang="ts">
import { getPop, getSlideDown, getSlideUp, scrollIntoSection } from '@/utils/animation'
import { ref } from 'vue'
import arrow from '../../assets/arrow-down.svg'
import Button from '../ui/Button.vue'
import Card from '../ui/Card.vue'
import Grid from '../ui/Grid.vue'
import ProjectDialog from '../ui/ProjectDialog.vue'
import SectionIndicator from '../ui/SectionIndicator.vue'
import SectionNavigation from '../ui/SectionNavigation.vue'

import aikintanaCover from '../../assets/covers/Aikintana.png'
import cub3dCover from '../../assets/covers/cub3d.png'
import ftTranscendenceCover from '../../assets/covers/ft_transcendence.png'
import inceptionCover from '../../assets/covers/inception.png'

interface Project {
  title: string
  description: string
  tags: string[]
  link: string
  cover?: string
}

const projects: Project[] = [
  {
    title: 'ft_transcendence',
    description:
      'A real-time multiplayer Monopoly-like board game platform. Features live matchmaking, dynamic chat lobbies, and automated game state synchronization.',
    tags: ['NestJS', 'Vue.js', 'WebSockets', 'PostgreSQL'],
    link: '#',
    cover: ftTranscendenceCover,
  },
  {
    title: 'Inception',
    description:
      'System administration project aiming to broaden knowledge of Docker and Docker Compose by setting up an infrastructure of multiple services.',
    tags: ['Docker', 'Nginx', 'MariaDB', 'WordPress'],
    link: '#',
    cover: inceptionCover,
  },
  {
    title: 'Aikintana',
    description:
      'The first AI from Madagascar that turns your emotions into unique galaxies. Awarded 3rd place at the 2025-2026 Inter-University Hackathon, this project showcases real-time sentiment analysis merged with generative cosmic art.',
    tags: ['React', 'Three.js', 'GeminiFlashLiveAPI', 'Nest.js'],
    link: '#',
    cover: aikintanaCover,
  },
  {
    title: 'Cub3D',
    description:
      'A 3D raycaster engine built in C, inspired by Wolfenstein 3D. Explores the mathematical concepts behind raycasting and basic game engine mechanics.',
    tags: ['C', 'Raycasting', 'MiniLibX', 'Maths'],
    link: '#',
    cover: cub3dCover,
  },
]

const carouselRef = ref<HTMLElement | null>(null)
const selectedProject = ref<Project | null>(null)

const scrollNext = () => {
  if (carouselRef.value) {
    carouselRef.value.scrollBy({ left: 432, behavior: 'smooth' })
  }
}

const scrollPrev = () => {
  if (carouselRef.value) {
    carouselRef.value.scrollBy({ left: -432, behavior: 'smooth' })
  }
}

const openProject = (project: Project) => {
  selectedProject.value = project
}

const closeProject = () => {
  selectedProject.value = null
}
</script>

<template>
  <section
    id="projects"
    class="relative z-20 flex h-screen w-screen snap-start items-center justify-center overflow-hidden"
  >
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

    <div class="relative z-10 flex w-full max-w-360 flex-col px-4 md:px-8">
      <div class="mb-8 flex items-center justify-between px-4" v-motion="getSlideUp(150)">
        <h2 class="text-fluid-h2 font-bold whitespace-nowrap">Selected Work</h2>

        <div class="flex gap-2 md:gap-3" v-motion="getPop(300)">
          <button
            @click="scrollPrev"
            class="hover:bg-brand-primary hover:border-brand-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 backdrop-blur-md transition-all hover:-translate-y-1 hover:text-white hover:shadow-lg active:scale-95 md:h-14 md:w-14"
            aria-label="Previous project"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-5 w-5 md:h-6 md:w-6"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            @click="scrollNext"
            class="hover:bg-brand-primary hover:border-brand-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 backdrop-blur-md transition-all hover:-translate-y-1 hover:text-white hover:shadow-lg active:scale-95 md:h-14 md:w-14"
            aria-label="Next project"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-5 w-5 md:h-6 md:w-6"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref="carouselRef"
        class="hide-scrollbar -mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pt-6 pb-12 md:snap-x md:gap-8 lg:px-4"
        v-motion="getSlideUp(250)"
      >
        <Card
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
          @open="openProject"
        />
      </div>
    </div>

    <SectionIndicator name="Projects" current="02" total="3" />
    <SectionNavigation target="footer" label="Contact" :icon="arrow" icon-class="animate-bounce" />

    <ProjectDialog :project="selectedProject" @close="closeProject" />
  </section>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
