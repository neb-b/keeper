import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

const routeMap = {
  Settings: { leftIcon: 'Home', leftNavigate: 'Home', rightIcon: null },
  Home: { leftIcon: 'drawer', leftNavigate: 'DrawerOpen', rightIcon: null },
  NewDream: { leftIcon: 'Home', leftNavigate: 'Home', rightIcon: null }
}

const Header = props => {
  const { navigation } = props
  const { state: { routeName } } = navigation
  const { leftIcon, rightIcon, leftNavigate } = routeMap[routeName]

  return (
    <View style={styles.headerWrapper}>
      <View style={styles.leftWrapper}>
        {leftIcon &&
          <TouchableHighlight
            onPress={() => {
              navigation.navigate(leftNavigate)
            }}
          >
            <Text style={styles.leftAction}>
              {leftIcon}
            </Text>
          </TouchableHighlight>}
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          {routeName}
        </Text>
      </View>
      <View style={styles.rightWrapper}>
        {rightIcon &&
          <Text style={styles.rightAction}>
            {rightIcon}
          </Text>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerWrapper: {
    height: 60,
    backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftAction: {
    paddingTop: 30
  },
  rightAction: {},
  title: {
    // textAlign: 'center'
    paddingTop: 40
  }
})

export default Header
