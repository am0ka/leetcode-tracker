// Last updated: 6/8/2026, 11:51:14 AM
function minOperations(s: string): number {
    let count = 0, n = s.length;
    for (let i = 0; i < n; i++)
        if (parseInt(s[i]) ^ (i & 1)) count++;

    return Math.min(count, n - count);
};