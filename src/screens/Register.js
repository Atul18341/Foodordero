import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import { styles } from './styles';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase/config';

export default function Register({navigation}) {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  handleSubmit = () => {
    createUserWithEmailAndPassword(auth, Email, Password)
      .then(userdata => {
        const user = userdata.user;
        Alert.alert('Registration', 'You have been registered successfully.');
        navigation.replace('Login Page');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Error', errorMessage);
      });
  };
  return (
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
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login Page')}>
          <Text>Already have account? Login</Text>
        </TouchableOpacity>
    </View>
  );
}

