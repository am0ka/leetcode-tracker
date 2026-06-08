# Last updated: 6/8/2026, 11:51:42 AM
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        res = set(nums)

        nums[:] = sorted(list(res))
        return len(res)