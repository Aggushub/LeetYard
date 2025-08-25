class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for each in s:
            if len(stack) == 0:
                stack.append(each)
                continue
            else:
                if each == ")" and stack[-1] == "(":
                    stack.pop()
                elif each == "}" and stack[-1] == "{":
                    stack.pop()
                elif each == "]" and stack[-1] == "[":
                    stack.pop()
                else:
                    stack.append(each)
        return len(stack) == 0



        