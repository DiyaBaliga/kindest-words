import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RequestsView from './requestsView/requestsView';

export default function App() {

  return (
    <View style={styles.container}>
      <RequestsView />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
