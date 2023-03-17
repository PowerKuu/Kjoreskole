<script setup lang="ts">
import { RouterLink } from "vue-router"
import Flex from "./FlexSystem.vue"
import Button from "./Button.vue"

</script>

<template>
<Flex tag="nav" align="center" justify="space-between" class="navbar">
    <Flex gap="1" align="center">
        <RouterLink to="/" class="center">
            <img class="icon" src="@/assets/car.svg" alt="">
        </RouterLink>

        <RouterLink to="/">
            <span>Kjøreskolen</span>
        </RouterLink>
    </Flex>

    <Flex gap="1.6" align="center">
        <RouterLink to="/about">
            <p>Om oss</p>
        </RouterLink>
        <RouterLink to="/#calculator">
            <p>Pris kalkulator</p>
        </RouterLink>
        <RouterLink to="/contact">
            <p>Kontakt</p>
        </RouterLink>
        
        <RouterLink to="/drive">
            <Button theme="white">Kjør</Button>
        </RouterLink>   
    </Flex>
</Flex>
</template>

<style scoped>
.navbar {
    padding: 1rem var(--padding);
    background-color: var(--color);
}

.navbar p, .navbar {
    color: white;
}

.icon {
    width: 2.5rem;
    height: 2.5rem;
}

.center {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>