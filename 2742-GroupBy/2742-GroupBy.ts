// Last updated: 6/8/2026, 11:51:06 AM
interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function (fn) {
    const result = {};
    for (const item of this) {
        const key = fn(item);
        if (!result[key]) result[key] = [];
        result[key].push(item);
    }
    return result;
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */