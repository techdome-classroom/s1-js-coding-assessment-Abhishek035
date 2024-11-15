const getTotalIsles = function (grid) {

  
  function dfs(grid, row, col) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] !== "L") {
      return;
    }
    
    grid[row][col] = "W";
    
    dfs(grid, row - 1, col);
    dfs(grid, row + 1, col);
    dfs(grid, row, col - 1);
    dfs(grid, row, col + 1);
  }
  
  let islandcount = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "L") {
        islandcount++;
        dfs(grid, row, col);
      }
    }
  }

  return islandcount;
};

module.exports = getTotalIsles;