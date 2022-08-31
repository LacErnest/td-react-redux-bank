import { ADD_ACCOUNT, ADD_TRANSACTION, ADD_USER, GET_ACCOUNTS, GET_USERS, GET_TRANSACTIONS, ADD_TRANSACTION_VIREMENT } from "../types";

export function addAccount(id, user, balance){
  return {type: ADD_ACCOUNT, id, user, balance}
}

export function addUser(id, nom, prenom, age, sex) {
  return { type: ADD_USER, id, nom, prenom, age, sex }
}

export function addTransaction(id, compte, amount, date, cash_flow){
  return { type: ADD_TRANSACTION, id, compte, amount, date, cash_flow }
}

export function addTransactionVirement(id, compte_a, compte_b, amount, date, cash_flow) {
  return { type: ADD_TRANSACTION_VIREMENT, id, compte_a, compte_b, amount, date, cash_flow }
}

export function getUser(){
  return {type: GET_USERS}
}

export function getAccount() {
  return { type: GET_ACCOUNTS }
}

export function getTransaction(id){
  return {type: GET_TRANSACTIONS, id}
}