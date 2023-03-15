import pathSum, { root, targetSum } from './path_sum'

describe('Path Sum', () => {
  test('should return true if the tree has a path that is equal to targetSum', () => {
    expect(pathSum(root, targetSum)).toBeTruthy()
  });
});