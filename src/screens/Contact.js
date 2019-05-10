import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Contact extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Contact Screen</Text>
                <Button
                    title={'Contact Detail'}
                    onPress={() => this.props.navigation.navigate('ContactDetail')}
                />
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