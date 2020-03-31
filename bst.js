class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(val) {
    this.root = new Node(val);
  }

  insert(curNode, val) {
    if (curNode === null) {
      curNode = new Node(val);
    } else if (val < curNode.val) {
      curNode.left = this.insert(curNode.left, val);
    } else {
      curNode.right = this.insert(curNode.right, val);
    }
    return curNode;
  }

  insertBST(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return;
    }
    this.insert(this.root, val);
  }

  preOrderPrint(curNode) {
    if (curNode !== null) {
      console.log(curNode.val);
      this.preOrderPrint(curNode.left);
      this.preOrderPrint(curNode.right);
    }
  }

  inOrderPrint(curNode) {
    if (curNode !== null) {
      this.inOrderPrint(curNode.left);
      console.log(curNode.val);
      this.inOrderPrint(curNode.right);
    }
  }

  postOrderPrint(curNode) {
    if (curNode !== null) {
      this.postOrderPrint(curNode.left);
      this.postOrderPrint(curNode.right);
      console.log(curNode.val);
    }
  }

  search(val) {
    let curNode = this.root;
    while (curNode && curNode.val !== val) {
      if (curNode.val > val) {
        curNode = curNode.left;
      } else {
        curNode = curNode.right;
      }
    }
    // * after the loop, we'll have either the searched value or null in case the value was not found
    return curNode;
  }

  delete(curNode, val) {
    // * case 1: checking for the empty tree
    // * if rootNode is null
    if (curNode === null) {
      return false;
    }
    // * start traversing the tree until we find the value to be deleted or end up with a null node
    let parentNode;
    while (curNode && curNode.val !== val) {
      parentNode = curNode;
      if (val < curNode.val) {
        curNode = curNode.left;
      } else {
        curNode = curNode.right;
      }
    }
    console.log({ parentNode, curNode });
    // * case 2: curNode is null. value not found
    if (curNode === null) {
      return false;
    } else if (curNode.left === null && curNode.right === null) {
      // * case 3: curNode is a leaf node
      if (curNode.val === this.root.val) {
        this.root = null;
        return true;
      } else if (curNode.val < parentNode.val) {
        parentNode.left = null;
        return true;
      } else {
        parentNode.right = null;
        return true;
      }
    } else if (curNode.right === null) {
      // * case 4: if the node has a left child only
      // * we will link the left child to the parent of the node to be deleted
      if (curNode.val === this.root.val) {
        this.root = curNode.left;
        return true;
      } else {
        parentNode.left = curNode.left;
        return true;
      }
    } else if (curNode.left === null) {
      // * case 5: if the node has a right child only
      // * we will link the right child to the parent of the node to be deleted
      if (curNode.val === this.root.val) {
        this.root = curNode.right;
        return true;
      } else {
        parentNode.right = curNode.right;
        return true;
      }
    } else {
      // * case 6: if the node to be deleted has 2 children
      // * starting point for the right subtree
      let minRight = curNode.right;
      while (minRight.left !== null) {
        minRight = minRight.left;
      }
      let tmp = minRight.val;
      // * delete the left most node in the right subtree by calling the in the same delete function
      this.delete(this.root, minRight.val);
      curNode.val = tmp;
      return true;
    }
  }
}

const BST = new BinarySearchTree(6);
console.log('The root val for BST: ', BST.root.val);
BST.insertBST(4);
BST.insertBST(9);
BST.insertBST(5);
BST.insertBST(2);
BST.insertBST(8);
BST.insertBST(12);
BST.insertBST(10);
BST.insertBST(14);

BST.inOrderPrint(BST.root);
console.log('Delete 9!');
console.log(BST.delete(BST.root, 9));
BST.inOrderPrint(BST.root);
