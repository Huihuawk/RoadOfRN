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
import { connect } from 'react-redux';
import { addMemo } from '../actions/memo';
import local from '../storage';

const uuidv1 = require('uuid/v1');

class NewMemo extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
    };
  };

  constructor(props){
    super(props);
    this.state = {
      memoData: null,
      value: '',
      uuid: null,
    }
  }

  componentDidMount() {
    const { id, key } = this.props.navigation.state.params;
    if (id) {
      local.get(key, id)
        .then((data) => {
          if (data) {
            this.setState({ memoData: data.memo });
          }
        });
    } else {
      const uuid = uuidv1();
      this.setState({ uuid });
    }
  }

  onChange = (value) => {
    const { id, key } = this.props.navigation.state.params;
    this.setState({ value });
    const val = {
      id: id || this.state.uuid,
      text: value,
      date: new Date().toLocaleString(),
    };
    this.props.dispatch(addMemo(key, val.id, val));
  };

  render() {
    const { memoData, value } = this.state;
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
            {memoData ? memoData.date : new Date().toLocaleString()}
          </Text>
          <TextInput
            value={memoData ? memoData.text : value}
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
    data: store.memo.data,
  }
}

export default connect(mapStateToProps)(NewMemo);
