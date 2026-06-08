// Last updated: 6/8/2026, 11:51:50 AM
function isPalindrome(x: number): boolean {
    const s = String(x);
    for (let i = 0; i < Math.ceil(s.length / 2); i++)
        if (s[i] !== s[s.length - 1 - i]) return false;
    return true;
};