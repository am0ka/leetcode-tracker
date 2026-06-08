// Last updated: 6/8/2026, 11:50:56 AM
function* fibGenerator(): Generator<number, any, number> {
    let curr = 0, next = 1;

    while (true) {
        yield curr;
        [curr, next] = [next, curr + next];
    }
};
