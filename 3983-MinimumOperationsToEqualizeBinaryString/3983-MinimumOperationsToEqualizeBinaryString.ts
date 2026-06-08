// Last updated: 6/8/2026, 11:50:38 AM
function minOperations(s, k) {
    const n = s.length;
    let startZ = 0;
    for (let i = 0; i < n; i++) if (s[i] === '0') startZ++;

    if (startZ === 0) return 0;

    const jump = new Int32Array(n + 2);
    for (let i = 0; i <= n; i++) {
        jump[i] = i + 2;
    }

    const dist = new Int32Array(n + 1).fill(-1);
    const queue = new Int32Array(n + 1);
    let head = 0, tail = 0;

    queue[tail++] = startZ;
    dist[startZ] = 0;

    while (head < tail) {
        const currZ = queue[head++];
        const d = dist[currZ];

        const iMin = Math.max(0, k - (n - currZ));
        const iMax = Math.min(currZ, k);

        const nextMin = currZ + k - 2 * iMax;
        const nextMax = currZ + k - 2 * iMin;

        let cur = nextMin;
        while (cur <= nextMax) {
            if (dist[cur] === -1) {
                dist[cur] = d + 1;
                if (cur === 0) return d + 1;
                queue[tail++] = cur;
            }

            let next = jump[cur];
            jump[cur] = Math.max(jump[cur], nextMax + 2); 
            cur = next;
        }
    }

    return -1;
}