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
    onPressMemo: PropTypes.func,
    onLongPressMemo: PropTypes.func
  };

  render() {
    const { content, onPressMemo, onLongPressMemo } = this.props;
    return (
      <TouchableOpacity onPress={onPressMemo} onLongPress={onLongPressMemo}>
          <Card>
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

const styles = {
  backgroundColor: 'red',
  flexWrap: 'wrap',
  flexShrink: 0,
};
