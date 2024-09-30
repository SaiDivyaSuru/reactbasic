import React from 'react'

function ChildCompoent(props) {
  return (
    <div>
      <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildCompoent