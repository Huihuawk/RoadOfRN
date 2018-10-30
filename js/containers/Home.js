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
  Caption,
  NavigationBar,
  Icon,
  Button,
  Title,
} from '@shoutem/ui';
import MemoTitle from '../components/EditTitle';
import MMColors from "../common/MMColors";
import StyleSheet from "../common/MMStyleSheet";

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
    };
  };

  constructor(props){
    super(props);
    this.state = {
      tipFile: [
        {
          title: "便签",
        },
        {
          title: "废纸篓",
        },
        {
          title: "Chrysler",
        },
      ],
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };


  render() {
    const selectedFile = this.state.selectedFile || this.state.tipFile[0];

    return (
      <Screen>
        <NavigationBar
          styleName="inline clear"

          centerComponent={
            <DropDownMenu
              styleName="horizontal"
              style={styles}
              options={this.state.tipFile}
              selectedOption={selectedFile ? selectedFile : this.state.tipFile[0]}
              onOptionSelected={(file) => this.setState({ selectedFile: file })}
              titleProperty="title"
              valueProperty="component"
            />
          }

          rightComponent={
            <Button>
              <Icon name="more-horizontal" />
            </Button>
          }
        />
        <Divider />
        <ScrollView key={selectedFile.title}>
          <Card>
            <Image
              styleName="medium-wide"
              source={{uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png'}}
            />
            <View styleName="content">
              <Subtitle>Choosing The Right Boutique Hotel For You</Subtitle>
              <Caption>21 hours ago</Caption>
            </View>

          </Card>
        </ScrollView>
      </Screen>
    );
  }
}

const styles = {
  horizontalContainer: {
    height: 42,
  },
};
