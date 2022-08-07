import { CurrentCryptoPrice } from "./CurrentCryptoPrice"

export type BriefcaseState = {
  currentCryptoPrice: CurrentCryptoPrice[]
  isLoading: boolean
  initialSum: number
  currentSum: number
}