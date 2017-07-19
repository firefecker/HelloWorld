import React, { Component } from 'react';

import {StackNavigator, NavigationActions} from 'react-navigation';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,

    NavigatorIOS,
    Button
} from 'react-native';

class LoginPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}/>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection:'row'
    },
    welcome: {
        fontsize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        backgroundColor:'#555555'
    }
});

