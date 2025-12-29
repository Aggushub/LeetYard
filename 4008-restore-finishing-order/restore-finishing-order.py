class Solution:
    def recoverOrder(self, order: List[int], friends: List[int]) -> List[int]:
        output = []
        frndHash = {}
        for each in friends:
            frndHash[each] = 1
        for each in order:
            if each in frndHash:
                output.append(each)
        return output


        