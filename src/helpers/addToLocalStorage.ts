const addToLocalStorage = ({ id, amount, price }: { id: string, amount: string, price: string }) => {
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