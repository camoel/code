function solve(number) {
  let arr = [...String(number)];
  arr = arr.slice(0, 3).concat(["*", "*", "*", "*"]).concat(arr.slice(7));
  return arr.join("");
}
console.log(solve(18972268934));
