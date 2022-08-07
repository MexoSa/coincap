import { LocalStorageCryptoList } from "../types/LocalStorageCryptoList"

const getListFromLocalStorage = (key: string): LocalStorageCryptoList[] => {
  const list = localStorage.getItem(key)
  return list ? JSON.parse(list) : []
}

export default getListFromLocalStorage
