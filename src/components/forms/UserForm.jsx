import React, {Component} from "react";
import { addUser } from "../../redux/actions";
import { connect } from "react-redux";


//User {id, nom, prenom, age, sex}

class UserForm extends Component{
  constructor(props){
    super(props)

    this.state = {
      nom: '',
      prenom: '',
      age: 0,
      sex: 'F'
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let {nom, prenom, age, sex} = this.state

    this.props.addUser(nom, prenom, age, sex)
  }


  render(){
    return(
      <div className="container">
        <h3>Ajouter un nouvel utilisateur</h3>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="nom">Nom</label>
          <input
            id="nom" 
            type="text"
            name="nom"
            value={this.state.nom}
            onChange={this.handleChange}
          />
          <label htmlFor="prenom">Prenom</label>
          <input
            id="prenom"
            type="text"
            name="prenom"
            value={this.state.prenom}
            onChange={this.handleChange}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="numeric"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <label htmlFor="sex">Sexe</label>
          <select
          id="sex"
          name="sex"
          value={this.state.sex}
          onChange={this.handleChange}
          >
            <option key="1" value="M">M</option>
            <option key="2" value="F">F</option>
          </select>

          <button type="submit">Enregistrer</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {addUser: addUser})(UserForm)