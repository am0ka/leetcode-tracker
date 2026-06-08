// Last updated: 6/8/2026, 11:51:01 AM
type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    if (!n) return arr;
    const result = [];

    for (const el of arr) {
        if (typeof el === 'object')
            result.push(...el);
        else result.push(el);
    }
    if (result.some((el) => typeof el === 'object'))
        return flat(result, n - 1);
    return result;
};