// Last updated: 6/8/2026, 11:50:58 AM
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    if (!nums.length) return init;
    const [first, ...rest] = nums;
    return reduce(rest, fn, fn(init, first));
};