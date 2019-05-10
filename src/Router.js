import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createAppContainer} from "react-navigation";

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/Home';
import ContactScreen from './screens/Contact';
import ContactDetailScreen from './screens/ContactDetail';
import SettingsScreen from './screens/Settings';

const ContactStack = createStackNavigator({
    Contact: {
        screen: ContactScreen,
        navigationOptions:{
            title: 'İletişim'
        }
    },
    ContactDetail: {
        screen: ContactDetailScreen,
        navigationOptions: {
            title: 'İletişim Detayı'
        }
    }
});

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Anasayfa',
            tabBarIcon: ({tintColor}) => (<Icon name="ios-home" size={22} color={tintColor}/>)
        }
    },
    Contact: {
        screen: ContactStack,
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