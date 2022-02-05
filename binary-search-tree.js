// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null; 
  }

  insert(val, currentNode=this.root) {
    // Your code here
    let newNode = new TreeNode(val);
    if(!this.root) {
      this.root = newNode;
      return this.root;
    }
    while(currentNode.left && val < currentNode.val) {
      currentNode = currentNode.left;
    } 
    while(currentNode.right && val > currentNode.val) {
      currentNode = currentNode.right;
    }
   if(!currentNode.left && val < currentNode.val) {
     currentNode.left = newNode;
   }
    if(!currentNode.right && val >= currentNode.val) {
      currentNode.right = newNode;
    }
    return this.root;
  }

  search(val) {
    // Your code here
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
  }
}

module.exports = { BinarySearchTree, TreeNode };
