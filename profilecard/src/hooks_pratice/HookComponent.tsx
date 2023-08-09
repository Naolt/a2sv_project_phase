import React, { useState, useRef, useEffect } from "react";
import "../App.css";

const HookComponent: React.FC = () => {
  const [counter, setCounter] = useState(0);

  // Create a ref to the button element
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Use useEffect to update the document title whenever counter changes
  useEffect(() => {
    document.title = counter.toString();
  }, [counter]);

  // Increases the counter by 1
  const handleAdd = () => {
    setCounter(counter + 1);
  };

  // Decreases the counter by 1
  const handleSub = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="button_container">
      <button ref={buttonRef} className="button" onClick={() => handleSub()}>
        -
      </button>
      <button ref={buttonRef} className="button" onClick={() => handleAdd()}>
        +
      </button>
    </div>
  );
};

export default HookComponent;
