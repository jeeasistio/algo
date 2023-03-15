const myPow = (x: number, n: number) => {
  if (n === 0) return 1

  let powRes: number

  if (n < 0) return myPow(1/x, -n)

  if (n > 0) powRes = myPow(x, Math.floor(n / 2))

  return n & 1 ? powRes * powRes * x : powRes * powRes
}


// console.log(myPow(8, 18))
console.log(myPow(2, 10))