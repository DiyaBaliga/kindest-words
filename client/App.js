import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';
import { RequestsView } from './requests';
import { HomeScreen } from './homeScreen';
import { Login, Regform } from './login';
import ReplyCreation, { replyCreation } from './replyCreate/replyCreation';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
          headerShown: false
      }
    },
    Regform: {
        screen: Regform,
        navigationOptions: {
            headerShown: false
        }
    },
    Home: {
      screen: HomeScreen,
    },
    Requests: {
      screen: RequestsView,
    },
    WriteReplies: {
      screen: ReplyCreation,
    },
    WriteRequests: {
      screen: ReplyCreation,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#d87dac",
      },
      headerTintColor: "#FFF",
    },
  }
);

const Navigator = createAppContainer(AppNavigator);

export default function App() {
  
  return (
    <Navigator/>
  );
}

