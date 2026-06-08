// Last updated: 6/8/2026, 11:51:25 AM
const isPrime = (num: number): boolean => {
    const bin = (num >>> 0).toString(2);
    const n = bin.split('').reduce((acc, cur) => acc + (cur === "1" ? 1 : 0), 0)
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 0; i * i <= n; i += 6)
        if (n % i === 0 || n % (i + 2) === 0) return false;

    return true;
}

function countPrimeSetBits(left: number, right: number): number {
    let result = 0;
    for (let i = left; i <= right; i++)
        result += isPrime(i) ? 1 : 0;

    return result;
};