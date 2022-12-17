import React from "react";
import {View, Text, Alert,Button} from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
export default function RestaurantList({navigation}){

    const Signout =()=>{
        signOut(auth).then(()=>{
            navigation.replace('Login Page');
        }).catch((error)=>{
            Alert.alert("Error",error);
        });
    }
    return(
        <View>
            <Button title='Sign Out' onPress={()=>Signout()}/>
            <Text>Restaurant Page</Text>
        </View>
    )
}