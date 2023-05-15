<script setup lang="ts">
import Flex from "@/components/FlexSystem.vue"
import DriverCard from "@/components/DriverCard.vue"
import { ref } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";


const drivers = ref<{
    id: string,
    classes: string[],
    selfie: string,
    name: string,
    description: string
}[]>([])

getDocs(collection(db, "drivers")).then((snapshot) => {
    snapshot.forEach((doc) => {
        drivers.value.push(doc.data() as any)
    })
})
</script>
<template>
    <div class="cards">
        <DriverCard v-for="{ id, classes, selfie, name, description } of drivers" :key="id" :driverID="id" :classes="classes" :selfie="selfie" :name="name">
            {{ description }}
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
