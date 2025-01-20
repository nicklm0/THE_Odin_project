// Node class represents each node in the binary search tree
class Node {
    constructor(data) {
        this.data = data; // Value of the node
        this.left = null; // Left child node
        this.right = null; // Right child node
    }
}

// BinarySearchTree class represents the binary search tree
class BinarySearchTree {
    constructor() {
        this.root = null; // Root node of the tree
    }

    // Method to insert a new node with given data
    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode; // If tree is empty, set root to new node
        } else {
            this.insertNode(this.root, newNode); // Otherwise, insert node in the correct position
        }
    }

    // Helper method to insert a node in the correct position
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode; // Insert as left child
            } else {
                this.insertNode(node.left, newNode); // Recur to the left subtree
            }
        } else {
            if (node.right === null) {
                node.right = newNode; // Insert as right child
            } else {
                this.insertNode(node.right, newNode); // Recur to the right subtree
            }
        }
    }

    // Method to check if the tree is balanced
    isBalanced() {
        return this.checkBalance(this.root) !== -1;
    }

    // Helper method to check the balance of the tree
    checkBalance(node) {
        if (node === null) {
            return 0; // Base case: empty tree is balanced
        }
        const leftHeight = this.checkBalance(node.left);
        const rightHeight = this.checkBalance(node.right);
        if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
            return -1; // Tree is unbalanced
        }
        return Math.max(leftHeight, rightHeight) + 1; // Return height of the tree
    }

    // Method to rebalance the tree
    rebalance() {
        const nodes = [];
        this.inOrderTraverse(this.root, nodes); // Get all nodes in in-order
        this.root = this.buildBalancedTree(nodes, 0, nodes.length - 1); // Build balanced tree
    }

    // Helper method to traverse the tree in in-order and store nodes in an array
    inOrderTraverse(node, nodes) {
        if (node !== null) {
            this.inOrderTraverse(node.left, nodes);
            nodes.push(node.data);
            this.inOrderTraverse(node.right, nodes);
        }
    }

    // Helper method to build a balanced tree from sorted nodes
    buildBalancedTree(nodes, start, end) {
        if (start > end) {
            return null; // Base case: no nodes to add
        }
        const mid = Math.floor((start + end) / 2);
        const node = new Node(nodes[mid]);
        node.left = this.buildBalancedTree(nodes, start, mid - 1);
        node.right = this.buildBalancedTree(nodes, mid + 1, end);
        return node;
    }

    // Method to traverse the tree in level order
    levelOrder() {
        const result = [];
        const queue = [];
        if (this.root !== null) {
            queue.push(this.root);
        }
        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.data);
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        return result;
    }

    // Method to traverse the tree in pre-order
    preOrder() {
        const result = [];
        this.preOrderTraverse(this.root, result);
        return result;
    }

    // Helper method to traverse the tree in pre-order
    preOrderTraverse(node, result) {
        if (node !== null) {
            result.push(node.data);
            this.preOrderTraverse(node.left, result);
            this.preOrderTraverse(node.right, result);
        }
    }

    // Method to traverse the tree in post-order
    postOrder() {
        const result = [];
        this.postOrderTraverse(this.root, result);
        return result;
    }

    // Helper method to traverse the tree in post-order
    postOrderTraverse(node, result) {
        if (node !== null) {
            this.postOrderTraverse(node.left, result);
            this.postOrderTraverse(node.right, result);
            result.push(node.data);
        }
    }

    // Method to traverse the tree in in-order
    inOrder() {
        const result = [];
        this.inOrderTraverse(this.root, result);
        return result;
    }
}

// Utility function to generate an array of random numbers
function generateRandomArray(size, max) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

module.exports = { BinarySearchTree, generateRandomArray };