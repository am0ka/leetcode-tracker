// Last updated: 6/8/2026, 11:50:50 AM
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    const len = arr.length;
    if (!len) return [];

    return Array.from({ length: Math.ceil(len / size) }).map((_, idx) => {
        const curPointer = idx * size;
        return arr.slice(curPointer, curPointer + size);
    })
};
