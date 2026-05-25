<script setup lang="ts">
import { getPop } from '@/utils/animation'
import Tag from './Tag.vue'

interface Project {
  title: string
  description: string
  tags: string[]
  link: string
  cover?: string
}

defineProps<{
  project: Project | null
}>()

defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <Teleport to="body">
    <div
      v-if="project"
      class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4"
      @click.self="$emit('close')"
    >
      <div
        v-motion="getPop(0)"
        class="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/50 bg-white/80 backdrop-blur-2xl shadow-2xl max-h-[90vh]"
      >

        <button
          @click="$emit('close')"
          class="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/50 text-slate-800 backdrop-blur-md transition-all hover:scale-110 hover:bg-white"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>


        <div class="overflow-y-auto hide-scrollbar flex-1">

          <div class="w-full h-64 sm:h-80 md:h-96 relative bg-slate-100 shrink-0">
            <img 
              v-if="project.cover" 
              :src="project.cover" 
              :alt="project.title" 
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent"></div>
          </div>


          <div class="px-6 md:px-10 pb-10 -mt-16 relative z-10">
            <h2 class="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">{{ project.title }}</h2>
            
            <p class="text-base md:text-lg text-slate-700 leading-relaxed font-medium mb-8 max-w-3xl">
              {{ project.description }}
            </p>

            <div class="flex flex-col gap-3">
              <h4 class="text-sm font-bold text-slate-400 uppercase tracking-widest">Technologies</h4>
              <div class="flex flex-wrap gap-2">
                <Tag v-for="tag in project.tags" :key="tag" :tagname="tag" />
              </div>
            </div>
            
            <div v-if="project.link && project.link !== '#'" class="mt-10">
              <a 
                :href="project.link" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-brand-primary text-white font-bold px-6 py-3 rounded-full hover:bg-brand-dark transition-colors hover:-translate-y-1 hover:shadow-lg"
              >
                Visit Project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
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
