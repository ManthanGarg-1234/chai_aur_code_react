import { useState } from 'react'


function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {

    // error (assignment to constant variable)
    // counter = counter + 1
    // setCounter(counter)
    
    setCounter(counter + 1)

    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () => {
    // setCounter(counter - 1)
    
    // by below line negative count not ocmes
    setCounter((currentCounter) => Math.max(currentCounter - 1, 0))

  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add value </button>
      <br />

      <button
        onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App