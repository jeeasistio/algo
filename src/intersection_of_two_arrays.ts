export const nums1 = [4, 7, 9, 7, 6, 7]
export const nums2 = [5, 0, 0, 6, 1, 6, 2, 2, 4]

const intersectionOfTwoArr = (nums1: number[], nums2: number[]) => {
  const res = []
  const hashMap = {}

  for (let i = 0; i < nums1.length; i++) {
    hashMap[nums1[i]] = 1
  }

  for (let i = 0; i < nums2.length; i++) {
    hashMap[nums2[i]] += 1
  }
  
  for (const i in hashMap) {
    if (hashMap[i] > 1) res.push(+i)
  }

  return res
}

console.log(intersectionOfTwoArr(nums1, nums2))

export default intersectionOfTwoArr
