// Last updated: 6/8/2026, 11:50:57 AM
class TimeLimitedCache {

    private data = new Map<number, number>;
    private due = new Map<number, number>;
    constructor() {
    }

    private checkExpiry() {
        const now = Date.now();
        this.due.forEach((value, key) => {
            if (now >= value) this.data.delete(key);
        });
    }

    set(key: number, value: number, duration: number): boolean {
        this.checkExpiry();
        const exists = !!this.data.get(key);
        this.data.set(key, value);
        this.due.set(key, Date.now() + duration);
        return exists;
    }

    get(key: number): number {
        this.checkExpiry();
        return this.data.get(key) ?? -1;
    }

    count(): number {
        this.checkExpiry();
        return this.data.size;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */