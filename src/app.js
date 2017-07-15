import React from 'react'
import { Button, View, Text, TouchableHighlight } from 'react-native'
import {
  StackNavigator,
  DrawerNavigator,
  addNavigationHelpers,
  TabNavigator
} from 'react-navigation'
import SettingsScreen from './screens/settings'
import HomeScreen from './screens/home'
import NewDreamScreen from './screens/new-dream'
import StatsScreen from './screens/dream-stats'

const StatsNavigator = StackNavigator(
  {
    Stats: { screen: StatsScreen }
  },
  { headerMode: 'none' }
)

const TimelineNavigator = StackNavigator(
  {
    Timeline: { screen: HomeScreen }
  },
  { headerMode: 'none' }
)

const SettingsNavigator = StackNavigator(
  {
    Settings: { screen: SettingsScreen }
  },
  { headerMode: 'none' }
)

const NewDreamNavigator = StackNavigator({
  NewDream: { screen: NewDreamScreen }
})

const TabNavigation = TabNavigator({
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

const StackNavigation = StackNavigator({
  default: {
    screen: TabNavigation
  }
})

const KeeperNavigation = DrawerNavigator({
  Home: { screen: StackNavigation },
  NewDream: { screen: NewDreamNavigator }
})

const Keeper = () => <KeeperNavigation style={{ margin: 40 }} />

export default KeeperNavigation
