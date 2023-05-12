<script setup lang="ts">
import Flex from "@/components/FlexSystem.vue"
import Button from "@/components/Button.vue"
import { ref } from "vue"
import { db } from "@/firebase"
import { addDoc, collection, doc, setDoc } from "firebase/firestore"

const formData = ref<{
    name: string,
    email: string,
    message: string
}>({
    name: "",
    email: "",
    message: ""
})


async function sendForm() {
    const collectionRef = collection(db, "contact")
    console.log(formData.value)
    await setDoc(doc(collectionRef, formData.value.email), formData.value)

    formData.value = {
        name: "",
        email: "",
        message: ""
    }
}
</script>

<template>

<Flex class="book" direction="column" gap="1" align="center">
    <h1>Har du spørsmål?</h1>

    <Flex class="form" direction="column" gap="1" align="stretch">
        <Flex direction="column" align="stretch" gap="0.75">

            <Flex align="stretch" gap="0.75">
                <Flex direction="column" class="grow">
                    <p class="tip">Navn</p>
                    <input v-model="formData.name" class="grow" type="text" placeholder="Per ove"> 
                </Flex>
                <Flex direction="column" class="grow">
                    <p class="tip">Email</p>
                    <input v-model="formData.email" class="grow" type="email" placeholder="per@gmail.com">
                </Flex>
            </Flex>

            <Flex direction="column">
                <p class="tip">Melding</p>
                <textarea v-model="formData.message" name="" id="" cols="30" rows="10" placeholder="Send oss feedback"></textarea>
            </Flex>
        </Flex>

        <Flex justify="space-between" align="center" class="grow">
            <p>Vi responderer raskets mulig.</p>
            <Button theme="color" @click="sendForm">Send</Button>
        </Flex>
    </Flex>
</Flex>
</template>

<style scoped>
.form {
    min-width: 32.5rem;
    max-width: 32.5rem;
}
.book {
    text-align: center;
}
.grow {
    flex: 1 !important;
}

.tip {
    text-align: start;
    font-size: 0.75rem;
}
</style>