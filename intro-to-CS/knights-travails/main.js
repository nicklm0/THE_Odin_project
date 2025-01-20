function knightMoves(start, end) {
    // Knight's possible moves
    const moves = [
      [2, 1], [2, -1], [-2, 1], [-2, -1],  // Two squares in one direction
      [1, 2], [1, -2], [-1, 2], [-1, -2]   // One square in one direction
    ];
  
    // Check if a position is within the bounds of the board (0 <= x, y < 8)
    function isValid([x, y]) {
      return x >= 0 && y >= 0 && x < 8 && y < 8;
    }
  
    // BFS setup
    let queue = [[start]];
    let visited = new Set();
    visited.add(start.toString());  // Add the start position to visited set
    
    while (queue.length > 0) {
      let path = queue.shift();  // Get the next path in the queue
      let [x, y] = path[path.length - 1];  // Get the current position
  
      // If we've reached the end, return the path
      if (x === end[0] && y === end[1]) {
        console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
        console.log(path);
        return path;
      }
  
      // Explore all possible knight moves
      for (let [dx, dy] of moves) {
        let nextPos = [x + dx, y + dy];
        if (isValid(nextPos) && !visited.has(nextPos.toString())) {
          visited.add(nextPos.toString());
          queue.push([...path, nextPos]);  // Add new path with the new position
        }
      }
    }
  
    return [];  // Return an empty array if there's no valid path (shouldn't happen)
  }
  
  // Example usage
  knightMoves([0, 0], [7, 7]);  // Finds the shortest path from [0,0] to [7,7]
  