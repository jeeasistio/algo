import paintFence, { n, k } from './paint_fence'

describe('paint fence', () => {
  test('should return number of ways you can paint n posts with k colors', () => {
    expect(paintFence(n, k)).toEqual(16)
  });
});