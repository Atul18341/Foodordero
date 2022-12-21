import React, {useState} from 'react';
import {SafeAreaView, Text, Button, Alert} from 'react-native';
import {db} from '../firebase/config';
import {ref, onValue, push, remove} from 'firebase/database';
import { styles } from './styles';
export default function Payment({navigation}) {
  const [isVisible, setIsVible] = useState(false);
  const [CartData, setCartData] = useState([]);
  const handleOrderPlaced = () => {
    Alert.alert(
      'Confirmation',
      'Your order has been successfully placed. Thanks for using our service.',
    );
    onValue(ref(db, '/CartData/'), querySnapshot => {
      let Data = Object.values(querySnapshot.val() || {});
      setCartData(Data);
    });
    push(ref(db, '/OrderHistory/'), {
      CartData,
      Order_Time: new Date().toLocaleString(),
    });
    setIsVible(true);
    console.log('Current Date:', new Date().toLocaleString());
  };

  return (
    <>
    <SafeAreaView>
      <Text>Payment succesful.</Text>
      <Button title="Place Order" onPress={() => handleOrderPlaced()} />
     
    </SafeAreaView>
    <SafeAreaView style={styles.BottomButtonView}>
    {isVisible && (
        <Button
          title="Track Order"
          onPress={() => navigation.navigate('Track Order')}
        />
      )}
    </SafeAreaView>
    </>
  );
}
