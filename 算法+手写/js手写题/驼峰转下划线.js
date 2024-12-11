function camelToSnake(camelCase){
  let snakeCase=''
  for(let i=0;i<camelCase.length;i++){
    const char=camelCase[i]
    if(char===char.toUpperCase()&&i!=0){
      snakeCase+='_'+char.toLowerCase()
    }else{
      snakeCase+=char.toLowerCase()
    }
  }
  return snakeCase
}

const a = "camelCaseExample";
console.log(camelToSnake(a))//camel_case_example
