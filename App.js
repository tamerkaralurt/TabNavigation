import React, {Component, Fragment} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import Router from './src/Router';

export default class App extends Component {
    render() {
        return (
            // <!-- Fragment Eklendi -->
            // <!-- StatusBar Pil ve Saat gibi nesnelerin olduğu bar gizlendi -->
            <Fragment>
                <StatusBar hidden={true}/>
                <Router/>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
