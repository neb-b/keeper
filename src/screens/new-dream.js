import React from 'react'
import { Text, View } from 'react-native'
import Screen from './screen-wrapper'

class NewDream extends React.Component {
  static navigationOptions = {
    title: 'New Dream'
  }

  render() {
    const { navigation } = this.props

    return (
      <Screen navigation={navigation}>
        <Text>Add a new dream...</Text>
      </Screen>
    )
  }
}

export default NewDream
