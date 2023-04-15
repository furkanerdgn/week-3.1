import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
const BASE_URL = "http://api.openweathermap.org/data/2.5";

export const fetchCityWithName = async (cityName) => {
  const url = `${BASE_URL}/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return null;
  }
};

// forecast with city name
export const fetchForecastWeek = async (cityName) => {
  const url = `${BASE_URL}/forecast?q=${cityName}&appid=${API_KEY}&units=metric`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return null;
  }
}

// forecast with coordinates

export const fetchForecastWeekWithCoords = async (coords) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return null;
  }
}
