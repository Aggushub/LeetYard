class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        # find the max index of the list
        maximum = len(digits) - 1
        digits[maximum] += 1
        # if the last digit doesn't exceed 10, return as no further action needed
        if digits[maximum] < 10:
            return digits
        else:
            # loop through the entire list to see if need to + 1 to the index before
            while maximum > 0:
                if digits[maximum] == 10:
                    digits[maximum] = 0
                    maximum -= 1
                    digits[maximum] += 1
                else:
                    # moment that it's not required ie numbers like 9099, can just return.
                    return digits
        
        if digits[0] == 10:
            digits[0] = 0
            digits.insert(0, 1)
        return digits