class Solution:
    def sortSentence(self, s: str) -> str:
        List = s.split()
        dict = {}
        for each in List:
            dict[each[-1]] = each[:-1]
        return ' '.join([dict[j] for j in sorted(dict)])
        