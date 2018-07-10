import React, { Component } from 'react';
import {
    Alert,
    Button,
    View,
} from 'react-native';

export default class LogoTitle extends Component {
    render() {
        return (
            <View style={{ position: 'absolute', right: 0 }}>
                <Button
                    title="编辑"
                    color="#334d81"
                    onPress={() => Alert.alert('Button has been pressed!')}
                />
            </View>
        );
    }
}
