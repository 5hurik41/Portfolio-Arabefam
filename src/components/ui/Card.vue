<script setup lang="ts">
import arrowTopRight from '../../assets/arrow-up-right.svg'
import Tag from './Tag.vue'

interface Project {
  title: string
  description: string
  tags: string[]
  link: string
}

defineProps<{
  project: Project
}>()
</script>

<template>
  <a
    :href="project.link"
    target="_blank"
    rel="noopener noreferrer"
    class="group hover:border-brand-primary/20 relative flex h-[280px] w-[85vw] shrink-0 snap-center flex-col justify-between rounded-3xl border border-white/50 bg-white/70 backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:rotate-[-1deg] hover:shadow-[0_4px_0_0_#5A25FB,0_16px_20px_0_rgba(90,31,257,0.12)] active:scale-[0.98] md:w-[400px] lg:w-[450px] md:h-[320px]"
  >
    <div>
      <div class="mb-4 flex flex-col items-start gap-3">
        <div
          class="group-hover:bg-brand-primary group-hover:border-brand-primary flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1 font-mono text-[10px] font-bold tracking-wider text-slate-500 uppercase transition-all duration-300 group-hover:text-white"
        >
          Case Study
          <img
            :src="arrowTopRight"
            class="h-2.5 w-2.5 opacity-60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:invert"
          />
        </div>
        <h3
          class="text-fluid-h3 group-hover:text-brand-primary font-black tracking-tight text-slate-950 transition-colors duration-300 line-clamp-2"
        >
          {{ project.title }}
        </h3>
      </div>

      <p class="text-fluid-base line-clamp-3 leading-relaxed font-medium text-slate-600">
        {{ project.description }}
      </p>
    </div>

    <footer class="mt-4 flex flex-wrap gap-2">
      <Tag v-for="tag in project.tags" :key="tag" :tagname="tag" class="!px-3 !py-1 !text-xs" />
    </footer>

    <!-- Hover Read Story Pill (Now active on mobile tap/hover too) -->
    <div
      class="bg-brand-primary pointer-events-none absolute right-4 bottom-16 translate-y-2 rounded-xl px-3 py-1.5 text-[11px] font-bold text-white opacity-0 shadow-md transition-all delay-75 duration-300 group-hover:translate-y-0 group-hover:opacity-100 hidden md:block"
    >
      Read Story
    </div>
    
    <!-- Mobile Persistent Arrow -->
    <div class="absolute right-6 bottom-6 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-brand-primary md:hidden transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white">
      <img :src="arrowTopRight" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:invert" />
    </div>
  </a>
</template>
