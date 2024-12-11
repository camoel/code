function deepClone(obj) {
  const o = {}
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      o[key] = JSON.parse(JSON.stringify(obj[key]))
      continue;
    }
    if (typeof obj[key] === 'object') {
      o[key] = deepClone(obj[key])
      continue;
    }
    o[key] = obj[key]
  }
  return o
}

const obj = {
  a: 1,
  b: [1, 2],
  c: {
    d: 1,
    e: 'q23',
  }
}

const obj2 = deepClone(obj)
obj2.c.d = 100
obj2.b.push(3)
console.log(obj)
console.log(obj2)

