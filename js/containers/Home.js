import React, { Component } from 'react';
import {
  Screen,
  Image,
  View,
  GridRow,
  DropDownMenu,
  ListView,
  Card,
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
          title: "便签",
        },
        {
          title: "废纸篓",
        },
        {
          title: "Chrysler",
        },
      ],
      memoData: '',
    }
  }

  componentDidMount() {
    this.init();
  }

  init = () => {
    loadMemo()
      .then((data) => {
        this.setState({ memoData: data.data });
        // this.props._loadMemo(data);
      });
  };

  renderRow(rowData, sectionId, index) {
    let cellViews = [];
    if (rowData) {
      cellViews =
        // rowData.map((memo, id) => {return (
        <CardMemo content={rowData} />
        // );
      // });
    }

    return (
      <GridRow columns={2}>
        {cellViews}
        {cellViews}
      </GridRow>
    );
  }

  render() {
    const selectedFile = this.state.selectedFile || this.state.tipFile[0];
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
        <ListView
          data={[1]}
          renderRow={this.renderRow.bind(this, this.state.memoData)}
        />
        <Button
          style={styles.newMM}
          styleName="clear"
          onPress={() => {
            this.props.navigation.navigate("NewMemo", {
              refresh: () => {
                this.init();
              }
            })
          }}
        >
          <Icon style={styles.newMM_icon} name="plus-button" />
        </Button>
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
    data: store.data,
  }
};

const mapDispatchToProps = dispatch => ({
  _loadMemo: (data) => dispatch(data)
});

// export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
export default HomeScreen;
