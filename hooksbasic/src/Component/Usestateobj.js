import React, { useState } from 'react'

function Usestateobj() {
    const [name,setName] = useState({firstName:'',lastName:''})
  return (
    <div>
      <form>
        {/* <input type='text' value={name.firstName}
            onChange={e => setName({firstName: e.target.value})}/>
        <input type='text' value={name.lastName}
            onChange={e => setName({lastName: e.target.value})}/>
        <h2>Your first Name is {name.firstName}</h2>
        <h2>Your last Name is {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2> */}
        {/* in above scenario when firstname is typing lastname value disappear's 
        same way lastname is typing firstname value disappears because 
        useState doesn't merge and update the object to handle above
         issue merge manually*/}

        <input type='text' value={name.firstName}
            onChange={e => setName({...name,firstName: e.target.value})}/>
        <input type='text' value={name.lastName}
            onChange={e => setName({...name,lastName: e.target.value})}/>
        <h2>Your first Name is {name.firstName}</h2>
        <h2>Your last Name is {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  )
}

export default Usestateobj
