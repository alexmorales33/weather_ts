import {PermissionsAndroid, PermissionsAndroidStatic} from 'react-native';

export const requestLocationPermission = async (): Promise<void> => {
  try {
    const permissions: PermissionsAndroidStatic = PermissionsAndroid;
    const granted = await permissions.request(
      permissions.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Access Required',
        message: 'This app needs to access your location.',
        buttonPositive: 'OK',
      },
    );
    if (granted === permissions.RESULTS.GRANTED) {
      console.log('You can use the location');
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
