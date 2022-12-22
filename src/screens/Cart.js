import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';
import {db} from '../firebase/config';
import {ref, onValue, remove} from 'firebase/database';
import RazorpayCheckout from 'react-native-razorpay';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
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

  const Checkout = () => {
    var options = {
      description: 'Order bill',
      image: '',
      currency: 'INR',
      key: 'rzp_test_ihyN942As43mJi',
      amount: '200',
      name: 'Foodorder',
      prefill: {
        email: 'atulkumar987613@gmail.com',
        contact: '6205695667',
        name: 'Atul Kumar',
      },
      theme: {color: '#53a20e'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        console.log('Success:', data.razorpay_payment_id);
        navigation.navigate('Order CheckOut');
      })
      .catch(error => {
        console.log('Error:', error.description);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <SafeAreaView>
        <FlatList
          data={CartData}
          renderItem={({item}) => (
            <SafeAreaView style={styles.CartCard}>
              <Icon
                name="close"
                size={20}
                style={styles.CartCardIcon}
                onPress={() => userRemove(item.Key)}
              />
              <Text>{item.Item}</Text>
              <Text>Restaurant: {item.Restaurant}</Text>
              <Text>Rs.{item.Price}</Text>
            </SafeAreaView>
          )}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.BottomButtonView}>
        <Button
          style={styles.Button}
          title="Make Payment"
          onPress={() => Checkout()}
        />
      </SafeAreaView>
    </>
  );
}
