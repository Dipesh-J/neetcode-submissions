class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Row level Check
        for (let i = 0; i < board.length; i++) {
            const uniqueRow = new Set();
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] != ".") {
                    if (uniqueRow.has(board[i][j])) return false;
                    else uniqueRow.add(board[i][j]);
                }
            }
        }
        // Column level Check
        for (let col = 0; col < 9; col++) {
        const uniqueCol = new Set();

            for (let row = 0; row < 9; row++) {
                const value = board[row][col];
                if (value != ".") {
                    if (uniqueCol.has(value)) return false;
                    else uniqueCol.add(value);
                }
            }
        }
        // Grid level Check
        for (let boxRow = 0; boxRow < 9; boxRow += 3) {
            for (let boxCol = 0; boxCol < 9; boxCol += 3) {
                const seen = new Set();

                for (let row = 0; row < 3; row++) {
                    for (let col = 0; col < 3; col++) {
                        const value = board[boxRow + row][boxCol + col];

                        if (value !== ".") {
                            if (seen.has(value)) return false;
                            seen.add(value);
                        }
                    }
                }
            }
        }
        return true;
    }
}
