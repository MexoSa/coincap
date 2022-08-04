import CryptoActions from "../../types/CryptoActions"
import { CryptoData } from "../../types/CryptoData"

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

export {
  getCryptoList,
  toggleLoading,
  setCryptoList,
  setCryptoById,
  getCryptoById
}