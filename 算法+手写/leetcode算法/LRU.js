//Node
class Node {
  constructor(key = 0, value = 0) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

//LRU{getNode,get,set,pushFront,remove}
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.dummy = new Node();
    this.dummy.prev = this.dummy;
    this.dummy.next = this.dummy;
    this.map = new Map();
  }

  getNode(key) {
    if (this.map.has(key)) {
      let node = this.map.get(key);
      this.remove(node);
      this.pushFront(node);
      return node;
    }
    return null;
  }

  get(key) {
    let node = this.getNode(key);
    if (!node) {
      return -1;
    }
    return node.value;
  }

  put(key, value) {
    let node = this.getNode(key);
    if (node) {
      node.value = value;
      return;
    }
    node = new Node(key, value);
    this.map.set(key, node);
    this.pushFront(node);
    if (this.map.size > this.capacity) {
      let backNode = this.dummy.prev;
      this.map.delete(backNode.key);
      this.remove(backNode);
    }
  }

  pushFront(node) {
    node.prev = this.dummy;
    node.next = this.dummy.next;
    node.prev.next = node;
    node.next.prev = node;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
}

/* // Node类
class Node{
  constructor(key=0,value=0){
    this.key=key
    this.value=value
    this.prev=null
    this.next=null
  }
}
// LRU类
class LRU{
  constructor(capacity){
    this.capacity=capacity
    this.dummy=new Node()
    this.dummy.next=this.dummy
    this.dummy.prev=this.dummy
    this.map=new Map()
  }

    //获取节点
  getNode(key){
    if(this.map.has(key)){
      let node=this.map.get(key)
      this.remove(node)
      this.pushFront(node)
    }
    return null;
  }
    
//获取值
  get(key){
    const node=this.getNode(key)
    if(!node){
      return null
    }
    return node.value
  }
//设置值
set(key,value){
  let node=this.getNode(key)
  if(node){
    node.value=value
    return 
  }
  node=new Node(key,value)
  this.map.set(key,node)
  this.pushFront(node)
  if(this.map.size>this.capacity){
    const backNode=this.dummy.prev
    this.map.delete(backNode.key)
    this.remove(backNode)
  }
}

//插入到链表前面
  pushFront(node){
    node.prev=this.dummy
    node.next=this.dummy.next
    node.prev.next=node
    node.next.prev=node
  }

  //移除节点
  remove(node){
    node.prev.next=node.next
    node.next.prev=node.prev
  }
} */
