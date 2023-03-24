export const reorderRoutesToZero = (num: number, connections: [number, number][]): number => {
    let count = 0
    const connected: Record<number, boolean> = {}
    connections.forEach((path) => {
        if (path[0] === 0 || connected[path[0]]) {
            count += 1
            connected[path[1]] = true
        } else {
            connected[path[0]] = true
        }
    })
    return count
}

console.log(
    reorderRoutesToZero(6, [
        [0, 1],
        [1, 3],
        [2, 3],
        [4, 0],
        [4, 5],
    ])
)
