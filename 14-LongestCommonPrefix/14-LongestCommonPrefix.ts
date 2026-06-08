// Last updated: 6/8/2026, 11:51:46 AM
function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0];

    for (const str of strs) {
        while (str.indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (!prefix) return "";
        }
    }

    return prefix;
};