const { ACTION_TYPES } = require('./types');

const userLoginSuccess = (payload) => ({
	type: ACTION_TYPES.USER_LOGIN_SUCCESS,
	payload,
});

const userLoginFail = (payload) => ({
	type: ACTION_TYPES.USER_LOGIN_FAIL,
	payload,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	userLoginSuccess,
	userLoginFail,
};
