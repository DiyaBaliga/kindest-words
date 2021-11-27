import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Regform extends React.Component {
    render() {
        return (
            <View style={styles.regform}>
              <View  style={styles.header}>
                <Text style={[{color: '#fff', fontSize: 24}]}>Registration</Text>
              </View>
              <TextInput style={styles.textinput} placeholder='Name' placeholderTextColor='#fff'/>
              <TextInput style={styles.textinput} placeholder='Email' placeholderTextColor='#fff'/>
              <TextInput style={styles.textinput} placeholder='Password' placeholderTextColor='#fff' secureTextEntry={true}/>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.btntext}>Sign up</Text>
              </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  regform: {
    alignSelf: 'stretch',
  },
  
  header: {
    paddingBottom: 10,
    marginBottom: 40,
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
  }
});