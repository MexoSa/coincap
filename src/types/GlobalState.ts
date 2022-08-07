import { BriefcaseState } from "./Briefcase/BriefcaseState"
import { CryptoState } from "./Crypto/CryptoState"

export type GlobalState = {
  cryptoReducer: CryptoState
  briefcaseReducer: BriefcaseState
}