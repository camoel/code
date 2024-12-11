function ss(left,right){
let proto=Object.getPrototypeOf(left)
right=right.prototype
while(true){
  if(proto==null)return false
  if(proto===right)return true
  proto = Object.getPrototypeOf(proto);
}
}

//question3

function C1(name){
  if(name)this.name=name
}

function C2(name){
  this.name=name
}

function C3(name){
  this.name=name||'John'
}

C1.prototype.name='Tom'
C2.prototype.name = "Tom";
C3.prototype.name = "Tom";

alert(new C1().name+new C2().name+new C3().name)


//question3
window.val=1
const json={
  val:10,
  dbl(){
    this.val*=2
  }
}

json.dbl()//20
var dbl=json.dbl()
dbl()//2
json.dbl.call(window)
console.log(window.val+json.dbl())