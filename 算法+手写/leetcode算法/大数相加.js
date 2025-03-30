var addString =function(num1,num2){
  while(num1.length>num2.length)num2='0'+num2
  while (num1.length < num2.length) num1 = "0" + num1;

  let res=''
  let carry=0
  for(let i=num1.length-1;i>=0;i--){
    const sum=+num1[i]+carry
    res=sum%10+res
    carry=sum>=10?1:0

  }
  return carry===1?'1'+res:res

}