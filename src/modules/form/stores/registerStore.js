import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useRegisterStore = defineStore('RegisterStore', () => {
  const name = ref('');
  const email = ref('');

  const saveRegister = (formName, formEmail) => {
    name.value = formName;
    email.value = formEmail;
  };

  return { name, email, saveRegister };
});
