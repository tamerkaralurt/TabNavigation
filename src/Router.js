import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from "react-navigation";

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/Home';
import ContactScreen from './screens/Contact';
import SettingsScreen from './screens/Settings';

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Anasayfa',
            tabBarIcon: ({tintColor}) => (<Icon name="ios-home" size={22} color={tintColor}/>)
        }
    },
    Contact: {
        screen: ContactScreen,
        navigationOptions: {
            tabBarLabel: 'İletişim',
            tabBarIcon: ({tintColor}) => (<Icon name="ios-contact" size={22} color={tintColor}/>)
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarLabel: 'Ayarlar',
            tabBarIcon: ({tintColor}) => (<Icon name="ios-settings" size={22} color={tintColor}/>)
        }
    }
},{
    tabBarOptions:{
        activeTintColor: 'white',
        activeBackgroundColor: 'red',
        inactiveTintColor: 'red',
        inactiveBackgroundColor: 'white'
    }
});

export default createAppContainer(TabNavigator);