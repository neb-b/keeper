import React from 'react'
import { View } from 'react-native'
import Header from '../components/header'

const Screen = props => {
  const { navigation, children } = props
  console.log('\n\n Screen', navigation)
  // <Header navigation={navigation} />
  return (
    <View>
      {children}
    </View>
  )
}

export default Screen
