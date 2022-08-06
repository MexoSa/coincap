import { call, put, takeEvery } from "redux-saga/effects"
import { fetchCoinCap } from "../../helpers/fetchCoinCap"
import { GetCryptoByIdAction } from "../../types/CryptoActions"
import { CryptoData } from "../../types/CryptoData"
import { Response } from "../../types/Response"
import { ActionConstants } from "../actions/actionConstants"
import { setCryptoById, toggleLoading } from "../actions/cryptoActions"

export function* workerGetCryptoById(action: GetCryptoByIdAction) {
  yield put(toggleLoading())
  try {
    const response: Response<CryptoData> = yield call(fetchCoinCap, `/${action.payload}`)
    yield put(setCryptoById(response.data))
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

export function* watchCryptoById() {
  yield takeEvery(ActionConstants.GET_CRYPTO_BY_ID, workerGetCryptoById)
}