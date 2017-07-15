// @flow

import React from 'react'
import { View, ScrollView } from 'react-native'

const Screen = ({
  children,
  scroll,
}: {
  children?: React$Element<any>,
  scroll?: boolean,
}) => {
  const WrapperElement = scroll ? ScrollView : View

  return (
    <WrapperElement>
      {children}
    </WrapperElement>
  )
}

export default Screen
