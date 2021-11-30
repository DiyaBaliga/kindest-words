import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RequestsView from './requestsView/requestsView';
import ReplyCreation from './replyCreate/replyCreation.js';

export default function App() {

  return (
    <View style={styles.container}>
      <ReplyCreation />
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
