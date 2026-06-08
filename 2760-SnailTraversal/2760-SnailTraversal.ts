// Last updated: 6/8/2026, 11:50:59 AM
interface Array<T> {
    snail(rowsCount: number, colsCount: number): number[][];
}


Array.prototype.snail = function (rowsCount: number, colsCount: number): number[][] {
    if (rowsCount * colsCount !== this.length) return [];
    const emptyMatrix = new Array(rowsCount).fill(0).map(_ => []);
    const x = (idx) => Math.floor(idx / rowsCount) % 2 ? rowsCount - idx % rowsCount - 1 : idx % rowsCount;
    const y = (idx) => Math.floor(idx / rowsCount);
    return this.reduce((acc, num, idx) => (acc[x(idx)][y(idx)] = num) && acc, emptyMatrix);
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */