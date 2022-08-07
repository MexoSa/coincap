import { put, takeEvery } from "redux-saga/effects"
import { fetchCoinCap } from "../../../helpers/fetchCoinCap"
import getListFromLocalStorage from "../../../helpers/getListFromLocalStorage"
import { CurrentCryptoPrice } from "../../../types/Briefcase/CurrentCryptoPrice"
import { CryptoData } from "../../../types/Crypto/CryptoData"
import { LocalStorageCryptoList } from "../../../types/LocalStorageCryptoList"
import { Response } from "../../../types/Response"
import { ActionConstants } from "../../actions/actionConstants"
import { setCurrentBriefcaseSum, setCurrentCryptoPriceList, setInititalBriefcaseSum, toggleCurrentCryptoPriceLoading } from "../../actions/briefcaseActions"

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function* workerBriefcase() {
  yield put(toggleCurrentCryptoPriceLoading())
  const briefcase: LocalStorageCryptoList[] = yield getListFromLocalStorage("briefcase")
  const cryptoIdInBriefcaseList = Array.from(new Set(briefcase.map(cryptoItem => cryptoItem.id)))
  try {
    const currentCryptoPrice: CurrentCryptoPrice[] = yield []
    yield cryptoIdInBriefcaseList.forEach(async (cryptoId: string) => {
      const response: Response<CryptoData> = await fetchCoinCap(`/${cryptoId}`)
      currentCryptoPrice.push({ id: response.data.id, priceUsd: response.data.priceUsd })
    })
    yield put(setCurrentCryptoPriceList(currentCryptoPrice))
    yield delay(1000)
    yield put(setInititalBriefcaseSum(briefcase))
    yield put(setCurrentBriefcaseSum(briefcase))
  }
  catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
  finally {
    yield put(toggleCurrentCryptoPriceLoading())
  }
}

export function* watchBriefcase() {
  yield takeEvery(ActionConstants.GET_CURRENT_CRYPTO_PRICE, workerBriefcase)
}