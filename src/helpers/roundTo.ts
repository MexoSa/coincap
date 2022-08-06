export const roundTo = (value: string) => {
  return Math.trunc(Number(value) * 100) / 100
}