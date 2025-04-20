class TreeNode{
  constructor(val=0,left=null,right=null){
    this.val=val
    this.left=left
    this.right=right
  }
}


function pathSum(root,targetSum){
  const res=[]

  function dfs(node,current,sum){
    if(!node)return

    current.push(node.val)
    sum+=node.val

    if(!node.left&&!node.right&&sum==targetSum){
      res.push([...current])
    }

    dfs(node.left, current, sum);
    dfs(node.right, current, sum);

    current.pop()
  }
  dfs(root,[],0)
  return res
}

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(1);

// 获取所有路径和为 22 的路径
console.log(pathSum(root, 22)); // 输出 [[5, 4, 11, 2]]