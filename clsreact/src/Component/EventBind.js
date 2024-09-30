import React, { Component } from 'react'
//Binding Event Handlers
class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
    //   this.clickHandler = this.clickHandler.bind(this)
    }
    
    // clickHandler(){
    //     this.setState({
    //         message:'GoodBye'
    //     })
    //     console.log(this)
    // }

    clickHandler=()=>{
        this.setState({
            message:'GoodBye'
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*Approach 1 <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/*Approach 2 Arrow function
         <button onClick={()=> this.clickHandler()}>Click</button> */}
        {/* Approach3 binding in constructor */}
          <button onClick={this.clickHandler}>Click</button> 
          {/* the above line is used for binding in constructor or 
          (approach 4) changing the clickHandler function into arrow function  */}
          {/* best aproach is 3 or 4 */}
      </div>
    )
  }
}

export default EventBind
