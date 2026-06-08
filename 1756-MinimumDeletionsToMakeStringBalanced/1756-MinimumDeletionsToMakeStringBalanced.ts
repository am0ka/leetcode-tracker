// Last updated: 6/8/2026, 11:51:15 AM
function minimumDeletions(s: string): number {
    let numB = 0, count = 0;
    for (const c of s) {
        if (c === 'b') numB++;
        else count = Math.min(count + 1, numB);
    }
    return count;
};