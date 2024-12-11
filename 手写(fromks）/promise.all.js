function all(arr) {
  return new Promise((resolve, reject) => {
    let res = []
    let count = 0
    arr.forEach(item => {
      item.then((value, index) => {
        res[index] = value
        count++
      }).catch((err) => {
        reject(err)
      }).finally(() => {
        if (count === arr.length) {
          resolve(res)
        }
      })
    })
  })
}
