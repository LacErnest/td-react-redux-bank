import {accountReducer} from './accountReducer'
import { transacReducer } from './transacReducer'
import { userReducer } from './userReducer'
import {  combineReducers } from 'redux'

const rootReducer = combineReducers({
  users: userReducer,
  accounts: accountReducer,
  transactions: transacReducer
})

export default rootReducer