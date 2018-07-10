import React, { Component } from 'react';
import {
    Alert,
    Button,
    View,
    Image
} from 'react-native';

export default class LogoTitle extends Component {
    render() {
        return (
            <View>
                <Image
                    source={require('../assets/img/spiro.png')}
                    style={{ width: 30, height: 30 }}
                />
            </View>
        );
    }
}
