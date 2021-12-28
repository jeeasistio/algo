const tableLength = 100

const djb2 = (str: string) => {
  let hash = 5381

  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash + i) % tableLength
  }

  return hash
}

class HashTable {
  table = new Array(100)

  setItem = (key: string, value: any) => {
    const idx = djb2(key)
    console.log(idx)

    if (this.table[idx]) {
      for (let i = 0; i < this.table[idx].length; i++) {
        if (this.table[idx][i][0] === key) {
          this.table[idx][i] = [key, value]
        } else {
          this.table[idx].push([key, value])
        }
      }
    } else {
      this.table[idx] = [[key, value]]
    }
  }

  getItem = (key: string) => {
    const idx = djb2(key)
    return this.table[idx].find((list) => list[0] === key)[1]
  }
}

const hashTable = new HashTable()
hashTable.setItem('firstName', 'jee')
const firstName = hashTable.getItem('firstName')
console.log(firstName)
hashTable.setItem('middleName', 'hon')
const middleName = hashTable.getItem('middleName')
console.log(middleName)
hashTable.setItem('lastName', 'asistio')
const lastName = hashTable.getItem('lastName')
console.log(lastName)
hashTable.setItem('lastName2', 'dia')
const lastName2 = hashTable.getItem('lastName2')
console.log(lastName2)
console.log(hashTable.table)
