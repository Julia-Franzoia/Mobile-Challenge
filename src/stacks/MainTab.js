import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Filter from '../screens/filter';
import ListOne from '../screens/list_one';
import ListTwo from '../screens/list_two';
import Favorites from '../screens/favorites';
import Profile from '../screens/profile';



const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator tabBar={props => <CustomTabBar {...props} />} screenOptions={{
    headerShown: false,
  }}>
    <Tab.Screen name="ListOne" component={ListOne} />
    <Tab.Screen name="Filter" component={Filter}  />
    <Tab.Screen name="ListTwo" component={ListTwo} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="Profile" component={Profile} />
    
  </Tab.Navigator>
);