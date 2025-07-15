import re
class Solution:
    def isValid(self, word: str) -> bool:
        if len(word)<3:
            return False
        if not word.isalnum():
            return False
        if not re.search(r'[aeiouAEIOU]',word):
            return False
        if not re.search(r'[bcdfghjklmnpqrstwxyzBCDFGHJKLMNPQRSTWXYZ]',word):
            return False

        return True