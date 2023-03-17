<script setup lang="ts">
import { RouterView } from "vue-router"
import NavBar from "@/components/NavBar.vue"

</script>

<template>
  <NavBar></NavBar>
  <main class="container">
    <RouterView/>
  </main>
</template>

<style scoped>
.container {
    padding: 6rem var(--padding);
}
</style>
