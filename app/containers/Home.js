import React, { Component } from 'react';
import {
    Button,
    View,
    Text
} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: '便签',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details', {
                        itemId: 68,
                        otherParam: 'otherParams',
                    })}
                />
            </View>
        );
    }
}
