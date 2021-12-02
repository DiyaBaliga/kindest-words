import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, createContext} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Button, StyleSheet, Text, View, Pressable } from 'react-native';
import { RequestsView } from './requests';
import { HomeScreen } from './homeScreen';
import { Login, Regform } from './login';
import { ReplyMailbox, ReplyCreation} from './replies';
import { UserContext, UserContextProvider } from './UserContext'

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
          headerShown: false
      }
    },
    Home: {
      screen: HomeScreen,
    },
    Regform: {
        screen: Regform,
        navigationOptions: {
            headerShown: false
        }
    },
    Requests: {
      screen: RequestsView,
    },
    ReplyMailbox: {
      screen: ReplyMailbox,
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
  const [user, setUser] = useState("");
  const value = { user, setUser };

  return (
    <UserContextProvider>
      <Navigator/>
    </UserContextProvider>
  );
}