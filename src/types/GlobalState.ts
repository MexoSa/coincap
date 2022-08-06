import { CryptoByIdState } from "./Crypto/CryptoByIdState"
import { CryptoDataState } from "./Crypto/CryptoDataState"
import { CryptoHistoryByIdState } from "./Crypto/CryptoHistoryByIdState"


export type GlobalState = {
  cryptoDataReducer: CryptoDataState
  cryptoHistoryByIdReducer: CryptoHistoryByIdState
  cryptoByIdReducer: CryptoByIdState
}