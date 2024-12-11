class TreeNode{
  constructor(val,left=null,right=null){
    this.val=val
    this.left=left
    this.right=right
  }
}

function sumPaths(root){
  if(!root)return 0
  let sum=0

  function dfs(node,currentSum){
    if(!node)return 
    currentSum=currentSum*10+node.val
    if(!node.left&&!node.right){
      sum+=currentSum
      return 
    }
    dfs(node.left, currentSum);
    dfs(node.right, currentSum);
  }
  dfs(root,0)
  return sum
}
// 测试
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(sumPaths(root));//522