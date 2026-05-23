<script setup lang="ts">
import Button from '../ui/Button.vue'
import Flower from '../ui/Flower.vue'
import Grid from '../ui/Grid.vue'
import HeroTitle from '../ui/HeroTitle.vue'
</script>

<template>
  <Grid />
  <Flower class="w-52 md:w-64 lg:w-72 absolute bottom-5 left-0 -translate-x-1/2 opacity-80" />
  <Flower class="w-60 md:w-80 lg:w-96 absolute top-10 right-0 translate-x-1/2 opacity-80" />
  <HeroTitle />
  <footer class="absolute bottom-14 left-1/2 -translate-x-1/2">
    <Button />
  </footer>
</template>
