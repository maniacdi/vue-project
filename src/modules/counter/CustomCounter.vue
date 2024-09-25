<template>
  <div class="counter-container">
    <h1>THE COUNTER</h1>
    <p class="count-display">{{ count }}</p>
    <div class="button-group">
      <button class="btn add" @click="add">ADD</button>
      <button class="btn reduce" @click="reduce">REDUCE</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
const add = () => {
  count.value++;
};
const reduce = () => {
  count.value--;
};
</script>

<style scoped>
.counter-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 50px auto;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
}

.count-display {
  font-size: 4rem;
  color: #ff5252;
  font-weight: bold;
  margin: 20px 0;
}

.button-group {
  display: flex;
  gap: 15px;
}

.btn {
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add {
  background-color: #4caf50;
  color: white;
}

.reduce {
  background-color: #f44336;
  color: white;
}

.btn:hover {
  opacity: 0.85;
}

.btn:active {
  transform: scale(0.95);
}
</style>
