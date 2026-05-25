<script setup lang="ts">
import AboutSeection from '@/components/sections/AboutSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ProjectSection from '@/components/sections/ProjectSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
</script>
<template>
  <main class="relative h-screen w-full snap-y snap-mandatory overflow-x-hidden overflow-y-scroll">
    <HeroSection />

    <AboutSeection />

    <ProjectSection />

    <FooterSection />
  </main>
</template>
