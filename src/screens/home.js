import React from 'react'
import { View, Text, Button } from 'react-native'
import Screen from './screen-wrapper'

class Home extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    title: 'Keeper',
    headerRight: <Text>Hello world</Text>
  }
  render() {
    const { navigation } = this.props

    return (
      <Screen navigation={navigation}>
        <Text>Dashboard</Text>

        <Button
          onPress={() => navigation.navigate('Settings')}
          title="New Dream"
        />
      </Screen>
    )
  }
}

export default Home
