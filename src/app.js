import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import SettingsScreen from './screens/settings'

class Home extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    title: 'Keeper'
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <TouchableHighlight onPress={() => navigate('Settings')}>
          <Text style={{ padding: 20 }}>Settings</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const MainNavigator = StackNavigator({
  Home: { screen: Home },
  Settings: { screen: SettingsScreen }
})

const App = DrawerNavigator({
  // DrawerNavigation is Home/Stats/Old Dreams
  Home: { screen: MainNavigator },
  Settings: { screen: SettingsScreen }
})

export default App
