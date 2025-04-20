/**
 * - 题目: 找出一个字符串出现连续重复的字符，
 * 例如：输入'aaasfjkjkbbbdjkjssjccc'，输出：['aaa', 'bbb', 'ss', 'ccc']
 */

function findRepeats(str) {
    let res=[]
    let current=""
    for(let i=0;i<str.length;i++){
        if(i===0||str[i-1]==str[i]){
            current+=str[i]
        }else{
            if (current.length > 1) {
            res.push(current);
            }
            current=str[i]
        }
        
    }
    if(current.length>1){
        res.push(current)
    }
    return res
}

const input = "aaasfjkjkbbbdjkjssjccc";
const output = findRepeats(input);
console.log(output);
