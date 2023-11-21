<script setup>
import { ref } from "vue";
const msg = ref('进入home')
</script>

<template>
  <div class="container"><span>{{ msg }}</span></div>
  
</template>

<style scoped>
.container {
    width: 100vw;
    height: 100vh;
}
</style>