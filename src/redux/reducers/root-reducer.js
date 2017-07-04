import { combineReducers } from 'redux'
import navReducer from "./nav-reducer"

export default buildReducers = (navReducer) => {
    return combineReducers({
      nav: navReducer
    })
}
