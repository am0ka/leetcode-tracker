// Last updated: 6/8/2026, 11:51:22 AM
function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
    const [x1, y1, x2, y2] = rec1;
    const [x3, y3, x4, y4] = rec2;
    
    if (x2 <= x3 || x4 <= x1 || y1 >= y4 || y3 >= y2) return false;
    return true;
};