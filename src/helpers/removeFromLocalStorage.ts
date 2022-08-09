import { LocalStorageCryptoList } from "../types/LocalStorageCryptoList"

const removeFromLocalStorage = (id: string) => {
  const list = localStorage.getItem("briefcase")
  const newList = list ? JSON.parse(list).filter((item: LocalStorageCryptoList) => item.id !== id) : []
  localStorage.setItem("briefcase", JSON.stringify(newList))
}

export default removeFromLocalStorage