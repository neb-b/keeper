import React from 'react'
import { View } from 'react-native'
import Header from '../components/header'

const Screen = props => {
  const { navigation, children } = props
  // <Header navigation={navigation} />
  return (
    <View>
      {children}
    </View>
  )
}

export default Screen
