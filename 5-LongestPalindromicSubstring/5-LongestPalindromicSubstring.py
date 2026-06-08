# Last updated: 6/8/2026, 11:51:52 AM
class Solution:
    def longestPalindrome(self, s: str) -> str:
        if not s:
            return ""
        
        res = ""
        
        for i in range(len(s)):
            tmp = self.expand(s, i, i)
            if len(tmp) > len(res):
                res = tmp
                
            tmp = self.expand(s, i, i + 1)
            if len(tmp) > len(res):
                res = tmp
        
        return res

    def expand(self, s, l, r):
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
        return s[l + 1:r]