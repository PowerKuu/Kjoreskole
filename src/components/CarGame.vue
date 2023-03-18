<script setup lang="ts">
import { onMounted } from "vue"

const { width, height } = defineProps<{
    width: number
    height: number
}>()

var canvas:HTMLCanvasElement

const gameState = {
    speed: 3,
    roadY: 0,
    playerX: 0,
    playerWidth: 60,
    playerMargin: 20,

    
}

const pressedKeys:any = {}

function init() {
    const ctx = canvas.getContext('2d')
    const parent = canvas.parentElement
    if (!ctx || !parent) return

    canvas.width = width
    canvas.height = height

    draw(ctx, canvas)
}

function collides(a:any, b:any) {
    if (a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y) return true

    return false
}

function draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    const road = new Image()
    road.src = "/src/assets/road.svg"
    gameState.roadY = 0

    const player = new Image()
    player.src = "/src/assets/car-top-down.svg"
    gameState.playerX = canvas.width / 2 - (gameState.playerWidth / 2)

    let lastTime:number
    let requiredElapsed = 1000 / 60


    function render(now:number) {
        requestAnimationFrame(render)

        if (!lastTime) { lastTime = now }
        const elapsed = now - lastTime
        if (elapsed < requiredElapsed)  return

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        gameState.roadY += gameState.speed


        if (gameState.roadY > canvas.height) {gameState.roadY = 0}

        ctx.drawImage(road, 0, gameState.roadY, canvas.width, canvas.height)
        ctx.drawImage(road, 0, gameState.roadY - canvas.height, canvas.width, canvas.height)
        

        ctx.drawImage(player, gameState.playerX, canvas.height / 2, gameState.playerWidth, gameState.playerWidth*2)
        
        // Inputs

        const right = canvas.width - gameState.playerWidth - gameState.playerMargin
        const left = gameState.playerMargin

        if (pressedKeys["ArrowLeft"] || pressedKeys["a"] || pressedKeys["A"]) {
            // Is car outside
            if (gameState.playerX > left) gameState.playerX -= 4
        } 
        
        if (pressedKeys["ArrowRight"] || pressedKeys["d"] || pressedKeys["D"]) {
            // Is car outside
            if (gameState.playerX < right) gameState.playerX += 4
        }

        lastTime = now
    }

    requestAnimationFrame(render)
}


onMounted(() => {
    init()

    window.onkeyup = function({key}) { pressedKeys[key] = false }
    window.onkeydown = function({key}) { pressedKeys[key] = true }
})
</script>

<template>
<canvas class="canvas" ref="canvas"></canvas>
</template>

<style scoped>
</style>