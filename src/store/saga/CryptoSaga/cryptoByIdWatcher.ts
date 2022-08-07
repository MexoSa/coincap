import { call, put, takeEvery } from "redux-saga/effects"
import { fetchCoinCap } from "../../../helpers/fetchCoinCap"
import { GetCryptoByIdAction } from "../../../types/Crypto/CryptoActions"
import { CryptoData } from "../../../types/Crypto/CryptoData"
import { Response } from "../../../types/Response"
import { ActionConstants } from "../../actions/actionConstants"
import { setCryptoById, toggleCryptoByIdLoading } from "../../actions/cryptoActions"

export function* workerGetCryptoById(action: GetCryptoByIdAction) {
  yield put(toggleCryptoByIdLoading())
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
    yield put(toggleCryptoByIdLoading())
  }
}

export function* watchCryptoById() {
  yield takeEvery(ActionConstants.GET_CRYPTO_BY_ID, workerGetCryptoById)
}