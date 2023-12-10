import { useState } from 'react'


function App() {
  const [stack, setStack] = useState([])
  //.push() and .pop() methods
  function push() {
    let newStack = [...stack];
    let newItem = stack.length;
    newStack.push(newItem);
    setStack(newStack);
  }

  function pop() {
    let newStack = [...stack];
    newStack.pop();
    setStack(newStack);
  }

  return (
    <>
      <div className="container">
        <h1>Stack App</h1>
        <button onClick={push}>Add</button>
        <button onClick={pop}>Remove</button>
        <div className='inputContainer'>
          {stack.length < 0 ? <p>It is not a stack!</p> : stack.map((element) => <span key={element} className="hearts material-symbols-outlined" > heart_plus</span>)}
        </div>
      </div>
    </>
  )
}

export default App

