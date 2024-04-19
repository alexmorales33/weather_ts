import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  fetchForecastCordData,
  fetchForecastData,
  fetchWeatherCordData,
  fetchWeatherData,
} from '../../services/weather';
import {ForecastData, WeatherData} from '../../types';

interface CityParams {
  city: string;
}

interface CoordinatesParams {
  lat: number;
  lon: number;
}

interface WeatherApiResponse {
  weather: WeatherData;
  forecast: ForecastData;
}

interface ApiError {
  message: string;
  code: number;
}

export const getWeatherInfo = createAsyncThunk<
  WeatherApiResponse,
  CityParams,
  {rejectValue: ApiError}
>('weather/getWeatherInfo', async (params: CityParams, {rejectWithValue}) => {
  try {
    const weatherResponse = await fetchWeatherData(params.city);
    const forecastResponse = await fetchForecastData(params.city);
    return {
      weather: weatherResponse?.data,
      forecast: forecastResponse?.data,
    };
  } catch (error: any) {
    return rejectWithValue({
      message: error.response?.data?.message || 'Unknown error',
      code: error.response?.data?.code || 500,
    });
  }
});

export const getWeatherCordInfo = createAsyncThunk<
  WeatherApiResponse,
  CoordinatesParams,
  {rejectValue: ApiError}
>(
  'weather/getWeatherCordInfo',
  async (params: CoordinatesParams, {rejectWithValue}) => {
    try {
      const weatherResponse = await fetchWeatherCordData(
        params.lat,
        params.lon,
      );
      const forecastResponse = await fetchForecastCordData(
        params.lat,
        params.lon,
      );
      return {
        weather: weatherResponse?.data,
        forecast: forecastResponse?.data,
      };
    } catch (error: any) {
      return rejectWithValue({
        message: error.response?.data?.message || 'Unknown error',
        code: error.response?.data?.code || 500,
      });
    }
  },
);
