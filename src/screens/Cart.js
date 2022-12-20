import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, FlatList, Button} from 'react-native';
import {db} from '../firebase/config';
import {ref, onValue, remove} from 'firebase/database';

export default function Cart({navigation}) {
  const [CartData, setCartData] = useState([]);

  const fetchData = () => {
    onValue(ref(db, '/CartData/'), querySnapshot => {
      let Data = Object.values(querySnapshot.val() || {});
      setCartData(Data);
    });
  };
 // Function called when user wants to delete any item before placing order
  const userRemove = key => {
    remove(ref(db, '/CartData/' + key));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SafeAreaView>
      <Text>Cart Page</Text>
      <FlatList
        data={CartData}
        renderItem={({item}) => (
          <SafeAreaView>
            <Button title="Remove" onPress={() => userRemove(item.Key)} />
            <Text>{item.Item}</Text>
            <Text>Restaurant: {item.Restaurant}</Text>
            <Text>Rs.{item.Price}</Text>
          </SafeAreaView>
        )}
      />
      <Button
        title="Make Payment"
        onPress={() => navigation.navigate('Payment')}
      />
    </SafeAreaView>
  );
}
