import React from 'react';
import {WeatherIcon, kelvinToCelsius} from '../../utils';
import {Container} from '../Container';
import {Typography} from '../Typography';

export const CardDayDetail = ({date, minTemp, maxTemp, conditions}: any) => (
  <Container
    flex={1}
    flexDirection={'row'}
    justifyContent={'space-between'}
    marginBottom={10}>
    <Typography fontSize={14} fontWeight={400} color={'#fff'}>
      {date}
    </Typography>
    <WeatherIcon weatherData={conditions} />
    <Container
      flex={0.4}
      flexDirection={'row'}
      justifyContent={'space-between'}>
      <Typography fontSize={14} fontWeight={400} color={'#fff'}>
        {kelvinToCelsius(maxTemp)}°C
      </Typography>
      <Typography fontSize={14} fontWeight={400} color={'#fff'}>
        {kelvinToCelsius(minTemp)}°C
      </Typography>
    </Container>
  </Container>
);
