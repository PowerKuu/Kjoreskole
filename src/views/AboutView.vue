<script setup lang="ts">
import Flex from "@/components/FlexSystem.vue"


</script>

<template>
    <Flex class="about" justify="space-between" align="stretch" gap="7">
        <Flex direction="column" grow="1" gap="2" justify="center">
            <h2>Om kjøreskolen</h2>
            
            <p>
                Kjøreskolen er Bergens største kjøreskole. Vi har lang erfaring og gir deg personlig oppfølging fra første time av trygge og vennlige lærere.

                Vi har som mål å gjøre det enkelt og trygt for deg å ta førerkort i alle klasser og leverer kvalitet gjennom hele opplæringen.
            </p>
        </Flex>

        <Flex grow="1">
            <iframe src="https://www.youtube.com/embed/HCtqn51kuaY" title="Hvordan vi anbefaler å kjøre!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Flex>
    </Flex>
</template>

<style scoped>
.about {
    min-height: 50vh;
}

iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px;
}
</style>