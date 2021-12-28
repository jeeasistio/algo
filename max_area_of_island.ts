const grid = [
  [1, 1, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 0, 1, 1]
]

const maxAreaOfIsland = (grid: number[][]) => {
  const stack = []
  let currIslandArea = 0
  let currLargestArea = 0

  const dfs = (row: number, col: number) => {
    grid[row][col] = 0
    currIslandArea++
    const rowLength = grid.length
    const colLength = grid[0].length
    const neighbors = [
      [row - 1, col],
      [row, col + 1],
      [row + 1, col],
      [row, col - 1]
    ]

    for (let i = 0; i < neighbors.length; i++) {
      const [nghborRow, nghborCol] = neighbors[i]

      if (
        nghborRow >= 0 &&
        nghborCol >= 0 &&
        nghborRow < rowLength &&
        nghborCol < colLength &&
        grid[nghborRow][nghborCol] === 1
      ) {
        stack.push([nghborRow, nghborCol])
      }
    }
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const elem = grid[row][col]

      if (elem === 1) {
        stack.push([row, col])
        while (stack.length) {
          const [prevRow, prevCol] = stack.pop()
          if (grid[prevRow][prevCol] === 1) {
            dfs(prevRow, prevCol)
          }
        }

        currLargestArea = Math.max(currIslandArea, currLargestArea)
        currIslandArea = 0
      }
    }
  }

  return currLargestArea
}

console.log(maxAreaOfIsland(grid))
