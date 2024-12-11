function toCase(str){
  let strArr=str.split('')
  for(let i=0;i<strArr.length;i++){
    if(strArr[i]==='_'){
      strArr.splice(i,1)
      strArr[i]=strArr[i].toUpperCase()
    }
  }
  return strArr.join('')
}

const test = "camel_case_example";
console.log(toCase(test))//camelCaseExample