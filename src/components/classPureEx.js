import React, { Component, PureComponent } from 'react'

export default class classPureEx extends PureComponent {

    constructor(){
        super();
        this.state={
            count:2
        }

    }
  render() {
    return (
      <div>{this.state.count = this.state.count+2}</div>
    )
  }
}
