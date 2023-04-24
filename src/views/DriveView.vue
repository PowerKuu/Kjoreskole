<script setup lang="ts">
import Flex from "@/components/FlexSystem.vue"
import DriverCard from "@/components/DriverCard.vue"
</script>
<template>
    <Flex class="cards" gap="1">
        <DriverCard driverID="123" :classes="['A1', 'B1']" selfie="/marthin.png" name="Kari">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        </DriverCard>
    </Flex>
</template>

<style scoped>

</style>
