import { ADD_ACCOUNT, ADD_TRANSACTION, ADD_USER, GET_ACCOUNTS, GET_USERS, GET_TRANSACTIONS, ADD_TRANSACTION_VIREMENT, EDIT_ACCOUNT } from "../types";

export function addAccount(user, balance){
  return {type: ADD_ACCOUNT, user, balance}
}

export function editAccount(id, balance, cash_flow){
  return {type: EDIT_ACCOUNT, id, balance, cash_flow}
}

export function addUser(nom, prenom, age, sex) {
  return { type: ADD_USER, nom, prenom, age, sex }
}

export function addTransaction(compte, amount, cash_flow){
  return { type: ADD_TRANSACTION, compte, amount, cash_flow }
}

export function addTransactionVirement(compte_deb, compte_cred, amount, date) {
  return { type: ADD_TRANSACTION_VIREMENT, compte_deb, compte_cred, amount, date }
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