import React from 'react'
import { Button, View, Text, TouchableHighlight } from 'react-native'
import {
  StackNavigator,
  DrawerNavigator,
  addNavigationHelpers
} from 'react-navigation'
import { connect, Provider } from 'react-redux'
import SettingsScreen from './screens/settings'
import HomeScreen from './screens/home'
import NewDreamScreen from './screens/new-dream'
import StatsScreen from './screens/dream-stats'
import createStore from './store'

const DrawerComponent = ({ navigation }) => {
  console.log('navigation', navigation)
  const { activeRoute } = navigation

  console.log('ACTIVEROUTE', activeRoute)

  // Check if currently on Dashboard or Stats

  return (
    <View style={{ paddingTop: 40 }}>
      <Button
        title="Home"
        onPress={() => {
          if (activeRoute === 'Dashboard') {
            navigation.navigate('DrawerClose')
          } else {
            navigation.navigate('Dashboard')
          }
        }}
      />
      <Button
        onPress={() => navigation.navigate('NewDream')}
        title="New Dream"
      />
      <Button onPress={() => navigation.navigate('Stats')} title="Stats" />
      <Button
        onPress={() => navigation.navigate('Settings')}
        title="Settings"
      />
    </View>
  )
}

const DashboardNavigator = StackNavigator(
  {
    Dashboard: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
    NewDream: { screen: NewDreamScreen }
  },
  { initialRoute: 'Dashboard' }
)

const StatsNavigator = StackNavigator(
  {
    Stats: { screen: StatsScreen },
    Settings: { screen: SettingsScreen },
    NewDream: { screen: NewDreamScreen }
  },
  { initialRoute: 'Stats' }
)

const DrawerNavigation = DrawerNavigator(
  {
    Dashboard: {
      screen: DashboardNavigator
    },
    Stats: {
      screen: StatsNavigator
    }
  },
  { contentComponent: DrawerComponent }
)

const DrawerApp = ({ dispatch, nav, settings }) =>
  <DrawerNavigation
    navigation={addNavigationHelpers({
      dispatch: dispatch,
      state: nav,
      activeRoute: settings.activeRoute
    })}
  />

const mapStateToProps = s => {
  console.log('STATE', s)
  return { ...s }
}

const ConnectedApp = connect(mapStateToProps)(DrawerApp)

const navReducer = (state, action) => {
  const nextState = DrawerNavigation.router.getStateForAction(action, state)

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}

const App = () =>
  <Provider store={createStore(navReducer)}>
    <ConnectedApp />
  </Provider>

export default App
