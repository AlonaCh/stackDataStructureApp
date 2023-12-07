import { useState } from 'react'


function App() {
  const [stack, setStack] = useState([])
  //.push() and .pop() methods
  function push() {

  }

  function pop() {

  }

  return (
    <>
      <div className="container">
        <div className="inputValue">
          <h1>Stack App</h1>
          <button onClick={push}>Add</button>
          <button onClick={pop}>Remove</button>
          <div className={stack.length < 0 ? "red-like material-symbols-outlined" : "black-like material-symbols-outlined"}>

          </div>
        </div>
      </div>



    </>
  )
}

export default App

