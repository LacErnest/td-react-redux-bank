import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component{

  render(){
    return(
      <div>
        <Link to="/">Utilisateurs</Link>
        <Link to="/comptes">Comptes</Link>
        <Link to="/transactions">Transactions</Link>
      </div>
    )
  }
}

export default Menu