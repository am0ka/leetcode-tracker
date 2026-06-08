# Last updated: 6/8/2026, 11:51:49 AM
class Solution:
    def maxArea(self, height: List[int]) -> int:
        l, r = 0, len(height) - 1
        maxA = 0
        while l < r:
            area = min(height[l], height[r]) * (r - l)
            if area > maxA:
                maxA = area
            if height[l] < height[r]:
                l += 1
            else:
                r -= 1
        return maxA