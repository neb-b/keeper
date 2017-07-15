import React from 'react'
import { Text, Button } from 'react-native'
import Screen from './screen-wrapper'

class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Settings',
    drawerLabel: 'Home',
    headerRight: (
      <Button
        title="New Dream"
        onPress={() => navigation.navigate('NewDream')}
      />
    ),
    headerLeft: (
      <Button title="E" onPress={() => navigation.navigate('DrawerOpen')} />
    )
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
