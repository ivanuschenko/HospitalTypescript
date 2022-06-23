export interface userInitialStateProps {
  isAuth: boolean
  error?: string
  openSnack?: boolean
}
interface IError {
  error: string,
  openSnack: boolean
}

export enum UserActionTypes {
  USER_REGISTER_VALIDATION="USER_REGISTER_VALIDATION",
  USER_REGISTER="USER_REGISTER",
  USER_LOGIN="USER_LOGIN",
  USER_LOGOUT="USER_LOGOUT",
  USER_CHECK_AUTHORIZATION="USER_CHECK_AUTHORIZATION",
  USER_AUTHORIZED_ERROR="USER_AUTHORIZED_ERROR",
  USER_ERROR_OPEN_SNACKBAR="USER_ERROR_OPEN_SNACKBAR"
}

interface UserRegisterAction {
  type: UserActionTypes.USER_REGISTER
  payload: boolean
}

interface UserRegistrateValidationAction {
  type: UserActionTypes.USER_REGISTER_VALIDATION
  payload: IError
}

interface UserCheckAuthrization {
  type: UserActionTypes.USER_CHECK_AUTHORIZATION
  payload: boolean
}

interface UserLoginAction {
  type: UserActionTypes.USER_LOGIN
  payload: boolean
}

interface UserLogoutAction {
  type: UserActionTypes.USER_LOGOUT
  payload: boolean
}

interface UserAuthorizedError {
  type: UserActionTypes.USER_AUTHORIZED_ERROR
  payload: IError
}

interface UserErrorOpenSnack {
  type: UserActionTypes.USER_ERROR_OPEN_SNACKBAR
  payload:IError
}

export type UserAction = 
  UserLoginAction 
    | UserRegisterAction
    | UserRegistrateValidationAction 
    | UserLogoutAction 
    | UserAuthorizedError 
    | UserErrorOpenSnack 
    | UserCheckAuthrization
