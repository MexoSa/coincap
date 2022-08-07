import { CryptoHistory } from "../CryptoHistory"

export type CryptoHistoryByIdState = {
  cryptoHistory: CryptoHistory[]
  isLoading: boolean
}