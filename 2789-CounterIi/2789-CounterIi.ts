// Last updated: 6/8/2026, 11:50:53 AM
type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let current = init;
    const increment = () => ++current;
    const decrement = () => --current;
    const reset = () => {
        current = init;
        return current;
    }

    return { increment, decrement, reset };
};
