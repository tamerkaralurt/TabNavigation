import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createDrawerNavigator
} from "react-navigation"; // createBottomTabNavigator -> createMaterialTopTabNavigator

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/Home';
import ContactScreen from './screens/Contact';
import ContactDetailScreen from './screens/ContactDetail';
import SettingsScreen from './screens/Settings';
import SettingsModal from "./components/SettingsModal";
import DrawerMenu from "./components/DrawerMenu";

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

const TabNavigator = createBottomTabNavigator({ // createBottomTabNavigator -> createMaterialTopTabNavigator
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
    initialRouteName: 'Home' //Başlangıç Sayfası Ayarlandı
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

const DrawerNavigator = createDrawerNavigator({
    ModalStack:{
        screen: ModalStack,
    },
},{
    contentComponent: DrawerMenu
});

export default createAppContainer(DrawerNavigator);