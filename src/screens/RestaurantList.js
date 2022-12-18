import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import {signOut} from 'firebase/auth';
import {auth} from '../firebase/config';

import {Img} from './Images/';
export default function RestaurantList({navigation}) {
  const [RestaurantList, setRestaurantList] = useState([]);
  const [Location, setLocation] = useState('');
  useEffect(() => {
    fetch('https://api.npoint.io/c1336d3f8d08ae53247f')
      .then(res => res.json())
      .then(data => setRestaurantList(data));
    console.log('data in:', RestaurantList);
  }, []);
  const Signout = () => {
    signOut(auth)
      .then(() => {
        navigation.replace('Login Page');
      })
      .catch(error => {
        Alert.alert('Error', error);
      });
  };
  const LocationFilter = (Location) => {
    RestaurantList.filter((item)=>{
       return item.City == Location;
    })
 };
 console.log(LocationFilter());
  return (
    <View>
      <Button title="Sign Out" onPress={() => Signout()} />
      <Text>Restaurant Page</Text>
      <TextInput
        value={Location}
        placeholder="Search Restaurant by City"
        style={styles.Searchbar}
        onChangeText={location=>setLocation(location)}
      />
      <Button title="search" onPress={()=>LocationFilter(Location)}></Button>
      <FlatList
        data={RestaurantList}
        renderItem={({item}) => (
          <SafeAreaView style={styles.card}>
            <Image
              source={require('./Images/restaurant.jpg')}
              style={styles.Listimage}
            />
            <Text style={styles.name}>{item.Restaurant_Name}</Text>
            <Text>{item.City}</Text>
            <Text>{item.Rating_text}</Text>
          </SafeAreaView>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Searchbar: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 2,
    width: 350,
  },
  card: {
    borderWidth: 1,
    borderRadius: 5,
    height: 200,
    padding: 10,
    margin: 2,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  Listimage: {
    width: 360,
    height: 100,
  },
});
