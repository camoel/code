// [1, 2, 3, 4, 5, 6].sort(function () {
//   return 0.5 - Math.random();
// });


// function shuffle(arr) {
//   // 创建一个副本，避免修改原数组
//   let newArr = arr.slice();
//   for (let i = newArr.length - 1; i > 0; i--) {
//     // 生成 0 到 i 之间的随机索引
//     let j = Math.floor(Math.random() * (i + 1));
//     // 交换元素
//     [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
//   }
//   return newArr;
// }

function shuffle(arr) {
  // 创建一个 arr 的副本，避免修改原数组
  let newArr = arr.slice();

  // 从数组的最后一个元素开始，逐步向前遍历
  for (let i = newArr.length - 1; i > 0; i--) {
    // 生成一个随机数 j, 范围是 0 到 i（包括 i）
    let j = Math.floor(Math.random() * (i + 1));

    // 交换 newArr[i] 和 newArr[j] 的值
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  // 返回被打乱的新数组
  return newArr;
}



let array = [1, 2, 3, 4, 5, 6];
console.log(shuffle(array));
