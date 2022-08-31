import { ADD_ACCOUNT, ADD_TRANSACTION, ADD_USER, GET_ACCOUNTS, GET_USERS, GET_TRANSACTIONS, ADD_TRANSACTION_VIREMENT, EDIT_ACCOUNT } from "../types";

export function addAccount(id, user, balance){
  return {type: ADD_ACCOUNT, id, user, balance}
}

export function editAccount(id, balance, cash_flow){
  return {type: EDIT_ACCOUNT, id, balance, cash_flow}
}

export function addUser(id, nom, prenom, age, sex) {
  return { type: ADD_USER, id, nom, prenom, age, sex }
}

export function addTransaction(id, compte, amount, cash_flow){
  return { type: ADD_TRANSACTION, id, compte, amount, cash_flow }
}

export function addTransactionVirement(id, compte_deb, compte_cred, amount, date) {
  return { type: ADD_TRANSACTION_VIREMENT, id, compte_deb, compte_cred, amount, date }
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