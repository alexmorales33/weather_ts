import axios from 'axios';

export const fetchForecastData = async (search: any) => {
  try {
    const forecastUrl = `${process.env.API_URL}/forecast?q=${search}&appid=${process.env.API_TOKEN}`;

    const forecastResponse = await axios.get(forecastUrl);
    return forecastResponse;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || 'Failed to fetch weather data',
    );
  }
};

export const fetchWeatherData = async (search: any) => {
  try {
    const weatherUrl = `${process.env.API_URL}/weather?q=${search}&APPID=${process.env.API_TOKEN}`;
    const weatherResponse = await axios.get(weatherUrl);
    return weatherResponse;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || 'Failed to fetch weather data',
    );
  }
};

export const fetchForecastCordData = async (lat: any, lon: any) => {
  try {
    const forecastUrl = `${process.env.API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_TOKEN}`;

    const forecastResponse = await axios.get(forecastUrl);
    return forecastResponse;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || 'Failed to fetch weather data',
    );
  }
};

export const fetchWeatherCordData = async (lat: any, lon: any) => {
  try {
    const weatherUrl = `${process.env.API_URL}/weather?lat=${lat}&lon=${lon}&APPID=${process.env.API_TOKEN}`;

    const weatherResponse = await axios.get(weatherUrl);
    return weatherResponse;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || 'Failed to fetch weather data',
    );
  }
};
