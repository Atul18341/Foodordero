import React,{useState} from 'react';
import {View,Text,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from './src/screens/Login';
import Register from './src/screens/Register';
import RestaurantList from './src/screens/RestaurantList';
import ResturantDetails from './src/screens/RestaurantDetails';
import Cart from './src/screens/Cart';
import Payment from './src/screens/Payment';
import TrackOrder from './src/screens/TrackOrder';
export default function App({navigation}){
  const Stack=createStackNavigator();
  
  
  return(
    <>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Login Page'>
        <Stack.Screen name='Login Page' component={Login} />
        <Stack.Screen name='Register Page' component={Register} />
        <Stack.Screen name='Restaurants' component={RestaurantList} />
        <Stack.Screen name='Restaurant Details' component={ResturantDetails}/>
        <Stack.Screen name='My Cart' component={Cart} />
        <Stack.Screen name='Payment' component={Payment} />
        <Stack.Screen name='Track Order' component={TrackOrder}/>
      </Stack.Navigator>

    </NavigationContainer>
    </>
    
  )
}