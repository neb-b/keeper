import React from "react"
import { View, Text } from "react-native"

const Header = (props) => {
  const { navigation } = props;

  const { state: { routeName } } = navigation;

  console.log('HEADERRR', props);
  return (
    <View style={{height: 40}}>
      <Text style={{padding: 20}}>{routeName}</Text>
    </View>
  )
}

export default Header
