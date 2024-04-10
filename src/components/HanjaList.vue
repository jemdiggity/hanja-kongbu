<template>
  <div>
    <h1>Hanja List</h1>
    <ul>
      <li v-for="each in hanja" :key="each.id">
        <span>Character {{ each.character }}</span>
        <br />
        <span>Kunyomi {{ each.kunyomi[0] }}</span>
        <br />
        <span>Onyomi {{ each.onyomi[0] }}</span>
        <br />
        <span>Meaning {{ each.meaning[0] }}</span>
        <br />
        <span>Mnemonic {{ each.mnemonic }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useCollection, useFirestore } from "vuefire";
import { collection } from "firebase/firestore";
const db = useFirestore();
const hanja = useCollection(collection(db, "hanja"));
</script>

<style scoped></style>
