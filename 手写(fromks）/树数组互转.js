
const arr = [{
  id: 1,
  pid: 0,
  name: 'body'
}, {
  id: 2,
  pid: 1,
  name: 'title'
}, {
  id: 3,
  pid: 2,
  name: 'div'
}]
const tree = [{
  id: 1,
  pid: 0,
  name: 'body',
  children: [{
    id: 2,
    pid: 1,
    name: 'title',
    children: [{
      id: 3,
      pid: 1,
      name: 'div'
    }]
  }]
}]
//树转数组
// function solve(tree) {
//   let res = []
//   tree.forEach(item => {
//     if (item.children) {
//       res = res.concat(solve(item.children))
//       delete item.children
//     }
//     res.push(item)
//   })
//   return res
// }

//数组转树
function solve(arr, pid) {
  let tree = []
  arr.forEach(item => {
    if (item.pid === pid) {
      let children = solve(arr, item.id)
      if (children.length) {
        item.children = children
      }
      tree.push(item)
    }
  })
  return JSON.stringify(tree)
}

console.log(solve(arr, 0))
