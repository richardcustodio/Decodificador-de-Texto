// src/utils/encoders/atbash.js

export function encodeAtbashCipher(text) {
  if (!text) {
    return "";
  }
  let result = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const reversedAlphabet = "zyxwvutsrqponmlkjihgfedcba";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const lowerChar = char.toLowerCase();
    const index = alphabet.indexOf(lowerChar);

    if (index !== -1) {
      const substitutedChar = reversedAlphabet[index];
      result +=
        char === lowerChar ? substitutedChar : substitutedChar.toUpperCase();
    } else {
      result += char; // Mantém caracteres não alfabéticos
    }
  }
  return result;
}

// A decodificação é a mesma que a codificação para a Cifra de Atbash
export const decodeAtbashCipher = encodeAtbashCipher;
