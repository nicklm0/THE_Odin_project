const LinkedList = require('./LinkedList');

// Create a new instance of LinkedList
const list = new LinkedList();

// Test append method
list.append("dog");
list.append("cat");
list.append("parrot");
console.log(list.toString()); // ( dog ) -> ( cat ) -> ( parrot ) -> null

// Test prepend method
list.prepend("hamster");
console.log(list.toString()); // ( hamster ) -> ( dog ) -> ( cat ) -> ( parrot ) -> null

// Test size method
console.log(list.size()); // 4

// Test head method
console.log(list.head().value); // hamster

// Test tail method
console.log(list.tail().value); // parrot

// Test at method
console.log(list.at(2).value); // cat

// Test pop method
list.pop();
console.log(list.toString()); // ( hamster ) -> ( dog ) -> ( cat ) -> null

// Test contains method
console.log(list.contains("dog")); // true
console.log(list.contains("parrot")); // false

// Test find method
console.log(list.find("cat")); // 2
console.log(list.find("parrot")); // null

// Test insertAt method
list.insertAt("snake", 1);
console.log(list.toString()); // ( hamster ) -> ( snake ) -> ( dog ) -> ( cat ) -> null

// Test removeAt method
list.removeAt(1);
console.log(list.toString()); // ( hamster ) -> ( dog ) -> ( cat ) -> null
