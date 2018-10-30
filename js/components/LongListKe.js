import React, { Component } from 'react';
import { SectionList, FlatList, StyleSheet, Text, View } from 'react-native';

export default class LongListKe extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 21, color: '#334d81', textAlign: 'center' }} >FlatList</Text>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
            {key: 'Dev123in'},
            {key: 'Jac123kson'},
            {key: 'Jam123es'},
            {key: 'Joe123l'},
            {key: 'Joh123n'},
            {key: 'Jil123lian'},
            {key: 'Jim123my'},
            {key: 'Ju2slie'},
            {key: 'De23vin'},
            {key: 'Ja23ckson'},
            {key: 'Ja23mes'},
            {key: 'Jo23el'},
            {key: 'Jo23hn'},
            {key: 'Ji23llian'},
            {key: 'Ji23mmy'},
            {key: 'Ju23lie'},
            {key: 'Dev3n'},
            {key: 'Jac3son'},
            {key: 'Jam3s'},
            {key: 'Joe3'},
            {key: 'Joh3'},
            {key: 'Jil3ian'},
            {key: 'Jim3y'},
            {key: 'Jul3e'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        <Text style={{ fontSize: 21, color: '#334d81', textAlign: 'center' }} >SectionList</Text>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jsackson', 'Jdames', 'Jilflian', 'Jximmy', 'Joevl', 'Joshn', 'Juzlie']},
          ]}
          renderItem={({item}) => <Text style={styles.item1}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item1: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

