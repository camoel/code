/**2. 实现一个字符串的模板引擎方法：template(str, obj) ，将str中的变量替换后返回目标字符串
  例如：template("${ name }你好,欢迎来到${ company}", {name: '张三', company: '腾讯'})
  结果为："张三你好,欢迎来到腾讯" */

function template(str, obj) {
  // 使用正则表达式匹配 ${} 包裹的变量名
  return str.replace(/\$\{([^}]+)\}/g, function (match, key) {
    // 去除变量名前后的空格
    key = key.trim();
    // 如果对象中存在该变量，则替换为对应的值，否则保持原样
    return obj.hasOwnProperty(key) ? obj[key] : match;
  });
}

// 测试示例
let result = template("${ name }你好,欢迎来到${ company}", {
  name: "张三",
  company: "腾讯",
});
console.log(result);
