<template>
  <div class="about">
    <TaiwanMap></TaiwanMap>
    <!-- <h1>This is an about page</h1> -->
  </div>
</template>

<script setup>
import TaiwanMap from '../components/icons/IconTaiwanMap.vue'
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
