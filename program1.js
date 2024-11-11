const getTotalIsles = function (grid) {

  let islandcount = 0;

  function dfs(grid, row, col) {
    // If out of bounds or on water, stop the search.
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] !== 'L') {
        return;
    }

    // Mark the current land as visited by changing it to 'W'.
    grid[row][col] = 'W';

    // Explore all adjacent cells (up, down, left, right).
    dfs(grid, row - 1, col); // Up
    dfs(grid, row + 1, col); // Down
    dfs(grid, row, col - 1); // Left
    dfs(grid, row, col + 1); // Right
}


};

module.exports = getTotalIsles;