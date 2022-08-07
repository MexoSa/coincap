import BriefcaseActions from "../../types/Briefcase/BriefcaseActions"
import { CurrentCryptoPrice } from "../../types/Briefcase/CurrentCryptoPrice"
import { LocalStorageCryptoList } from "../../types/LocalStorageCryptoList"
import { ActionConstants } from "./actionConstants"

const toggleCurrentCryptoPriceLoading = (): BriefcaseActions => {
  return {
    type: ActionConstants.TOGGLE_CURRENT_CRYPTO_PRICE_LOADING
  }
}

const getCurrentCryptoPriceList = (): BriefcaseActions => {
  return {
    type: ActionConstants.GET_CURRENT_CRYPTO_PRICE,
  }
}

const setCurrentCryptoPriceList = (currentCryptoPrice: CurrentCryptoPrice[]): BriefcaseActions => {
  return {
    type: ActionConstants.SET_CURRENT_CRYPTO_PRICE,
    payload: currentCryptoPrice
  }
}

const setCurrentBriefcaseSum = (briefcase: LocalStorageCryptoList[]): BriefcaseActions => {
  return {
    type: ActionConstants.SET_CURRENT_BRIEFCASE_SUM,
    payload: briefcase
  }
}

const setInititalBriefcaseSum = (briefcaseList: LocalStorageCryptoList[]): BriefcaseActions => {
  return {
    type: ActionConstants.SET_INITIAL_BRIEFCASE_SUM,
    payload: briefcaseList
  }
}

export {
  toggleCurrentCryptoPriceLoading,
  getCurrentCryptoPriceList,
  setCurrentCryptoPriceList,
  setCurrentBriefcaseSum,
  setInititalBriefcaseSum
}