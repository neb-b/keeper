import React from "react";
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Keeper',
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings'
  }

  render() {
    return <Text>Settings</Text>
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen }
});

export default App
