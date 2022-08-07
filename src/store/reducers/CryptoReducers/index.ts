import { cryptoByIdReducer } from "./cryptoByIdReducer"
import { cryptoDataReducer } from "./cryptoDataReducer"
import { cryptoHistoryByIdReducer } from "./cryptoHistoryByIdReducer"
import { combineReducers } from "redux"

const cryptoReducer = combineReducers({
  data: cryptoDataReducer,
  history: cryptoHistoryByIdReducer,
  byId: cryptoByIdReducer
})

export default cryptoReducer