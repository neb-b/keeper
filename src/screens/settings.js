import React from 'react'
import { Text, Button } from 'react-native'
import Screen from './screen-wrapper'
import TabIcon from './internal/tab-icon'

class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Settings',
    drawerLabel: 'Settings',
    tabBarIcon: ({ focused }) => <TabIcon focused={focused} page="settings" />
  })

  render() {
    const { navigation } = this.props

    return (
      <Screen navigation={navigation} scroll>
        <Text style={{ paddingTop: 40 }}>Settings page</Text>
      </Screen>
    )
  }
}

export default SettingsScreen
