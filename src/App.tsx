
import { useState } from 'react'
import './App.css'

function App() {
 
  const [valor, setValor] = useState(0);

  return (
    <>
    <h1>Minha primeira página!</h1>
    <button onClick={() => {setValor(valor +1)}}>Adicionar</button>
    <button onClick={() => {setValor(valor -1)}}>Retirar</button>
    <button onClick={() => {setValor(0)}}>Zerar</button>  
    <h1>{valor}</h1>
    </>
  )
}

export default App
