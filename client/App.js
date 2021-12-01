import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RequestsView from './requestsView/requestsView.js';
import ReplyCreation from './replyCreate/replyCreation.js';
import Login from './login';
import Regform from './Regform';
import Navigator from './routes/Stack';

export default function App() {

  return (
    <View style={styles.container}>
      <ReplyCreation />
      <StatusBar style="auto" />
    </View>
    // <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0092ca',
  }
});
