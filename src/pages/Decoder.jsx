// src/pages/Decoder.jsx
import React, { useState } from "react";
import InputBox from "../components/InputBox";
import ResultBox from "../components/ResultBox";
import Button from "../components/Button";
import EncodingMenu from "../components/EncodingMenu";
import KeyInput from "../components/KeyInput";
import {
  encodeCaesarCipher,
  decodeCaesarCipher,
} from "../utils/encoders/cipher";
import {
  encodeSubstitutionCipher,
  decodeSubstitutionCipher,
} from "../utils/encoders/substitution";
import {
  encodeVigenereCipher,
  decodeVigenereCipher,
} from "../utils/encoders/vigenere";
import {
  encodeTranspositionCipher,
  decodeTranspositionCipher,
} from "../utils/encoders/transposition";
import {
  encodeAtbashCipher,
  decodeAtbashCipher,
} from "../utils/encoders/atbash";
import {
  encodeRailFenceCipher,
  decodeRailFenceCipher,
} from "../utils/encoders/railfence"; // Import Rail Fence functions
import { encodeMorse, decodeMorse } from "../utils/encoders/morse"; // Importar funções de Morse

function Decoder() {
  const [inputText, setInputText] = useState("");
  const [key, setKey] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("caesar");
  const [resultText, setResultText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value);
  };

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  const handleEncode = () => {
    if (selectedMethod === "caesar") {
      const encoded = encodeCaesarCipher(inputText, key);
      setResultText(encoded);
    } else if (selectedMethod === "substitution") {
      const encoded = encodeSubstitutionCipher(inputText, key);
      setResultText(encoded);
    } else if (selectedMethod === "vigenere") {
      const encoded = encodeVigenereCipher(inputText, key);
      setResultText(encoded);
    } else if (selectedMethod === "transposition") {
      const encoded = encodeTranspositionCipher(inputText, key);
      setResultText(encoded);
    } else if (selectedMethod === "atbash") {
      const encoded = encodeAtbashCipher(inputText);
      setResultText(encoded);
    } else if (selectedMethod === "railfence") {
      const encoded = encodeRailFenceCipher(inputText, parseInt(key, 10));
      setResultText(encoded);
    } else if (selectedMethod === "morse") {
      // Adicionado para Morse
      const encoded = encodeMorse(inputText);
      setResultText(encoded);
    }
  };

  const handleDecode = () => {
    if (selectedMethod === "caesar") {
      const decoded = decodeCaesarCipher(inputText, key);
      setResultText(decoded);
    } else if (selectedMethod === "substitution") {
      const decoded = decodeSubstitutionCipher(inputText, key);
      setResultText(decoded);
    } else if (selectedMethod === "vigenere") {
      const decoded = decodeVigenereCipher(inputText, key);
      setResultText(decoded);
    } else if (selectedMethod === "transposition") {
      const decoded = decodeTranspositionCipher(inputText, key);
      setResultText(decoded);
    } else if (selectedMethod === "atbash") {
      const decoded = decodeAtbashCipher(inputText);
      setResultText(decoded);
    } else if (selectedMethod === "railfence") {
      const decoded = decodeRailFenceCipher(inputText, parseInt(key, 10));
      setResultText(decoded);
    } else if (selectedMethod === "morse") {
      // Adicionado para Morse
      const decoded = decodeMorse(inputText);
      setResultText(decoded);
    }
  };

  return (
    <div>
      <h2>Decodificador de Texto</h2>
      <InputBox value={inputText} onChange={handleInputChange} />
      <EncodingMenu
        onMethodChange={handleMethodChange}
        selectedMethod={selectedMethod}
        methods={[
          "caesar",
          "substitution",
          "vigenere",
          "transposition",
          "atbash",
          "railfence", // Adicionando Rail Fence
          "morse", // Adicionando Morse
        ]}
      />
      <KeyInput
        value={key}
        onChange={handleKeyChange}
        selectedMethod={selectedMethod}
      />
      <Button onClick={handleEncode}>Codificar</Button>
      <Button onClick={handleDecode}>Decodificar</Button>
      <ResultBox result={resultText} />
    </div>
  );
}

export default Decoder;
