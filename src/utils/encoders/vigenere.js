// src/utils/encoders/vigenere.js

export function encodeVigenereCipher(text, key) {
  if (!text || !key) {
    return "";
  }
  let result = "";
  const keyLength = key.length;
  let keyIndex = 0;

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.match(/[a-z]/i)) {
      const isUpperCase = char === char.toUpperCase();
      const base = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
      const charCode = char.charCodeAt(0);
      const keyChar = key[keyIndex % keyLength];
      const keyCharCode =
        keyChar.toLowerCase().charCodeAt(0) - "a".charCodeAt(0);
      const shiftedCharCode =
        ((((charCode - base + keyCharCode) % 26) + 26) % 26) + base;
      char = String.fromCharCode(shiftedCharCode);
      keyIndex++;
    }
    result += char;
  }
  return result;
}

export function decodeVigenereCipher(text, key) {
  if (!text || !key) {
    return "";
  }
  let result = "";
  const keyLength = key.length;
  let keyIndex = 0;

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.match(/[a-z]/i)) {
      const isUpperCase = char === char.toUpperCase();
      const base = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
      const charCode = char.charCodeAt(0);
      const keyChar = key[keyIndex % keyLength];
      const keyCharCode =
        keyChar.toLowerCase().charCodeAt(0) - "a".charCodeAt(0);
      const shiftedCharCode =
        ((((charCode - base - keyCharCode + 26) % 26) + 26) % 26) + base;
      char = String.fromCharCode(shiftedCharCode);
      keyIndex++;
    }
    result += char;
  }
  return result;
}
