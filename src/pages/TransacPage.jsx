import React, { Component } from 'react'
import TransacForm from '../components/forms/TransacForm'
import TransacList from '../components/lists/TransacList'

class TransacPage extends Component {


  render() {
    return (
      <div>
        <TransacForm />
        <hr/>
        <TransacList />
      </div>
    )
  }
}

export default TransacPage