import BriefcaseActions from "../../../types/Briefcase/BriefcaseActions"
import { BriefcaseState } from "../../../types/Briefcase/BriefcaseState"
import { ActionConstants } from "../../actions/actionConstants"

const initialState: BriefcaseState = {
  currentCryptoPrice: [],
  isLoading: false,
  currentSum: 0,
  initialSum: 0,
}

export const briefcaseReducer = (state: BriefcaseState = initialState, action: BriefcaseActions): BriefcaseState => {
  switch (action.type) {
    case ActionConstants.TOGGLE_CURRENT_CRYPTO_PRICE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      }
    case ActionConstants.SET_CURRENT_CRYPTO_PRICE:
      return {
        ...state,
        currentCryptoPrice: action.payload
      }
    case ActionConstants.SET_CURRENT_BRIEFCASE_SUM:
      return {
        ...state,
        currentSum: + action.payload.reduce((acc, { id, amount }) => {
          return acc + (+amount * Number(state.currentCryptoPrice.find(item => item.id === id)?.priceUsd))
        }, 0)
      }
    case ActionConstants.SET_INITIAL_BRIEFCASE_SUM:
      return {
        ...state,
        initialSum: +action.payload.reduce((acc, curr) => acc + (+curr.amount * +curr.price), 0)
      }
    default:
      return state
  }
}