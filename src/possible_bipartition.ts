export const possibleBipartition = (
    num: number,
    dislikes: [number, number][]
): boolean => {
    const group1: Record<string, boolean> = {}
    const group2: Record<string, boolean> = {}
    const findGroup = (num: number) => {
        if (group1[num] && group2[num]) return -1
        if (group1[num]) return 1
        if (group2[num]) return 2
        return 0
    }

    for (let i = 0; i < dislikes.length; i++) {
        const [pair1, pair2] = dislikes[i]
        if (findGroup(pair1) === 0 && findGroup(pair2) === 0) {
            group1[pair1] = true
            group2[pair2] = true
        } else if (findGroup(pair1) === 1) {
            if (findGroup(pair2) === 2) return false
            group2[pair2] = true
        } else if (findGroup(pair2) === 1) {
            if (findGroup(pair1) === 1) return false
            group1[pair1] = true
        } else if (findGroup(pair1) === 2) {
            if (findGroup(pair2) === 1) return false
            group1[pair2] = true
        } else if (findGroup(pair2) === 2) {
            if (findGroup(pair1) === 1) return false
            group1[pair1] = true
        }
        if (findGroup(pair1) === -1 || findGroup(pair2) === -1) return false
    }

    return true
}

console.log(
    possibleBipartition(4,
        [
            [1, 2],
            [1, 3],
            [2, 4],
        ])
)