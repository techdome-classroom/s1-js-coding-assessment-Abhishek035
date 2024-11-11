const getTotalIsles = function (grid) {

  let islandcount = 0;

  function dfs(grid, row, col) {
    // If out of bounds or on water, stop the search.
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] !== 'L') {
        return;
    }

    grid[row][col] = 'W';

    dfs(grid, row - 1, col); // Up
    dfs(grid, row + 1, col); // Down
    dfs(grid, row, col - 1); // Left
    dfs(grid, row, col + 1); // Right
}
for (let row = 0; row < grid.length; row++) {
  for (let col = 0; col < grid[0].length; col++) {
      // If the cell is land ('L'), it's a new island.
      if (grid[row][col] === 'L') {
          islandCount++;
          dfs(grid, row, col); // Mark all connected land as visited.
      }
  }
}

return islandCount;
};

module.exports = getTotalIsles;