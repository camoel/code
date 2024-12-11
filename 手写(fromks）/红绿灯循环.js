/*
 * @Author: root 931097192@qq.com
 * @Date: 2024-02-21 13:59:36
 * @LastEditors: root 931097192@qq.com
 * @LastEditTime: 2024-03-18 23:12:54
 * @FilePath: \手写\手写\红绿灯循环.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function green() {
  console.log("绿色");
}
function red() {
  console.log("红色");
}
function yellow() {
  console.log("黄色");
}

function func(color, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      switch (color) {
        case "green":
          green();
          break;
        case "red":
          red();
          break;
        case "yellow":
          yellow();
          break;
      }
      resolve();
    }, time);
  });
}
function start() {
  return func("red", 1000)
    .then(() => func("yellow", 1000))
    .then(() => func("green", 1000))
    .then(() => start());
}
start();
