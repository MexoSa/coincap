import { call, put, select, takeEvery } from "redux-saga/effects"
import { fetchCoinCap } from "../../helpers/fetchCoinCap"
import { CryptoData } from "../../types/Crypto/CryptoData"
import { GlobalState } from "../../types/GlobalState"
import { Response } from "../../types/Response"
import { ActionConstants } from "../actions/actionConstants"
import { setCryptoListPagination, toggleCryptoDataLoading } from "../actions/cryptoActions"

export function* workerCryptoPagination() {
  const cryptoData: CryptoData[] = yield select((state: GlobalState) => state.cryptoDataReducer.cryptoData)
  const isLoading: boolean = yield select((state: GlobalState) => state.cryptoDataReducer.isLoading)
  if (isLoading || cryptoData.length >= 2000) {
    return
  }
  yield put(toggleCryptoDataLoading())
  try {
    const response: Response<CryptoData[]> = yield call(fetchCoinCap, `?offset=${cryptoData.length}&limit=${2000 - cryptoData.length >= 30 ? 30 : 2000 - cryptoData.length}`)
    yield put(setCryptoListPagination(response.data))
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

export function* watchCryptoPagination() {
  yield takeEvery(ActionConstants.GET_CRYPTO_PAGINATION, workerCryptoPagination)
}