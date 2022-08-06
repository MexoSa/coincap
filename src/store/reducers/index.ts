import { combineReducers } from "redux"
import { cryptoDataReducer } from "./cryptoDataReducer"
import { cryptoHistoryByIdReducer } from "./cryptoHistoryByIdReducer"
import { cryptoByIdReducer } from "./cryptoByIdReducer"

const reducers = combineReducers({
  cryptoDataReducer,
  cryptoHistoryByIdReducer,
  cryptoByIdReducer
})

export default reducers