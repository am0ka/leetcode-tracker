// Last updated: 6/8/2026, 11:51:13 AM
function pivotArray(nums: number[], pivot: number): number[] {
    const less: number[] = [];
    const more: number[] = [];
    const equal: number[] = [];

    for (const n of nums) {
        if (n < pivot) less.push(n);
        else if (n > pivot) more.push(n);
        else equal.push(n);
    }

    return [...less, ...equal, ...more];
};