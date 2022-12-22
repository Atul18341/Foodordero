import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, FlatList, TouchableOpacity} from 'react-native';
import {db} from '../firebase/config';
import {ref, onValue} from 'firebase/database';
import {styles} from './styles';
export default function OrderHistory() {
  const [OrderHistory, setOrderHistory] = useState([]);
  const [OrderStatus, setOrderStatus] = useState('');
  const [isVisible, setIsVible] = useState(false);
  useEffect(() => {
    onValue(ref(db, '/OrderHistory/'), querySnapshot => {
      let Data = Object.values(querySnapshot.val() || {});
      setOrderHistory(Data);
      console.log('Status:', Data.Status);
    });
    setOrderStatus('Order Placed');
  }, []);
  const setStatus = () => {
    setTimeout(() => {
      setOrderStatus('Out for Delivery.');
    }, 5000);
    setTimeout(() => {
      setOrderStatus('Delivered');
    }, 15000);
  };
  return (
    <SafeAreaView>
      <FlatList
        data={OrderHistory}
        renderItem={({item}) => (
          <SafeAreaView style={styles.CartCard}>
            <Text>{item.Item}</Text>
            <Text>Restaurant: {item.Restaurant}</Text>
            <Text>Rs.{item.Price}</Text>
            <Text>Order on:{item.Order_Time}</Text>
            <TouchableOpacity
              style={styles.TrackButton}
              onPress={() => {
                setIsVible(true), setStatus();
              }}>
              <Text styles={styles.TrackButtonText}>Track Order</Text>
            </TouchableOpacity>
            {isVisible && (
              <SafeAreaView>
                <Text style={styles.StatusText}>
                  Order Status: {OrderStatus}
                </Text>
              </SafeAreaView>
            )}
          </SafeAreaView>
        )}
      />
    </SafeAreaView>
  );
}
