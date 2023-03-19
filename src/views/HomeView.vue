<script setup lang="ts">
import Flex from "@/components/FlexSystem.vue"
import Button from "@/components/Button.vue"
import CarGame from "@/components/CarGame.vue"
</script>

<template>
  <Flex align="stretch" gap="1">
    <Flex class="left" direction="column" grow="1" gap="1.5">
      <h1>Lær <span>effektivt</span> <br> hos kjøreskolen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <Flex gap="1" class="space">
        <RouterLink to="/drive"><Button theme="color">Kjør</Button></RouterLink>
        <RouterLink to="/about"><Button theme="none">Om oss</Button></RouterLink>
      </Flex>
    </Flex>

    <Flex justify="end" grow="1" align="center">
      <CarGame :width="525" :height="400"></CarGame>
    </Flex>
  </Flex>
</template>


<style scoped>
.left {
  max-width: 32rem;
}

.space {
  margin-top: auto;
}
</style>