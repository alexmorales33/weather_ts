export interface WeatherState {
  weatherData: WeatherData | null;
  forecastData: ForecastData | null;
  loading: boolean;
  error: string | null;
}

export interface WeatherData {
  temperature: number;
  description: string;
}

export interface ForecastData {
  daily: Array<WeatherData>;
}

export interface CityParams {
  city: string;
}

export interface CoordinatesParams {
  lat: number;
  lon: number;
}

export interface WeatherData {
  temperature: number;
  description: string;
}

export interface ForecastData {
  daily: WeatherData[];
}

export interface CurrentWeather {
  base: string;
  clouds: {all: number};
  cod: number;
  coord: Coordinates;
  dt: number;
  id: number;
  main: MainWeather;
  name: string;
  sys: SystemInfo;
  timezone: number;
  visibility: number;
  weather: WeatherDescription[];
  wind: Wind;
}

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface MainWeather {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface SystemInfo {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

export interface WeatherDescription {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface Wind {
  deg: number;
  gust: number;
  speed: number;
}

export interface Forecast {
  city: City;
  cnt: number;
  cod: string;
  list: ForecastDetail[];
  message: number;
}

export interface City {
  coord: Coordinates;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface ForecastDetail {
  clouds: Clouds;
  dt: number;
  dt_txt: string;
  main: MainWeather;
  pop: number;
  sys: SystemShort;
  visibility: number;
  weather: WeatherDescription[];
  wind: Wind;
}

export interface Clouds {
  all: number;
}

export interface SystemShort {
  pod: string;
}

export interface NextThreeDays {
  date: string;
  minTemp: number;
  maxTemp: number;
  conditions: string;
  icon?: string;
}

export interface NextThreeHours {
  clouds: {all: number};
  dt: number;
  dt_txt: string;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
  };
  pop: number;
  rain?: {'3h': number};
  sys: {pod: string};
  visibility: number;
  weather: WeatherDetail[];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}

interface WeatherDetail {
  id: number;
  main: string;
  description: string;
  icon: string;
}
