import React from 'react';

const WSMCalculator = () => {
  const criteria = [
    { name: 'Harga', weight: 0.4 },
    { name: 'Kualitas', weight: 0.3 },
    { name: 'Lokasi', weight: 0.3 },
  ];

  const alternatives = [
    { name: 'A', values: [80, 90, 85] },
    { name: 'B', values: [70, 95, 80] },
    { name: 'C', values: [85, 85, 75] },
  ];

  const calculateWSM = () => {
    return alternatives.map(alt => {
      const score = alt.values.reduce((sum, val, i) => sum + val * criteria[i].weight, 0);
      return { ...alt, score };
    });
  };

  const results = calculateWSM();

  return (
    <div className="p-4 border rounded-xl my-4">
      <h2 className="text-xl font-bold mb-2">WSM Calculator</h2>
      <ul>
        {results.map((alt, i) => (
          <li key={i}>{alt.name}: {alt.score.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default WSMCalculator;
