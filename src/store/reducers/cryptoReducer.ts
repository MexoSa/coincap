import CryptoActions from "../../types/CryptoActions"
import { cryptoState } from "../../types/CryptoState"
import { ActionConstants } from "../actions/actionConstants"

const initialState: cryptoState = {
  cryptoData: [],
  isLoading: false,
  cryptoById: null,
}

export const cryptoReducer = (state: cryptoState = initialState, action: CryptoActions): cryptoState => {
  switch (action.type) {
    case ActionConstants.TOGGLE_LOADING:
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
    case ActionConstants.SET_CRYPTO_BY_ID:
      return {
        ...state,
        cryptoById: action.payload,
      }
    default:
      return state
  }
}
