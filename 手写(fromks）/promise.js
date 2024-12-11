function limit(arr, limitNum) {
  let startNum = 0,
    endNum = 0;
  let queue = [];
  function start(item, resolve) {
    item().then((res) => {
      endNum++;
      startNum--;
      if (queue.length) {
        const i = queue.shift();
        start(i, resolve);
      }
      if (endNum === arr.length) {
        resolve("已结束");
      }
    });
  }
  return new Promise((resolve) => {
    arr.forEach((item) => {
      if (startNum >= limitNum) {
        queue.push(item);
        return;
      }
      startNum++;
      start(item, resolve);
    });
  });
}

const arr = [];
for (let i = 0; i <= 9; i++) {
  let func = function () {
    return new Promise((resolve) => {
      console.log(`事件${i}开始`);
      setTimeout(() => {
        console.log(`事件${i}结束`);
        resolve(i);
      }, 1000);
    });
  };
  arr.push(func);
}

limit(arr, 3).then((res) => console.log(res));
