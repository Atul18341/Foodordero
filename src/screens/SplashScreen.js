import React, {useEffect} from 'react';
import {Image, Text, SafeAreaView} from 'react-native';
import {onAuthStateChanged} from 'firebase/auth';
import { auth } from '../firebase/config';
import {styles} from './styles';
export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      onAuthStateChanged(auth, user => {
        if (user) {
          navigation.navigate('Restaurants');
        } else {
          navigation.replace('Login Page');
        }
      });
    }, 5000);
  }, []);
  return (
    <SafeAreaView style={styles.SplashScreenView}>
      <Image source={require('./Images/logo.png')} style={styles.SplashImage}/>
      <Text>Foodordero</Text>
    </SafeAreaView>
  );
}
