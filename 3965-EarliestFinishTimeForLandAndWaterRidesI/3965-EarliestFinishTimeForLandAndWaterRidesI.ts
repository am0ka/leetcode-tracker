// Last updated: 6/8/2026, 11:50:35 AM
function earliestFinishTime(landStartTime: number[], landDuration: number[], waterStartTime: number[], waterDuration: number[]): number {
    const n = landStartTime.length;
    const m = waterStartTime.length;
    let result = Infinity;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const land = landStartTime[i] + landDuration[i];
            const water = waterStartTime[j] + waterDuration[j];

            const landWater = Math.max(land, waterStartTime[j]) + waterDuration[j];
            const waterLand = Math.max(water, landStartTime[i]) + landDuration[i];

            result = Math.min(result, landWater, waterLand);
        }
    }

    return result;
};