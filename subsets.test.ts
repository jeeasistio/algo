import subsets from './subsets'

describe('subsets', () => {
  test('should return all the subsets', () => {
    expect(subsets([1,2,3])).toEqual(expect.arrayContaining([[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]))
  });
});