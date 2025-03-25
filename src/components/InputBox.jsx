import React from "react";

function InputBox({ value, onChange }) {
  return (
    <div>
      <label htmlFor="inputText">Texto:</label>
      <textarea id="inputText" value={value} onChange={onChange} />
    </div>
  );
}

export default InputBox;
