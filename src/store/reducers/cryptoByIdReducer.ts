import CryptoActions from "../../types/Crypto/CryptoActions"
import { CryptoByIdState } from "../../types/Crypto/CryptoByIdState"
import { ActionConstants } from "../actions/actionConstants"

const initialState: CryptoByIdState = {
  isLoading: false,
  cryptoById: null,
}

export const cryptoByIdReducer = (state: CryptoByIdState = initialState, action: CryptoActions): CryptoByIdState => {
  switch (action.type) {
    case ActionConstants.TOGGLE_CRYPTO_BY_ID_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
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