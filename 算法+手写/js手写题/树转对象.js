function treeToObject(tree) {
  let result = [];
  function transform(node, parId) {
    const current = {
      id: node.id,
      name: node.name,
      parId: parId,
    };
    result.push(current);
    if (node.children && node.children.length > 0) {
      node.children.forEach((child) => transform(child, node.id));
    }
  }
  transform(tree);
  return result;
}

const tree = {
  id: 1,
  name: "Root",
  children: [
    {
      id: 2,
      name: "Child 1",
      children: [
        {
          id: 3,
          name: "Grandchild 1",
          children: [],
        },
      ],
    },
    {
      id: 4,
      name: "Child 2",
      children: [],
    },
  ],
};

const flatArray = treeToObject(tree);
console.log(flatArray);
