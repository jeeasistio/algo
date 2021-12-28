const groupAnagrams = (strs: string[]): string[][] => {

  const res = []
  const map = {}

  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split('').sort().join('')
    
    if (map[sorted]) {
      map[sorted].push(strs[i])
    } else {
      map[sorted] = [strs[i]]
    }
  }

  for (const i in map) {
    res.push(map[i])
  }

  return res
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));