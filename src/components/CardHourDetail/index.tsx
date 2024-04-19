import React from 'react';
import {WeatherIcon, kelvinToCelsius} from '../../utils';
import {Container} from '../Container';
import {Typography} from '../Typography';

export const CardHourDetail = ({forecast, index}: any) => (
  <Container
    key={index}
    flex={0.25}
    height={'80%'}
    justifyContent={'space-around'}>
    <Typography fontSize={14} fontWeight={400} color={'#fff'}>
      {kelvinToCelsius(forecast.main.temp)}°C
    </Typography>
    <WeatherIcon weatherData={forecast.weather[0].main} />
    <Typography fontSize={14} fontWeight={400} color={'#fff'}>
      {new Date(forecast.dt * 1000).toLocaleTimeString([], {
        hour: '2-digit',
      })}
    </Typography>
  </Container>
);
