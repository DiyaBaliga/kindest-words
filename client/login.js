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
} from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const initiateLogin = () =>{
    fetch("http://localhost:3000/api/login", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: email, password: password})
    })
    .then((response) => response.json())
    .then((data) => {
      if(data.error){
        setErrorText(data.error);
      }
      else if(data.user){
        setErrorText("Congrats");
      }
    })
  }
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("./assets/kindest_words.png")}/> */}

      <StatusBar style="auto" />
      <Text>
        {errorText}
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInputEmail}
          placeholder="Email"
          placeholderTextColor="#fff"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInputPassword}
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={initiateLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
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
    marginBottom: 40,
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

  TextInputEmail: {
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

  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: "#fff"
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
});
export default Login;