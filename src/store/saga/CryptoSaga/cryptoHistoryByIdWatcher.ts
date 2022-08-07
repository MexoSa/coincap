import { call, put, takeEvery } from "redux-saga/effects"
import { fetchCoinCap } from "../../../helpers/fetchCoinCap"
import { GetCryptoHistoryByIdAction } from "../../../types/Crypto/CryptoActions"
import { CryptoHistory } from "../../../types/Crypto/CryptoHistory"
import { Response } from "../../../types/Response"
import { ActionConstants } from "../../actions/actionConstants"
import { setCryptoHistoryById, toggleCryptoHistoryLoading } from "../../actions/cryptoActions"

export function* workerCryptoHistoryById(action: GetCryptoHistoryByIdAction) {
  yield put(toggleCryptoHistoryLoading())
  try {
    const response: Response<CryptoHistory[]> = yield call(fetchCoinCap, `/${action.payload}/history?interval=d1`)
    yield put(setCryptoHistoryById(response.data))
  }
  catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
  finally {
    yield put(toggleCryptoHistoryLoading())
  }
}

export function* watchCryptoHistoryById() {
  yield takeEvery(ActionConstants.GET_CRYPTO_HISTORY_BY_ID, workerCryptoHistoryById)
}