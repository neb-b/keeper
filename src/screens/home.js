import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
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
      </Screen>
    )
  }
}
// <TouchableHighlight onPress={() => navigation.navigate('NewDream')}>
//   <Text style={{ paddingTop: 20 }}>
//     {'New Dream'}
//   </Text>
// </TouchableHighlight>

export default Home
