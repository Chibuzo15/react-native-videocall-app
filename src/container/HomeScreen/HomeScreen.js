import React, { Component } from 'react';
import {View, Text, StatusBar} from 'react-native';

// import { StatusBar } from 'expo-status-bar';

class HomeScreen extends Component {
    render(){
        return (
            <View>
                <StatusBar style="light-content"/>
                <Text>
                    HomeScreen
                </Text>
            </View>
        )
    }
}

export default HomeScreen;