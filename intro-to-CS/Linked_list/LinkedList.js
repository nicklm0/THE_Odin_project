// Node class represents each element in the linked list
class Node {
    constructor(value = null, nextNode = null) {
        this.value = value; // The value stored in the node
        this.nextNode = nextNode; // Pointer to the next node in the list
    }
}

// LinkedList class represents the entire linked list
class LinkedList {
    constructor() {
        this.headNode = null; // The first node in the list
    }

    // Adds a new node containing value to the end of the list
    append(value) {
        const newNode = new Node(value);
        if (!this.headNode) {
            this.headNode = newNode;
            return;
        }
        let current = this.headNode;
        while (current.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }

    // Adds a new node containing value to the start of the list
    prepend(value) {
        const newNode = new Node(value, this.headNode);
        this.headNode = newNode;
    }

    // Returns the total number of nodes in the list
    size() {
        let count = 0;
        let current = this.headNode;
        while (current) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    // Returns the first node in the list
    head() {
        return this.headNode;
    }

    // Returns the last node in the list
    tail() {
        let current = this.headNode;
        while (current && current.nextNode) {
            current = current.nextNode;
        }
        return current;
    }

    // Returns the node at the given index
    at(index) {
        let count = 0;
        let current = this.headNode;
        while (current) {
            if (count === index) {
                return current;
            }
            count++;
            current = current.nextNode;
        }
        return null;
    }

    // Removes the last element from the list
    pop() {
        if (!this.headNode) return null;
        if (!this.headNode.nextNode) {
            const poppedNode = this.headNode;
            this.headNode = null;
            return poppedNode;
        }
        let current = this.headNode;
        while (current.nextNode && current.nextNode.nextNode) {
            current = current.nextNode;
        }
        const poppedNode = current.nextNode;
        current.nextNode = null;
        return poppedNode;
    }

    // Returns true if the passed in value is in the list, otherwise returns false
    contains(value) {
        let current = this.headNode;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    // Returns the index of the node containing value, or null if not found
    find(value) {
        let index = 0;
        let current = this.headNode;
        while (current) {
            if (current.value === value) {
                return index;
            }
            index++;
            current = current.nextNode;
        }
        return null;
    }

    // Represents the LinkedList objects as strings
    toString() {
        let result = '';
        let current = this.headNode;
        while (current) {
            result += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        return result + 'null';
    }

    // Inserts a new node with the provided value at the given index
    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        }
        const previousNode = this.at(index - 1);
        if (!previousNode) return;
        const newNode = new Node(value, previousNode.nextNode);
        previousNode.nextNode = newNode;
    }

    // Removes the node at the given index
    removeAt(index) {
        if (index === 0 && this.headNode) {
            this.headNode = this.headNode.nextNode;
            return;
        }
        const previousNode = this.at(index - 1);
        if (!previousNode || !previousNode.nextNode) return;
        previousNode.nextNode = previousNode.nextNode.nextNode;
    }
}

module.exports = LinkedList;
