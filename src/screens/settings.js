import React from 'react'
import { Text } from 'react-native'
import Screen from './screen-wrapper'

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings'
  }

  render() {
    const { navigation } = this.props

    return (
      <Screen navigation={navigation}>
        <Text>Settings page</Text>
      </Screen>
    )
  }
}

export default SettingsScreen
