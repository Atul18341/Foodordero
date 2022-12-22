import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  Alert,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {db} from '../firebase/config';
import {ref, push, update} from 'firebase/database';
import {styles} from './styles';
export default function ResturantDetails({route, navigation}) {
  const {id} = route.params;

  const [FilteredList, setFilteredList] = useState([]);
  const [isVisible, setIsVible] = useState(false);
  const [CheckRestaurant, setCheckRestaurant] = useState();

  const price = 200;
  useEffect(() => {
    fetch('https://atul18341.github.io/Foodordero-json/data.json')
      .then(res => res.json())
      .then(data => filterData(data));

    const filterData = Data => {
      const filteredData = Data.filter(item => {
        return item.Restaurant_ID == id;
      });
      setFilteredList(filteredData);
      //console.log("menus:",FilteredList[0].Cuisines);
    };
  }, []);
  //const menus=FilteredList[0].Cuisines.split(',')
  const CartData = (name, Cuisines, amount) => {
    const Restaurant = name.Name;
    const Item = Cuisines.Item;
    const Price = amount.Price;

    console.log(':', Restaurant);
    try {
      setCheckRestaurant(Restaurant);
      console.log('After submitting:', CheckRestaurant);

      const key = push(ref(db, '/CartData/')).key;
      const data = {Key: key, Restaurant, Item, Price};
      const updates = {};
      updates['/CartData/' + key] = data;
      update(ref(db), updates);
    } catch (e) {
      console.log('Error:', e);
    }
  };
  const pickerItem = () => {
    for (var i = 1; i < 5; i++)
      return items.push(<Picker.item label={i} value={i} />);
  };
  return (
    <>
      <SafeAreaView>
        <Image source={require('./Images/restaurant.jpg')} style={styles.img} />
        <FlatList
          data={FilteredList}
          renderItem={({item}) => (
            <SafeAreaView
              style={{flex: 1}}
              onStartShouldSetResponder={() => {
                setIsVible(true);
                Alert.alert('Confirmation', 'Successfully added to cart.');
                CartData(
                  {Name: item.Restaurant_Name},
                  {Item: item.Cuisines},
                  {Price: price},
                );
                setCheckRestaurant({restaurant: item.Restaurant_Name});
              }}>
              <Text style={styles.name}>{item.Restaurant_Name}</Text>
              <Text style={styles.address}>Address: {item.Address}</Text>
              <Text style={styles.menu}>Menu</Text>
              <SafeAreaView>
                <Text style={styles.menuList}>
                  {item.Cuisines} Rs. {price}
                </Text>
              </SafeAreaView>
            </SafeAreaView>
          )}
        />
      </SafeAreaView>

      <SafeAreaView style={styles.BottomButtonView}>
        {isVisible && (
          <Button
            style={styles.Button}
            title="Go to Cart"
            onPress={() => navigation.navigate('My Cart')}
          />
        )}
      </SafeAreaView>
    </>
  );
}
