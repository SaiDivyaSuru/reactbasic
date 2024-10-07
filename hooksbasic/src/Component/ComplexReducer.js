import React ,{useReducer} from 'react'

const initialstate = {
    firstCounter:0,
    seconCounter:10
}
const reducer = (state,action) =>{
    switch(action.type){
        case 'increment':
            return {...state,firstCounter:state.firstCounter+action.value}
        case 'decrement':
            return {...state,firstCounter:state.firstCounter -action.value }
        case 'reset':
            return initialstate
        case 'increment2':
            return {...state,seconCounter:state.seconCounter+action.value}
        case 'decrement2':
            return {...state,seconCounter:state.seconCounter -action.value }
        default:
            return state
    }
}

function ComplexReducer() {
    const [count,dispatch] = useReducer(reducer,initialstate)
  return (
    <div>
      <div>Count - {count.firstCounter}</div>
      <div> seconCounter Count - {count.seconCounter}</div>
      <button onClick={()=> dispatch({type:'increment',value:1})}>Increment</button>
      <button onClick={()=> dispatch({type:'decrement',value:1})}>Decrement</button>
      <button onClick={()=> dispatch({type:'reset'})}>Reset</button>
      <button onClick={()=> dispatch({type:'increment',value:5})}>Increment 5</button>
      <button onClick={()=> dispatch({type:'decrement',value:5})}>Decrement 5</button>
      <button onClick={()=> dispatch({type:'increment2',value:2})}>Increment2</button>
      <button onClick={()=> dispatch({type:'decrement2',value:2})}>Decrement2</button>
    </div>
  )
}

export default ComplexReducer