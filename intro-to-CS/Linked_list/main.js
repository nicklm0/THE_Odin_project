// Import the LinkedList class
const LinkedList = require('../Linked_list/LinkedList');

// Create a new instance of LinkedList
const list = new LinkedList();

// Append nodes to the linked list
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// Print the linked list to the console
console.log(list.toString()); // ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
