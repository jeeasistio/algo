const addresses = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]

const uniqueEmailAddress = (addresses: string[]) => {
  const map = new Map()

  for (let i = 0; i < addresses.length; i++) {
    const address = addresses[i];

    const [local, domain] = address.split('@')
    const uniqueAdd = local.split('+')[0].replace(/\./g, '') + '@' + domain
    
    map.set(uniqueAdd, true)
  }

  return map.size
}

console.log(uniqueEmailAddress(addresses));