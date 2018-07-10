import React, { Component } from 'react';
import {
    Button,
    View,
    Text
} from 'react-native';

export default class DetailsScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            title: navigation.getParam('otherParam', 'A Nested Details Screen'),
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
            headerBackTitle: null,
        };
    };

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details', {
                        itemId: Math.floor(Math.random() * 100),
                    })}
                />
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}
