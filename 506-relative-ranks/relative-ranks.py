class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        n = len(score)
        placements = [""] * n
        sorted_score = sorted(score,reverse=True)
        score_hash = {}
        for i in range(0,n):
            if i == 0:
                score_hash[sorted_score[i]] = "Gold Medal"
            elif i == 1:
                score_hash[sorted_score[i]] = "Silver Medal"
            elif i == 2:
                score_hash[sorted_score[i]] = "Bronze Medal"
            else:
                score_hash[sorted_score[i]] = str(i+1)
        for i in range(n):
            placements[i] = score_hash[score[i]]
        return placements