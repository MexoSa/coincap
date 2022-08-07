import { ActionConstants } from "../../store/actions/actionConstants"
import { LocalStorageCryptoList } from "../LocalStorageCryptoList"
import { CurrentCryptoPrice } from "./CurrentCryptoPrice"

export type GetCurrentCryptoPriceList = {
  type: ActionConstants.GET_CURRENT_CRYPTO_PRICE
}

export type ToggleCurrentCryptoPrice = {
  type: ActionConstants.TOGGLE_CURRENT_CRYPTO_PRICE_LOADING
}

export type SetCurrentCryptoPriceList = {
  type: ActionConstants.SET_CURRENT_CRYPTO_PRICE
  payload: CurrentCryptoPrice[]
}

export type SetCurrentBriefcaseSum = {
  type: ActionConstants.SET_CURRENT_BRIEFCASE_SUM
  payload: LocalStorageCryptoList[],
}

export type SetInitialBriefcaseSum = {
  type: ActionConstants.SET_INITIAL_BRIEFCASE_SUM
  payload: LocalStorageCryptoList[]
}

type BriefcaseActions = GetCurrentCryptoPriceList
  | ToggleCurrentCryptoPrice
  | SetCurrentCryptoPriceList
  | SetCurrentBriefcaseSum
  | SetInitialBriefcaseSum

export default BriefcaseActions