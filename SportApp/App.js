import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {View, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './Navigator/AppNavigator';

export default function HomeScreen() {
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 0);
  }, []);
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
