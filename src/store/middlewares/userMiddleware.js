import userActions from '../actions/userActions'
import services from '../../services'
const { api, storageManager: { local } } = services

export const userLoginMiddleware = (userData) => async dispatch => {
  const { username, password } = userData
  try {
    const data = await api.userLogin({ username, password })

    local.set('token', data.token)
    dispatch(userActions.userLoginSuccess(data))
  } catch (err) {
    console.log(err.message)
    dispatch(userActions.userLoginFail({ message: 'Server Error please try again', err: err.message }))
  }
}
