import { CryptoData } from "../CryptoData"

export type CryptoByIdState = {
  cryptoById: CryptoData | null
  isLoading: boolean
}