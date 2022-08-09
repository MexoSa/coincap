import { LocalStorageCryptoList } from "../types/LocalStorageCryptoList"

const reduceBriefcaseById = (arr: LocalStorageCryptoList[]) => {
  return arr.reduce((acc: LocalStorageCryptoList[], item) => {
    const index = acc.findIndex(i => i.id === item.id)
    if (index !== -1) {
      acc[index].amount = `${+acc[index].amount + +item.amount}`
      return acc
    } else {
      return [...acc, item]
    }
  }, [])
}

export default reduceBriefcaseById