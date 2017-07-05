import { combineReducers } from 'redux'
import settings from './settings'

export default (buildReducers = navReducer => {
  return combineReducers({
    nav: navReducer,
    settings
  })
})
