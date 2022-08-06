import CryptoActions from "../../types/Crypto/CryptoActions"
import { CryptoDataState } from "../../types/Crypto/CryptoDataState"
import { ActionConstants } from "../actions/actionConstants"

const initialState: CryptoDataState = {
  cryptoData: [],
  isLoading: false,
}

export const cryptoDataReducer = (state: CryptoDataState = initialState, action: CryptoActions): CryptoDataState => {
  switch (action.type) {
    case ActionConstants.TOGGLE_CRYPTO_DATA_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      }
    case ActionConstants.SET_CRYPTO_LIST:
      return {
        ...state,
        cryptoData: action.payload,
      }
    case ActionConstants.SET_CRYPTO_LIST_PAGINATION:
      return {
        ...state,
        cryptoData: [...state.cryptoData, ...action.payload],
      }
    default:
      return state
  }
}
