import { combineReducers } from "redux"
import cryptoReducer from './CryptoReducers/index'
import { briefcaseReducer } from './BriefcaseReducers/briefcaseReducer'

const reducers = combineReducers({
  cryptoReducer,
  briefcaseReducer
})

export default reducers