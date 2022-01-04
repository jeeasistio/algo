import numberOfConnectedComponents, { n, edges } from './number_of_connected_components'

describe('get number of connected components in an undirected graph', () => {
  test('should return number of connected components', () => {
    expect(numberOfConnectedComponents(n, edges)).toEqual(2)
  })
})
