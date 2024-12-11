Array.prototype.myForEach = function (fn) {
  const arr = this
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr)
  }
}
