<script setup lang="ts">
import Flex from "./FlexSystem.vue"
import { ref } from "vue"

const value = ref(10)

const min = 1
const max = 99

const costPerHour = 500
const initialCost = 1000
</script>

<template>
    <Flex justify="start" align="stretch" direction="column" gap="1" width="100%">
        <select>
            <option value="a1">A1 (BIL)</option>
            <option value="b1">B1 (MOTORSYKKEL)</option>
        </select>
        <input class="range" v-model="value" type="range" :min="min" :max="max">
        <Flex width="100%">
            <Flex direction="column" class="display">
                <p>Timer</p>
                <p class="value">{{ value }}</p>
            </Flex>
            <Flex grow="1" direction="column" class="display pris">
                <p>Pris</p>
                <p class="value">{{ initialCost + (value * costPerHour) }}kr</p>
            </Flex>
        </Flex>
    </Flex>
</template>

<style scoped>
.range {
    padding: 0;
    cursor: pointer;

    appearance: none;
    width: 100%;
    background: var(--weak);
    border-radius: 5px;
    outline: none;
    border: none;
    transition: opacity .2s;

    height: 4px;

    margin: 0.5rem 0;
}

.range::-webkit-slider-thumb {
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;

    background: var(--color);
    border-radius: 50%;
    cursor: pointer;
    transition: transform .2s;
}


.display {
    padding: 0.5rem 6rem;
    padding-left: 0.5rem;

    border: 2px solid var(--weak);

    border-radius: 5px;
}

.display.pris {
    border-radius: 0 5px 5px 0;
    border-left: none;
}

.display:not(.pris) {
    border-radius: 5px 0 0 5px;
}

.pris {
    border-left: none;
}

.pris p{
    margin-right: auto;
}

.value {
    font-size: 1.5rem;
    font-weight: 400;
    color: black;

    width: 100%;
}
</style>