function solve() {
  let s = [...arguments].reduce((s, i) => s + i);
  return function sum(...args) {
    if (args.length === 0) return s;
    s += [...args].reduce((s, i) => s + i);
    return sum;
  };
}

console.log(solve(1)(2)(3, 4)());
