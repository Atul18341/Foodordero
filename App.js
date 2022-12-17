import React from 'react';
import {View,Text,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import RestaurantList from './src/screens/RestaurantList';
export default function App({navigation}){
  const Stack=createStackNavigator();
  return(
    <>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Login Page'>
        <Stack.Screen name='Login Page' component={Login} />
        <Stack.Screen name='Register Page' component={Register} />
        <Stack.Screen name='Restaurants' component={RestaurantList} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
    
  )
}