import React, {Component} from 'react'
import { getTransaction } from '../../redux/actions'
import { connect } from 'react-redux'

class Transaclist extends Component{
  constructor(props){
    super(props)

    this.state = {
      compte : this.props.accounts[0],
      transactions: []
    }
  }

  handleChange = (e) => {
    this.setState({ compte: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    compte = this.state.compte
    this.setState({transactions: this.props.getTransaction(compte.id)})
  }

  render(){
    const compteList = this.props.accounts.map((account) => (
      <option value={account} key={account.id}>Compte de {account.user.nom}</option>
    ))
    return(
      <div className='container'>
        <form>
          <label htmlFor='compte'>Aficher la liste des transactions du compte</label>
          <select
            id='compte'
            name='compte'
            value={this.state.compte}
            onChange={this.handleChange}
          >
            {compteList}
          </select>
          <button type="submit">Afficher</button>
        </form>

        <hr />

        <ul>
          {this.state.transactions}
        </ul>
      </div>
    )
  }
}

connect(null, {getTransaction: getTransaction})(Transaclist)