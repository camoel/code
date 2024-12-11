/*
 * @Author: root 931097192@qq.com
 * @Date: 2024-02-21 13:59:36
 * @LastEditors: root 931097192@qq.com
 * @LastEditTime: 2024-02-21 14:01:58
 * @FilePath: \手写\setTimeout实现setInterval.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function mySetInterval(fn, time) {
  function func() {
    f = setTimeout(() => {
      fn();
      func();
    }, time);
  }
  func();

  return {
    cancel: function () {
      clearTimeout(f);
    },
  };
}

function test() {
  console.log(1);
  console.log(global.f);
}
const { cancel } = mySetInterval(test, 1000);
setTimeout(() => {
  cancel();
}, 10000);
