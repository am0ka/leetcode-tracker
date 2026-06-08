// Last updated: 6/8/2026, 11:50:43 AM
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    const bucket: Map<number, ArrayType> = new Map(
        arr1.map(obj => [obj.id, obj])
    );

    arr2.forEach((obj) => {
        if (bucket.has(obj.id))
            bucket.set(obj.id, { ...bucket.get(obj.id), ...obj });
        else
            bucket.set(obj.id, obj);
    })

    return Array.from(bucket.values()).sort((a, b) => a.id - b.id);
};