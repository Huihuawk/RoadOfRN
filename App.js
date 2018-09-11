import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './app/containers/Home';
import DetailsScreen from './app/containers/Details';
import ModalScreen from './app/components/ModalKe';
import ScrollViewKe from './app/components/ScrollViewKe';
import LongListKe from './app/components/LongListKe';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return <RootStack />;
  }
}

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    ScrollViewKe: {
      screen: ScrollViewKe,
    },
    LongListKe: {
      screen: LongListKe,
    },
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#334d81',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const RootStack = createStackNavigator(
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
