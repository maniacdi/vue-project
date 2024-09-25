import { useWeatherStore } from '@/stores/weatherStore';
import { getTemp } from '@/helpers/getWeather';

export const useWeather = async () => {
  const temp = await getTemp();
  const weatherStore = useWeatherStore();
  weatherStore.temperature = temp;
};
