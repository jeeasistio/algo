const matrix = [
  [
    4, 3, 2, 1, -1, -2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1
  ],
  [
    3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1
  ],
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -2, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1
  ],
  [
    -1, -1, -2, -3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1
  ]
]

const countNegativeNumbers = (grid: number[][]) => {
  let sum = 0

  for (let i = 0; i < grid.length; i++) {
    const arr = grid[i]
    const arrLength = arr.length

    let left = 0
    let right = arrLength - 1
    let firstNegativeIndex: number
    
    while (left <= right) {
      const middle = Math.round((left + right) / 2)
      
      if (arr[middle] < 0) {
        firstNegativeIndex = middle
        right = middle - 1
      } else { 
        left = middle + 1
      }
    }

    sum += arrLength - firstNegativeIndex
  }

  return sum
}

console.time('fast')
countNegativeNumbers(matrix)
console.timeEnd('fast')

console.time('slow')
matrix.flatMap((x) => x).filter((x) => x < 0).length
console.timeEnd('slow')
