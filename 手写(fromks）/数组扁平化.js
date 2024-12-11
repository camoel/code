function solve(arr) {
  let result = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(solve(item))
    } else {
      result.push(item)
    }
  })
  return result
}

console.log(solve([1, [2, [3, 4, [5, 6]], [1, 2]]]))
