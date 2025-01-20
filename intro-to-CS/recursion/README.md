# First up create a file and tackle the fibonacci sequence:

- Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

- Now write another function fibsRec which solves the same problem recursively.
Test both versions of your functions by passing in various lengths as arguments.
Hopefully you were able to solve the problem with recursion! If you need some help understanding what’s going on with this function, the “Test it out” section below will help. If you’re still a bit confused, there are some additional resources linked at the end of this page.

- Once you have a firm grasp on solving Fibonacci with recursion, create a new file and work on a merge sort:

- Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology. An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].
Tips:

- Think about what the base case is and what behavior is happening again and again and can actually be delegated to someone else (e.g. that same function!).
It may be helpful to check out the background videos again if you don’t quite understand what should be going on.

# Test it out
To showcase the recursive effect implemented in your Fibonacci function, do the following:

- Add the following to the start of the function:

- console.log("This was printed recursively");

- Call the function with 8 as the argument.

- If the function is implemented correctly, you should see that sentence printed around 8 

- times (keep in mind that, depending on the way you implemented the function, you may see 7 instead of 8. This isn’t a bug! It simply depends on how many times the function is actually repeated).