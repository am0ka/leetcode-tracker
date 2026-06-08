// Last updated: 6/8/2026, 11:50:41 AM
type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    const resArr = await Promise.all([promise1, promise2]);
    return resArr.reduce((acc, cur) => acc + cur, 0);
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */