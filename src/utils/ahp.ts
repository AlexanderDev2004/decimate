export function CalculateAHP(matrix : number[][], weights : number[]) {
    const sumcols = matrix[0].map((_, j ) => matrix.reduce((sum, row) => sum + row[j], 0));
    const normalized = matrix.map(row => row.map((val, j) => val / sumcols[j]));
    const priorities  = normalized.map(row => row.reduce((a,b) => a + b, 0) / row.length);
    return priorities;
}