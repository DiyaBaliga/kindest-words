import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import RequestsView from './requestsView/requestsView';
import { Audio } from 'expo-av';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

const SampleTrack = require('./music_resources/lofi.mp3');

export default function App() {
  const [Loaded, SetLoaded] = React.useState(false);
  const [Loading, SetLoading] = React.useState(false);
  const music = React.useRef(new Audio.Sound());
  var isPlayingBool = false;

  React.useEffect(() => {
    LoadAudio();
  }, []);

  const getPlayState = async () => {
    const playState = await music.current.getStatusAsync();
    return playState;
  }

  const PlayPauseAudio = async () => {
    try {
      const result = await music.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          music.current.playAsync();
        } else {
          music.current.pauseAsync();
        }
      }
    } catch (error) {}
  };

  const LoadAudio = async () => {
    SetLoading(true);
    const checkLoading = await music.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
      try {
        const result = await music.current.loadAsync(SampleTrack, {}, true);
        if (result.isLoaded === false) {
          SetLoading(false);
          console.log('Error in Loading Audio');
        } else {
          SetLoading(false);
          SetLoaded(true);
        }
      } catch (error) {
        console.log(error);
        SetLoading(false);
      }
    } else {
      SetLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.AudioPlayer}>
        {Loading ? (
          <></>
        ) : (
          <>
            {Loaded === false ? (
              <>
              </>
            ) : (
              <TouchableOpacity style={styles.AudioPlayer} onPress={PlayPauseAudio}>
                {getPlayState ? (
                  <Ionicons name="pause-circle-outline" size={48} color="#ff1188"/>
                ) : (
                  <Ionicons name="play-circle-outline" size={48} color="ff1188"/>
                )}
               
                
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffffff',
    padding: 8,
  },
  AudioPlayer: {
    bottom: 0,
    right: 0,
    alignItems: 'end',
  }
});
