import { all } from 'redux-saga/effects'
import { watchBriefcase } from './BriefcaseSaga/briefcaseWatcher'
import cryptoSaga from './CryptoSaga'

export default function* rootSaga() {
  yield all([
    cryptoSaga(),
    watchBriefcase()
  ])
}