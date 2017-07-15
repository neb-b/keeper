import React from 'react'
import { View, ScrollView } from 'react-native'
import Header from '../components/header'

const Screen = props => {
  const { children, scroll } = props
  const WrapperElement = scroll ? ScrollView : View

  return (
    <WrapperElement>
      {children}
    </WrapperElement>
  )
}

export default Screen
