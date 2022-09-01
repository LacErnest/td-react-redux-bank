import React, { Component } from "react";
import { addAccount, getUser } from "../../redux/actions";
import { connect } from "react-redux";


//Account {user, balance}

class AccountForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {},
      balance: 0
    }
  }

  componentDidMount(){
    console.log("users", this.props.users)
  }

  handleChange = (e) => {
    console.log("target name", e.target.name)
    console.log("target value", e.target.value)
    if (e.target.name== 'user'){
      let {id, nom, prenom, age, sex} = JSON.parse(e.target.value)
      this.setState({ user: { id, nom, prenom, age, sex } })
    }else{
      this.setState({ [e.target.name]: e.target.value })
    }
    
    console.log("state", this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let { user, balance } = this.state
    
    let {id, nom, prenom, age, sex} = user

    console.log({ id, nom, prenom, age, sex })
    console.log(user)
    this.props.addAccount({ id, nom, prenom, age, sex }, balance)
  }


  render() {
    console.log("users", this.props.users)
    const userList = this.props.users.map((user) => (
      <option value={JSON.stringify(user)} key={user.id}>{user.prenom} {user.nom}</option>
    ))
    return (
      <div className="container">
        <h3>Ajouter un nouveau compte</h3>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="user">User</label>
          <select
            id="user"
            name="user"
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

const mapStateToprops = (state) => ({
  users: state.users
})

export default connect(mapStateToprops, { addAccount: addAccount })(AccountForm)