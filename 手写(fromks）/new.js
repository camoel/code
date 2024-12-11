function New() {
  const constructor = arguments.unshift()
  const obj = Object.create(constructor)
  const result = constructor.apply(obj, arguments)
  return typeof result === 'object' ? result : obj
}
