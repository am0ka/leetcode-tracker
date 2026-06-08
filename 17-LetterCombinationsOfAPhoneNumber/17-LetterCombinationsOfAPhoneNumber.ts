// Last updated: 6/8/2026, 11:51:44 AM
function letterCombinations(digits: string): string[] {
    const dict = new Map<number, Array<string>>([
        [2, ["a", "b", "c"]],
        [3, ["d", "e", "f"]],
        [4, ["g", "h", "i"]],
        [5, ["j", "k", "l"]],
        [6, ["m", "n", "o"]],
        [7, ["p", "q", "r", "s"]],
        [8, ["t", "u", "v"]],
        [9, ["w", "x", "y", "z"]],
    ]);

    const selection = digits.split("").map(d => dict.get(Number(d)));
    const combinations = selection
        .reduce((acc, curr) => acc.
            flatMap(combo => curr.map(i => [...combo, i])),
            [[]] as string[][]);
    
    return combinations.map(c => c.join(""));
};