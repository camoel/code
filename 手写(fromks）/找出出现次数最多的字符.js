const arr = ['a', 'a', 'b', 'b', 'c']

function solve(arr) {
  const map = new Map()
  let max = 0
  const keyArr = Array.from(new Set(arr))
  arr.forEach(item => {
    if (!map.get(item)) {
      map.set(item, 1)
    }
    map.set(item, map.get(item) + 1)
  })
  for (let i = 0; i < keyArr.length; i++) {
    max = Math.max(max, map.get(keyArr[i]))
  }
  return keyArr.filter(item => map.get(item) === max)
}

console.log(solve(arr))
