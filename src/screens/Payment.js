import React, {useState} from "react";
import { SafeAreaView, Text, Button, Alert } from "react-native";

export default function Payment({navigation}){
   const [isVisible,setIsVible] = useState(false);
    const handleOrderPlaced=()=>{
        Alert.alert("Confirmation","Your order has been successfully placed. Thanks for using our service.");
    }
    return(
        <SafeAreaView>
        <Text>Payment succesful.</Text>
        <Button title='Place Order' onPress={()=>handleOrderPlaced()}/>
    </SafeAreaView>
    )
}