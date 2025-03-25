// src/utils/encoders/transposition.js

export function encodeTranspositionCipher(text, columns) {
  if (!text || isNaN(columns) || columns <= 0) {
    return "Número de colunas inválido.";
  }
  const numColumns = parseInt(columns, 10);
  const numRows = Math.ceil(text.length / numColumns);
  const grid = Array(numRows)
    .fill("")
    .map(() => Array(numColumns).fill(""));
  let k = 0;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numColumns; j++) {
      if (k < text.length) {
        grid[i][j] = text[k++];
      }
    }
  }

  let encodedText = "";
  for (let j = 0; j < numColumns; j++) {
    for (let i = 0; i < numRows; i++) {
      encodedText += grid[i][j];
    }
  }
  return encodedText;
}

export function decodeTranspositionCipher(text, columns) {
  if (!text || isNaN(columns) || columns <= 0) {
    return "Número de colunas inválido.";
  }
  const numColumns = parseInt(columns, 10);
  const numRows = Math.ceil(text.length / numColumns);
  const grid = Array(numRows)
    .fill("")
    .map(() => Array(numColumns).fill(""));
  let k = 0;

  for (let j = 0; j < numColumns; j++) {
    for (let i = 0; i < numRows; i++) {
      if (k < text.length) {
        grid[i][j] = text[k++];
      }
    }
  }

  let decodedText = "";
  k = 0;
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numColumns; j++) {
      decodedText += grid[i][j];
    }
  }
  return decodedText.replace(/\0/g, ""); // Remove possíveis caracteres nulos de padding
}
