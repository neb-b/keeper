import React from 'react'
import { View, Text, Button } from 'react-native'
import Screen from './screen-wrapper'

class Home extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Stats',
    title: 'Stats'
  }
  render() {
    const { navigation } = this.props

    return (
      <Screen navigation={navigation}>
        <Text style={{ paddingTop: 40 }}>Stats</Text>
      </Screen>
    )
  }
}

export default Home
