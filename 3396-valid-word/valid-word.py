import re
class Solution(object):
    def isValid(self, word):
        if len(word)>=3 and word.isalnum() and re.search(r'[aeiouAEIOU]',word) and re.search(r'[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]',word):
            return True
        else:
            return False
        