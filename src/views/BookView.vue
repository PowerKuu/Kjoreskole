<script setup lang="ts">
import Flex from "@/components/FlexSystem.vue"
import Button from "@/components/Button.vue"
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore"
import { db } from "@/firebase"
import { ref } from "vue"
import { useRoute } from "vue-router"

const driverID = useRoute().params.id as string

const drivers = ref<{
    name: string
    id: string
}[]>([])

const formData = ref({
    name: "",
    phone: "",
    email: "",
    teacher: driverID,
    course: "",
    message: ""
})


async function sendForm() {
    const collectionRef = collection(db, "drive")
    await setDoc(doc(collectionRef, formData.value.email), formData.value)

    formData.value = {} as any
    formData.value = {
        name: "",
        phone: "",
        email: "",
        teacher: driverID,
        course: "",
        message: ""
    }
}

getDocs(collection(db, "drivers")).then((snapshot) => {
    snapshot.forEach((doc) => {
        const data = doc.data()

        drivers.value.push({
            name: data.name,
            id: data.id
        })
    })
})
</script>

<template>

<Flex class="book" direction="column" gap="1" align="center">
    <h1>Er du klar for å <span>kjøre på</span></h1>

    <Flex class="form" direction="column" gap="1" align="stretch">
        <Flex direction="column" align="stretch" gap="0.75">

            <Flex align="stretch" gap="0.75">
                <Flex direction="column" class="grow">
                    <p class="tip">Navn</p>
                    <input v-model="formData.name" class="grow" type="text" placeholder="Per ove"> 
                </Flex>
                <Flex direction="column" class="grow">
                    <p class="tip">Telefonnummer</p>
                    <input v-model="formData.phone" class="grow" type="text" placeholder="40365505">
                </Flex>
            </Flex>

            <Flex direction="column">
                <p class="tip">Email</p>
                <input v-model="formData.email" type="email" placeholder="per@ole.com">
            </Flex>

            <Flex direction="column" align="stretch">
                <p class="tip">Kjørelærer</p>
                <select v-model="formData.teacher" name="Hvem vil du bli opplært av?" id="">
                    <option v-for="driver of drivers" :value="driver.id">
                        {{ driver.name }}
                    </option>
                </select>
            </Flex>
            <Flex direction="column" align="stretch">
                <p class="tip">Kurs</p>
                <select v-model="formData.course" name="Hva vil du lære?" id="">
                    <option value="a1">A1 (BIL)</option>
                    <option value="b1">B1 (MOTORSYKKEL)</option>
                </select>
            </Flex>

            <Flex direction="column">
                <p class="tip">Melding</p>
                <textarea v-model="formData.message" name="" id="" cols="30" rows="10" placeholder="Jeg har allerde gjennomført trinnvurdering 2 og 3."></textarea>
            </Flex>
        </Flex>

        <Flex justify="space-between" align="center" class="grow">
            <p>Vi kontakter deg på mail om ledige timer og pris.</p>
            <Button @click="sendForm" theme="color">Send</Button>
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