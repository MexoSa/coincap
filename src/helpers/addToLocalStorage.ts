import { LocalStorageCryptoList } from "../types/LocalStorageCryptoList"

const addToLocalStorage = ({ id, amount, price }: LocalStorageCryptoList) => {
  const localStorageData = localStorage.getItem('briefcase')
  if (localStorageData?.length) {
    const localStorageDataParsed = JSON.parse(localStorageData)
    localStorageDataParsed.push({ id, amount, price })
    localStorage.setItem('briefcase', JSON.stringify(localStorageDataParsed))
  } else {
    localStorage.setItem('briefcase', JSON.stringify([{ id, amount, price }]))
  }
}

export default addToLocalStorage