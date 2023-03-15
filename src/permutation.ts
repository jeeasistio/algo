const permutation = (str: string, currWord: string = '', results: string[] = []) => {
  if (str.length === 0) results.push(currWord)

  for (let letter of str) {
    permutation(str.replace(letter, ''), currWord.concat(letter), results)
  }

  return results
}

console.log(permutation('123'))