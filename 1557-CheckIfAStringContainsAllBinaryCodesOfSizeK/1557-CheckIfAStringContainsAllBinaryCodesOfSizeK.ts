// Last updated: 6/8/2026, 11:51:16 AM
function hasAllCodes(s, k) {
    const all = new Set();
    const req = 1 << k;
    const mask = req - 1;
    let cur = 0;
    for (let i = 0; i < s.length; i++) {
        cur = ((cur << 1) | parseInt(s[i])) & mask;
        if (i >= k - 1) all.add(cur);
        if (all.size === req) return true;
    }
    return false;
};
