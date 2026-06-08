// Last updated: 6/8/2026, 11:51:39 AM
function isValidSudoku(board: string[][]): boolean {
    const seen = new Set<string>();

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const val = board[r][c];
            if (val === '.') continue;
            const rowKey = `${val} in row ${r}`;
            const colKey = `${val} in col ${c}`;
            const boxKey = `${val} in box ${Math.floor(r/3)}-${Math.floor(c/3)}`;

            if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) return false;

            seen.add(rowKey);
            seen.add(colKey);
            seen.add(boxKey);
        }
    }
    return true;
};