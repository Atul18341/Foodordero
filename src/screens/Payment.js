import React from "react";
import { SafeAreaView, Text, Button } from "react-native";

export default function Payment({navigation}){
    return(
        <SafeAreaView>
        <Text>Payment Page</Text>
        <Button title='Place Order' onPress={()=>navigation.navigate('Track Order')}/>
    </SafeAreaView>
    )
}