import re
class Solution:
    def validateCoupons(self, code: List[str], businessLine: List[str], isActive: List[bool]) -> List[str]:
        output = []
        priority = {"electronics":0, "grocery":1, "pharmacy":2, "restaurant":3}
        pattern = r'[A-Za-z0-9_]+'


        for i in range(0,len(code)):
            if (
                code[i] and
            re.fullmatch(pattern, code[i]) and
            businessLine[i] in priority and
            isActive[i]
            ):
                
                output.append((priority[businessLine[i]],code[i]))
        
        output.sort()
        return [c for _,c in output]