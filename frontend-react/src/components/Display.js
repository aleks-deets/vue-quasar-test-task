import React, { useState } from "react";

function MatrixTable({ matrix }) {
  return (
    <table>
      <tbody class="bg-green-100">
        {matrix.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Display({ matrix }) {
  const [matrixInner, setMatrixInner] = useState([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);

  return (
    <div>
      <MatrixTable matrix={matrix} />
    </div>
  );
}
