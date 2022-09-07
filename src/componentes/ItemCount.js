
import React, { useState } from 'react';


function Contador() {
  
    const [count, setCount]= useState(1)
  
  return (
    <div>
      <p>El contador esta en {count} item</p>
      <button className="botones" onClick={() => setCount(count + 1)}>
       +
      </button>
      <button className="botones" onClick={() => setCount(count - 1)}>
       -
      </button>
      <button className='carrito'>Agregar al Carrito</button>
    </div>
  );
}
export default Contador;