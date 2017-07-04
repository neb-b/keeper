import React from "react"
import { View } from 'react-native'
import Header from "../components/header"

const Screen = (props) => {
  const {navigation, children} = props;
  console.log('\n\n Screen', navigation);
  return (
    <View>
      <Header navigation={navigation} />
      {children}
    </View>
  )
}

export default Screen
