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
        <p>
          Vi er en pålitelig og erfaren kjøreskole som er dedikert til 
          å gi våre elever den beste opplæringen og veiledningen i å 
          kjøre bil. Vårt mål er å gi deg den kompetansen og 
          selvtilliten du trenger for å bli en trygg og ansvarlig 
          sjåfør på veien.
        </p>
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

  <Flex class="section" align="stretch">
    <Flex class="left" direction="column" gap="0.75" grow="1">
      <Flex class="left" direction="column" gap="0.75" grow="1">
        <h2>Pris kalkulator</h2>
        <p :ref="(elem) => {scrollElement = elem}">
          På vår kjøreskole ønsker vi å gjøre det enkelt for 
          deg å forstå kostnadene ved å ta førerkort. Bruk 
          priskalkulatoren for å beregne kostnadene for våre 
          ulike programmer.
        </p>
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

.section {
  gap: 7vw !important;
}

.car-illustration {
  background-image: url("/src/assets/car-illustration.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>