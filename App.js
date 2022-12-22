import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
//import SplashScreen from 'react-native-splash-screen';

import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import RestaurantList from './src/screens/RestaurantList';
import ResturantDetails from './src/screens/RestaurantDetails';
import Cart from './src/screens/Cart';
import OrderChecKOut from './src/screens/OrderChecKOut';
import TrackOrder from './src/screens/TrackOrder';
import OrderHistory from './src/screens/OrderHistory';
import {styles} from './src/screens/styles';

import {signOut} from 'firebase/auth';
import {auth} from './src/firebase/config';

export default function App({navigation}) {
  const Stack = createStackNavigator();

  const Signout = () => {
    signOut(auth)
      .then(() => {
        navigation.pop('Login Page');
      })
      .catch(error => {
        console.log('Signout Error', error);
      });
  };
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash Screen">
          <Stack.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login Page"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register Page"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Restaurants"
            component={RestaurantList}
            options={{
              headerLeft: () => (
                <IonIcon
                  name="restaurant-sharp"
                  size={30}
                  style={styles.PageIcon}
                />
              ),
              headerRight: () => (
                <MaterialIcon
                  name="account-settings"
                  size={30}
                  onPress={() => Signout()}
                  style={styles.ProfileIcon}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Restaurant Details"
            component={ResturantDetails}
            options={{
              headerLeft: () => (
                <IonIcon
                  name="information-circle"
                  size={30}
                  style={styles.PageIcon}
                />
              ),
            }}
          />
          <Stack.Screen
            name="My Cart"
            component={Cart}
            options={{
              headerLeft: () => (
                <MaterialIcon name="cart" size={30} style={styles.PageIcon} />
              ),
            }}
          />
          <Stack.Screen
            name="Order CheckOut"
            component={OrderChecKOut}
            options={{
              headerLeft: () => (
                <MaterialIcon
                  name="cart-check"
                  size={30}
                  style={styles.PageIcon}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Track Order"
            component={TrackOrder}
            options={{
              headerLeft: () => (
                <MaterialIcon
                  name="store-clock"
                  size={30}
                  style={styles.PageIcon}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Order History"
            component={OrderHistory}
            options={{
              headerLeft: () => (
                <MaterialIcon
                  name="history"
                  size={30}
                  style={styles.PageIcon}
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
