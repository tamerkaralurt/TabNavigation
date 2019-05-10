import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class ContactDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ContactDetail Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});