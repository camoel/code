function fn(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "b") continue;
    else if (str[i] == "c" && result[result.length - 1] == "a") {
      result.pop();
    } else {
      result.push(str[i]);
    }
  }
  return result.join("");
}

console.log(fn('abcdcba'));//dca
console.log(fn("aaabbbccc")); //''
console.log(fn("aabbc;"));//a


console.log(1);
setTimeout({function(){console.log(2)}
},0) 
new Promise((resolve,reject)=>{
  console.log(3);
  resolve()
.then(console.log(4)
)})
document.appendChild(p)



const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  let numbers = input
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let layers = [];
  let currentLayer = 1;
  let index = 0;

  while (index < numbers.length) {
    let layer = [];
    for (let i = 0; i < currentLayer && index < numbers.length; i++) {
      layer.push(numbers[index]);
      index++;
    }
    layers.push(layer);
    currentLayer++;
  }

  let maxWidth = layers[layers.length - 1].join(" ").length;

  for (let layer of layers) {
    let line = layer.join(" ");
    let padding = " ".repeat((maxWidth - line.length) / 2);
    console.log(padding + line);
  }

  rl.close();
});
