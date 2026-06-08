// Last updated: 6/8/2026, 11:50:52 AM
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
    let executed = false;
    return function (...args) {
        if (executed) return;
        executed = true;
        return fn(...args);
    };
}
