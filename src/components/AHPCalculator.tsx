import React, { useState } from 'react';

const AHPCalculator = () => {
  const [matrix, setMatrix] = useState<number[][]>([
    [4, 2, 4],
    [0.5, 1, 3],
    [0.25, 0.33, 1],
  ]);

  const calculate = () => {
    const sumCols = matrix[0].map((_, j) => matrix.reduce((sum, row) => sum + row[j], 0));
    const normalized = matrix.map(row => row.map((val, j) => val / sumCols[j]));
    const priorities = normalized.map(row => row.reduce((a, b) => a + b, 0) / row.length);
    return priorities;
  };

  const priorities = calculate();

  return (
    <div className="p-4 border rounded-xl my-4">
      <h2 className="text-xl font-bold mb-2">AHP Calculator</h2>
      <div>
        <p>Priorities:</p>
        <ul>
          {priorities.map((p, i) => (
            <li key={i}>Kriteria {i + 1}: {p.toFixed(4)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AHPCalculator;
