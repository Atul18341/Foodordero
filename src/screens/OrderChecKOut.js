import React, {useState} from 'react';
import {SafeAreaView, Text, Button, Alert} from 'react-native';
import {db} from '../firebase/config';
import {ref, onValue, push, remove} from 'firebase/database';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Feather';

export default function OrderChecKOut({navigation}) {
  const [isVisible, setIsVible] = useState(false);
  const [OrdersData, setOrdersData] = useState([]);
  const handleOrderPlaced = () => {
    Alert.alert(
      'Confirmation',
      'Your order has been successfully placed. Thanks for using our service.',
    );
    onValue(ref(db, '/CartData/'), querySnapshot => {
      let Data = Object.values(querySnapshot.val() || {});
      setOrdersData(Data);
      console.log('Order data:', Data);
    });
    console.log('Cart Data:', OrdersData);
    OrdersData.forEach(data => {
      push(ref(db, '/OrderHistory/'), {
        Item: data.Item,
        Restaurant: data.Restaurant,
        Price: data.Price,
        Order_Time: new Date().toLocaleString(),
        Status: 'Order Placed',
      });
    });
    //remove(ref(db,'/CartData/'));
    setIsVible(true);
    console.log('Current Date:', new Date().toLocaleString());
  };

  return (
    <>
      <SafeAreaView style={styles.ChecKOutView}>
        <SafeAreaView style={{flexDirection: 'row'}}>
          <Icon name="check-circle" size={40} color="green" />
          <Text style={styles.SuccessfulText}>Payment Successful.</Text>
        </SafeAreaView>
        <Button title="Checkout" onPress={() => handleOrderPlaced()} />
      </SafeAreaView>
      <SafeAreaView style={styles.BottomButtonView}>
        {isVisible && (
          <Button
            title="Go to Order History"
            onPress={() => navigation.navigate('Order History')}
          />
        )}
      </SafeAreaView>
    </>
  );
  s;
}
