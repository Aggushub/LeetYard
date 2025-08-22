bool isPowerOfThree(int n) {
    if (n <= 0 || n%2 == 0)
    return false;
    while(n!=1){
        if (n%3!=0)
        return false;
        else
        n/=3;
    }
    return true;
    
}