type countLimitProps = {
  total: number
  limit?: number,
  shownItems: number
}

const countLimit = ({ total, limit = 30, shownItems }: countLimitProps): string => {
  return `${total - shownItems >= limit ? limit : total - shownItems}`
}

export default countLimit