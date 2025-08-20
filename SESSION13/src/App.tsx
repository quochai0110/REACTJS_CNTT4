import React, { Component } from 'react'
import Parent from './components/Parent'
import State from './components/State'
import Event from './components/Event'

export default class App extends Component {
  render() {
    return (
      <div>
        <Parent></Parent>
        <State></State>
        <hr />
        <Event></Event>
      </div>
    )
  }
}
