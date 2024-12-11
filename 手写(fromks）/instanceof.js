function instance(obj, prototype) {
  while (obj.__proto__) {
    if (obj.__proto__ === prototype) {
      return true
    }
    obj = obj.__proto__
  }
  return false
}
