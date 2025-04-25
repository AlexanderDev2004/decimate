import type { Criterion, Alternative } from '../types/spk';

export function calculateWSM(criteria: Criterion[], alternatives: Alternative[]) {
  return alternatives.map(alt => ({
    name: alt.name,
    score: alt.values.reduce((sum, val, i) => sum + val * criteria[i].weight, 0),
  }));
}
