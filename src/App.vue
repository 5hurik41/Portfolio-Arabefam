<script setup lang="ts">
import Flower from './components/Flower.vue'
import Grid from './components/Grid.vue'
</script>

<template>
  <main class="relative h-screen w-full">
    <Grid />
    <Flower class="w-52 md:w-64 lg:w-72 absolute bottom-5 left-0 -translate-x-1/2 opacity-80" />
    <Flower class="w-60 md:w-80 lg:w-96 absolute top-10 right-0 translate-x-1/2 opacity-80" />
  </main>
</template>

<style scoped></style>
