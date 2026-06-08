// Last updated: 6/8/2026, 11:51:24 AM
function partitionLabels(s: string): number[] {
    const lastOccurence: Record<string, number> = {};
    
    for (let i = 0; i < s.length; i++)
        lastOccurence[s[i]] = i;
    
    const result = [];
    let start = 0;
    let end = 0;
    
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, lastOccurence[s[i]]);
        if (i === end) {
            result.push(end - start + 1);
            start = i + 1;
        }
    }
    
    return result;
};