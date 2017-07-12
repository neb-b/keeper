import React from 'react'
import { Button, View, Text, TouchableHighlight } from 'react-native'
import {
  StackNavigator,
  DrawerNavigator,
  addNavigationHelpers,
  TabNavigator
} from 'react-navigation'
import { connect, Provider } from 'react-redux'
import SettingsScreen from './screens/settings'
import HomeScreen from './screens/home'
import NewDreamScreen from './screens/new-dream'
import StatsScreen from './screens/dream-stats'
import createStore from './store'

const StatsNavigator = StackNavigator({
  Stats: { screen: StatsScreen }
})

const TimelineNavigator = StackNavigator({
  Timeline: { screen: HomeScreen }
})

const SettingsNavigator = StackNavigator({
  Settings: { screen: SettingsScreen }
})

const AppNavigator = TabNavigator({
  Timeline: {
    screen: TimelineNavigator
  },
  Stats: {
    screen: StatsNavigator
  },
  Settings: {
    screen: SettingsNavigator
  }
})

const DrawerNavigation = DrawerNavigator({
  Home: { screen: AppNavigator },
  NewDream: { screen: NewDreamScreen }
})

export default DrawerNavigation
