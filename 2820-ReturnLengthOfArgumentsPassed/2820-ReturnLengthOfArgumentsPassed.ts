// Last updated: 6/8/2026, 11:50:45 AM
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */