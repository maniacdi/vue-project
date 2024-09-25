<template>
  <div class="form-container">
    <h2>THE FORM</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <Field
          v-model="name"
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        />
        <ErrorMessage name="name" class="error-message" />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <Field
          v-model="email"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <ErrorMessage name="email" class="error-message" />
      </div>

      <div class="form-group submit-group">
        <button type="submit" class="btn-submit">REGISTER</button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/validationSchemas';
import { useRegisterStore } from '../stores/registerStore';

const registerStore = useRegisterStore();
const name = ref('');
const email = ref('');

const onSubmit = () => {
  registerStore.saveRegister(name.value, email.value);
};
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: #333;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-size: 1rem;
  margin-bottom: 5px;
  color: #555;
}

input[type='text'],
input[type='email'] {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.2s ease;
}

input[type='text']:focus,
input[type='email']:focus {
  border-color: #4caf50;
  outline: none;
}

.error-message {
  color: #f44336;
  font-size: 0.875rem;
  margin-top: 5px;
}

.submit-group {
  text-align: center;
}

.btn-submit {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #45a049;
}
</style>
