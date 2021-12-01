import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {SERVER_URL} from '../ip';


export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const pressHandler = () => {
    setUsername("");
    setPassword("");
    setErrorText("");
    navigation.navigate('Regform');
  }

  const initiateLogin = () =>{
    fetch(SERVER_URL + "/api/login", {
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
      else if(data.user){
        navigation.navigate('Home')
      }
    })
  }
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      {<Image style={styles.image} source={require("../assets/kindest_words.png")}/>}

      <StatusBar style="auto" />
      <Text style={styles.errorDisplay}> {errorText} </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInputUsername}
          placeholder="Username"
          placeholderTextColor="#fff"
          onChangeText={(username) => setUsername(username)}
          value={username}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInputPassword}
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={initiateLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={pressHandler}>
        <Text style={styles.createAccount}>Create an account</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0092ca",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 10,
    marginTop: -50,
    width: 350,
    height: 300
  },

  inputView: {
    backgroundColor: "#31c6ff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInputUsername: {
    height: 50,
    width: 300,
    textAlign: "center",
    flex: 1,
    marginLeft: 5
  },

  TextInputPassword: {
    height: 50,
    width: 300,
    textAlign: "center",
    flex: 1,
    marginLeft: 5
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#fff",
  },

  createAccount: {
    height: 30,
    bottom: -20,
    color: '#fff',
  },

  errorDisplay: {
    height: 30,
    justifyContent: "center",
    color: '#ff0000'
  }
});
