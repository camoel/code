function solve(arr) {
  if (arr.length <= 1) return arr
  const value = arr.shift()
  const left = [], right = []
  arr.forEach(item => {
    if (item <= value) {
      left.push(item)
      return
    }
    right.push(item)
  })
  return [...solve(left), value, ...solve(right)]
}

console.log(solve([1, 3, 5, 2, 6, 8, 10, 7]))
