import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

import FavouritesScreen from '../Screen/FavouritesScreen'
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

export default function MealsNavigator() {
  return (
    <Tab.Navigator  screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'StackNavigator') {
            iconName = focused
              ? 'md-home'
              : 'md-home-outline';
          } else if (route.name === 'Favourites') {
            iconName = focused ? 'md-apps' : 'md-apps-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown:false
      })}>
        <Tab.Screen name="StackNavigator" component={StackNavigator}  />
        <Tab.Screen name="Favourites" component={FavouritesScreen} />
    </Tab.Navigator>
  )
}

const styles=StyleSheet.create({

})