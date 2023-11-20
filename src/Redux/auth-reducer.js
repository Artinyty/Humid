import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/api.js'
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data
      }

    default:
      return state;
  }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } });
export const getAuthUserData = () => (dispatch) => {
  authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
}


export const login = (email, password, rememberMe) => (dispatch) => {
  // console.log("Login action dispatched");
  let action = stopSubmit('login', { email: "Email is wrong" });
  dispatch(action);
  // authAPI.login(email, password, rememberMe)
  //   .then(response => {
  //     if (response.data.resultCode === 0) {
  //       dispatch(getAuthUserData());
  //     } else {
  //       let action = stopSubmit('login', { email: "Email is wrong" });
  //       dispatch(action);
  //     }
  //   });
}

export const logout = () => (dispatch) => {
  authAPI.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
}

export default authReducer;