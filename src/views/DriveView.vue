<script setup lang="ts">
import Flex from "@/components/FlexSystem.vue"
import DriverCard from "@/components/DriverCard.vue"
</script>
<template>
    <Flex class="cards" gap="1">
        <DriverCard driverID="kari" :classes="['A1', 'B1']" selfie="/marthin.png" name="Kari sveitsborg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        </DriverCard>

        <DriverCard driverID="harald" :classes="['B1']" selfie="/harald.png" name="Haralad sprett">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        </DriverCard>

        <DriverCard driverID="preben" :classes="['A1']" selfie="/preben.png" name="Preben spekken">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        </DriverCard>
    </Flex>
</template>

<style scoped>

</style>
