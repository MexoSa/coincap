import { call, put, takeEvery } from "redux-saga/effects"
import { fetchCoinCap } from "../../helpers/fetchCoinCap"
import { CryptoData } from "../../types/CryptoData"
import { Response } from "../../types/Response"
import { ActionConstants } from "../actions/actionConstants"
import { setCryptoList, toggleLoading } from "../actions/cryptoActions"

export function* workerGetCryptoList() {
  yield put(toggleLoading())
  try {
    const response: Response<CryptoData[]> = yield call(fetchCoinCap, `?limit=30`)
    yield put(setCryptoList(response.data))
  }
  catch (error: any) {
    console.log(error.message)
  }
  finally {
    yield put(toggleLoading())
  }
}

export function* watchCryptoList() {
  yield takeEvery(ActionConstants.GET_CRYPTO_LIST, workerGetCryptoList)
}