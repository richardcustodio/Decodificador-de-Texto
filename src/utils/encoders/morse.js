const morseCodeMap = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  " ": "/",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
};

const reverseMorseCodeMap = Object.fromEntries(
  Object.entries(morseCodeMap).map(([letter, code]) => [code, letter])
);

export function encodeMorse(text) {
  return text
    .toUpperCase()
    .split("")
    .map((char) => morseCodeMap[char] || "")
    .join(" ");
}

export function decodeMorse(morse) {
  return morse
    .split(" ")
    .map((code) => reverseMorseCodeMap[code] || "")
    .join("");
}
