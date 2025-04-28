import React from 'react';
import { calculateELECTRE } from '../utils/Electre';

const ELECTRECalculator = () => {
  const criteria = [
    { name: 'Harga', weight: 0.4, isBenefit: false },
    { name: 'Kualitas', weight: 0.3, isBenefit: true },
    { name: 'Lokasi', weight: 0.3, isBenefit: true },
  ];

  const alternatives = [
    { name: 'A', values: [80, 90, 85] },
    { name: 'B', values: [70, 95, 80] },
    { name: 'C', values: [85, 85, 75] },
  ];

  const { concordance, discordance } = calculateELECTRE(criteria, alternatives);

  return (
    <div className="p-4 border rounded-xl my-4">
      <h2 className="text-xl font-bold mb-2">ELECTRE Calculator</h2>

      <div className="my-2">
        <h3 className="font-semibold">Concordance Matrix</h3>
        <table className="table-auto border-collapse border border-gray-400 w-full text-center my-2">
          <tbody>
            {concordance.map((row, i) => (
              <tr key={i}>
                {row.map((val, j) => (
                  <td key={j} className="border border-gray-400 p-2">{val.toFixed(2)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="my-2">
        <h3 className="font-semibold">Discordance Matrix</h3>
        <table className="table-auto border-collapse border border-gray-400 w-full text-center my-2">
          <tbody>
            {discordance.map((row, i) => (
              <tr key={i}>
                {row.map((val, j) => (
                  <td key={j} className="border border-gray-400 p-2">{val.toFixed(2)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ELECTRECalculator;
