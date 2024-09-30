import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         num:1
      }
    }

    increment(){
        // this.state.count = this.state.count+1
        // console.log(this.state.count)
        //  above code does not effect in ui as we used state.
        //never modify the state directly
        // this.setState({
        //     count:this.state.count+1
        // },
        // ()=>{
        //     console.log('CallBack Value',this.state.count
        //     // above line is after incrementing  the state    
        //     )})
        this.setState(prevState=>({
            count:prevState.count+1
        }))
        // this.setState((prevState,props)=>({
        //     count:prevState.count+ props.addValue
        // }))
        // to make use of props above 3 lines are used 
        console.log(this.state.count)
        //the above line is calling before the state is actually set
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    multiple(){
        this.setState(prevState=>({
            num:prevState.num*5
        }))
        console.log(this.state.num)
    }
  render() {
    return (
      <div>
       <div> count-{this.state.count}</div>
       <button onClick={() => this.incrementFive()}>Increment</button>
       <div> num-{this.state.num}</div>
       <button onClick={() =>this.multiple()}>multiple by 5</button>
      </div>
    )
  }
}

export default Counter
