import {combineReducers} from 'redux'
import {loginReducer} from './loginReducer'
import {regReducer} from './registerReducer'
import {infoReducer,showReducer} from './infoReducer'


export default combineReducers({loginReducer,regReducer,infoReducer,showReducer});
