const grid = [
  [1, 1, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]

const numberOfIslandsDFS = (grid: number[][]) => {
  const visited = new Map()
  const stack = []
  let islands = 0

  const dfs = (rowIndex: number, colIndex: number) => {
    visited.set(`${rowIndex}, ${colIndex}`, true)
    const rowLength = grid.length
    const colLength = grid[0].length
    const dirs = [
      [rowIndex - 1, colIndex],
      [rowIndex, colIndex + 1],
      [rowIndex + 1, colIndex],
      [rowIndex, colIndex - 1]
    ]

    for (let i = 0; i < dirs.length; i++) {
      const [row, col] = dirs[i]

      if (
        row >= 0 &&
        col >= 0 &&
        row < rowLength &&
        col < colLength &&
        grid[row][col] == 1 &&
        !visited.get(`${row}, ${col}`)
      ) {
        stack.push([row, col])
      }
    }
  }

  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    const row = grid[rowIndex]
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const elem = row[colIndex]

      if (elem == 1 && !visited.get(`${rowIndex}, ${colIndex}`)) {
        stack.push([rowIndex, colIndex])
        while (stack.length > 0) {
          const [prevRow, prevCol] = stack.pop()
          dfs(prevRow, prevCol)
        }
        islands++
      }
    }
  }

  return islands
}

console.log(numberOfIslandsDFS(grid))

const numberOfIslandsBFS = (grid: number[][] | string[][]) => {
  const visited = new Map()
  const queue = []
  let islands = 0

  const bfs = (rowIndex: number, colIndex: number) => {
    visited.set(`${rowIndex}, ${colIndex}`, true)
    const rowLength = grid.length
    const colLength = grid[0].length
    const dirs = [
      [rowIndex - 1, colIndex],
      [rowIndex, colIndex + 1],
      [rowIndex + 1, colIndex],
      [rowIndex, colIndex - 1]
    ]

    for (let i = 0; i < dirs.length; i++) {
      const [row, col] = dirs[i]

      if (
        row >= 0 &&
        col >= 0 &&
        row < rowLength &&
        col < colLength &&
        grid[row][col] == 1 &&
        !visited.get(`${row}, ${col}`)
      ) {
        queue.push([row, col])
      }
    }
  }

  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    const row = grid[rowIndex]
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const elem = row[colIndex]

      if (elem == 1 && !visited.get(`${rowIndex}, ${colIndex}`)) {
        queue.push([rowIndex, colIndex])
        while (queue.length > 0) {
          const [prevRow, prevCol] = queue.shift()
          bfs(prevRow, prevCol)
        }
        islands++
      }
    }
  }

  return islands
}

console.log(numberOfIslandsBFS(grid))
