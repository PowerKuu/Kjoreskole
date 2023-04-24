<script setup lang="ts">
import Flex from "@/components/FlexSystem.vue"
import Button from "@/components/Button.vue"
import CarGame from "@/components/CarGame.vue"
import Separator from "@/components/Separator.vue"
import PriceCalculator from "@/components/PriceCalculator.vue"
import { useRoute } from "vue-router"
import { onMounted, ref, watch } from "vue"
import router from "@/router"

const route = useRoute()

const scrollElement = ref()

watch(route, updateRoute)
onMounted(updateRoute)

function scrollCalulator() {
  scrollElement.value.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest"
  })

  router.push({
    hash: ''
  })
}

function updateRoute() {
  if (route.hash == "#calculator"){
    if (scrollElement.value) scrollCalulator()
  }
}
</script>

<template>
  <Flex align="stretch" gap="1">
    <Flex class="left" direction="column" grow="1.5" gap="1.5">
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

  <Separator></Separator>

  <Flex align="stretch" gap="6">
    <Flex class="left" direction="column" gap="1" grow="1">
      <Flex class="left" direction="column" gap="1" grow="1">
        <h1>Pris kalkulator</h1>
        <p :ref="(elem) => {scrollElement = elem}">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <PriceCalculator></PriceCalculator>
      </Flex>
      <Flex gap="1">
        <RouterLink to="/drive">
          <Button theme="color">Kjør</Button>
        </RouterLink>
        <RouterLink to="/about">
          <Button theme="none">Lær mer</Button>
        </RouterLink>
      </Flex>
    </Flex>

    <Flex direction="column" grow="1" align="center" class="car-illustration">
    </Flex>
  </Flex>
</template>


<style scoped>
.left {
  max-width: 28rem;
}

.space {
  margin-top: auto;
}

.car-illustration {
  background-image: url("/src/assets/car-illustration.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>