<script setup lang="ts">
import Flex from "./FlexSystem.vue"
import Button from "./Button.vue"

const { name, selfie, classes } = defineProps<{
    selfie: string,
    name: string,
    classes: string[],
    driverID: string
}>()
</script>

<template>
<Flex class="card" direction="column" gap="0.75" align="center" justify="center">
    <img class="card-image" :src="selfie" alt="">
    <Flex direction="column" align="center">
        <p class="name">{{ name }}</p>
        <p class="classes">{{ classes.join(", ") }}</p>
    </Flex>
    <p><slot></slot></p>
    <RouterLink :to="`/drive/${driverID}`">
        <Button theme="color">Book</Button>
    </RouterLink>
</Flex>
</template>

<style scoped>
.card {
    max-width: 20rem;
    min-width: 20rem;
    max-height: 30rem;
    min-height: 27.5rem;
    background-color: white;
    border: 2px solid var(--weak);
    padding: 1rem;

    text-align: center;

    border-radius: 5px;
}
.name {
    font-size: 1.25rem;
    font-weight: 600;
    color: black;
}

.card-image {
    width: 10rem;
    border-radius: 50%;
}

.classes {
    color: var(--color);
}
</style>