import { ADD_TRANSACTION, ADD_TRANSACTION_VIREMENT, GET_TRANSACTIONS } from "../types";


//Transaction {id, compte, amount, date, cash_flow}

function transacReducer(transactions = [], action){
  switch(action.type){
    case ADD_TRANSACTION:
      return [
        ...transactions,
        {
          id: transactions.length() + 1,
          compte: action.compte,
          amount: action.amount,
          date: action.date,
          cash_flow: action.cash_flow
        }
      ]
    case ADD_TRANSACTION_VIREMENT:
      let compte_deb = action.compte_deb
      let compte_cred = action.compte_cred
      
      return [
        ...transactions,
        {
          id: transactions.length()+1,
          compte: compte_cred,
          amount: action.amount,
          date: Date.now(),
          cash_flow: "IN"
        },
        {
          id: transactions.length() + 2,
          compte: compte_deb,
          amount: action.amount,
          date: Date.now(),
          cash_flow: "OUT"
        }
      ]
    case GET_TRANSACTIONS:
      return transactions
    default:
      return transactions
  }
}

export default transacReducer




