// src/utils/encoders/railfence.js

export function encodeRailFenceCipher(text, rails) {
  if (!text || rails <= 1) {
    return text;
  }

  const fence = Array(rails)
    .fill("")
    .map(() => []);
  let rail = 0;
  let direction = 1; // 1 for down, -1 for up

  for (const char of text) {
    fence[rail].push(char);
    rail += direction;

    if (rail === rails - 1) {
      direction = -1;
    } else if (rail === 0) {
      direction = 1;
    }
  }

  return fence.flat().join("");
}

export function decodeRailFenceCipher(encodedText, rails) {
  if (!encodedText || rails <= 1) {
    return encodedText;
  }

  const fence = Array(rails)
    .fill("")
    .map(() => Array(encodedText.length));
  let rail = 0;
  let direction = 1;
  const pattern = Array(encodedText.length);
  let patternIndex = 0;

  // Create the zigzag pattern to mark where letters go
  for (let i = 0; i < encodedText.length; i++) {
    fence[rail][i] = "*"; // Mark the position
    if (rail === rails - 1) {
      direction = -1;
    } else if (rail === 0) {
      direction = 1;
    }
    rail += direction;
  }

  // Fill the pattern array with the indices of the encoded text
  for (let i = 0; i < rails; i++) {
    for (let j = 0; j < encodedText.length; j++) {
      if (fence[i][j] === "*") {
        pattern[patternIndex++] = j;
      }
    }
  }

  const decodedArray = Array(encodedText.length);
  for (let i = 0; i < encodedText.length; i++) {
    decodedArray[pattern[i]] = encodedText[i];
  }

  return decodedArray.join("");
}
