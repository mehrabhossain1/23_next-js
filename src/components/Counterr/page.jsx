"use client";

import React, { useState } from "react";

const Counter2 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 10)}>Increase</button>
      <button onClick={() => setCounter(counter - 14)}>Decrease</button>
    </div>
  );
};

export default Counter2;
