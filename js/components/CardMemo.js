import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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
  TouchableOpacity,
  Icon,
  Button,
  Title,
} from '@shoutem/ui';
import MMColors from "../common/MMColors";

export default class CardMemo extends Component {
  static propTypes = {
    content: PropTypes.object,
    // onSwitchColor: PropTypes.func
  };

  render() {
    const { content } = this.props;
    return (
      <TouchableOpacity styleName="flexible">
        <Card styleName="flexible">
          <Image
            styleName="medium-wide"
            source={{ uri: "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" }}
          />
          <View styleName="content">
            <Subtitle>{content.text}</Subtitle>
            <View styleName="horizontal">
              <Caption styleName="collapsible">{content.date}</Caption>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}
