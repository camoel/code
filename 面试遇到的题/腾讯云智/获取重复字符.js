/**
 * - 题目: 找出一个字符串出现连续重复的字符，
 * 例如：输入'aaasfjkjkbbbdjkjssjccc'，输出：['aaa', 'bbb', 'ss', 'ccc']
 */

function findConsecutiveRepeats(str) {
    if (str.length === 0) return [];
    const result = [];
    let currentChar = str[0];
    let count = 1;
    
    for (let i = 1; i < str.length; i++) {
        if (str[i] === currentChar) {
            count++;
        } else {
            if (count >= 2) {
                result.push(currentChar.repeat(count));
            }
            currentChar = str[i];
            count = 1;
        }
    }
    
    // 处理末尾的连续字符
    if (count >= 2) {
        result.push(currentChar.repeat(count));
    }
    
    return result;
}

// 示例测试
console.log(findConsecutiveRepeats('aaasfjkjkbbbdjkjssjccc')); // 输出: ['aaa', 'bbb', 'ss', 'ccc']
console.log(findConsecutiveRepeats('abc')); // 输出: []
console.log(findConsecutiveRepeats('aabbaabb')); // 输出: ['aa', 'bb', 'aa', 'bb']