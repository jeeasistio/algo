const arr = [1, 2, 3]

const subsets = (arr: number[], currSubset = [], results = [], index = 0) => {
  if (index === arr.length) {
    results.push(currSubset)
    return 
  }

  subsets(arr, currSubset.concat(arr[index]), results, index + 1)
  subsets(arr, currSubset, results, index + 1)

  return results
}

console.log(subsets(arr));

export default subsets