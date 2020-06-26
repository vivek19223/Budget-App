import {v4 as uuid} from 'uuid';
import database from '../firebase/firebase';

//Create addExpense
export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = {description, note, amount, createdAt};
    return database.ref ('expenses').push (expense).then (ref => {
      dispatch (
        addExpense ({
          id: ref.key,
          ...expense,
        })
      );
    });
  };
};

//Create removeExpense
export const removeExpense = ({id}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

//Create editExpense
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

export const setExpenses = expenses => ({
  type: 'SET_EXPENSE',
  expenses,
});

export const startSetExpenses = () => {
  return dispatch => {
    const expenses = [];
    return database.ref ('expenses').once ('value').then (snapshot => {
      snapshot.forEach (childSnapshot => {
        expenses.push ({
          id: childSnapshot.key,
          ...childSnapshot.val (),
        });
      });
      dispatch (setExpenses (expenses));
    });
  };
};
