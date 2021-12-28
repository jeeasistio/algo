const kthGrammar = (n: number, k: number) => {
  if (n < 0) return null
  if (n === 0) return 0

  const parentN = n - 1
  const parentK = Math.round(k / 2)
  
  if (kthGrammar(parentN, parentK) === 1) {
    if (isOdd(k)) return 1
    return 0
  }

  if (!isOdd(k)) return 1
  return 0
}

const isOdd = (num: number) => {
  return num % 2 === 1
}

console.log(kthGrammar(1, 1));