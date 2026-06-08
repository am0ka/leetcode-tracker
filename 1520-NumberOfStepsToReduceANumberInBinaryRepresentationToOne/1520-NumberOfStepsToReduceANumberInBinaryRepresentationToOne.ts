// Last updated: 6/8/2026, 11:51:17 AM
function numSteps(s: string): number {
    let steps = 0;
    let carry = 0;

    for (let i = s.length - 1; i > 0; i--) {
        const bit = parseInt(s[i]); 
        
        if (bit + carry === 1) {
            carry = 1; 
            steps += 2;
        } else {
            steps += 1;
        }
    }

    return steps + carry;
}