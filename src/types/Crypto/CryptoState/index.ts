import { CryptoByIdState } from "./CryptoByIdState"
import { CryptoDataState } from "./CryptoDataState"
import { CryptoHistoryByIdState } from "./CryptoHistoryByIdState"

export type CryptoState = {
  byId: CryptoByIdState,
  data: CryptoDataState,
  history: CryptoHistoryByIdState,
}