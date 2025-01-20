// HashMap class implementation
class HashMap {
    constructor(loadFactor = 0.75, capacity = 16) {
      // Initialize load factor and capacity, then create an array to hold the buckets.
      this.loadFactor = loadFactor;
      this.capacity = capacity;
      this.buckets = Array(this.capacity);
    }
  
    // Hash function to calculate the index for a given key
    hash(key) {
      let hashCode = 0;
      const prime = 31; // A prime number used to calculate the hash code
      for (let i = 0; i < key.length; i++) {
        // Calculate the hash code by iterating through each character of the key
        hashCode = (prime * hashCode + key.charCodeAt(i)) % this.capacity;
      }
      return hashCode; // Return the computed hash code
    }
  
    // Method to adjust the capacity of the hash map if the load factor exceeds the threshold
    adjustCapacity() {
      const numNodes = this.length(); // Get the current number of nodes
      const capacity = this.capacity;
      const increaseCapacityAt = this.loadFactor * capacity;
  
      let update = false;
      // If the number of nodes exceeds the threshold, double the capacity
      if (numNodes >= increaseCapacityAt) {
        this.capacity = capacity * 2;
        update = true;
      }
  
      if (update === false) return;
  
      // Rehash all the existing entries to the new capacity
      const oldBuckets = this.buckets;
      this.buckets = Array(this.capacity); // Create a new array with the updated capacity
      for (let i = 0; i < this.buckets.length; i++) {
        if (oldBuckets[i]) {
          // Rehash each pair from the old buckets to the new ones
          oldBuckets[i].map((pair) => this.set(pair[0], pair[1]));
        }
      }
    }
  
    // Method to add or update a key-value pair in the hash map
    set(key, value) {
      const index = this.hash(key); // Get the index using the hash function
      this.adjustCapacity(); // Check if the capacity needs to be adjusted
  
      // If the bucket at this index is empty, create a new bucket
      if (!this.buckets[index]) {
        this.buckets[index] = [[key, value]];
        return;
      }
  
      // If the key already exists, update its value
      for (let pair of this.buckets[index]) {
        if (pair[0] === key) {
          pair[1] = value;
          return;
        }
      }
  
      // If the key does not exist, add a new key-value pair
      this.buckets[index].push([key, value]);
    }
  
    // Method to retrieve the value for a given key
    get(key) {
      const index = this.hash(key); // Get the index using the hash function
      if (!this.buckets[index]) return null; // If no bucket exists at that index, return null
  
      // Search for the key in the bucket and return its value
      for (let pair of this.buckets[index]) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
  
      return null; // Return null if the key does not exist
    }
  
    // Method to check if a key exists in the hash map
    has(key) {
      const index = this.hash(key); // Get the index using the hash function
      if (!this.buckets[index]) return false; // If no bucket exists at that index, return false
  
      // Check if the key exists in the bucket
      for (let pair of this.buckets[index]) {
        if (pair[0] === key) return true;
      }
  
      return false; // Return false if the key does not exist
    }
  
    // Method to remove a key-value pair from the hash map
    remove(key) {
      if (!this.has(key)) return false; // If the key does not exist, return false
      const index = this.hash(key); // Get the index using the hash function
      const bucket = this.buckets[index];
      const length = bucket.length;
  
      // Find the key-value pair and delete it from the bucket
      for (let i = 0; i < length; i++) {
        if (bucket[i][0] === key) {
          delete bucket[i]; // Delete the pair
          // If the bucket is empty, remove the reference to it
          if (!(i in bucket)) delete this.buckets[index];
          return true;
        }
      }
    }
  
    // Method to get the total number of key-value pairs in the hash map
    length() {
      let count = 0;
      for (let i = 0; i < this.buckets.length; i++) {
        if (this.buckets[i]) {
          this.buckets[i].forEach(() => count++); // Increment the count for each pair in the bucket
        }
      }
      return count; // Return the total count of key-value pairs
    }
  
    // Method to clear all entries in the hash map
    clear() {
      for (let i = 0; i < this.buckets.length; i++) {
        delete this.buckets[i]; // Delete all buckets
      }
    }
  
    // Method to get all the keys in the hash map
    keys() {
      const keys = [];
      for (let i = 0; i < this.buckets.length; i++) {
        if (this.buckets[i]) {
          this.buckets[i].forEach((pair) => keys.push(pair[0])); // Push the key of each pair to the keys array
        }
      }
      return keys; // Return the array of keys
    }
  
    // Method to get all the values in the hash map
    values() {
      const values = [];
      for (let i = 0; i < this.buckets.length; i++) {
        if (this.buckets[i]) {
          this.buckets[i].forEach((pair) => values.push(pair[1])); // Push the value of each pair to the values array
        }
      }
      return values; // Return the array of values
    }
  
    // Method to get all the key-value pairs in the hash map
    entries() {
      const pairs = [];
      for (let i = 0; i < this.buckets.length; i++) {
        if (this.buckets[i]) {
          this.buckets[i].forEach((pair) => pairs.push(pair)); // Push each pair to the pairs array
        }
      }
      return pairs; // Return the array of key-value pairs
    }
  }
  
  // Hash function (global) to calculate the hash code for a key
  function hash(key) {
    let hashCode = 0;
    const prime = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (prime * hashCode + key.charCodeAt(i)) % 16; // Apply modulo to avoid overflow
    }
    return hashCode;
  }
  
  // Create a new instance of HashMap with a load factor of 0.75 and initial capacity of 16
  const test = new HashMap(0.75, 16);
  
  // Add some key-value pairs to the hash map
  test.set('apple', 'red');
  test.set('banana', 'yellow');
  test.set('carrot', 'orange');
  test.set('dog', 'brown');
  test.set('elephant', 'gray');
  test.set('frog', 'green');
  test.set('grape', 'purple');
  test.set('hat', 'black');
  test.set('ice cream', 'white');
  test.set('jacket', 'blue');
  test.set('kite', 'pink');
  test.set('lion', 'golden');
  test.set('moon', 'silver');
  
  // Overwrite the value of an existing key
  test.set('moon', 'gray');
  
  // Output the current state of the hash map (buckets)
  console.log(test.buckets);