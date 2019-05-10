import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';

export default class Settings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                title={'Model Aç'}
                onPress={() => this.props.navigation.navigate('SettingsModel')}
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