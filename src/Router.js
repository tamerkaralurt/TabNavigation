import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator} from "react-navigation";

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/Home';
import ContactScreen from './screens/Contact';
import ContactDetailScreen from './screens/ContactDetail';
import SettingsScreen from './screens/Settings';
import SettingsModal from "./components/SettingsModal";

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
            // title: 'İletişim Detayı'
        }
    }
});

const TabNavigator = createMaterialTopTabNavigator({ // createBottomTabNavigator -> createMaterialTopTabNavigator
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
        inactiveBackgroundColor: 'white',
        // showLabel: false, //TabBardaki yazılar görünmesin sadece logolar görünsün.
        style:{
            backgroundColor: 'red', //genel tapbar'a arkaplan rengi veriyor.
            color: 'white'
        }
    },
    initialRouteName: 'Contact'
});
const ModalStack = createStackNavigator({
    Tabs: {
        screen: TabNavigator
    },
    SettingsModel: {
        screen: SettingsModal
    }
},{
    mode: 'model',
    headerMode: 'none'
});

export default createAppContainer(ModalStack);