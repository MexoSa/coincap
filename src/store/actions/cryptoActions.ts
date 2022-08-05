import CryptoActions from "../../types/CryptoActions"
import { CryptoData } from "../../types/CryptoData"
import { CryptoHistory } from "../../types/CryptoHistory"

import { ActionConstants } from "./actionConstants"

const toggleLoading = (): CryptoActions => {
  return {
    type: ActionConstants.TOGGLE_LOADING
  }
}

const getCryptoList = (): CryptoActions => {
  return {
    type: ActionConstants.GET_CRYPTO_LIST,
  }
}

const setCryptoList = (cryptoData: CryptoData[]): CryptoActions => {
  return {
    type: ActionConstants.SET_CRYPTO_LIST,
    payload: cryptoData
  }
}

const setCryptoById = (cryptoData: CryptoData): CryptoActions => {
  return {
    type: ActionConstants.SET_CRYPTO_BY_ID,
    payload: cryptoData
  }
}

const getCryptoById = (id: string): CryptoActions => {
  return {
    type: ActionConstants.GET_CRYPTO_BY_ID,
    payload: id
  }
}

const getCryptoPagination = (): CryptoActions => {
  return {
    type: ActionConstants.GET_CRYPTO_PAGINATION,
  }
}

const setCryptoListPagination = (cryptoData: CryptoData[]): CryptoActions => {
  return {
    type: ActionConstants.SET_CRYPTO_LIST_PAGINATION,
    payload: cryptoData
  }
}

const getCryptoHistoryById = (id: string): CryptoActions => {
  return {
    type: ActionConstants.GET_CRYPTO_HISTORY_BY_ID,
    payload: id
  }
}

const setCryptoHistoryById = (cryptoHistory: CryptoHistory[]): CryptoActions => {
  return {
    type: ActionConstants.SET_CRYPTO_HISTORY_BY_ID,
    payload: cryptoHistory
  }
}

export {
  getCryptoList,
  toggleLoading,
  setCryptoList,
  setCryptoById,
  getCryptoById,
  getCryptoPagination,
  setCryptoListPagination,
  getCryptoHistoryById,
  setCryptoHistoryById,
}