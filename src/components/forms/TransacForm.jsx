import React, { Component } from "react";
import { addTransaction, addTransactionVirement, getTransaction } from "../../redux/actions";
import { connect } from "react-redux";


//Transaction {compte, amount, cash_flow}

class TransacForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      compte_cred: this.props.accounts[0],
      compte_deb: this.props.accounts[0],
      amount: 0,
      cash_flow: 'IN',
      type: 'Depot'
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let { compte_cred, compte_deb, amount, cash_flow, type} = this.state
    console.log(this.state)
    if(type == 'Virement'){
        if(compte_cred.id != compte_deb.id){
          this.addTransactionVirement(compte_deb, compte_cred, amount, Date.now())
          this.addTransaction(compte_cred, amount, 'IN')
          this.addTransaction(compte_deb, amount, 'OUT')
        }
    }else{
      this.props.addTransaction(compte_cred, amount, cash_flow)
    }
  }


  render() {
    const compteList = this.props.accounts.map((account) => (
      <option value={account} key={account.id}>Compte de {account.user.nom}</option>
    ))
    return (
      <div className="container">
        <h3>Ajouter une transaction</h3>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="compte_deb">Compte Debiteur</label>
          <select
            id="compte_deb"
            name="compte_deb"
            value={this.state.compte_deb}
            onChange={this.handleChange}
          >
            {compteList}
          </select>
          <label htmlFor="compte_cred">Compte Crediteur</label>
          <select
            id="compte_cred"
            name="compte_cred"
            value={this.state.compte_cred}
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

export default connect(null, { addTransaction: addTransaction })(TransacForm)