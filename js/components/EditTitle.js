import React, { Component } from 'react';
import {
  Platform,
  Dimensions,
  View,
  Text
} from 'react-native';
import StyleSheet from '../common/MMStyleSheet';
import MMColors from '../common/MMColors';
import MMFonts from "../common/MMFonts";

/* Config
============================================================================= */

let STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : 25;
if (Platform.OS === "android" && Platform.Version && Platform.Version < 21) {
  STATUS_BAR_HEIGHT = 0;
}
const HEADER_HEIGHT =
  Platform.OS === "ios" ? 45 + STATUS_BAR_HEIGHT : 60 + STATUS_BAR_HEIGHT;
const SCREEN_WIDTH = Dimensions.get("window").width;
const IOS_ITEM_TEXT_SIZE = SCREEN_WIDTH < 375 ? 10 : 13;

const FAVORITE_ICON_WIDTH = 37,
  FAVORITE_ICON_HEIGHT = 31;

export type Item = {
  title?: string,
  icon?: number,
  layout?: Layout,
  onPress?: () => void
};

export type Props = {
  title?: string,
  rightItem?: Item,
  style?: any,
  children?: any
};

/* =============================================================================
<MMHeader /> (When Platform.os is iOS)
--------------------------------------------------------------------------------
View header

============================================================================= */

class MMHeaderIOS extends React.Component {
  static height: number;
  props: Props;

  static defaultProps = {
    backgroundColor: MMColors.gray,
    titleColor: MMColors.yellow,
    itemsColor: MMColors.white
  };

  render() {
    const {
      title,
      backgroundColor,
      titleColor,
      itemsColor
    } = this.props;

    const content = <Text>Memo</Text>;
      // React.Children.count(this.props.children) === 0 ? (
      //   <HeaderTitle numberOfLines={1} style={{ color: titleColor }}>
      //     {title}
      //   </HeaderTitle>
      // ) : (
      //   this.props.children
      // );

    const right = <Text></Text>;
    const left = '';

    return (
      <View style={[styles.header, { backgroundColor }, this.props.style]}>
        <View style={styles.leftItem}>{left}</View>
        <View
          style={styles.centerItem}
        >
          {content}
        </View>
        <View style={styles.rightItem}>{right}</View>
      </View>
    );
  }
}

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  header: {
    android: {
      paddingTop: STATUS_BAR_HEIGHT
    },
    ios: {
      backgroundColor: "transparent",
      paddingTop: STATUS_BAR_HEIGHT,
      height: HEADER_HEIGHT,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }
  },
  leftItem: {
    flex: 1,
    alignItems: "flex-start"
  },
  centerItem: {
    flex: 1,
    alignItems: "center"
  },
  rightItem: {
    flex: 1,
    alignItems: "flex-end"
  },
});

const Header = Platform.OS === "ios" ? MMHeaderIOS : MMHeaderAndroid;

/* Export
============================================================================= */
module.exports = Header;
