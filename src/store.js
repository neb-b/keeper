import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import buildReducers from './redux/reducers/root-reducer'

const isDev = __DEV__

const middleware = isDev ? applyMiddleware(logger) : applyMiddleware()

const buildStore = navReducer =>
  createStore(buildReducers(navReducer), middleware)

export default buildStore
