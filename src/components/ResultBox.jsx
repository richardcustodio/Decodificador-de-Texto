import React from "react";

function ResultBox({ result }) {
  return (
    <div>
      <h3>Resultado:</h3>
      <textarea value={result} readOnly />
    </div>
  );
}

export default ResultBox;
