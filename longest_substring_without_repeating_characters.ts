const longestSubstringWithoutRepeatingCharacters = (str: string) => {
  const map = {}
  let max = 0
  let currLength = 0

  for (let i = 0; i < str.length; i++) {
    const letter = str[i]
    map[letter] = map[letter] + 1 || 1
    currLength++

    while (map[letter] > 1) {
      map[str[i - currLength + 1]] -= 1
      currLength--
    }

    if (currLength > max) max = currLength
  }

  return max
}

console.log(longestSubstringWithoutRepeatingCharacters('pwwkew'))