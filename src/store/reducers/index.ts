import { combineReducers } from "redux"; 
import { UserReducer }  from './user-reducer';


export const rootReducer = combineReducers({
  user: UserReducer
        
})

export type RootState = ReturnType<typeof rootReducer>
