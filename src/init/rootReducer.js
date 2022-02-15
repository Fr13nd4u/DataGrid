import {combineReducers} from 'redux'
import {userReducer as user} from '../redux/reducer'

export const rootReducer = combineReducers({
  user,
})