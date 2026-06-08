// Last updated: 6/8/2026, 11:51:53 AM
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged = [...nums1, ...nums2].toSorted((a, b) => a - b);
    if (!merged.length) return 0;
    const half = merged.length / 2;
    if (merged.length % 2 === 0) {
        return (merged[half - 1] + merged[half]) / 2;
    }
    return merged[Math.floor(half)];
};