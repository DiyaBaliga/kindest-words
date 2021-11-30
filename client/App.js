import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RequestsView from './requestsView/requestsView';
//import * as React from 'react';
import { Button } from 'react-native';
import { Audio } from 'expo-av';
//import { playMusic, playSound } from './music';

export default class App extends React.Component {
  state = {
    isPlaying: false,
    playbackInstance: null,
    currentIndex: 0,
    volume: 1.0,
    isBuffering: false
  }
  render() {
    return (
      <View style={styles.container}>
        <RequestsView />
        <StatusBar style="auto" />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const playbackObject = new Audio.Sound();
