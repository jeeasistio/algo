const caesarCipher = (str: string, int: number): string => {
  let newString: string[] = []

  for (let i = 0; i < str.length; i++) {
    const letChar = str.charCodeAt(i)
    if (letChar >= 97 && letChar <= 122) {
      let shiftedCharCode = 97 + ((letChar - 97 + int) % 26)
      newString.push(String.fromCharCode(shiftedCharCode))
    } else if (letChar >= 65 && letChar <= 90) {
      let shiftedCharCode = 65 + ((letChar - 65 + int) % 26)
      newString.push(String.fromCharCode(shiftedCharCode))
    } else {
      newString.push(str[i])
    }
  }

  return newString.join('')
}

console.log(caesarCipher('o', 100))
