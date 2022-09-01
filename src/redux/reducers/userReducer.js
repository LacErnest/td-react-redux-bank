import { ADD_USER, GET_USERS } from "../types";


//User {id, nom, prenom, age, sex}
function userReducer(users = [], action){
  switch(action.type){
    case ADD_USER:
      return [
        ...users,
        {
          id: users.length+1,
          nom: action.nom,
          prenom: action.prenom,
          age: action.age,
          sex: action.sex
        }
      ]
    case GET_USERS:
      return users
    default:
      return users
  }
}

export default userReducer