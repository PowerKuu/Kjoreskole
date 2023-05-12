<script setup lang="ts">
import { RouterView } from "vue-router"
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/Footer.vue"
</script>

<template>
  <NavBar></NavBar>
  <main class="container">
    <RouterView/>
  </main>
  <Footer></Footer>
</template>

<style scoped>
.container {
    padding: 4rem var(--padding);
}
</style>
