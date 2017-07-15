import React from 'react'
import { Text, View, Button } from 'react-native'
import Screen from './screen-wrapper'

/*
 Will need to disable the drawer on this screen
*/

class NewDream extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'New Dream',
    headerLeft: <Button title="<" onPress={() => navigation.navigate('Home')} />
  })

  render() {
    const { navigation } = this.props

    return (
      <Screen navigation={navigation}>
        <Text style={{ paddingTop: 40 }}>Add a new dream...</Text>
        <Button onPress={() => navigation.navigate('Home')} title="Cancel" />
      </Screen>
    )
  }
}

export default NewDream
