const mapping = {
  '{': '}',
  '(': ')',
  '[': ']'
}

const validParentheses = (str: string) => {
  if (str.length % 2 !== 0) return false

  const stack = []
  for (let i = 0; i < str.length; i++) {
    const currPar = str[i]

    if (mapping[currPar]) {
      stack.push(currPar)
    } else {
      if (currPar === mapping[stack[stack.length - 1]]) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0 && true
}

console.log(validParentheses('(){}[]'))
console.log(validParentheses('([{}])'))
