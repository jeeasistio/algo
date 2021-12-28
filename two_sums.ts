const twoSums = (nums: number[], target: number): [number, number] => {
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i]

    for (let j = i + 1; j < nums.length; j++) {
      if (currNum + nums[j] === target) return [i, j]
    }
  }
}

console.time('a')
console.log(twoSums([2, 7, 11, 15], 26))
console.timeEnd('a')

const twoSums2 = (nums: number[], target: number): [number, number] => {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i]
    const diff = target - currNum

    if (map.has(diff)) return [map.get(diff), i]
    
    map.set(currNum, i)
  }

}

console.time('b')
console.log(twoSums2([2, 7, 11, 15], 26))
console.timeEnd('b')