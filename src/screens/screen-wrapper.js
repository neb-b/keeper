import React from 'react'
import { View, ScrollView } from 'react-native'

const Screen = ({ children, scroll }) => {
  const WrapperElement = scroll ? ScrollView : View

  return (
    <WrapperElement>
      {children}
    </WrapperElement>
  )
}

export default Screen
