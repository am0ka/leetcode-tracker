// Last updated: 6/8/2026, 11:51:19 AM
declare global {
    interface String {
        countBits(): number;
    }
}

String.prototype.countBits = function (this: string): number {
    let counter = 0;
    for (const ch of this) {
        if (ch === '1') counter++;
    }

    return counter;
}

function sortByBits(arr: number[]): number[] {
    return arr.sort((a, b) => a - b).sort((a, b) => {
        const aBin = (a >>> 0).toString(2);
        const bBin = (b >>> 0).toString(2);
        return aBin.countBits() - bBin.countBits();
    });
};