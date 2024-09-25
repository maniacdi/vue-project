<template>
  <header class="header">
    <h3>Temp: <Weather /> (Santander, Cantabria)</h3>
  </header>
</template>

<script setup>
import Weather from './Weather.vue';
</script>

<style>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #333;
  color: white;
}
h1 {
  margin: 0;
}
</style>
