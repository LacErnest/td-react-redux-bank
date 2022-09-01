import React, {Component} from 'react'
import { getTransaction } from '../../redux/actions'
import { connect } from 'react-redux'

class Transaclist extends Component{
  constructor(props){
    super(props)

    this.state = {
      compte : [],
      transactions: []
    }
  }

  handleChange = (e) => {
    this.setState({ compte: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let compte = this.state.compte
    let compte_obj = JSON.parse(compte)
    console.log("compte recherché", compte_obj)
    console.log("les transactions", this.props.getTransaction(compte_obj.id))
    this.props.getTransaction(compte_obj.id)
    this.setState({transactions: this.props.transactions})
    console.log("les transactions du compte", this.state.transactions)
  }

  render(){
    console.log(this.props.accounts)
    const compteList = this.props.accounts.map((account) => (
      <option value={JSON.stringify(account)} key={account.id}>Compte de {account.user.nom}</option>
    ))
    const transacList = this.props.transactions.map((transac) => (
      <li value={JSON.stringify(transac)} key={transac.id}>Transaction du {transac.date}</li>
    ))
    return(
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='compte'>Aficher la liste des transactions du compte</label>
          <select
            id='compte'
            name='compte'
            onChange={this.handleChange}
          >
            {compteList}
          </select>
          <button type="submit">Afficher</button>
        </form>

        <hr />

        <ul>
          {transacList}
        </ul>
      </div>
    )
  }
}

const mapStateToprops = (state) =>({
  accounts: state.accounts,
  transactions: state.transactions
})

export default connect(mapStateToprops, {getTransaction: getTransaction})(Transaclist)