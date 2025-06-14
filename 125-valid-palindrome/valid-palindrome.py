import re
class Solution:
    def isPalindrome(self, s: str) -> bool:
        k = s.strip()
        a = re.sub(r'[^a-zA-Z0-9]',"",k).lower()
        return a == a[::-1]