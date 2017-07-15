import React from 'react'
import { View, Text, Button } from 'react-native'
import Screen from './screen-wrapper'

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Home',
    title: 'Stats',
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
      <Screen scroll>
        <View style={{ padding: 50, marginTop: 75, marginBottom: 75 }}>
          <Text style={{ textAlign: 'center' }}>Some Graph</Text>
        </View>
      </Screen>
    )
  }
}

export default Home
