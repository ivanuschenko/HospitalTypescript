import { UserAction, UserActionTypes, userInitialStateProps } from 'src/store/types';

const initialState: userInitialStateProps = {
  isAuth: false,
  error: '',
  openSnack: false   
}

export const UserReducer = (state = initialState, action: UserAction) : userInitialStateProps => {
  switch (action.type) {   
    case UserActionTypes.USER_REGISTER:
      return {...state, isAuth: action.payload}
    case UserActionTypes.USER_LOGIN:
      return {...state, isAuth: action.payload}
    case UserActionTypes.USER_LOGOUT:
      return {...state, isAuth: action.payload}
    case UserActionTypes.USER_CHECK_AUTHORIZATION:
      return {...state, isAuth: action.payload}
    case UserActionTypes.USER_AUTHORIZED_ERROR:
      return {...state, error: action.payload.error, openSnack: action.payload.openSnack }    
    case UserActionTypes.USER_ERROR_OPEN_SNACKBAR:
      return {...state, error: action.payload.error, openSnack: action.payload.openSnack}
  default: 
    return state;
  }       
}