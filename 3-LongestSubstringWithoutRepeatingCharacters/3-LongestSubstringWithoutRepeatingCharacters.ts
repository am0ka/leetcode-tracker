// Last updated: 6/8/2026, 11:51:54 AM
function lengthOfLongestSubstring(s: string): number {
    const set = new Set();
    let maxCount = 0, left = 0;
    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) {
            while (s[left] != s[i]) {
                set.delete(s[left]);
                left++;
            }
            set.delete(s[left]);
            left++;
            set.add(s[i]);
        } else {
            set.add(s[i]);
            maxCount = Math.max(maxCount, i-left+1);
        }
    }
    return maxCount;
};