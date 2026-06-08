// Last updated: 6/8/2026, 11:51:04 AM
type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    const filtered: number[] = [];
    for (let i = 0; i < arr.length; i++)
        if (fn(arr[i], i)) filtered.push(arr[i]);
    return filtered;
};