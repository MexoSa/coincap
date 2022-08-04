import { CryptoData } from "./CryptoData"


export type cryptoState = {
  cryptoData: CryptoData[]
  isLoading: boolean
  cryptoById: CryptoData | null
}