import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ForecastData, WeatherData, WeatherState} from '../../types';
import {getWeatherCordInfo, getWeatherInfo} from './thunks';

const initialState: WeatherState = {
  weatherData: null,
  forecastData: null,
  loading: false,
  error: null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getWeatherInfo.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getWeatherInfo.fulfilled,
        (
          state,
          action: PayloadAction<{weather: WeatherData; forecast: ForecastData}>,
        ) => {
          state.weatherData = action.payload.weather;
          state.forecastData = action.payload.forecast;
          state.loading = false;
        },
      )
      .addCase(getWeatherInfo.rejected, (state, action: any) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getWeatherCordInfo.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getWeatherCordInfo.fulfilled,
        (
          state,
          action: PayloadAction<{weather: WeatherData; forecast: ForecastData}>,
        ) => {
          state.weatherData = action.payload.weather;
          state.forecastData = action.payload.forecast;
          state.loading = false;
        },
      )
      .addCase(getWeatherCordInfo.rejected, (state, action: any) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default weatherSlice.reducer;
