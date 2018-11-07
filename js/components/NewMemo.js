import React, { Component } from 'react';
import {
  Screen,
  Image,
  View,
  ScrollView,
  DropDownMenu,
  Divider,
  Card,
  Examples,
  Subtitle,
  TextInput,
  NavigationBar,
  Icon,
  Button,
  Text,
} from '@shoutem/ui';
import MMColors from "../common/MMColors";
import { connect } from 'react-redux';
import { addMemo } from '../actions/memo';
import local from '../storage';

class NewMemo extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
    };
  };

  onChange = (value) => {
    const val = {
      text: value,
      date: new Date().toLocaleString(),
    };
    this.props.dispatch(addMemo(val));
  };

  render() {
    return (
      <Screen styleName="paper">
        <NavigationBar
          styleName="inline no-border"
          style={styles}
          hasHistory
          navigateBack={() => {
            this.props.navigation.state.params.refresh();
            this.props.navigation.goBack()
          }}
        />
        <View>
          <Text style={styles.date}>
            {new Date().toLocaleString()}
          </Text>
          <TextInput
            onChangeText={this.onChange}
            placeholder={'Write ...'}
          />
        </View>
      </Screen>
    );
  }
}

const styles = {
  componentsContainer: {
    backgroundColor: "#fff",
  },
  date: {
    marginLeft: 10,
    color: "#999",
  },
};

function mapStateToProps(store){
  return {
    data: store.data,
  }
}

export default connect(mapStateToProps)(NewMemo);
