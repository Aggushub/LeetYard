var decodeMessage = function(key, message) {
    key = key.replaceAll(" ", "");
    let hash = {};
    let ask = 97;
    let i = 0;
    let Output = "";

    while (ask < 123 && i < key.length){
        let char = String.fromCharCode(ask);
        if (!(key[i] in hash)){
            hash[key[i]] = char;
            ask++;
        }
        i++;
    }

    for (let each of message){
        if (each == " "){
            Output += " ";
        }
        else{
            Output += hash[each];
        }
    }
    return Output; 
    
};