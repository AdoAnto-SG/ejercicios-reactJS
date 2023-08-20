import React, { useState } from "react";

function ContadorSimple() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div id="contContador">
      <h1>Contador simple</h1>
      <h1>{count}</h1>
      <div className="buttons">
        <button onClick={handleIncrement}>Aumentar</button>
        <button onClick={handleDecrement}>Disminuir</button>
      </div>
    </div>
  );
}

export default ContadorSimple;
