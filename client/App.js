import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './login';
import Regform from './Regform';
import Navigator from './routes/Stack';

export default function App() {
  return (
    <Navigator/>
  );
}

