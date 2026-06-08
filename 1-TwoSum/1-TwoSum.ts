// Last updated: 6/8/2026, 11:51:57 AM
function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < (nums.length ** 2); i++) {
        const firstIdx = Math.floor(i / nums.length);
        const secondIdx = i % nums.length;
        if (firstIdx === secondIdx) continue;
        if (nums[firstIdx] + nums[secondIdx] === target) return [firstIdx, secondIdx];
    }
};
