import React, { Component } from 'react'
import ChildCompoent from './ChildCompoent'
//methods as props
export class ParenComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
  render() {
    return (
      <div>
        <ChildCompoent greetHandler= {this.greetParent}/>
      </div>
    )
  }
}

export default ParenComponent
