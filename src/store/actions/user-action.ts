import { AxiosError } from "axios";
import { Dispatch } from "redux";
import { checkValidationLogin, checkValidationPassword } from "src/helper/helperValidate";
import AuthService from "src/services/AuthServices";
import { UserActionTypes, UserAction } from 'src/store/types'

const sendErrorToSnack = (dispatch: Dispatch<UserAction>, error: string | AxiosError): void => {
  if (typeof error === 'string') {
    dispatch({
      type: UserActionTypes.USER_AUTHORIZED_ERROR,
      payload: {error: error, openSnack:true}
    })
  } else {
    dispatch({
      type: UserActionTypes.USER_AUTHORIZED_ERROR,
      payload: {error: error?.response?.data?.message, openSnack:true}
    })
  } 
  const errorShow = setTimeout(()=> {
    dispatch({
      type: UserActionTypes.USER_ERROR_OPEN_SNACKBAR,
      payload: {error: '', openSnack:false}
    })
  }, 1000)
  clearTimeout(errorShow);
}

export const register = (name: string, password: string, confirmPassword: string) => { 
  return async (dispatch: Dispatch<UserAction>) => {
    if(!checkValidationLogin(name)) {
      sendErrorToSnack(dispatch, 'login should consist min 6 letters')
      return;
    }
    if(!checkValidationPassword(password)){
      sendErrorToSnack(dispatch, 'password should consist min 6 numbers and 1 letter')
      return;
    }
    if (password !== confirmPassword) {
        sendErrorToSnack(dispatch, 'Password and confirm pasword are different!');      
        return;      
      }      
    try { 
      const response = await AuthService.registration(name, password);
      localStorage.setItem('token', response.data.accessToken);
      dispatch({
        type: UserActionTypes.USER_REGISTER,
        payload: true
      })  
    } 
    catch (error) { 
      sendErrorToSnack(dispatch, error as AxiosError)     
    }    
  }
}

export const login = (name: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {      
      const response = await AuthService.signIn(name, password);
      localStorage.setItem('token', response.data.accessToken); 
      dispatch({
        type: UserActionTypes.USER_LOGIN, 
        payload: true
      })
    }
    catch (error) {
      sendErrorToSnack(dispatch, error as AxiosError)     
    }
  }
}

export const checkauth = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await AuthService.checkAuth();
      localStorage.setItem('token', response.data.accessToken);
      dispatch({
        type: UserActionTypes.USER_CHECK_AUTHORIZATION,
        payload: true
      })
    }
    catch(error) {   
      sendErrorToSnack(dispatch, error as AxiosError)  
    }
  }
}

export const logout = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {      
      await AuthService.signOut();
      localStorage.removeItem('token')
      dispatch({
        type: UserActionTypes.USER_LOGIN, 
        payload: false
      })
    }
    catch (error) {
      sendErrorToSnack(dispatch, error as AxiosError)  
    }
  }
}