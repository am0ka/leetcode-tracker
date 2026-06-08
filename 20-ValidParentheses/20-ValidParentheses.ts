// Last updated: 6/8/2026, 11:51:43 AM
function isValid(s: string): boolean {
    const stack: string[] = [];
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (const c of s) {
        if (brackets[stack.at(-1)] === c)
            stack.pop();
        else
            stack.push(c);
    }

    return !stack.length;
};