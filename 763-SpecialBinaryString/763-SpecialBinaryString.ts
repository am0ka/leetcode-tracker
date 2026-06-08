// Last updated: 6/8/2026, 11:51:26 AM
function makeLargestSpecial(s: string): string {
    let count = 0, i = 0, res = [];

    for (let j = 0; j < s.length; j++) {
        if (s[j] === '1') count++;
        else count--;

        if (!count) {
            const inner = s.slice(i + 1, j);
            res.push('1' + makeLargestSpecial(inner) + '0');

            i = j + 1;
        }
    }

    return res.sort((a, b) => b.localeCompare(a)).join('');
};