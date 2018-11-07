import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import NewMemo from './components/NewMemo';
import HomeScreen from './containers/Home';
import ModalScreen from './components/ModalKe';

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    NewMemo: {
      screen: NewMemo,
    },
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#e9e9ee',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const Navigator = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default { Navigator };
