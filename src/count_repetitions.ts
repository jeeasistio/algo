const countRepetitions = (arr: any[]) => {
  const record = arr.reduce((rec, val) => {
    rec[val]++
    if (!rec[val]) rec[val] = 1
    return rec
  }, {})

  const sortedRecord = Object.fromEntries(
    Object.entries(record).sort(([, a], [, b]) => b - a)
  )

  return sortedRecord
}

console.log(countRepetitions(['cat', 'dog', 'cat', 'cow', 'cow', 'cow']))
