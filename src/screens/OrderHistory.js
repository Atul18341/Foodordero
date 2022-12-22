import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, FlatList, TouchableOpacity} from 'react-native';
import {db} from '../firebase/config';
import {ref, onValue} from 'firebase/database';
import {styles} from './styles';
export default function OrderHistory() {
  const [OrderHistory, setOrderHistory] = useState([]);
  useEffect(() => {
    onValue(ref(db, '/OrderHistory/'), querySnapshot => {
      let Data = Object.values(querySnapshot.val() || {});
      setOrderHistory(Data);
    });
  }, []);
  return (
    <SafeAreaView>
      <FlatList
        data={OrderHistory}
        renderItem={({item}) => (
          <SafeAreaView style={styles.CartCard}>
            <Text>{item.Item}</Text>
            <Text>Restaurant: {item.Restaurant}</Text>
            <Text>Rs.{item.Price}</Text>
            <Text>Status:{item.Status}</Text>
            <Text>Order on:{item.Order_Time}</Text>
            <TouchableOpacity style={styles.TrackButton}>
              <Text styles={styles.TrackButtonText}>Track Order</Text>
            </TouchableOpacity>
          </SafeAreaView>
        )}
      />
    </SafeAreaView>
  );
}
