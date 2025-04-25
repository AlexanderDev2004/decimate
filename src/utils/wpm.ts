import type { Criterion, Alternative } from '../types/spk';

export function calculateWPM(criteria: Criterion[], alternatives: Alternative[]) {
  return alternatives.map(alt => ({
    name: alt.name,
    score: alt.values.reduce((prod, val, i) => prod * Math.pow(val, criteria[i].weight), 1),
  }));
}
