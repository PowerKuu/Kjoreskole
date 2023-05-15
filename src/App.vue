<script setup lang="ts">
import { RouterView } from "vue-router"
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/Footer.vue"
</script>

<template>
  <div class="normal">
    <NavBar></NavBar>
    <main class="container">
      <RouterView/>
    </main>
    <Footer></Footer>
  </div>

  <p class="phone-error">Denne nettsiden funker foreløpig ikke på mobil.</p>
</template>

<style scoped>
.container {
    padding: 4rem var(--padding);
}

.phone-error {
  display: none;
  
  width: 100%;
  text-align: center;
}

@media (max-width: 950px) {
  .phone-error {
    display: block;
  }

  .normal {
    display: none;
  }
}
</style>
