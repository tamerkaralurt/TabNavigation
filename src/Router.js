import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from "react-navigation";

import HomeScreen from './screens/Home';
import ContactScreen from './screens/Contact';
import SettingsScreen from './screens/Settings';

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen
    },
    Contact: {
        screen: ContactScreen
    },
    Settings: {
        screen: SettingsScreen
    }
});

export default createAppContainer(TabNavigator);