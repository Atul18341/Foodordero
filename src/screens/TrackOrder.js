import React,{ useState, useEffect } from "react";
import { SafeAreaView, Text,Button,StyleSheet } from "react-native";

export default function TrackOrder({route,navigation}){
    console.log('Status:',route.params);
     /* setTimeout(()=>{
      console.log("Status:Out for Delivery")
     },5000);
     setTimeout(()=>{
      console.log("Status:Delivered")
     },15000); */
    return(
      <>
        <SafeAreaView>
        <Text>Track Order</Text>
        <Button title='Order History' onPress={()=>navigation.navigate('Order History')}></Button>
        </SafeAreaView>
        </>
    )
}

