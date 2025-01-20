/*
Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

- Now write another function fibsRec which solves the same problem recursively.
Test both versions of your functions by passing in various lengths as arguments.
Hopefully you were able to solve the problem with recursion! If you need some help understanding what’s going on with this function, the “Test it out” section below will help. If you’re still a bit confused, there are some additional resources linked at the end of this page.
*/

function fibs(n) {
  const result = [0, 1];
  if (n <= 0) return [];
  if (n === 1) return [0];
  
  for (let i = 2; i < n; i++) {
    result.push(result[i-1] + result[i-2]);
  }
  return result;
}

function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  
  const sequence = fibsRec(n - 1);
  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  return sequence;
}

// Test the functions
console.log(fibs(8));    // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]




