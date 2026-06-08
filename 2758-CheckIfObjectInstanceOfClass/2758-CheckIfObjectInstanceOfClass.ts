// Last updated: 6/8/2026, 11:51:02 AM
function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    if (obj === null || obj === undefined || typeof classFunction !== 'function')
        return false;
    let curr = Object.getPrototypeOf(obj);
    while (curr !== null) {
        if (curr === classFunction.prototype) return true;
        curr = Object.getPrototypeOf(curr);
    }
    return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */