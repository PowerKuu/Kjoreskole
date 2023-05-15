<script setup lang="ts">
import Flex from "./FlexSystem.vue"
import Button from "./Button.vue"
import { ref } from "vue"
import { collection, doc, setDoc } from "firebase/firestore"
import { db } from "@/firebase"

const mail = ref("")
const placeholder = ref("eksempel@gmail.com")

async function mailSubmit() {
    const collectionRef = collection(db, "mail")
    await setDoc(doc(collectionRef, mail.value), {
        mail: mail.value
    })

    mail.value = ""
    placeholder.value = "Takk for din henvendelse!"
}
</script>

<template>
    <Flex align="stretch" class="navbar" width="100%" tag="footer" gap="5">
        <Flex direction="column" gap="1">
            <h4>Få tilbud i innboksen</h4>
            <Flex align="stretch" grow="1" class="contact" direction="column">
                <p>
                    Få varsling om tilbud og 
                    kampanjer ved å registrere deg på vår mailliste.
                </p>
                <Flex align="stretch" class="form">
                    <input class="input" v-model="mail" :placeholder="placeholder" type="text">
                    <Button class="submit" theme="white" @click="mailSubmit">Send</Button>
                </Flex>
            </Flex>
        </Flex>
        <Flex direction="column" gap="1">
            <h4>Sider</h4>

            <Flex direction="column" gap="0.2">
                <RouterLink to="/">
                    <p>Hjem</p>
                </RouterLink>
                <RouterLink to="/contact">
                    <p>Kontakt</p>
                </RouterLink>
                <RouterLink to="/about">
                    <p>Om oss</p>
                </RouterLink>
                <RouterLink to="/drive">
                    <p>Bestill time</p>
                </RouterLink>
            </Flex>
        </Flex>
    </Flex>
</template>

<style scoped>
.navbar {
    margin-top: 3rem;

    background-color: var(--color);
    padding: 2rem var(--padding);
    color: white;
}
.contact {
    max-width: 20rem;
}


.submit {
    height: 100%;
    border: 2px white solid;
    border-radius: 0 5px 5px 0;

    transition: 0.2s;
}

.form {
    margin-top: auto;
}

.input {
    width: 100%;
    border: 2px white solid;
    border-radius: 5px 0 0 5px;
    border-right: 0;

    outline: 0;
    color: white;
}

p {
    color: white;
}
</style>