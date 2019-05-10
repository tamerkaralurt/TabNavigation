import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class ContactDetail extends Component {
    static navigationOptions = ({navigation}) => {
        const user = navigation.getParam('user');
        return {
            title: `${user.name.first} ${user.name.last}`
        }
    };

    state = {
      name: ''
    };

    render() {
        const {name, gender} = this.props.navigation.getParam('user');
        console.log(name);
        return (
            <View style={styles.container}>
                <Text style={{color: 'black'}}>
                    {name.first} {name.last} {gender}
                </Text>
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