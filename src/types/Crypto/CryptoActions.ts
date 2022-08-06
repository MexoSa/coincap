import { ActionConstants } from "../../store/actions/actionConstants"
import { CryptoData } from "./CryptoData"
import { CryptoHistory } from "./CryptoHistory"


export type GetCryptoListAction = {
  type: ActionConstants.GET_CRYPTO_LIST
}

export type ToggleLoadingDataAction = {
  type: ActionConstants.TOGGLE_CRYPTO_DATA_LOADING
}

export type ToggleLoadingHistoryAction = {
  type: ActionConstants.TOGGLE_CRYPTO_HISTORY_LOADING
}

export type ToggleLoadingByIdAction = {
  type: ActionConstants.TOGGLE_CRYPTO_BY_ID_LOADING
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

export type GetCryptoPaginationAction = {
  type: ActionConstants.GET_CRYPTO_PAGINATION
}

export type SetCryptoListActionPagination = {
  type: ActionConstants.SET_CRYPTO_LIST_PAGINATION
  payload: CryptoData[]
}

export type GetCryptoHistoryByIdAction = {
  type: ActionConstants.GET_CRYPTO_HISTORY_BY_ID
  payload: string
}

export type SetCryptoHistoryByIdAction = {
  type: ActionConstants.SET_CRYPTO_HISTORY_BY_ID
  payload: CryptoHistory[]
}

export type GetCryptoFullInfoAction = {
  type: ActionConstants.GET_CRYPTO_FULL_INFO
  payload: string
}

type CryptoActions = GetCryptoByIdAction
  | ToggleLoadingDataAction
  | ToggleLoadingHistoryAction
  | ToggleLoadingByIdAction
  | SetCryptoListAction
  | SetCryptoByIdAction
  | GetCryptoListAction
  | GetCryptoPaginationAction
  | SetCryptoListActionPagination
  | GetCryptoHistoryByIdAction
  | SetCryptoHistoryByIdAction
  | GetCryptoFullInfoAction

export default CryptoActions