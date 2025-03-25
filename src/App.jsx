import React, { useState } from "react";
import Decoder from "./pages/Decoder";
import "./index.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme} app-with-background`}>
      <button onClick={toggleTheme}>Alternar Tema</button>
      <Decoder />
    </div>
  );
}

export default App;
