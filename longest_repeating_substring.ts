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

const longestRepeatingSubstring = (str: string) => {
  const record = countRepetitions(str.split(''))

  return Object.keys(record)[0]
}

console.log(longestRepeatingSubstring('supercalifragilistic'))
