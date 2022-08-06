import CryptoActions from "../../types/Crypto/CryptoActions"
import { CryptoHistoryByIdState } from "../../types/Crypto/CryptoHistoryByIdState"
import { ActionConstants } from "../actions/actionConstants"

const initialState: CryptoHistoryByIdState = {
  cryptoHistory: [],
  isLoading: false,
}

export const cryptoHistoryByIdReducer = (state: CryptoHistoryByIdState = initialState, action: CryptoActions): CryptoHistoryByIdState => {
  switch (action.type) {
    case ActionConstants.TOGGLE_CRYPTO_HISTORY_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      }
    case ActionConstants.SET_CRYPTO_HISTORY_BY_ID:
      return {
        ...state,
        cryptoHistory: action.payload,
      }
    default:
      return state
  }
}