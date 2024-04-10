<template>
  <div>
    <input v-model="hanja" placeholder="type hanja" />
    <br />
    <input v-model="mnemonic" placeholder="type mnemonic" />
    <br />
    <input v-model="relatedHanja" placeholder="add related hanja" />
    <br />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const hanja = ref("");
const mnemonic = ref("");
const relatedHanja = ref("");
</script>

<style scoped></style>
