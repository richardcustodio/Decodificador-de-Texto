function EncodingMenu({ onMethodChange, selectedMethod }) {
  return (
    <div>
      <label htmlFor="encodingMethod">Método:</label>
      <select
        id="encodingMethod"
        value={selectedMethod}
        onChange={onMethodChange}
      >
        <option value="caesar">Cifra de César</option>
        <option value="substitution">Cifra de Substituição</option>
        <option value="vigenere">Cifra de Vigenère</option>
        <option value="transposition">Cifra de Transposição</option>
        <option value="atbash">Cifra de Atbash</option>
        <option value="railfence">Cifra de Rail Fence</option>
        <option value="morse">Código Morse</option> {/* Adicionado */}
      </select>
    </div>
  );
}

export default EncodingMenu;
