import React,{useState}from 'react'

function FunctionalComponent() {
    const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={
        () =>setCount(count+1)
        }>
            Count {count}
        </button>
    </div>
  )
}

export default FunctionalComponent
//rules of hooks
//only call hooks at the top level
// don't call Hooks inside loops,conditions or nested functions
// Only call hooks from react functions
// Call them from within react functioal components and not 
// just any regular javascript functions
