// Last updated: 6/8/2026, 11:51:27 AM
function hasAlternatingBits(n: number): boolean {
    const arr = n.toString(2).split('').map(n => Number(n));
    let prev = 0;
    for (const n of arr) {
        if (n === prev) return false;
        prev = n;
    }
    return true
};