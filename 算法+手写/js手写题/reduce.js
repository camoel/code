Array.prototype._reduce = function (callback, initialValue) {
  if (typeof callback !== "function") throw new Error("type error");
  const arr = this;
  if (this.length === 0) throw new Error("array is empty!");
  let acc;
  let startIndex;
  if (initialValue !== undefined) {
    (acc = initialValue), (startIndex = 0);
  } else {
    acc = arr[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < arr.length; i++) {
    const currentValue = arr[i];
    acc = callback(acc, currentValue, i, array);
  }
  return acc;
};


//使用三元运算符初始化累积值和起始索引
const [acc,startIndex]=initialValue!==undefined?
[initialValue,0]:[arr[0],1]