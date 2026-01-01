class Solution:
    def decodeMessage(self, key: str, message: str) -> str:
        Output = ""
        key = key.replace(" ","")
        ASCII = 97
        i = 0
        hash = {}
        while ASCII < 123 and i < len(key):
            if key[i] not in hash:
                char = chr(ASCII)
                hash[key[i]] = char
                ASCII += 1
            i += 1

        for i in range(0,len(message)):
            
                if message[i] == " ":
                    Output += " "
                else: 
                    Output += hash[message[i]]
        
        return Output