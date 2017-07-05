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
        <Text>Stats</Text>

        <Button
          onPress={() => navigation.navigate('NewDream')}
          title="New Dream"
        />
      </Screen>
    )
  }
}

export default Home
