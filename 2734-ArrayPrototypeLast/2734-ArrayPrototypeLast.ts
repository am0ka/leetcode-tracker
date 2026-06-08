// Last updated: 6/8/2026, 11:51:08 AM
interface Array<T> {
    last(): T | -1;
}

Array.prototype.last = function() {
    if (this.length < 1) return -1;
    return this.at(-1);
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
