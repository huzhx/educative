class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const count_paths = function(root, S) {
  // TODO: Write your code here
  if (!root) return -1;
  let ans = 0;
  helper(root, []);

  function helper(curNode, curPath) {
    if (!curNode) return;
    curPath.push(curNode.value);
    let curSum = curPath.reduce((accumulator, element) => accumulator + element, 0);
    if (curSum === S) {
      ans += 1;
    } else if (curSum > S) {
      if (curPath.length > 1) {
        helper(curNode, curPath.slice(1));
      } else {
        helper(curNode.left, []);
        helper(curNode.right, []);
      }
    } else {
      helper(curNode.left, curPath);
      helper(curNode.right, curPath);
    }

    curPath.pop();
  }

  return ans;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has paths: ${count_paths(root, 11)}`);
