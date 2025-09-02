import { useState } from "react"

function App() {
  const [name, setName] = useState('')
  const [contador, setContador] = useState(0)

  function addMais1() {
    setContador(contador + 1)

    console.log('Cliquei', contador)
  }

  function inputName(event) {
    setName(event.target.value)
  }

  function selectName(event) {
     setName(event.target.value)
  }

  return (
    <>
      <hr />
      {contador}
      <button onClick={addMais1}>
        Incrementar
      </button>
      <hr />
      {name} <br />
      <input type="text" onChange={inputName} />
      <hr />
      <select onChange={selectName}>
        <option value=""></option>
        <option value="Ketlyn">Ketlyn</option>
        <option value="Jonathan">Jonathan</option>
      </select>
    </>
  )
}

export default App
