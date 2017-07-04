import React from 'react'
import { Button, View, Text, TouchableHighlight } from 'react-native'
import {
  StackNavigator,
  DrawerNavigator,
  addNavigationHelpers
} from 'react-navigation'
import SettingsScreen from './screens/settings'
import HomeScreen from './screens/home'
import NewDreamScreen from './screens/new-dream'

const DrawerComponent = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('SettingsView')}
        title="settings"
      />
    </View>
  )
}

const DashboardNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  SettingsView: { screen: SettingsScreen }
})

const DrawerNavigation = DrawerNavigator(
  {
    Home: {
      screen: DashboardNavigator
    }
  },
  { contentComponent: DrawerComponent }
)

const RootNavigator = StackNavigator({
  Root: {
    screen: DrawerNavigation
  }
})

export default DrawerNavigation
