import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SERVER_URL } from '@env';

export default function Regform({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  
  const pressHandler = () => {
    navigation.goBack();
  }
  const initiateRegister = () =>{
    fetch(SERVER_URL + "/api/register", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username, password: password})
    })
    .then((response) => response.json())
    .then((data) => {
      if(data.error){
        setErrorText(data.error);
      }
      else{
        navigation.goBack();
      }
    })
  }
  return (
    <View style={styles.regform}>
      <View  style={styles.header}>
        <Text style={[{color: '#fff', fontSize: 24}]}>Create an Account</Text>
        </View>
        <Text style={styles.errorDisplay}> {errorText} </Text>
        <TextInput 
          style={styles.textinput} 
          placeholder='Username' 
          placeholderTextColor='#fff'
          onChangeText={(username) => setUsername(username)}
          />
        {/* <TextInput style={styles.textinput} placeholder='Username' placeholderTextColor='#fff'/> */}
        <TextInput 
          style={styles.textinput} 
          placeholder='Password' 
          placeholderTextColor='#fff' 
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}/>
        <TouchableOpacity style={styles.button} onPress={initiateRegister}>
          <Text style={styles.btntext}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pressHandler}>
          <Text style={styles.backtologin}>Return to Login</Text>
      </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  regform: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0092ca',
    paddingLeft: 60,
    paddingRight: 60
  },
  
  header: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },

  textinput: {
    alignSelf: 'stretch',
    color: '#fff',
    height: 40,
    marginBottom: 30,
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },

  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 30,
    borderRadius: 10
  },

  btntext: {
    color: 'black',
    fontWeight: 'bold'
  },

  backtologin: {
    height: 30,
    bottom: -20,
    color: '#fff',
    alignSelf: 'center'
  },
  
  errorDisplay: {
    height: 30,
    justifyContent: "center",
    color: '#ff0000'
  }
});