import { combineReducers } from 'redux'
import loaddingReducer from './LoaddingReducer';
export * from './LoaddingReducer'

export const rootReducer = combineReducers({
  loadding: loaddingReducer
})