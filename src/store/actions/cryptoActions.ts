import CryptoActions from "../../types/Crypto/CryptoActions"
import { CryptoData } from "../../types/Crypto/CryptoData"
import { CryptoHistory } from "../../types/Crypto/CryptoHistory"
import { ActionConstants } from "./actionConstants"

const toggleCryptoDataLoading = (): CryptoActions => {
  return {
    type: ActionConstants.TOGGLE_CRYPTO_DATA_LOADING
  }
}
const toggleCryptoByIdLoading = (): CryptoActions => {
  return {
    type: ActionConstants.TOGGLE_CRYPTO_BY_ID_LOADING
  }
}
const toggleCryptoHistoryLoading = (): CryptoActions => {
  return {
    type: ActionConstants.TOGGLE_CRYPTO_HISTORY_LOADING
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

const getCryptoFullInfo = (id: string): CryptoActions => {
  return {
    type: ActionConstants.GET_CRYPTO_FULL_INFO,
    payload: id
  }
}

export {
  getCryptoList,
  toggleCryptoDataLoading,
  toggleCryptoByIdLoading,
  toggleCryptoHistoryLoading,
  setCryptoList,
  setCryptoById,
  getCryptoById,
  getCryptoPagination,
  setCryptoListPagination,
  getCryptoHistoryById,
  setCryptoHistoryById,
  getCryptoFullInfo
}