import { call, put, takeEvery } from "redux-saga/effects"
import { fetchCoinCap } from "../../helpers/fetchCoinCap"
import { CryptoData } from "../../types/Crypto/CryptoData"
import { Response } from "../../types/Response"
import { ActionConstants } from "../actions/actionConstants"
import { setCryptoList, toggleCryptoDataLoading } from "../actions/cryptoActions"

export function* workerGetCryptoList() {
  yield put(toggleCryptoDataLoading())
  try {
    const response: Response<CryptoData[]> = yield call(fetchCoinCap, `?limit=30`)
    yield put(setCryptoList(response.data))
  }
  catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
  finally {
    yield put(toggleCryptoDataLoading())
  }
}

export function* watchCryptoList() {
  yield takeEvery(ActionConstants.GET_CRYPTO_LIST, workerGetCryptoList)
}