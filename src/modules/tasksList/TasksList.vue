<template>
  <div class="tasks-container">
    <h1>TASKS LIST</h1>
    <div class="input-container">
      <input
        type="text"
        v-model="newTask"
        @keyup.enter="addTask"
        placeholder="Add a new task..."
      />
      <button class="btn add-task" @click="addTask">ADD</button>
    </div>
    <ul class="tasks-list">
      <li v-for="(task, index) in tasks" :key="index" class="task-item">
        {{ task }}
        <button class="btn delete-task" @click="deleteTask(index)">
          DELETE
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const tasks = ref([]);
const newTask = ref('');

const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
};
const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>

<style scoped>
.tasks-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  font-size: 2rem;
  margin-bottom: 20px;
}

.input-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.2s ease;
}

input:focus {
  outline: none;
  border-color: #4caf50;
}

.add-task {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-task:hover {
  background-color: #45a049;
}

.tasks-list {
  list-style-type: none;
  padding: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  font-size: 1.1rem;
}

.delete-task {
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-task:hover {
  background-color: #e53935;
}
</style>
