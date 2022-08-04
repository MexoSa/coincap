export const fetchCoinCap = async <T>(url: string): Promise<T> => {
  const response = await fetch(`https://api.coincap.io/v2/assets${url}`)
  const body = await response.json()
  return body
}