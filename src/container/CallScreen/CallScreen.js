import React, { Component } from 'react';
import {View, Text, StatusBar} from 'react-native';

// import { StatusBar } from 'expo-status-bar';

class CallScreen extends Component {
    render(){
        return (
            <View>
                <StatusBar style="light-content"/>
                <Text>
                    CallScreen
                </Text>
            </View>
        )
    }
}

export default CallScreen;