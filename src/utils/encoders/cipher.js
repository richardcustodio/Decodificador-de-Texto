// src/utils/encoders/cipher.js

export function encodeCaesarCipher(text, key) {
  if (!text || key === null || isNaN(key)) {
    return "";
  }
  const shift = parseInt(key, 10);
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.match(/[a-z]/i)) {
      const isUpperCase = char === char.toUpperCase();
      const base = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
      const charCode = char.charCodeAt(0);
      const shiftedCharCode =
        ((((charCode - base + shift) % 26) + 26) % 26) + base; // Garante resultado positivo para deslocamentos negativos
      char = String.fromCharCode(shiftedCharCode);
    }
    result += char;
  }
  return result;
}

export function decodeCaesarCipher(text, key) {
  if (!text || key === null || isNaN(key)) {
    return "";
  }
  const shift = parseInt(key, 10);
  return encodeCaesarCipher(text, -shift); // Decodificar é codificar com a chave negativa
}
