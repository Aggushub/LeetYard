class Solution:
    def finalValueAfterOperations(self, operations: List[str]) -> int:
        X = 0
        for each in operations:
            if "++" in each:
                X+=1
            else:
                X-=1
        return X
        