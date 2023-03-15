const isPrime = (x: number) => {
  const sqrt = Math.floor(Math.sqrt(x))

  for (let i = 2; i <= sqrt; i++) {
    if (x % i === 0) return false
  }

  return Number.isInteger(sqrt) && x > 1
}

console.log(isPrime(25))