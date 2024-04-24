import React, { useState } from 'react'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)

  const decrementar = () => {
    setContador(contador - 1)
  }

  const incrementar = () => {
    setContador(contador + 0.1)
  }
  return (
    <div>
      <button className="botao-subtracao" onClick={decrementar}>-</button>
      <span>{contador}</span>
      <button className="botao-adicao" onClick={incrementar}>+</button>

    </div>
  )
}

export default App