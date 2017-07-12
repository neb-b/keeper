import React from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import Screen from './screen-wrapper'

class Home extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    title: 'Home'
  }
  render() {
    const { navigation } = this.props

    return (
      <Screen navigation={navigation}>
        <Text style={{ paddingTop: 40 }}>Dashboard</Text>
        <View style={{ padding: 50 }}>
          <Text style={{ textAlign: 'center' }}>Calendar</Text>
        </View>
        <Button
          onPress={() => navigation.navigate('NewDream')}
          title="New Dream"
        />
      </Screen>
    )
  }
}

export default Home
