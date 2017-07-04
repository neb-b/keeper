import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import buildReducers from './redux/reducers/root-reducer'

const isDev = __DEV__ // eslint-disable-line no-undef
const logger = createLogger()

const middleware = isDev
	? applyMiddleware(logger)
	: applyMiddleware()


const buildStore = (navReducer) => createStore(buildReducers(navReducer), middleware)

export default buildStore
