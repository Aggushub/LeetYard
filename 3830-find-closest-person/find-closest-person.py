class Solution:
    def findClosest(self, x: int, y: int, z: int) -> int:
        xd = abs(z - x)
        yd = abs(z - y)

        if xd == yd:
            return 0
        elif xd < yd:
            return 1
        else:
            return 2
