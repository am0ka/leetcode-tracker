// Last updated: 6/8/2026, 11:51:11 AM
type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const memory: Map<string, number> = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        const value = memory.get(key) ?? fn(...args);
        memory.set(key, value);
        return value;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */