// src/components/KeyInput.jsx
import React from "react";

function KeyInput({ value, onChange, selectedMethod }) {
  const isCaesar = selectedMethod === "caesar";
  const isVigenere = selectedMethod === "vigenere";
  const isTransposition = selectedMethod === "transposition";
  const isAtbash = selectedMethod === "atbash";
  const isSubstitution = selectedMethod === "substitution";
  const isRailFence = selectedMethod === "railfence";

  const labelText = isCaesar
    ? "Chave:"
    : isVigenere
    ? "Palavra-chave:"
    : isTransposition
    ? "Número de Colunas:"
    : isSubstitution
    ? "Alfabeto de Substituição (26 letras):"
    : isRailFence
    ? "Número de Rails:"
    : "";

  const inputType =
    isCaesar || isTransposition || isRailFence ? "number" : "text";

  const placeholderText = isCaesar
    ? ""
    : isVigenere
    ? "Ex: palavra"
    : isTransposition
    ? "Ex: 3"
    : isSubstitution
    ? "Ex: qwertyuiopasdfghjklzxcvbnm"
    : isRailFence
    ? "Ex: 3"
    : "";

  return (
    !isAtbash && (
      <div>
        <label htmlFor="keyInput">{labelText}</label>
        <input
          type={inputType}
          id="keyInput"
          value={value}
          onChange={onChange}
          placeholder={placeholderText}
          min={isRailFence ? "2" : undefined} // Ensure at least 2 rails for Rail Fence
        />
        {isSubstitution && value.length !== 26 && (
          <p style={{ color: "red", fontSize: "0.8em", marginTop: "5px" }}>
            O alfabeto de substituição deve ter 26 letras.
          </p>
        )}
        {isRailFence && isNaN(parseInt(value)) && value !== "" && (
          <p style={{ color: "red", fontSize: "0.8em", marginTop: "5px" }}>
            O número de rails deve ser um número.
          </p>
        )}
        {isRailFence &&
          parseInt(value) < 2 &&
          value !== "" &&
          !isNaN(parseInt(value)) && (
            <p style={{ color: "red", fontSize: "0.8em", marginTop: "5px" }}>
              O número de rails deve ser maior ou igual a 2.
            </p>
          )}
      </div>
    )
  );
}

export default KeyInput;
