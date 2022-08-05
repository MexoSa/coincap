import { CryptoData } from "./CryptoData"
import { CryptoHistory } from "./CryptoHistory"


export type cryptoState = {
  cryptoData: CryptoData[]
  isLoading: boolean
  cryptoById: CryptoData | null
  cryptoHistory: CryptoHistory[]
}