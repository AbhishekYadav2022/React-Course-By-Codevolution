import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }

      this.greetParent = this.greetParent.bind(this)
    }

    greetParent() {
        alert(`Hello ${this.state.parentName}`)
    }

  render() {
    return (
      <div>
        <hr/>
        <ChildComponent greetParent={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent