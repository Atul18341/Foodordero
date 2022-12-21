
import React, {useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  Alert,
  Button,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { createDrawerNavigator } from '@react-navigation/drawer';


import TrackOrder from './TrackOrder';

export default function RestaurantList({navigation: {navigate}}) {
  const [RestaurantList, setRestaurantList] = useState([]);
  const [Location, setLocation] = useState('');
  const [NonFilteredList, setNonFilteredList] = useState([]);
  const Drawer = createDrawerNavigator();
  useEffect(() => {
    fetch('https://atul18341.github.io/Foodordero-json/data.json')
      .then(res => res.json())
      .then(data => setRestaurantList(data));
    setNonFilteredList(RestaurantList);
  }, []);
  
  const LocationFilter = Location => {
    const filteredData = RestaurantList.filter(item => {
      return item.City == Location;
    });

    setRestaurantList(filteredData);
  };

  return (
    <SafeAreaView>
      <SafeAreaView style={styles.SearchBarView}>
        <TextInput
          value={Location}
          placeholder="Search Restaurant by City"
          style={styles.Searchbar}
          onChangeText={location => {
            setLocation(location);
          }}
        />
        <Icon name="search-circle" size={47} color="black" onPress={()=>LocationFilter(Location)}/>
      </SafeAreaView>
      <FlatList
        data={RestaurantList}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigate('Restaurant Details', {id: item.Restaurant_ID})
            }>
            <Image
              source={require('./Images/restaurant.jpg')}
              style={styles.Listimage}
            />
            <Text style={styles.RestaurantName}>{item.Restaurant_Name}</Text>
            <Text>{item.City}</Text>
            <Text>{item.Rating_text}</Text>
          </TouchableOpacity>
        )}
      />
    {/*   Navigation Drawer Code */}
    
      <Drawer.Navigator>
       <Drawer.Screen name="Track Order" component={TrackOrder} />
      </Drawer.Navigator>
    </SafeAreaView>
    
  );
}

