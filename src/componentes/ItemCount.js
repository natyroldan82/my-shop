import React from 'react';
import React, { useState } from 'react';


function Contador() {
    state= {count:0}
    const [count, setCount]= useState(0)
  // Declaración de una variable de estado que llamaremos "count"  const [count, setCount] = useState(0);
  return (
    <div>
      <p>El contador esta {count} times</p>
      <button onClick={() => setCount(count + 1)}>
       +
      </button>
      <button onClick={() => setCount(count - 1)}>
       -
      </button>
    </div>
  );
}