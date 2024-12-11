function call(_this, ...args) {
  const fn = this
  _this.fn = fn
  return _this.fn(...args)
}

function apply(_this, args) {
  const fn = this
  _this.fn = fn
  return _this.fn(...args)
}

function bind(_this, ...args) {
  const fn = this
  _this.fn = fn
  return function () {
    return _this.fn(...args, ...arguments)
  }
}
