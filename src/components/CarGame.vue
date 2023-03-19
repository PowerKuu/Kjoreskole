<script setup lang="ts">
import { onMounted } from "vue"

const { width, height } = defineProps<{
    width: number
    height: number
}>()

var canvas:HTMLCanvasElement

interface GameSate {
    speed: number
    playerSpeed: number
    roadY: number
    playerX: number
    playerWidth: number
    playerMargin: number,
    conesMargin: number,
    coneSpawnCurrentFrame: number,
    coneSpawnFrame: number,
    updateGameStateCurrentFrame: number,
    updateGameStateFrame: number,
    cones: {
        x: number
        y: number
    }[]
}

const gameState:GameSate = {
    speed: 5,
    playerSpeed: 8,
    roadY: 0,
    playerX: 0,
    playerWidth: 60,
    playerMargin: 20,
    conesMargin: 45,

    coneSpawnCurrentFrame: 0,
    coneSpawnFrame: 60,

    updateGameStateCurrentFrame: 0,
    updateGameStateFrame: 100,

    cones: []
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

function collides(a:any, b:any, marginX:number, marginY:number) {
    if (a.x < b.x + b.width + marginX &&
        a.x + a.width + marginX > b.x &&
        a.y < b.y + b.height + marginY &&
        a.y + a.height + marginY > b.y) {
        return true
    }

    return false
}

function draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    const roadImage = new Image()
    roadImage.src = "/src/assets/road.svg"
    gameState.roadY = 0

    const playerImage = new Image()
    playerImage.src = "/src/assets/car-top-down.svg"
    gameState.playerX = canvas.width / 2 - (gameState.playerWidth / 2)

    const coneImage = new Image()
    coneImage.src = "/src/assets/cone.svg"



    function getRandomFloat(min:number, max:number) {
        return Math.random() * (max - min) + min
    }

    function spawnCone() {
        gameState.cones.push({
            x: getRandomFloat(gameState.conesMargin, canvas.width - gameState.conesMargin),
            y: -100
        })

        console.log(gameState.cones)
    }

    function updateGameState() {
        gameState.speed += 0.1
        gameState.coneSpawnFrame -= 1
        gameState.playerSpeed += 0.1
    }

    function resetGame() {
        gameState.speed = 5
        gameState.coneSpawnFrame = 60
        gameState.playerSpeed = 8

        gameState.cones = []
        gameState.roadY = 0
        gameState.playerX = canvas.width / 2 - (gameState.playerWidth / 2)
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        gameState.coneSpawnCurrentFrame += 1
        gameState.updateGameStateCurrentFrame += 1


        // Seamless reapeating road no gaps no seams
        ctx.drawImage(roadImage, canvas.width/2, gameState.roadY, 20, canvas.height)
        ctx.drawImage(roadImage, canvas.width/2, gameState.roadY - canvas.height, 20, canvas.height)

        if (gameState.roadY > canvas.height) gameState.roadY = 0

        gameState.roadY += gameState.speed


        if (gameState.coneSpawnCurrentFrame >= gameState.coneSpawnFrame) {
            spawnCone()
            gameState.coneSpawnCurrentFrame = 0
        }

        if (gameState.updateGameStateCurrentFrame >= gameState.updateGameStateFrame) {
            updateGameState()
            gameState.updateGameStateCurrentFrame = 0
        }

        for (let cone of gameState.cones) {
            cone.y += gameState.speed

            if (collides({
                x: cone.x,
                y: cone.y,
                width: 50,
                height: 50
            }, {
                x: gameState.playerX,
                y: canvas.height / 2,
                width: gameState.playerWidth,
                height: gameState.playerWidth*2
            }, -15, -30)) {
                resetGame()
            }

            if (cone.y > canvas.height) gameState.cones.splice(gameState.cones.indexOf(cone), 1)
            ctx.drawImage(coneImage, cone.x, cone.y, 50, 50)
        }

        const right = canvas.width - gameState.playerWidth - gameState.playerMargin
        const left = gameState.playerMargin

        if (pressedKeys["ArrowLeft"] || pressedKeys["a"] || pressedKeys["A"]) {
            // Is car outside
            if (gameState.playerX > left) gameState.playerX -= gameState.playerSpeed
        } 
        
        if (pressedKeys["ArrowRight"] || pressedKeys["d"] || pressedKeys["D"]) {
            // Is car outside
            if (gameState.playerX < right) gameState.playerX += gameState.playerSpeed
        }

    
        

        ctx.drawImage(playerImage, gameState.playerX, canvas.height / 2, gameState.playerWidth, gameState.playerWidth*2)
    }

    let fps = 50

    let interval = Math.floor(1000 / fps)
    let startTime = performance.now()
    let previousTime = startTime

    let currentTime = 0
    let deltaTime = 0


    function frame(timestamp:number) {
        currentTime = timestamp
        deltaTime = currentTime - previousTime

        if (deltaTime > interval) {
            previousTime = currentTime - (deltaTime % interval)

            animate()
        }

        requestAnimationFrame(frame)
    }

    requestAnimationFrame(frame)
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