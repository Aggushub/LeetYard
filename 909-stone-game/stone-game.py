class Solution:
    def stoneGame(self, piles: List[int]) -> bool:
        Alice = []
        Bob = []
        for i in range(0, len(piles)):
            maxi = max(piles)
            if i % 2 == 0:
                Alice.append(maxi)
            else:
                Bob.append(maxi)
            piles.remove(maxi)
        A = sum(Alice)
        B = sum(Bob)
        if A > B:
            return True
        else:
            return False
