import { SIGN_IN, SIGN_UP } from '../../apollo/queries/UserQueries'

import client from '../../apollo/Client'
import errorHandler from '../../utils/ErrorHandler'

//Actions
enum Actions {
  SET_LOGIN_USER = 'SET_LOGIN_USER'
}

const setLoginUser = (loginUser: any) => {
  return {
    type: Actions.SET_LOGIN_USER,
    loginUser
  }
}

//API Actions
const signUpRequest = (accountId: string, password: string, cb: any) => {
  return (dispatch: any) => {
    client.mutate({
      mutation: SIGN_UP,
      variables: {
        accountId: accountId,
        password: password,
      }
    })
      .then((result: any) => {
        const {data: {signUp: {token, user}}} = result;
        dispatch(setLoginUser(user))
        localStorage.setItem(token, token);
        cb(true, null)
      })
      .catch((err: any) => {      
        cb(false, errorHandler(err))
      })
  }
}

const signInRequest = (accountId: string, password: string, cb: any) => {
  return (dispatch: any) => {
    client.mutate({
      mutation: SIGN_IN,
      variables: {
        accountId: accountId,
        password: password
      }
    })
      .then((result: any) => {
        const {data: {signIn: {token, user}}} = result;
        dispatch(setLoginUser(user))
        localStorage.setItem(token, token);
        cb(true, null)
      })
      .catch((err: any) => {
        cb(false, errorHandler(err))
      })
  }
}



//init state
const initState = {
  loginUser: {
    accountId: '',
    createdAt: '',
    updatedAt: ''
  }
}

// reducer
const reducer = (state = initState, action) => {
  switch (action.type) {
      case Actions.SET_LOGIN_USER:
        return applySetLoginUser(state, action);   
      default : return state;
  }
}

// reducer func


const applySetLoginUser = (state, action) => {
  const { loginUser } = action;
  return {
    ...state, 
    loginUser: loginUser
  }
}

const actionCreators = {
  signUpRequest,
  signInRequest
} 

const actions = {
  setLoginUser
}

export {actionCreators, actions, Actions};
export default reducer;
