// Last updated: 6/8/2026, 11:51:48 AM
function intToRoman(num: number): string {
    const table = new Map<string, number>([
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1],
    ]);

    const result: string[] = []

    for (const [key, value] of table) {
        if (num < value) continue;
        const d = Math.trunc(num / value);
        for (let i = 0; i < d; i++) result.push(key);
        num -= value * d;
    }

    return result.join("")
};