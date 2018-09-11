import React, { Component } from 'react';
import {
  Button,
  View,
  Text
} from 'react-native';
import LogoTitle from '../components/EditTitle';

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+1"
          color="#fff"
        />
      ),
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Modal"
          color="#fff"
        />
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>Count:</Text>
        <Text style={{ fontSize: 21 }}>{this.state.count}</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {
            itemId: 68,
            otherParam: 'otherParams',
          })}
        />
        <Button
          title="Time is A fool"
          onPress={() => this.props.navigation.navigate('ScrollViewKe', {
            otherParam: 'Time is A fool',
          })}
        />
        <Button
          title="Long list"
          onPress={() => this.props.navigation.navigate('LongListKe', {
            otherParam: 'LongListKe',
          })}
        />
      </View>
    );
  }
}
