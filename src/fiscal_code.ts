interface PersonalData {
  name: string
  surname: string
  gender: 'M' | 'F'
  date_of_birth: string
}
const jee: PersonalData = {
  name: 'brendan',
  surname: 'asistio',
  gender: 'M',
  date_of_birth: '8/8/2001'
}

const monthsConversion = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'H',
  7: 'L',
  8: 'M',
  9: 'P',
  10: 'R',
  11: 'S',
  12: 'T'
}

const getConsonants = (str: string): string[] => {
  return str.split('').filter((letter) => letter.match(/[^aeiou]/gi))
}

const getVowels = (str: string): string[] => {
  return str.split('').filter((letter) => letter.match(/[aeiou]/gi))
}

const getSurCode = (surname: string): string => {
  let surCode: string
  const consonants = getConsonants(surname)
  const vowels = getVowels(surname)
  const consoCode = consonants.join('').toUpperCase()
  const vowelCode = vowels.join('').toUpperCase()

  surCode = `${consoCode}${vowelCode}`.substring(0, 3).padEnd(3, 'X')

  return surCode
}

const getNameCode = (name: string): string => {
  let nameCode: string
  const consonants = getConsonants(name)
  const vowels = getVowels(name)
  let consoCode: string
  consoCode = consonants.join('').toUpperCase()

  if (consonants.length === 3) consoCode = consonants.join('').toUpperCase()

  if (consonants.length > 3)
    consoCode = consonants
      .filter((letter, index) => index !== 2)
      .join('')
      .toUpperCase()

  const vowelCode = vowels.join('').toUpperCase()

  nameCode = `${consoCode}${vowelCode}`.substring(0, 3).padEnd(3, 'X')

  return nameCode
}

const getBirthGenCode = (dateOfBirth: string, gender: 'M' | 'F'): string => {
  const yearCode = dateOfBirth.match(/\d{2}$/)

  const monthNumber = dateOfBirth.match(/\/(\d+)/)[1]
  const monthCode = monthsConversion[monthNumber]

  let dayNumber = dateOfBirth.match(/^\d+/)[0]
  if (gender === 'F') dayNumber = `${+dayNumber + 40}`
  const dayCode = dayNumber.padStart(2, '0')

  return `${yearCode}${monthCode}${dayCode}`
}

const fiscalCode = (data: PersonalData) => {
  const { name, surname, gender, date_of_birth: dateOfBirth } = data

  const surCode = getSurCode(surname)
  const nameCode = getNameCode(name)
  const birthGenCode = getBirthGenCode(dateOfBirth, gender)

  return `${surCode}${nameCode}${birthGenCode}`
}

console.log(fiscalCode(jee))
