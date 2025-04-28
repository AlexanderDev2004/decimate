import type { Criterion, Alternative } from '../types/spk';

export function calculateELECTRE(criteria: Criterion[], alternatives: Alternative[]) {
  const n = alternatives.length;
  const m = criteria.length;
  
  // Matriks Concordance
  const concordance: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
  // Matriks Discordance
  const discordance: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  // Hitung matriks
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;

      let c_sum = 0;
      let d_max = 0;
      let d_diff = 0;
      let maxDiff = 0;

      for (let k = 0; k < m; k++) {
        if (alternatives[i].values[k] >= alternatives[j].values[k]) {
          c_sum += criteria[k].weight;
        }
        const diff = Math.abs(alternatives[i].values[k] - alternatives[j].values[k]);
        d_diff = Math.max(d_diff, diff);
        maxDiff = Math.max(maxDiff, diff);
      }

      concordance[i][j] = c_sum;
      discordance[i][j] = d_diff / (maxDiff || 1);
    }
  }

  return { concordance, discordance };
}
