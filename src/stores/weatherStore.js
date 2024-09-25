import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useWeatherStore = defineStore('weatherStore', () => {
  const temperature = ref(0);
  const setTemperature = (temp) => {
    temperature.value = temp;
  };
  return { temperature, setTemperature };
});
