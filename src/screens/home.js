// @flow

import React from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import Screen from './screen-wrapper'
import TabIcon from './internal/tab-icon'

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Home',
    title: 'Dreams',
    headerRight: (
      <Button
        title="New Dream"
        onPress={() => navigation.navigate('NewDream')}
      />
    ),
    tabBarIcon: ({ focused }) => {
      return <TabIcon focused={focused} page="settings" />
    },
  })

  props: {
    navigation: Object,
  }

  render() {
    const { navigation } = this.props

    return (
      <Screen navigation={navigation} scroll>
        <View style={{ padding: 50, marginTop: 75, marginBottom: 75 }}>
          <Text style={{ textAlign: 'center' }}>?????</Text>
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
