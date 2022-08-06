import { call, put, select, takeEvery } from "redux-saga/effects"
import { fetchCoinCap } from "../../helpers/fetchCoinCap"
import { CryptoData } from "../../types/CryptoData"
import { globalState } from "../../types/GlobalState"
import { Response } from "../../types/Response"
import { ActionConstants } from "../actions/actionConstants"
import { setCryptoListPagination, toggleLoading } from "../actions/cryptoActions"

export function* workerCryptoPagination() {
  const cryptoData: CryptoData[] = yield select((state: globalState) => state.cryptoReducer.cryptoData)
  const isLoading: boolean = yield select((state: globalState) => state.cryptoReducer.isLoading)
  if (isLoading || cryptoData.length >= 2000) {
    return
  }
  yield put(toggleLoading())
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
    yield put(toggleLoading())
  }
}

export function* watchCryptoPagination() {
  yield takeEvery(ActionConstants.GET_CRYPTO_PAGINATION, workerCryptoPagination)
}