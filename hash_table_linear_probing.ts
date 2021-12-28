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

    if (this.table[idx]) {
      this.table[(idx + 1) % tableLength] = [key, value]
    } else {
      this.table[idx] = [key, value]
    }
  }

  getItem = (key: string) => {
    let idx = djb2(key)
    
    while (this.table[idx][0] !== key) {
      idx = (idx + 1) % tableLength
    }

    return this.table[idx][1]
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
console.log(lastName2);
console.log(hashTable);