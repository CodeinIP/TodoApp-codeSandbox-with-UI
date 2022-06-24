import React, { useState } from "react";
import "../styles.css";
export const Input = () => {
  const [text, setText] = useState("");
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleClear = () => {
    setText("");
  };
  return (
    <div className="App">
      <input
        className="textInput"
        onChange={handleText}
        value={text}
        placeholder="Enter text..."
      />
      <button className="clearBtn" onClick={handleClear}>
        Clear
      </button>
      <h1 className="textShow"> Text:-{text} </h1>
    </div>
  );
};
