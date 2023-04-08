type Coords = [number, number]
type Grid = number[][]

export const numClosedIslands = (grid: number[][]): number => {
    const visited = new Set<string>()
    let count = 0

    grid.forEach((_, y) => {
        _.forEach((_, x) => {
            if (!visited.has(`${y} ${x}`) && grid[y][x] === 0) {
                dfs([y, x], visited, grid)
                count += 1
            }
        })
    })

    return count
}

const dfs = (coords: Coords, visited: Set<string>, grid: Grid) => {
    const [y, x] = coords
    visited.add(`${y} ${x}`)
    const directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ]

    directions.forEach((dir) => {
        if (
            !visited.has(`${y + dir[0]} ${x + dir[1]}`) &&
            grid?.[y + dir[0]]?.[x + dir[1]] === 0 &&
            y + dir[0] < grid.length &&
            x + dir[1] < grid[0].length &&
            y + dir[0] >= 0 &&
            x + dir[1] >= 0
        ) {
            dfs([y + dir[0], x + dir[1]], visited, grid)
        }
    })
}

console.log(
    numClosedIslands([
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 1, 1, 0],
        [1, 0, 1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 0],
    ])
)
