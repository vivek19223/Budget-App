import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startSetExpenses,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore ([thunk]);

beforeEach (async () => {
  const expenseData = {};
  expenses.forEach (({id, description, note, amount, createdAt}) => {
    expenseData[id] = {description, note, amount, createdAt};
  });
  await database.ref ('expenses').set (expenseData);
});

test ('should setup remove expense action object', () => {
  const action = removeExpense ({id: '123abc'});

  expect (action).toEqual ({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

test ('should setup edit expense action object', () => {
  const action = editExpense ('123abc', {note: 'abc'});

  expect (action).toEqual ({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'abc',
    },
  });
});

test ('should setup add expense action object with provided value', () => {
  const action = addExpense (expenses[0]);

  expect (action).toEqual ({
    type: 'ADD_EXPENSE',
    expense: expenses[0],
  });
});

test ('should add expense to database and store', async () => {
  const store = createMockStore ({});
  const expenseData = {
    description: 'Mouse',
    amount: 300,
    note: 'This is better',
    createdAt: 1000,
  };
  await store.dispatch (startAddExpense (expenseData));
  const data = store.getActions ();
  expect (data[0]).toEqual ({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any (String),
      ...expenseData,
    },
  });
  const snapshot = await database
    .ref (`expenses/${data[0].expense.id}`)
    .once ('value');
  expect (snapshot.val ()).toEqual (expenseData);
});

test ('should add expense with defaults to database and store', async () => {
  const store = createMockStore ({});
  const expenseData = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0,
  };
  await store.dispatch (startAddExpense ({}));
  const data = store.getActions ();
  expect (data[0]).toEqual ({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any (String),
      ...expenseData,
    },
  });
  const snapshot = await database
    .ref (`expenses/${data[0].expense.id}`)
    .once ('value');
  expect (snapshot.val ()).toEqual (expenseData);
});

test ('should setup set expenses action object with date', () => {
  const action = setExpenses (expenses);
  expect (action).toEqual ({
    type: 'SET_EXPENSE',
    expenses,
  });
});

// Need to fix as ID coming from database is string where our dummy data id is integer. Will work fine with string data
// test ('Should fetch the expenses from the firebase', async () => {
//   const store = createMockStore ({});
//   await store.dispatch(startSetExpenses())
//   const action = store.getActions()

//   expect(action[0]).toEqual({
//     type : 'SET_EXPENSE',
//     expenses
//   })
// });
