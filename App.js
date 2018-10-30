import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './js/containers/Home';
import DetailsScreen from './js/containers/Details';
import ModalScreen from './js/components/ModalKe';
import ScrollViewKe from './js/components/ScrollViewKe';
import LongListKe from './js/components/LongListKe';


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
        backgroundColor: '#e9e9ee',
      },
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
