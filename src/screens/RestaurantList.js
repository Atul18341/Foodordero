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
  TouchableOpacity,
  Image,
} from 'react-native';
import {signOut} from 'firebase/auth';
import {auth} from '../firebase/config';
import {AppContext} from '../../App';

export default function RestaurantList({navigation:{navigate}}) {
    const [RestaurantList, setRestaurantList] = useState([]);
  const [Location, setLocation] = useState('');
  const [selectedRestaurantData,setSelectedRestaurantData] = useState([]);
  useEffect(() => {
    fetch('https://atul18341.github.io/Foodordero-json/data.json')
      .then(res => res.json())
      .then(data => setRestaurantList(data));
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
    const filteredData=RestaurantList.filter((item)=>{
       return item.City == Location;
    })
  
    setRestaurantList(filteredData)
 };
 let id;
 const selectedRestaurant =(id)=>{
 Alert.alert('Id:',id);
 }
  return (
    <View>
      <Button title="Sign Out" onPress={() => Signout()} />
      <Text>Restaurant Page</Text>
      <TextInput
        value={Location}
        placeholder="Search Restaurant by City"
        style={styles.Searchbar}
        onChangeText={(location)=>{setLocation(location)}}
      />
      <Button title="search" onPress={()=>LocationFilter(Location)}></Button>
      <FlatList
        data={RestaurantList}
        renderItem={({item}) => (
    
          <TouchableOpacity style={styles.card}  onPress={() =>
            navigate('Restaurant Details', {id: item.Restaurant_ID})
          }>
            <Image
              source={require('./Images/restaurant.jpg')}
              style={styles.Listimage}
            />
            <Text style={styles.name}>{item.Restaurant_Name}</Text>
            <Text>{item.City}</Text>
            <Text>{item.Rating_text}</Text>
          </TouchableOpacity>
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
