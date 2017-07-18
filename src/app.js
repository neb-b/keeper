// @flow

import React from 'react'
import {
  StackNavigator,
  addNavigationHelpers,
  TabNavigator,
} from 'react-navigation'
import SettingsScreen from './screens/settings'
import HomeScreen from './screens/home'
import NewDreamScreen from './screens/new-dream'
import StatsScreen from './screens/dream-stats'

// Stack navigators
const StatsNavigator = StackNavigator({
  Stats: { screen: StatsScreen },
})

const TimelineNavigator = StackNavigator({
  Timeline: { screen: HomeScreen },
})

const SettingsNavigator = StackNavigator({
  Settings: { screen: SettingsScreen },
})

const NewDreamNavigation = StackNavigator({
  NewDream: { screen: NewDreamScreen },
})

// Tab navigation
const AppNavigator = TabNavigator(
  {
    Home: { screen: TimelineNavigator },
    Stats: { screen: StatsNavigator },
    Settings: { screen: SettingsNavigator },
  },
  {
    // Home tabNav styles/settings
    swipeEnabled: true,
    animationEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      inactiveTintColor: '#f4f4f4',
      activeTintColor: '#eeed5f',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#7a3bc1',
      },
    },
  }
)

const KeeperNavigation = StackNavigator(
  {
    Home: { screen: AppNavigator },
    NewDream: { screen: NewDreamNavigation },
  },
  { headerMode: 'none' }
)

export default KeeperNavigation
