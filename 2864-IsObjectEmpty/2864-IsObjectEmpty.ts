// Last updated: 6/8/2026, 11:50:33 AM
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    if (obj && !Object.keys(obj).length)
        return true;
    return false;
};