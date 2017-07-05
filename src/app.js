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

  // Check if currently on Dashboard or Stats

  return (
    <View style={{ paddingTop: 40 }}>
      <Button onPress={() => navigation.navigate('Dashboard')} title="Home" />
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

const DrawerApp = ({ dispatch, nav }) =>
  <DrawerNavigation
    navigation={addNavigationHelpers({
      dispatch: dispatch,
      state: nav
    })}
  />

const mapStateToProps = s => {
  console.log('STATE', s)
  return { nav: s.nav }
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
