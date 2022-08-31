import React, { Component } from "react";
import { addAccount, getUser } from "../../redux/actions";
import { connect } from "react-redux";


//Account {user, balance}

class AccountForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      balance: 0
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let { user, balance } = this.state
    
    this.props.addAccount(user_, balance)
  }


  render() {
    const userList = this.props.users.map((map) => (
      <option value={user} key={user.id}>{user.prenom} {user.nom}</option>
    ))
    return (
      <div className="container">
        <h3>Ajouter un nouveau compte</h3>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="user">User</label>
          <select
            id="user"
            name="user"
            value={this.state.user}
            onChange={this.handleChange}
          >
            {userList}
          </select>
          <label htmlFor="balance">Balance</label>
          <input
            id="balance"
            type="numeric"
            name="balance"
            value={this.state.balance}
            onChange={this.handleChange}
          />
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addUser: addUser })(AccountForm)