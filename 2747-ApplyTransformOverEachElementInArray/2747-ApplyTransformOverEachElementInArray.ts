// Last updated: 6/8/2026, 11:51:03 AM
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const result: number[] = [];

    for (let i = 0; i < arr.length; i++)
        result.push(fn(arr[i], i));

    return result;
};