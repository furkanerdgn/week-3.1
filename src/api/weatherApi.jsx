import axios from 'axios';


const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const BASE_URL = 'http://api.openweathermap.org/data/2.5';

export const fetchWeatherForecast = async (cityId) => {
  const url = `${BASE_URL}/forecast?id=${cityId}&appid=${API_KEY}&units=metric`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchCurrentWeather = async (cityId) => {
  const url = `${BASE_URL}/weather?id=${cityId}&appid=${API_KEY}&units=metric`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};