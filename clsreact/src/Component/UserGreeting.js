import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    


  render() {
    // if(this.state.isLoggedIn){
    //     return <div> Welcome User</div>      
    // }else{
    //    return <div>Welcome Guest</div>
    // }
    //adding if/else within the jsx is not valid
    // return (
    //   <div>
    //     <div> Welcome User</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
    // let message 
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome User</div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>
    // return  this.state.isLoggedIn ?
    //    (<div>welcome User</div>) :
    //     (<div>welcome Guest</div>)

    return this.state.isLoggedIn && <div>welcome User</div>
    
  }
}

export default UserGreeting
