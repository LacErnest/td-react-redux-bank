import { ADD_ACCOUNT, EDIT_ACCOUNT, GET_ACCOUNTS } from "../types";

//Account {id, user, balance}

function accountReducer(accounts = [], action){
  switch(action.type){
    case ADD_ACCOUNT:
      return [
        ...accounts,
        {
          id: accounts.length() + 1,
          user: action.user,
          balance: action.balance
        }
      ]
    case GET_ACCOUNTS:
      return accounts
    case EDIT_ACCOUNT:
      let account = accounts.filter((account)=> account.id == action.id)
      account.balance = action.balance
      account.cash_flow = action.cash_flow
      let accounts_ = accounts.filter((account) => account.id != action.id)
      //accounts_.push(account)
      index = accounts.indexOf(account)
      accounts_.splice(index, 0, account)
      return accounts_
    default:
      return accounts
  }
}

export default accountReducer


// [a,b,c,d]  ---> b    b.data = b'.data

// [a,c,d,b']

// [a, ]