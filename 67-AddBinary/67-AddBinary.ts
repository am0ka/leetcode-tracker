// Last updated: 6/8/2026, 11:51:35 AM
function addBinary(a: string, b: string): string {
    const sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
    return sum.toString(2);
};