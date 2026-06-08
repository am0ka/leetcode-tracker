// Last updated: 6/8/2026, 11:51:47 AM
function romanToInt(s: string): number {
    const table = new Map<string, number>([
        ["M", 1000],
        ["D", 500],
        ["C", 100],
        ["L", 50],
        ["X", 10],
        ["V", 5],
        ["I", 1],
    ]);

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const curr = table.get(s[i])!;
        const next = table.get(s[i + 1]);

        if (next && curr < next) result -= curr;
        else result += curr;
    }

    return result;
};