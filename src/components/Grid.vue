<template>
  <div class="absolute inset-0 z-0 grid-bg opacity-20"></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.grid-bg {
  background-image:
    linear-gradient(to right, #262529 1px, transparent 1px),
    linear-gradient(to bottom, #262529 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: center center;
}
</style>
