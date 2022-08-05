import { call, put, takeEvery } from "redux-saga/effects"
import { fetchCoinCap } from "../../helpers/fetchCoinCap"
import { GetCryptoHistoryByIdAction } from "../../types/CryptoActions"
import { CryptoHistory } from "../../types/CryptoHistory"
import { Response } from "../../types/Response"
import { ActionConstants } from "../actions/actionConstants"
import { setCryptoHistoryById, toggleLoading } from "../actions/cryptoActions"

export function* workerCryptoHistoryById(action: GetCryptoHistoryByIdAction) {
  yield put(toggleLoading())
  try {
    const response: Response<CryptoHistory[]> = yield call(fetchCoinCap, `/${action.payload}/history?interval=d1`)
    yield put(setCryptoHistoryById(response.data))
  }
  catch (error: any) {
    console.log(error.message)
  }
  finally {
    yield put(toggleLoading())
  }
}

export function* watchCryptoHistoryById() {
  yield takeEvery(ActionConstants.GET_CRYPTO_HISTORY_BY_ID, workerCryptoHistoryById)
}