// Last updated: 6/8/2026, 11:50:46 AM
type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    const toBe = (val1: any) => {
        if (val1 === val) return true;
        else throw new Error("Not Equal");
    }
    const notToBe = (val1: any) => {
        if (val1 !== val) return true;
        else throw new Error("Equal");
    }
    return { toBe, notToBe }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */