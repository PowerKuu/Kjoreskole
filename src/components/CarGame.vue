<script setup lang="ts">
import { onMounted } from "vue"

var canvas:HTMLCanvasElement

onMounted(() => {
    var ctx = canvas.getContext('2d')
    const parent = canvas.parentElement
    if (!ctx || !parent) return

    window.onresize = () => {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
    }
})


</script>

<template>
<canvas class="canvas" ref="canvas"></canvas>
</template>

<style scoped>
</style>