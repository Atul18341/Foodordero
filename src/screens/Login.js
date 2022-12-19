import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase/config';

export default function Login({navigation}) {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, Email, Password)
      .then(userdata => {
        const user = userdata.user;
        Alert.alert('Login', 'Login Successful');
        navigation.replace('Restaurants');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Error",errorMessage);
      });
  };
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>Login</Text>
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
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register Page')}>
          <Text>Didn't have account? Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {flex: 1, alignItems: 'center'},
  heading: {fontWeight: 'bold', fontSize: 24, color: '#282A3A'},
  inputField: {borderWidth: 1, width: 300, borderRadius: 10, margin: 10},
  submitButton: {backgroundColor: '#00ADB5', alignItems: 'center', padding: 10},
  buttonText: {fontWeight: 'bold', fontSize: 18},
});
