import { all } from 'redux-saga/effects'
import { watchCryptoById } from './cryptoByIdWatcher'
import { watchCryptoList } from './cryptoListWatcher'

export default function* rootSaga() {
  yield all([
    watchCryptoList(),
    watchCryptoById()
  ])
}