const getLastCountItem = <T>(arr: T[], lastCount: number) => {
  return arr.slice(-lastCount)
}

export default getLastCountItem