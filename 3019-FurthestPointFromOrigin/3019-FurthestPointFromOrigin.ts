// Last updated: 6/8/2026, 11:50:34 AM
function furthestDistanceFromOrigin(moves: string): number {
    const distanceL = moves
        .replace(/_/g, "L")
        .split('')
        .reduce((acc, cur) => (cur === 'L' ? acc + 1 : acc - 1), 0);
    const distanceR = moves
        .replace(/_/g, "R")
        .split('')
        .reduce((acc, cur) => (cur === 'L' ? acc + 1 : acc - 1), 0);

    return Math.max(Math.abs(distanceL), Math.abs(distanceR));
};