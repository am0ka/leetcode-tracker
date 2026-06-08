// Last updated: 6/8/2026, 11:51:37 AM
function lengthOfLastWord(s: string): number {
    return s.trim().match(/\b\w+\b/g).at(-1).length;
};