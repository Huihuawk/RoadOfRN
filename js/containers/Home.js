import React, { Component } from 'react';
import { Alert } from 'react-native';
import {
  Screen,
  Image,
  View,
  GridRow,
  DropDownMenu,
  ListView,
  Tile,
  TouchableOpacity,
  Subtitle,
  Caption,
  NavigationBar,
  Icon,
  Button,
  Title,
} from '@shoutem/ui';
import { connect } from 'react-redux';
import { addMemo, loadMemo } from '../actions/memo';
import CardMemo from '../components/CardMemo';
import MMColors from "../common/MMColors";
import local from "../storage";
import * as TYPES from "../actions/types";

class HomeScreen extends Component {
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
          title: "Memo",
        },
        {
          title: "Chrysler",
        },
        {
          title: "Trash",
        },
      ],
      memoData: [],
    }
  }

  componentDidMount() {
    this.init(this.state.tipFile[0].title);
  }

  init = (key) => {
    local.getAllDataForKey(key)
      .then((memo) => {
        if (memo) {
          this.setState({ memoData: memo });
        }
      });
  };

  onPressMemo = (key, id) => {
    this.props.navigation.navigate("NewMemo", {
      key,
      id,
      refresh: () => {
        this.init(key);
      }
    })
  };

  onLongPressMemo = (key, id) => {
    Alert.alert(
      '提示',
      '确定要删除吗?',
      [
        {text: 'CANCEL', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => {
            local.remove(key, id);
            this.init(key);
            console.log('del')
          }},
      ]
    )
  };

  renderRow = (rowData) => {
    const key = this.state.selectedFile ? this.state.selectedFile.title : this.state.tipFile[0].title;
    let cellViews = [];
    if (rowData.length) {
      cellViews = rowData.map((memo) => {
        const m = JSON.parse(memo);
        return (<CardMemo
          key={m.id}
          onPressMemo={this.onPressMemo.bind(this, key, m.id)}
          onLongPressMemo={this.onLongPressMemo.bind(this, key, m.id)}
          content={m.memo} />);
      });
    }

    return (
      <GridRow columns={2}>
        {cellViews}
      </GridRow>
    );
  };

  onOS = (file) => {
    console.log(file.title)
    this.init(file.title);
    this.setState({ selectedFile: file });
  }

  render() {
    const selectedFile = this.state.selectedFile || this.state.tipFile[0];
    const group = GridRow.groupByRows(this.state.memoData, 2);
    const key = selectedFile ? selectedFile.title : this.state.tipFile[0].title;
    return (
      <Screen>
        <NavigationBar
          styleName="inline no-border"
          style={styles}
          centerComponent={
            <DropDownMenu
              styleName="horizontal"
              style={styles}
              options={this.state.tipFile}
              selectedOption={selectedFile ? selectedFile : this.state.tipFile[0]}
              onOptionSelected={this.onOS}
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
        {group.length ? <ListView
          data={group}
          renderRow={this.renderRow}
        /> : <Tile styleName="text-centric clear">
          <Title styleName="sm-gutter-bottom">No Memo.</Title>
        </Tile>}
        {key === 'Trash' ? null : <Button
          style={styles.newMM}
          styleName="clear"
          onPress={() => {
            this.props.navigation.navigate("NewMemo", {
              key,
              refresh: () => {
                this.init(key);
              }
            })
          }}
        >
          <Icon style={styles.newMM_icon} name="plus-button" />
        </Button>}
      </Screen>
    );
  }
}

const styles = {
  componentsContainer: {
    backgroundColor: "#f2f2f2",
  },
  horizontalContainer: {
    height: 42,
  },
  newMM: {
    right: 30,
    bottom: 40,
    position: 'absolute',
    height: 62,
    width: 62,
    borderRadius: 31,
    backgroundColor: MMColors.yellow,
  },
  newMM_icon: {
    padding: 0,
    fontSize: 40,
    width: 62,
    lineHeight: 62,
    color: MMColors.white,
  }
};

const mapStateToProps = (store) => {
  return {
    data: store.memo.data,
  }
};

const mapDispatchToProps = dispatch => ({
  _loadMemo: (data) => dispatch(data)
});

export default connect(mapStateToProps)(HomeScreen);
// export default HomeScreen;
