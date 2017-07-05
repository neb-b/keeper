import { handleActions } from 'redux-actions'
const initialState = {
  activeRoute: 'Dashboard'
}

export default handleActions(
  {
    'Navigation/NAVIGATE': (state, { routeName }) => {
      return {
        ...state,
        activeRoute: routeName
      }
    }
  },
  initialState
)
