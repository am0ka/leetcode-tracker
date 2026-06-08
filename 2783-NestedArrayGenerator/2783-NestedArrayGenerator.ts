// Last updated: 6/8/2026, 11:50:55 AM
type MultidimensionalArray = (MultidimensionalArray | number)[]

function* inorderTraversal(arr: MultidimensionalArray): Generator<number, void, unknown> {
    for (const el of arr) {
        if (Array.isArray(el)) yield* inorderTraversal(el);
        else yield el;
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */