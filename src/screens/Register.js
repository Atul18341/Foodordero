import React,{useState} from "react";
import { View,Text,TouchableOpacity,StyleSheet,TextInput } from "react-native";

export default function Register({navigation}){
    const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  handleSubmit = ()=>{

  }
    return(
        <View style={styles.main}>
              <Text style={styles.heading}>Register</Text>
        <View>
          <TextInput
            style={styles.inputField}
            value={Email}
            placeholder="Email Address"
            onChangeText={Email => setEmail(Email)}
          />
          <TextInput
            style={styles.inputField}
            value={Password}
            placeholder="Password"
            onChangeText={Password => setPassword(Password)}
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <Text>Already have account?</Text><TouchableOpacity onPress={()=>navigation.navigate('Login page')}><Text>Login</Text></TouchableOpacity>
        </View>
      </View>
    
    )
}

const styles = StyleSheet.create({
    main: {flex: 1, alignItems: 'center'},
    heading: {fontWeight: 'bold', fontSize: 24, color: '#282A3A'},
    inputField: {borderWidth: 1, width: 300, borderRadius: 10, margin: 10},
    submitButton: {backgroundColor: '#00ADB5', alignItems: 'center', padding: 10},
    buttonText: {fontWeight: 'bold', fontSize: 18},
  });