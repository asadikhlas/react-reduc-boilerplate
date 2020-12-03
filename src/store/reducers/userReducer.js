import { ACTION_TYPES } from '../actions/types'
const initialState = {
  name: 'dummy',
  isLoggedIn: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.USER_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: true
      })

    case ACTION_TYPES.USER_LOGIN_FAIL:
      return Object.assign({}, state, {
        isLoggedIn: false,
        name: 'wow'
      })

    default:
      return state
  }
}

export default userReducer
