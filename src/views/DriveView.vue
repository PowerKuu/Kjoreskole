<script setup lang="ts">
import Flex from "@/components/FlexSystem.vue"
import DriverCard from "@/components/DriverCard.vue"
</script>
<template>
    <div class="cards">
        <DriverCard driverID="kari" :classes="['A1', 'B1']" selfie="/marthin.png" name="Kari sveitsborg">
            Kari sveitsborg er en veldig flink sjåfør som har kjørt i 20 år.
        </DriverCard>

        <DriverCard driverID="harald" :classes="['B1']" selfie="/harald.png" name="Haralad sprett">
            Haralad sprett er en veldig flink sjåfør som har kjørt i 20 år.
        </DriverCard>

        <DriverCard driverID="preben" :classes="['A1']" selfie="/preben.png" name="Preben spekken">
            Preben spekken er en veldig flink sjåfør som har kjørt i 20 år.
        </DriverCard>
    </div>
</template>

<style scoped>
.cards {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr)
}
</style>
