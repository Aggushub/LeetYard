long long comb(int n, int r) {
    if (r > n) return 0;
    if (r > n - r) r = n - r;
    long long res = 1;
    for (int i = 1; i <= r; i++) {
        res *= (n - r + i);
        res /= i;
    }
    return res;
}

long long distributeCandies(int n, int limit) {
    if (n > 3 * limit) return 0;

    long long total = comb(n + 2, 2);
    total -= 3 * comb(n - limit + 1, 2);
    total += 3 * comb(n - 2 * limit, 2);

    return total;
}
