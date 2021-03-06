import React, {useEffect, useRef, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

const SampleTrack = require('./music_resources/lofi.mp3');

export default function MusicProvider({isPlaying, setIsPlaying}) {
  const loaded = useRef(false);
  const loading = useRef(false);
  const isFirstLoad = useRef(true);
  const music = useRef(new Audio.Sound());

  useEffect(() => {
    LoadAudio();
  }, []);

  useEffect(() => {
    if(isFirstLoad.current) {
      isFirstLoad.current = false;
    } else {
      PlayPauseAudio();
    }
  }, [isPlaying])
  
  const PlayPauseAudio = async () => {
    try {
      const status = await music.current.getStatusAsync();
      if (status.isLoaded) {
        if (isPlaying === true) {
          music.current.playAsync();
        } else {
          music.current.pauseAsync();
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
          setIsPlaying(result.isPlaying);
        }
      } catch (error) {
        loading.current = false;
      }
    } else {
      loading.current = false;
    }
  };

  return (
    <></>
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
