export const countUnreachableNodes = (num: number, edges: [number, number][]): number => {
    const neighbors = createNeighbors(edges)
    const connections = createConnectedNodes(neighbors)
    const filledConnections = fillConnections(connections, num)
    return filledConnections.reduce((acc, val) => {
        acc += (val * (num - val)) / 2
        return acc
    }, 0)
}

const createNeighbors = (edges: [number, number][]) => {
    return edges.reduce((acc, edge) => {
        if (!acc[edge[0]]) acc[edge[0]] = []
        acc[edge[0]].push(edge[1])
        if (!acc[edge[1]]) acc[edge[1]] = []
        acc[edge[1]].push(edge[0])
        return acc
    }, {} as Record<string, number[]>)
}

const createConnectedNodes = (neighbors: ReturnType<typeof createNeighbors>) => {
    const visited: Record<string, boolean> = {}
    const connections: number[] = []
    const stack: number[] = []
    let count = 0
    Object.entries(neighbors).forEach(([val, nghbrs]) => {
        if (!visited[val]) {
            visited[val] = true
            stack.push(...nghbrs)
            count += 1
        }
        while (stack.length > 0) {
            const next = (stack.pop() as number)?.toString()
            if (!visited[next]) {
                visited[next] = true
                stack.push(...neighbors[next])
                count += 1
            }
        }
        if (count > 0) connections.push(count)
        count = 0
    })
    return connections
}

const fillConnections = (connections: ReturnType<typeof createConnectedNodes>, num: number) => {
    const connectionsCopy = [...connections]
    let sum = connections.reduce((acc, val) => (acc += val), 0)
    while (sum !== num) {
        connectionsCopy.push(1)
        sum += 1
    }
    return connectionsCopy
}

console.log(
    countUnreachableNodes(7, [
        [0, 2],
        [0, 5],
        [2, 4],
        [1, 6],
        [5, 4],
    ] as [number, number][])
)
