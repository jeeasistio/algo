export const n = 5
export const edges: [number, number][] = [[0, 1], [1, 2], [3, 4], [4,5]]

type NewGraph = Map<number, number[]>
type VisitedMap = Map<number, boolean>

const createNeighbors = (n: number, edges: [number, number][]): NewGraph => {
  const newGraph: NewGraph = new Map()

  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i]
    const firstElem = edge[0]
    const secondElem = edge[1]
    
    !newGraph.has(firstElem) ? newGraph.set(firstElem, [secondElem]) : newGraph.get(firstElem).push(secondElem)
    !newGraph.has(secondElem) ? newGraph.set(secondElem, [firstElem]) : newGraph.get(secondElem).push(firstElem)
  }

  return newGraph
}

const dfs = (node: number, graph: NewGraph, visited: VisitedMap) => {
  if (!visited.has(node)) {
    visited.set(node, true)
    
    const neighbors = graph.get(node)
    
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];

      dfs(neighbor, graph, visited)
    }
  }
}

const numberOfConnectedComponents = (n: number, edges: [number, number][]): number => {
  let count = 0

  const newGraph = createNeighbors(n, edges)
  const visited: VisitedMap = new Map()
  
  newGraph.forEach((neighbors, node) => {
    if (!visited.has(node)) {
      count++
      dfs(node, newGraph, visited)
    }
  })

  return count
}

numberOfConnectedComponents(n, edges)

export default numberOfConnectedComponents
