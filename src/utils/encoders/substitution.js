// src/utils/encoders/substitution.js

export function encodeSubstitutionCipher(text, alphabet) {
  if (!text || !alphabet || alphabet.length !== 26) {
    return "Alfabeto de substituição inválido (deve ter 26 caracteres).";
  }
  let result = "";
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowerAlphabet = alphabet.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const lowerChar = char.toLowerCase();
    const index = standardAlphabet.indexOf(lowerChar);

    if (index !== -1) {
      const substitutedChar = lowerAlphabet[index];
      result +=
        char === lowerChar ? substitutedChar : substitutedChar.toUpperCase();
    } else {
      result += char; // Mantém caracteres não alfabéticos
    }
  }
  return result;
}

export function decodeSubstitutionCipher(text, alphabet) {
  if (!text || !alphabet || alphabet.length !== 26) {
    return "Alfabeto de substituição inválido (deve ter 26 caracteres).";
  }
  let result = "";
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowerAlphabet = alphabet.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const lowerChar = char.toLowerCase();
    const index = lowerAlphabet.indexOf(lowerChar);

    if (index !== -1) {
      const originalChar = standardAlphabet[index];
      result += char === lowerChar ? originalChar : originalChar.toUpperCase();
    } else {
      result += char; // Mantém caracteres não alfabéticos
    }
  }
  return result;
}
