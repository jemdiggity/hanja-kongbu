<template>
  <div>
    <input v-model="email" placeholder="email" />
    <input v-model="password" placeholder="password" />
    <button @click="doSignIn()">Sign In</button>
  </div>
</template>

<script setup lang="ts">
import { useFirebaseAuth } from "vuefire";
import { signInWithEmailAndPassword, type Auth } from "firebase/auth";
import { ref } from "vue";

const email = ref("");
const password = ref("");
const auth = useFirebaseAuth();

function doSignIn() {
  signInWithEmailAndPassword(auth as Auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}
</script>

<style scoped></style>
