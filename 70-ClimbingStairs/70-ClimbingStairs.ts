// Last updated: 6/8/2026, 11:51:34 AM
function climbStairs(n: number): number {
    if (n === 1) return 1;

    let prev2 = 1;
    let prev1 = 1;
    let curr = 0;

    for (let i = 2; i <= n; i++) {
        curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }

    return curr;
};