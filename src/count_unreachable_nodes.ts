export const countUnreachableNodes = (num: number, edges: [number, number][]): number => {
    let newIndex = 0
    const mapping: Record<number, number> = {}
    edges.forEach((edge) => {
        if (mapping[edge[0]] > -1) {
            if (mapping[edge[1]] > -1) return
            mapping[edge[1]] = mapping[edge[0]]
        } else {
            if (mapping[edge[1]] > -1) {
                mapping[edge[0]] = mapping[edge[1]]
                return
            }
            mapping[edge[0]] = newIndex
            mapping[edge[1]] = newIndex
            newIndex += 1
        }
    })
    let sum = 0
    const connections = Object.entries(mapping).reduce((acc, [key, val]) => {
        if (!acc[Number(val)]) {
            acc[Number(val)] = 0
        }
        acc[Number(val)] += 1
        sum += 1
        return acc
    }, [] as number[])
    while (sum !== num) {
        connections.push(1)
        sum += 1
    }
    return (
        connections.reduce((acc, val) => {
            acc += val * (num - val)
            return acc
        }, 0) / 2
    )
}

console.log(
    countUnreachableNodes(7, [
        [0, 2],
        [0, 5],
        [2, 4],
        [1, 6],
        [5, 4],
    ])
)
