## Tie it all together

### Driver Script

Follow these steps to test your Binary Search Tree implementation:

1. **Create a Binary Search Tree**:
   - Generate an array of random numbers less than 100.
   - Create a binary search tree from this array.
   - (Optional) You can create a function that returns an array of random numbers every time you call it.

2. **Check if the Tree is Balanced**:
   - Confirm that the tree is balanced by calling `isBalanced`.

3. **Print Tree Elements**:
   - Print out all elements in level order, pre-order, post-order, and in-order.

4. **Unbalance the Tree**:
   - Add several numbers greater than 100 to the tree.

5. **Check if the Tree is Unbalanced**:
   - Confirm that the tree is unbalanced by calling `isBalanced`.

6. **Rebalance the Tree**:
   - Balance the tree by calling `rebalance`.

7. **Confirm the Tree is Balanced**:
   - Confirm that the tree is balanced by calling `isBalanced`.

8. **Print Tree Elements Again**:
   - Print out all elements in level order, pre-order, post-order, and in-order.

### Example Code

Here is an example of how you might implement the driver script:

```javascript
// Example driver script
const tree = new BinarySearchTree(generateRandomArray(10, 100));

console.log("Is the tree balanced?", tree.isBalanced());
console.log("Level order:", tree.levelOrder());
console.log("Pre-order:", tree.preOrder());
console.log("Post-order:", tree.postOrder());
console.log("In-order:", tree.inOrder());

tree.insert(150);
tree.insert(200);
tree.insert(250);

console.log("Is the tree balanced after adding elements > 100?", tree.isBalanced());

tree.rebalance();

console.log("Is the tree balanced after rebalancing?", tree.isBalanced());
console.log("Level order:", tree.levelOrder());
console.log("Pre-order:", tree.preOrder());
console.log("Post-order:", tree.postOrder());
console.log("In-order:", tree.inOrder());
```