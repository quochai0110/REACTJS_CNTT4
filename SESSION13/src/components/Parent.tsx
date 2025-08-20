import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  render() {
    return (
      <div>
        Component cha
        <Child name1="Minh Thu" age="25"></Child>
      </div>
    )
  }
}
