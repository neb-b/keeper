import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { StackNavigator, DrawerNavigator, addNavigationHelpers } from 'react-navigation'
import SettingsScreen from './screens/settings'
import HomeScreen from './screens/home'
import NewDreamScreen from "./screens/new-dream"

const DashboardNavigator = StackNavigator({
  Home: { screen: HomeScreen }
}, { headerMode: 'none' })

const DrawerNavigation = DrawerNavigator({
  Home: {
    screen: DashboardNavigator
  },
  NewDream: {
    screen: NewDreamScreen
  },
  Settings: {
    screen: SettingsScreen
  }
})

export default DrawerNavigation
