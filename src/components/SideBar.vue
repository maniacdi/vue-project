<template>
  <div class="layout">
    <div class="sidebar">
      <h2>SIDEBAR</h2>
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

<script setup></script>

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
  box-shadow: 2px 0px 12px rgba(0, 0, 0, 0.1);
}

.sidebar h2 {
  margin-bottom: 20px;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  color: #ecf0f1;
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
  font-size: 1.2rem;
  padding: 10px;
  display: block;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.item-list a:hover {
  background-color: #34495e;
  color: white;
}
</style>
