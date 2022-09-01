import React, { Component } from "react";
import { addTransaction, addTransactionVirement, getTransaction } from "../../redux/actions";
import { connect } from "react-redux";


//Transaction {compte, amount, cash_flow}

class TransacForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      compte_cred: {},
      compte_deb: {},
      amount: 0,
      cash_flow: 'IN',
      type: 'Depot'
    }
  }

  handleChange = (e) => {
    if(e.target.name == 'compte_cred'){
      console.log("target name", e.target.name)
      console.log("target value", e.target.value)
      this.setState({ compte_cred: JSON.parse(e.target.value)})
      console.log(this.state)
    } else if (e.target.name == 'compte_deb'){
      console.log("target name", e.target.name)
      console.log("target value", e.target.value)
      this.setState({ compte_deb: JSON.parse(e.target.value) })
      console.log(this.state)
   }else{
      this.setState({ [e.target.name]: e.target.value })
      console.log(this.state)
   }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let { compte_cred, compte_deb, amount, cash_flow, type} = this.state
    let {id_cred, user_cred, balance_cred} = compte_cred
    let { id_deb, user_deb, balance_deb } = compte_deb
    console.log(this.state)
    if(this.state.type == 'Virement'){
        console.log(id_cred != id_deb)
        if(id_cred != id_deb){
          this.props.addTransactionVirement({ id_deb, user_deb, balance_deb }, { id_cred, user_cred, balance_cred }, amount, Date.now())
          this.props.addTransaction({ id_cred, user_cred, balance_cred }, amount, 'IN')
          this.props.addTransaction({ id_deb, user_deb, balance_deb }, amount, 'OUT')
        }
    }else{
      this.props.addTransaction({ id_cred, user_cred, balance_cred }, amount, cash_flow)
    }
  }


  render() {
    console.log(this.props.accounts)
    const compteList = this.props.accounts.map((account) => (
      <option value={JSON.stringify(account)} key={account.id}>Compte de {account.user.nom}</option>
    ))
    return (
      <div className="container">
        <h3>Ajouter une transaction</h3>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="compte_deb">Compte Debiteur</label>
          <select
            id="compte_deb"
            name="compte_deb"
            value={this.state.value}
            onChange={this.handleChange}
          >
            {compteList}
          </select>
          <label htmlFor="compte_cred">Compte Crediteur</label>
          <select
            id="compte_cred"
            name="compte_cred"
            value={this.state.value}
            onChange={this.handleChange}
          >
            {compteList}
          </select>
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="numeric"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />
          <label htmlFor="cash_flow">Cash Flow</label>
          <select 
            id="cash_flow"
            name="cash_flow"
            value={this.state.cash_flow}
            onChange={this.handleChange}
          >
            <option key="1" value="IN">IN</option>
            <option key="2" value="OUT">OUT</option>
          </select>
          <label htmlFor="type">TYPE</label>
          <select
            id="type"
            name="type"
            value={this.state.type}
            onChange={this.handleChange}
          >
            <option key="1" value="Depot">Depot</option>
            <option key="2" value="Retrait">Retrait</option>
            <option key="3" value="Virement">Virement</option>
          </select>
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    )
  }
}

const mapStateToprops = (state) => ({
  accounts: state.accounts
})

export default connect(mapStateToprops, { addTransaction: addTransaction, addTransactionVirement: addTransactionVirement})(TransacForm)