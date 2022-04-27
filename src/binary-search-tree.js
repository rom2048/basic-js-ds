const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {

  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    this.tree = addFor(this.tree, data);

    function addFor(node, data) {
      if (!node){
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      data < node.data ? node.left = addFor(node.left, data) : node.right = addFor(node.right, data);
      return node;
    }
  }

  has(data) {
    return searchFor(this.tree, data);

    function searchFor(node, data){
      if (!node) {
        return false;
      }
    
      if (node.data === data) {
        return true;
      }
    
      return data < node.data ? searchFor(node.left, data) : searchFor(node.right, data);
    }
  }

  find(data) {
    return searchFor(this.tree, data);

    function searchFor(node, data){
      if (!node) {
        return null;
      }
    
      if (node.data === data) {
        return node;
      }
    
      return data < node.data ? searchFor(node.left, data) : searchFor(node.right, data);
    }
  }

  remove(data) {
    this.tree = removeNode(this.tree, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;

        node.right = removeNode(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.tree) {
      return null;
    }

    let node = this.tree;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.tree) {
      return null;
    }

    let node = this.tree;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};