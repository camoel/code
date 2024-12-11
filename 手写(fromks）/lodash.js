function solve(obj, str) {
  const arr = str.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  return (
    arr.reduce((o, item) => {
      return o[item] || {};
    }, obj) || undefined
  );
}

const obj = {
  a: 1,
  b: [
    1,
    2,
    {
      d: 3,
    },
  ],
};

console.log(solve(obj, "b[2].d"));
