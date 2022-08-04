import { ActionConstants } from "../store/actions/actionConstants"
import { CryptoData } from "./CryptoData"


export type GetCryptoListAction = {
  type: ActionConstants.GET_CRYPTO_LIST
}

export type ToggleLoadingAction = {
  type: ActionConstants.TOGGLE_LOADING
}

export type SetCryptoListAction = {
  type: ActionConstants.SET_CRYPTO_LIST
  payload: CryptoData[]
}

export type SetCryptoByIdAction = {
  type: ActionConstants.SET_CRYPTO_BY_ID
  payload: CryptoData
}

export type GetCryptoByIdAction = {
  type: ActionConstants.GET_CRYPTO_BY_ID
  payload: string
}

type CryptoActions = GetCryptoByIdAction
  | ToggleLoadingAction
  | SetCryptoListAction
  | SetCryptoByIdAction
  | GetCryptoListAction

export default CryptoActions