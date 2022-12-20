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
import { db } from '../firebase/config';
import { ref,push,update } from 'firebase/database';
export default function ResturantDetails({route, navigation}) {
  const {id} = route.params;
  const [FilteredList, setFilteredList] = useState([]);
  const [isVisible, setIsVible] = useState(false);

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
  const CartData=(name,Cuisines,amount)=>{
    const Restaurant =name.Name;
    const Item = Cuisines.Item;
    const Price =amount.Price;
    console.log("Item:",Item); 
    try{
      const key = push(ref(db, '/cart/')).key;
      const data = {Key:key,Restaurant,Item,Price};
      const updates = {};
      updates['/CartData/' + key] = data;
      update(ref(db), updates);
    }catch(e){
      console.log("Error:",e)
    }
   }
  return (
    <SafeAreaView>
       <Image
              source={require('./Images/restaurant.jpg')}
              style={styles.img}
            />
      <FlatList
        data={FilteredList}
        renderItem={({item}) => (
          <SafeAreaView
            style={{flex: 1}}
            onStartShouldSetResponder={() => {
              setIsVible(true);
              Alert.alert('Confirmation', 'Successfully added to cart.');
              CartData({Name:item.Restaurant_Name},{Item:item.Cuisines},{Price:price})
            }}>
           
            <Text style={styles.name}>{item.Restaurant_Name}</Text>
            <Text style={styles.address}>Address: {item.Address}</Text>
            <Text style={styles.menu}>Menu</Text>
            <Text style={styles.menuList}>
              {item.Cuisines} Rs. {price}
            </Text>
           
          </SafeAreaView>
        )}
      />
      {isVisible && (
        <Button
          style={styles.cartButton}
          title="Go to Cart"
          onPress={() => navigation.navigate('My Cart')}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    color: 'black',
  },
  address: {marginLeft: 15, fontSize: 18},
  img: {height: 200, marginTop: 10, borderRadius: 5},
  menu: {borderBottomWidth: 1, margin: 20, fontSize: 24, fontWeight: 'bold'},
  menuList: {
    marginLeft: 25,
    marginRight: 25,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
    flex: 1,
    justifyContent: 'space-between',
  },
  cartButton: {flex: 1, justifyContent: 'flex-end'},
});
