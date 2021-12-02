import React, {useEffect, useRef, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

const SampleTrack = require('./music_resources/lofi.mp3');

export default function MusicProvider() {
  const loaded = useRef(false);
  const loading = useRef(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const music = useRef(new Audio.Sound());

  useEffect(() => {
    LoadAudio();
  }, []);

  const getPlayState = async () => {
    const playState = await music.current.getStatusAsync();
    return playState;
  }

  const PlayPauseAudio = async () => {
    try {
      const status = await music.current.getStatusAsync();
      if (status.isLoaded) {
        if (status.isPlaying === false) {
          music.current.playAsync();
          setIsPlaying(true);
        } else {
          music.current.pauseAsync();
          setIsPlaying(false);
        }
      }
    } catch (error) {}
  };

  const LoadAudio = async () => {
    loading.current = true;
    const musicStatus = await music.current.getStatusAsync();
    if (musicStatus.isLoaded === false) {
      try {
        const result = await music.current.loadAsync(SampleTrack, {}, true);
        if (result.isLoaded === false) {
          loading.current = false;
        } else {
          loading.current = false;
          loaded.current = true;
          setIsPlaying(false);
        }
      } catch (error) {
        loading.current = false;
      }
    } else {
      loading.current = false;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.AudioPlayer}>
        {!loading.current && (
          <>
            {loaded.current && (
              <TouchableOpacity style={styles.AudioPlayer} onPress={PlayPauseAudio}>
                {isPlaying ? (
                  <Ionicons name="pause-circle-outline" size={48} color="#ff1188"/>
                ) : (
                  <Ionicons name="play-circle-outline" size={48} color="#ff1188"/>
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
    alignItems: 'flex-end',
  }
});
