// function fangdou(fn, t) {
//   let time = null
//   return function () {
//     if (time) {
//       clearTimeout(time)
//       time = null
//     }
//     time = setTimeout(() => {
//       fn.apply(this, arguments)
//       clearTimeout(time)
//       time = null
//     }, t)
//   }
// }

// const test = fangdou(function () {console.log(123)}, 1000)
// for (let i = 0; i <= 100000000; i++) {
//   test()
// }

function jieliu(fn, t) {
  let time = null
  return function () {
    if (time) {
      return
    }
    time = setTimeout(() => {
      fn.apply(this, arguments)
      clearTimeout(time)
      time = null
    }, t)
  }
}


const test2 = jieliu(function () {console.log(123)}, 1000)
for (let i = 0; i <= 10000; i++) {
  test2()
}
