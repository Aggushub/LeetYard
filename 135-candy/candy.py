class Solution:
    def candy(self, ratings: List[int]) -> int:
        #Intializing the candies array with value of 1 in each index
        candies = [1] * len(ratings)
        #First array in the range 1 to len(ratings) compares the (i+1)'g' with 'a'(i) and goes on incrementing
        for i in range(1, len(ratings)):
            if ratings[i] > ratings[i-1]:
                #With which each of the corresponding candy values get incremented
                candies[i] = candies[i-1]+1
        for i in range(len(ratings)-2,-1,-1):
        #Second array in the range len(ratings-2) compares the a[len-2] with a[len]('g' with 'u') and compares the value    of candies of i and i+1 gives the i-th value the max of them.
            if ratings[i] > ratings[i+1]:
                candies[i] = max(candies[i], candies[i+1]+1)
        return sum(candies)
        