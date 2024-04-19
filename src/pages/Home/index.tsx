import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getWeatherCordInfo, getWeatherInfo} from '../../redux/weather/thunks';
import {styles} from './styled';
import {
  CardDayDetail,
  CardHourDetail,
  Container,
  Image,
  Input,
  Typography,
} from '../../components';
import {
  getNextThreeDaysForecast,
  getNextThreeHourForecast,
  getTemperatureInCelsius,
} from '../../utils';
import CalendarSvg from '../../../assets/svgs/CalendarSvg';
import {NextThreeDays, NextThreeHours} from '../../types';
import Geolocation from '@react-native-community/geolocation';
import {requestLocationPermission} from '../../utils';
import {AppDispatch} from '../../redux/store';
import Toast from 'react-native-toast-message';
import DropSvg from '../../../assets/svgs/DropSvg';
import ThermometerSvg from '../../../assets/svgs/ThermometerSvg';
import WindSvg from '../../../assets/svgs/WindSvg';

export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {weatherData, forecastData, loading, error} = useSelector(
    (state: any) => state.weather,
  );
  const [nextThreeHours, setNextThreeHours] = useState<NextThreeHours[]>([]);
  const [nextThreeDays, setNextThreeDays] = useState<NextThreeDays[]>([]);
  const [city, setCity] = useState('');
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  useEffect(() => {
    requestLocationPermission().then(() => {
      Geolocation.getCurrentPosition(info => {
        dispatch(
          getWeatherCordInfo({
            lat: info.coords.latitude,
            lon: info.coords.longitude,
          }),
        );
      });
    });
  }, [dispatch]);

  useEffect(() => {
    if (forecastData) {
      setNextThreeHours(getNextThreeHourForecast(forecastData));
      setNextThreeDays(getNextThreeDaysForecast(forecastData));
    }
  }, [forecastData]);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error)
    return Toast.show({
      type: 'error',
      text1: 'Error',
      text2: error.message || 'An unexpected error occurred',
    });

  const handleSubmit = () => {
    const trimmedCity = city.replace(/\s+/g, '');
    dispatch(getWeatherInfo({city: trimmedCity}));
  };

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.header}>
        <Input
          placeholder="Search your City."
          value={city}
          onChangeText={setCity}
          onSubmit={handleSubmit}
        />
      </View>

      <View style={styles.section}>
        <Container flex={1} marginBottom={30}>
          <Image
            width={150}
            height={150}
            source={require('../../../assets/images/sun.png')}
            resizeMode="cover"
          />
          <Typography fontSize={64} fontWeight={600} color={'#fff'}>
            {getTemperatureInCelsius(weatherData, 'temp')}°C
          </Typography>
          <Typography fontSize={32} fontWeight={400} color={'#fff'}>
            {weatherData && weatherData.name && weatherData.name}
          </Typography>
          <Typography fontSize={14} fontWeight={300} color={'#fff'}>
            Precipitations
          </Typography>
          <Typography fontSize={14} fontWeight={400} color={'#fff'}>
            Max.: {getTemperatureInCelsius(weatherData, 'temp_max')}°C | Min.:{' '}
            {getTemperatureInCelsius(weatherData, 'temp_min')}°C
          </Typography>
        </Container>

        <Container flex={0.5} justifyContent={'center'}>
          <View style={styles.viewToday}>
            <Container width={'33%'} flexDirection={'row'}>
              <DropSvg />
              <Typography fontSize={14} fontWeight={400} color={'#fff'}>
                {getTemperatureInCelsius(weatherData, 'feels_like')}
                °C
              </Typography>
            </Container>
            <Container width={'33%'} flexDirection={'row'}>
              <ThermometerSvg />
              <Typography fontSize={14} fontWeight={400} color={'#fff'}>
                {weatherData && weatherData.main && weatherData.main.humidity}%
              </Typography>
            </Container>
            <Container width={'33%'} flexDirection={'row'}>
              <WindSvg />
              <Typography fontSize={14} fontWeight={400} color={'#fff'}>
                {weatherData &&
                  weatherData.main &&
                  `${Math.round(weatherData.wind.speed)} km/h`}
              </Typography>
            </Container>
          </View>

          <View style={styles.detailToday}>
            <View style={styles.topDetailToday}>
              <Typography fontSize={18} fontWeight={600} color={'#fff'}>
                Today
              </Typography>
              <Typography fontSize={14} fontWeight={400} color={'#fff'}>
                {formattedDate}
              </Typography>
            </View>
            <View style={styles.bottomDetailToday}>
              {nextThreeHours &&
                nextThreeHours.map((forecast, index) => (
                  <CardHourDetail
                    key={index}
                    forecast={forecast}
                    index={index}
                  />
                ))}
            </View>
          </View>

          <View style={styles.detailTomorrow}>
            <View style={styles.topDetailTomorrow}>
              <Typography fontSize={18} fontWeight={600} color={'#fff'}>
                Next Forecast
              </Typography>
              <CalendarSvg />
            </View>
            <View style={styles.bottomDetailTomorrow}>
              {nextThreeDays.map((day, index) => (
                <CardDayDetail
                  key={index}
                  date={new Date(day.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                  minTemp={day.minTemp}
                  maxTemp={day.maxTemp}
                  conditions={day.conditions}
                />
              ))}
            </View>
          </View>
        </Container>
      </View>
    </ScrollView>
  );
};
