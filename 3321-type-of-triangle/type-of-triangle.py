class Solution:
    def triangleType(self, nums: List[int]) -> str:
        a = nums[0]
        b = nums[1]
        c = nums[2]

        if a==b==c:
            return "equilateral"
        elif int(a+b)>c and int(b+c)>a and int(c+a)>b :
            if a==b or b==c or c==a:
                return "isosceles"
            else:
                return "scalene"
        else:
            return "none"

            