import { put, takeEvery } from "redux-saga/effects"
import { GetCryptoFullInfoAction } from "../../types/Crypto/CryptoActions"
import { ActionConstants } from "../actions/actionConstants"
import { getCryptoById, getCryptoHistoryById } from "../actions/cryptoActions"

export function* workerCryptoFullInfo(action: GetCryptoFullInfoAction) {
  yield put(getCryptoById(action.payload))
  yield put(getCryptoHistoryById(action.payload))
}

export function* watchCryptoFullInfo() {
  yield takeEvery(ActionConstants.GET_CRYPTO_FULL_INFO, workerCryptoFullInfo)
}