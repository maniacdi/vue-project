<template>
  <div class="layout">
    <div class="sidebar">
      <h2>WELCOME</h2>
      <h3 class="user-name">User: {{ registerStore.name.split(' ')[0] }}</h3>
      <ul>
        <li class="item-list">
          <router-link to="/counter">Counter</router-link>
        </li>
        <li class="item-list">
          <router-link to="/tasks-list">Tasks</router-link>
        </li>
        <li class="item-list">
          <router-link to="/register">Form</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRegisterStore } from '@/modules/form/stores/registerStore';
const registerStore = useRegisterStore();
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Arial', sans-serif;
}

.layout {
  display: flex;
  height: 100vh;
  background-color: #f9f9f9;
}

.sidebar {
  width: 250px;
  background-color: #2c3e50;
  padding: 20px;
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  color: white;
  box-shadow: 4px 0px 20px rgba(0, 0, 0, 0.2);
  transition: width 0.3s ease;
}

.sidebar h2 {
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #ecf0f1;
}

.user-name {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.item-list {
  margin-bottom: 15px;
}

.item-list a {
  text-decoration: none;
  color: #ecf0f1;
  font-size: 1.1rem;
  padding: 12px;
  display: block;
  border-radius: 8px;
  background-color: transparent;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.item-list a:hover {
  background-color: #34495e;
  color: white;
  transform: translateY(-2px);
}

.item-list a:focus {
  outline: none;
  background-color: #34495e;
  box-shadow: 0 0 0 3px rgba(52, 73, 94, 0.5);
}
</style>
