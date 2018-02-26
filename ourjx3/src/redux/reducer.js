import {combineReducers} from 'redux'
import {loginReducer} from './loginReducer'
import {regReducer} from './registerReducer'

export default combineReducers({loginReducer,regReducer});
