//方法一：使用加法（仅限于数字）
/* let a=5;
let b=10;

a=a+b;
b=a-b;
a=a-b;

console.log(a);//10
console.log(b);//5
 */

//方法二：使用解构赋值
let a=5;
let b=10;
[a,b]=[b,a]
console.log(a);//10
console.log(b);//5
