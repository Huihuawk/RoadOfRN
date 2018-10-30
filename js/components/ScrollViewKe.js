import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  Image
} from 'react-native';

export default class ScrollViewKe extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: navigation.getParam('otherParam'),
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
      headerBackTitle: null,
    };
  };

  render() {
    return (
      <ScrollView>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>Time is A fool.</Text>
        <Image style={{ margin: 5 }} source={require('../assets/img/tif.jpg')} />
        <Image style={{ margin: 5 }} source={require('../assets/img/tif.jpg')} />
        <Image style={{ margin: 5 }} source={require('../assets/img/tif.jpg')} />
        <Image style={{ margin: 5 }} source={require('../assets/img/tif.jpg')} />
        <Text style={{ fontSize: 18, textAlign: 'center' }}>Time is A fool.</Text>
        <Image style={{ margin: 5 }} source={require('../assets/img/tif.jpg')} />
        <Image style={{ margin: 5 }} source={require('../assets/img/tif.jpg')} />
        <Image style={{ margin: 5 }} source={require('../assets/img/tif.jpg')} />
        <Image style={{ margin: 5 }} source={require('../assets/img/tif.jpg')} />
        <Text style={{ fontSize: 18, textAlign: 'center' }}>Time is A fool.</Text>
      </ScrollView>
    );
  }
}
