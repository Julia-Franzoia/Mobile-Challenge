import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Splashscreen from '../screens/splashscreen';
import Details from '../screens/details';

import MainTab from './MainTab';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="SplashScreen"
    screenOptions={{
      headerShown: false,
    }}>
      
    <Stack.Screen name="SplashScreen" component={Splashscreen} />
    <Stack.Screen name="Details" component={Details} />
    <Stack.Screen name="MainTab" component={MainTab} />
  </Stack.Navigator>
);
