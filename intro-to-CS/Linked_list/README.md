# Introduction
In Computer Science, one of the most basic and fundamental data structures is the linked list, which functions similarly to an array. The principal benefit of a linked list over a conventional array is that the list elements can easily be inserted or removed without reallocation of any other elements.

- In some programming languages, the size of an array is a concern and one of the ways to overcome that problem and allow dynamically allocated data is using linked lists.

- Luckily in JavaScript, arrays aren’t limited to a certain size, and both insertion and deletion can be done trivially at any index using the appropriate built in array method, so you don’t have to think about overcoming those limitations.

- So if array size, array insertion and array deletion are not limitations in JavaScript, are linked lists really necessary? The short answer to that is no; however, it’s the simplest of the dynamic data structures and it will give you a solid foundation, so you can understand more complex data structures like graphs and binary trees with more ease.

## Structure of a linked list
A linked list is a linear collection of data elements called nodes that “point” to the next node by means of a pointer.

- Each node holds a single element of data and a link or pointer to the next node in the list.

- A head node is the first node in the list, a tail node is the last node in the list. Below is a basic representation of a linked list:

[ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> null

## For a more thorough explanation, use these resources:

- [Linked Lists in Plain English](#)
- [What’s a Linked List, Anyway?](#)
- [A more verbose explanation with plenty of diagrams](#)

## Assignment
- Running ES6 modules in Node
- Node v22 (which became LTS in October 2024) can now automatically detect ES6 modules and run them without any further configuration. If you are using ES6 modules and run into errors due to Node not recognising the syntax, make sure you update Node to the latest LTS version.

### You will need two classes or factories:

- LinkedList class / factory, which will represent the full list.
- Node class / factory, containing a value property and a nextNode property, set both as null by default.

### Build the following functions in your linked list class / factory:

- `append(value)` adds a new node containing value to the end of the list
- `prepend(value)` adds a new node containing value to the start of the list
- `size` returns the total number of nodes in the list
- `head` returns the first node in the list
- `tail` returns the last node in the list
- `at(index)` returns the node at the given index
- `pop` removes the last element from the list
- `contains(value)` returns true if the passed in value is in the list and otherwise returns false.
- `find(value)` returns the index of the node containing value, or null if not found.
- `toString` represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: `( value ) -> ( value ) -> ( value ) -> null`

## Extra credit
- `insertAt(value, index)` that inserts a new node with the provided value at the given index.
- `removeAt(index)` that removes the node at the given index.
- Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.

## Test it out
Let’s test out the Linked List you made!

- Create a `main.js` file and make sure it imports your LinkedList class or factory. This is where we’ll test the list.

Create an instance of your LinkedList and populate it with nodes:
````
// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
````

- Add `console.log(list.toString());` to the end of the file and run it.
If everything is working, the output should be:
`````
( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
Feel free to use different values to test if you like.