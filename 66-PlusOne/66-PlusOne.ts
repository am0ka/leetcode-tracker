// Last updated: 6/8/2026, 11:51:36 AM
function plusOne(digits: number[]): number[] {
    let rem = digits.at(-1) === 9 ? 1 : 0;
    const result = [rem ? 0 : digits.at(-1) + 1];
    for (let i = digits.length - 2; i >= 0; i--) {
        if (digits[i] + rem > 9) {
            result.push(0);
        } else {
            result.push(digits[i] + rem);
            rem = 0; 
        }
    }
    if (rem) result.push(rem);
    return result.toReversed();
};